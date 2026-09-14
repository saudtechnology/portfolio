import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';

import { HtmlLang } from '@/components/i18n/html-lang';
import { LocaleGate } from '@/components/i18n/locale-gate';
import { JsonLd } from '@/components/seo/json-ld';
import { BrandStyles } from '@/components/theme/brand-styles';
import {
	SITE_AUTHOR,
	SITE_DESCRIPTION,
	SITE_KNOWS_ABOUT,
	SITE_LOCALE,
	SITE_MOTTO,
	SITE_NAME,
	SITE_URL,
	SITE_WORDMARK,
	THEME_COLOR,
} from '@/lib/site';

import '@/styles/globals.css';

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['200', '300', '400', '600'],
	variable: '--font-montserrat',
	display: 'swap',
});

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: dark)', color: THEME_COLOR.dark },
		{ media: '(prefers-color-scheme: light)', color: THEME_COLOR.light },
	],
	colorScheme: 'dark light',
};

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: `${SITE_WORDMARK} — ${SITE_MOTTO}`,
		template: `%s · ${SITE_WORDMARK}`,
	},
	description: SITE_DESCRIPTION,
	applicationName: SITE_NAME,
	authors: [{ name: SITE_AUTHOR, url: SITE_URL }],
	creator: SITE_AUTHOR,
	publisher: SITE_NAME,
	keywords: SITE_KNOWS_ABOUT as unknown as string[],
	category: 'technology',
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/',
			'pt-BR': '/pt-BR',
			'x-default': '/',
		},
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-image-preview': 'large',
			'max-snippet': -1,
			'max-video-preview': -1,
		},
	},
	openGraph: {
		type: 'website',
		locale: SITE_LOCALE,
		url: SITE_URL,
		siteName: SITE_NAME,
		title: `${SITE_WORDMARK} — ${SITE_MOTTO}`,
		description: SITE_DESCRIPTION,
		images: [
			{
				url: '/opengraph-image.png?v=2',
				width: 1200,
				height: 630,
				alt: `${SITE_WORDMARK} — ${SITE_MOTTO}`,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: `${SITE_WORDMARK} — ${SITE_MOTTO}`,
		description: SITE_DESCRIPTION,
		images: ['/opengraph-image.png?v=2'],
	},
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html lang="en-US" className={`${montserrat.variable} dark h-full antialiased`}>
			<body className={`${montserrat.className} min-h-full flex flex-col bg-background text-foreground`}>
				<BrandStyles />
				<HtmlLang locale="en-US" />
				<LocaleGate />
				<JsonLd />

				{children}
			</body>
		</html>
	);
}
