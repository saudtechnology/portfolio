import type { Locale } from '@/lib/i18n/messages';
import { messages } from '@/lib/i18n/messages';
import { SITE_EMAIL, SITE_MOTTO, SITE_WORDMARK } from '@/lib/site';

export function HomePage({ locale }: { locale: Locale }) {
	return (
		<main className="flex flex-1 flex-col items-start justify-center gap-6 px-8 py-24">
			<p className="text-sm tracking-[0.2em] text-mute">{SITE_WORDMARK}</p>
			<h1 className="max-w-xl text-4xl font-light tracking-tight">{SITE_MOTTO}</h1>
			<p className="max-w-lg text-base text-mute">{messages[locale].description}</p>
			<a className="text-neon underline-offset-4 hover:underline" href={`mailto:${SITE_EMAIL}`}>
				{SITE_EMAIL}
			</a>
		</main>
	);
}
