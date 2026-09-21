import { ProjectDetailPage } from '@/components/pages/projects/detail';

/**
 * Required for static export (`output: 'export'`).
 * Pre-renders all known project detail pages at build time.
 */
export function generateStaticParams() {
	return [
		{ slug: 'home-broker' },
		{ slug: 'coe-platform' },
		{ slug: 'orquestra-ds' },
		{ slug: 'black-sales' },
		{ slug: 'black-aai' },
		{ slug: 'facial-recognition' },
		{ slug: 'guest-digital-journey' },
		{ slug: 'aliansce-web' },
		{ slug: 'aliansce-mobile' },
		{ slug: 'neoris-mobile' },
		{ slug: 'neoris-web-vision' },
	];
}

export default async function ProjectDetail({ params }: Readonly<{ params: Promise<{ slug: string }> }>) {
	const { slug } = await params;

	return <ProjectDetailPage slug={slug} />;
}
