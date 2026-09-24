'use client';

import { JSX } from 'react';
import type { Route } from 'next';
import Link from 'next/link';
import { useActiveLocale } from '@/hooks/use-active-locale';
import PROJECTS from '@/lib/content/projects';
import { FadeIn } from '@/components/motion/fade-in';
import { StickyStack } from '@/components/motion/sticky-stack';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export function ProjectsPage(): JSX.Element {
	const { locale } = useActiveLocale();
	const content = PROJECTS[locale];
	const prefix = locale === 'pt-BR' ? '/pt-BR' : '';

	return (
		<>
			<Header />
			<main id="main-content" tabIndex={-1} className="flex-1">
				<section className="relative flex flex-col justify-end pb-16 pt-28 min-h-[42vh] sm:min-h-[38vh] px-6 lg:px-8">
					<div className="absolute inset-0 -z-10 bg-linear-to-b from-plate to-forest/80" />
					<div className="mx-auto w-full max-w-7xl">
						<FadeIn>
							<p className="text-xs uppercase tracking-[0.2em] text-mute mb-4">{content.label}</p>
							<h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight">{content.title}</h1>
							<p className="mt-6 max-w-xl text-base text-mute leading-relaxed">{content.subtitle}</p>
						</FadeIn>
					</div>
				</section>

				<section className="px-6 lg:px-8 py-24 border-t border-border">
					<div className="mx-auto max-w-7xl">
						<StickyStack
							className="grid gap-6 sm:grid-cols-2 sm:items-stretch"
							singleColumnMax={767}
							gap={32}
							horizontalInset={8}
						>
							{content.items.map((project) => (
								<Link
									key={project.slug}
									href={`${prefix}/projects/${project.slug}` as Route}
									rel="preload"
									className="group flex h-full flex-col rounded-2xl border border-border bg-surface/30 p-6 sm:p-8 transition-colors hover:border-neon/40 hover:bg-surface"
								>
									<div className="flex items-start justify-between gap-4 mb-8">
										<span className="text-xs text-mute">/{project.year}</span>
										<span className="text-xs text-mute">{project.category}</span>
									</div>
									{project.client ? (
										<p className="text-xs mb-2 tracking-wide" style={{ color: 'rgba(var(--neon-rgb), 0.9)' }}>
											{project.client}
										</p>
									) : null}
									<h2 className="text-2xl font-light tracking-tight group-hover:text-neon transition-colors">
										{project.title}
									</h2>
									<p className="mt-4 flex-1 text-sm text-mute leading-relaxed">{project.summary}</p>
									<div className="mt-6 flex flex-wrap gap-2">
										{project.tags.map((tag) => (
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
			</main>
			<Footer />
		</>
	);
}

export default ProjectsPage;
