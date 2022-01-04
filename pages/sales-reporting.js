import Head from "next/head";
import Image from "next/image";
import HeroProduct from "../components/Blocks/HeroTypes/HeroProduct";
import Footer from "../components/Footer/Footer";
import NavigationDefault from "../components/Navigation/NavigationDefault";
import ProductTwoUp from "../components/ProductsComponent/ProductTwoUp/ProductTwoUp";
import TwoUp from "../components/ProductsComponent/ProductTwoUp/TwoUp";
import FinalHeroFull from "../components/SinglesComponents/FinalHeroFull/FinalHeroFull";
import { getEntryBySectionHandle } from "../lib/api";

export default function SalesReporting() {
	return (
		<>
			<Head>
				<title>Sales Reporting | Copper</title>
			</Head>
			<NavigationDefault
				buttons={{ option: { text: "Learn More", url: "/demos" } }}
			/>
			<HeroProduct
				backgroundColor="midnight"
				eyebrow="COPPER REPORTS"
				title="Read your business like a book."
				copy="Get an easy, 360-degree view of your business with Copper's powerful reporting feature."
				ctaLight={true}
				ctaOneText="Try Free"
				ctaOneUrl="https://www.copper.com/signup"
				ctaTwoText="Request Demo"
				ctaTwoUrl="/demos"
				imageUrl="https://copper.objects.frb.io/imgs/product/Group-454-transparent-bc.png"
			/>
			<section id="" className="c-single-column  white">
				<div className="container">
					<div className="col-md-8 offset-md-2  c-single-column__container extra-bottom-margin--x-small sales-color">
						<h2 style={{ fontSize: "52px", lineHeight: "64px" }}>
							Find your power with Reports
						</h2>
						<p className="p-sm">
							We know how important it is for you to have total visibility into
							your performance and growth at any given time. With the new Copper
							Reports, you’ll gain clarity and confidence in understanding your
							performance.
						</p>
					</div>
					<div
						className="col-md-10 offset-md-1"
						style={{ paddingBottom: "35px" }}
					>
						<div
							className="c-video"
							style={{ boxShadow: "0px 16px 18px 0px rgb(0 0 0 / 24%)" }}
						>
							<script
								src="https://fast.wistia.com/embed/medias/6dyja3az1x.jsonp"
								async
							></script>
							<script
								src="https://fast.wistia.com/assets/external/E-v1.js"
								async
							></script>
							<div
								className="wistia_responsive_padding"
								style={{ padding: "56.25% 0 0 0", position: "relative" }}
							>
								<div
									className="wistia_responsive_wrapper"
									style={{
										height: "100%",
										left: "0",
										position: "absolute",
										top: "0",
										width: "100%",
									}}
								>
									<div
										className="wistia_embed wistia_async_6dyja3az1x videoFoam=true"
										style={{
											height: "100%",
											position: "relative",
											width: "100%",
										}}
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ProductTwoUp
				fullSectionClass="c-cols-landing sales-reports-special"
				containerClass="c-animation-container"
				showHiddenH2
			>
				<TwoUp
					eyebrow="SUPER SIMPLE GROWTH"
					title="Everything you need to get started in a heartbeat."
					copy="Ready-to-go templates will have you up and running in one simple click."
					videoId="vid-1"
					videoWebm="https://copper.objects.frb.io/videos/sales-reporting/1-Reports-LP-Templates.webm"
					videoMp4="https://copper.objects.frb.io/videos/sales-reporting/1-Reports-LP-Templates.mp4"
					imageClass="c-image--center c-image--shadow h-remove-shadow c-image-special-margin--mobile"
					imageSpacingClass="col-md-6 d-flex align-items-center offset-md-1"
					textSpacingClass="col-md-5"
					titleClass="sales-font-size"
					titleh3
				/>
			</ProductTwoUp>
			<ProductTwoUp
				fullSectionClass="c-cols-landing h-padding-bottom sales-reports-special"
				containerClass="c-animation-container"
				showHiddenH2
			>
				<TwoUp
					eyebrow="TOTAL FLEXIBILITY"
					title="Personalize to fit your special business needs"
					copy="Adaptable as your business evolves, personalized templates give you the capability to build exactly what you want, without having to ask for help."
					reverse
					videoId="vid-2"
					videoWebm="https://copper.objects.frb.io/videos/sales-reporting/2-Reports-Personalize.webm"
					videoMp4="https://copper.objects.frb.io/videos/sales-reporting/2-Reports-Personalize.mp4"
					imageClass="c-image--center c-image--shadow h-remove-shadow c-image-special-margin--mobile"
					imageSpacingClass="col-md-6 d-flex align-items-center"
					textSpacingClass="col-md-5 offset-md-1"
					titleClass="sales-font-size mb-0"
					titleh3
				/>
			</ProductTwoUp>
			<section className="c-quote-carousel js-quote-carousel">
				<div className="container-fluid">
					<div className="c-quote-carousel__container col-md-11 col-lg-10">
						<div className="c-quote-carousel__content row background--midnight-important">
							<div className="container px-5">
								<div className="row">
									<div className="c-testimonial__quote col-md-4 offset-md-2">
										<pre
											className="c-eyebrow c-eyebrow--light extra-bottom-margin--x-small"
											style={{ top: "0", marginLeft: "0" }}
										>
											Success Stories
										</pre>
										<div className="c-quote-carousel__blockquote--item active">
											<blockquote>
												“Copper is a core part of how we’ll scale and grow. It’s
												what gives us the data insights we need to get where we
												want to be.”
											</blockquote>
											<cite>
												DAVE SPEER
												<br />
												<span
													className="c-quote-carousel__blockquote--position"
													style={{ fontWeight: "normal" }}
												>
													HOUWZER
												</span>
											</cite>
										</div>
									</div>
									<div className="c-testimonial__image spacing--mobile offset-md-1 col-md-4">
										<source
											type="image/webp"
											srcSet="https://copper.objects.frb.io/imgs/product/Group-579.webp"
											alt="Reporting image hero"
										/>
										<source
											type="image/png"
											srcSet="https://copper.objects.frb.io/imgs/product/Group-579.png"
											alt="Reporting image hero"
										/>
										<Image
											src="https://copper.objects.frb.io/imgs/product/Group-579.png"
											alt="Group 579"
											width={325}
											height={353}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ProductTwoUp
				fullSectionClass="c-cols-landing sales-reports-special"
				containerClass="c-animation-container"
				showHiddenH2
			>
				<TwoUp
					eyebrow="BUILD YOUR INSIGHTS"
					title="Customize and create your own insights"
					copy="When you need to go deeper, you can build your insights from scratch across all Copper data."
					videoId="vid-3"
					videoWebm="https://copper.objects.frb.io/videos/sales-reporting/3-Reports-Customize.webm"
					videoMp4="https://copper.objects.frb.io/videos/sales-reporting/3-Reports-Customize.mp4"
					imageClass="c-image--center c-image--shadow h-remove-shadow c-image-special-margin--mobile"
					imageSpacingClass="col-md-6 d-flex align-items-center offset-md-1"
					textSpacingClass="col-md-5"
					titleClass="sales-font-size"
					titleh3
				/>
			</ProductTwoUp>
			<ProductTwoUp
				fullSectionClass="c-cols-landing h-padding-bottom sales-reports-special"
				containerClass="c-animation-container"
				showHiddenH2
			>
				<TwoUp
					eyebrow="EASY COLLABORATION"
					title="Schedule report delivery"
					copy="Report delivery can be scheduled and sent to stakeholders and team members with or without a Copper account."
					reverse
					videoId="vid-4"
					videoWebm="https://copper.objects.frb.io/videos/sales-reporting/4-Reports-Email-Schedule.webm"
					videoMp4="https://copper.objects.frb.io/videos/sales-reporting/4-Reports-Email-Schedule.mp4"
					imageClass="c-image--center c-image--shadow h-remove-shadow c-image-special-margin--mobile"
					imageSpacingClass="col-md-6 d-flex align-items-center"
					textSpacingClass="col-md-5 offset-md-1"
					titleClass="sales-font-size"
					titleh3
				/>
			</ProductTwoUp>
			<FinalHeroFull
				title="Try Copper for free"
				copy="14-day trial. Instant activation, no credit card required. Give the Copper software solution a try today."
			/>
			<Footer />
		</>
	);
}

export async function getStaticProps(context) {
	const res = await getEntryBySectionHandle("product", "sales-reporting");
	return {
		props: {
			entry: res.entry || {},
			globals: res.globalSets || [],
		}, // will be passed to the page component as props
		revalidate: 120, // in seconds
	};
}
