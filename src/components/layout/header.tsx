'use client';

import { JSX, useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useActiveLocale } from '@/hooks/use-active-locale';
import { getLocaleRoutePath } from '@/lib/i18n/locales';
import SITE_IDENTITY from '@/lib/site/identity';
import { BrandLogotype } from '@/components/ui/brand';
import { scrollToSection } from '@/lib/navigation/scroll-to-section';

type NavKey = 'about' | 'projects' | 'social-proof' | 'benefits' | 'credentials' | 'experience' | 'services' | 'faq';

type NavLabelKey =
	'ABOUT' | 'PROJECTS' | 'SOCIAL_PROOF' | 'BENEFITS' | 'CREDENTIALS' | 'EXPERIENCE' | 'SERVICES' | 'FAQ';

type NavItem = Readonly<{
	key: NavKey;
	sectionId: string;
	pageHref?: string;
	labelKey: NavLabelKey;
}>;

type UiNav = Readonly<{
	ARIA_PRIMARY: string;
	OPEN_MENU: string;
	CLOSE_MENU: string;
	DOWNLOAD_CV: string;
	ABOUT: string;
	PROJECTS: string;
	SOCIAL_PROOF: string;
	BENEFITS: string;
	CREDENTIALS: string;
	EXPERIENCE: string;
	SERVICES: string;
	FAQ: string;
}>;

const NAV_ITEMS: ReadonlyArray<NavItem> = [
	{ key: 'about', sectionId: 'about', pageHref: '/about', labelKey: 'ABOUT' },
	{ key: 'projects', sectionId: 'projects', pageHref: '/projects', labelKey: 'PROJECTS' },
	{ key: 'social-proof', sectionId: 'social-proof', labelKey: 'SOCIAL_PROOF' },
	{ key: 'benefits', sectionId: 'benefits', labelKey: 'BENEFITS' },
	{ key: 'credentials', sectionId: 'credentials', labelKey: 'CREDENTIALS' },
	{ key: 'experience', sectionId: 'experience', labelKey: 'EXPERIENCE' },
	{ key: 'services', sectionId: 'services', labelKey: 'SERVICES' },
	{ key: 'faq', sectionId: 'faq', labelKey: 'FAQ' },
];

const SECTION_IDS = NAV_ITEMS.map((i) => i.sectionId);
const HEADER_OFFSET = 96;

function getCvHref(locale: 'en-US' | 'pt-BR'): string {
	return locale === 'pt-BR' ? '/documents/CV-Thiago-Saud.pt-BR.pdf' : '/documents/CV-Thiago-Saud.en-US.pdf';
}

function getCvFilename(locale: 'en-US' | 'pt-BR'): string {
	return locale === 'pt-BR' ? 'CV-Thiago-Saud-pt-BR.pdf' : 'CV-Thiago-Saud-en-US.pdf';
}

function normalizePath(pathname: string | null): string {
	return (pathname || '/').replace(/\/$/, '') || '/';
}

function isHomePath(pathname: string | null): boolean {
	const p = normalizePath(pathname);
	return p === '/' || p === '/pt-BR';
}

function isAboutPath(pathname: string, prefix: string): boolean {
	const p = normalizePath(pathname);
	return p === `${prefix}/about` || p.endsWith('/about');
}

function isProjectsPath(pathname: string, prefix: string): boolean {
	const p = normalizePath(pathname);
	if (prefix) {
		return p === `${prefix}/projects` || p.startsWith(`${prefix}/projects/`);
	}
	return p === '/projects' || p.startsWith('/projects/');
}

function sectionFromScroll(marker = HEADER_OFFSET): string {
	let current = '';
	for (const id of SECTION_IDS) {
		const el = document.getElementById(id);
		if (!el) continue;
		if (el.getBoundingClientRect().top <= marker) {
			current = id;
		}
	}
	return current;
}

