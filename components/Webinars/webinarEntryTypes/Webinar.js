import Script from "next/script";
import {
	getResizedImagesForJsonLd,
	obtainWebinarDuration,
} from "../../../helpers/JsonLD";
import RequesiteForm from "../../Resources/RequesiteForm";
import FinalPlea from "../FinalPlea";

const Webinars = ({ entry, globals, recentWebinars }) => {
	const jsonLDImage = (featuredImage) => {
		const image = (featuredImage?.length && featuredImage[0]) || undefined;
		if (image) {
			return getResizedImagesForJsonLd(image);
		} else {
			return getResizedImagesForJsonLd("imgs/copper-icon-pink.png");
		}
	};
	const seoDescriptionForJsonLd =
		entry.seoDescription?.length > 0
			? entry.seoDescription.filterStripTags().slice(0, 60)
			: entry.title;
	const jsonLdHtml = {
		"@context": "https://schema.org",
		"@type": "VideoObject",
		name: entry.title,
		description: seoDescriptionForJsonLd,
		thumbnailUrl: [jsonLDImage()],
		duration: `${obtainWebinarDuration(entry.duration)}`,
		uploadDate: new Date(entry.postDate).toISOString(),
		interactionStatistic: {
			"@type": "InteractionCounter",
			interactionType: { "@type": "http://schema.org/WatchAction" },
			userInteractionCount: 5647018,
		},
	};

	const image = entry.featuredImage.length ? entry.featuredImage[0] : undefined;
	return (
		<>
			<div
				className={`c-webinar-form ${
					entry.specialStyle && entry.specialStyle == "inspirationSeries"
						? "inspiration-series-transform"
						: ""
				}`}
				id="c-webinar-gate"
			>
				<div className="c-resource--header">
					{image && (
						<>
							{entry.type == "blog" || entry.type == "blogBuilder" ? (
								<img
									src={image.url}
									alt={image.altText?.length ? image.altText : image.title}
									className="c-resource--header__background-image"
								/>
							) : (
								<img
									src={image.url}
									alt={image.altText?.length ? image.altText : image.title}
									className="c-resource--header__background-image c-resource--header__background-image--fullscreen"
								/>
							)}
						</>
					)}
				</div>

				<RequesiteForm entry={entry} />
			</div>

			<div className="c-webinar padding-top d-none" id="c-webinar">
				<section className="c-webinar-video">
					<div className="container">
						{entry.embeddedVideo?.length > 0 ? (
							<div
								className="c-video"
								dangerouslySetInnerHTML={{ __html: entry.embeddedVideo }}
							></div>
						) : (
							<div className="col-md-12 t-center">
								<h1>Webinar still not available</h1>
								{entry.releaseDate ? (
									<p>
										Publish time: {new Date(entry.releaseDate).toISOString()}
									</p>
								) : (
									<p>Soon the video will be available to watch.</p>
								)}
							</div>
						)}
					</div>
				</section>

				<section className="c-webinar-content h-section-padding">
					<div className="container">
						<div className="row">
							<div className="col-md-4 bottom-margin-mobile">
								<p className="c-webinar-content__related-resources">
									Related Resources
								</p>
								<div className="c-webinar-content__related-list">
									{entry.relatedResource?.length &&
										entry.relatedResource.map((relatedEntry) => {
											return (
												<a href={`/${relatedEntry.url}`}>
													{relatedEntry.title}
												</a>
											);
										})}
								</div>
							</div>
							<div className="col-md-8">
								<h3>{entry.title}</h3>
								<p>{entry.description}</p>
								<div className="c-webinar-hosts extra-top-margin--small ">
									<h3>Hosted By:</h3>
									<div className="d-flex flex-wrap">
										{entry.featuredAuthor?.length ? (
											<>
												{entry.featuredAuthors.map((author) => {
													return (
														<div className="c-author__detail">
															{!author.photo ? (
																<div className="circle-img c-author__img background-{{(author.id%2) +1}}">
																	<span className="c-author__img--alt">
																		{author.firstName.split(" ") || ""}
																	</span>
																</div>
															) : (
																<div
																	className="circle-img c-author__img"
																	style={{
																		backgroundImage: `url('${author.photo.url}')`,
																	}}
																></div>
															)}
															<div className="c-author__meta c-author__meta--detail">
																<p className="p-sm">
																	<strong>{author.name}</strong>
																</p>
																<p className="p-sm">{author.authorTitle}</p>
															</div>
														</div>
													);
												})}
											</>
										) : (
											<div className="c-author__detail">
												{!finalDefaultAuthorInfo?.photo?.url ? (
													<div className="circle-img c-author__img background-{{(finalDefaultAuthorInfo.id%2) +1}}">
														<span className="c-author__img--alt">
															{finalDefaultAuthorInfo.firstName.split(" ") ||
																""}
														</span>
													</div>
												) : (
													<div
														className="circle-img c-author__img"
														style={{
															backgroundImage: `url('${finalDefaultAuthorInfo.photo.url}')`,
														}}
													></div>
												)}
												<div className="c-author__meta c-author__meta--detail">
													<p className="p-sm">
														<strong>{finalDefaultAuthorInfo.name}</strong>
													</p>
													<p className="p-sm">
														{finalDefaultAuthorInfo.jobTitle}
													</p>
												</div>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{entry.embeddedVideo?.length && (
					<Script
						type="application/ld+json"
						dangerouslySetInnerHTML={{ __html: jsonLdHtml }}
					></Script>
				)}

				{/* Recent posts section */}
				<section className="c-blog__entries h-section-padding">
					<div className="container">
						<h2 className="text-center">Recent Webinars</h2>
						<div className="row extra-top-margin--small">
							{recentWebinars?.length &&
								recentWebinars.map((recentWebinar) => {
									const recentWebinarImage =
										(recentWebinar.featuredImage?.length &&
											recentWebinar.featuredImage[0]) ||
										undefined;
									return (
										<div className="col-md-4">
											<div className="c-card__entry extended-card">
												<a
													className="c-card__clickthrough"
													href={recentWebinar.url}
												></a>
												{recentWebinarImage ? (
													<img
														className="c-card__default__image"
														src={recentWebinarImage.url}
														alt={
															recentWebinarImage.altText?.length
																? recentWebinarImage.altText
																: recentWebinarImage.title
														}
													/>
												) : (
													<picture>
														<source
															type="image/webp"
															srcset="/imgs/industry/industry-agency-blog-01@2x.webp"
															className="c-card__default__image"
															alt="Industry agency blog image"
														/>
														<source
															type="image/png"
															srcset="/imgs/industry/industry-agency-blog-01@2x.jpg"
															className="c-card__default__image"
															alt="Industry agency blog image"
														/>
														<img
															className="c-card__default__image"
															src="/imgs/industry/industry-agency-blog-01@2x.jpg"
															alt="Industry agency blog image"
														/>
													</picture>
												)}
												<div className="c-card__entry__content">
													<span className="t-eyebrow t-special-eyebrow t-special-eyebrow--lt-purple">
														{recentWebinarImage.releaseDate &&
														new Date(recentWebinarImage.releaseDate) &&
														new Date(recentWebinarImage.releaseDate) >=
															new Date()
															? "Upcoming webinar"
															: "Video"}
													</span>
													<br />
													<h4 className="c-card__entry-title">
														<a
															className="underline_from_lefsettt"
															href={`/${recentWebinarImage.uri}`}
														>
															{recentWebinarImage.title}
														</a>
													</h4>
													<p className="p-sm">
														{recentWebinarImage.description}
													</p>
												</div>
												<div className="c-card__meta">
													<a
														className="t-link"
														href={`/${recentWebinarImage.uri}`}
													>
														Watch Now
													</a>
												</div>
											</div>
										</div>
									);
								})}
						</div>
					</div>
				</section>
				<FinalPlea />
			</div>

			<Script
				src="/js/lazyload.min.js"
				strategy="beforeInteractive"
				onLoad={() => {
					LazyLoad.js(
						[
							"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js",
							"/js/vendor/js-cookie.js",
							"/js/functions.min.{{ staticAssetsVersion }}.js",
						],
						function () {
							$("footer, .c-footer__legal").addClass("d-none");

							// Use the entry id so its unique to that entry not just the form
							var getUserInfo = Cookies.get("form_gate_{{entry.id}}", {
								domain: sndleveldomain,
							});
							if (getUserInfo) {
								$("#c-webinar-gate").addClass("d-none");
								$("#c-webinar").removeClass("d-none");
								$(".c-footer--simple").removeClass("d-none");
								$(".c-footer__legal").removeClass("d-none");
							} else {
								$(".c-footer--simple").removeClass("d-none");
							}

							$(window).on("beforeunload", function () {
								$("body").fadeOut("fast");
								$("html, body").animate({ scrollTop: 0 }, 300);
							});
						}
					);
				}}
			/>
		</>
	);
};

export default Webinars;

export async function getStaticProps({ params }) {
	// const blogInformation = await fetch(`copper.com/api/blog${pageNumber}.json`);
	const entry = await getEntryByType("blogIndex", "blog-index");
	const recentWebinars = await getRecentWebinars();

	return {
		props: {
			entry: entry.entry || {},
			globals: entry.globalSets || [],
			recentWebinars: recentWebinars || [],
			// category
		}, // will be passed to the page component as props
		revalidate: 120, // In seconds
	};
}
