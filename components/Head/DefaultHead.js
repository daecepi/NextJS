import Head from "next/head";

import Script from "next/script";

import { useRouter } from "next/router";

const DefaultHead = ({ entry, globals }) => {
	const { pathname } = useRouter();

	const ogImagesDefinition = (entry) => {
		if (entry.featuredImage?.length) {
			const imageToUse = entry.featuredImage[0];
			return (
				<>
					<meta property="og:image" content={`https:${imageToUse.url}`} />
					<meta
						property="og:image:secure_url"
						content={`https:${imageToUse.url}`}
					/>
				</>
			);
		} else if (entry.seoImage?.length) {
			const imageToUse = entry.seoImage[0];
			return (
				<>
					<meta property="og:image" content={`https:${imageToUse.url}`} />
					<meta
						property="og:image:secure_url"
						content={`https:${imageToUse.url}`}
					/>
				</>
			);
		} else if (entry.twitterimage?.length) {
			const imageToUse = entry.twitterimage[0];
			return (
				<>
					<meta property="og:image" content={`https:${imageToUse.url}`} />
					<meta
						property="og:image:secure_url"
						content={`https:${imageToUse.url}`}
					/>
				</>
			);
		} else {
			return (
				<>
					<meta
						property="og:image"
						content="https://copper.com/imgs/seo-images/generic-social-card_linkedin.png "
					/>
					<meta property="og:image:width" content="72" />
					<meta property="og:image:height" content="72" />

					<meta
						property="twitter:image"
						content="https://copper.com/imgs/seo-images/generic-social-card_twitter.png "
					/>
				</>
			);
		}
	};

	return (
		<>
			<Script
				id="GA-tag"
				className="sl_swap"
				onLoad={() => {
					(function (i, s, o, g, r, a, m) {
						i["GoogleAnalyticsObject"] = r;
						(i[r] =
							i[r] ||
							function () {
								(i[r].q = i[r].q || []).push(arguments);
							}),
							(i[r].l = 1 * new Date());
						(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
						a.async = 1;
						a.src = g;
						m.parentNode.insertBefore(a, m);
					})(
						window,
						document,
						"script",
						"https://www.google-analytics.com/analytics.js",
						"ga"
					);
					ga("create", "UA-47255589-1", "auto", { allowLinker: true });
					ga("require", "linker");
					if (window.location.pathname !== "/pricing") {
						ga("linker:autoLink", ["prosperworks.com", "copper.com"]);
					}
					ga("require", "GTM-WKXHCQN"); // NOTE: this GMT line is only for copper.com, not the web app!
					ga("send", "pageview");
				}}
			></Script>

			<Script
				onLoad={() => {
					(function (w, d, s, l, i) {
						w[l] = w[l] || [];
						w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
						var f = d.getElementsByTagName(s)[0],
							j = d.createElement(s),
							dl = l != "dataLayer" ? "&l=" + l : "";
						j.async = true;
						j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
						f.parentNode.insertBefore(j, f);
					})(window, document, "script", "dataLayer", "GTM-MN98DR");
				}}
			></Script>
			<Head>
				<meta
					name="google-site-verification"
					content="4ofGzg8wkRPD-kmPUfOZltcXv-3wVYWXdYBFjsOu41Q"
				/>

				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta charset="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
				/>
				<meta name="referrer" content="origin-when-cross-origin" />

				{/* Twitter & Graph Meta Tags */}
				<meta name="twitter:site" content="@copperInc" />
				<meta property="og:site_name" content="Copper" />
				<meta property="og:url" content={pathname} />
				{pathname.indexOf("/blog") ? (
					<>
						<meta property="og:locale" content="en_US" />
						<meta property="og:type" content="article" />
						<meta
							property="article:publisher"
							content="https://www.facebook.com/CopperInc/"
						/>
						<meta name="twitter:card" content="summary_large_image" />
						{entry.blogCategories?.length ? (
							<meta
								property="article:section"
								content={
									entry.blogCategories[entry.blogCategories.length - 1].title
								}
							/>
						) : (
							""
						)}

						<meta
							property="article:published_time"
							content={
								entry.postDate ? new Date(entry.postDate).toISOString() : ""
							}
						/>

						{entry.twittercreator?.length ? (
							<meta name="twitter:creator" content={entry.twittercreator} />
						) : (
							""
						)}
						{entry.featuredImage?.length ? (
							<meta
								name="twitter:image"
								content={`https:${entry.featuredImage[0].url}`}
							/>
						) : (
							""
						)}
					</>
				) : (
					<>
						<meta content="summary" property="twitter:card" />
						{entry.twitterimage?.length ? (
							<>
								{entry.slug?.includes("project-management-crm") ? (
									<>
										<meta
											name="twitter:image"
											content="https:{{ twitterImg.url }}"
										/>
										<meta
											name="image"
											property="og:image"
											content="https:{{ twitterImg.url }}"
										/>
										<meta
											property="og:image:secure_url"
											content="https:{{ twitterImg.url }}"
										/>
									</>
								) : (
									""
								)}
								<meta
									name="twitter:image"
									content="https:{{ twitterImg.url }}"
								/>
							</>
						) : (
							""
						)}
					</>
				)}

				{/* SEO Meta Tags */}
				{entry.seoTitle?.length ? (
					<>
						<title>{entry.seoTitle}</title>
						<meta name="twitter:title" content={entry.title} />
					</>
				) : (
					<>
						<title>{entry.title} | Copper</title>
						<meta name="twitter:title" content={entry.title} />
					</>
				)}
				{entry.seoDescription?.length ? (
					<>
						<meta name="description" content={entry.seoDescription} />
						<meta name="twitter:description" content={entry.seoDescription} />
					</>
				) : (
					""
				)}
				{ogImagesDefinition(entry)}

				{process.env.NEXT_PUBLIC_ENVIRONMENT == "staging" ? (
					<meta content="noindex,nofollow" name="robots" />
				) : (
					""
				)}
				{!entry.index ? <meta content="noindex,nofollow" name="robots" /> : ""}
				{entry.canonical?.length ? (
					<link rel="canonical" href={entry.canonical} />
				) : (
					<link rel="canonical" href={pathname} />
				)}
				{/* End SEO Meta Tags */}
				<link
					rel="icon"
					type="image/png"
					href="/favicon-32x32.png"
					sizes="32x32"
				/>
				<link
					rel="icon"
					type="image/png"
					href="/favicon-16x16.png"
					sizes="16x16"
				/>
			</Head>

			{pathname !== "/" ? (
				<>
					<Script src="//app-sj17.marketo.com/js/forms2/js/forms2.min.js"></Script>
					<Script
						src="https://marketo.clearbit.com/assets/v1/marketo/forms.js"
						data-clearbit-publishable-key="pk_297de2bd498f18ecd1cabfdd7ad4fea9"
					></Script>
				</>
			) : (
				""
			)}

			<Script strategy="beforeInteractive" src="/js/lazyload.min.js" />
			{pathname !== "/library" ? (
				<>
					<Script
						strategy="lazyload"
						src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
					/>
					<Script strategy="lazyload" src="/js/vendor/js-cookie.js" />
					<Script
						strategy="lazyload"
						src="/js/functions.min.{{ staticAssetsVersion }}.js"
					/>
					<Script
						strategy="lazyload"
						src="/js/app.min.{{ staticAssetsVersion }}.js"
					/>
				</>
			) : (
				""
			)}
			<Script
				onLoad={() => {
					console.log(
						"CHECK",
						process.env.NEXT_PUBLIC_ENVIRONMENT,
						process.env.NEXT_PUBLIC_ENVIRONMENT !== "dev"
					);
				}}
			/>
			{process.env.NEXT_PUBLIC_ENVIRONMENT !== "dev" ? (
				<>
					{/* OneTrust Cookies Consent Notice start for copper.com */}
					<Script
						src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
						type="text/javascript"
						charset="UTF-8"
						data-domain-script="1e64248c-522b-4c85-a017-174502aeabdf"
						onLoad={() => {
							console.log(
								"Extra",
								process.env.NEXT_PUBLIC_ENVIRONMENT,
								process.env.NEXT_PUBLIC_ENVIRONMENT !== "dev"
							);
						}}
					></Script>
					<Script
						type="text/javascript"
						onLoad={() => {
							function OptanonWrapper() {}
						}}
					></Script>
					{/* OneTrust Cookies Consent Notice end for copper.com */}
					<Script
						type="text/plain"
						className="optanon-category-C0005"
						onLoad={() => {
							document.cookie = "Social Media Cookies - Social Media Cookie 1";
						}}
					></Script>
					<Script
						type="text/plain"
						className="optanon-category-C0004"
						onLoad={() => {
							document.cookie = "Targeting Cookie - Targeting Cookie 1";
						}}
					></Script>
					<Script
						type="text/plain"
						className="optanon-category-C0003"
						onLoad={() => {
							document.cookie = "Functional Cookie - Functional Cookie 1";
						}}
					></Script>
					<Script
						type="text/plain"
						className="optanon-category-C0002"
						onLoad={() => {
							document.cookie = "Performance Cookie - Performance Cookie 1";
						}}
					></Script>
				</>
			) : (
				""
			)}
		</>
	);
};

export default DefaultHead;
