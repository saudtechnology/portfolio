import { LocaleType } from '@/lib/i18n/locales';

export type Project = Readonly<{
	slug: string;
	title: string;
	category: string;
	year: string;
	summary: string;
	client?: string;
	duration?: string;
	location?: string;
	description: string;
	tags: string[];
}>;

export type ProjectsContent = Readonly<{
	label: string;
	title: string;
	subtitle: string;
	items: Project[];
}>;

const PROJECTS: Record<LocaleType, ProjectsContent> = {
	'en-US': {
		label: 'Work',
		title: 'Projects',
		subtitle:
			'Production systems across regulated finance, AI/ML and spatial computing — built for scale, compliance and measurable business impact.',
		items: [
			{
				slug: 'btg-pactual-home-broker-web',
				title: 'Home Broker — Real-Time Electronic Digital Trading Web Platform',
				category: 'Front-End · White-Label',
				year: '2023–2026',
				summary:
					'White-label digital trading platform for high-frequency real-time operations in a regulated investment bank environment.',
				client: 'Banco BTG Pactual — Digital Equities Vertical',
				duration: '3+ years',
				location: 'São Paulo, BR (Remote)',
				description:
					'Architected and led delivery of a white-label Home Broker for Digital Equities at Latin America’s largest investment bank. Real-time market data, order flow and resilient UI under strict regulatory constraints. Angular + Signals/NgRx, micro-frontends, observability and AI-assisted engineering workflows that cut delivery time by ~65% while raising code quality.',
				tags: [
					'Angular',
					'Signals',
					'NgRx',
					'Micro-frontends',
					'TypeScript',
					'Real-time',
					'WebSockets',
					'RxJS',
					'Nx',
					'Regulated Finance',
					'Trading',
					'White-label',
					'Observability',
					'Performance',
				],
			},
			{
				slug: 'btg-pactual-coe-web-platform',
				title: 'Structured Operations Certificates Products Web Platform',
				category: 'Front-End · White-Label',
				year: '2023–2026',
				summary:
					'End-to-end platform for Structured Operations Certificates (COE) — issuance, distribution and lifecycle in a compliance-heavy context.',
				client: 'Banco BTG Pactual — Digital Equities Vertical',
				duration: '1 month',
				location: 'São Paulo, BR (Remote)',
				description:
					'Designed and shipped the structured-products (COE) experience for institutional and retail flows. Complex authorization, product composition and audit-friendly journeys on a modular Angular micro-frontend architecture aligned with bank-wide design system and engineering governance (RFCs/ADRs).',
				tags: [
					'Angular',
					'Micro-frontends',
					'TypeScript',
					'AuthN/AuthZ',
					'Compliance',
					'Structured Products',
					'COE',
					'Financial Services',
					'Design System',
					'RFC/ADR',
				],
			},
			{
				slug: 'btg-pactual-digital-equities-ds',
				title: 'Digital Equities Design System',
				category: 'Front-End · White-Label · Design System',
				year: '2023–2026',
				summary:
					'Angular component library and design system for the Digital Equities vertical — shared private packages accelerating regulated product delivery.',
				client: 'Banco BTG Pactual — Digital Equities Vertical',
				duration: '1 week',
				location: 'São Paulo, BR (Remote)',
				description:
					'Designed and governed the reusable Angular component library for the entire Digital Equities vertical — accessible, documented components (Storybook), tokens and contribution model. Reduced UI inconsistency and sped up front-end delivery across Home Broker, COE and related regulated products with shared private libraries and a strong a11y baseline.',
				tags: [
					'Design System',
					'Angular',
					'Storybook',
					'Accessibility',
					'WCAG',
					'Nx',
					'Component Library',
					'Design Tokens',
					'Documentation',
					'Private NPM',
					'Digital Equities',
				],
			},
			{
				slug: 'xp-investimentos-black-sales',
				title: 'Black Sales — Strucutured & Derivatives Products Web Platform',
				category: 'Front-End · Sales Platform',
				year: '2021–2022',
				summary:
					'Operations-desk platform for registration and distribution of structured products and derivatives for Global Markets.',
				client: 'XP Investimentos — Global Markets Vertical · Treasury',
				duration: '1+ year',
				location: 'São Paulo, BR (Remote)',
				description:
					'Built critical desk workflows for distribution of structured products and derivatives. React micro-frontends, GraphQL data layer and SOMA design system supporting high-stakes operational flows for the trading desk in a multi-million client brokerage.',
				tags: [
					'React',
					'TypeScript',
					'Micro-frontends',
					'GraphQL',
					'SOMA DS',
					'Derivatives',
					'Structured Products',
					'Trading Desk',
					'Global Markets',
					'Brokerage',
				],
			},
			{
				slug: 'xp-investimentos-black-aai',
				title: 'Black AAI — Structured Products & Portfolio Management Web Platform',
				category: 'Front-End · Advisor Platform',
				year: '2021–2022',
				summary:
					'Advisor-facing platform for profile analysis, recommendation and portfolio management at scale (~12K advisors).',
				client: 'XP Investimentos — Global Markets Vertical · Treasury',
				duration: '1+ year',
				location: 'São Paulo, BR (Remote)',
				description:
					'Delivered the Black AAI experience for investment advisors — profiling, recommendations and portfolio tooling serving ~12K advisors and ~4.5M active clients, in an ecosystem supporting R$1.2T in assets. React, GraphQL and modular architecture.',
				tags: [
					'React',
					'TypeScript',
					'GraphQL',
					'Micro-frontends',
					'Portfolio Management',
					'Advisor Tools',
					'Recommendation',
					'Fintech',
					'Scale',
					'SOMA DS',
				],
			},
			{
				slug: 'zoox-pms-web',
				title: 'PMS — Hotel Property Management Web Platform',
				category: 'Front-End · Artificial Intelligence · Computer Vision',
				year: '2020',
				summary:
					'Async check-in / check-out journey on a complex white-label PMS — fewer operational bottlenecks at peak occupancy, real-time OTA billing integration.',
				client: 'Zoox Technologia',
				duration: 'Jul 2020 — Nov 2020',
				location: 'Rio de Janeiro, BR (Remote)',
				description:
					'Built the guest digital journey on a high-complexity white-label PMS: asynchronous check-in and check-out components that cut operational wait time and removed bottlenecks during access spikes. Integrated real-time billing with global OTAs (Booking.com, Expedia, Agoda) to eliminate data races and overbooking, plus an in-room monetization module with centralized state (Vuex). Vue.js, Vuetify, Docker, PostgreSQL.',
				tags: [
					'Vue.js',
					'Vuetify',
					'Vuex',
					'Docker',
					'PostgreSQL',
					'Check-in',
					'Check-out',
					'OTA',
					'PMS',
					'Hospitality',
					'White-label',
					'Real-time Billing',
				],
			},
			{
				slug: 'aliansce-bi-geospatial-web',
				title: 'BI Geospatial Web Platform',
				category: 'Front-End · BI Geospatial',
				year: '2017–2019',
				summary:
					'Framework-free spatial BI platform mapping multi-floor shopping metrics and revenue indicators on interactive maps.',
				client: 'Aliansce (Shopping Centers Administrator) — via NEORIS',
				duration: 'Strategic product',
				location: 'Rio de Janeiro, BR (Hybrid)',
				description:
					'Conceived and built a vanilla JavaScript OOP web platform for spatial business intelligence across multi-floor malls. Interactive maps (Google Maps/Drawing APIs), dynamic SVG overlays and store-level revenue metrics for executive decision-making — with OWASP-oriented input validation from day one.',
				tags: [
					'JavaScript',
					'OOP',
					'Google Maps API',
					'SVG',
					'Geospatial',
					'Business Intelligence',
					'OWASP',
					'Vanilla JS',
					'Data Visualization',
					'Retail Analytics',
				],
			},
			{
				slug: 'aliansce-spatial-metrics-mobile',
				title: 'Real-time Spatial Metrics Visualization Mobile App (AR/VR)',
				category: 'Native Android App · AR/VR · Spatial Computing',
				year: '2017–2019',
				summary:
					'Native Android AR app overlaying real-time operational metrics on physical retail spaces via optical target tracking.',
				client: 'Aliansce (Shopping Centers Administrator) — via NEORIS',
				duration: 'Strategic product',
				location: 'Rio de Janeiro, BR (Hybrid)',
				description:
					'Native Android spatial computing app using Vuforia for 3D tracking and optical target recognition. Real-time AR overlays of operational KPIs in physical mall environments — bridging geospatial BI and immersive visualization for field and executive use.',
				tags: [
					'Java',
					'Android',
					'Vuforia',
					'AR',
					'VR',
					'Spatial Computing',
					'Geolocation',
					'3D Tracking',
					'Mobile',
					'Retail Tech',
				],
			},
			{
				slug: 'neoris-spatial-metrics-mobile',
				title: 'Real-Time Spatial 3D Dashboards Metrics Visualization Mobile App (AR/VR)',
				category: 'Native Android App · AR/VR · Executive BI Vision',
				year: '2017–2019',
				summary:
					'Native Android prototype rendering volumetric 3D dashboards fed by live BI for executive presentations.',
				client: 'NEORIS',
				duration: 'Internal PoC',
				location: 'Rio de Janeiro, BR (Hybrid)',
				description:
					'Built an internal AR/VR-oriented Android prototype for executive storytelling: volumetric 3D dashboard rendering driven by live business intelligence feeds, using Vuforia and geolocation for spatial presentation contexts.',
				tags: [
					'Java',
					'Android',
					'Vuforia',
					'AR',
					'3D Visualization',
					'Business Intelligence',
					'Executive Reporting',
					'Geolocation',
					'PoC',
					'Spatial Computing',
				],
			},
			{
				slug: 'neoris-web-vision',
				title: 'Media Computer Vision Web Platform',
				category: 'Front-End · AI/ML · Computer Vision',
				year: '2017–2019',
				summary:
					'Web prototype for async media ingestion with object detection, people tracking, demographic classification and content moderation.',
				client: 'NEORIS',
				duration: 'Internal PoC',
				location: 'Rio de Janeiro, BR (Hybrid)',
				description:
					'Designed a vanilla JS web prototype integrating Microsoft Azure Cognitive Services for automated media understanding: object detection, people tracking, demographic classification and content moderation — early foundation in Computer Vision and AI Engineering applied to product flows.',
				tags: [
					'JavaScript',
					'Azure Cognitive Services',
					'Computer Vision',
					'Object Detection',
					'Content Moderation',
					'AI Engineering',
					'Async Upload',
					'Media Pipeline',
					'Cognitive APIs',
					'PoC',
				],
			},
		],
	},
	'pt-BR': {
		label: 'Trabalho',
		title: 'Projetos',
		subtitle:
			'Sistemas em produção em finanças reguladas, AI/ML e computação espacial — construídos para escala, compliance e impacto de negócio mensurável.',
		items: [
			{
				slug: 'btg-pactual-home-broker-web',
				title: 'Home Broker — Plataforma Web de Trading Eletrônico Digital em Tempo Real',
				category: 'Front-End · White-Label',
				year: '2023–2026',
				summary:
					'Plataforma digital de trading white-label para operações em tempo real de alta frequência em ambiente bancário regulado.',
				client: 'Banco BTG Pactual — Vertical Digital Equities',
				duration: '3+ anos',
				location: 'São Paulo, BR (Remoto)',
				description:
					'Arquitetei e liderei a entrega do Home Broker white-label para Digital Equities no maior banco de investimento da América Latina. Dados de mercado em tempo real, fluxo de ordens e UI resiliente sob restrições regulatórias. Angular + Signals/NgRx, micro-frontends, observabilidade e workflows de engenharia assistidos por IA com ~65% de redução no tempo de entrega.',
				tags: [
					'Angular',
					'Signals',
					'NgRx',
					'Micro-frontends',
					'TypeScript',
					'Tempo real',
					'WebSockets',
					'RxJS',
					'Nx',
					'Finanças Reguladas',
					'Trading',
					'White-label',
					'Observabilidade',
					'Performance',
				],
			},
			{
				slug: 'btg-pactual-coe-web-platform',
				title: 'Plataforma Web de Produtos de Certificados de Operações Estruturadas',
				category: 'Front-End · White-Label',
				year: '2023–2026',
				summary:
					'Plataforma ponta a ponta para Certificados de Operações Estruturadas — emissão, distribuição e ciclo de vida com forte compliance.',
				client: 'Banco BTG Pactual — Digital Equities',
				duration: '1 mês',
				location: 'São Paulo, BR (Remoto)',
				description:
					'Concepção e entrega da experiência de produtos estruturados (COE) para fluxos institucionais e varejo. Autorização complexa, composição de produtos e jornadas auditáveis em arquitetura Angular modular (micro-frontends), alinhada ao design system e à governança de engenharia (RFCs/ADRs).',
				tags: [
					'Angular',
					'Micro-frontends',
					'TypeScript',
					'AuthN/AuthZ',
					'Compliance',
					'Produtos Estruturados',
					'COE',
					'Serviços Financeiros',
					'Design System',
					'RFC/ADR',
				],
			},
			{
				slug: 'btg-pactual-digital-equities-ds',
				title: 'Digital Equities Design System',
				category: 'Front-End · White-Label · Design System',
				year: '2023–2026',
				summary:
					'Biblioteca de componentes Angular e design system da vertical Digital Equities — pacotes privados compartilhados acelerando a entrega de produtos regulados.',
				client: 'Banco BTG Pactual — Vertical Digital Equities',
				duration: '1 semana',
				location: 'São Paulo, BR (Remoto)',
				description:
					'Concepção e governança da biblioteca de componentes Angular reutilizáveis para toda a vertical Digital Equities — componentes acessíveis e documentados (Storybook), tokens e modelo de contribuição. Menos inconsistência de UI e mais velocidade de entrega em Home Broker, COE e produtos relacionados, com bibliotecas privadas compartilhadas e baseline forte de a11y.',
				tags: [
					'Design System',
					'Angular',
					'Storybook',
					'Acessibilidade',
					'WCAG',
					'Nx',
					'Component Library',
					'Design Tokens',
					'Documentação',
					'NPM Privado',
					'Digital Equities',
				],
			},
			{
				slug: 'xp-investimentos-black-sales',
				title: 'Black Sales — Plataforma Web de Produtos Estruturados e Derivativos',
				category: 'Front-End · Plataforma para a Mesa de Operações',
				year: '2021–2022',
				summary:
					'Plataforma da mesa para cadastro e distribuição de produtos estruturados e derivativos em Global Markets.',
				client: 'XP Investimentos — Vertical Global Markets · Tesouraria',
				duration: '1+ ano',
				location: 'São Paulo, BR (Remoto)',
				description:
					'Workflows críticos da mesa para distribuição de produtos estruturados e derivativos. Micro-frontends React, GraphQL e design system SOMA em fluxos operacionais de alta responsabilidade.',
				tags: [
					'React',
					'TypeScript',
					'Micro-frontends',
					'GraphQL',
					'SOMA DS',
					'Derivativos',
					'Produtos Estruturados',
					'Mesa de Trading',
					'Global Markets',
					'Corretora',
				],
			},
			{
				slug: 'xp-investimentos-black-aai',
				title: 'Black AAI — Plataforma Web de Gerenciamento de Produtos Estruturados e Portfólio',
				category: 'Front-End · Plataforma para Assessores',
				year: '2021–2022',
				summary:
					'Plataforma para assessores: análise de perfil, recomendação e gestão de portfólio em escala (~12K assessores).',
				client: 'XP Investimentos — Vertical Global Markets · Tesouraria',
				duration: '1+ ano',
				location: 'São Paulo, BR (Remoto)',
				description:
					'Experiência Black AAI para assessores de investimento — perfil, recomendações e ferramentas de portfólio para ~12K assessores e ~4,5M clientes ativos, em ecossistema com R$1,2T em ativos.',
				tags: [
					'React',
					'TypeScript',
					'GraphQL',
					'Micro-frontends',
					'Gestão de Portfólio',
					'Ferramentas AAI',
					'Recomendação',
					'Fintech',
					'Escala',
					'SOMA DS',
				],
			},
			{
				slug: 'zoox-pms-web',
				title: 'PMS — Plataforma Web de Gestão de Propriedade Hoteleira',
				category: 'Front-End · Inteligência Artificial · Visão Computacional',
				year: '2020',
				summary:
					'Jornada assíncrona de check-in / check-out em PMS white-label de alta complexidade — menos gargalos operacionais em picos e integração de faturamento em tempo real com OTAs.',
				client: 'Zoox Tecnologia',
				duration: 'Jul 2020 — Nov 2020',
				location: 'Rio de Janeiro, BR (Remoto)',
				description:
					'Jornada digital do hóspede em PMS white-label de alta complexidade: componentes assíncronos de check-in e check-out que reduziram o tempo de espera operacional e eliminaram gargalos em picos de acesso. Integração de faturamento em tempo real com OTAs globais (Booking.com, Expedia, Agoda) para eliminar corridas de dados e overbooking, além de módulo de monetização in-room com estado centralizado (Vuex). Vue.js, Vuetify, Docker, PostgreSQL.',
				tags: [
					'Vue.js',
					'Vuetify',
					'Vuex',
					'Docker',
					'PostgreSQL',
					'Check-in',
					'Check-out',
					'OTA',
					'PMS',
					'Hospitalidade',
					'White-label',
					'Faturamento em tempo real',
				],
			},
			{
				slug: 'aliansce-bi-geospatial-web',
				title: 'Plataforma Web de BI Geoespacial',
				category: 'Front-End · BI Geoespacial',
				year: '2017–2019',
				summary:
					'Plataforma web sem frameworks para BI espacial: métricas multi-andar de shoppings em mapas interativos.',
				client: 'Aliansce (Administrador de Shopping Centers) — via NEORIS',
				duration: 'Produto estratégico',
				location: 'Rio de Janeiro, BR (Híbrido)',
				description:
					'Plataforma JavaScript OOP vanilla para inteligência de negócio espacial em shoppings multi-andar. Mapas interativos (Google Maps/Drawing), SVG dinâmico e indicadores de faturamento por loja — com validação orientada a OWASP desde a concepção.',
				tags: [
					'JavaScript',
					'OOP',
					'Google Maps API',
					'SVG',
					'Geoespacial',
					'Business Intelligence',
					'OWASP',
					'Vanilla JS',
					'Visualização de Dados',
					'Varejo',
				],
			},
			{
				slug: 'aliansce-spatial-metrics-mobile',
				title: 'Aplicativo móvel para visualização de métricas espaciais em Tempo Real (AR/VR)',
				category: 'App Android Nativo · AR/VR · Computação Espacial',
				year: '2017–2019',
				summary:
					'App Android nativo de AR com overlay de métricas operacionais em tempo real sobre espaços físicos de varejo.',
				client: 'Aliansce (Administrador de Shopping Centers) — via NEORIS',
				duration: 'Produto estratégico',
				location: 'Rio de Janeiro, BR (Híbrido)',
				description:
					'App Android de computação espacial com Vuforia para rastreamento 3D e alvos ópticos. Overlays de KPIs operacionais em AR em ambientes de shopping — unindo BI geoespacial e visualização imersiva.',
				tags: [
					'Java',
					'Android',
					'Vuforia',
					'AR',
					'VR',
					'Computação Espacial',
					'Geolocalização',
					'Rastreamento 3D',
					'Mobile',
					'Retail Tech',
				],
			},
			{
				slug: 'neoris-spatial-metrics-mobile',
				title: 'Aplicativo móvel para visualização de métricas em dashboards 3D espaciais em tempo real (AR/VR)',
				category: 'App Android Nativo · AR/VR · Visão Executiva de BI',
				year: '2017–2019',
				summary:
					'Protótipo Android nativo com dashboards volumétricos 3D alimentados por BI ao vivo para apresentações executivas.',
				client: 'NEORIS',
				duration: 'PoC interna',
				location: 'Rio de Janeiro, BR (Híbrido)',
				description:
					'Protótipo interno AR/VR para storytelling executivo: renderização volumétrica 3D de dashboards com feeds de BI em tempo real, usando Vuforia e geolocalização.',
				tags: [
					'Java',
					'Android',
					'Vuforia',
					'AR',
					'Visualização 3D',
					'Business Intelligence',
					'Reporting Executivo',
					'Geolocalização',
					'PoC',
					'Computação Espacial',
				],
			},
			{
				slug: 'neoris-web-vision',
				title: 'Plataforma Web de Visão Computacional de Mídia',
				category: 'Front-End · AI/ML · Visão Computacional',
				year: '2017–2019',
				summary:
					'Protótipo web de ingestão assíncrona de mídia com detecção de objetos, rastreamento de pessoas, classificação demográfica e moderação.',
				client: 'NEORIS',
				duration: 'PoC interna',
				location: 'Rio de Janeiro, BR (Híbrido)',
				description:
					'Protótipo web em JS vanilla integrado ao Microsoft Azure Cognitive Services para compreensão automatizada de mídia: detecção de objetos, rastreamento de pessoas, classificação demográfica e moderação de conteúdo — base precoce em Computer Vision e AI Engineering.',
				tags: [
					'JavaScript',
					'Azure Cognitive Services',
					'Computer Vision',
					'Detecção de Objetos',
					'Moderação de Conteúdo',
					'AI Engineering',
					'Upload Assíncrono',
					'Pipeline de Mídia',
					'APIs Cognitivas',
					'PoC',
				],
			},
		],
	},
};

export default PROJECTS;
