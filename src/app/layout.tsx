import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';

import { JsonLd } from '@/components/json-ld';
import { SITE_AUTHOR, SITE_DESCRIPTION, SITE_LOCALE, SITE_MOTTO, SITE_NAME, SITE_URL, SITE_WORDMARK } from '@/lib/site';

import './globals.css';

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['200', '300', '400', '600'],
	variable: '--font-montserrat',
	display: 'swap',
});

export const viewport: Viewport = {
	themeColor: '#000000',
	colorScheme: 'dark',
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
	keywords: ['SAUD TECHNOLOGY', 'Thiago Saud', 'Frontend', 'AI', 'MLOps', 'Next.js'],
	category: 'technology',
	alternates: {
		canonical: '/',
		languages: { 'pt-BR': '/' },
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
	},
	twitter: {
		card: 'summary_large_image',
		title: `${SITE_WORDMARK} — ${SITE_MOTTO}`,
		description: SITE_DESCRIPTION,
	},
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html lang="pt-BR" className={`${montserrat.variable} h-full antialiased`}>
			<body className={`${montserrat.className} min-h-full flex flex-col bg-background text-foreground`}>
				<JsonLd />
				{children}
			</body>
		</html>
	);
}
