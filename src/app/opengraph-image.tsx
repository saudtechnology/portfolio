import { ImageResponse } from 'next/og';

import { COLOR, SITE_MOTTO, SITE_WORDMARK } from '@/lib/site';

export const dynamic = 'force-static';
export const revalidate = false;

export const alt = `${SITE_WORDMARK} — ${SITE_MOTTO}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
	return new ImageResponse(
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				background: COLOR.plate,
				color: COLOR.snow,
				padding: 80,
				fontSize: 56,
			}}
		>
			<div style={{ fontSize: 22, letterSpacing: 8, color: COLOR.mute }}>{SITE_WORDMARK}</div>
			<div style={{ marginTop: 24, fontWeight: 600 }}>{SITE_MOTTO}</div>
		</div>,
		{ ...size }
	);
}
