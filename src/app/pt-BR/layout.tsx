import type { Metadata } from 'next';
import { JSX } from 'react';
import { AutoHtmlLang } from '@/components/i18n/auto-html-lang';
import SITE_IDENTITY from '@/lib/site/identity';
import TRANSLATIONS from '@/lib/i18n/translations';

/**
 * Static Next.js Server Configuration Metadata Object.
 * Compiles comprehensive, type-safe SEO metrics specifically tailored for the Brazilian Portuguese localization tree.
 * Locks down metadata schemas, canonical alternates, OpenGraph parameters, and high-scale Twitter visual cards.
 */
export const metadata: Metadata = {
	title: {
		absolute: `${SITE_IDENTITY.global.SITE.WORDMARK} — ${TRANSLATIONS['pt-BR'].SITE.MOTTO}`, // Compiles the dynamic fallback title suffix leveraging standard brand constants
	},
	description: TRANSLATIONS['pt-BR'].SITE.DESCRIPTION,
	alternates: {
		canonical: '/pt-BR',
		languages: {
			'en-US': '/',
			'pt-BR': '/pt-BR',
			'x-default': '/',
		},
	},
	openGraph: {
		type: 'website',
		locale: 'pt_BR',
		url: SITE_IDENTITY.global.SITE.URL,
		siteName: SITE_IDENTITY.global.SITE.NAME,
		title: `${SITE_IDENTITY.global.SITE.WORDMARK} — ${TRANSLATIONS['pt-BR'].SITE.MOTTO}`,
		description: TRANSLATIONS['pt-BR'].SITE.DESCRIPTION,
		images: [
			{
				url: '/opengraph-image.jpg?v=2',
				width: 1200,
				height: 630,
				alt: `${SITE_IDENTITY.global.SITE.WORDMARK} — ${TRANSLATIONS['pt-BR'].SITE.MOTTO}`,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: `${SITE_IDENTITY.global.SITE.WORDMARK} — ${TRANSLATIONS['pt-BR'].SITE.MOTTO}`,
		description: TRANSLATIONS['pt-BR'].SITE.DESCRIPTION,
		images: ['/twitter-image.jpg?v=2'],
	},
};

/**
 * Root Brazilian Portuguese Layout Engine Component.
 * Establishes the core wrapper boundary context enveloping all page views inside the localized '/pt-BR' path block.
 * Seamlessly integrates client-side helper primitives to coordinate accessible HTML multi-language tag hydration layers.
 *
 * Architectural Features:
 * 1. Semantic Layout Isolation: Wraps localized child viewport clusters safely without adding arbitrary, heavy DOM divisions.
 * 2. Accessibility Orchestration: Mounts the specialized AutoHtmlLang shell to seamlessly track user agent voice-over metrics.
 * 3. Immutable Props Boundaries: Enforces read-only object wrappers over parameter children blocks for thread-safe executions.
 *
 * @param props - An immutable props configuration block containing the rendering node trees.
 * @returns A strictly formatted native JSX layout wrapper encapsulating localized presentation trees.
 */
export function RootPtBrLayout({ children }: { readonly children: React.ReactNode }): JSX.Element {
	return (
		<>
			{/* Side-effect primative that dynamically injects and updates language metadata directly on layout changes */}
			<AutoHtmlLang />
			{children}
		</>
	);
}

export default RootPtBrLayout;
