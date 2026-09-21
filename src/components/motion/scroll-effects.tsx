'use client';

import { JSX, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Juno-like scroll polish:
 * - smooth native scrolling
 * - data-scroll-direction on <html> for CSS hooks
 * - slight momentum feel via CSS (globals)
 */
export function ScrollEffects(): JSX.Element | null {
	const reduce = useReducedMotion();

	useEffect(() => {
		if (reduce) return;

		document.documentElement.classList.add('scroll-smooth-enhanced');

		let lastY = window.scrollY;
		let ticking = false;

		const onScroll = () => {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(() => {
				const y = window.scrollY;

				// Extracted nested ternary into independent statements
				let dir: 'down' | 'up' | null = null;
				if (y > lastY + 2) {
					dir = 'down';
				} else if (y < lastY - 2) {
					dir = 'up';
				}

				if (dir) {
					document.documentElement.dataset.scrollDirection = dir;
				}
				document.documentElement.dataset.scrolled = y > 24 ? 'true' : 'false';
				lastY = y;
				ticking = false;
			});
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();

		return () => {
			window.removeEventListener('scroll', onScroll);
			document.documentElement.classList.remove('scroll-smooth-enhanced');
			delete document.documentElement.dataset.scrollDirection;
			delete document.documentElement.dataset.scrolled;
		};
	}, [reduce]);

	return null;
}

export default ScrollEffects;
