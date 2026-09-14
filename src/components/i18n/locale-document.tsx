'use client';

import { useEffect } from 'react';
import { detectLocale } from '@/lib/i18n/messages';

export function LocaleDocument() {
	useEffect(() => {
		const locale = detectLocale(navigator.languages?.[0] ?? navigator.language);
		document.documentElement.lang = locale;
	}, []);

	return null;
}
