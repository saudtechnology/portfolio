export const dynamic = 'force-static';
export const revalidate = false;
import { ImageResponse } from 'next/og';

export const alt = 'SAUD TECHNOLOGY — Think Big. Build Smart.';
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
				background: '#000000',
				color: '#FAFBFA',
				padding: '80px',
				fontSize: 56,
			}}
		>
			<div style={{ fontSize: 22, letterSpacing: 8, color: '#8AA08C' }}>SAUD TECHNOLOGY</div>
			<div style={{ marginTop: 24, fontWeight: 600 }}>Think Big. Build Smart.</div>
		</div>,
		{ ...size }
	);
}
