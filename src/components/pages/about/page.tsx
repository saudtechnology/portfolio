'use client';

import { JSX } from 'react';
import { useActiveLocale } from '@/hooks/use-active-locale';
import HOME_CONTENT from '@/lib/content/home';
import { FadeIn } from '@/components/motion/fade-in';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import SITE_IDENTITY from '@/lib/site/identity';

export function AboutPage(): JSX.Element {
	const { locale, translation } = useActiveLocale();
	const content = HOME_CONTENT[locale];

	const aboutCopy =
		locale === 'pt-BR'
			? {
					title: 'Sobre',
					lead: 'Sou orientado por curiosidade, clareza e craft. Com foco em estratégia e storytelling técnico, transformo ideias em sistemas e experiências digitais que conectam e perdura.',
					body: [
						'Atuo na interseção entre inteligência artificial, MLOps e engenharia frontend de alto nível. Meu trabalho combina rigor de sistemas distribuídos com atenção à experiência do usuário e à manutenibilidade de longo prazo.',
						'Ao longo da carreira ajudei times a sair de protótipos frágeis para plataformas de produção observáveis, escaláveis e preparadas para evolução contínua.',
					],
				}
			: {
					title: 'About',
					lead: 'Driven by curiosity, clarity and craft. With a focus on strategy and technical storytelling, I shape ideas into systems and digital experiences that connect and endure.',
					body: [
						'I work at the intersection of artificial intelligence, MLOps and principal-level frontend engineering. My work combines the rigor of distributed systems with attention to user experience and long-term maintainability.',
						'Throughout my career I have helped teams move from fragile prototypes to production platforms that are observable, scalable and ready for continuous evolution.',
					],
				};

	return (
		<>
			<Header />
			<main id="main-content" tabIndex={-1} className="flex-1">
				<section className="relative flex flex-col justify-end pb-16 pt-28 min-h-[42vh] sm:min-h-[38vh] px-6 lg:px-8">
					<div className="absolute inset-0 -z-10 bg-linear-to-b from-plate to-forest/80" />
					<div className="mx-auto w-full max-w-7xl">
						<FadeIn>
							<p className="text-xs uppercase tracking-[0.2em] text-mute mb-4">{aboutCopy.title}</p>
							<h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight max-w-3xl">
								{aboutCopy.title}
							</h1>
						</FadeIn>
					</div>
				</section>

				<section className="px-6 lg:px-8 py-24 border-t border-border">
					<div className="mx-auto max-w-3xl">
						<FadeIn>
							<p className="text-xl sm:text-2xl font-light leading-relaxed text-foreground mb-12">{aboutCopy.lead}</p>
						</FadeIn>
						{aboutCopy.body.map((paragraph, i) => (
							<FadeIn key={`body-p-${paragraph.slice(0, 16)}`} delay={0.08 * (i + 1)}>
								<p className="text-base text-mute leading-relaxed mb-6">{paragraph}</p>
							</FadeIn>
						))}
					</div>
				</section>

				<section className="px-6 lg:px-8 py-24 border-t border-border">
					<div className="mx-auto max-w-7xl">
						<FadeIn>
							<p className="text-xs uppercase tracking-[0.2em] text-mute mb-3">{content.experience.label}</p>
							<h2 className="text-3xl font-light tracking-tight mb-16">{content.experience.title}</h2>
						</FadeIn>
						<div>
							{content.experience.items.map((item, index) => (
								<FadeIn key={`exp-${item.company}-${item.role}`} delay={index * 0.05}>
									<article className="grid gap-4 border-t border-border py-10 sm:grid-cols-[1fr_2fr] sm:gap-12">
										<div>
											<p className="text-sm text-mute">{item.period}</p>
											<p className="text-xs text-mute mt-1">{item.location}</p>
										</div>
										<div>
											<h3 className="text-lg font-medium">{item.role}</h3>
											<p className="text-sm text-neon mt-1">{item.company}</p>
											<p className="mt-4 text-sm text-mute leading-relaxed max-w-xl">{item.description}</p>
										</div>
									</article>
								</FadeIn>
							))}
						</div>
					</div>
				</section>

				<section className="px-6 lg:px-8 py-24 border-t border-border text-center">
					<FadeIn>
						<p className="text-mute mb-6">{SITE_IDENTITY.global.AUTHOR.EMAIL}</p>
						<a
							href={`mailto:${SITE_IDENTITY.global.AUTHOR.EMAIL}`}
							className="cta-button inline-flex cursor-pointer items-center gap-3 rounded-full px-8 py-4 text-sm font-medium transition-colors"
						>
							{translation.UI.COMMON.START_CONVERSATION} →
						</a>
					</FadeIn>
				</section>
			</main>
			<Footer />
		</>
	);
}

export default AboutPage;
