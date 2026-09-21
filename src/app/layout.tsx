import '@/styles/globals.css';

import { JSX } from 'react';
import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';

import { AutoHtmlLang } from '@/components/i18n/auto-html-lang';
import { LocaleGate } from '@/components/i18n/locale-gate';
import { SiteJsonLd } from '@/components/seo/json-ld';
import { ThemeBrandStyles } from '@/components/theme/brand-styles';
import { SiteEffects } from '@/components/motion/site-effects';
import { SkipLink } from '@/components/a11y/skip-link';
import { BRAND_THEME_COLORS } from '@/lib/site/tokens';
import SITE_IDENTITY from '@/lib/site/identity';
import TRANSLATIONS from '@/lib/i18n/translations';

// Initialize the typography engine leveraging Montserrat configurations with fluid optimization options
// Weights must match utility classes used across the UI (font-medium=500, font-semibold=600, font-bold=700).
// Official next/font guidance: only load weights you use — include 500/700 to avoid synthetic bold.
const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600', '700'],
	variable: '--font-montserrat',
	display: 'swap',
	preload: true,
});

/**
 * Static Next.js Server Configuration Viewport Object.
 * Manages responsive viewport layout configurations and synchronizes native theme-color properties
 * with the application's hardware media query dark/light mode states.
 */
export const viewport: Viewport = {
	colorScheme: 'dark light',
	themeColor: [
		{ media: '(prefers-color-scheme: dark)', color: BRAND_THEME_COLORS.dark },
		{ media: '(prefers-color-scheme: light)', color: BRAND_THEME_COLORS.light },
	],
};

/**
 * Static Next.js Server Configuration Metadata Object.
 * Compiles comprehensive, type-safe global SEO metrics specifically tailored for the base default language path.
 * Enforces meta base tags, canonical loops, semantic authorship properties, and automated robots guidelines.
 */
const CURRENT_TITLE = `${SITE_IDENTITY.global.SITE.WORDMARK} — ${TRANSLATIONS['en-US'].SITE.MOTTO}`;

export const metadata: Metadata = {
	metadataBase: new URL(SITE_IDENTITY.global.SITE.URL),
	title: {
		absolute: CURRENT_TITLE, // Compiles the default baseline tab title string
	},
	description: TRANSLATIONS['en-US'].SITE.DESCRIPTION,
	applicationName: SITE_IDENTITY.global.SITE.NAME,
	authors: [{ name: SITE_IDENTITY.global.AUTHOR.NAME, url: SITE_IDENTITY.global.AUTHOR.PROFILE.GITHUB }],
	creator: SITE_IDENTITY.global.AUTHOR.NAME,
	publisher: SITE_IDENTITY.global.SITE.NAME,
	keywords: TRANSLATIONS['en-US'].SITE.KEYWORDS,
	category: 'technology',
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/',
			'pt-BR': '/pt-BR',
			'x-default': '/',
		},
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-image-preview': 'large',
			'max-snippet': -1,
			'max-video-preview': -1,
		},
	},
	openGraph: {
		type: 'website',
		locale: SITE_IDENTITY.global.SITE.LOCALE_BASE.LOCALE,
		url: SITE_IDENTITY.global.SITE.URL,
		siteName: SITE_IDENTITY.global.SITE.NAME,
		title: CURRENT_TITLE,
		description: TRANSLATIONS['en-US'].SITE.DESCRIPTION,
		images: [{ url: '/opengraph-image.jpg?v=2', width: 1200, height: 630, alt: CURRENT_TITLE }],
	},
	twitter: {
		card: 'summary_large_image',
		title: CURRENT_TITLE,
		description: TRANSLATIONS['en-US'].SITE.DESCRIPTION,
		images: ['/twitter-image.jpg?v=2'],
	},
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
};

/**
 * Root Application Shell Layout Engine Component.
 * Establishes the ultimate baseline document boundaries wrapping every view segment across the site.
 * Coordinates global design sheet injections, localization gates, and structured semantic graph blocks.
 *
 * Architectural Features:
 * 1. Monolithic Layout Frame: Orchestrates baseline HTML canvas elements with anti-aliasing text rendering configurations.
 * 2. Primitives Orchestration: Injects isolated server-side design tokens (`ThemeBrandStyles`, `SiteJsonLd`) and client guards (`LocaleGate`).
 * 3. Thread Resilience: Guards layout properties using a rigid read-only parameter modifier structure.
 *
 * @param props - An immutable props configuration block containing the rendering node trees.
 * @returns A strictly formatted native JSX layout sheet encapsulating the full digital portfolio web shell.
 */
export function RootLayout({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element {
	return (
		<html lang="en-US" className={`${montserrat.variable} dark h-full antialiased`}>
			<body className={`${montserrat.className} min-h-full flex flex-col bg-background text-foreground`}>
				{/* WCAG 2.4.1 Bypass Blocks — skip repetitive chrome */}
				<SkipLink />

				{/* Design tokens + anti-flicker theme (server-injected) */}
				<ThemeBrandStyles />

				{/* Sync <html lang> with active locale (client) */}
				<AutoHtmlLang />

				{/* Optional locale redirect gate */}
				<LocaleGate />

				{/* Schema.org JSON-LD */}
				<SiteJsonLd />

				{/* Cursor follower + scroll polish (client, reduced-motion aware) */}
				<SiteEffects />

				{children}
			</body>
		</html>
	);
}

export default RootLayout;
