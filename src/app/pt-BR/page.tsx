import { JSX } from 'react';
import { HomePage } from '@/components/pages/home/page';

/**
 * Root Language Home Content View Layout Wrapper.
 * Acts as the official structural page view entry point for the localized Portuguese root segment path tree.
 * Completely autonomous: requires zero property configurations or layout parameter inputs, bridging execution
 * blocks directly onto the highly automated, self-routing HomePage component underneath.
 *
 * Architectural Features:
 * 1. Semantic Decoupling: Separates root routing configuration wrappers from active representation view structures.
 * 2. Static Layout Parity: Operates with near-zero runtime footprint to achieve optimal static compilation targets.
 * 3. Consistent Return Type: Enforces explicit compile-time JSX.Element annotations for rigorous type safety.
 *
 * @returns A strictly formatted native JSX layout wrapper encapsulating the automated self-routing homepage view core.
 */
export function RootHomePtBr(): JSX.Element {
	return (
		// Delegates structural interface rendering and live URL path decoding directly to the autonomous HomePage core
		<HomePage />
	);
}

export default RootHomePtBr;
