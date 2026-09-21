'use client';

import { JSX } from 'react';
import type { Route } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useActiveLocale } from '@/hooks/use-active-locale';
import PROJECTS from '@/lib/content/projects';
import { FadeIn } from '@/components/motion/fade-in';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import SITE_IDENTITY from '@/lib/site/identity';

export function ProjectDetailPage({ slug }: Readonly<{ slug: string }>): JSX.Element {
	const { locale, translation } = useActiveLocale();
	const content = PROJECTS[locale];
	const project = content.items.find((p) => p.slug === slug);
	const prefix = locale === 'pt-BR' ? '/pt-BR' : '';

	if (!project) {
		notFound();
	}

	return (
		<>
			<Header />
			<main id="main-content" tabIndex={-1} className="flex-1">
				<section className="pt-32 pb-16 px-6 lg:px-8">
					<div className="mx-auto max-w-7xl">
						<FadeIn>
							<Link
								href={`${prefix}/projects` as Route}
								className="text-sm text-mute hover:text-neon transition-colors mb-8 inline-block"
							>
								← {translation.UI.COMMON.ALL_PROJECTS}
							</Link>
							<h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight mt-6">{project.title}</h1>
						</FadeIn>

						<div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 border-t border-border pt-10">
							{[
								{ label: translation.UI.COMMON.YEAR, value: project.year },
								{ label: translation.UI.COMMON.CLIENT, value: project.client ?? '—' },
								{ label: translation.UI.COMMON.DURATION, value: project.duration ?? '—' },
								{ label: translation.UI.COMMON.LOCATION, value: project.location ?? '—' },
							].map((meta) => (
								<div key={meta.label}>
									<p className="text-xs uppercase tracking-[0.15em] text-mute mb-2">/{meta.label}</p>
									<p
										className={`text-sm ${
											meta.label === 'Client' || meta.label === 'Cliente' ? 'text-neon' : 'text-foreground'
										}`}
									>
										{meta.value}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="px-6 lg:px-8 py-16 border-t border-border">
					<div className="mx-auto max-w-3xl">
						<FadeIn>
							<p className="text-lg sm:text-xl font-light leading-relaxed text-foreground mb-8">{project.summary}</p>
							<p className="text-base text-mute leading-relaxed">{project.description}</p>
						</FadeIn>

						<div className="mt-12 flex flex-wrap gap-2">
							{project.tags.map((tag) => (
								<span
									key={tag}
									className="rounded-full border border-neon/30 bg-neon/10 px-3 py-1.5 text-xs font-medium tracking-wide text-neon"
								>
									{tag}
								</span>
							))}
						</div>
					</div>
				</section>

				<section className="px-6 lg:px-8 py-24 border-t border-border text-center">
					<FadeIn>
						<a
							href={`mailto:${SITE_IDENTITY.global.AUTHOR.EMAIL}`}
							className="cta-button inline-flex cursor-pointer items-center gap-3 rounded-full px-8 py-4 text-sm font-medium transition-colors"
						>
							{translation.UI.COMMON.START_PROJECT} →
						</a>
					</FadeIn>
				</section>
			</main>
			<Footer />
		</>
	);
}

export default ProjectDetailPage;
