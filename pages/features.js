import Head from "next/head";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import HeroProduct from "../components/Blocks/HeroTypes/HeroProduct";
import Footer from "../components/Footer/Footer";
import NavigationDefault from "../components/Navigation/NavigationDefault";
import { linkitButtonPropertyGetter } from "../helpers/propertyResolver";
import { getEntryByType } from "../lib/api";
import { SyncedAtom } from "../contexts/SyncContext";

export default function Features({ res }) {
	const syncedAtom = useRecoilValue(SyncedAtom);
	const { entry } = res;
	return (
		<>
			<Head>
				<title>
					CRM features - List of functions & capabilities | Copper CRM
				</title>
			</Head>
			<NavigationDefault />
			<HeroProduct
				backgroundColor="eggplant"
				eyebrow="ALL OUR CRM FEATURES"
				title="Explore all our CRM features."
				copy="Depending on the size of your business, our CRM solution has the features to fit your needs. From marketing automation and nurturing, to lead management or a customer relationship [CRM] tool, we've got you covered."
				ctaOneText="See Pricing"
				ctaOneUrl="/pricing"
				imageUrl="https://copper.objects.frb.io/imgs/190409_pdp_hero_image.png"
			/>
			<section className="extra-bottom-margin--medium">
				<div className="container">
					<div className="extra-top-margin--small c-flex--end">
						<pre className="c-plain-eyebrow">Filter by Plan</pre>
						<ul className="c-pill c-pill--left-margin">
							<li id="c-pill__business" onClick="toggleFilter('business')">
								<a>
									<strong>Business</strong>
								</a>
							</li>
							<li
								id="c-pill__professional"
								onClick="toggleFilter('professional')"
							>
								<a>
									<strong>Professional</strong>
								</a>
							</li>
							<li id="c-pill__basic" onClick="toggleFilter('basic')">
								<a>
									<strong>Basic</strong>
								</a>
							</li>
						</ul>
					</div>
					{entry.featureGroupBlocks.map((featureBlock) => {
						console.log(featureBlock);
						const description = featureBlock.featureDescription.map(
							(feature) => (
								<div
									className={`col-md-4 extra-bottom-margin--x-small feature-description-block ${feature.pricingPlan}`}
								>
									{feature.pricingPlan === "basic" ? (
										<pre className="c-plain-eyebrow">All Plans</pre>
									) : feature.pricingPlan == "professional" ? (
										<pre className="c-plain-eyebrow">
											Professional + Business plan
										</pre>
									) : (
										<pre className="c-plain-eyebrow">{feature.pricingPlan}</pre>
									)}
									{feature.featureDetailLink ? (
										<a
											className="t-link--volt__container"
											href={`${
												linkitButtonPropertyGetter(feature.featureDetailLink)
													.href
											}`}
										>
											<h4 className="t-link--volt__link">{feature.title}</h4>
											<p className="p-sm">{feature.paragraph}</p>
										</a>
									) : (
										<>
											<h4>{feature.title}</h4>
											<p className="p-sm">{feature.paragraph}</p>
										</>
									)}
								</div>
							)
						);
						return (
							<div className="extra-top-margin--small">
								<hr />
								<h3 className="extra-top-margin--x-small">
									{featureBlock.header}
								</h3>
								<div className="row extra-top-margin--small">{description}</div>
							</div>
						);
					})}
				</div>
			</section>
			<section className="c-hero--split background--leavebehind">
				<div className="c-image">
					<Image
						src="https://copper.objects.frb.io/imgs/features/UI_ipad_final-plea-update.jpg"
						width="1114"
						height="600"
					/>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-6 c-valign--middle">
							<pre className="c-eyebrow c-eyebrow--light">
								GOODBYE DATA ENTRY
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
									className="c-button c-button--white"
									href={syncedAtom.generalSignupUrl}
								>
									Get Started
								</a>
								<a className="c-button c-button--white-outline" href="/demos">
									Request Demo
								</a>
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
	const res = await getEntryByType("features", "features");
	return {
		props: {
			res,
		}, // will be passed to the page component as props
	};
}
