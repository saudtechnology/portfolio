import type { MetadataRoute } from 'next';

import { SITE_DESCRIPTION, SITE_LANGUAGE, SITE_NAME, SITE_URL, THEME_COLOR } from '@/lib/site';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
	return {
		id: SITE_URL,
		name: SITE_NAME,
		short_name: SITE_NAME,
		description: SITE_DESCRIPTION,
		lang: SITE_LANGUAGE,
		dir: 'ltr',
		start_url: '/',
		scope: '/',
		display: 'standalone',
		background_color: THEME_COLOR.dark,
		theme_color: THEME_COLOR.dark,
		icons: [
			{ src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
			{ src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
			{ src: '/icons/icon-192-maskable.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
			{ src: '/icons/icon-512-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
		],
	};
}
