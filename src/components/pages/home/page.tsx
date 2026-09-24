'use client';

import { JSX } from 'react';
import type { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useActiveLocale } from '@/hooks/use-active-locale';
import HOME_CONTENT from '@/lib/content/home';
import PROJECTS from '@/lib/content/projects';
import dynamic from 'next/dynamic';
import { FadeIn } from '@/components/motion/fade-in';
import { Stagger, StaggerItem } from '@/components/motion/stagger';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import SITE_IDENTITY from '@/lib/site/identity';
import { SocialIcons } from '@/components/ui/social-icons';
import { BrandWordmark } from '@/components/ui/brand';
import { HeroParallaxMedia } from '@/components/motion/hero-parallax';

/** Below-fold / non-LCP motion — deferred to shrink main-thread work on mobile. */
const HeroParticles = dynamic(() => import('@/components/motion/hero-particles').then((m) => m.HeroParticles), {
	ssr: false,
});
const CountUp = dynamic(() => import('@/components/motion/count-up').then((m) => m.CountUp), { ssr: false });
const StickyStack = dynamic(() => import('@/components/motion/sticky-stack').then((m) => m.StickyStack), { ssr: true });

/**
 * Full Home page experience — structure inspired by modern portfolio patterns,
 * fully adapted to SAUD TECHNOLOGY design system, identity and i18n.
 * Hero uses optimized responsive portrait banner as CSS background (static-export safe).
 */
