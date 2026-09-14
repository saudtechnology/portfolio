import type { Locale } from '@/lib/i18n/messages';
import { messages } from '@/lib/i18n/messages';

export function LoadingPage({ locale }: { locale: Locale }) {
	return (
		<main className="flex flex-1 items-center justify-center px-8 py-24">
			<p className="text-sm tracking-[0.2em] text-mute">{messages[locale].loading}</p>
		</main>
	);
}
