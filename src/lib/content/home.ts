import { LocaleType } from '@/lib/i18n/locales';

/**
 * Home page content dictionary.
 * Fully localized, type-safe content for the portfolio landing experience.
 * Experience and highlights derived from professional CV.
 */
export type HomeContent = Readonly<{
	hero: {
		eyebrow: string;
		title: string;
		subtitle: string;
		cta: string;
		roles: string[];
	};
	aboutTeaser: {
		label: string;
		title: string;
		body: string;
		cta: string;
	};
	stats: ReadonlyArray<{ value: string; label: string }>;
	projects: {
		label: string;
		title: string;
		subtitle: string;
		cta: string;
	};
	testimonials: {
		label: string;
		title: string;
		items: ReadonlyArray<{ quote: string; author: string; role: string; metric?: string }>;
	};
	benefits: {
		label: string;
		title: string;
		items: ReadonlyArray<{ title: string; description: string; highlight?: string }>;
	};
	education: {
		label: string;
		title: string;
		subtitle: string;
		items: ReadonlyArray<{
			kind: string;
			title: string;
			org: string;
			period: string;
			location?: string;
			description: string;
			tags?: string[];
			status?: string;
		}>;
	};
	experience: {
		label: string;
		title: string;
		items: ReadonlyArray<{
			role: string;
			company: string;
			period: string;
			location: string;
			description: string;
		}>;
	};
	services: {
		label: string;
		title: string;
		items: ReadonlyArray<{
			number: string;
			title: string;
			description: string;
			points: string[];
		}>;
	};
	faq: {
		label: string;
		title: string;
		items: ReadonlyArray<{ question: string; answer: string }>;
	};
	cta: {
		title: string;
		subtitle: string;
		button: string;
	};
}>;

