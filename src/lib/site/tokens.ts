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
	}`;
}

export default generateBrandCssTokens;
