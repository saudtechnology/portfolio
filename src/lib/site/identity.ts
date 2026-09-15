import LOCALE_BASE_CONFIG, { FullLocaleType, LocaleBaseConfigType } from '../i18n/locales';
import SITE_IDENTITY_TRANSLATION, { SiteIdentityTranslationType } from '../i18n/site-identity';

/**
 * Structural contract defining the fallback schema for the core website infrastructure.
 * Holds administrative parameters, corporate naming fields, and localized system records.
 */
type SiteType = Readonly<{
	NAME: string;
	LEGAL_NAME: string;
	URL: string;
	WORDMARK: string;
	ADDRESS: Record<'LOCALITY' | 'REGION' | 'COUNTRY', string>;
	LOCALE_BASE: LocaleBaseConfigType;
}>;

/**
 * Structural contract defining the schema for personal and biographical author parameters.
 * Holds contact strings and arrays of verified professional web profiles.
 */
type AuthorType = Readonly<{
	NAME: string;
	EMAIL: string;
	PROFILE: { GITHUB: string; LINKEDIN: string; FULL: string[] };
}>;

/**
 * The official structural mapped type that dynamically establishes the complete contract layout.
 * Resolves to the comprehensive fallback structures (SiteType & AuthorType) for language-agnostic 'global' environments,
 * and seamlessly binds to translation schemas (SiteIdentityTranslationType) for contextually localized languages.
 */
type SiteIdentityType = Readonly<{
	[L in FullLocaleType]: L extends 'global'
		? { SITE: SiteType; AUTHOR: AuthorType }
		: { SITE: SiteIdentityTranslationType['SITE']; AUTHOR: SiteIdentityTranslationType['AUTHOR'] };
}>;

/**
 * Configuration factory that generates the comprehensive or localized web site parameter nodes.
 * Merges localized metadata dictionary indices with core baseline infrastructure fallbacks dynamically.
 *
 * @param LocaleType - The active target locale modifier string.
 * @returns A fully resolved, type-safe block matching the specific locale contract path.
 */
const getSiteConfig = <L extends FullLocaleType>(LocaleType: L): SiteIdentityType[L]['SITE'] => {
	const TRANSLATE_CONFIG = SITE_IDENTITY_TRANSLATION[LocaleType];
	const SITE_TRANSLATION_CONFIG = TRANSLATE_CONFIG && 'SITE' in TRANSLATE_CONFIG ? TRANSLATE_CONFIG.SITE : {};
	const NAME = 'SAUD TECHNOLOGY';

	return {
		// Cascade incoming localized fields like DESCRIPTION, MOTTO, and KEYWORDS
		...SITE_TRANSLATION_CONFIG,
		NAME,
		LEGAL_NAME: `${NAME} SLU`,
		WORDMARK: NAME,
		URL: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://saudtechnology.com',
		LOCALE_BASE: LOCALE_BASE_CONFIG,
		ADDRESS: {
			LOCALITY: 'Rio de Janeiro',
			REGION: 'RJ',
			COUNTRY: 'RJ',
		},
	};
};

/**
 * Configuration factory that generates the comprehensive or localized professional biography nodes.
 * Combines structural profile records with translated career descriptors or job position strings.
 *
 * @param LocaleType - The active target locale modifier string.
 * @returns A fully resolved, type-safe block matching the specific author contract path.
 */
const getAuthorConfig = <L extends FullLocaleType>(LocaleType: L): SiteIdentityType[L]['AUTHOR'] => {
	const TRANSLATE_CONFIG = SITE_IDENTITY_TRANSLATION[LocaleType];
	const AUTHOR_TRANSLATION = TRANSLATE_CONFIG && 'AUTHOR' in TRANSLATE_CONFIG ? TRANSLATE_CONFIG.AUTHOR : {};
	const AUTHOR_PROFILE: AuthorType['PROFILE'] = {
		GITHUB: 'https://github.com/thiagosaud',
		LINKEDIN: 'https://linkedin.com/in/thiagosaud',
		FULL: [],
	};

	// Map profile entries into a consolidated array block for search crawler ingestion (sameAs validation)
	AUTHOR_PROFILE.FULL = [AUTHOR_PROFILE.GITHUB, AUTHOR_PROFILE.LINKEDIN];

	return {
		// Cascade incoming localized parameters like JOB_TITLE
		...AUTHOR_TRANSLATION,
		PROFILE: AUTHOR_PROFILE,
		NAME: 'THIAGO SAUD',
		EMAIL: 'thiago@saudtechnology.com',
	};
};

/**
 * The consolidated master source of truth for site and author identity metrics throughout the engine.
 * Maps out separate structures for global context fallbacks, strict English, and Brazilian Portuguese layouts.
 * Using 'as const' locks down value literals for strict compile-time autocomplete safety.
 */
export const SITE_IDENTITY: SiteIdentityType = {
	global: { SITE: getSiteConfig('global'), AUTHOR: getAuthorConfig('global') },
	'en-US': { SITE: getSiteConfig('en-US'), AUTHOR: getAuthorConfig('en-US') },
	'pt-BR': { SITE: getSiteConfig('pt-BR'), AUTHOR: getAuthorConfig('pt-BR') },
};

export default SITE_IDENTITY;
