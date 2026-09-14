import type { Metadata } from 'next';

import { HtmlLang } from '@/components/i18n/html-lang';
import { messages } from '@/lib/i18n/messages';
import { SITE_NAME, SITE_URL, SITE_WORDMARK } from '@/lib/site';

export const metadata: Metadata = {
	title: {
		default: `${SITE_WORDMARK} — ${messages['pt-BR'].motto}`,
		template: `%s · ${SITE_WORDMARK}`,
	},
	description: messages['pt-BR'].description,
	alternates: {
		canonical: '/pt-BR',
		languages: {
			'en-US': '/',
			'pt-BR': '/pt-BR',
			'x-default': '/',
		},
	},
	openGraph: {
		type: 'website',
		locale: 'pt_BR',
		url: SITE_URL,
		siteName: SITE_NAME,
		title: `${SITE_WORDMARK} — ${messages['pt-BR'].motto}`,
		description: messages['pt-BR'].description,
		images: [
			{
				url: '/opengraph-image.jpg?v=2',
				width: 1200,
				height: 630,
				alt: `${SITE_WORDMARK} — ${messages['pt-BR'].motto}`,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: `${SITE_WORDMARK} — ${messages['en-US'].motto}`,
		description: messages['pt-BR'].description,
		images: ['/twitter-image.jpg?v=2'],
	},
};

export default function RootPtBrLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<HtmlLang locale="pt-BR" />
			{children}
		</>
	);
}
