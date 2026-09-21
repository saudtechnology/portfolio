import type { LocaleType } from './locales';

/**
 * Chrome / shell UI copy (nav, footer, aria, shared labels).
 * Consumed via `useActiveLocale().translation.UI` — no inline locale ternaries.
 */
export type UiTranslationType = Readonly<{
	NAV: Readonly<{
		ABOUT: string;
		PROJECTS: string;
		SOCIAL_PROOF: string;
		BENEFITS: string;
		CREDENTIALS: string;
		EXPERIENCE: string;
		SERVICES: string;
		FAQ: string;
		ARIA_PRIMARY: string;
		OPEN_MENU: string;
		CLOSE_MENU: string;
		DOWNLOAD_CV: string;
	}>;
	FOOTER: Readonly<{
		NAVIGATION: string;
		CONTACT: string;
		TAGLINE: string;
		RIGHTS: string;
	}>;
	COMMON: Readonly<{
		SKIP_TO_CONTENT: string;
		INTRODUCTION: string;
		ALL_PROJECTS: string;
		YEAR: string;
		CLIENT: string;
		DURATION: string;
		LOCATION: string;
		START_CONVERSATION: string;
		START_PROJECT: string;
	}>;
}>;

const EN: UiTranslationType = {
	NAV: {
		ABOUT: 'About',
		PROJECTS: 'Projects',
		SOCIAL_PROOF: 'Social proof',
		BENEFITS: 'Benefits',
		CREDENTIALS: 'Credentials',
		EXPERIENCE: 'Experience',
		SERVICES: 'Services',
		FAQ: 'FAQ',
		ARIA_PRIMARY: 'Primary navigation',
		OPEN_MENU: 'Open menu',
		CLOSE_MENU: 'Close menu',
		DOWNLOAD_CV: 'Download CV',
	},
	FOOTER: {
		NAVIGATION: 'Navigation',
		CONTACT: 'Contact',
		TAGLINE: 'Engineering Intelligence. Architecting the Future.',
		RIGHTS: 'All rights reserved.',
	},
	COMMON: {
		SKIP_TO_CONTENT: 'Skip to main content',
		INTRODUCTION: 'Introduction',
		ALL_PROJECTS: 'All projects',
		YEAR: 'Year',
		CLIENT: 'Client',
		DURATION: 'Duration',
		LOCATION: 'Location',
		START_CONVERSATION: 'Start a Conversation',
		START_PROJECT: 'Start a project',
	},
};

const PT: UiTranslationType = {
	NAV: {
		ABOUT: 'Sobre',
		PROJECTS: 'Projetos',
		SOCIAL_PROOF: 'Prova social',
		BENEFITS: 'Benefícios',
		CREDENTIALS: 'Credenciais',
		EXPERIENCE: 'Experiência',
		SERVICES: 'Serviços',
		FAQ: 'FAQ',
		ARIA_PRIMARY: 'Navegação principal',
		OPEN_MENU: 'Abrir menu',
		CLOSE_MENU: 'Fechar menu',
		DOWNLOAD_CV: 'Baixar CV',
	},
	FOOTER: {
		NAVIGATION: 'Navegação',
		CONTACT: 'Contato',
		TAGLINE: 'Engenharia de inteligência. Arquitetando o futuro.',
		RIGHTS: 'Todos os direitos reservados.',
	},
	COMMON: {
		SKIP_TO_CONTENT: 'Ir para o conteúdo principal',
		INTRODUCTION: 'Introdução',
		ALL_PROJECTS: 'Todos os projetos',
		YEAR: 'Ano',
		CLIENT: 'Cliente',
		DURATION: 'Duração',
		LOCATION: 'Local',
		START_CONVERSATION: 'Iniciar uma Conversa',
		START_PROJECT: 'Iniciar um projeto',
	},
};

export const UI_TRANSLATION: Readonly<Record<LocaleType, UiTranslationType>> = {
	'en-US': EN,
	'pt-BR': PT,
};

export default UI_TRANSLATION;
