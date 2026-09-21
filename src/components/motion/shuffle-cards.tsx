'use client';

import { JSX, ReactNode, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type ShuffleCardProps = Readonly<{
	children: ReactNode;
	className?: string;
	index?: number;
	/**
	 * Apply shuffle only when viewport is at most this width (px).
	 * Default 1023 — covers all single-column card stacks (until lg multi-col).
	 */
	singleColumnMax?: number;
}>;

/**
 * True when the viewport is a single-column card layout.
 * Starts as `true` (mobile-first) so the first whileInView pass already uses the deck pose —
 * avoiding the hydration bug where animation ran without rotation.
 */
function useSingleColumn(maxWidth: number): boolean {
	const [single, setSingle] = useState(true);

	useEffect(() => {
		const mq = window.matchMedia(`(max-width: ${maxWidth}px)`);
		const apply = () => setSingle(mq.matches);
		apply();
		mq.addEventListener('change', apply);
		return () => mq.removeEventListener('change', apply);
	}, [maxWidth]);

	return single;
}

/**
 * Juno-like “card shuffle / deck” entrance for single-column layouts.
 * Cards arrive tilted and stacked, then settle flat into the list.
 */
export function ShuffleCard({ children, className, index = 0, singleColumnMax = 1023 }: ShuffleCardProps): JSX.Element {
	const reduce = useReducedMotion();
	const single = useSingleColumn(singleColumnMax);

	// Alternating fan angles + slight depth, like a shuffled deck
	const tilt = index % 2 === 0 ? -10 : 10;
	const xOff = index % 2 === 0 ? -12 : 12;
	const yStack = 40 + (index % 4) * 8;

	if (reduce || !single) {
		return (
			<motion.div
				className={className}
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: '-10% 0px', amount: 0.15 }}
				transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.25), ease: [0.22, 1, 0.36, 1] }}
			>
				{children}
			</motion.div>
		);
	}

	return (
		<motion.div
			className={className}
			initial={{
				opacity: 0,
				y: yStack,
				x: xOff,
				rotate: tilt,
				scale: 0.9,
			}}
			whileInView={{
				opacity: 1,
				y: 0,
				x: 0,
				rotate: 0,
				scale: 1,
			}}
			viewport={{ once: true, margin: '-5% 0px -5% 0px', amount: 0.12 }}
			transition={{
				type: 'spring',
				stiffness: 120,
				damping: 18,
				mass: 0.85,
				delay: Math.min(index * 0.09, 0.4),
			}}
			style={{ transformOrigin: '50% 80%', willChange: 'transform, opacity' }}
		>
			{children}
		</motion.div>
	);
}

export default ShuffleCard;
