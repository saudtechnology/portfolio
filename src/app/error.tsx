'use client';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
	return (
		<main className="flex flex-1 flex-col items-start justify-center gap-4 px-8 py-24">
			<h1 className="text-3xl font-light">Falha ao carregar</h1>
			<button type="button" className="text-neon underline-offset-4 hover:underline" onClick={() => reset()}>
				Tentar novamente
			</button>
		</main>
	);
}
