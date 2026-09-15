import { JSX } from 'react';
import { NotFoundPage } from '@/components/pages/not-found/page';

/**
 * Root Baseline English Catch-All 404 Not Found Boundary Layout Wrapper.
 * Acts as the official standard global layout manager context triggered whenever an invalid route path is invoked.
 * Completely autonomous: forwards rendering execution directly onto the highly automated, self-routing NotFoundPage core.
 *
 * Safe Architecture Note: All static SEO metadata declarations are omitted here to comply with Next.js framework standards
 * which strictly forbid exporting 'metadata' objects inside fallback routing frames or 'not-found' handler files.
 *
 * Architectural Features:
 * 1. Boundary Decoupling: Separates core root layout entry wrappers from presentation view components.
 * 2. Static Layout Parity: Operates with near-zero runtime footprint to achieve optimal static compilation targets.
 * 3. Consistent Return Type: Enforces explicit compile-time JSX.Element annotations for rigorous type safety.
 *
 * @returns A strictly formatted native JSX layout wrapper encapsulating the automated self-routing 404 view core.
 */
export function RootNotFound(): JSX.Element {
	return (
		// Delegates structural interface rendering and live URL path decoding directly to the autonomous NotFoundPage core
		<NotFoundPage />
	);
}

export default RootNotFound;
