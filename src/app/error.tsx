'use client';

import { ErrorPage } from '@/components/pages/error/page';

export default function RootError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
	return <ErrorPage locale="en-US" reset={reset} />;
}
