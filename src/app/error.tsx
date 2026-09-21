'use client';

import { JSX } from 'react';
import { ErrorPage } from '@/components/pages/error/page';

/**
 * Root Baseline English Error Boundary Layout Wrapper.
 * Acts as the official standard catch-all fallback context for unexpected exceptions thrown within the application subtree.
 * Safe Architecture Note: This file operates strictly as a Client Component boundary layer. All static SEO metadata
 * declarations are omitted here to comply with Next.js framework standards forbidding metadata exports inside client frames.
 *
 * Architectural Features:
 * 1. Isolation Barrier: Shields the outer application structure from full system layout or hydration crash states.
 * 2. Parameter Forwarding: Proxies state action metrics (`reset`) straight down into the autonomous presentation view core.
 * 3. Thread Safety: Enforces Next.js standard boundary definitions wrapped within immutable, read-only prop definitions.
 *
 * @param props - An immutable props configuration block containing the operational failure records and the reset action callback pointer.
 * @returns A strictly formatted native JSX layout wrapper encapsulating the automated error boundary view canvas.
 */
export function RootError({ reset }: { readonly reset: () => void }): JSX.Element {
	return (
		// Delegates the contextual interface rendering and automated live URL locale checks directly to the ErrorPage core
		<ErrorPage reset={reset} />
	);
}

export default RootError;
