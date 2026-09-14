import { SITE_DESCRIPTION, SITE_MOTTO } from '../site/identity';

export const locales = ['en-US', 'pt-BR'] as const;
export type Locale = (typeof locales)[number];

export const messages = {
	'en-US': {
		motto: SITE_MOTTO,
		description: SITE_DESCRIPTION,
		notFoundTitle: 'Page not found',
		notFoundBack: 'Back to home',
		errorTitle: 'Failed to load',
		errorRetry: 'Try again',
		loading: 'Loading',
	},
	'pt-BR': {
		motto: 'Inteligência de Engenharia. Arquitetando o Futuro.',
		description:
			'Engenheiro Sênior de IA e MLOps • Principal Engenheiro de Frontend — arquitetando sistemas inteligentes, software escalável e produtos digitais de alto desempenho.',
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
