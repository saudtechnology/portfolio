/**
 * Official SAUD TECHNOLOGY design system color palette token system.
 * Architecture Note: Neon is strictly used as an accent signal modifier — never as a primary background fill.
 */
export const BRAND_COLORS = {
	neon: '#10F300',
	forest: '#071B08',
	void: '#000000',
	pine: '#021500',
	plate: '#061308',
	snow: '#FAFBFA',
	mute: '#8AA08C',
	muteOnLight: '#4D6352',
} as const;

/** RGB channels for alpha compositing via `rgba(var(--neon-rgb), a)`. */
export const BRAND_COLOR_RGB = {
	neon: '16, 243, 0',
	void: '0, 0, 0',
	pine: '2, 21, 0',
	plate: '6, 19, 8',
	forest: '7, 27, 8',
	snow: '250, 251, 250',
	mute: '138, 160, 140',
} as const;

/**
 * Secondary theme semantic definitions mapping dark and light canvas baseline colors.
 * Readily accessible to feed Next.js layout metadata configurations (e.g., HTML theme-color parameters).
 */
export const BRAND_THEME_COLORS = {
	dark: BRAND_COLORS.plate,
	light: BRAND_COLORS.snow,
} as const;

/**
 * Structural compiler that outputs inject-ready custom CSS raw variable structures.
 * Binds design token hex definitions dynamically into global CSS custom properties at the document root level.
 *
 * @returns A strictly formatted native CSS root pseudo-class string wrapper.
 */
export function generateBrandCssTokens(): string {
	return `:root {
		--void: ${BRAND_COLORS.void};
		--pine: ${BRAND_COLORS.pine};
		--plate: ${BRAND_COLORS.plate};
		--forest: ${BRAND_COLORS.forest};
		--snow: ${BRAND_COLORS.snow};
		--mute: ${BRAND_COLORS.mute};
		--mute-on-light: ${BRAND_COLORS.muteOnLight};
		--neon: ${BRAND_COLORS.neon};
		--void-rgb: ${BRAND_COLOR_RGB.void};
		--pine-rgb: ${BRAND_COLOR_RGB.pine};
		--plate-rgb: ${BRAND_COLOR_RGB.plate};
		--forest-rgb: ${BRAND_COLOR_RGB.forest};
		--snow-rgb: ${BRAND_COLOR_RGB.snow};
		--mute-rgb: ${BRAND_COLOR_RGB.mute};
		--neon-rgb: ${BRAND_COLOR_RGB.neon};
	}`;
}

export default generateBrandCssTokens;
