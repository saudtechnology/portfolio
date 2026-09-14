import { SITE_DESCRIPTION } from '../site/identity';

export const locales = ['en-US', 'pt-BR'] as const;
export type Locale = (typeof locales)[number];

export const messages = {
	'en-US': {
		description: SITE_DESCRIPTION,
		notFoundTitle: 'Page not found',
		notFoundBack: 'Back to home',
		errorTitle: 'Failed to load',
		errorRetry: 'Try again',
		loading: 'Loading',
	},
	'pt-BR': {
		description:
			'Senior AI & MLOps Engineering and Principal Frontend Engineering — architecting intelligent systems, scalable software, and high-performance digital products.',
		notFoundTitle: 'Página não encontrada',
		notFoundBack: 'Voltar ao início',
		errorTitle: 'Falha ao carregar',
		errorRetry: 'Tentar novamente',
		loading: 'Carregando',
	},
} as const;

export function detectLocale(tag = ''): Locale {
	return tag.toLowerCase().startsWith('pt') ? 'pt-BR' : 'en-US';
}
