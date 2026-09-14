import type { Metadata } from 'next';

import { HtmlLang } from '@/components/i18n/html-lang';
import { messages } from '@/lib/i18n/messages';
import { SITE_MOTTO, SITE_NAME, SITE_URL, SITE_WORDMARK } from '@/lib/site';

export const metadata: Metadata = {
	title: {
		default: `${SITE_WORDMARK} — ${SITE_MOTTO}`,
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
		locale: 'pt_BR',
		url: `${SITE_URL}/pt-BR`,
		siteName: SITE_NAME,
		title: `${SITE_WORDMARK} — ${SITE_MOTTO}`,
		description: messages['pt-BR'].description,
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
