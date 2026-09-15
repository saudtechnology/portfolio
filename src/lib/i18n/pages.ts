import { detectLocale, LocaleType } from './locales';

/**
 * Structural contract for systemic status pages (e.g., global loading states).
 */
type StatusPageConfigType = Readonly<{ DOM_DOCUMENT: { TITLE: string } }>;

/**
 * Structural contract for localized error pages (e.g., 404 Not Found or 500 Generic Error).
 */
type ErrorPageConfigType = Readonly<{
	DOM_DOCUMENT: { TITLE: string };
	HEADING: Record<'TITLE' | 'SUBTITLE', string>;
	BUTTON_BACK: { TITLE: string };
}>;

/**
 * Generates technical dictionary entries for systemic status pages.
 *
 * @param locale - The targeted language context.
 * @returns An immutable record dictionary mapping technical status metadata properties.
 */
const getStatusPageConfig = (locale: LocaleType): StatusPageConfigType => {
	// Destructure the localized state flags from your systemic detectLocale utility
	const {
		state: { isEnUS },
	} = detectLocale(locale);

	return {
		DOM_DOCUMENT: { TITLE: isEnUS ? 'Loading' : 'Carregando' },
	};
};

/**
 * Functional factory that constructs highly structured error message translation dictionaries.
 * Isolates language fallback evaluations and acts as an immutable compiler for localized error screen strings.
 *
 * @param type - The error classification identifier ('404' or 'GENERIC').
 * @param locale - The concrete language layout to build for ('en-US' or 'pt-BR').
 * @returns A fully resolved, read-only configuration contract mapping text elements.
 */
const getErrorPageConfig = (
	type: '404' | 'GENERIC',
	locale: LocaleType
): Readonly<{
	DOM_DOCUMENT: { TITLE: string };
	HEADING: Record<'TITLE' | 'SUBTITLE', string>;
	BUTTON_BACK: { TITLE: string };
}> => {
	// Destructure the localized state flags from your systemic detectLocale utility
	const {
		state: { isEnUS },
	} = detectLocale(locale);

	// Establish baseline localization strings for generic failures
	let domDocumentTitle = isEnUS ? 'Failed to load' : 'Falha ao carregar';

	// Intercept and refine specific title strings for strict 404 routing scenarios
	if (type === '404') {
		domDocumentTitle = isEnUS ? 'Page not found' : 'Página não encontrada';
	}

	return {
		DOM_DOCUMENT: { TITLE: domDocumentTitle },
		BUTTON_BACK: { TITLE: isEnUS ? 'Back to home' : 'Voltar ao início' },
		HEADING: {
			TITLE: type === '404' ? '404' : 'Error',
			SUBTITLE: domDocumentTitle,
		},
	};
};

/**
 * The official immutable dictionary index mapping layout and message translations for pages.
 * Uses a Mapped Type bounded directly by LocaleType to guarantee perfect internationalization sync across all locales.
 */
export const PAGE_TRANSLATION: Readonly<{
	[L in LocaleType]: {
		STATUS: StatusPageConfigType;
		ERROR: Record<'GENERIC' | 'NOT_FOUND', ErrorPageConfigType>;
	};
}> = {
	'en-US': {
		STATUS: getStatusPageConfig('en-US'),
		ERROR: {
			GENERIC: getErrorPageConfig('GENERIC', 'en-US'),
			NOT_FOUND: getErrorPageConfig('404', 'en-US'),
		},
	},
	'pt-BR': {
		STATUS: getStatusPageConfig('pt-BR'),
		ERROR: {
			GENERIC: getErrorPageConfig('GENERIC', 'pt-BR'),
			NOT_FOUND: getErrorPageConfig('404', 'pt-BR'),
		},
	},
};

export default PAGE_TRANSLATION;