function sectionFromHash(): string {
	const hash = window.location.hash.replace(/^#/, '');
	if (!hash || !SECTION_IDS.includes(hash)) return '';

	const el = document.getElementById(hash);
	if (!el) return '';

	const rect = el.getBoundingClientRect();
	const inBand = rect.top <= HEADER_OFFSET + 160 && rect.bottom > HEADER_OFFSET;
	return inBand ? hash : '';
}

function resolveSpySection(lockId: string | null): string {
	if (lockId) return lockId;
	return sectionFromHash() || sectionFromScroll(HEADER_OFFSET);
}

function resolveActiveAfterLock(fallbackId: string): string {
	const hash = window.location.hash.replace(/^#/, '');
	if (hash && SECTION_IDS.includes(hash)) return hash;
	return sectionFromScroll(HEADER_OFFSET) || fallbackId;
}

function isNavItemActive(
	item: NavItem,
	opts: Readonly<{
		pathname: string;
		prefix: string;
		isHome: boolean;
		activeSection: string;
	}>
): boolean {
	const { pathname, prefix, isHome, activeSection } = opts;
	if (isHome) return activeSection === item.sectionId;
	if (item.key === 'about') return isAboutPath(pathname, prefix);
	if (item.key === 'projects') return isProjectsPath(pathname, prefix);
	return false;
}

function resolveNavHref(item: NavItem, opts: Readonly<{ prefix: string; isHome: boolean }>): Route {
	if (item.pageHref && !opts.isHome) {
		return `${opts.prefix}${item.pageHref}` as Route;
	}
	return `${opts.prefix}/#${item.sectionId}` as Route;
}

function desktopNavClass(isActive: boolean, overHero: boolean): string {
	const base = 'shrink-0 text-[11px] xl:text-xs tracking-wide transition-colors whitespace-nowrap';
	if (isActive) return `${base} text-neon`;
	if (overHero) return `${base} text-snow/80 hover:text-snow`;
	return `${base} text-mute hover:text-foreground`;
}

function mobileNavClass(isActive: boolean): string {
	const base = 'block py-2.5 text-left text-base font-semibold transition-colors';
	return isActive ? `${base} text-neon` : `${base} text-foreground hover:text-neon`;
}

function headerShellClass(scrolled: boolean, isHome: boolean): string {
	const base = 'fixed inset-x-0 top-0 z-50 transition-colors duration-300';
	if (scrolled || isHome) {
		return `${base} bg-void/90 backdrop-blur-md border-b border-white/5`;
	}
	return `${base} bg-transparent`;
}

function menuButtonClass(overHero: boolean): string {
	const base = 'flex flex-col items-end justify-center gap-1.5 p-2 transition-colors';
	return overHero ? `${base} text-snow` : `${base} text-foreground`;
}

function burgerLineClass(open: boolean, line: 'top' | 'bottom'): string {
	const base = 'block h-0.5 rounded-full bg-current transition-all duration-300 origin-center';
	if (!open) {
		return line === 'top' ? `${base} w-2.5` : `${base} w-5`;
	}
	if (line === 'top') return `${base} w-5 translate-y-[5px] rotate-45`;
	return `${base} w-5 -translate-y-[5px] -rotate-45`;
}

function scrollBehavior(reduceMotion: boolean | null): ScrollBehavior {
	return reduceMotion ? 'auto' : 'smooth';
}

function lockDurationMs(reduceMotion: boolean | null): number {
	return reduceMotion ? 50 : 1100;
}

function useScrolled(threshold = 24): boolean {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > threshold);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, [threshold]);

	return scrolled;
}

function useCloseOnPathChange(pathname: string | null, open: boolean, setOpen: (v: boolean) => void): void {
	const [menuPath, setMenuPath] = useState(pathname);

	if (pathname !== menuPath) {
		setMenuPath(pathname);
		if (open) setOpen(false);
	}
}

function useBodyScrollLock(locked: boolean): void {
	useEffect(() => {
		if (!locked) return undefined;

		const prev = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = prev;
		};
	}, [locked]);
}