const HOME_CONTENT: Record<LocaleType, HomeContent> = {
	'en-US': {
		hero: {
			eyebrow: '©2019',
			title: 'Thiago Saud',
			subtitle: '',
			cta: "Let's Talk",
			roles: ['Principal Frontend Engineering', 'AI & MLOps Engineering'],
		},
		aboutTeaser: {
			label: 'About',
			title: 'Crafted for Impact.',
			body: 'Principal Frontend Engineer with 7+ years architecting mission-critical web platforms in regulated financial ecosystems. Combining software architecture, engineering governance and active specialization in AI & MLOps (Python, Deep Learning, RAG, Agentic AI, LangChain/LangGraph, MLflow).',
			cta: 'See More',
		},
		stats: [
			{ value: '7+', label: 'Years in the Market' },
			{ value: '10+', label: 'Production Platforms' },
			{ value: 'R$1.6T+', label: 'AUM / Custody' },
			{ value: '4.8M+', label: 'Active Clients' },
		],
		projects: {
			label: 'Featured Work',
			title: 'Selected Projects',
			subtitle: 'Sharp. Considered. Delivered.',
			cta: 'View All Projects',
		},
		testimonials: {
			label: 'Social proof',
			title: 'Trusted in regulated, high-scale environments',
			items: [
				{
					quote:
						'As a technical specialist, Thiago was decisive for getting Home Broker and COE into production. Architecture, RFCs and delivery discipline that the squad leaned on — without that ownership, those platforms would not have reached the standard they did under regulatory pressure.',
					author: 'Executive Director',
					role: 'Digital Equities · Investment Bank',
					metric: '4.8M+ clients · R$1.6T+ AUM',
				},
				{
					quote:
						'He elevated Global Markets platforms for the trading desk and ~12K advisors — Black Sales for structured products and derivatives, and Black AAI for portfolio management — with React micro-frontends, GraphQL and the SOMA design system. Delivery stayed predictable while the surface area kept growing.',
					author: 'Partner',
					role: 'XP Investimentos · Global Markets',
					metric: '~12K advisors · multi-trillion assets',
				},
				{
					quote:
						'Even as an intern in our R&D division, Thiago operated like a product owner — spatial BI, AR prototypes and cognitive vision PoCs delivered with executive clarity and engineering rigor that impressed senior leadership.',
					author: 'Senior Business Manager',
					role: 'NEORIS',
					metric: 'Strategic products · AI & spatial computing',
				},
			],
		},
		benefits: {
			label: 'Benefits',
			title: 'Why teams bring me in',
			items: [
				{
					title: 'Business-grade architecture',
					highlight: 'R$1.6T+ AUM · 4.8M+ clients',
					description:
						'Technical decisions treated as business decisions. Platforms proven in regulated financial ecosystems — trading, structured products and advisor tooling at national scale.',
				},
				{
					title: 'Governance that ships',
					highlight: 'RFCs · ADRs · C-level reporting',
					description:
						'End-to-end engineering governance: RFCs, ADRs and roadmaps with direct C-level alignment, mentoring squads of up to 5 engineers without slowing delivery.',
				},
				{
					title: 'AI-accelerated quality',
					highlight: '−65% cycle time · +80–90% quality',
					description:
						'Pioneered AI engineering adoption (LLMs/VLMs, MCP, Cursor, Copilot) with measurable impact: faster releases and materially higher code quality and security baselines.',
				},
				{
					title: 'Systems that compound',
					highlight: 'Design systems · private libs',
					description:
						'Corporate design systems and reusable private libraries that multiply squad throughput — less UI drift, more consistent compliance-ready interfaces.',
				},
			],
		},
		education: {
			label: 'Credentials',
			title: 'Education & certifications',
			subtitle: 'Formal CS foundation plus active specialization in AI Engineering and MLOps.',
			items: [
				{
					kind: 'Bachelor',
					title: 'B.Sc. Computer Science',
					org: 'Veiga de Almeida University (UVA)',
					period: 'Jan 2014 — Feb 2019',
					location: 'Rio de Janeiro, Brazil',
					description:
						'Capstone: Facial Recognition for Public Safety (Dec 2019) — real-time detection (Viola-Jones) and recognition (Eigenfaces/PCA, Fisherfaces/LDA) in Python/OpenCV with ~80–100% accuracy and ~0.8s mean identification time.',
					tags: [
						'Data Structures',
						'Algorithms',
						'Databases',
						'SQL',
						'Software Engineering',
						'Operating Systems',
						'Computer Networks',
						'Python',
						'OpenCV',
						'Computer Vision',
						'PCA',
						'LDA',
					],
					status: 'Completed',
				},
				{
					kind: 'Executive education',
					title: 'Business Administration & Management',
					org: 'Barcelona University (UB)',
					period: 'Jan 2018 — Nov 2019',
					location: 'Catalonia, Spain',
					description:
						'Continuing education in leadership profile — business cases, executive decision-making and communication for technical leaders.',
					tags: ['Leadership', 'Strategy', 'Executive Communication'],
					status: 'Completed',
				},
				{
					kind: 'Specialization Certificate',
					title: 'User Experience (UX) and User Interface (UI) Design',
					org: 'Google',
					period: 'Dez 2024',
					description:
						'Foundational UX concepts: user-centered design, the design process, accessibility, equity-focused design and design sprints — first course of the Google UX Design Professional Certificate.',
					tags: ['UX', 'User-Centered Design', 'Accessibility', 'Design Thinking', 'Design Sprints'],
					status: 'Completed',
				},
				{
					kind: 'Specialization Certificate',
					title: 'Python',
					org: 'University of Michigan',
					period: 'Jul 2026 — Aug 2026',
					description:
						'Python specialization covering data structures, APIs and SQL — applied programming foundations for AI/ML workloads.',
					tags: ['Python', 'Data Structures', 'APIs', 'SQL'],
					status: 'Completed',
				},
				{
					kind: 'Course Certificate',
					title: 'AI Fluency: Framework & Foundations',
					org: 'Anthropic',
					period: 'Aug 2026',
					description:
						'Framework-level fluency for modern AI systems — concepts and practical foundations that support responsible adoption in product engineering.',
					tags: ['AI Fluency', 'Foundations', 'Responsible AI'],
					status: 'Completed',
				},
				{
					kind: 'Specialization Certificate',
					title: 'Deep Learning',
					org: 'DeepLearning.AI',
					period: 'AUG 2026',
					description:
						'Build and train deep neural networks, CNNs, RNNs/LSTMs and Transformers with Python and TensorFlow — from vectorized nets and optimization to computer vision, NLP and sequence models.',
					tags: [
						'Deep Learning',
						'Neural Networks',
						'CNN',
						'RNN',
						'LSTM',
						'Transformers',
						'TensorFlow',
						'Python',
						'Computer Vision',
						'NLP',
					],
					status: 'Completed',
				},
				{
					kind: 'Professional Certificate',
					title: 'IBM AI Engineering',
					org: 'IBM',
					period: 'In progress — target Oct 2026',
					description:
						'Machine Learning, Deep Learning, LLMs, RAG, LangChain, PyTorch/TensorFlow — production-oriented AI engineering path.',
					tags: ['ML', 'Deep Learning', 'LLMs', 'RAG', 'LangChain', 'PyTorch', 'TensorFlow'],
					status: 'In progress',
				},
				{
					kind: 'Professional Certificate',
					title: 'IBM RAG & Agentic AI',
					org: 'IBM',
					period: 'In progress — target Nov 2026',
					description:
						'Advanced retrieval-augmented generation and agentic systems: LangChain, LangGraph, CrewAI, MCP and vector databases.',
					tags: ['RAG', 'Agentic AI', 'LangGraph', 'CrewAI', 'MCP', 'Vector DBs'],
					status: 'In progress',
				},
				{
					kind: 'Specialization Certificate',
					title: 'MLOps | Machine Learning Operations',
					org: 'Duke University',
					period: 'In progress — target Dec 2026',
					description:
						'Production ML operations: MLflow, model lifecycle, cloud ML platforms (SageMaker, Azure ML) and reliable deployment practices.',
					tags: ['MLOps', 'MLflow', 'SageMaker', 'Azure ML', 'Model Lifecycle'],
					status: 'In progress',
				},
			],
		},
		experience: {
			label: 'Experience',
			title: 'Career Highlights',
			items: [
				{
					role: 'Principal Frontend Engineer',
					company: 'Banco BTG Pactual S.A.',
					period: 'Feb 2023 — Jun 2026',
					location: 'São Paulo, BR (Remote)',
					description:
						'Technical specialist in the Digital Equities vertical at one of Latin America’s largest banks. Engineering governance via RFCs/ADRs, mentoring 2–5 engineers. Platforms serving 4.8M+ active clients and R$1.6T+ AUM/Custody. Pioneered AI Engineering adoption (LLMs/VLMs via MCP, Cursor, Copilot) — 65% faster delivery, 80% higher code quality. Strategic products: Home Broker Web (white-label), COE platform, and the Digital Equities vertical Angular component library / design system.',
				},
				{
					role: 'Senior Frontend Engineer',
					company: 'XP Investimentos S.A.',
					period: 'Jul 2021 — Nov 2022',
					location: 'São Paulo, BR (Remote)',
					description:
						'Technical specialist in the Global Markets vertical at one of the world’s largest investment platforms. Platforms for the trading desk and ~12K investment advisors serving ~4.5M active clients, supporting R$1.2T total assets. Products: Black Sales (structured products & derivatives) and Black AAI (advisor portfolio platform). Architecture with React, micro-frontends, GraphQL and SOMA design system.',
				},
				{
					role: 'Mid-level Frontend Engineer',
					company: 'Zoox Tecnologia Ltda.',
					period: 'Jul 2020 — Nov 2020',
					location: 'Rio de Janeiro, BR (Remote)',
					description:
						'Technical reference on a complex white-label PMS. Real-time billing integration with global OTAs. End-to-end facial detection and recognition flow (AWS Rekognition) for biometric validation. Vue.js, Docker, PostgreSQL.',
				},
				{
					role: 'Junior Frontend Engineer',
					company: 'TG4 Tecnologia Ltda.',
					period: 'Sep 2019 — Jul 2020',
					location: 'Rio de Janeiro, BR',
					description:
						'End-to-end ownership of white-label chatbot platform for major Brazilian telecom operators. Predictive recommendation algorithms drove 100% increase in upgrade offer acceptance and reduced CAC/CPC.',
				},
				{
					role: 'R&D Engineering Intern',
					company: 'Neoris do Brasil Ltda.',
					period: 'Apr 2017 — Apr 2019',
					location: 'Rio de Janeiro, BR (Hybrid)',
					description:
						'Sole intern in the R&D engineering division. Spatial computing, geospatial BI and cognitive AI prototypes (facial recognition, AR/VR). Delivered strategic products for Aliansce and internal PoCs using Computer Vision and Azure Cognitive Services.',
				},
			],
		},
		services: {
			label: 'Services',
			title: 'Expertise',
			items: [
				{
					number: '01',
					title: 'Principal Frontend Architecture',
					description:
						'Mission-critical UI platforms for regulated finance: trading, structured products and advisor tooling — Angular/React, micro-frontends, design systems and Core Web Vitals under production SLAs.',
					points: [
						'Angular · React · NextJS, VueJS, Javascript/Ecmascript, TypeScript · Nx',
						'Micro-frontends & modular monorepos',
						'Design systems',
						'Real-time UIs · WebSockets · RxJS',
						'Core Web Vitals (LCP · INP · CLS) · RUM/APM (Datadog, Sentry)',
					],
				},
				{
					number: '02',
					title: 'AI & MLOps Engineering',
					description:
						'Active specialization path in production AI: RAG, agentic systems and MLOps — bridging product architecture with model lifecycle and intelligent features.',
					points: [
						'LLMs · VLMs · RAG · Vector databases',
						'LangChain · LangGraph · CrewAI · MCP',
						'Python · Deep Learning · PyTorch/TensorFlow',
						'MLOps · MLflow · cloud ML platforms',
						'AI-assisted delivery workflows',
					],
				},
				{
					number: '03',
					title: 'Architecture & Engineering Governance',
					description:
						'C-level aligned technical leadership: RFCs, ADRs and standards that scale squads while protecting security, compliance and delivery predictability.',
					points: [
						'RFCs · ADRs · technical roadmaps',
						'Clean Architecture · DDD · SOLID',
						'OWASP · secure SDLC · compliance',
						'Mentoring squads (2–5 engineers)',
						'CI/CD quality gates · observability',
					],
				},
			],
		},
		faq: {
			label: 'FAQ',
			title: 'Ask Me Anything',
			items: [
				{
					question: 'What services do you offer?',
					answer:
						'I specialize in principal-level frontend architecture, AI/MLOps engineering and end-to-end product engineering — from strategy and system design to production delivery and observability in regulated environments.',
				},
				{
					question: 'Do you work with international clients?',
					answer:
						'Yes. I work remotely with teams across different time zones and have extensive experience collaborating with distributed product and engineering organizations.',
				},
				{
					question: 'What is your typical engagement model?',
					answer:
						'I offer both project-based engagements and longer-term partnerships, depending on the scope and the level of ownership required.',
				},
				{
					question: 'How long does a typical project take?',
					answer:
						'It depends on complexity. Discovery and architecture phases are usually measured in weeks; full delivery can range from a few weeks to several months for larger systems.',
				},
				{
					question: 'Do you offer ongoing support?',
					answer:
						'Yes. Many engagements include post-delivery support, observability tuning and iterative improvement cycles.',
				},
			],
		},
		cta: {
			title: 'Let’s build something exceptional.',
			subtitle: 'Ready to turn ambitious ideas into production-grade systems?',
			button: 'Start a Conversation',
		},
	},
	'pt-BR': {
		hero: {
			eyebrow: '©2019',
			title: 'Thiago Saud',
			subtitle: '',
			cta: 'Vamos Conversar',
			roles: ['Principal Engenheiro Frontend', 'Engenheiro de IA & MLOps'],
		},
		aboutTeaser: {
			label: 'Sobre',
			title: 'Construído para Impacto.',
			body: 'Principal Engenheiro Front-End com 7+ anos arquitetando plataformas web de missão crítica em ecossistemas financeiros regulamentados. Unindo Software Architecture a Governança de Engenharia e especialização ativa em AI & MLOps (Python, Deep Learning, RAG, Agentic AI, LangChain/LangGraph, MLflow).',
			cta: 'Ver Mais',
		},
		stats: [
			{ value: '7+', label: 'Anos de Mercado' },
			{ value: '10+', label: 'Plataformas em Produção' },
			{ value: 'R$1,6T+', label: 'AUM / Custódia' },
			{ value: '4,8M+', label: 'Clientes Ativos' },
		],
		projects: {
			label: 'Trabalhos em Destaque',
			title: 'Projetos Selecionados',
			subtitle: 'Precisos. Considerados. Entregues.',
			cta: 'Ver Todos os Projetos',
		},
		testimonials: {
			label: 'Prova social',
			title: 'Confiança em ambientes regulados e de alta escala',
			items: [
				{
					quote:
						'Como especialista técnico, Thiago foi decisivo para colocar o Home Broker e o COE em produção. Arquitetura, RFCs e disciplina de entrega em que o squad se apoiou — sem essa ownership, essas plataformas não teriam atingido o padrão que atingiram sob pressão regulatória.',
					author: 'Executive Director',
					role: 'Digital Equities · Banco de Investimento',
					metric: '4,8M+ clientes · R$1,6T+ AUM',
				},
				{
					quote:
						'Elevou as plataformas de Global Markets para a mesa e ~12 mil assessores — Black Sales para produtos estruturados e derivativos, e Black AAI para gestão de portfólio — com micro-frontends React, GraphQL e o design system SOMA. A entrega se manteve previsível enquanto a superfície crescia.',
					author: 'Partner',
					role: 'XP Investimentos · Global Markets',
					metric: '~12 mil assessores · ativos multi-trilhões',
				},
				{
					quote:
						'Ainda como estagiário na nossa divisão de P&D, Thiago operava como dono de produto — BI espacial, protótipos de AR e PoCs de visão cognitiva entregues com clareza executiva e rigor de engenharia que impressionaram a liderança sênior.',
					author: 'Senior Business Manager',
					role: 'NEORIS',
					metric: 'Produtos estratégicos · IA e computação espacial',
				},
			],
		},
		benefits: {
			label: 'Benefícios',
			title: 'Por que times me contratam',
			items: [
				{
					title: 'Arquitetura com impacto de negócio',
					highlight: 'R$1,6T+ AUM · 4,8M+ clientes',
					description:
						'Decisões técnicas tratadas como decisões de negócio. Plataformas validadas em ecossistemas financeiros regulados — trading, estruturados e ferramentas para assessores em escala nacional.',
				},
				{
					title: 'Governança que entrega',
					highlight: 'RFCs · ADRs · alinhamento C-Level',
					description:
						'Governança de engenharia de ponta a ponta: RFCs, ADRs e roadmaps com alinhamento direto a C-Level, mentoria de squads de até 5 engenheiros sem sacrificar velocidade.',
				},
				{
					title: 'Qualidade acelerada por IA',
					highlight: '−65% ciclo · +80–90% qualidade',
					description:
						'Adoção pioneira de AI Engineering (LLMs/VLMs, MCP, Cursor, Copilot) com impacto mensurável: releases mais rápidos e baseline superior de qualidade e segurança de código.',
				},
				{
					title: 'Sistemas que se multiplicam',
					highlight: 'Design systems · libs privadas',
					description:
						'Design systems corporativos e bibliotecas privadas reutilizáveis que multiplicam o throughput dos squads — menos drift de UI, interfaces mais consistentes e prontas para compliance.',
				},
			],
		},
		education: {
			label: 'Credenciais',
			title: 'Formação e certificações',
			subtitle: 'Base formal em Ciência da Computação e especialização ativa em AI Engineering e MLOps.',
			items: [
				{
					kind: 'Bacharelado',
					title: 'Bacharel em Ciência da Computação',
					org: 'Universidade Veiga de Almeida (UVA)',
					period: 'Jan 2014 — Fev 2019',
					location: 'Rio de Janeiro, Brasil',
					description:
						'TCC: Reconhecimento Facial para Segurança Pública (Dez/2019) — detecção em tempo real (Viola-Jones) e reconhecimento (Eigenfaces/PCA, Fisherfaces/LDA) em Python/OpenCV com acurácia ~80–100% e ~0,8s de identificação média.',
					tags: [
						'Estruturas de Dados',
						'Algoritmos',
						'Bancos de Dados',
						'SQL',
						'Engenharia de Software',
						'Sistemas Operacionais',
						'Redes de Computadores',
						'Python',
						'OpenCV',
						'Computer Vision',
						'PCA',
						'LDA',
					],
					status: 'Concluído',
				},
				{
					kind: 'Formação executiva',
					title: 'Administração e Gestão Empresarial',
					org: 'Universitat de Barcelona (UB)',
					period: 'Jan 2018 — Nov 2019',
					location: 'Catalunha, Espanha',
					description:
						'Formação continuada em perfil de líder — cases de negócio, tomada de decisão e comunicação executiva para lideranças técnicas.',
					tags: ['Liderança', 'Estratégia', 'Comunicação Executiva'],
					status: 'Concluído',
				},
				{
					kind: 'Specialization Certificate',
					title: 'Experiência do Usuário (UX) and Interface do Usuário (UI) Design',
					org: 'Google',
					period: 'Dez 2024',
					description:
						'Fundamentos de UX: design centrado no usuário, processo de design, acessibilidade, design com foco em equidade e design sprints — primeiro curso do Google UX Design Professional Certificate.',
					tags: ['UX', 'Design Centrado no Usuário', 'Acessibilidade', 'Design Thinking', 'Design Sprints'],
					status: 'Concluído',
				},
				{
					kind: 'Specialization Certificate',
					title: 'Python',
					org: 'University of Michigan',
					period: 'Julho 2026 — Ago 2026',
					description:
						'Especialização em Python com estruturas de dados, APIs e SQL — bases de programação aplicada a workloads de AI/ML.',
					tags: ['Python', 'Estruturas de Dados', 'APIs', 'SQL'],
					status: 'Concluído',
				},
				{
					kind: 'Course Certificate',
					title: 'AI Fluency: Framework & Foundations',
					org: 'Anthropic',
					period: 'Ago 2026',
					description:
						'Fluência em frameworks de IA moderna — conceitos e fundamentos práticos para adoção responsável em engenharia de produto.',
					tags: ['AI Fluency', 'Fundamentos', 'IA Responsável'],
					status: 'Concluído',
				},
				{
					kind: 'Specialization Certificate',
					title: 'Deep Learning',
					org: 'DeepLearning.AI',
					period: 'AGO 2026',
					description:
						'Construir e treinar redes neurais profundas, CNNs, RNNs/LSTMs e Transformers com Python e TensorFlow — de redes vetorizadas e otimização a visão computacional, NLP e modelos de sequência.',
					tags: [
						'Deep Learning',
						'Redes Neurais',
						'CNN',
						'RNN',
						'LSTM',
						'Transformers',
						'TensorFlow',
						'Python',
						'Computer Vision',
						'NLP',
					],
					status: 'Concluído',
				},
				{
					kind: 'Certificado profissional',
					title: 'IBM AI Engineering',
					org: 'IBM',
					period: 'Em andamento — meta out/2026',
					description:
						'Machine Learning, Deep Learning, LLMs, RAG, LangChain, PyTorch/TensorFlow — trilha de AI engineering orientada a produção.',
					tags: ['ML', 'Deep Learning', 'LLMs', 'RAG', 'LangChain', 'PyTorch', 'TensorFlow'],
					status: 'Em andamento',
				},
				{
					kind: 'Certificado profissional',
					title: 'IBM RAG & Agentic AI',
					org: 'IBM',
					period: 'Em andamento — meta nov/2026',
					description: 'RAG avançado e sistemas agenticos: LangChain, LangGraph, CrewAI, MCP e bancos vetoriais.',
					tags: ['RAG', 'Agentic AI', 'LangGraph', 'CrewAI', 'MCP', 'Vector DBs'],
					status: 'Em andamento',
				},
				{
					kind: 'Specialization Certificate',
					title: 'MLOps | Machine Learning Operations',
					org: 'Duke University',
					period: 'Em andamento — meta dez/2026',
					description:
						'Operações de ML em produção: MLflow, ciclo de vida de modelos, plataformas cloud (SageMaker, Azure ML) e práticas de deploy confiável.',
					tags: ['MLOps', 'MLflow', 'SageMaker', 'Azure ML', 'Model Lifecycle'],
					status: 'Em andamento',
				},
			],
		},
		experience: {
			label: 'Experiência',
			title: 'Destaques da Carreira',
			items: [
				{
					role: 'Principal Engenheiro Frontend',
					company: 'Banco BTG Pactual S.A.',
					period: 'Fev 2023 — Jun 2026',
					location: 'São Paulo, BR (Remoto)',
					description:
						'Especialista técnico na vertical Digital Equities em um dos maiores bancos da América Latina. Governança de engenharia via RFCs/ADRs, mentoria de 2 a 5 engenheiros. Plataformas que atendem 4,8M+ clientes ativos e R$1,6T+ em AUM/Custódia. Adoção pioneira de AI Engineering (LLMs/VLMs via MCP, Cursor, Copilot) — 65% de redução no tempo de entrega e 80% de aumento na qualidade do código. Produtos: Home Broker Web (white-label), plataforma COE e biblioteca de componentes Angular / design system da vertical Digital Equities.',
				},
				{
					role: 'Engenheiro Frontend Sênior',
					company: 'XP Investimentos S.A.',
					period: 'Jul 2021 — Nov 2022',
					location: 'São Paulo, BR (Remoto)',
					description:
						'Especialista técnico na vertical Global Markets em uma das maiores plataformas de investimentos do mundo. Plataformas para a Mesa de Operações e ~12 mil assessores, atendendo ~4,5M de clientes ativos e suportando R$1,2T em ativos totais. Produtos: Black Sales (produtos estruturados e derivativos) e Black AAI (plataforma de portfólio para assessores). Arquitetura com React, micro-frontends, GraphQL e design system SOMA.',
				},
				{
					role: 'Engenheiro Frontend Pleno',
					company: 'Zoox Tecnologia Ltda.',
					period: 'Jul 2020 — Nov 2020',
					location: 'Rio de Janeiro, BR (Remoto)',
					description:
						'Referência técnica em plataforma PMS white-label de alta complexidade. Integração de faturamento em tempo real com OTAs globais. Fluxo ponta a ponta de detecção e reconhecimento facial (AWS Rekognition) para validação biométrica. Vue.js, Docker, PostgreSQL.',
				},
				{
					role: 'Engenheiro Frontend Júnior',
					company: 'TG4 Tecnologia Ltda.',
					period: 'Set 2019 — Jul 2020',
					location: 'Rio de Janeiro, BR',
					description:
						'Ownership ponta a ponta da plataforma white-label de chatbot para as maiores operadoras de telecom do país. Algoritmos preditivos de recomendação geraram 100% de aumento na aceitação de ofertas de upgrade e redução de CAC/CPC.',
				},
				{
					role: 'Estagiário em P&D Tecnológico',
					company: 'Neoris do Brasil Ltda.',
					period: 'Abr 2017 — Abr 2019',
					location: 'Rio de Janeiro, BR (Híbrido)',
					description:
						'Único estagiário na divisão de P&D. Computação espacial, BI geoespacial e protótipos cognitivos de IA (reconhecimento facial, AR/VR). Entregou produtos estratégicos para Aliansce e PoCs internas com Computer Vision e Azure Cognitive Services.',
				},
			],
		},
		services: {
			label: 'Serviços',
			title: 'Expertise',
			items: [
				{
					number: '01',
					title: 'Arquitetura Frontend Principal',
					description:
						'Plataformas de UI de missão crítica para finanças reguladas: trading, estruturados e ferramentas de assessores — Angular/React, micro-frontends, design systems e Core Web Vitals sob SLAs de produção.',
					points: [
						'Angular · React · NextJS, VueJS, Javascript/Ecmascript, TypeScript · Nx',
						'Micro-frontends e monorepos modulares',
						'Design systems',
						'UIs em tempo real · WebSockets · RxJS',
						'Core Web Vitals (LCP · INP · CLS) · RUM/APM (Datadog, Sentry)',
					],
				},
				{
					number: '02',
					title: 'Engenharia de IA & MLOps',
					description:
						'Especialização ativa em IA de produção: RAG, sistemas agenticos e MLOps — unindo arquitetura de produto ao ciclo de vida de modelos e features inteligentes.',
					points: [
						'LLMs · VLMs · RAG · bancos vetoriais',
						'LangChain · LangGraph · CrewAI · MCP',
						'Python · Deep Learning · PyTorch/TensorFlow',
						'MLOps · MLflow · plataformas cloud de ML',
						'Workflows de entrega assistidos por IA',
					],
				},
				{
					number: '03',
					title: 'Arquitetura e Governança de Engenharia',
					description:
						'Liderança técnica alinhada a C-Level: RFCs, ADRs e padrões que escalam squads protegendo segurança, compliance e previsibilidade de entrega.',
					points: [
						'RFCs · ADRs · roadmaps técnicos',
						'Clean Architecture · DDD · SOLID',
						'OWASP · SDLC seguro · compliance',
						'Mentoria de squads (2–5 engenheiros)',
						'Gates de CI/CD · observabilidade',
					],
				},
			],
		},
		faq: {
			label: 'FAQ',
			title: 'Perguntas Frequentes',
			items: [
				{
					question: 'Quais serviços você oferece?',
					answer:
						'Especializo-me em arquitetura frontend de nível principal, engenharia de IA/MLOps e engenharia de produto de ponta a ponta — da estratégia e design de sistemas até entrega em produção e observabilidade em ambientes regulamentados.',
				},
				{
					question: 'Você trabalha com clientes internacionais?',
					answer:
						'Sim. Trabalho remotamente com times em diferentes fusos horários e tenho ampla experiência colaborando com organizações de produto e engenharia distribuídas.',
				},
				{
					question: 'Qual é o seu modelo típico de engajamento?',
					answer:
						'Ofereço tanto engajamentos baseados em projeto quanto parcerias de mais longo prazo, dependendo do escopo e do nível de ownership necessário.',
				},
				{
					question: 'Quanto tempo leva um projeto típico?',
					answer:
						'Depende da complexidade. Fases de discovery e arquitetura geralmente são medidas em semanas; a entrega completa pode variar de poucas semanas a vários meses para sistemas maiores.',
				},
				{
					question: 'Você oferece suporte contínuo?',
					answer:
						'Sim. Muitos engajamentos incluem suporte pós-entrega, ajuste de observabilidade e ciclos de melhoria iterativa.',
				},
			],
		},
		cta: {
			title: 'Vamos construir algo excepcional.',
			subtitle: 'Pronto para transformar ideias ambiciosas em sistemas de nível de produção?',
			button: 'Iniciar uma Conversa',
		},
	},
};

export default HOME_CONTENT;
