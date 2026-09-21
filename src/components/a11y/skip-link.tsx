'use client';

import { JSX } from 'react';
import { useActiveLocale } from '@/hooks/use-active-locale';

/** WCAG 2.4.1 — first focusable control skips chrome to main content. */
export function SkipLink(): JSX.Element {
	const { translation } = useActiveLocale();

	return (
		<a href="#main-content" className="skip-link">
			{translation.UI.COMMON.SKIP_TO_CONTENT}
		</a>
	);
}

export default SkipLink;
