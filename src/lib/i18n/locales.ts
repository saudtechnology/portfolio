/**
 * Types defining the allowed locale tags across the system.
 * 'global' represents language-agnostic configurations.
 */
export type FullLocaleType = 'global' | 'en-US' | 'pt-BR';

/**
 * Filtered version of FullLocaleType excluding the 'global' identifier.
 * Used strictly for routes and translation contexts that require a concrete language.
 */
export type LocaleType = Exclude<FullLocaleType, 'global'>;

/**
 * Contract specifying the shape of the default fallback configuration object.
 */
export type LocaleBaseConfigType = { LANGUAGE: LocaleType; LOCALE: 'en_US' };

/**
 * The immutable source of truth for the site's default language and region fallback.
 */
const LOCALE_BASE_CONFIG: LocaleBaseConfigType = { LOCALE: 'en_US', LANGUAGE: 'en-US' } as const;
export default LOCALE_BASE_CONFIG;

/**
 * Analyzes an incoming locale tag, normalizes it by stripping trailing slashes,
 * and provides an active language along with a convenient map of boolean state flags.
 *
 * @param tag - The incoming raw locale string (defaults to 'global').
 */
export const detectLocale = (
	tag: FullLocaleType = 'global'
): Readonly<{
	lang: LocaleType;
	state: Record<'isGlobal' | 'isEnUS' | 'isPtBR', boolean>;
}> => {
	const CLEANED_TAG = tag.replace(/\//g, '') as FullLocaleType;
	const NORMALIZED_TAG = CLEANED_TAG.toLowerCase() as FullLocaleType;
	const IS_GLOBAL_TAG = NORMALIZED_TAG === 'global';
	const LANG: LocaleType = IS_GLOBAL_TAG || !NORMALIZED_TAG ? LOCALE_BASE_CONFIG.LANGUAGE : (CLEANED_TAG as LocaleType);

	return {
		lang: LANG,
		state: {
			isGlobal: IS_GLOBAL_TAG,
			isEnUS: LANG === 'en-US',
			isPtBR: LANG === 'pt-BR',
		},
	};
};

/**
 * Safely fetches the current preferred language token from the user's browser agent.
 * Safely handles both modern multi-language arrays and legacy single-string properties.
 *
 * @returns The client's browser language casted as FullLocaleType for treatment.
 */
export const detectCurrentUserBrowserLocale = (): Readonly<FullLocaleType> =>
	(navigator.languages?.[0] ?? navigator.language) as FullLocaleType;

/**
 * Dynamically constructs the official URL route path for a given locale.
 * Maps the default language directly to the root path ('/') to avoid redundant prefixes.
 *
 * @param locale - The concrete target language (e.g., 'en-US', 'pt-BR').
 * @param withTrailingSlash - Determines if a trailing slash should be appended (defaults to true).
 * @returns The absolute-relative pathname string (e.g., '/', '/pt-BR', or '/pt-BR/').
 */
export const getLocaleRoutePath = (locale: LocaleType, withTrailingSlash = true): string => {
	if (locale === LOCALE_BASE_CONFIG.LANGUAGE) {
		return '/';
	}

	return withTrailingSlash ? `/${locale}/` : `/${locale}`;
};

/**
 * Reusable routing utility that evaluates whether a given pathname matches a specific locale route.
 * Accurately catches strict root matches, trailing slashes, and deep nested sub-routes.
 *
 * @param pathname - The current URL pathname to evaluate (e.g., window.location.pathname).
 * @param locale - The target locale to check against.
 * @returns A boolean indicating whether the pathname belongs to the specified locale context.
 */
export const isLocaleRoute = (pathname: string, locale: LocaleType): boolean => {
	const BASE_ROUTE_WITHOUT_SLASH = `/${locale}`;
	const BASE_ROUTE_WITH_SLASH = `/${locale}/`;

	return pathname === BASE_ROUTE_WITHOUT_SLASH || pathname.startsWith(BASE_ROUTE_WITH_SLASH);
};
