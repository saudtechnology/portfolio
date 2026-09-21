'use client';

import { JSX } from 'react';
import type { Route } from 'next';
import Link from 'next/link';
import { DocumentTitle } from '@/components/i18n/document-title';
import { useActiveLocale } from '@/hooks/use-active-locale';
import { getLocaleRoutePath } from '@/lib/i18n/locales';

/**
 * Client-Side 404 Not Found Handling Interface View Component.
 * Acts as the centralized core layout barrier triggered whenever an invalid routing path is accessed.
 * Completely autonomous: requires zero external props or parameter cascades, identifying the required
 * language directly by hooking into active browser location pathname metrics behind the scenes.
 *
 * Architectural Features:
 * 1. Zero-Prop Design: Decouples view logic from explicit parent parameter management constraints.
 * 2. Hook Integration: Leverages the unified useActiveLocale hook to streamline structural routing and dictionary lookup tasks.
 * 3. Sync Pipeline: Directs metadata title modifications immediately onto the client document window state.
 *
 * @returns A strictly formatted native JSX layout tree populated with contextually synchronized 404 messaging assets.
 */
export function NotFoundPage(): JSX.Element {
	// 1. Centralized Intelligence Layer: Invoke the shared hook engine to autonomously resolve the active locale tag
	//    and capture its fully validated, fail-safe translation dictionary node from memory.
	const { locale, translation } = useActiveLocale();

	// 2. Routing Matrix Compilation: Compute the safe official base back-redirection target URL path ('/' or '/pt-BR/')
	//    dynamically through the locales infrastructure module, locking down type inference using Next.js Route casting.
	const CURRENT_REDIRECT_HREF = getLocaleRoutePath(locale) as Route;

	return (
		<main id="main-content" tabIndex={-1} className="flex flex-1 flex-col items-start justify-center gap-4 px-8 py-24">
			{/* 3. Tab State Synchronizer: Dynamically injects the localized page view title onto the active browser task tab element */}
			<DocumentTitle title={translation.PAGE.ERROR.NOT_FOUND.DOM_DOCUMENT.TITLE} />

			{/* 4. Structural Text Nodes: Render semantic descriptions matching the exact layouts declared in your dictionary schema */}
			<p className="text-sm tracking-[0.2em] text-mute">{translation.PAGE.ERROR.NOT_FOUND.HEADING.TITLE}</p>
			<h1 className="text-3xl font-light">{translation.PAGE.ERROR.NOT_FOUND.HEADING.SUBTITLE}</h1>

			{/* 5. Navigation Anchor: Native Next.js client-optimized link component configured with automated path pre-fetching,
			       directing the user cleanly back to the correct baseline language path root. */}
			<Link className="text-neon underline-offset-4 hover:underline" href={CURRENT_REDIRECT_HREF}>
				{translation.PAGE.ERROR.NOT_FOUND.BUTTON_BACK.TITLE}
			</Link>
		</main>
	);
}

export default NotFoundPage;
