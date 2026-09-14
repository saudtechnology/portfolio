import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/lib/site';
import { Languages } from 'next/dist/lib/metadata/types/alternative-urls-types';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
	const en = `${SITE_URL}/`;
	const pt = `${SITE_URL}/pt-BR`;
	const LANGUAGES: Languages<string> | undefined = { 'en-US': en, 'pt-BR': pt };

	return [
		{
			url: en,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
			alternates: { languages: LANGUAGES },
		},
		{
			url: pt,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
			alternates: { languages: LANGUAGES },
		},
	];
}
