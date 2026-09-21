import { LocaleType } from './locales';

/**
 * Structural contract for all pages config.
 */
type GlobalPageSectionConfigType = Readonly<{ LABEL: string }>;

/**
 * Structural contract for about page config.
 */
type AboutPageSectionConfigType = GlobalPageSectionConfigType &
	Readonly<{
		LEAD: string;
		BODY: string[];
		BUTTON_CTA_LABEL: string;
	}>;

/**
 * The official immutable dictionary index mapping layout and message translations for page sections.
 * Uses a Mapped Type bounded directly by LocaleType to guarantee perfect internationalization sync across all locales.
 */
export const PAGE_SECTION_TRANSLATION: Readonly<{
	[L in LocaleType]: {
		[
			K in 'ABOUT' | 'PROJECTS' | 'SOCIAL_PROOF' | 'BENEFITS' | 'CREDENTIALS' | 'EXPERIENCE' | 'SERVICES' | 'FAQ'
		]: K extends 'ABOUT' ? AboutPageSectionConfigType : GlobalPageSectionConfigType;
	};
}> = {
	'en-US': {
		ABOUT: {
			LABEL: 'About',
			LEAD: 'Driven by curiosity, clarity and craft. With a focus on strategy and technical storytelling, I shape ideas into systems and digital experiences that connect and endure.',
			BODY: [
				'I work at the intersection of artificial intelligence, MLOps and principal-level frontend engineering. My work combines the rigor of distributed systems with attention to user experience and long-term maintainability.',
				'Throughout my career I have helped teams move from fragile prototypes to production platforms that are observable, scalable and ready for continuous evolution.',
			],
			BUTTON_CTA_LABEL: 'Start a Conversation →',
		},
		PROJECTS: { LABEL: 'Projects' },
		SOCIAL_PROOF: { LABEL: 'Social Proof' },
		BENEFITS: { LABEL: 'Benefits' },
		CREDENTIALS: { LABEL: 'Credentials' },
		EXPERIENCE: { LABEL: 'Experience' },
		SERVICES: { LABEL: 'Service' },
		FAQ: { LABEL: 'FAQ' },
	},
	'pt-BR': {
		ABOUT: {
			LABEL: 'Sobre',
			LEAD: 'Sou orientado por curiosidade, clareza e craft. Com foco em estratégia e storytelling técnico, transformo ideias em sistemas e experiências digitais que conectam e perduram.',
			BODY: [
				'Atuo na interseção entre inteligência artificial, MLOps e engenharia frontend de alto nível. Meu trabalho combina rigor de sistemas distribuídos com atenção à experiência do usuário e à manutenibilidade de longo prazo.',
				'Ao longo da carreira ajudei times a sair de protótipos frágeis para plataformas de produção observáveis, escaláveis e preparadas para evolução contínua.',
			],
			BUTTON_CTA_LABEL: 'Iniciar uma Conversa →',
		},
		PROJECTS: { LABEL: 'Projetos' },
		SOCIAL_PROOF: { LABEL: 'Prova social' },
		BENEFITS: { LABEL: 'Benefícios' },
		CREDENTIALS: { LABEL: 'Credenciais' },
		EXPERIENCE: { LABEL: 'Experiência' },
		SERVICES: { LABEL: 'Serviços' },
		FAQ: { LABEL: 'FAQ' },
	},
};

export default PAGE_SECTION_TRANSLATION;
