'use client';

import { JSX, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Particle = Readonly<{
	id: number;
	left: string;
	top: string;
	size: number;
	delay: number;
	duration: number;
	driftX: number;
	driftY: number;
	opacity: number;
}>;

/**
 * Soft neon light particles over the hero portrait.
 * Drift + pulse only — no trails, no noise; reads as professional tech ambient light.
 */
export function HeroParticles(): JSX.Element | null {
	const reduce = useReducedMotion();

	const particles = useMemo<Particle[]>(() => {
		// Deterministic layout so SSR/CSR match (no Math.random on render)
		const seeds = [
			[12, 18, 3, 0.2, 11, 14, -18, 0.55],
			[28, 22, 2, 1.1, 14, -10, 22, 0.4],
			[48, 14, 4, 0.6, 16, 18, -12, 0.5],
			[62, 28, 2.5, 1.8, 12, -16, 14, 0.45],
			[78, 16, 3.5, 0.4, 15, 12, 20, 0.6],
			[88, 32, 2, 2.2, 13, -8, -16, 0.35],
			[18, 42, 2.5, 0.9, 17, 20, 10, 0.4],
			[36, 38, 3, 1.4, 12, -14, -20, 0.5],
			[54, 48, 2, 0.3, 18, 10, 16, 0.35],
			[70, 44, 4, 1.6, 14, -18, 8, 0.55],
			[84, 52, 2.5, 0.7, 11, 14, -14, 0.4],
			[22, 58, 3, 2.0, 15, -12, 18, 0.45],
			[42, 62, 2, 1.0, 13, 16, -10, 0.35],
			[58, 68, 3.5, 0.5, 16, -10, 12, 0.5],
			[74, 72, 2, 1.9, 12, 8, -18, 0.3],
			[90, 64, 3, 1.2, 14, -20, 10, 0.45],
			[8, 34, 2.5, 2.4, 18, 12, 14, 0.35],
			[32, 78, 2, 0.8, 13, -14, -12, 0.4],
			[66, 82, 3, 1.5, 15, 10, 16, 0.35],
			[46, 26, 2.5, 2.6, 11, -8, 20, 0.5],
		] as const;

		return seeds.map((s, i) => ({
			id: i,
			left: `${s[0]}%`,
			top: `${s[1]}%`,
			size: s[2],
			delay: s[3],
			duration: s[4],
			driftX: s[5],
			driftY: s[6],
			opacity: s[7],
		}));
	}, []);

	if (reduce) return null;

	return (
		<div className="pointer-events-none absolute inset-0 z-2 overflow-hidden" aria-hidden>
			{particles.map((p) => (
				<motion.span
					key={`particle-${p.id}`}
					className="absolute rounded-full bg-neon"
					style={{
						left: p.left,
						top: p.top,
						width: p.size,
						height: p.size,
						boxShadow: `0 0 ${p.size * 4}px rgba(var(--neon-rgb), 0.55), 0 0 ${p.size * 8}px rgba(var(--neon-rgb), 0.25)`,
					}}
					initial={{ opacity: 0, x: 0, y: 0, scale: 0.6 }}
					animate={{
						opacity: [0, p.opacity, p.opacity * 0.55, p.opacity, 0],
						x: [0, p.driftX, p.driftX * 0.4, 0],
						y: [0, p.driftY, p.driftY * 0.5, 0],
						scale: [0.7, 1.15, 0.95, 1.05, 0.7],
					}}
					transition={{
						duration: p.duration,
						delay: p.delay,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				/>
			))}

			{/* Larger soft light orbs — echo portrait highlights */}
			{[
				{ left: '68%', top: '22%', size: 120, delay: 0 },
				{ left: '22%', top: '48%', size: 90, delay: 1.2 },
				{ left: '78%', top: '58%', size: 100, delay: 2.4 },
			].map((orb) => (
				<motion.span
					key={`orb-${orb.left}-${orb.top}`}
					className="absolute rounded-full"
					style={{
						left: orb.left,
						top: orb.top,
						width: orb.size,
						height: orb.size,
						background:
							'radial-gradient(circle, rgba(var(--neon-rgb), 0.16) 0%, rgba(var(--neon-rgb), 0.04) 40%, transparent 70%)',
						transform: 'translate(-50%, -50%)',
					}}
					animate={{ opacity: [0.25, 0.55, 0.25], scale: [0.92, 1.08, 0.92] }}
					transition={{
						duration: 7 + (orb.delay > 1 ? 1 : 0),
						delay: orb.delay,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				/>
			))}
		</div>
	);
}

export default HeroParticles;
