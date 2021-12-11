import Script from "next/script";
import Link from "next/link";
import { useRecoilValue } from "recoil";

import { SyncedAtom } from "../../atoms/SyncAtom";
import CtaGroup from "../../components/Blocks/Simples/CtaGroup";
import DefaultPageBase from "../../components/PageBase/DefaultPageBase";
import { filterStripTags } from "../../helpers";
import { getEntryBySectionHandle, getOnDemandWebinar } from "../../lib/api";

const WebinarIndex = ({ entry, globals, onDemandWebinars }) => {
	const syncedAtomInformation = useRecoilValue(SyncedAtom);
	const finalDefaultAuthorInfo = undefined;

	const generateJsonLd = (webinar, limit) => {
		// Selects the appropiate description for the JsonLD
		let description = "Webinar knowledge to make you be successful";
		if (webinar.description?.length > 0)
			webinar.description?.length > limit
				? (description =
						filterStripTags(webinar.description).slice(0, limit - 3) + "...")
				: (description = filterStripTags(webinar.description));
		if (webinar.formCopy?.length > 0)
			description =
				webinar.formCopy?.length > limit
					? filterStripTags(webinar.formCopy).slice(0, limit - 3) + "..."
					: filterStripTags(webinar.formCopy);
		return {
			"@context": "https://schema.org",
			"@type": "Course",
			name: webinar.title,
			description: description,
			provider: {
				"@type": "Organization",
				name: "Copper",
				sameAs: "http://www.copper.com",
			},
		};
	};

	return (
		<DefaultPageBase entry={entry} globals={globals}>
			<section className="c-hero--split background--graphite">
				<div className="c-image">
					<picture>
						<source
							type="image/webp"
							srcSet="/imgs/webinar-hero-1.webp"
							alt="Webinar hero image"
						/>
						<source
							type="image/png"
							srcSet="/imgs/webinar-hero-1.jpg"
							alt="Webinar hero image"
						/>
						<img src="/imgs/webinar-hero-1.jpg" alt="Webinar hero image" />
					</picture>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-6 c-valign--middle">
							<pre className="c-eyebrow c-eyebrow--light">{entry.eyebrow}</pre>
							<h1 className="t-white">{entry.header}</h1>
							{entry.paragraph?.length > 0 && <p>{entry.paragraph}</p>}
							<div dangerouslySetInnerHTML={{ __html: entry.richText }}></div>
							{entry.ctas.length && <CtaGroup ctas={entry.ctas} />}
						</div>
					</div>
				</div>
			</section>

			<section className="h-section-padding">
				<div className="container">
					<h2 className="text-center">Featured Webinars</h2>
					<div className="row extra-top-margin--small">
						{entry.featuredWebinars?.length &&
							entry.featuredWebinars.map((webinarEntry) => {
								console.log("item", webinarEntry);
								return (
									<div className="col-md-4">
										<div className="c-card__entry h-webinar">
											<Link href={`/${webinarEntry.uri}`}>
												<a className="c-card__clickthrough"></a>
											</Link>
											{webinarEntry.featuredImage?.length ? (
												<img
													className="c-card__default__image"
													src={webinarEntry.featuredImage[0].url}
													alt={
														webinarEntry.featuredImage[0].altText
															? webinarEntry.featuredImage[0].altText
															: webinarEntry.featuredImage[0].title
													}
												/>
											) : (
												<picture>
													<source
														type="image/webp"
														srcSet="/imgs/industry/industry-agency-blog-01@2x.webp"
														className="c-card__default__image"
														alt="Industry agency blog image"
													/>
													<source
														type="image/png"
														srcSet="/imgs/industry/industry-agency-blog-01@2x.jpg"
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
												<span className="t-eyebrow ">
													{webinarEntry.eyebrow}
												</span>
												<h4 className="c-card__entry-title multiple-2-card-trailer">
													<Link href={`/${webinarEntry.uri}`}>
														<a
															className="underline_from_lefsettt"
															href={webinarEntry.url}
														>
															{webinarEntry.title}
														</a>
													</Link>
												</h4>
												<p className="p-sm multiple-5-card-trailer">
													{webinarEntry.description}
												</p>
											</div>
											<div className="c-card__meta">
												<Link href={`/${webinarEntry.uri}`}>
													<a className="c-button">
														{webinarEntry.handleType == "register"
															? "Register"
															: "Watch Now"}
													</a>
												</Link>
											</div>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</section>

			<section className="h-section-padding no-top-padding">
				<div className="container">
					<h2 className="text-center extra-bottom-margin--small">
						On-Demand Webinars
					</h2>
					{onDemandWebinars.length &&
						onDemandWebinars.map((onDemandWebinar) => {
							return (
								<div className="c-webinar-list ">
									<p className="c-webinar-list__title">
										{onDemandWebinar.title}
									</p>
									<div className="c-webinar-list__authors">
										{onDemandWebinar.featuredAuthors?.length ? (
											onDemandWebinar.featuredAuthors.map((author) => {
												return (
													(author.photo && (
														<div
															className={`circle-img c-author__img h-small background-${
																(author.id % 2) + 1
															}`}
														>
															<span className="c-author__img--alt">
																{author.firstName?.split(" ")[0] || ""}
															</span>
														</div>
													)) || (
														<div
															className="circle-img c-author__img h-small"
															style={{
																backgroundImage: `url('${author.photo.url}')`,
															}}
														></div>
													)
												);
											})
										) : (
											<>
												{finalDefaultAuthorInfo?.photo?.url ? (
													<>
														<div
															className={`circle-img c-author__img h-small background-${
																(finalDefaultAuthorInfo.id % 2) + 1
															}`}
														>
															<span className="c-author__img--alt">
																{finalDefaultAuthorInfo.firstName?.split(
																	" "
																)[0] || ""}
															</span>
														</div>
													</>
												) : (
													<div
														className="circle-img c-author__img h-small"
														style={{
															backgroundImage: `url('${
																finalDefaultAuthorInfo?.photo.url || ""
															}')`,
														}}
													></div>
												)}
											</>
										)}

										<Script
											type="application/ld+json"
											dangerouslySetInnerHTML={{
												__html: generateJsonLd(onDemandWebinar, 60),
											}}
										/>
									</div>
									<p className="c-webinar-list__duration p-sm">
										{onDemandWebinar.duration}
									</p>
									<div>
										<Link href={onDemandWebinar.url}>
											<a className="c-button">Watch Now</a>
										</Link>
									</div>
								</div>
							);
						})}
				</div>
			</section>
			<section className="c-hero--split background--leavebehind">
				<div className="c-image">
					<picture>
						<source
							type="image/webp"
							srcSet="/imgs/UI_ipad_final-plea-update-new.webp"
							alt="Ipad UI image"
						/>
						<source
							type="image/png"
							srcSet="/imgs/UI_ipad_final-plea-update-new.jpg"
							alt="Ipad UI image"
						/>
						<img
							src="/imgs/UI_ipad_final-plea-update-new.jpg"
							alt="Ipad UI image"
						/>
					</picture>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-6 c-valign--middle">
							<pre className="c-eyebrow c-eyebrow--light">
								Goodbye Data Entry
							</pre>
							<h2 className="t-white">
								Hello Copper.
								<br />
								Try it free!
							</h2>
							<p style={{ maxWidth: "420px" }}>
								No credit card required. Start your 14-day free trial today.
							</p>
							<div className="c-hero__buttons">
								<a
									className="c-button"
									href="#"
									data-toggle="modal"
									data-target="#formModal"
								>
									Request Demo
								</a>
								<Link href={`/${syncedAtomInformation.generalSignupUrl}`}>
									<a className="c-button c-button--outline sendUTMsToAmplitude">
										Try Free
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</DefaultPageBase>
	);
};

export default WebinarIndex;

export async function getStaticProps(context) {
	// const blogInformation = await fetch(`copper.com/api/blog${pageNumber}.json`);
	const entry = await getEntryBySectionHandle("webinarIndex", "webinar-index");
	const onDemandWebinars = await getOnDemandWebinar();

	return {
		props: {
			entry: entry.entry || {},
			globals: entry.globalSets || [],
			onDemandWebinars: onDemandWebinars || [],
			// category
		}, // will be passed to the page component as props
		revalidate: 120, // in seconds
	};
}
