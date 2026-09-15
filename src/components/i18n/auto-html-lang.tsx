'use client';

import { useEffect } from 'react';
import { detectLocale, FullLocaleType } from '@/lib/i18n/locales';

/**
 * Side-effect component that automatically detects the browser's preferred language on load.
 * Dynamically synchronizes the resolved locale token with the root document HTML lang attribute.
 * Tailored to ensure correct screen reader voice-overs and localized accessibility tags on static hosting like GitHub Pages.
 *
 * @returns null - This component handles document attribute metadata side-effects exclusively and renders no visual UI.
 */
export function AutoHtmlLang(): null {
	useEffect(() => {
		// 1. Retrieve the raw preferred language token from the user's browser agent configurations
		const USER_BROWSER_LANGUAGE = (navigator.languages?.[0] ?? navigator.language) as FullLocaleType;

		// 2. Normalize the raw token via detectLocale and directly bind the safe fallback language to the document root element
		document.documentElement.lang = detectLocale(USER_BROWSER_LANGUAGE).lang;
	}, []);

	return null;
}

export default AutoHtmlLang;
