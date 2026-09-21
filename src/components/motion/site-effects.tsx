'use client';

import { JSX } from 'react';
import { CursorFollower } from '@/components/motion/cursor-follower';
import { ScrollEffects } from '@/components/motion/scroll-effects';

/**
 * Client-only global interaction layer (cursor + scroll polish).
 */
export function SiteEffects(): JSX.Element {
	return (
		<>
			<ScrollEffects />
			<CursorFollower />
		</>
	);
}

export default SiteEffects;
