import type { MetadataRoute } from 'next';
import SITE_IDENTITY from '@/lib/site/identity';

/**
 * Next.js Special Route Segment Configuration [INDEX].
 * Enforces a strict static optimization strategy, compelling the generation framework
 * to compile and bake this dynamic routing file into a flat file asset during production build loops [INDEX].
 */
export const dynamic = 'force-static';

/**
 * Functional Route Handler factory that generates the standard 'robots.txt' crawlers instruction manifest [INDEX].
 * Coordinates indexing permissions, strict asset restrictions, and search sitemap anchor path maps
 * for automated search engine crawlers (Google, Bing) and AI search agents (OpenAI Search, Perplexity) [INDEX].
 *
 * Performance & Architecture Matrix:
 * 1. Zero-Footprint Sourcing: Automatically binds to your existing standalone absolute site identity configurations [INDEX].
 * 2. Static Pre-compilation: Configured with native Next.js flags to bundle directly onto GitHub Pages [INDEX].
 * 3. SEO Compliance: Excludes system fallback directories like '/404' to avoid indexing duplicate interface states [INDEX].
 *
 * @returns A strictly formatted, type-safe MetadataRoute.Robots configuration object [INDEX].
 */
export default function robots(): MetadataRoute.Robots {
	return {
		sitemap: `${SITE_IDENTITY.global.SITE.URL}/sitemap.xml`, // Directs indexers straight to your comprehensive XML index map for faster page tracking loops
		host: SITE_IDENTITY.global.SITE.URL, // Declares the primary authoritative absolute domain host wrapper for security routing
		rules: {
			userAgent: '*', // Applies these explicit data indexing rules globally to all automated search agents and bots
			allow: '/', // Grants indexers full permission to read and crawl the portfolio layout tree
			disallow: ['/404'], // Expressly blocks indexers from crawling and rank-mapping the custom 404 page viewport
		},
	};
}
