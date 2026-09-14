import { Metadata } from 'next';
import { LoadingPage } from '@/components/pages/loading/page';
import { messages } from '@/lib/i18n/messages';

export const metadata: Metadata = {
	title: messages['en-US'].loading,
	robots: { index: false, follow: false },
};

export default function RootLoading() {
	return <LoadingPage locale="en-US" />;
}
