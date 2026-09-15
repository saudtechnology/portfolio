import type { MetadataRoute } from 'next';
import { Languages } from 'next/dist/lib/metadata/types/alternative-urls-types';
import SITE_IDENTITY from '@/lib/site/identity';

/**
 * Next.js Special Route Segment Configuration.
 * Enforces a strict static optimization strategy, compelling the generation framework
 * to compile and bake this dynamic routing file into a flat file asset during production build loops.
 */
export const dynamic = 'force-static';

/**
 * Functional Route Handler factory that generates the global 'sitemap.xml' structural map index.
 * Maps out the authoritative layout links, crawl priorities, translation alternates, and modification metrics
 * to guide automated indexing crawlers (Google, Bing) and AI search agents through your static framework.
 *
 * Performance & Architecture Matrix:
 * 1. Semantic Cross-Linking: Bundles localized translation alternates directly into each entry node to maximize crawl health.
 * 2. Static Pre-compilation: Configured with native Next.js flags to bundle directly onto GitHub Pages.
 * 3. Dynamic Precision: Automates modification timestamps using native engine Date instances during the build process.
 *
 * @returns A strictly formatted, type-safe MetadataRoute.Sitemap configuration array block.
 */
export default function sitemap(): MetadataRoute.Sitemap {
	// 1. Establish the explicit absolute URL targets using your unified identity contract source
	const EN_US = `${SITE_IDENTITY.global.SITE.URL}/`;
	const PT_BR = `${SITE_IDENTITY.global.SITE.URL}/pt-BR`;

	// 2. Map structural translation alternate vectors to enable search engine regional link synchronization
	const LANGUAGES: Languages<string> | undefined = { 'en-US': EN_US, 'pt-BR': PT_BR };

	return [
		// 3. Primary Root Node: The authoritative base English layout environment (Highest Priority)
		{
			url: EN_US,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
			alternates: { languages: LANGUAGES },
		},
		// 4. Secondary Regional Node: The localized Brazilian Portuguese content environment
		{
			url: PT_BR,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
			alternates: { languages: LANGUAGES },
		},
	];
}
