'use client';

import { JSX, ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

type HeroParallaxProps = Readonly<{
	children: ReactNode;
	className?: string;
}>;

/**
 * Hero background media with layered motion:
 * - Scroll parallax (scale + drift + fade) — Juno-style
 * - Continuous Ken Burns breathing (subtle tech feel)
 * - Animated tech grid + neon ambient glow overlays
 * - Soft entrance reveal on load
 */
export function HeroParallaxMedia({ children, className = '' }: HeroParallaxProps): JSX.Element {
	const ref = useRef<HTMLDivElement>(null);
	const reduce = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 1.2]);
	const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['0%', '20%']);
	const opacity = useTransform(scrollYProgress, [0, 0.85, 1], reduce ? [1, 1, 1] : [1, 0.82, 0.5]);

	return (
		<div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
			{/* Scroll-driven layer */}
			<motion.div className="absolute inset-0 will-change-transform" style={{ scale, y, opacity }}>
				{/* Continuous Ken Burns / breath */}
				<motion.div
					className="absolute inset-0 will-change-transform"
					initial={reduce ? false : { scale: 1.06, opacity: 0 }}
					animate={
						reduce
							? { scale: 1, opacity: 1 }
							: {
									scale: [1.04, 1.1, 1.04],
									opacity: 1,
								}
					}
					transition={
						reduce
							? { duration: 0.6 }
							: {
									scale: {
										duration: 22,
										repeat: Infinity,
										ease: 'easeInOut',
										repeatType: 'mirror',
									},
									opacity: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
								}
					}
				>
					{children}
				</motion.div>
			</motion.div>

			{/* Tech grid overlay — slow drift */}
			{!reduce ? (
				<motion.div
					aria-hidden
					className="pointer-events-none absolute inset-0 z-1 mix-blend-overlay"
					style={{
						backgroundImage:
							'linear-gradient(rgba(var(--neon-rgb), 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--neon-rgb), 0.06) 1px, transparent 1px)',
						backgroundSize: '48px 48px',
						maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)',
						WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)',
					}}
					animate={{ backgroundPosition: ['0px 0px', '48px 48px'] }}
					transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
				/>
			) : null}

			{/* Soft neon ambient pulse */}
			{!reduce ? (
				<motion.div
					aria-hidden
					className="pointer-events-none absolute inset-0 z-1"
					style={{
						background: 'radial-gradient(ellipse 55% 45% at 70% 35%, rgba(var(--neon-rgb), 0.14), transparent 60%)',
					}}
					animate={{ opacity: [0.35, 0.7, 0.35] }}
					transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
				/>
			) : null}

			{/* Scan-line sweep (very subtle) */}
			{!reduce ? (
				<motion.div
					aria-hidden
					className="pointer-events-none absolute inset-x-0 z-2 h-[18%] opacity-[0.12]"
					style={{
						background: 'linear-gradient(to bottom, transparent, rgba(var(--neon-rgb), 0.35), transparent)',
					}}
					animate={{ top: ['-20%', '120%'] }}
					transition={{ duration: 9, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
				/>
			) : null}
		</div>
	);
}

export default HeroParallaxMedia;
