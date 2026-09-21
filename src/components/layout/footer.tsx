'use client';

import { JSX } from 'react';
import type { Route } from 'next';
import Link from 'next/link';
import { useActiveLocale } from '@/hooks/use-active-locale';
import { getLocaleRoutePath } from '@/lib/i18n/locales';
import SITE_IDENTITY from '@/lib/site/identity';
import { SocialIcons } from '@/components/ui/social-icons';
import { BrandWordmark } from '@/components/ui/brand';

export function Footer(): JSX.Element {
	const { locale, translation } = useActiveLocale();
	const UI_TRANSLATION = translation.UI;
	const LANG_PREFIX = locale === 'pt-BR' ? '/pt-BR' : '';
	const HOME_HREF = getLocaleRoutePath(locale, false) as Route;

	const links: ReadonlyArray<{ href: Route; label: string }> = [
		{ href: `${LANG_PREFIX}/about` as Route, label: UI_TRANSLATION.NAV.ABOUT },
		{ href: `${LANG_PREFIX}/projects` as Route, label: UI_TRANSLATION.NAV.PROJECTS },
	];

	return (
		<footer className="mt-auto border-t border-border">
			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
				<div className="grid gap-12 md:grid-cols-3">
					<div className="flex flex-col items-start">
						<Link
							href={HOME_HREF}
							className="inline-flex items-center justify-center"
							aria-label={SITE_IDENTITY.global.SITE.WORDMARK}
						>
							<BrandWordmark
								title={SITE_IDENTITY.global.SITE.WORDMARK}
								className="h-auto w-[min(100%,241px)] max-w-60.25"
							/>
						</Link>

						<p className="mt-4 max-w-xs text-left text-sm text-mute">{UI_TRANSLATION.FOOTER.TAGLINE}</p>
					</div>

					<div>
						<p className="mb-4 text-xs uppercase tracking-[0.2em] text-mute">{UI_TRANSLATION.FOOTER.NAVIGATION}</p>

						<ul className="space-y-3">
							{links.map((link) => (
								<li key={link.href}>
									<Link href={link.href} className="text-sm text-foreground transition-colors hover:text-neon">
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<p className="mb-4 text-xs uppercase tracking-[0.2em] text-mute">{UI_TRANSLATION.FOOTER.CONTACT}</p>

						<a
							href={`mailto:${SITE_IDENTITY.global.AUTHOR.EMAIL}`}
							className="text-sm text-neon underline-offset-4 hover:underline"
						>
							{SITE_IDENTITY.global.AUTHOR.EMAIL}
						</a>

						<div className="mt-6">
							<SocialIcons direction="row" iconClassName="text-mute hover:text-neon" />
						</div>
					</div>
				</div>

				<div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
					<p className="text-xs text-mute">
						© 2019 {SITE_IDENTITY.global.SITE.NAME}. {UI_TRANSLATION.FOOTER.RIGHTS}
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
