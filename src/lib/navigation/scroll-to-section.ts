/**
 * Smoothly scroll to a home section, accounting for the fixed header.
 * Safe for same-hash re-clicks (browser would otherwise no-op).
 */
export function scrollToSection(
	sectionId: string,
	options?: Readonly<{ behavior?: ScrollBehavior; headerOffset?: number }>
): void {
	if (typeof document === 'undefined') return;

	const el = document.getElementById(sectionId);
	if (!el) return;

	const headerOffset = options?.headerOffset ?? 96;
	const behavior = options?.behavior ?? 'smooth';
	const top = window.scrollY + el.getBoundingClientRect().top - headerOffset;

	window.scrollTo({ top: Math.max(0, top), behavior });

	const path = `${window.location.pathname}${window.location.search}`;
	const next = `${path}#${sectionId}`;
	const current = `${path}${window.location.hash}`;

	// Always update history so hashchange / spy stay in sync — even on same-hash re-click
	if (current !== next) {
		window.history.pushState(null, '', next);
	} else {
		window.history.replaceState(null, '', next);
	}

	window.dispatchEvent(new Event('hashchange'));
}
