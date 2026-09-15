'use client';

import { useEffect } from 'react';
import IDENTITY from '@/lib/site/identity';

/**
 * Side-effect component that dynamically syncs the browser tab title during client-side navigation.
 * Appends the standardized official global site brand name as a consistent suffix.
 *
 * @param props - An immutable props object containing the target context title.
 * @returns null - This component handles document tab metadata side-effects exclusively and renders no visual UI.
 */
export function DocumentTitle({ title }: { readonly title: Document['title'] }): null {
	useEffect(() => {
		// Constructs and applies the synchronized browser title using the official corporate dash symbol (—)
		document.title = `${title} — ${IDENTITY.global.SITE.NAME}`;
	}, [title]);

	return null;
}

export default DocumentTitle;
