import type { MetadataRoute } from 'next';
import SITE_IDENTITY from '@/lib/site/identity';
import { BRAND_THEME_COLORS } from '@/lib/site/tokens';
import TRANSLATIONS from '@/lib/i18n/translations';

/**
 * Next.js Special Route Segment Configuration.
 * Enforces a strict static optimization strategy, compelling the generation framework
 * to compile and bake this dynamic routing file into a flat manifest JSON asset during production build loops.
 */
export const dynamic = 'force-static';

/**
 * Functional Route Handler factory that generates the Web App Manifest payload matching W3C specifications.
 * Provides operational system settings metadata that enables modern web browsers to install your portfolio
 * as a native-behaving Progressive Web App (PWA) onto mobile or desktop home screens.
 *
 * Performance, Optimization, Visual SEO & PWA Ingestion Matrix:
 * 1. Analytics & Tracking Isolation: Configures the start_url with dedicated query parameters ('/?utm_source=pwa')
 *    to cleanly isolate application architecture traffic metrics inside performance dashboard tracking pipelines.
 * 2. Short Cuts Orchestration: Injects tactile device operating system menu shortcuts to provide mobile quick-actions.
 * 3. Token Recoupling: Dynamically reads global branding dimensions and dark/light system variables directly from your centralized identity layout matrix.
 * 4. Image Security: Enforces explicit type definitions on high-density PNG icon arrays to satisfy strict native mobile launcher parameters.
 *
 * @returns A strictly formatted, type-safe MetadataRoute.Manifest configuration object.
 */
export default function manifest(): MetadataRoute.Manifest {
	// 1. Core Corporate Constants: Extract brand parameters into uppercase variables to secure absolute workspace design symmetry
	const APP_NAME = SITE_IDENTITY.global.SITE.NAME;
	const APP_DESCRIPTION = SITE_IDENTITY['en-US'].SITE.DESCRIPTION;
	const APP_LANGUAGE = SITE_IDENTITY.global.SITE.LOCALE_BASE.LANGUAGE;
	const APP_THEME_COLOR = BRAND_THEME_COLORS.dark;

	return {
		// Establishes the authoritative base boundary identifier index for the PWA sandbox scope
		id: '/',

		// Maps out the official app naming descriptors pulled directly from your identity contract
		name: APP_NAME,
		short_name: APP_NAME,
		description: APP_DESCRIPTION,

		// Injects fallback language direction frameworks matching internationalization parameters
		lang: APP_LANGUAGE,
		dir: 'ltr',

		// Appends tracking parameter pointers to ensure correct layout launching benchmarks
		start_url: '/?utm_source=pwa',
		scope: '/',
		display: 'standalone',
		orientation: 'portrait-primary', // Locks mobile layout to standard orientation for elegant high-scale viewing

		// Enterprise Cataloging Parameters
		categories: ['technology', 'education', 'development'],
		prefer_related_applications: false,

		// Integrates visual platform canvas background values bound directly to design tokens
		background_color: APP_THEME_COLOR,
		theme_color: APP_THEME_COLOR,

		/// Provides immediate, balanced deep-linking buttons when holding down the application icon on mobile launchers
		shortcuts: [
			{
				name: TRANSLATIONS['en-US'].SITE.MANIFEST.NAME,
				short_name: TRANSLATIONS['en-US'].SITE.MANIFEST.SHORT_NAME,
				description: TRANSLATIONS['en-US'].SITE.MANIFEST.DESCRIPTION,
				url: '/?utm_source=pwa_shortcut_en_us',
				icons: [{ src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' }],
			},
			{
				name: TRANSLATIONS['pt-BR'].SITE.MANIFEST.NAME,
				short_name: TRANSLATIONS['pt-BR'].SITE.MANIFEST.SHORT_NAME,
				description: TRANSLATIONS['pt-BR'].SITE.MANIFEST.DESCRIPTION,
				url: '/pt-BR/?utm_source=pwa_shortcut_pt_br',
				icons: [{ src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' }],
			},
		],

		// Maps out the icon file array served straight out of your public root folders (Strictly PNG)
		icons: [
			{ src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' }, // Baseline icon for mid-density legacy displays and mobile application shortcuts dropdown menus
			{ src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' }, // High-density baseline icon used primarily by desktop chromium taskbars, splash screens, and high-res asset layers
			{ src: '/icons/icon-192-maskable.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' }, // Maskable 192px variant allowing adaptive systems (like Android) to dynamically scale and clip backgrounds without white bleed margins
			{ src: '/icons/icon-512-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }, // Maskable 512px variant providing maximum resolution clarity during full-screen splash or loading states on Android devices
		],
	};
}
