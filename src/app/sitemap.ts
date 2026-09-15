import type { MetadataRoute } from 'next';
import { Languages } from 'next/dist/lib/metadata/types/alternative-urls-types';
import SITE_IDENTITY from '@/lib/site/identity';

/**
 * Next.js Special Route Segment Configuration.
 * Enforces a strict static optimization strategy, compelling the generation framework
 * to compile and bake this dynamic routing file into a flat XML asset during production build loops.
 */
export const dynamic = 'force-static';

/**
 * Functional Route Handler factory that generates the global 'sitemap.xml' structural map index.
 * Maps out the authoritative layout links, crawl priorities, translation alternates, and modification metrics
 * to guide automated indexing crawlers (Google, Bing) and AI search agents through your static framework.
 *
 * Performance, Optimization, Visual SEO & AI-Ingestion Matrix:
 * 1. Trailing Slash Parity: Synchronizes absolute targets with the 'trailingSlash: true' configuration matrix
 *    to completely eliminate redirect overhead penalties during crawler navigation.
 * 2. Internationalization (X-Default): Injects strict x-default alternative hreflang pointers to successfully
 *    comply with international search engine routing guidelines for multi-language platforms.
 * 3. Image Metadata Indexing: Attaches explicit structural image array blocks directly to entry nodes,
 *    guaranteeing immediate ranking authority on image search indexers and feeding multimodal AI search models.
 * 4. Standardized Datetime Markers: Sanitizes lastModified indicators using a single, timezone-agnostic
 *    ISO 8601 string seed captured during compiler build phases.
 *
 * @returns A strictly formatted, type-safe MetadataRoute.Sitemap configuration array block.
 */
export default function sitemap(): MetadataRoute.Sitemap {
	// 1. Core Path Targets: Compile corporate absolute paths, strictly appending trailing slashes to mirror build settings
	const BASE_EN_URL = `${SITE_IDENTITY.global.SITE.URL}/`;
	const BASE_PT_URL = `${SITE_IDENTITY.global.SITE.URL}/pt-BR/`;

	// 2. Internationalization Alternate Matrix: Map target language scopes including the mandatory x-default root node pointer
	const LANGUAGES: Languages<string> | undefined = {
		'en-US': BASE_EN_URL,
		'pt-BR': BASE_PT_URL,
		'x-default': BASE_EN_URL, // Architectural fallback target for unmapped geopolitical regions
	};

	// 3. Automated Image Asset Sourcing: Resolves absolute URLs for the main portfolio graphics assets
	const GRAPH_AVATAR_URL = `${SITE_IDENTITY.global.SITE.URL}/json-ld-graph/avatar.webp`;

	// 4. Normalized Modification Token: Extract a safe, clean ISO string date stamp during compiler build phases
	const CURRENT_ISO_DATE = new Date().toISOString();

	return [
		// Primary Node Element: Authoritative English base framework environment (Max Priority)
		{
			url: BASE_EN_URL,
			lastModified: CURRENT_ISO_DATE,
			changeFrequency: 'monthly',
			priority: 1.0,
			alternates: { languages: LANGUAGES },
			images: [GRAPH_AVATAR_URL], // Explicit image injection token for Google Image indexers
		},
		// Secondary Node Element: Localized Brazilian Portuguese interface canvas framework environment
		{
			url: BASE_PT_URL,
			lastModified: CURRENT_ISO_DATE,
			changeFrequency: 'monthly',
			priority: 0.8,
			alternates: { languages: LANGUAGES },
			images: [GRAPH_AVATAR_URL], // Dual-mapped semantic asset linkage
		},
	];
}
