import { JSX } from 'react';
import { LoadingPage } from '@/components/pages/loading/page';

/**
 * Root Language Loading Boundary Layout Wrapper.
 * Acts as the official Next.js streaming fallback layout manager context for the designated locale segment path.
 * Dynamically intercepts active async chunks or slow static file generation loops under the hood,
 * mounting a non-blocking skeleton loader instantly to maximize Core Web Vitals performance benchmarks (FCP/LCP).
 *
 * Architectural Features:
 * 1. Performance-First Fallback: Provides immediate UI feedback during client-side or server hydration tasks.
 * 2. Component Forwarding: Directly mounts the highly optimized downstream LoadingPage presentation core.
 * 3. Static Footprint: Employs near-zero operational memory consumption overhead during structural layout switches.
 *
 * @returns A strictly formatted native JSX layout wrapper encapsulating the automated loading fallback canvas.
 */
export function RootLoadingPtBr(): JSX.Element {
	return (
		// Delegates the structural interface rendering directly to the automated, minimal LoadingPage core
		<LoadingPage />
	);
}

export default RootLoadingPtBr;
