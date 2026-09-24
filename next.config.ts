import type { NextConfig } from 'next';

// https://nextjs.org/docs/app/guides/static-exports
// GitHub Pages serves only static files. Image Optimization and `headers()`
// require a Next server and are disabled here.
const nextConfig: NextConfig = {
	output: 'export',
	trailingSlash: true,
	reactStrictMode: true,
	poweredByHeader: false,
	typedRoutes: true,
	productionBrowserSourceMaps: false,
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
