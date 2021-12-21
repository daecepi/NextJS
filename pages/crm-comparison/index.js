import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HeroProduct from "../../components/Blocks/HeroTypes/HeroProduct";
import Footer from "../../components/Footer/Footer";
import CrmCard from "../../components/Cards/CrmCard";
import NavigationDefault from "../../components/Navigation/NavigationDefault";
import { getEntryByType } from "../../lib/api";
import { getTagText } from "../../helpers/propertyResolver";

export default function CrmComparisonPage({ res }) {
	const { entry } = res;
	return (
		<>
			<Head>
				<title>CRM Comparison: Find the Best CRM Software</title>
			</Head>
			<NavigationDefault />
			<HeroProduct
				backgroundColor="mint"
				eyebrow={entry.eyebrow}
				title={entry.header}
				copy={getTagText(entry.heroText)}
				ctaLight={true}
				ctaOneText="Free Trial"
				ctaOneUrl="/signup"
				ctaTwoText="Request Demo"
				ctaTwoUrl="/demos"
				imageUrl={`https:${entry.crmHeroImage[0].url}`}
			/>
			<section className="c-list-card crm-comparison-cards">
				<div className="container">
					<div className="c-list-card__header c-align--center">
						<h2 className="col-sm-10 t-center">
							Compare the most popular CRMs.
						</h2>
						<p className="col-sm-8 t-center">
							Get an idea of what other CRMs can and can't do to narrow down
							your options with a CRM feature comparison.
						</p>
					</div>
					<div className="row">
						{entry.crmCards.map((card, index) => (
							<CrmCard
								name={card.crmName}
								copy={card.crmCopy}
								link={card.crmCardLink}
								logo={card.crmLogo[0]}
								key={index}
							/>
						))}
					</div>
				</div>
			</section>

			<section className="crm-comparison-quotes c-quote-carousel js-quote-carousel">
				<div className="container-fluid">
					<div className="c-quote-carousel__container col-md-11 col-lg-11 colorblock--light-gray colorblock--bottom--right">
						<div className="c-quote-carousel__content row">
							<div className="container">
								<div className="col-md-11 offset-md-1">
									<pre className="c-eyebrow c-eyebrow--light">
										Customer Story
									</pre>
								</div>
								<div className="c-quote-carousel__group">
									{entry.customerStories.map((story, index) => {
										return (
											<div
												className="row c-quote-carousel__group--item"
												key={index}
											>
												<div className="c-quote-carousel__group--item-image col-md-4 offset-md-1">
													{story.customerImage && (
														<img
															alt={story.customerImage[0].title}
															src={`https:${story.customerImage[0].url}`}
															width="330"
															height="430"
														/>
													)}
												</div>
												<div className="c-quote-carousel__blockquote col-md-7 c-valign--middle">
													<div className="c-quote-carousel__blockquote--item">
														<cite>
															<blockquote>
																{getTagText(story.customerQuote)}
															</blockquote>
															{story.customerName}{" "}
															<span className="c-quote-carousel__blockquote--position">
																{story.customerPosition}
															</span>
														</cite>
														<div className="c-quote-carousel__blockquote--logo">
															{story.customerCompanyLogo?.length > 0 && (
																<img
																	alt={story.customerCompanyLogo[0].title}
																	src={`https:${story.customerCompanyLogo[0].url}`}
																/>
															)}
														</div>
													</div>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="crm-comparison-features c-list-card">
				<div className="container">
					<div className="c-list-card__header">
						<h2 className="t-center">Copper features</h2>
						<p className="t-center">
							All of the CRM Features and CRM Capabilities are included with
							your free trial.
						</p>
					</div>
					<div className="row">
						{entry.copperFeatures.map((category) => {
							return (
								<div className="col-md-4" key={category.featureCategory}>
									<div className="c-list-card__card">
										<div className="c-list-card__border mint"></div>
										<span className="t-eyebrow">
											{category.featureCategory}
										</span>
										<div className="c-list-card__icon"></div>
										{category.featureList.map((feature) => (
											<div className="c-list-card__copy" key={feature.id}>
												<h4>{feature.title && feature.title}</h4>
												<p className="p-sm">
													{feature.paragraph && feature.paragraph}
												</p>
											</div>
										))}
									</div>
								</div>
							);
						})}
						<div className="row c-align--center extra-top-margin--small">
							<Link href="/features">
								<a className="t-link">See all features</a>
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="crm-comparison-last-module c-cols">
				<div className="container">
					<div className="row">
						<div className="col-md order-2">
							<div
								className="c-image c-image--center sl_swap"
								id="home-customer-logos"
							>
								{entry.lastModuleImage[0] ? (
									<Image
										src={`https:${entry.lastModuleImage[0].url}`}
										width="360"
										height="286"
										alt={entry.lastModuleImage[0].title}
									/>
								) : (
									<picture>
										<source
											type="image/webp"
											srcSet="/imgs/home-logos.webp"
											alt="Customer logos"
										/>
										<source
											type="image/png"
											srcSet="/imgs/home-logos.png"
											alt="Customer logos"
										/>
										<img src="/imgs/home-logos.png" alt="Customer logos" />
									</picture>
								)}
							</div>
						</div>
						<div className="col-md order-1">
							<h2>So happy</h2>
							<h2>with Copper</h2>
							<p>12,000 + of the most innovative companies</p>
							<div className="c-hero__buttons">
								<Link href="/customers">
									<a className="c-button">See customer stories</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

export async function getStaticProps(context) {
	const res = await getEntryByType(
		"crmComparisonIndex",
		"crm-comparison-index"
	);
	return {
		props: {
			res,
		}, // will be passed to the page component as props
	};
}
