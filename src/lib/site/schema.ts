import { Graph, IdReference, OrganizationLeaf, PersonLeaf, WebSiteLeaf } from 'schema-dts';
import SITE_IDENTITY from './identity';

/**
 * Generates the Structured Data (JSON-LD Graph) for the website identity and author.
 * Typed officially using 'schema-dts' with precise semantic property mappings.
 * Acts as an automated search optimization compiler tailored for highly structured static profiles on GitHub Pages.
 *
 * @returns A strictly validated schema.org Graph structure readable by semantic crawlers (Google, AI Agents).
 */
export function generateSiteJsonLd(): Graph {
	// Destructure global fallback metrics alongside contextually rich target localization dictionaries
	const { SITE, AUTHOR } = SITE_IDENTITY.global;
	const SITE_IDENTITY_CONFIG = SITE_IDENTITY['en-US'];

	/**
	 * Private string interpolator that maps entity types to unique absolute URI identifiers.
	 * Establishes structural entity anchors (#website, #person, #organization) crucial for semantic link resolution.
	 *
	 * @param type - The uppercase variant of structural schema leaf keys.
	 * @returns A safe string literal formatted as an official schema @id reference wrapper.
	 */
	const getGraphID = (
		type: Uppercase<WebSiteLeaf['@type'] | PersonLeaf['@type'] | OrganizationLeaf['@type']>
	): IdReference['@id'] => {
		let id = SITE.URL;

		if (type === 'WEBSITE') {
			id = `${id}/#website`;
		} else if (type === 'PERSON') {
			id = `${id}/#person`;
		} else if (type === 'ORGANIZATION') {
			id = `${id}/#organization`;
		}

		return id;
	};

	/**
	 * Private asset manager that maps entity scopes to ultra-optimized media paths inside the public distribution folder.
	 * Combines production compression outputs (.webp formats) with dedicated public paths to prevent absolute link failures.
	 *
	 * @param type - The target entity scope ('PERSON' or 'ORGANIZATION').
	 * @returns An absolute URL string referencing the designated graphic asset.
	 */
	const getJsonLdGraphImageSRC = (type: Uppercase<PersonLeaf['@type'] | OrganizationLeaf['@type']>): string => {
		let src = `${SITE.URL}/json-ld-graph`;

		if (type === 'PERSON') {
			src = `${src}/avatar.webp`; // High-density headshot profile optimized for Google Rich Card Panels.
		} else if (type === 'ORGANIZATION') {
			src = `${src}/logo.webp`; // Transparent logo vector optimized for Knowledge Panel visibility benchmarks.
		}

		return src;
	};

	return {
		'@context': 'https://schema.org',
		'@graph': [
			// 1. WebSite Node: Captures global digital properties and maps the site layout to its authoritative creator.
			{
				'@type': 'WebSite',
				'@id': getGraphID('WEBSITE'),
				url: SITE.URL,
				name: SITE.NAME,
				description: SITE_IDENTITY_CONFIG.SITE.DESCRIPTION,
				inLanguage: SITE.LOCALE_BASE.LANGUAGE,
				publisher: { '@id': getGraphID('PERSON') },
			},

			// 2. Person Node: The structural anchor representing you as the core subject matter authority.
			{
				'@type': 'Person',
				'@id': getGraphID('PERSON'),
				name: AUTHOR.NAME,
				jobTitle: SITE_IDENTITY_CONFIG.AUTHOR.JOB_TITLE,
				url: AUTHOR.PROFILE.GITHUB,
				email: AUTHOR.EMAIL,
				sameAs: AUTHOR.PROFILE.FULL,
				knowsAbout: SITE_IDENTITY_CONFIG.SITE.KEYWORDS, // Verified competence array mapped directly onto the human agent
				image: getJsonLdGraphImageSRC('PERSON'),

				// Corporate Relation Node: Formalizes the link between you and your technical brand.
				worksFor: {
					'@type': 'Organization',
					'@id': getGraphID('ORGANIZATION'),
					name: SITE.NAME,
					url: SITE.URL,
					logo: getJsonLdGraphImageSRC('ORGANIZATION'),
					legalName: SITE.LEGAL_NAME,
				},

				// Geographic Anchor: Drives visibility parameters for regional and international talent filters.
				address: {
					'@type': 'PostalAddress',
					addressLocality: SITE.ADDRESS.LOCALITY,
					addressRegion: SITE.ADDRESS.REGION,
					addressCountry: SITE.ADDRESS.COUNTRY,
				},
			},
		],
	};
}

export default generateSiteJsonLd;
