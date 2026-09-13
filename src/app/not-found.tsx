import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Página não encontrada',
	robots: { index: false, follow: false },
};

export default function NotFound() {
	return (
		<main className="flex flex-1 flex-col items-start justify-center gap-4 px-8 py-24">
			<p className="text-sm tracking-[0.2em] text-mute">404</p>
			<h1 className="text-3xl font-light">Página não encontrada</h1>
			<Link className="text-neon underline-offset-4 hover:underline" href="/">
				Voltar ao início
			</Link>
		</main>
	);
}
