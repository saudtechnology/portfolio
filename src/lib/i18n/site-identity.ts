import { detectLocale, FullLocaleType, LocaleType } from './locales';

/**
 * Structural contract defining the schema of localized identity assets.
 * Enforces a strict read-only nature for predictable data flow.
 */
export type SiteIdentityTranslationType = Readonly<{
	SITE: { DESCRIPTION: string; MOTTO: string; KEYWORDS: string[] };
	AUTHOR: { JOB_TITLE: string };
}>;

/**
 * Functional factory that generates job title profiles for the author.
 * Encapsulates the localized strings for professional roles and compiles them into a unified format.
 *
 * @returns A read-only record dictionary containing engineering position titles split by LocaleType.
 */
const getAuthorJobPositionConfig = (): Readonly<Record<LocaleType, Record<'FIRST' | 'SECOND' | 'FULL', string>>> => {
	const getAuthorJobPosition = (locale: LocaleType) => {
		const { state } = detectLocale(locale);

		const FIRST = state.isEnUS ? 'Senior AI & MLOps Engineering' : 'Engenheiro Sênior de IA & MLOps';
		const SECOND = state.isEnUS ? 'Principal FrontEnd Engineering' : 'Principal Engenheiro FrontEnd';

		return { FIRST, SECOND, FULL: `${FIRST} • ${SECOND}` };
	};

	return {
		'en-US': getAuthorJobPosition('en-US'),
		'pt-BR': getAuthorJobPosition('pt-BR'),
	};
};

/**
 * Functional factory that generates description metadata for SEO indexing.
 * Combines structural job position tokens with descriptive marketing taglines seamlessly.
 *
 * @returns A read-only record dictionary mapping the semantic site descriptions across active locales.
 */
const getSiteDescriptionConfig = (): Readonly<Record<LocaleType, Record<'LAST' | 'FULL', string>>> => {
	const AUTHOR_POSITION_CONFIG = getAuthorJobPositionConfig();

	const getAuthorJobPosition = (locale: LocaleType) => {
		const { state } = detectLocale(locale);

		const LAST = state.isEnUS
			? 'architecting intelligent systems, scalable software, and high-performance digital products.'
			: 'arquitetando sistemas inteligentes, software escalável e produtos digitais de alto desempenho.';

		return { LAST, FULL: `${AUTHOR_POSITION_CONFIG[locale].FULL} — ${LAST}` };
	};

	return {
		'en-US': getAuthorJobPosition('en-US'),
		'pt-BR': getAuthorJobPosition('pt-BR'),
	};
};

// Initialize the localized configuration indexes to prepare data injection mapping
const SITE_DESCRIPTION_CONFIG = getSiteDescriptionConfig();
const AUTHOR_JOB_POSITION_CONFIG = getAuthorJobPositionConfig();

/**
 * The official immutable dictionary catalog mapping SEO metadata and brand translations.
 * Implements a strict conditional mapped type that resolves to 'null' for language-agnostic 'global' queries
 * and enforces the presence of the SiteIdentityTranslationType schema on active languages.
 */
export const SITE_IDENTITY_TRANSLATION: Readonly<{
	[L in FullLocaleType]: L extends 'global'
		? null
		: { [K in keyof SiteIdentityTranslationType]: SiteIdentityTranslationType[K] };
}> = {
	global: null,
	'en-US': {
		AUTHOR: { JOB_TITLE: AUTHOR_JOB_POSITION_CONFIG['en-US'].FULL },
		SITE: {
			DESCRIPTION: SITE_DESCRIPTION_CONFIG['en-US'].FULL,
			MOTTO: 'Engineering Intelligence. Architecting the Future.',
			KEYWORDS: [
				'AI Engineering',
				'Artificial Intelligence',
				'Machine Learning',
				'Generative AI',
				'Large Language Models',
				'LLM Applications',
				'Retrieval-Augmented Generation',
				'RAG',
				'Agentic AI',
				'AI Agents',
				'Multimodal AI',
				'Computer Vision',
				'MLOps',
				'Machine Learning Operations',
				'ML Model Deployment',
				'Model Serving',
				'ML Pipelines',
				'Model Monitoring',
				'AI Observability',
				'Software Architecture',
				'Distributed Systems',
				'Cloud Architecture',
				'API Architecture',
				'Event-Driven Architecture',
				'Microservices',
				'Domain-Driven Design',
				'Principal Frontend Engineering',
				'Frontend Architecture',
				'Web Application Architecture',
				'Web Performance',
				'Design Systems',
				'Micro Frontends',
				'Real-Time Web Applications',
				'High-Scale Engineering',
				'Performance Engineering',
				'Observability',
				'Reliability Engineering',
				'Secure Software Engineering',
			],
		},
	},
	'pt-BR': {
		AUTHOR: { JOB_TITLE: AUTHOR_JOB_POSITION_CONFIG['pt-BR'].FULL },
		SITE: {
			DESCRIPTION: SITE_DESCRIPTION_CONFIG['pt-BR'].FULL,
			MOTTO: 'Inteligência de Engenharia. Arquitetando o Futuro.',
			KEYWORDS: [
				'Engenharia de IA',
				'Inteligência Artificial',
				'Aprendizado de Máquina',
				'IA generativa',
				'Grandes Modelos de Linguagem',
				'Aplicações LLM',
				'Geração Aumentada de Recuperação',
				'PAO',
				'Agentic AI',
				'Agentes de IA',
				'IA multimodal',
				'Visão computacional',
				'MLOps',
				'Operações de Aprendizado de Máquina',
				'Implantação do Modelo ML',
				'Serção de Modelo',
				'ML Pipelines',
				'Monitoramento de Modelo',
				'Observabilidade da IA',
				'Arquitetura de Software',
				'Sistemas Distribuídos',
				'Arquitetura de Nuvem',
				'Arquitetura de API',
				'Arquitetura Orientada a Eventos',
				'Microsserviços',
				'Design Orientado por Domínio',
				'Engenharia Frontal Principal',
				'Arquitetura de Frontend',
				'Arquitetura de Aplicativos da Web',
				'Desempenho da Web',
				'Sistemas de Design',
				'Micro Frontends',
				'Aplicativos Web em Tempo Real',
				'Engenharia de Alta Escala',
				'Engenharia de Desempenho',
				'Observabilidade',
				'Engenharia de Responsabilidade',
				'Engenharia de Software Segura',
			],
		},
	},
};

export default SITE_IDENTITY_TRANSLATION;
