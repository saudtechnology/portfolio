import '@/styles/globals.css';

import { JSX } from 'react';
import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';

import { AutoHtmlLang } from '@/components/i18n/auto-html-lang';
import { LocaleGate } from '@/components/i18n/locale-gate';
import { SiteJsonLd } from '@/components/seo/json-ld';
import { ThemeBrandStyles } from '@/components/theme/brand-styles';
import { BRAND_THEME_COLORS } from '@/lib/site/tokens';
import SITE_IDENTITY from '@/lib/site/identity';
import TRANSLATIONS from '@/lib/i18n/translations';

// Initialize the typography engine leveraging Montserrat configurations with fluid optimization options
const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['200', '300', '400', '600'],
	variable: '--font-montserrat',
	display: 'swap',
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
export function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<html lang="en-US" className={`${montserrat.variable} dark h-full antialiased`}>
			<body className={`${montserrat.className} min-h-full flex flex-col bg-background text-foreground`}>
				{/* Injects custom CSS brand tokens safely into the head element mapping variables */}
				<ThemeBrandStyles />

				{/* Dynamic accessibility tracker that syncs html lang tags on context switches */}
				<AutoHtmlLang />

				{/* Structural routing guard that transparently redirects users based on agent settings */}
				<LocaleGate />

				{/* Injects highly secure, crawlable Schema.org graph markup blocks for automated crawlers */}
				<SiteJsonLd />

				{/* Render downstream viewport content components */}
				{children}
			</body>
		</html>
	);
}

export default RootLayout;
