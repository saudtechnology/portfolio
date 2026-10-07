import { ProjectDetailPage } from '@/components/pages/projects/detail';

/**
 * Required for static export (`output: 'export'`).
 * Pre-renders all known project detail pages at build time.
 */
export function generateStaticParams() {
	return [
		{ slug: 'btg-pactual-home-broker-web' },
		{ slug: 'btg-pactual-coe-web-platform' },
		{ slug: 'btg-pactual-digital-equities-ds' },
		{ slug: 'xp-investimentos-black-sales' },
		{ slug: 'xp-investimentos-black-aai' },
		{ slug: 'zoox-pms-web' },
		{ slug: 'aliansce-bi-geospatial-web' },
		{ slug: 'aliansce-spatial-metrics-mobile' },
		{ slug: 'neoris-spatial-metrics-mobile' },
		{ slug: 'neoris-web-vision' },
	];
}

export default async function ProjectDetail({ params }: Readonly<{ params: Promise<{ slug: string }> }>) {
	const { slug } = await params;
	return <ProjectDetailPage slug={slug} />;
}
