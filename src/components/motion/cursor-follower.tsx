'use client';

import { JSX, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

/**
 * Neon follower ball — trails the native pointer with a short spring lag, then settles on it.
 * Native cursor stays visible. Desktop / fine pointer only.
 */
export function CursorFollower(): JSX.Element | null {
	const reduce = useReducedMotion();
	const [enabled, setEnabled] = useState(false);
	const [hovering, setHovering] = useState(false);
	const [visible, setVisible] = useState(false);

	const x = useMotionValue(-100);
	const y = useMotionValue(-100);
	const spring = { stiffness: 700, damping: 38, mass: 0.22 };
	const sx = useSpring(x, spring);
	const sy = useSpring(y, spring);

	useEffect(() => {
		if (reduce) return;

		const fineQuery = window.matchMedia('(pointer: fine)');
		const hoverQuery = window.matchMedia('(hover: hover)');

		const checkCapabilities = () => {
			const isEnabled = fineQuery.matches && hoverQuery.matches;
			setEnabled(isEnabled);
			return isEnabled;
		};

		if (!checkCapabilities()) return;

		const onMove = (e: MouseEvent) => {
			x.set(e.clientX);
			y.set(e.clientY);
			setVisible(true);
		};

		const onLeave = () => setVisible(false);

		const onOver = (e: MouseEvent) => {
			const t = e.target as HTMLElement | null;
			if (!t) return;
			const interactive = t.closest('a, button, [role="button"], input, textarea, select, label');
			setHovering(Boolean(interactive));
		};

		window.addEventListener('mousemove', onMove, { passive: true });
		window.addEventListener('mouseover', onOver, { passive: true });
		document.documentElement.addEventListener('mouseleave', onLeave);

		return () => {
			window.removeEventListener('mousemove', onMove);
			window.removeEventListener('mouseover', onOver);
			document.documentElement.removeEventListener('mouseleave', onLeave);
		};
	}, [reduce, x, y]);

	if (!enabled) return null;

	return (
		<motion.div
			aria-hidden
			className="pointer-events-none fixed top-0 left-0 z-9999 mix-blend-difference"
			style={{
				x: sx,
				y: sy,
				translateX: '-50%',
				translateY: '-50%',
			}}
		>
			<motion.div
				className="rounded-full bg-neon"
				animate={{
					width: hovering ? 48 : 12,
					height: hovering ? 48 : 12,
					opacity: visible ? 0.95 : 0,
				}}
				transition={{ type: 'spring', stiffness: 500, damping: 30 }}
			/>
		</motion.div>
	);
}

export default CursorFollower;
