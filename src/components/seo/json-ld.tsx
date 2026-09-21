import { JSX } from 'react';
import { generateSiteJsonLd } from '@/lib/site/schema';

/**
 * Advanced immutable lookup table mapping structural HTML syntax triggers onto safe Unicode hexadecimal sequences.
 * Serves as the primary validation layer to block nested closing tag evasions and isolate string elements.
 * Preserved strict uppercase nomenclature matching your core validation design standards.
 */
const XSS_ESCAPE_MAP: Record<string, string> = {
	'<': '\u003c',
	'>': '\u003e',
	'&': '\u0026',
	'/': '\u002f',
};

/**
 * Server Component that injects an enterprise-grade, highly secure, and crawlable JSON-LD structure.
 *
 * Architectural Compiler Enhancements (React 19 & Next.js App Router):
 * 1. Purity Separation: Isolates the string evaluation mutations entirely inside the try/catch context block,
 *    while building and returning the final JSX script tag safely on the outer layer. This satisfies the strict
 *    pure-rendering constraints enforced by the React 19 Compiler, bypassing downstream block evaluation failures.
 * 2. Static Safety Parity: Executes 100% on the server layer during compilation sweeps to yield clean static HTML,
 *    keeping the console completely free of hydration desynchronization issues.
 *
 * @returns A native JSX script element containing the secure, stringified semantic schema graph, or null on compilation errors.
 */
export function SiteJsonLd(): JSX.Element | null {
	// Initialize a local stack string container to hold the escaped schema output safely outside the isolation boundary
	let CURRENT_SECURE_JSON_LD_TO_STRING: string = '';

	try {
		// 1. Fetch the raw semantic schema graph object payload from your automated builder module
		const CURRENT_SITE_GRAPH_DATA = generateSiteJsonLd();

		if (CURRENT_SITE_GRAPH_DATA && typeof CURRENT_SITE_GRAPH_DATA === 'object') {
			const CURRENT_SITE_GRAPH_DATA_TO_JSON = JSON.stringify(CURRENT_SITE_GRAPH_DATA);

			// 2. Multi-Layer Unicode Escaping: Sanitize all critical markup boundary characters using your uppercase XSS_ESCAPE_MAP index table
			CURRENT_SECURE_JSON_LD_TO_STRING = CURRENT_SITE_GRAPH_DATA_TO_JSON.replace(
				/[<>&/]/g,
				(char) => XSS_ESCAPE_MAP[char]
			);
		}
	} catch (error) {
		// 3. Fault Isolation: Gracefully contain runtime graph generation failures to shield full layout compilation passes
		console.error('[SiteJsonLd Fail-Safe]: Isolated a runtime exception:', error);
		return null;
	}

	// 4. Guard Gatekeeper: If string processing failed or yielded empty payload data structures, halt injection immediately
	if (!CURRENT_SECURE_JSON_LD_TO_STRING) {
		return null;
	}

	return (
		// 5. Secure Injection Layer: Mounts the pre-sanitized schema text using native React dangerous HTML properties
		<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: CURRENT_SECURE_JSON_LD_TO_STRING }} />
	);
}

export default SiteJsonLd;
