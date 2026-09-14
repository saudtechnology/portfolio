'use client';

import type { Locale } from '@/lib/i18n/messages';
import { messages } from '@/lib/i18n/messages';

export function ErrorPage({ locale, reset }: { locale: Locale; reset: () => void }) {
	const COPY = messages[locale];

	return (
		<main className="flex flex-1 flex-col items-start justify-center gap-4 px-8 py-24">
			<h1 className="text-3xl font-light">{COPY.errorTitle}</h1>
			<button type="button" className="text-neon underline-offset-4 hover:underline" onClick={() => reset()}>
				{COPY.errorRetry}
			</button>
		</main>
	);
}
