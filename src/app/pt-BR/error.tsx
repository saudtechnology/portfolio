'use client';

import { ErrorPage } from '@/components/pages/error/page';

export default function RootErrorPtBrLayout({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
	return <ErrorPage locale="pt-BR" reset={reset} />;
}
