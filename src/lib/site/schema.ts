import {
	SITE_AUTHOR,
	SITE_DESCRIPTION,
	SITE_EMAIL,
	SITE_JOB_TITLE,
	SITE_KNOWS_ABOUT,
	SITE_LANGUAGE,
	SITE_NAME,
	SITE_PROFILES,
	SITE_URL,
} from './identity';

export function buildSiteJsonLd() {
	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebSite',
				'@id': `${SITE_URL}/#website`,
				url: SITE_URL,
				name: SITE_NAME,
				description: SITE_DESCRIPTION,
				inLanguage: SITE_LANGUAGE,
				publisher: { '@id': `${SITE_URL}/#person` },
			},
			{
				'@type': 'Person',
				'@id': `${SITE_URL}/#person`,
				name: SITE_AUTHOR,
				jobTitle: SITE_JOB_TITLE,
				url: SITE_URL,
				email: SITE_EMAIL,
				sameAs: [...SITE_PROFILES],
				worksFor: { '@type': 'Organization', name: SITE_NAME },
				knowsAbout: [...SITE_KNOWS_ABOUT],
			},
		],
	};
}
