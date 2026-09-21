'use client';

import { JSX } from 'react';
import { ErrorPage } from '@/components/pages/error/page';

type RootErrorPtBrLayoutProps = {
	/** A native Next.js state callback function designed to trigger a safe re-render cycle attempt of the boundary tree. */
	readonly reset: () => void;
};

/**
 * Root Language Error Boundary Layout Wrapper.
 * Acts as the official Next.js error boundary fallback view layer context for the designated locale segment path.
 * Intercepts uncaught operational execution failures within the subtree, isolating them immediately
 * to provide a graceful, localized recovery canvas to the end user without crashing the upstream shell framework.
 *
 * Architectural Features:
 * 1. Boundary Isolation: Implements a rigid defensive wrapper preventing layout exceptions from crashing the parent window layout.
 * 2. Component Forwarding: Proxies state action metrics (`reset`) seamlessly into the highly automated downstream ErrorPage core.
 * 3. Strict Typings: Enforces Next.js standard error parameters bounded with read-only properties for runtime execution safety.
 *
 * @param props - An immutable props configuration block containing the active error tracking records and the reset action callback pointer.
 * @returns A strictly formatted native JSX layout wrapper encapsulating the automated error boundary view canvas.
 */
export function RootErrorPtBr({ reset }: RootErrorPtBrLayoutProps): JSX.Element {
	return (
		// Delegates the contextual interface rendering and localized dictionary resolution directly to the autonomous ErrorPage core
		<ErrorPage reset={reset} />
	);
}

export default RootErrorPtBr;
