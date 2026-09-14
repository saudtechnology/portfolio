import type { Metadata, Route } from 'next';
import Link from 'next/link';

import { messages } from '@/lib/i18n/messages';

export const metadata: Metadata = {
	title: messages['pt-BR'].notFoundTitle,
	robots: { index: false, follow: false },
};

export default function RootNotFoundPtBrLayout() {
	const t = messages['pt-BR'];
	return (
		<main className="flex flex-1 flex-col items-start justify-center gap-4 px-8 py-24">
			<p className="text-sm tracking-[0.2em] text-mute">404</p>
			<h1 className="text-3xl font-light">{t.notFoundTitle}</h1>
			<Link className="text-neon underline-offset-4 hover:underline" href={'/pt-BR/' as Route}>
				{t.notFoundBack}
			</Link>
		</main>
	);
}
