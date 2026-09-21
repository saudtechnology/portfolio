'use client';

import { JSX, ReactNode } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

type FadeInProps = Readonly<{
	children: ReactNode;
	className?: string;
	delay?: number;
	direction?: 'up' | 'down' | 'left' | 'right' | 'none';
	duration?: number;
	once?: boolean;
}>;

const directionOffset = {
	up: { y: 48 },
	down: { y: -48 },
	left: { x: 24 },
	right: { x: -24 },
	none: {},
} as const;

/**
 * Reusable fade + slide entrance animation.
 * Respects prefers-reduced-motion and is optimized for scroll-triggered sections.
 */
export function FadeIn({
	children,
	className,
	delay = 0,
	direction = 'up',
	duration = 0.75,
	once = true,
}: FadeInProps): JSX.Element {
	const shouldReduceMotion = useReducedMotion();

	const variants: Variants = {
		hidden: {
			opacity: 0,
			...(shouldReduceMotion ? {} : directionOffset[direction]),
		},
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: {
				duration: shouldReduceMotion ? 0 : duration,
				delay: shouldReduceMotion ? 0 : delay,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};

	return (
		<motion.div
			className={className}
			initial="hidden"
			whileInView="visible"
			viewport={{ once, margin: '-12% 0px -8% 0px', amount: 0.15 }}
			variants={variants}
		>
			{children}
		</motion.div>
	);
}

export default FadeIn;
