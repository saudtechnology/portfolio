'use client';

import type { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DocumentTitle } from '@/components/i18n/document-title';
import type { Locale } from '@/lib/i18n/messages';
import { messages } from '@/lib/i18n/messages';

export function NotFoundPage({ locale: forced }: { locale?: Locale } = {}) {
	const CURRENT_URL_PATHNAME = usePathname();
	const LOCALE: Locale = forced ?? (CURRENT_URL_PATHNAME.startsWith('/pt-BR') ? 'pt-BR' : 'en-US');
	const REDIRECT_HREF = (LOCALE === 'pt-BR' ? '/pt-BR/' : '/') as Route;
	const { notFoundTitle, notFoundBack } = messages[LOCALE];

	return (
		<main className="flex flex-1 flex-col items-start justify-center gap-4 px-8 py-24">
			<DocumentTitle title={notFoundTitle} />

			<p className="text-sm tracking-[0.2em] text-mute">404</p>
			<h1 className="text-3xl font-light">{notFoundTitle}</h1>

			<Link className="text-neon underline-offset-4 hover:underline" href={REDIRECT_HREF}>
				{notFoundBack}
			</Link>
		</main>
	);
}
