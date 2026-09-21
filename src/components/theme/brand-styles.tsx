import { JSX } from 'react';
import { generateBrandCssTokens } from '@/lib/site/tokens';

/**
 * Advanced character escape matrix focused on mitigating arbitrary style block injections and XSS mutations inside CSS sheets.
 * Converts structural layout characters into standard CSS escaped hexadecimal representations followed by an explicit space.
 * Preserved strict uppercase nomenclature matching your design system constants.
 */
const CSS_ESCAPE_MAP: Record<string, string> = {
	'<': String.raw`\3c `,
	'>': String.raw`\3e `,
	'&': String.raw`\26 `,
	'"': String.raw`\22 `,
	"'": String.raw`\27 `,
	';': String.raw`\3a `,
};

/**
 * Server Component that injects custom corporate CSS design tokens alongside an anti-flicker theme script.
 * Securely processed on the server side during static generation passes to fully eliminate initial viewport layout flashes.
 *
 * Performance & Security Matrix:
 * 1. Purity Separation: JSX element construction is completely handled outside the isolation try/catch blocks to satisfy React 19 Compiler parameters.
 * 2. Instant Theme Sourcing: Injects a high-speed synchronous mini-script to evaluate theme persistence flags BEFORE layout blocks paint, eliminating white/black layout flashes.
 *
 * @returns A native JSX fragment wrapping the design tokens style sheet and anti-flicker block execution script.
 */
export function ThemeBrandStyles(): JSX.Element | null {
	// Initialize a local stack string container to hold the escaped token stylesheet safely outside the isolation boundary
	let currentSecureCsstoString: string = '';

	try {
		// 1. Fetch the raw compiled CSS pseudo-class string from your centralized design tokens module
		const rawCssTokens = generateBrandCssTokens();

		if (rawCssTokens && typeof rawCssTokens === 'string') {
			// 2. Multi-Layer Defenses: Convert structural HTML control characters into safe CSS escape tokens using your pre-compiled uppercase matrix
			currentSecureCsstoString = rawCssTokens.replace(/[<>&\\]/g, (char) => CSS_ESCAPE_MAP[char]);
		}
	} catch (error) {
		// 3. Fault Isolation: Gracefully contain style parsing failures to safeguard the upstream template build loop
		console.error('[ThemeBrandStyles Fail-Safe]: Isolated a style compilation exception:', error);
		return null;
	}

	// 4. Guard Gatekeeper: If token compilation failed or yielded empty raw style inputs, halt injection immediately
	if (!currentSecureCsstoString) {
		return null;
	}

	// 5. Anti-Flicker Engineering Shield Script String
	// This tiny inline raw sequence runs block-side synchronously on the client window before React initialization loops fire.
	// Prevents layout flashes on static hosting stacks like GitHub Pages by resolving themes before the DOM paints.
	const CURRENT_ANTI_FLICKER_SCRIPT: string = `(function(){try{var t=localStorage.getItem('theme');var s=window.matchMedia('(prefers-color-scheme:light)').matches;var e=document.documentElement;if(t==='light'||(!t&&s)){e.classList.remove('dark');e.classList.add('light');e.style.colorScheme='light'}else{e.classList.remove('light');e.classList.add('dark');e.style.colorScheme='dark'}}catch(e){}})()`;

	return (
		<>
			{/* Injects the design system variable definitions tokens at the document root level */}
			<style dangerouslySetInnerHTML={{ __html: currentSecureCsstoString }} />

			{/* Executes the immediate DOM modification script layer to preempt flashing canvas updates */}
			<script dangerouslySetInnerHTML={{ __html: CURRENT_ANTI_FLICKER_SCRIPT }} />
		</>
	);
}

export default ThemeBrandStyles;
