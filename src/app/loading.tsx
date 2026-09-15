import { JSX } from 'react';
import { LoadingPage } from '@/components/pages/loading/page';

/**
 * Root Baseline English Loading Boundary Layout Wrapper.
 * Acts as the official standard global streaming fallback layout manager context for the entire application root.
 * Intercepts active async chunk evaluations and static rendering assembly loops instantly under the hood.
 * Mounts a non-blocking skeleton placeholder screen to optimize native Core Web Vitals performance benchmarks (FCP/LCP).
 *
 * Safe Architecture Note: All static SEO metadata declarations are omitted here to comply with Next.js framework standards
 * which strictly forbid exporting 'metadata' objects inside 'loading.tsx' files.
 *
 * Architectural Features:
 * 1. Performance Fallback: Provides immediate, visual feedback during initial server-side hydration or client-side navigation.
 * 2. Structural Delegation: Forwards rendering execution directly to the highly optimized downstream LoadingPage presentation core.
 * 3. Near-Zero Footprint: Operates with minimum memory overhead to prevent performance blocks during structural layout switches.
 *
 * @returns A strictly formatted native JSX layout wrapper encapsulating the automated loading fallback canvas.
 */
export function RootLoading(): JSX.Element {
	return (
		// Delegates structural interface rendering directly to the automated, minimal LoadingPage presentation core
		<LoadingPage />
	);
}

export default RootLoading;
