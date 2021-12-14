import Script from "next//script";
import CtaGroup from "../Blocks/Simples/CtaGroup";
import BlogBuildersFeaturedImage from "./BlogBuildersFeaturedImage";
import BlogFinalPlea from "./BlogFinalPlea";
import AdA from "./BlogPostNewBuilderComponents/AdA";
import AdB from "./BlogPostNewBuilderComponents/AdB";
import Callout from "./BlogPostNewBuilderComponents/Callout";
import Card from "./BlogPostNewBuilderComponents/Card";
import CopyEditor from "./BlogPostNewBuilderComponents/CopyEditor";
import Media from "./BlogPostNewBuilderComponents/Media";
import Quote from "./BlogPostNewBuilderComponents/Quote";
import Tldr from "./BlogPostNewBuilderComponents/Tldr";
import EntryTeaser from "./EntryTeasers/EntryTease";
import EntryTeaserImage from "./EntryTeasers/EntryTeaserImage";
import SocialSharePostComponent from "./SocialSharePostComponent";
const BlogPostNewBuilder = ({
	entry,
	authorInformation,
	featuredPosts,
	blogAd,
}) => {
	// SELECTS THE LAST CATEGORY
	const mainCategory =
		(entry.blogCategories?.length &&
			entry.blogCategories[entry.blogCategories.length - 1]) ||
		undefined;

	// One Appearing self category
	const appearingCategory = (entry, defaultAd) => {
		if (entry.header?.length && entry.blogCategories[0] === "Sales") {
			const backgroundColor =
				(entry.backgroundColor?.length && entry.backgroundColor[0]) ||
				undefined;

			const image = (entry.adImage?.length && entry.adImage[0]) || undefined;
			return (
				<div
					className="c-resource-right-rail c-resource-right-rail--ad"
					style={{ right: "-50%" }}
				>
					<div className="c-resource-right-rail__ad">
						{image ? (
							<img
								alt={image.altText?.length ? image.altText : image.title}
								src={image.url}
							></img>
						) : (
							<picture>
								<source
									type="image/webp"
									srcset="/imgs/blog/siena-small.webp"
									alt="Siena small image"
								/>
								<source
									type="image/png"
									srcset="/imgs/blog/siena-small.jpg"
									alt="Siena small image"
								/>
								<img alt="Siena small image" src="/imgs/blog/siena-small.jpg" />
							</picture>
						)}
						<div
							className={`c-resource-right-rail__ad__text ${
								backgroundColor?.slug ? backgroundColor.slug : ""
							}`}
						>
							<h1>{entry.blogCategories}</h1>
							<h4>{entry.header}</h4>
							<p>{entry.paragraph}</p>
							<CtaGroup ctas={entry.ctas} />
						</div>
					</div>
				</div>
			);
		} else if (
			entry.blogCategories?.length &&
			entry.blogCategories[0] == "Sales" &&
			entry.displayGeneralAdd.length
		) {
			const backgroundColor =
				(defaultAd.backgroundColor?.length && defaultAd.backgroundColor[0]) ||
				undefined;
			const image =
				(defaultAd.adImage?.length && defaultAd.adImage[0]) || undefined;
			return (
				<div
					className="c-resource-right-rail c-resource-right-rail--ad"
					style={{ right: "-50%" }}
				>
					<div className="c-resource-right-rail__ad">
						{image ? (
							<img
								alt={image.altText?.length ? image.altText : image.title}
								src={image.url}
							></img>
						) : (
							<picture>
								<source
									type="image/webp"
									srcset="/imgs/blog/siena-small.webp"
									alt="Siena small image"
								/>
								<source
									type="image/png"
									srcset="/imgs/blog/siena-small.jpg"
									alt="Siena small image"
								/>
								<img alt="Siena small image" src="/imgs/blog/siena-small.jpg" />
							</picture>
						)}
						<div
							className={`c-resource-right-rail__ad__text ${
								backgroundColor && backgroundColor.slug
							}`}
						>
							<h4>{defaultAd.header}</h4>
							<p>{defaultAd.paragraph}</p>
							<CtaGroup ctas={entry.ctas} />
						</div>
					</div>
				</div>
			);
		}

		return "";
	};

	return (
		<>
			<BlogBuildersFeaturedImage
				slug={entry.slug}
				handleType={entry.handleType}
				featuredImage={entry.featuredImage}
				imageGradient={entry.imageGradient}
			/>

			<section className="c-resource-content c-resource-content--overlap--blog">
				<SocialSharePostComponent entry={entry} />

				{appearingCategory(entry, blogAd)}

				<Script
					src="/js/lazyload.min.js"
					strategy="afterInteractive"
					onLoad={() => {
						// Wait for page to fully load
						LazyLoad.js(
							[
								"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js",
							],
							function () {
								$(window).bind("load", function () {
									function fix_ad() {
										var window_top = $(window).scrollTop();
										if (
											window_top > $("#rail-start").offset().top - 500 &&
											window_top < $("#rail-end").offset().top - 700
										) {
											$(".c-resource-right-rail--ad").css({ right: "0" });
										} else {
											$(".c-resource-right-rail--ad").css({ right: "-50%" });
										}

										if (window_top < $("#rail-end").offset().top - 700) {
											$(".c-resource-right-rail--social").css({ right: "0" });
										} else {
											$(".c-resource-right-rail--social").css({
												right: "-50%",
											});
										}
									}

									fix_ad();

									$(window).scroll(fix_ad);
								});
							}
						);
					}}
				/>
				<div className="c-resource-content__container c-resource-content__container--new-posts container">
					<div className="row">
						<div className="c-resource-content__container__col col-sm-12">
							<div className="c-blog-builder--content__title">
								{mainCategory?.length && entry.readingTime?.length && (
									<pre className="c-eyebrow">
										{mainCategory.title} : {entry.readingTime} read
									</pre>
								)}
								{/* Only show category if no readng time given */}
								{mainCategory?.length && !entry.readingTime?.length && (
									<pre className="c-eyebrow">{mainCategory.title}</pre>
								)}
								{entry.blogSubtitle?.length ? (
									<>
										<h1 className="shared-title-space">{entry.title}</h1>
										<p className="shared-title-space">{entry.blogSubtitle}</p>
									</>
								) : (
									<h1 className="">{entry.title}</h1>
								)}
							</div>
							<div className="c-blog-builder--content__meta">
								<div className="c-author">
									{authorInformation.photo ? (
										<div
											className="circle-img c-author__img"
											style={{
												backgroundImage: `url( '${authorInformation.photo.url}' )`,
											}}
										></div>
									) : (
										<div
											className={`circle-img c-author__img background-${
												(authorInformation.id % 2) + 1
											}`}
										>
											{!authorInformation?.photo && (
												<span className="c-author__img--alt">
													{authorInformation.name?.split(" ")[0] || ""}
												</span>
											)}
										</div>
									)}
									<div className="c-author__meta">
										<p className="p-sm  no-margin">
											<strong>{authorInformation.name}</strong>
										</p>
										{authorInformation.authorTitle ? (
											<p className="p-sm  no-margin">
												{authorInformation.authorTitle}
											</p>
										) : (
											<p className="p-sm  no-margin">Contributor</p>
										)}
									</div>
								</div>
								<p className="p-sm date">
									{new Date(entry.postDate).toLocaleString("en-US", {
										year: "numeric",
										month: "long",
										day: "numeric",
									})}
								</p>
							</div>
							<div id="rail-start"></div>
							{entry.blogBuilder.map((matrixBlock) => {
								switch (matrixBlock.typeHandle) {
									case "tldr":
										return <Tldr tldr={tldr} />;
									case "copyEditor":
										return <CopyEditor {...matrixBlock} />;
									case "media":
										return <Media {...matrixBlock} />;
									case "callout":
										return <Callout {...matrixBlock} />;
									case "card":
										return <Card {...matrixBlock} />;
									case "quote":
										return <Quote {...matrixBlock} />;
									case "adA":
										return <AdA {...matrixBlock} />;
									case "adB":
										return <AdB {...matrixBlock} />;
									default:
										return "";
								}
							})}
						</div>
					</div>
				</div>
			</section>

			<BlogFinalPlea />

			<div id="rail-end"></div>

			{featuredPosts?.length ? (
				<div className="c-blog-builder__related">
					<h3 className="c-copper-chronicles__title">Related articles</h3>
					<div className="row">
						{featuredPosts.map((postCard) => {
							console.log("post card ", postCard);
							return (
								<div className="col-xl-4 col-lg-6 col-md-12 c-card-col">
									{postCard.featuredImage?.length ? (
										<EntryTeaserImage {...postCard} />
									) : (
										<EntryTeaser {...postCard} />
									)}
								</div>
							);
						})}
					</div>
				</div>
			) : (
				""
			)}
		</>
	);
};

export default BlogPostNewBuilder;
