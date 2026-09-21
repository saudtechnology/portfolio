'use client';

import { JSX, useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

type CountUpProps = Readonly<{
	value: string;
	className?: string;
}>;

/**
 * Safely parses string using linear index scanning instead of RegExp to prevent ReDoS.
 */
function parseCountValue(value: string) {
	let firstDigitIndex = -1;
	let lastDigitIndex = -1;

	// Scan string linearly to find the numeric block boundaries
	for (let i = 0; i < value.length; i++) {
		const char = value[i];
		const isDigit = char >= '0' && char <= '9';

		if (isDigit) {
			if (firstDigitIndex === -1) {
				firstDigitIndex = i;
			}
			lastDigitIndex = i;
		} else if (firstDigitIndex !== -1 && (char === '.' || char === ',')) {
			// Allow decimal separators inside the number block
			lastDigitIndex = i;
		} else if (firstDigitIndex !== -1) {
			// Stop scanning once we hit non-digit/non-separator after numbers started
			break;
		}
	}

	if (firstDigitIndex === -1) return null;

	const prefix = value.slice(0, firstDigitIndex);
	const numStr = value.slice(firstDigitIndex, lastDigitIndex + 1);
	const suffix = value.slice(lastDigitIndex + 1);

	const normalized = numStr.replace(',', '.');
	const target = Number.parseFloat(normalized);

	if (Number.isNaN(target)) return null;

	const hasComma = numStr.includes(',');
	const hasDot = numStr.includes('.');
	const isDecimal = hasComma || hasDot;

	let decimals = 0;
	if (hasDot) {
		decimals = numStr.split('.')[1]?.length ?? 1;
	} else if (hasComma) {
		decimals = numStr.split(',')[1]?.length ?? 1;
	}

	return { prefix, target, isDecimal, decimals, suffix, useComma: hasComma };
}

/**
 * Animates numeric portion of stats like "7+", "10+", "R$1.6T+", "4.8M+".
 * Non-numeric prefixes/suffixes are preserved.
 */
export function CountUp({ value, className }: CountUpProps): JSX.Element {
	const ref = useRef<HTMLSpanElement>(null);
	const inView = useInView(ref, { once: true, margin: '-40px' });
	const reduce = useReducedMotion();

	// Initialize display state directly without redundant conditionals
	const [display, setDisplay] = useState(value);

	useEffect(() => {
		if (!inView || reduce) return;

		const parsed = parseCountValue(value);
		if (!parsed) return;

		const { prefix, target, isDecimal, decimals, suffix, useComma } = parsed;
		const duration = 1400;
		const start = performance.now();

		let frame = 0;
		const tick = (now: number) => {
			const t = Math.min(1, (now - start) / duration);
			// ease-out cubic
			const eased = 1 - Math.pow(1 - t, 3);
			const current = target * eased;

			let formatted = String(Math.round(current));
			if (isDecimal) {
				const fixed = current.toFixed(decimals);
				formatted = useComma ? fixed.replace('.', ',') : fixed;
			}

			setDisplay(`${prefix}${formatted}${suffix}`);

			if (t < 1) {
				frame = requestAnimationFrame(tick);
			} else {
				setDisplay(value);
			}
		};

		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [inView, reduce, value]);

	return (
		<span ref={ref} className={className}>
			{display}
		</span>
	);
}

export default CountUp;