function useEscapeKey(enabled: boolean, onEscape: () => void): void {
	useEffect(() => {
		if (!enabled) return undefined;

		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onEscape();
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [enabled, onEscape]);
}

function useScrollSpy(
	isHome: boolean,
	pathname: string | null,
	lockRef: React.RefObject<string | null>
): readonly [string, (id: string) => void] {
	const [activeSection, setActiveSection] = useState('');

	useEffect(() => {
		if (!isHome) {
			lockRef.current = null;
			return undefined;
		}

		const resolveActive = () => {
			setActiveSection(resolveSpySection(lockRef.current));
		};

		const rafId = requestAnimationFrame(resolveActive);
		window.addEventListener('scroll', resolveActive, { passive: true });
		window.addEventListener('hashchange', resolveActive);
		window.addEventListener('resize', resolveActive);

		return () => {
			cancelAnimationFrame(rafId);
			window.removeEventListener('scroll', resolveActive);
			window.removeEventListener('hashchange', resolveActive);
			window.removeEventListener('resize', resolveActive);
		};
	}, [isHome, pathname, lockRef]);

	return [activeSection, setActiveSection] as const;
}

type NavLinksProps = Readonly<{
	ui: UiNav;
	isHome: boolean;
	overHero: boolean;
	pathname: string;
	prefix: string;
	activeSection: string;
	compact: boolean;
	onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => void;
}>;

function NavLinks({
	ui,
	isHome,
	overHero,
	pathname,
	prefix,
	activeSection,
	compact,
	onNavClick,
}: NavLinksProps): JSX.Element {
	return (
		<>
			{NAV_ITEMS.map((item) => {
				const active = isNavItemActive(item, { pathname, prefix, isHome, activeSection });
				const href = resolveNavHref(item, { prefix, isHome });
				const className = compact ? desktopNavClass(active, overHero) : mobileNavClass(active);

				return (
					<Link
						key={item.key}
						href={href}
						rel="preload"
						className={className}
						aria-current={active ? 'page' : undefined}
						onClick={(e) => onNavClick(e, item)}
					>
						{ui[item.labelKey]}
					</Link>
				);
			})}
		</>
	);
}

type CvLinkProps = Readonly<{
	href: string;
	filename: string;
	label: string;
	className: string;
	onClick?: () => void;
}>;

function CvLink({ href, filename, label, className, onClick }: CvLinkProps): JSX.Element {
	return (
		<a
			href={href}
			download={filename}
			target="_blank"
			rel="noopener noreferrer"
			className={className}
			onClick={onClick}
		>
			{label}
		</a>
	);
}

type MobileMenuProps = Readonly<{
	open: boolean;
	ui: UiNav;
	reduceMotion: boolean | null;
	navLinkProps: Omit<NavLinksProps, 'compact'>;
	cvHref: string;
	cvFilename: string;
	onClose: () => void;
}>;

function MobileMenu({
	open,
	ui,
	reduceMotion,
	navLinkProps,
	cvHref,
	cvFilename,
	onClose,
}: MobileMenuProps): JSX.Element {
	const duration = reduceMotion ? 0 : 0.32;
	const panelDuration = reduceMotion ? 0 : 0.28;
	const panelDelay = reduceMotion ? 0 : 0.04;

	return (
		<AnimatePresence initial={false}>
			{open ? (
				<motion.nav
					key="mobile-nav"
					id="mobile-primary-nav"
					className="overflow-hidden border-t border-b border-border bg-background/95 backdrop-blur-md lg:hidden"
					initial={reduceMotion ? false : { height: 0, opacity: 0 }}
					animate={{ height: 'auto', opacity: 1 }}
					exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
					transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
					aria-label={ui.ARIA_PRIMARY}
				>
					<motion.div
						className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-1 px-6 py-5 lg:px-8"
						initial={reduceMotion ? false : { y: -8, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={reduceMotion ? undefined : { y: -6, opacity: 0 }}
						transition={{ duration: panelDuration, delay: panelDelay }}
					>
						<NavLinks {...navLinkProps} compact={false} />
						<CvLink
							href={cvHref}
							filename={cvFilename}
							label={ui.DOWNLOAD_CV}
							className="cta-button col-span-2 mt-3 inline-flex cursor-pointer items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors"
							onClick={onClose}
						/>
					</motion.div>
				</motion.nav>
			) : null}
		</AnimatePresence>
	);
}

export function Header(): JSX.Element {
	const { locale, translation } = useActiveLocale();
	const ui = translation.UI.NAV;
	const pathname = usePathname();
	const reduceMotion = useReducedMotion();

	const [open, setOpen] = useState(false);
	const lockRef = useRef<string | null>(null);
	const lockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const scrolled = useScrolled();
	const isHome = isHomePath(pathname);
	const overHero = isHome;
	const prefix = locale === 'pt-BR' ? '/pt-BR' : '';
	const path = pathname || '/';
	const homeHref = getLocaleRoutePath(locale, false) as Route;
	const cvHref = getCvHref(locale);
	const cvFilename = getCvFilename(locale);

	const closeMenu = useCallback(() => setOpen(false), []);
	const toggleMenu = useCallback(() => setOpen((v) => !v), []);

	useCloseOnPathChange(pathname, open, setOpen);
	useBodyScrollLock(open);
	useEscapeKey(open, closeMenu);

	const [activeSection, setActiveSection] = useScrollSpy(isHome, pathname, lockRef);

	const handleNavClick = useCallback(
		(e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
			if (!isHome) {
				closeMenu();
				return;
			}

			e.preventDefault();
			closeMenu();

			lockRef.current = item.sectionId;
			setActiveSection(item.sectionId);

			if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
			lockTimerRef.current = setTimeout(() => {
				lockRef.current = null;
				setActiveSection(resolveActiveAfterLock(item.sectionId));
			}, lockDurationMs(reduceMotion));

			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					scrollToSection(item.sectionId, {
						behavior: scrollBehavior(reduceMotion),
						headerOffset: HEADER_OFFSET,
					});
				});
			});
		},
		[isHome, reduceMotion, closeMenu, setActiveSection]
	);

	useEffect(() => {
		return () => {
			if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
		};
	}, []);

	const navLinkProps = {
		ui,
		isHome,
		overHero,
		pathname: path,
		prefix,
		activeSection,
		onNavClick: handleNavClick,
	} as const;

	return (
		<header className={headerShellClass(scrolled, isHome)}>
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 lg:px-8">
				<Link
					href={homeHref}
					rel="preload"
					className="inline-flex shrink-0 items-center transition-opacity hover:opacity-90"
					aria-label={SITE_IDENTITY.global.SITE.WORDMARK}
				>
					<BrandLogotype className="h-10 w-10" />
				</Link>

				<div className="hidden lg:flex min-w-0 items-center gap-5 xl:gap-6">
					<nav className="flex min-w-0 items-center gap-4 xl:gap-5" aria-label={ui.ARIA_PRIMARY}>
						<NavLinks {...navLinkProps} compact />
					</nav>
					<CvLink
						href={cvHref}
						filename={cvFilename}
						label={ui.DOWNLOAD_CV}
						className="cta-button inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-colors"
					/>
				</div>

				<div className="flex items-center gap-3 lg:hidden">
					<CvLink
						href={cvHref}
						filename={cvFilename}
						label={ui.DOWNLOAD_CV}
						className="cta-button hidden cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-colors sm:inline-flex"
					/>
					<button
						type="button"
						className={menuButtonClass(overHero)}
						aria-label={open ? ui.CLOSE_MENU : ui.OPEN_MENU}
						aria-expanded={open}
						aria-controls="mobile-primary-nav"
						onClick={toggleMenu}
					>
						<span className={burgerLineClass(open, 'top')} />
						<span className={burgerLineClass(open, 'bottom')} />
					</button>
				</div>
			</div>

			<MobileMenu
				open={open}
				ui={ui}
				reduceMotion={reduceMotion}
				navLinkProps={navLinkProps}
				cvHref={cvHref}
				cvFilename={cvFilename}
				onClose={closeMenu}
			/>
		</header>
	);
}

export default Header;
