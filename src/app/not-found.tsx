import type { Metadata } from 'next';
import { messages } from '@/lib/i18n/messages';
import { NotFoundPage } from '@/components/pages/not-found/page';

export const metadata: Metadata = {
	title: messages['en-US'].notFoundTitle,
	robots: { index: false, follow: false },
};

export default function RootNotFoundLayout() {
	return <NotFoundPage />;
}
