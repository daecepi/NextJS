import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HeroBlock from "../../components/Blocks/HeroBlock";
import TestimonialBlock from "../../components/Blocks/TestimonialBlock";
import TwoColumn from "../../components/TwoColumn/TwoColumn";
import NavigationDefault from "../../components/Navigation/NavigationDefault";
import {
	addHTTPStoUrl,
	getLink,
	getTagText,
	linkitButtonPropertyGetter,
} from "../../helpers/propertyResolver";
import { getCrmComparison, getEntryByType } from "../../lib/api";
import Footer from "../../components/Footer/Footer";
import ComparisonTableBlock from "../../components/Blocks/ComparisonTableBlock";

const TYPES = {
	hero: (slug, block) => (
		<HeroBlock
			slug={slug}
			{...block}
			richText={<h1 className="h2">{getTagText(block.richText)}</h1>}
		/>
	),
	twoColumn: (slug, block) => (
		<TwoColumn
			slug={slug}
			title={block.title}
			copy={block.copy}
			eyebrow={block.eyebrow}
			image={block.image}
			imageOrientation={block.imageOrientation}
		/>
	),
	cta: (slug, block) => (
		<section
			className={`c-quote-callout text-md-center ${
				block.noBottomPadding && "no-bottom-padding"
			}`}
		>
			<div className="container">
				<div className="row">
					<div className="c-quote-callout__copy col-lg-10 offset-lg-1">
						<h2>{block.header}</h2>
						<p>{block.subHeader && getTagText(block.subHeader)}</p>
						<div className="c-hero__buttons">
							{block.cta.map((ctaItem) => {
								const link = linkitButtonPropertyGetter(ctaItem.button);
								return (
									<Link href={link.href}>
										<a
											className={`c-button ${
												block.cta.length > 0 && "button-center--mobile"
											} c-button--${
												ctaItem.buttonColor
													? ctaItem.buttonColor[0].slug
													: "white"
											} ${
												ctaItem.takeBackgroundColor &&
												"section-background-flavor"
											}`}
										>
											{link.value}
										</a>
									</Link>
								);
							})}
						</div>
					</div>
				</div>

				<div className="h-divider extra-top-margin--medium"></div>
			</div>
		</section>
	),
	threeColumn: (slug, block) => (
		<section
			className={`c-three-column  background--${
				block.backgroundColor && block.backgroundColor[0]
					? block.backgroundColor[0].slug.replace(" ", "-").toLower()
					: "off-white"
			} ${block.addBottomPadding && "h-padding-bottom"}`}
		>
			<div className="container">
				{block.eyebrow && (
					<span className="t-eyebrow section-eyebrow">{block.eyebrow}</span>
				)}
				{block.header && (
					<div className="section-header">
						<h2>{block.header}</h2>
						{block.subHeader && <p>{block.subHeader}</p>}
					</div>
				)}

				<div className="row">
					{block.entries.map((entry) => {
						let image = entry.image[0];
						let optimizedImages = image?.optimizedLandingImages;
						let clickthrough = entry.clickthrough
							? getLink(entry.clickthrough)
							: null;
						return (
							<div
								className={`col-md-4 ${
									entry.typeHandle === "newComparisonCard" &&
									"extra-bottom-margin--x-small"
								}`}
							>
								{entry.typeHandle === "comparisonCard" && (
									<div
										className={`c-card__entry extended-card c-card__entry--image background--${
											entry.backgroundColor && entry.backgroundColor[0]
												? entry.backgroundColor[0].slug
														.replace(" ", "-")
														.toLower()
												: "off-white"
										}`}
										style={{ height: "calc(100% - 20px)", display: "flex" }}
									>
										{clickthrough && (
											<Link href={clickthrough.href}>
												<a class="c-card__clickthrough" target="_blank"></a>
											</Link>
										)}
										<div
											style={{
												marginTop: "auto",
												marginBottom: "auto",
												height: "fit - content",
											}}
										>
											{optimizedImages.optimizedImageUrls?.length > 0 ? (
												<picture>
													{optimizedImages.srcsetWebp ? (
														<source
															srcSet={optimizedImages.srcsetWebp}
															sizes="100vw"
															type="image/webp"
														/>
													) : (
														<Image
															src={optimizedImages.src}
															srcSet={optimizedImages.srcset}
															sizes="100vw"
															className="c-card__image--center p-5"
															alt={image.altText ? image.altText : image.title}
														/>
													)}
												</picture>
											) : (
												<Image
													className="c-card__image--center p-5"
													src={addHTTPStoUrl(optimizedImages.src)}
													alt={image.altText ? image.altText : image.title}
													width={optimizedImages.originalImageWidth}
													height={optimizedImages.originalImageHeight}
												/>
											)}
											<p
												className="p-sm"
												style={{
													textAlign: "center",
													padding: "0px 25px 35px 25px",
												}}
											>
												{entry.paragraph}
											</p>
										</div>
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	),
	testimonial: (slug, block) => (
		<TestimonialBlock
			eyebrow={block.eyebrow}
			image={block.image}
			quote={block.quote}
			author={block.author}
			jobtitle={block.jobTitle}
		/>
	),
	table: (slug, block) => <ComparisonTableBlock slug={slug} block={block} />,
};

export const getStaticPaths = async () => {
	const res = await getEntryByType(
		"crmComparisonIndex",
		"crm-comparison-index"
	);

	const paths = res.entry.crmCards.map((card) => {
		const linkObject = linkitButtonPropertyGetter(card.crmCardLink);
		const linkComponets = linkObject.href.split("/");
		const slug = linkComponets[linkComponets.length - 1];
		return {
			params: { slug },
		};
	});
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const slug = context.params.slug;
	const res = await getCrmComparison(slug);

	if (!res) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			res,
			slug,
		}, // will be passed to the page component as props
	};
};

const CrmDetails = ({ res, slug }) => {
	return (
		<>
			<Head>
				<title>CRM Comparison: Find the Best CRM Software</title>
			</Head>
			<NavigationDefault />
			{res.landingBlocks.map((block) => {
				console.log("block --->", block);
				return (
					<>
						{TYPES[block.typeHandle]?.(slug, block) || (
							<p>{block.typeHandle}</p>
						)}
					</>
				);
			})}
			<Footer />
		</>
	);
};

export default CrmDetails;
