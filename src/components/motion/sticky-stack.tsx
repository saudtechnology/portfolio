'use client';

import { JSX, ReactNode, Children, useEffect, useLayoutEffect, useRef, useState, useCallback, useId } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

type StickyStackProps = Readonly<{
	children: ReactNode;
	className?: string;
	/** Below this width (px), sticky stack is active. Above = normal grid via className. */
	singleColumnMax?: number;
	/** Sticky offset under fixed navbar (px). Default 80. */
	topOffset?: number;
	/**
	 * Vertical space between cards before they fully overlap (px).
	 * Default 28.
	 */
	gap?: number;
	/** Opaque shell + soft elevation. Default true. Set false for list-style sections. */
	withShell?: boolean;
	/**
	 * Horizontal inset from container edges in stack mode (px).
	 * Default 4.
	 */
	horizontalInset?: number;
}>;

type StickyStackItemProps = Readonly<{
	children: ReactNode;
	index: number;
	total: number;
	topOffset: number;
	reduce: boolean | null;
	gap: number;
	withShell: boolean;
	/** Uniform height applied to every card in the stack (px). */
	equalHeight: number | null;
	horizontalInset: number;
	measureRef: (el: HTMLDivElement | null) => void;
}>;

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
 * Sticky layer: sticks under the navbar; next card (higher z-index) slides over it.
 * While being covered, this card scales down slightly (Juno-style).
 * Shadow fades out as the card is covered — no stacked shadow buildup.
 */
function StickyStackItem({
	children,
	index,
	total,
	topOffset,
	reduce,
	gap,
	withShell,
	equalHeight,
	horizontalInset,
	measureRef,
}: StickyStackItemProps): JSX.Element {
	const ref = useRef<HTMLDivElement>(null);
	const isLast = index === total - 1;

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	const scale = useTransform(scrollYProgress, [0, 1], reduce || isLast ? [1, 1] : [1, 0.94]);
	const contentOpacity = useTransform(scrollYProgress, [0, 1], reduce || isLast ? [1, 1] : [1, 0.96]);

	// Shadow alpha: full at rest → 0 when fully covered. Last card keeps soft shadow.
	const shadowAlpha = useTransform(scrollYProgress, [0, 0.4, 1], reduce || isLast ? [0.2, 0.2, 0.2] : [0.2, 0.06, 0]);

	const boxShadow = useTransform(shadowAlpha, (a) =>
		withShell ? `0 10px 32px rgba(0,0,0,${Number(a).toFixed(3)})` : 'none'
	);

	// Extracted nested ternary operation into independent statement
	let motionStyle = undefined;
	if (reduce || isLast) {
		if (withShell) {
			motionStyle = { boxShadow };
		}
	} else {
		motionStyle = {
			scale,
			opacity: contentOpacity,
			boxShadow: withShell ? boxShadow : undefined,
		};
	}

	return (
		<div
			ref={ref}
			className="sticky w-full"
			style={{
				top: topOffset,
				zIndex: index + 1,
				marginBottom: isLast ? 0 : gap,
				paddingLeft: horizontalInset,
				paddingRight: horizontalInset,
			}}
		>
			<motion.div className="w-full origin-top will-change-transform" style={motionStyle}>
				<div
					ref={measureRef}
					className={
						withShell
							? 'relative w-full overflow-hidden rounded-2xl bg-background'
							: 'relative w-full overflow-hidden bg-background'
					}
					style={{
						height: equalHeight ?? undefined,
						minHeight: equalHeight ?? undefined,
						isolation: 'isolate',
					}}
				>
					<div className="flex h-full min-h-full flex-col *:flex-1 *:min-h-full">{children}</div>
				</div>
			</motion.div>
		</div>
	);
}

/**
 * Juno-style sticky overlapping cards (single-column only).
 */
export function StickyStack({
	children,
	className = '',
	singleColumnMax = 767,
	topOffset = 80,
	gap = 28,
	withShell = true,
	horizontalInset = 4,
}: StickyStackProps): JSX.Element {
	const single = useSingleColumn(singleColumnMax);
	const reduce = useReducedMotion();
	const items = Children.toArray(children).filter(Boolean);
	const baseId = useId();

	const measureEls = useRef<(HTMLDivElement | null)[]>([]);
	const [equalHeight, setEqualHeight] = useState<number | null>(null);
	const measuring = useRef(false);

	const setMeasureRef = useCallback(
		(index: number) => (el: HTMLDivElement | null) => {
			measureEls.current[index] = el;
		},
		[]
	);

	// React-recommended pattern for avoiding cascading renders in effects
	const [prevSingle, setPrevSingle] = useState(single);
	if (single !== prevSingle) {
		setPrevSingle(single);
		if (!single && equalHeight !== null) {
			setEqualHeight(null);
		}
	}

	useLayoutEffect(() => {
		if (!single) return;

		const measure = () => {
			if (measuring.current) return;
			measuring.current = true;

			const heights: number[] = [];
			for (const el of measureEls.current) {
				if (!el) continue;
				const prevH = el.style.height;
				const prevMin = el.style.minHeight;
				el.style.height = 'auto';
				el.style.minHeight = '0';
				heights.push(el.scrollHeight);
				el.style.height = prevH;
				el.style.minHeight = prevMin;
			}

			if (heights.length > 0) {
				const max = Math.ceil(Math.max(...heights));
				setEqualHeight((prev) => (prev === max ? prev : max));
			}

			measuring.current = false;
		};

		const raf = requestAnimationFrame(measure);
		const ro = new ResizeObserver(() => {
			requestAnimationFrame(measure);
		});
		measureEls.current.forEach((el) => {
			if (el) ro.observe(el);
		});
		window.addEventListener('resize', measure);

		return () => {
			cancelAnimationFrame(raf);
			ro.disconnect();
			window.removeEventListener('resize', measure);
		};
	}, [single, items.length]);

	if (!single) {
		return <div className={className}>{items}</div>;
	}

	return (
		<div className="relative flex flex-col">
			{items.map((child, index) => (
				<StickyStackItem
					key={`${baseId}-stack-item-${index}`}
					index={index}
					total={items.length}
					topOffset={topOffset}
					reduce={reduce}
					gap={gap}
					withShell={withShell}
					equalHeight={equalHeight}
					horizontalInset={horizontalInset}
					measureRef={setMeasureRef(index)}
				>
					{child}
				</StickyStackItem>
			))}
		</div>
	);
}

export default StickyStack;
