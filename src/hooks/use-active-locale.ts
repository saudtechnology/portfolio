'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LocaleType, isLocaleRoute } from '@/lib/i18n/locales';
import TRANSLATIONS from '@/lib/i18n/translations';

/**
 * Pure utility helper function that parses a given URL string path to extract the matching system language token.
 * Completely decoupled from the React runtime loop to enforce strict single-responsibility architecture principles.
 *
 * @param pathname - The current client-side window location pathname string.
 * @returns The resolved concrete supported language code matching our systemic localization matrix boundaries ('pt-BR' or 'en-US').
 */
const resolveLocaleFromPathname = (pathname: string): LocaleType =>
	isLocaleRoute(pathname, 'pt-BR') ? 'pt-BR' : 'en-US';

/**
 * Custom React Architecture Hook that acts as the centralized engine for application translation management.
 * Intercepts live Next.js client navigation instances, computes the real-time active route context,
 * and feeds fully hydrated, type-safe data nodes straight into consuming user interface views.
 *
 * Performance, Optimization & Hydration Matrix:
 * 1. Single Source of Truth: Centralizes internationalization lookup parameters to fully prevent inline code duplication across layout views.
 * 2. Absolute Type Safety: Dynamically infers type declarations directly from your schema structures for flawless IDE autocompletion.
 * 3. Asynchronous Hydration Circuit-Breaker: Leverages a non-blocking asynchronous macro-task timeout macro to delay local state changes.
 *    This allows the initial rendering layout to sync perfectly with the pre-compiled static HTML received from the server before shifting contexts,
 *    fully satisfying the React 19 Compiler and completely mitigating cascading render loops or hydration mismatch errors.
 *
 * @returns An immutable data bundle containing the active language token, its corresponding translated text dictionary assets, and a synchronization status flag.
 */
export function useActiveLocale(): Readonly<{
	locale: LocaleType;
	translation: (typeof TRANSLATIONS)['en-US'];
	isHydrated: boolean;
}> {
	// 1. Hydration Circuit Guard State: Initialized as false to precisely match the default static English fallback HTML layout compiled by the server
	const [isHydrated, setIsHydrated] = useState<boolean>(false);

	// 2. Core State Capturing: Retrieve the immediate active routing path token straight from the Next.js navigation framework client-side hook instance
	const CURRENT_PATHNAME = usePathname();

	// 3. Language Context Decoding: Transpile the extracted string path into a concrete localized system language indicator through the pure resolver pipeline
	const CURRENT_RESOLVED_LOCALE = resolveLocaleFromPathname(CURRENT_PATHNAME);

	// 4. Multi-Layer Defensive Circuit-Breaker: Validate that the calculated language token matches a defined index key in your translation catalog matrix.
	//    This eliminates downstream object mapping failures, completely shielding parent layout trees against undefined sub-property runtime evaluation crashes.
	const CURRENT_SAFE_LOCALE: LocaleType = TRANSLATIONS[CURRENT_RESOLVED_LOCALE] ? CURRENT_RESOLVED_LOCALE : 'en-US';

	useEffect(() => {
		// 5. Optimization Fix: Enveloping state change inside a macro-task macro wrapper scheduling block.
		//    This postpones the local context update until after the browser paints the baseline DOM, satisfy lint rules and avoiding cascading render warnings.
		const CURRENT_HYDRATION_TIMEOUT = setTimeout(() => {
			setIsHydrated(true);
		}, 0);

		// Clean up the active timeout handler pointer on component unmounting blocks to guarantee zero operational memory leaks
		return () => clearTimeout(CURRENT_HYDRATION_TIMEOUT);
	}, []);

	// 6. Dynamic Context Switching: If the framework is not fully hydrated on the client yet, force the default baseline language context ('en-US')
	//    to ensure an exact structural markup match with the server's pre-rendered HTML payload, bypassing hydration mismatch flags.
	const ACTIVE_LOCALE = isHydrated ? CURRENT_SAFE_LOCALE : 'en-US';

	// 7. Asset Hydration Layer: Fetch the fully compiled immutable data node containing all dictionary strings corresponding to the validated active language context boundary
	const CURRENT_TRANSLATION = TRANSLATIONS[ACTIVE_LOCALE];

	return {
		locale: ACTIVE_LOCALE,
		translation: CURRENT_TRANSLATION,
		isHydrated, // Exposed as an immutable property indicator token in case downstream elements require conditional rendering passes
	};
}

export default useActiveLocale;
