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
			'High-performance production systems across regulated finance, mission-critical architecture, AI/ML engineering, and spatial computing — engineered for enterprise scale, strict compliance, and direct business impact.',
		items: [
			{
				slug: 'btg-pactual-home-broker-web',
				title: 'Home Broker — Real-Time Electronic Digital Trading Web Platform',
				category: 'Front-End · White-Label · High-Frequency Trading',
				year: '2023–2026',
				summary:
					'Mission-critical white-label Home Broker web platform for high-frequency trading operations on B3, serving 4.8M customers and R$ 1.6T in AUM.',
				client: 'Banco BTG Pactual S.A. — Digital Equities Vertical',
				duration: '3+ years',
				location: 'São Paulo, BR (Remote)',
				description:
					'Led the architecture of the mission-critical white-label Home Broker Web platform for high-frequency trading operations on B3, powering an ecosystem supporting 4.8 million customers, R$ 1.6 trillion in AUM, 37% YoY high revenue, and a 28.1% ROAE. Spearheaded advanced rendering (GPU, Virtualization & Paging) and reactivity optimizations using Angular Signals & RxJS, cutting page load times by 45% and guaranteeing absolute 60 FPS fluidity under heavy real-time high-volatility financial data feeds. Deployed via an advanced micro-frontends architecture (Webpack Module Federation) backed by top-tier observability and security (Datadog, Sentry & OWASP Top 10).',
				tags: [
					'Web',
					'White-label',
					'Real-time High-Frequency Trading',
					'Financial Systems',
					'Regulated Finance',
					'Observability',
					'Performance',
					'Security',
					'Angular',
					'WebSockets',
				],
			},
			{
				slug: 'btg-pactual-coe-web-platform',
				title: 'Structured Operations Certificates Products Web Platform',
				category: 'Front-End · White-Label · Financial System',
				year: '2023–2026',
				summary:
					'White-label web platform for Structured Operations Certificates (COE), powering high-frequency operations on B3 with multi-million client scale.',
				client: 'Banco BTG Pactual S.A. — Digital Equities Vertical',
				duration: '1 month',
				location: 'São Paulo, BR (Remote)',
				description:
					'Architected the core web platform for Structured Operations Certificates (COE), powering high-frequency operations on B3 for an ecosystem supporting 4.8 million customers and R$ 1.6 trillion in AUM. Engineered advanced rendering and reactivity optimizations (Angular Signals & RxJS) that cut page load times by 45%, guaranteeing 60 FPS fluidity under real-time high-volatility financial data. Deployed via a scalable micro-frontends architecture backed by strict security and top-tier observability.',
				tags: ['Web', 'White-label', 'Financial Systems', 'Regulated Finance', 'Angular', 'Micro-frontends'],
			},
			{
				slug: 'btg-pactual-digital-equities-ds',
				title: 'Digital Equities Design System',
				category: 'Front-End · White-Label · Design System Governance',
				year: '2023–2026',
				summary:
					'Internal library of strategic components for the vertical itself (Digital Equities) and evolving the corporate Design System (ORQUESTRA).',
				client: 'Banco BTG Pactual S.A. — Digital Equities Vertical',
				duration: '1 month',
				location: 'São Paulo, BR (Remote)',
				description:
					'Designed component governance (Nx/Turborepo, Nexus, Storybook & Angular) and evolved the corporate Design System (ORQUESTRA), increasing code reuse by 60% and reducing visual defects by 35% (WCAG/A11Y). Adopted AI Engineering across the development, DevOps, and SecOps lifecycle, reducing delivery time by 65% and code defects by 80% via LLMs, MCP, Cursor/Copilot, Autonomous Agents, and Prompt & Harness Engineering.',
				tags: [
					'Web',
					'white-label',
					'Design System',
					'Component Library',
					'Component Governance',
					'Private NPM',
					'Angular',
					'Storybook',
					'Nx/Turborepo',
					'Nexus',
					'Accessibility',
					'WCAG',
					'A11y',
				],
			},
			{
				slug: 'xp-investimentos-black-sales',
				title: 'Black Sales — Strucutured & Derivatives Products Web Platform',
				category: 'Front-End · Sales Platform · Financial Systems',
				year: '2021–2022',
				summary:
					'Financial corporate web platform for registration and management of structured and derivative products, driving operations across a massive financial ecosystem of R$ 1.2 trillion in assets.',
				client: 'XP Investimentos S.A. — Global Markets Vertical · Treasury',
				duration: '1+ year',
				location: 'São Paulo, BR (Remote)',
				description:
					'Architected a corporate web-based financial platform for the registration and management of structured products and derivatives, facilitating operations within a massive financial ecosystem managing R$ 1.2 trillion in assets. I standardized 100% of legacy transition workflows by championing complex architectural guidelines (RFCs and ADRs) directly with C-level executives (CFO/Treasury) and Engineering Managers, accelerating technical approvals by 40%. I also evolved the corporate Design System (SOMA), driving a 50% increase in component reusability.',
				tags: [
					'Web',
					'Trade Desk',
					'Derivatives & Structured Products',
					'Financial Systems',
					'Regulated Finance',
					'React',
					'Micro-frontends',
					'GraphQL',
					'REST',
				],
			},
			{
				slug: 'xp-investimentos-black-aai',
				title: 'Black AAI — Structured Products & Portfolio Management Web Platform',
				category: 'Front-End · Advisor Platform · Financial Systems',
				year: '2021–2022',
				summary:
					'Financial corporate web platform for central distribution of structured products and derivatives of the Black Sales platform for the Treasury, serving 12,000 advisors, 4.5M active customers, and R$ 19.8B in gross revenue.',
				client: 'XP Investimentos S.A. — Global Markets Vertical · Treasury',
				duration: '1+ year',
				location: 'São Paulo, BR (Remote)',
				description:
					'Architected the web-based corporate financial platform for the centralized distribution of structured products and derivatives from the Black Sales platform to the Treasury, serving 12,000 advisors, 4.5 million active clients, R$ 1.2 trillion in assets, and R$ 19.8 billion in consolidated gross revenue. I implemented high-performance reactive workflows (React, GraphQL, Redux-Saga, DDD, and Clean Architecture) to support high-volume financial flows, ensuring absolute corporate stability and multi-platform asset operations.',
				tags: [
					'Web',
					'Portfolio Management',
					'Advisor Tools',
					'Derivatives & Structured Products',
					'Financial Systems',
					'Regulated Finance',
					'React',
					'GraphQL',
					'Micro-frontends',
					'GraphQL',
					'REST',
				],
			},
			{
				slug: 'zoox-pms-web',
				title: 'PMS — Hotel Property Management Web Platform',
				category: 'Front-End · AI · Computer Vision · Hospitality System',
				year: '2020',
				summary:
					'A white-label, mission-critical hotel PMS web platform that eliminates operational overbooking errors and manages automated check-in/out transactions for thousands of rooms daily, featuring real-time OTA billing and facial recognition.',
				client: 'Zoox Tecnologia Ltda.',
				duration: '4 months',
				location: 'Rio de Janeiro, BR (Remote)',
				description:
					'Developed a mission-critical white-label hotel PMS web platform, eliminating operational overbooking issues and managing automated check-in/out transactions for thousands of rooms daily. I architected real-time billing systems integrating global OTAs (Booking.com, Expedia, Agoda) via PostgreSQL and designed critical facial recognition workflows (face matching and bounding boxes) using AWS Rekognition, achieving >90% accuracy and 100% compliance with LGPD and FNRH regulations.',
				tags: [
					'Web',
					'Hospitality System',
					'Facial Recognition',
					'Real-Time Billing',
					'OTAs Integration',
					'AWS Rekognition',
					'Computer Vision',
					'LGPD Compliance',
					'FNRH Compliance',
					'Vue.js',
					'PostgreSQL',
				],
			},
			{
				slug: 'aliansce-bi-geospatial-web',
				title: 'BI Geospatial Web Platform',
				category: 'Front-End · Spatial Analytics · Data Visualization',
				year: '2017–2019',
				summary:
					'Business geospatial BI web platform for mapping of multiple steps and analysis panels, to process and visualize spatial data of commercial stores on a large scale.',
				client: 'Aliansce (Shopping Centers Administrator) — via Neoris do Brasil Ltda.',
				duration: '1 year',
				location: 'Rio de Janeiro, BR (Hybrid)',
				description:
					'Developed the "Aliansce BI Geospatial" corporate web platform for a major shopping mall management client, reporting directly to three senior managers. I built multi-floor mapping interfaces and analytics dashboards using vanilla JavaScript and the Google Maps API to process and visualize large-scale spatial data regarding retail stores.',
				tags: [
					'Web',
					'Geospatial Data',
					'Spatial Analytics',
					'Business Intelligence',
					'Google Maps API',
					'Vanilla JavaScript',
					'SVG Rendering',
				],
			},
			{
				slug: 'aliansce-spatial-metrics-mobile',
				title: 'Real-time Spatial Metrics Visualization Mobile App (AR/VR)',
				category: 'Native Android App · AR/VR · Spatial Computing',
				year: '2017–2019',
				summary:
					'Native Android augmented reality (AR) and virtual reality (VR) application connecting physical retail stores with immersive digital analytics.',
				client: 'Aliansce (Shopping Centers Administrator) — via Neoris do Brasil Ltda.',
				duration: '1 year',
				location: 'Rio de Janeiro, BR (Hybrid)',
				description:
					'Designed a native Android augmented reality (AR) and virtual reality (VR) application for large-scale strategic products at Aliansce shopping centers, using Java and the Vuforia SDK. I implemented real-time spatial tracking and interactive metric visualization to connect physical retail stores with immersive digital analytics.',
				tags: [
					'Mobile',
					'Computer Vision',
					'Virtual Reality (VR)',
					'Augmented Reality (AR)',
					'Spatial Computing',
					'Spatial Tracking',
					'Geolocation',
					'Java',
					'Vuforia SDK',
					'Android SDK',
				],
			},
			{
				slug: 'neoris-spatial-metrics-mobile',
				title: 'Real-Time Spatial 3D Dashboards Metrics Visualization Mobile App (AR/VR)',
				category: 'Native Android App · AR/VR · Spatial Computing',
				year: '2017–2019',
				summary:
					'Proof of Concept (PoC) prototype for a native Android application featuring augmented reality (AR) and virtual reality (VR), focusing on spatial computing tracking and sensor integration.',
				client: 'Neoris do Brasil Ltda.',
				duration: '2 years',
				location: 'Rio de Janeiro, BR (Hybrid)',
				description:
					'Researched and developed a Proof of Concept (PoC) prototype for a native Android application featuring augmented reality (AR) and virtual reality (VR), focusing on spatial computing tracking and sensor integration as part of Neoris strategic R&D initiatives, reporting directly to three senior managers. The work centered on spatial computing tracking, immersive hardware sensor integration, and connecting complex data pipelines with mobile interfaces.',
				tags: [
					'Android',
					'Mobile',
					'Prove of Concept (PoC)',
					'Computer Vision',
					'Virtual Reality (VR)',
					'Augmented Reality (AR)',
					'Spatial Computing',
					'Spatial Tracking',
					'Geolocation',
					'Business Intelligence',
					'Java',
					'Vuforia SDK',
					'Android SDK',
				],
			},
			{
				slug: 'neoris-web-vision',
				title: 'Media Computer Vision Web Platform',
				category: 'Front-End · AI/ML · Computer Vision',
				year: '2017–2019',
				summary:
					'Proof of Concept (PoC) prototype in computer vision to build intelligent and automated processing pipelines and media content restrictions.',
				client: 'Neoris do Brasil Ltda.',
				duration: '1 month',
				location: 'Rio de Janeiro, BR (Hybrid)',
				description:
					'Researched and developed an internal Proof of Concept (PoC) prototype focused on media processing, classification, and automated restrictions. I integrated Microsoft Azure Cognitive Services and initial computer vision models to build intelligent, automated content processing pipelines.',
				tags: [
					'Web',
					'Proof of Concept (PoC)',
					'Artificial Intelligence (AI)',
					'Machine Learning (ML)',
					'Computer Vision',
					'Object Detection',
					'Content Moderation',
					'Microsoft Azure Cognitive Services',
					'Vanilla JavaScript',
				],
			},
		],
	},
	'pt-BR': {
		label: 'Trabalho',
		title: 'Projetos',
		subtitle:
			'Sistemas de produção de alta performance em finanças reguladas, arquitetura de missão crítica, engenharia de IA/ML e computação espacial — construídos para escala corporativa, compliance rigoroso e impacto direto de negócio.',
		items: [
			{
				slug: 'btg-pactual-home-broker-web',
				title: 'Home Broker — Plataforma Web de Trading Eletrônico Digital em Tempo Real',
				category: 'Front-End · White-Label · Negociação de Alta Frequência',
				year: '2023–2026',
				summary:
					'Plataforma web white-label de missão crítica para operações de alta frequência de trading na B3, atendendo 4,8 milhões de clientes e R$ 1,6 trilhão em AUM.',
				client: 'Banco BTG Pactual S.A. — Vertical Digital Equities',
				duration: '3+ anos',
				location: 'São Paulo, BR (Remoto)',
				description:
					'Liderei a arquitetura da plataforma web white-label de missão crítica Home Broker Web para operações de high-frequency trading na B3, potencializando um ecossistema que suporta 4,8 milhões de clientes, R$ 1,6 trilhão em AUM, 37% de crescimento anual em receita e ROAE de 28,1%. Liderei renderização avançada (GPU, Virtualização e Paginação) e otimizações de reatividade com Angular Signals e RxJS, reduzindo o tempo de carregamento em 45% e garantindo fluidez absoluta de 60 FPS sob feeds de dados financeiros de alta volatilidade. Implantada via arquitetura avançada de micro-frontends (Webpack Module Federation) respaldada por observabilidade e segurança de ponta (Datadog, Sentry e OWASP Top 10).',
				tags: [
					'Web',
					'White-label',
					'Negociação de alta frequência em tempo real',
					'Sistemas Financeiros',
					'Finanças Regulamentadas',
					'Observabilidade',
					'Desempenho',
					'Segurança',
					'Angular',
					'WebSockets',
				],
			},
			{
				slug: 'btg-pactual-coe-web-platform',
				title: 'Plataforma Web de Produtos de Certificados de Operações Estruturadas',
				category: 'Front-End · White-Label · Sistema Financeiro',
				year: '2023–2026',
				summary:
					'Plataforma web white-label para Certificados de Operações Estruturadas (COE), impulsionando operações de alta frequência na B3 com escala multimilionária.',
				client: 'Banco BTG Pactual S.A. — Vertical Digital Equities',
				duration: '1 mês',
				location: 'São Paulo, BR (Remoto)',
				description:
					'Arquitetei a plataforma web central para Certificados de Operações Estruturadas (COE), impulsionando operações de alta frequência na B3 para um ecossistema que suporta 4,8 milhões de clientes e R$ 1,6 trilhão em AUM. Projetei otimizações avançadas de renderização e reatividade (Angular Signals e RxJS) que reduziram o tempo de carregamento em 45%, garantindo fluidez de 60 FPS sob dados financeiros em tempo real e alta volatilidade. Implantada via arquitetura escalável de micro-frontends respaldada por segurança rigorosa e observabilidade de alto nível.',
				tags: ['Web', 'White-label', 'Financial Systems', 'Regulated Finance', 'Angular', 'Micro-frontends'],
			},
			{
				slug: 'btg-pactual-digital-equities-ds',
				title: 'Digital Equities Design System',
				category: 'Front-End · White-Label · Governança de Design System',
				year: '2023–2026',
				summary:
					'Biblioteca interna de componentes estratégicos para a própria vertical (Digital Equities) e evoluindo o Design System corporativo (ORQUESTRA).',
				client: 'Banco BTG Pactual S.A. — Vertical Digital Equities',
				duration: '1 mês',
				location: 'São Paulo, BR (Remoto)',
				description:
					'Projetei a governança de componentes (Nx/Turborepo, Nexus, Storybook & Angular) e evoluí o Design System corporativo (ORQUESTRA), aumentando a reutilização de código em 60% e reduzindo defeitos visuais em 35% (WCAG/A11Y). Adotei Engenharia de IA em todo o ciclo de desenvolvimento, DevOps e SecOps, reduzindo o tempo de entrega em 65% e defeitos de código em 80% via LLMs, MCP, Cursor/Copilot, Agentes Autônomos e Prompt & Harness Engineering.',
				tags: [
					'Web',
					'white-label',
					'Design System',
					'Component Library',
					'Component Governance',
					'Private NPM',
					'Angular',
					'Storybook',
					'Nx/Turborepo',
					'Nexus',
					'Accessibility',
					'WCAG',
					'A11y',
				],
			},
			{
				slug: 'xp-investimentos-black-sales',
				title: 'Black Sales — Plataforma Web de Produtos Estruturados e Derivativos',
				category: 'Front-End · Mesa de Operações · Sistemas Financeiros',
				year: '2021–2022',
				summary:
					'Plataforma web corporativa financeira para cadastramento e gestão de produtos estruturados e derivativos, conduzindo operações em um ecossistema financeiro massivo de R$ 1,2 trilhão em ativos.',
				client: 'XP Investimentos S.A. — Vertical Global Markets · Tesouraria',
				duration: '1+ ano',
				location: 'São Paulo, BR (Remoto)',
				description:
					'Arquitetei a plataforma corporativa financeira web para cadastramento e gestão de produtos estruturados e derivativos, conduzindo operações em um ecossistema financeiro massivo de R$ 1,2 trilhão em ativos. Padronizei 100% dos fluxos de transição de legados defendendo diretrizes arquiteturais complexas (RFCs e ADRs) diretamente com o C-Level (CFO/Tesouraria) e Gerentes de Engenharia, acelerando aprovações técnicas em 40%. Evoluí o Design System corporativo (SOMA), impulsionando a reutilização de componentes em 50%.',
				tags: [
					'Web',
					'Mesa de Trading',
					'Produtos Estruturados & Derivativos',
					'Sistemas Financeiros',
					'Finanças Regulamentadas',
					'React',
					'Micro-frontends',
					'GraphQL',
					'REST',
				],
			},
			{
				slug: 'xp-investimentos-black-aai',
				title: 'Black AAI — Plataforma Web de Gerenciamento de Produtos Estruturados e Portfólio',
				category: 'Front-End · Assessores de Investimentos · Sistemas Financeiros',
				year: '2021–2022',
				summary:
					'Plataforma web corporativa financeira de distribuição central dos produtos estruturados e derivativos da plataforma Black Sales para a Tesouraria, atendendo 12.000 assessores, 4,5M de clientes ativos e R$ 19,8B em receita bruta.',
				client: 'XP Investimentos S.A. — Vertical Global Markets · Tesouraria',
				duration: '1+ ano',
				location: 'São Paulo, BR (Remoto)',
				description:
					'Arquitetei a plataforma corporativa financeira web para distribuição central dos produtos estruturados e derivativos da plataforma Black Sales para a Tesouraria, atendendo 12.000 assessores, 4,5 milhões de clientes ativos, R$ 1,2 trilhão em ativos e R$ 19,8 bilhões em receita bruta consolidada. Implemetei fluxos reativos de alto desempenho (React, GraphQL, Redux-Saga, DDD e Clean Architecture) para suportar fluxos financeiros de alto volume, garantindo estabilidade corporativa absoluta e operações de ativos multiplataforma.',
				tags: [
					'Web',
					'Gestão de Portfólio',
					'Ferramentas para Assessores',
					'Produtos Estruturados & Derivativos',
					'Sistemas Financeiros',
					'Finanças Regulamentadas',
					'React',
					'GraphQL',
					'Micro-frontends',
					'GraphQL',
					'REST',
				],
			},
			{
				slug: 'zoox-pms-web',
				title: 'PMS — Plataforma Web de Gestão de Propriedade Hoteleira',
				category: 'Front-End · IA · Visão Computacional · Sistema de Hospitalidade',
				year: '2020',
				summary:
					'Plataforma web white-label de hoteleira PMS de missão crítica eliminando falhas operacionais de overbooking e gerenciando transações automatizadas de check-in/out para milhares de quartos diariamente, com faturamento em tempo real de OTAs e reconhecimento facial.',
				client: 'Zoox Tecnologia Ltda.',
				duration: '4 meses',
				location: 'Rio de Janeiro, BR (Remoto)',
				description:
					'Desenvolvi a plataforma web white-label de hoteleira PMS de missão crítica eliminando falhas operacionais de overbooking e gerenciando transações automatizadas de check-in/out para milhares de quartos diariamente. Modelei arquiteturas de faturamento em tempo real integrando OTAs globais (Booking.com, Expedia, Agoda) via PostgreSQL e projetei fluxos críticos de reconhecimento facial (Face matching & Bounding boxes) via AWS Rekognition, alcançando >90% de precisão e 100% de conformidade com LGPD e FNRH.',
				tags: [
					'Web',
					'Hospitality System',
					'Facial Recognition',
					'Real-Time Billing',
					'OTAs Integration',
					'AWS Rekognition',
					'Computer Vision',
					'LGPD Compliance',
					'FNRH Compliance',
					'Vue.js',
					'PostgreSQL',
				],
			},
			{
				slug: 'aliansce-bi-geospatial-web',
				title: 'Plataforma Web de BI Geoespacial',
				category: 'Front-End · Analise Espacial · Visualização de Dados',
				year: '2017–2019',
				summary:
					'Plataforma web de BI geoespacial empresarial para mapeamento de múltiplos andares e painéis de análise, para processar e visualizar dados espaciais de lojas comerciais em larga escala.',
				client: 'Aliansce (Administradora de Shopping Centers) — via Neoris do Brasil Ltda.',
				duration: '1 ano',
				location: 'Rio de Janeiro, BR (Híbrido)',
				description:
					'Desenvolvi a plataforma web corporativa "Aliansce BI Geospatial" reportando diretamente a 3 Gerentes Sêniors para um grande cliente de administração de shopping centers. Construí interfaces de mapeamento multi-andar e painéis de análise utilizando JavaScript Vanilla e a Google Maps API para processar e visualizar dados espaciais de lojas comerciais em larga escala.',
				tags: [
					'Web',
					'Dados Geoespaciais',
					'Análise Espacial',
					'Inteligência de Negócios',
					'Google Maps API',
					'JavaScript Vanilla',
					'Renderização de SVG',
				],
			},
			{
				slug: 'aliansce-spatial-metrics-mobile',
				title: 'Aplicativo móvel para visualização de métricas espaciais em Tempo Real (AR/VR)',
				category: 'App Android Nativo · AR/VR · Computação Espacial',
				year: '2017–2019',
				summary:
					'Aplicativo nativo Android de realidade aumentada (AR) e realidade virtual (VR) conectando lojas comerciais físicas de varejo com análises digitais imersivas.',
				client: 'Aliansce (Administradora de Shopping Centers) — via Neoris do Brasil Ltda.',
				duration: '1 ano',
				location: 'Rio de Janeiro, BR (Híbrido)',
				description:
					'Projetei aplicativo nativo Android de realidade aumentada (AR) e realidade virtual (VR) para produtos estratégicos em grande escala de shopping centers da Aliansce utilizando Java e o Vuforia SDK. Implementei rastreamento espacial em tempo real e visualização interativa de métricas para conectar lojas comerciais físicas com análises digitais imersivas.',
				tags: [
					'Mobile',
					'Visão Computacional',
					'Realidade Virtual (VR)',
					'Realidade Aumentada (AR)',
					'Computação Espacial',
					'Rastreamento espacial',
					'Geolocalização',
					'Java',
					'Vuforia SDK',
					'Android SDK',
				],
			},
			{
				slug: 'neoris-spatial-metrics-mobile',
				title: 'Aplicativo móvel para visualização de métricas em dashboards 3D espaciais em tempo real (AR/VR)',
				category: 'App Android Nativo · AR/VR · Computação Espacial',
				year: '2017–2019',
				summary:
					'Protótipo de Prova de Conceito (PoC) para aplicativo Android nativo com realidade aumentada (AR) e realidade virtual (VR) com foco em rastreamento de computação espacial e integração de sensores.',
				client: 'Neoris do Brasil Ltda.',
				duration: '2 anos',
				location: 'Rio de Janeiro, BR (Híbrido)',
				description:
					'Pesquisei e desenvolvi protótipo de Prova de Conceito (PoC) para aplicativo Android nativo com realidade aumentada (AR) e realidade virtual (VR) com foco em rastreamento de computação espacial e integração de sensores como parte de iniciativas estratégicas de P&D da Neoris, reportando diretamente a 3 Gerentes Sêniors. Foco em rastreamento de computação espacial, integração imersiva de sensores de hardware e conexão de pipelines complexos de dados com interfaces móveis.',
				tags: [
					'Android',
					'Mobile',
					'Prova de Conceito (PoC)',
					'Visão Computacional',
					'Realidade Virtual (VR)',
					'Realidade Aumentada (AR)',
					'Computação Espacial',
					'Rastreamento espacial',
					'Geolocalização',
					'Inteligência de Negócios',
					'Java',
					'Vuforia SDK',
					'Android SDK',
				],
			},
			{
				slug: 'neoris-web-vision',
				title: 'Plataforma Web de Visão Computacional de Mídia',
				category: 'Front-End · IA/ML · Visão Computacional',
				year: '2017–2019',
				summary:
					'Protótipo de Prova de Conceito (PoC) em visão computacional para construir pipelines inteligentes e automatizados de processamento e restrições de conteúdo de mídia.',
				client: 'Neoris do Brasil Ltda.',
				duration: '1 mês',
				location: 'Rio de Janeiro, BR (Híbrido)',
				description:
					'Pesquisei e desenvolvi protótipo de Prova de Conceito (PoC) interno focado em processamento de mídia, classificação e restrições automatizadas. Integrei o Microsoft Azure Cognitive Services e modelos iniciais de visão computacional para construir pipelines inteligentes e automatizados de processamento de conteúdo.',
				tags: [
					'Web',
					'Prova de Conceito (PoC)',
					'Inteligência Artificial (IA)',
					'Aprendizado de Máquina (ML)',
					'Visão Computacional',
					'Detecção de Objetos',
					'Moderação de Conteúdo',
					'Serviços Cognitivos do Microsoft Azure',
					'JavaScript Vanilla',
				],
			},
		],
	},
};

export default PROJECTS;
