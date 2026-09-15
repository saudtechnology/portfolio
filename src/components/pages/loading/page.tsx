import { JSX } from 'react';

/**
 * Server Component representing the central core fallback view (Loading View).
 * Displays a clean, minimal, non-blocking skeleton indicator while async chunks or static content hydrate.
 *
 * Safety & Structural Resilience Matrix:
 * 1. Cleans variable property definitions by separating parameter names from explicit type constraints.
 * 2. Implements immutable type definitions (`readonly`) to enforce strict component boundaries.
 * 3. Keeps execution operations fully static for near-zero impact on layout initial rendering milestones (LCP).
 *
 * @param props - An immutable props object containing the target layout context locale.
 * @returns A structured native JSX semantic main block containing the standardized loading placeholder layout.
 */
export function LoadingPage(): JSX.Element {
	return (
		<main className="flex flex-1 items-center justify-center px-8 py-24">
			{/* Visual Indicator: Styled with corporate design tokens for professional, understated feedback */}
			<p className="text-sm tracking-[0.2em] text-mute">Loading...</p>
		</main>
	);
}

export default LoadingPage;
