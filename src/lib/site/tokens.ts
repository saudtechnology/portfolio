/** Official SAUD TECHNOLOGY palette. Neon is accent only — never a fill. */

export const COLOR = {
	neon: '#10F300',
	forest: '#071B08',
	void: '#000000',
	pine: '#021500',
	plate: '#061308',
	snow: '#FAFBFA',
	mute: '#8AA08C',
	muteOnLight: '#4D6352',
} as const;

export const THEME_COLOR = {
	dark: COLOR.plate,
	light: COLOR.snow,
} as const;

export function brandCssCustomProperties(): string {
	return `:root{
		--void:${COLOR.void};
		--pine:${COLOR.pine};
		--plate:${COLOR.plate};
		--forest:${COLOR.forest};
		--snow:${COLOR.snow};
		--mute:${COLOR.mute};
		--mute-on-light:${COLOR.muteOnLight};
		--neon:${COLOR.neon};
	}`;
}
