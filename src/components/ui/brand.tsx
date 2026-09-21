import { JSX } from 'react';
import Image from 'next/image';

type BrandLogotypeProps = Readonly<{
	className?: string;
	/** Accessible label for the mark */
	label?: string;
}>;

/**
 * Neon “A” logotype mark — used beside SAUD TECHNOLOGY in chrome.
 */
export function BrandLogotype({ className = 'h-15 w-15', label = 'SAUD TECHNOLOGY' }: BrandLogotypeProps): JSX.Element {
	return (
		<Image
			src="/logotype.svg"
			alt={label}
			aria-hidden
			width={60}
			height={60}
			priority
			className={`block shrink-0 object-contain ${className}`}
		/>
	);
}

type BrandWordmarkProps = Readonly<{
	className?: string;
	/** Visible accessible name (screen readers) */
	title?: string;
}>;

/**
 * Full SAUD wordmark (hero / large identity moments).
 * SVG is vector — scales cleanly; height drives size, width auto.
 */
export function BrandWordmark({
	className = 'h-12 w-auto sm:h-14 md:h-16 lg:h-20',
	title = 'Thiago Saud',
}: BrandWordmarkProps): JSX.Element {
	return (
		<span className="inline-flex max-w-full items-center">
			<span className="sr-only">{title}</span>

			<Image
				src="/wordmark.svg"
				alt=""
				aria-hidden
				width={1058}
				height={128}
				priority
				fetchPriority="high"
				className={`block max-w-full object-contain object-left ${className}`}
			/>
		</span>
	);
}

export default BrandWordmark;
