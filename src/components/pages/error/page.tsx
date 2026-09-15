'use client';

import { JSX } from 'react';
import { useActiveLocale } from '@/hooks/use-active-locale';

type ErrorPageProps = {
	/** A native Next.js state callback function designed to trigger a re-render attempt of the error boundary tree. */
	readonly reset: () => void;
};

/**
 * Client-Side Error Boundary User Interface Canvas Component.
 * Acts as the official localized fallback viewport triggered whenever an isolated layout runtime exception is intercepted.
 * Completely autonomous: utilizes the shared useActiveLocale hook to self-manage layout parameters and resolve context language
 * properties internally by evaluating the live URL state, removing the need for verbose property cascades.
 *
 * Architectural Features:
 * 1. Self-Routing Boundary: Decouples view logic from explicit parent parameter management constraints during system runtime failures.
 * 2. Hook Integration: Leverages the unified useActiveLocale hook to cleanly extract pre-validated, safe translation assets.
 * 3. Immutable Barriers: Implements rigid read-only parameter boundaries to protect runtime function arguments from mutation tasks.
 *
 * @param props - An immutable props configuration block containing the boundary runtime state resetting callback pointer.
 * @returns A strictly formatted native JSX semantic main block containing the sanitized fallback error interface layout.
 */
export function ErrorPage({ reset }: ErrorPageProps): JSX.Element {
	// 1. Centralized Intelligence Layer: Invoke the shared hook engine to autonomously resolve the active locale tag
	//    and capture its fully validated, fail-safe translation dictionary node from memory.
	const { translation } = useActiveLocale();

	return (
		<main className="flex flex-1 flex-col items-start justify-center gap-4 px-8 py-24">
			{/* 2. Structured Layout: Displays the localized title text safely extracted from the page translations dictionary */}
			<h1 className="text-3xl font-light">{translation.PAGE.ERROR.GENERIC.HEADING.TITLE}</h1>

			{/* 3. Action Control: Native button that triggers the application state re-evaluation sequence on click,
			       optimized as an inline pointer invocation macro to bypass anonymous closure allocations. */}
			<button type="button" className="text-neon underline-offset-4 hover:underline cursor-pointer" onClick={reset}>
				{translation.PAGE.ERROR.GENERIC.BUTTON_BACK.TITLE}
			</button>
		</main>
	);
}

export default ErrorPage;
