import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

import { SITE_DESCRIPTION, SITE_NAME } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: SITE_NAME,
		short_name: 'SAUD',
		description: SITE_DESCRIPTION,
		start_url: '/',
		display: 'standalone',
		background_color: '#000000',
		theme_color: '#000000',
		lang: 'pt-BR',
	};
}
