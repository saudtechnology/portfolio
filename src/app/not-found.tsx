import type { Metadata } from 'next';
import Link from 'next/link';

import { messages } from '@/lib/i18n/messages';

export const metadata: Metadata = {
	title: messages['en-US'].notFoundTitle,
	robots: { index: false, follow: false },
};

export default function RootNotFound() {
	const copy = messages['en-US'];
	return (
		<main className="flex flex-1 flex-col items-start justify-center gap-4 px-8 py-24">
			<p className="text-sm tracking-[0.2em] text-mute">404</p>
			<h1 className="text-3xl font-light">{copy.notFoundTitle}</h1>
			<Link className="text-neon underline-offset-4 hover:underline" href="/">
				{copy.notFoundBack}
			</Link>
		</main>
	);
}
