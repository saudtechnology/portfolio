'use client';

import { useEffect } from 'react';
import { detectLocale, detectCurrentUserBrowserLocale, isLocaleRoute, getLocaleRoutePath } from '@/lib/i18n/locales';

/**
 * Renders an automatic language routing gate.
 * Intercepts client-side initialization to redirect users to their preferred
 * language directory based on browser settings, optimized for static hosting environments like GitHub Pages.
 *
 * @returns null - This component handles side-effects exclusively and renders no visual UI.
 */
export function LocaleGate(): null {
	useEffect(() => {
		// 1. Retrieve the raw preferred language token from the user's browser agent
		const CURRENT_USER_BROWSER_LOCALE = detectCurrentUserBrowserLocale();

		// 2. Normalize and resolve the active locale configuration along with its state flags
		const { state, lang } = detectLocale(CURRENT_USER_BROWSER_LOCALE);

		// 3. Extract the current location pathname from the global window object
		const CURRENT_LOCATION_PATHNAME = window.location.pathname;

		// 4. Dynamically check if the user is currently navigating within the pt-BR route tree
		const IS_AT_PTBR = isLocaleRoute(CURRENT_LOCATION_PATHNAME, 'pt-BR');

		// 5. If the browser prefers pt-BR but the user is not currently inside the pt-BR scope:
		if (state.isPtBR && !IS_AT_PTBR) {
			// Safely fetch the official path string ('/pt-BR/') and perform a fast client-side redirect
			window.location.replace(getLocaleRoutePath('pt-BR'));
			return;
		}

		// 6. If the browser prefers en-US (or fits a fallback context) but the user is currently inside the pt-BR scope:
		if (state.isEnUS && IS_AT_PTBR) {
			// Safely fetch the official base fallback path string ('/') and redirect the user back to the root route
			window.location.replace(getLocaleRoutePath(lang));
		}
	}, []);

	return null;
}

export default LocaleGate;
