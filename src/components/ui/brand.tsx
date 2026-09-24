import { JSX } from 'react';
import Image from 'next/image';

type BrandLogotypeProps = Readonly<{
	className?: string;
	label?: string;
}>;

export function BrandLogotype({ className = 'h-15 w-15', label = 'SAUD TECHNOLOGY' }: BrandLogotypeProps): JSX.Element {
	return (
		<Image
			src="/images/logotype.svg"
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
	title?: string;
}>;

/**
 * Inlined wordmark SVG — eliminates network round-trip for the LCP element (mobile LCP was this asset).
 */
export function BrandWordmark({
	className = 'h-12 w-auto sm:h-14 md:h-16 lg:h-20',
	title = 'Thiago Saud',
}: BrandWordmarkProps): JSX.Element {
	return (
		<span className="inline-flex max-w-full items-center">
			<span className="sr-only">{title}</span>
			<Image
				src="/images/wordmark.svg" // Certifique-se de salvar o arquivo nessa rota em public/images/
				alt={title}
				aria-hidden
				width={1058} // Proporção exata do seu SVG original
				height={128} // Proporção exata do seu SVG original
				priority // Força o preload imediato para proteger o LCP
				className={`block max-w-full object-contain ${className}`}
			/>
		</span>
	);
}

export default BrandWordmark;
