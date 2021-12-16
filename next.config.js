module.exports = {};
// next.config.js
const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");
const config = withPurgeCss({
	purgeCssPaths: ["pages/**/*", "components/**/*"],
	purgeCss: {
		whitelist: () => ["player"],
		whitelistPatterns: () => [/Toastify/, /.*nprogress.*/],
		rejected: true,
	},
	purgeCssEnabled: ({ dev, isServer }) => true, // Enable PurgeCSS for all env
	async redirects() {
		return [
			{
				source: "/blog",
				destination: "/resources",
				permanent: true,
			},
		];
	},
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	ignoreDuringBuilds: true,
	images: {
		domains: [
			"d2ydtwisqcxv72.cloudfront.net",
			"d3jas8421cca9z.cloudfront.net",
			"copper.objects.frb.io",
			"objects.us1.frbit.com",
		],
	},
});
module.exports = config; // If NextJS >= 9.3
