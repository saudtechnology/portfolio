'use client';

import { JSX, ReactNode } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

type StaggerProps = Readonly<{
	children: ReactNode;
	className?: string;
	stagger?: number;
	delayChildren?: number;
}>;

/**
 * Container that staggers children entrance animations.
 * Ideal for grids, lists and sequential reveals.
 */
export function Stagger({ children, className, stagger = 0.08, delayChildren = 0.1 }: StaggerProps): JSX.Element {
	const shouldReduceMotion = useReducedMotion();

	const container: Variants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: shouldReduceMotion ? 0 : stagger,
				delayChildren: shouldReduceMotion ? 0 : delayChildren,
			},
		},
	};

	return (
		<motion.div
			className={className}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: '-60px' }}
			variants={container}
		>
			{children}
		</motion.div>
	);
}

type StaggerItemProps = Readonly<{
	children: ReactNode;
	className?: string;
}>;

export function StaggerItem({ children, className }: StaggerItemProps): JSX.Element {
	const shouldReduceMotion = useReducedMotion();

	const item: Variants = {
		hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] },
		},
	};

	return (
		<motion.div className={className} variants={item}>
			{children}
		</motion.div>
	);
}

export default Stagger;
