import PAGE_TRANSLATION from './pages';
import SITE_IDENTITY_TRANSLATION from './site-identity';

/**
 * The consolidated global translation dictionary index.
 * Combines both structural site metadata translations and contextual page layouts into a single source of truth.
 * Using 'as const' ensures literal read-only type inference for absolute autocomplete safety throughout the application.
 */
const TRANSLATIONS = {
	'en-US': {
		...SITE_IDENTITY_TRANSLATION['en-US'],
		PAGE: PAGE_TRANSLATION['en-US'],
	},
	'pt-BR': {
		...SITE_IDENTITY_TRANSLATION['pt-BR'],
		PAGE: PAGE_TRANSLATION['pt-BR'],
	},
} as const;

export default TRANSLATIONS;
