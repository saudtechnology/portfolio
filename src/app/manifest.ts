import type { MetadataRoute } from 'next';
import SITE_IDENTITY from '@/lib/site/identity';
import { BRAND_THEME_COLORS } from '@/lib/site/tokens';

/**
 * Next.js Special Route Segment Configuration.
 * Enforces a strict static optimization strategy, compelling the generation framework
 * to compile and bake this dynamic routing file into a flat asset during production build loops.
 */
export const dynamic = 'force-static';

/**
 * Functional Route Handler factory that generates the Web App Manifest payload matching W3C specifications.
 * Provides operational system settings metadata that enables modern web browsers to install your portfolio
 * as a native-behaving Progressive Web App (PWA) onto mobile or desktop home screens.
 *
 * Performance & Architecture Matrix:
 * 1. Zero-Footprint Sourcing: Automatically binds to your existing standalone identity and color token matrices.
 * 2. Static Pre-compilation: Configured with native Next.js flags to bundle directly onto GitHub Pages.
 * 3. Extended Accessibility: Injects localized directionality, scope, and specific masking configurations.
 *
 * @returns A strictly formatted, type-safe MetadataRoute.Manifest configuration object.
 */
export default function manifest(): MetadataRoute.Manifest {
	return {
		// Establishes the authoritative base boundary identifier index for the PWA sandbox scope
		id: '/',

		// Maps out the official app naming descriptors pulled directly from your identity contract
		name: SITE_IDENTITY.global.SITE.NAME,
		short_name: SITE_IDENTITY.global.SITE.NAME,
		description: SITE_IDENTITY['en-US'].SITE.DESCRIPTION,

		// Injects fallback language direction frameworks matching internationalization parameters
		lang: SITE_IDENTITY.global.SITE.LOCALE_BASE.LANGUAGE,
		dir: 'ltr',

		// Defines anchor constraints indicating exactly where the system viewport opens upon desktop launch
		start_url: '/',
		scope: '/',
		display: 'standalone',

		// Integrates visual platform canvas background values bound directly to design tokens
		background_color: BRAND_THEME_COLORS.dark,
		theme_color: BRAND_THEME_COLORS.dark,

		// Maps out the icon file array served straight out of your public root folders
		icons: [
			{ src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
			{ src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
			{ src: '/icons/icon-192-maskable.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' }, // Maskable declarations allow operating systems (like Android) to clip the logo without ugly white borders
			{ src: '/icons/icon-512-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
		],
	};
}
