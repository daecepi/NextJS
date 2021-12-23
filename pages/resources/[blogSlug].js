import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

import NavigationBlog from "../../components/Navigation/NavigationBlog";
import Footer from "../../components/Footer/Footer";

import BlogPostBuilder from "../../components/Blog/BlogPostBuilder";
import BlogPostNewBuilder from "../../components/Blog/BlogPostNewBuilder";
import {
	getBlogCategoriesMenu,
	getBlogFormats,
	getEntryBySectionHandle,
	getEntryByType,
	getFeaturedPosts,
	getPathsBySection,
} from "../../lib/api";

const Post = ({
	entry,
	globals,
	featuredPosts,
	blogAd,
	menuCategory,
	blogFormats,
}) => {
	// const router = useRouter()
	// const { blogSlug } = router.query

	// Pushed the order of the information base on
	const defauiltAuthorValues = { photo: undefined, name: "", authorTitle: "" };
	const externalAuthor = entry?.useExternalAuthor?.length
		? {
				name: entry.externalAuthorName,
				authorTitle: entry.externalAuthorJobTitle,
				photo: entry.externalAuthorPhoto[0],
		  }
		: {};

	var authorInformation = {
		...defauiltAuthorValues,
		...externalAuthor,
		...(entry?.author || {}),
	};
	console.log("AUTHOR INFORMATION ", authorInformation);

	// JsonLD management
	const returnJsonLd = (entry, authorInformation) => {
		const titleToUse = entry?.title ? entry.title : "";
		return {
			"@context": "https://schema.org",
			"@type": "Article",
			mainEntityOfPage: {
				"@type": "WebPage",
				"@id": `${entry?.url || ""}`,
			},
			headline: `${
				entry?.seoTitle ? entry.seoTitle.slice(0, 110) : titleToUse
			}`,
			url: `${entry?.url || ""}`,
			description: `${
				entry?.seoDescription ? entry.seoDescription : titleToUse
			}`,
			image: {
				"@type": "ImageObject",
				url: `${
					(entry?.featuredImage?.length && entry.featuredImage[0]?.url) ||
					"/imgs/seo-images/generic-social-card_linkedin.png"
				}`,
				width: 1440,
				height: 752,
			},
			author: {
				"@type": "Person",
				name: `${authorInformation?.name || ""}`,
				jobTitle: `${authorInformation?.authorTitle || ""}`,
			},
			publisher: {
				"@type": "Organization",
				name: "Copper",
				logo: {
					"@type": "ImageObject",
					url: "https://copper.com",
					contentUrl: "/imgs/copper-logo-pink-il.svg",
				},
			},
			datePublished: `${""}`, //new Date(entry.postDate).toISOString()
			dateModified: `${""}`, // new Date(entry.dateUpdated).toISOString()
		};
	};

	console.log("props gotten ", entry, globals);
	const entryTypeSelector = (entry, authorInformation) => {
		if (entry?.typeHandle === "blogBuilder") {
			return (
				<BlogPostNewBuilder
					entry={entry}
					featuredPosts={featuredPosts}
					authorInformation={authorInformation}
					blogAd={blogAd}
				/>
			);
		}
		return (
			<BlogPostBuilder
				entry={entry}
				featuredPosts={featuredPosts}
				authorInformation={authorInformation}
			/>
		);
	};

	return (
		<div className="ltr resources blog-body flex">
			<Head>
				<title>Copper CRM</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://assets.sitescdn.net/answers/v1.5/answers.css"
				/>
			</Head>
			<NavigationBlog
				menuCategories={menuCategory || []}
				menuBlogFormats={blogFormats || []}
			></NavigationBlog>

			{/* Style fixes  */}
			<style jsx global>
				{`
					#content .c-blog-card.c-blog-card--large {
						position: relative;
						width: 100%;
						display: -webkit-box;
						display: -ms-flexbox;
						display: flex;
						-webkit-box-orient: vertical;
						-webkit-box-direction: normal;
						-ms-flex-direction: column;
						flex-direction: column;
						-webkit-box-flex: 1;
						-ms-flex-positive: 1;
						flex-grow: 1;
						margin-left: 0px;
					}
					.c-copper-chronicles__top__new.col-xl-6 {
						padding-left: 15px;
						padding-right: 15px;
					}
				`}
			</style>

			<main id="content" className="c-blog-content no-banner" role="main">
				<div className="c-blog-content__search">
					<div className="yext-searchbar-container blog-style">
						<div
							className="search-bar-menu-delimiter"
							data-cy="resources-search-bar-menu-delimiter-desktop"
						>
							<div className="search-bar-container-desktop"></div>
							<span className="search-free-close"></span>
						</div>
						<span
							className="search-free-open white-search-start"
							style={{ position: "relative", right: "0px" }}
							data-cy="resources-search-free-open-desktop"
						></span>
						<Link href="/signup">
							<a
								className="c-button sendUTMsToAmplitude blogCTA"
								target="_blank"
								style={{ marginLeft: "17px", marginRight: "15px" }}
							>
								Try free
							</a>
						</Link>
					</div>
				</div>
				<progress max="0" value="0"></progress>
				<div className="c-blog-content__main container c-blog-content__main--blog-entry">
					<div>{entryTypeSelector(entry, authorInformation)}</div>

					{/* Common ending for blog posts of each entry type */}
				</div>

				<Script
					src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
					strategy="Lazyload"
					onLoad={() => {
						//  Make links in blog entry open in new tab by default
						$('.c-resource-content__container a[href^="http"]').attr(
							"target",
							"_blank"
						);
						// {# Remove height field added by default by redactor #}
						$(".c-resource-content__container  img")
							.removeAttr("height")
							.removeAttr("width");
					}}
				></Script>
				<Footer></Footer>
			</main>
		</div>
	);
};

export default Post;

export async function getStaticProps(context) {
	const entry = await getEntryBySectionHandle("blog", context.params.blogSlug);
	const featuredPosts = await getFeaturedPosts(entry.id || 0);
	const blogAd = await getEntryBySectionHandle("blogIndex", "resources");

	// Menu related queries
	const menuCategory = (await getBlogCategoriesMenu()) || [];
	const blogFormats = (await getBlogFormats()) || [];
	// console.log("Featured posts gotten ", featuredPosts);
	return {
		props: {
			entry: entry?.entry || {},
			globals: entry?.globalSets || [],
			featuredPosts: featuredPosts || [],
			blogAd,

			// Menu related fetches
			menuCategory: menuCategory || [],
			blogFormats: blogFormats || [],
		}, // will be passed to the page component as props
		revalidate: 120, // in seconds
	};
}

export async function getStaticPaths() {
	const blogPosts = await getPathsBySection("blog");

	const paths = blogPosts.map((blogPost) => ({
		params: { blogSlug: blogPost.slug },
	}));

	return {
		paths,
		fallback: true,
	};
}