export function HomePage(): JSX.Element {
	const { locale, translation } = useActiveLocale();
	const content = HOME_CONTENT[locale];
	const projects = PROJECTS[locale].items.slice(0, 6);
	const prefix = locale === 'pt-BR' ? '/pt-BR' : '';
	const aboutHref = `${prefix}/about` as Route;
	const projectsHref = `${prefix}/projects` as Route;

	return (
		<>
			<Header />

			<main id="main-content" className="flex-1" tabIndex={-1}>
				{/* Hero */}
				<section
					className="relative min-h-svh flex flex-col overflow-hidden isolate"
					aria-label={translation.UI.COMMON.INTRODUCTION}
				>
					{/* LCP portrait: WebP primary + JPEG fallback (static export safe) */}
					<HeroParallaxMedia className="pointer-events-none z-0">
						{}
						<Image
							src="/images/banner.webp"
							alt=""
							width={1792}
							height={1008}
							sizes="100vw"
							priority // Substitui o fetchPriority="high" para imagens críticas acima da dobra
							className="absolute inset-0 h-full w-full max-w-none object-cover object-[center_20%] md:object-[center_18%] lg:object-[center_22%] xl:object-[center_28%] 2xl:object-[center_32%]"
							aria-hidden
						/>
					</HeroParallaxMedia>
					{/* Neon light particles — tech ambient */}
					<div className="pointer-events-none absolute inset-0 z-1">
						<HeroParticles />
					</div>
					{/* Gradient overlay */}
					<div
						className="pointer-events-none absolute inset-0 z-1"
						style={{
							background:
								'linear-gradient(to bottom, rgba(var(--void-rgb), 0.35) 0%, rgba(var(--void-rgb), 0.15) 35%, rgba(var(--plate-rgb), 0.55) 65%, rgba(var(--plate-rgb), 0.92) 100%)',
						}}
						aria-hidden
					/>

					{/* Content frame — top gap ~107px below navbar (h-16) */}
					<div className="relative z-10 flex flex-1 flex-col min-h-svh pb-10 sm:pb-14 pt-27 md:pt-31.5 lg:pt-37.5">
						<div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 lg:px-8">
							{/* Top row: © + roles (left) aligned with socials (right, md+) */}
							<div className="flex items-start justify-between gap-6">
								<div>
									<p className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-snow leading-none">
										{content.hero.eyebrow}
									</p>
									<ul className="mt-4 space-y-1">
										{content.hero.roles.map((role) => (
											<li key={role} className="text-base sm:text-lg lg:text-xl font-bold text-snow leading-snug">
												{role}
											</li>
										))}
									</ul>
								</div>

								{/* Social nav: hidden below md */}
								<div className="hidden md:block pt-1.5">
									<SocialIcons direction="col" itemGap="24px" iconClassName="text-snow hover:text-neon" />
								</div>
							</div>

							{/* Spacer keeps face clear on mobile — content sits in lower third */}
							<div className="flex-1 min-h-[28vh] sm:min-h-[32vh] lg:min-h-0" aria-hidden />

							{/* Bottom: wordmark + CTA centered */}
							<div className="flex flex-col items-center gap-12 text-center">
								<h1 className="shrink-0 max-w-[min(100%,28rem)] sm:max-w-[min(100%,34rem)] md:max-w-[min(100%,40rem)] lg:max-w-[min(100%,48rem)]">
									<BrandWordmark title={content.hero.title} className="h-10 w-auto sm:h-12 md:h-14 lg:h-16 xl:h-18" />
								</h1>

								<a
									href={`mailto:${SITE_IDENTITY.global.AUTHOR.EMAIL}`}
									className="group relative inline-flex w-[min(100%,293px)] items-center justify-center rounded-full bg-void/85 border border-snow/20 py-3.5 pl-7 pr-14 text-sm font-medium text-snow hover:border-neon/60 transition-colors"
								>
									<span className="text-center whitespace-nowrap">{content.hero.cta}</span>
									<span
										className="absolute right-1.5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-neon text-void group-hover:transform-[scale(1.05)] transition-transform"
										aria-hidden
									>
										→
									</span>
								</a>
							</div>
						</div>
					</div>
				</section>

				{/* About teaser + Stats */}
				<section id="about" className="px-6 lg:px-8 py-24 lg:py-32 border-t border-border scroll-mt-24">
					<div className="mx-auto max-w-7xl">
						<div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
							<div>
								<FadeIn>
									<p className="text-xs uppercase tracking-[0.2em] text-mute mb-4">{content.aboutTeaser.label}</p>
									<h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-6">{content.aboutTeaser.title}</h2>
									<p className="text-base text-mute leading-relaxed max-w-lg mb-8">{content.aboutTeaser.body}</p>
									<Link href={aboutHref} rel="preload" className="text-sm text-neon hover:underline underline-offset-4">
										{content.aboutTeaser.cta} →
									</Link>
								</FadeIn>
							</div>

							<div>
								<Stagger className="grid grid-cols-2 gap-8 sm:gap-6">
									{content.stats.map((stat) => (
										<StaggerItem key={stat.label}>
											<div className="flex h-full flex-col items-center justify-center text-center">
												<p className="text-3xl sm:text-4xl font-light text-foreground tabular-nums whitespace-nowrap">
													<CountUp value={stat.value} />
												</p>
												<p className="mt-2 text-[11px] sm:text-xs uppercase tracking-[0.12em] text-mute leading-tight">
													{stat.label}
												</p>
											</div>
										</StaggerItem>
									))}
								</Stagger>
							</div>
						</div>
					</div>
				</section>

				{/* Featured Projects */}
				<section id="projects" className="px-6 lg:px-8 py-24 lg:py-32 border-t border-border scroll-mt-24">
					<div className="mx-auto max-w-7xl">
						<FadeIn>
							<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
								<div>
									<p className="text-xs uppercase tracking-[0.2em] text-mute mb-3">{content.projects.label}</p>
									<h2 className="text-3xl sm:text-4xl font-light tracking-tight">{content.projects.title}</h2>
									<p className="mt-2 text-mute">{content.projects.subtitle}</p>
								</div>
								<Link
									href={projectsHref}
									rel="preload"
									className="text-sm text-neon hover:underline underline-offset-4 shrink-0"
								>
									{content.projects.cta} →
								</Link>
							</div>
						</FadeIn>

						<StickyStack
							className="grid gap-6 sm:grid-cols-2 sm:items-stretch"
							singleColumnMax={767}
							gap={32}
							horizontalInset={8}
						>
							{projects.map((project) => (
								<Link
									key={project.slug}
									href={`${prefix}/projects/${project.slug}` as Route}
									rel="preload"
									className="group flex h-full flex-col rounded-2xl border border-border bg-surface/40 p-6 sm:p-8 transition-colors hover:border-neon/40 hover:bg-surface"
								>
									<div className="flex items-start justify-between gap-4 mb-6">
										<span className="text-xs text-mute">/{project.year}</span>
										<span className="text-xs text-mute">{project.category}</span>
									</div>
									{project.client ? (
										<p className="text-xs mb-2 tracking-wide" style={{ color: 'rgba(var(--neon-rgb), 0.9)' }}>
											{project.client}
										</p>
									) : null}
									<h3 className="text-xl sm:text-2xl font-light tracking-tight group-hover:text-neon transition-colors">
										{project.title}
									</h3>
									<p className="mt-3 flex-1 text-sm text-mute leading-relaxed line-clamp-2">{project.summary}</p>
									<div className="mt-5 flex flex-wrap gap-2">
										{project.tags.slice(0, 6).map((tag) => (
											<span
												key={tag}
												className="rounded-full border border-neon/30 bg-neon/10 px-2.5 py-1 text-[11px] font-medium tracking-wide text-neon"
											>
												{tag}
											</span>
										))}
									</div>
								</Link>
							))}
						</StickyStack>
					</div>
				</section>

				{/* Testimonials */}
				<section id="social-proof" className="px-6 lg:px-8 py-24 lg:py-32 border-t border-border scroll-mt-24">
					<div className="mx-auto max-w-7xl">
						<FadeIn>
							<p className="text-xs uppercase tracking-[0.2em] text-mute mb-3">{content.testimonials.label}</p>
							<h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-16">{content.testimonials.title}</h2>
						</FadeIn>

						<StickyStack
							className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:items-stretch"
							singleColumnMax={767}
							gap={32}
							horizontalInset={8}
						>
							{content.testimonials.items.map((item) => (
								<blockquote
									key={item.author}
									className="flex h-full flex-col rounded-2xl border border-border border-l-2 border-l-neon/70 bg-surface/30 p-8"
								>
									{item.metric ? (
										<p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-neon">{item.metric}</p>
									) : null}
									<p className="flex-1 text-base sm:text-lg font-light leading-relaxed text-foreground">
										“{item.quote}”
									</p>
									<footer className="mt-8 border-t border-border pt-5">
										<p className="text-sm font-medium text-foreground">{item.author}</p>
										<p className="text-xs text-mute mt-1">{item.role}</p>
									</footer>
								</blockquote>
							))}
						</StickyStack>
					</div>
				</section>

				{/* Benefits */}
				<section id="benefits" className="px-6 lg:px-8 py-24 lg:py-32 border-t border-border scroll-mt-24">
					<div className="mx-auto max-w-7xl">
						<FadeIn>
							<p className="text-xs uppercase tracking-[0.2em] text-mute mb-3">{content.benefits.label}</p>
							<h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-16">{content.benefits.title}</h2>
						</FadeIn>
						<StickyStack className="grid gap-6 sm:grid-cols-2" singleColumnMax={767} gap={32} horizontalInset={8}>
							{content.benefits.items.map((item) => (
								<div
									key={item.title}
									className="flex h-full flex-col rounded-2xl border border-border border-l-2 border-l-neon/60 bg-surface/30 p-6 sm:p-8"
								>
									{item.highlight ? (
										<p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-neon">{item.highlight}</p>
									) : null}
									<h3 className="text-lg font-semibold mb-3 text-foreground">{item.title}</h3>
									<p className="text-sm text-mute leading-relaxed flex-1">{item.description}</p>
								</div>
							))}
						</StickyStack>
					</div>
				</section>

				{/* Education & certifications */}
				<section
					id="credentials"
					className="px-6 lg:px-8 pt-24 pb-40 md:py-24 lg:py-32 border-t border-border scroll-mt-24"
				>
					<div className="mx-auto max-w-7xl">
						<FadeIn>
							<p className="text-xs uppercase tracking-[0.2em] text-mute mb-3">{content.education.label}</p>
							<h2 className="text-3xl sm:text-4xl font-light tracking-tight">{content.education.title}</h2>
							<p className="mt-3 mb-8 max-w-2xl text-mute">{content.education.subtitle}</p>
						</FadeIn>
						<StickyStack
							className="mt-14 space-y-0"
							singleColumnMax={767}
							gap={24}
							withShell={false}
							horizontalInset={0}
						>
							{content.education.items.map((item) => (
								<article
									key={`${item.title}-${item.org}`}
									className="grid gap-4 border-t border-border py-10 sm:grid-cols-[minmax(0,11rem)_1fr] sm:gap-10 bg-background"
								>
									<div>
										<p className="text-xs uppercase tracking-[0.15em] text-neon">{item.kind}</p>
										<p className="mt-2 text-sm text-mute">{item.period}</p>
										{item.status ? <p className="mt-2 text-xs font-medium text-foreground/80">{item.status}</p> : null}
									</div>
									<div>
										<h3 className="text-lg font-medium text-foreground">{item.title}</h3>
										<p className="mt-1 text-sm">
											<span className="font-medium text-neon">{item.org}</span>
											{item.location ? <span className="text-mute"> · {item.location}</span> : null}
										</p>
										<p className="mt-3 text-sm text-mute leading-relaxed max-w-3xl">{item.description}</p>
										{item.tags && item.tags.length > 0 ? (
											<div className="mt-4 flex flex-wrap gap-2">
												{item.tags.map((tag) => (
													<span
														key={tag}
														className="rounded-full border border-neon/25 bg-neon/10 px-2.5 py-1 text-[11px] font-medium text-neon"
													>
														{tag}
													</span>
												))}
											</div>
										) : null}
									</div>
								</article>
							))}
						</StickyStack>
					</div>
				</section>

				{/* Experience */}
				<section id="experience" className="px-6 lg:px-8 py-24 lg:py-32 border-t border-border scroll-mt-24">
					<div className="mx-auto max-w-7xl">
						<FadeIn>
							<p className="text-xs uppercase tracking-[0.2em] text-mute mb-3">{content.experience.label}</p>
							<h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-16">{content.experience.title}</h2>
						</FadeIn>
						<StickyStack className="space-y-0" singleColumnMax={767} gap={24} withShell={false} horizontalInset={0}>
							{content.experience.items.map((item) => (
								<article
									key={`${item.company}-${item.period}`}
									className="grid gap-4 border-t border-border py-14 sm:py-16 sm:grid-cols-[1fr_2fr] sm:gap-12 bg-background"
								>
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
							))}
						</StickyStack>
					</div>
				</section>

				{/* Services */}
				<section id="services" className="px-6 lg:px-8 py-24 lg:py-32 border-t border-border scroll-mt-24">
					<div className="mx-auto max-w-7xl">
						<FadeIn>
							<p className="text-xs uppercase tracking-[0.2em] text-mute mb-3">{content.services.label}</p>
							<h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-16">{content.services.title}</h2>
						</FadeIn>
						<StickyStack className="space-y-12" singleColumnMax={1023} gap={28} withShell={false} horizontalInset={0}>
							{content.services.items.map((service) => (
								<article
									key={service.number}
									className="grid gap-8 border-t border-border pt-12 lg:grid-cols-[auto_1fr_1fr] bg-background rounded-2xl"
								>
									<span className="text-sm text-mute">{service.number}</span>
									<div>
										<h3 className="text-xl font-medium mb-3">{service.title}</h3>
										<p className="text-sm text-mute leading-relaxed max-w-md">{service.description}</p>
									</div>
									<ul className="space-y-2">
										{service.points.map((point) => (
											<li key={point} className="text-sm text-foreground flex items-start gap-2">
												<span className="text-neon mt-1">·</span>
												{point}
											</li>
										))}
									</ul>
								</article>
							))}
						</StickyStack>
					</div>
				</section>

				{/* FAQ */}
				<section id="faq" className="px-6 lg:px-8 py-24 lg:py-32 border-t border-border scroll-mt-24">
					<div className="mx-auto max-w-3xl">
						<FadeIn>
							<p className="text-xs uppercase tracking-[0.2em] text-mute mb-3">{content.faq.label}</p>
							<h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-12">{content.faq.title}</h2>
						</FadeIn>
						<div className="space-y-4">
							{content.faq.items.map((item) => (
								<FadeIn key={item.question} delay={0.04}>
									<details className="group rounded-xl border border-border open:bg-surface/50 transition-colors">
										<summary className="cursor-pointer list-none px-6 py-5 text-sm font-medium flex items-center justify-between gap-4 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-neon">
											{item.question}
											<span
												className="text-mute group-open:rotate-45 transition-transform text-lg leading-none"
												aria-hidden
											>
												+
											</span>
										</summary>
										<div className="px-6 pb-5 text-sm text-mute leading-relaxed">{item.answer}</div>
									</details>
								</FadeIn>
							))}
						</div>
					</div>
				</section>

				{/* Final CTA */}
				<section className="px-6 lg:px-8 py-24 lg:py-32 border-t border-border">
					<div className="mx-auto max-w-3xl text-center">
						<FadeIn>
							<h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-6">{content.cta.title}</h2>
							<p className="text-base text-mute mb-10 max-w-xl mx-auto">{content.cta.subtitle}</p>
							<a
								href={`mailto:${SITE_IDENTITY.global.AUTHOR.EMAIL}`}
								className="cta-button inline-flex cursor-pointer items-center gap-3 rounded-full px-8 py-4 text-sm font-medium transition-colors"
							>
								{content.cta.button}
								<span aria-hidden>→</span>
							</a>
						</FadeIn>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}

export default HomePage;
