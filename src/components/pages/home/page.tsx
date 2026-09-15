'use client';

import { JSX } from 'react';
import { useActiveLocale } from '@/hooks/use-active-locale';
import SITE_IDENTITY from '@/lib/site/identity';

/**
 * Client Viewport landing canvas (Home View).
 * Acts as the centralized main landing core layout view for your digital portfolio.
 * Completely autonomous: leverages the shared useActiveLocale hook to self-manage layout parameters
 * and resolve context language properties internally by evaluating the live URL state, removing the need for verbose property cascades.
 *
 * Architectural Features:
 * 1. Self-Routing Core: Decouples rendering layers from explicit parent prop management structures.
 * 2. Hook Integration: Leverages the unified useActiveLocale hook to cleanly fetch pre-validated, safe translation assets.
 * 3. Tab-Nabbing Security: Employs strict web security attributes (`rel="noopener noreferrer"`) on external communication links.
 *
 * @returns A strictly formatted native JSX semantic main viewport tree populated with dynamic brand metrics.
 */
export function HomePage(): JSX.Element {
	// 1. Centralized Intelligence Layer: Invoke the shared hook engine to autonomously resolve the active locale tag
	//    and capture its fully validated, fail-safe translation dictionary node from memory.
	const { translation } = useActiveLocale();

	return (
		<main className="flex flex-1 flex-col items-start justify-center gap-6 px-8 py-24">
			{/* 2. Brand Identity: Displays the globally standardized wordmark token directly from identity configurations */}
			<p className="text-sm tracking-[0.2em] text-mute">{SITE_IDENTITY.global.SITE.WORDMARK}</p>

			{/* 3. Hero Copy: Render the dynamic brand tagline and descriptive blocks from the localized translations dictionary */}
			<h1 className="max-w-xl text-4xl font-light tracking-tight">{translation.SITE.MOTTO}</h1>
			<p className="max-w-lg text-base text-mute">{translation.SITE.DESCRIPTION}</p>

			{/* 4. Action Anchor: Encapsulates professional communication channels safely configured with strict security flags
			       to prevent malicious reverse tab-nabbing context hijacking. */}
			<a
				className="text-neon underline-offset-4 hover:underline"
				href={`mailto:${SITE_IDENTITY.global.AUTHOR.EMAIL}`}
				rel="noopener noreferrer"
			>
				{SITE_IDENTITY.global.AUTHOR.EMAIL}
			</a>
		</main>
	);
}

export default HomePage;
