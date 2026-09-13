import { SITE_AUTHOR, SITE_DESCRIPTION, SITE_MOTTO, SITE_NAME, SITE_URL } from '@/lib/site';

export function JsonLd() {
	const graph = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebSite',
				'@id': `${SITE_URL}/#website`,
				url: SITE_URL,
				name: SITE_NAME,
				description: SITE_DESCRIPTION,
				inLanguage: 'pt-BR',
				publisher: { '@id': `${SITE_URL}/#person` },
			},
			{
				'@type': 'Person',
				'@id': `${SITE_URL}/#person`,
				name: SITE_AUTHOR,
				jobTitle: 'Principal Frontend Engineer · AI & MLOps Engineer',
				url: SITE_URL,
				email: 'thiago@saudtechnology.com',
				sameAs: ['https://github.com/thiagosaud', 'https://www.linkedin.com/in/thiagosaud'],
				worksFor: { '@type': 'Organization', name: SITE_NAME },
				knowsAbout: ['Frontend architecture', 'AI', 'MLOps', SITE_MOTTO],
			},
		],
	};

	return (
		<script
			type="application/ld+json"
			// Static export: JSON-LD must ship in the first HTML document.
			dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
		/>
	);
}
