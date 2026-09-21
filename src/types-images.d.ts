declare module '*.jpg' {
	const src: string | { src: string; height: number; width: number; blurDataURL?: string };
	export default src;
}

declare module '*.jpeg' {
	const src: string | { src: string; height: number; width: number; blurDataURL?: string };
	export default src;
}

declare module '*.png' {
	const src: string | { src: string; height: number; width: number; blurDataURL?: string };
	export default src;
}

declare module '*.webp' {
	const src: string | { src: string; height: number; width: number; blurDataURL?: string };
	export default src;
}
