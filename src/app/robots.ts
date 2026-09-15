import type { MetadataRoute } from 'next';
import SITE_IDENTITY from '@/lib/site/identity';

/**
 * Next.js Special Route Segment Configuration.
 * Enforces a strict static optimization strategy, compelling the generation framework
 * to compile and bake this dynamic routing file into a flat txt asset during production build loops.
 */
export const dynamic = 'force-static';

/**
 * Functional Route Handler factory that generates the standard 'robots.txt' crawlers instruction manifest.
 * Coordinates indexing permissions, strict asset restrictions, and search sitemap anchor path maps
 * for automated search engine crawlers (Google, Bing) and AI search agents (OpenAI Search, Perplexity).
 *
 * Performance, Optimization & Crawler Management Matrix:
 * 1. Trailing Slash Symmetries: Expands disallow directives to cover both flat strings and trailing slash variations ('/404' and '/404/')
 *    to guarantee perfect alignment with structural static build outputs on GitHub Pages.
 * 2. Immutable Identity Sourcing: Dynamically extracts global absolute host variables directly from your centralized identity contract.
 * 3. Unified Agent Coverage: Applies strict search visibility protocols across standard indexers and large language model (LLM) scrapers.
 *
 * @returns A strictly formatted, type-safe MetadataRoute.Robots configuration object.
 */
export default function robots(): MetadataRoute.Robots {
	// 1. Core Absolute Parameters: Compile constant identifiers matching your central brand identity registry
	const BASE_HOST_URL = SITE_IDENTITY.global.SITE.URL;

	return {
		sitemap: `${BASE_HOST_URL}/sitemap.xml`, // Directs indexers straight to your comprehensive XML index map for faster page tracking loops
		host: BASE_HOST_URL, // Declares the primary authoritative absolute domain host wrapper for security routing

		rules: {
			userAgent: '*', // Applies these explicit data indexing rules globally to all automated search agents, crawlers, and bots
			allow: '/', // Grants indexers full permission to read and crawl the portfolio layout tree
			disallow: ['/404', '/404/'], // CRITICAL PROTECTION: Blocks indexers from crawling and rank-mapping any variant of the custom 404 page viewport
		},
	};
}
