'use client';

import { Metadata } from 'next';
import { ErrorPage } from '@/components/pages/error/page';
import { messages } from '@/lib/i18n/messages';

export const metadata: Metadata = {
	title: messages['en-US'].loading,
	robots: { index: false, follow: false },
};

export default function RootError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
	return <ErrorPage locale="en-US" reset={reset} />;
}
