'use client';

import { useEffect } from 'react';
import { detectLocale } from '@/lib/i18n/messages';

export function LocaleGate() {
	useEffect(() => {
		const locale = detectLocale(navigator.languages?.[0] ?? navigator.language);
		const path = window.location.pathname;
		const onPt = path === '/pt-BR' || path.startsWith('/pt-BR/');

		if (locale === 'pt-BR' && !onPt) {
			window.location.replace('/pt-BR/');
			return;
		}

		if (locale !== 'pt-BR' && onPt) {
			window.location.replace('/');
		}
	}, []);

	return null;
}
