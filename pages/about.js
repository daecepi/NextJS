import Script from "next/script";

import { getEntryByType } from "../lib/api";
import DefaultPageBase from "../components/PageBase/DefaultPageBase";
import { useState } from "react";
import AboutBioModal from "../components/Blocks/Modals/AboutBioModal";
import NavigationDefault from "../components/Navigation/NavigationDefault";

export default function About({ res }) {
	const [modalState, updateModalState] = useState("");

	// console.log("RED OBTAINED ", res);

	const displayModal = (leaderId) => {
		updateModalState(leaderId);
	};
	const closeSignal = () => {
		updateModalState("");
	};

	return (
		<DefaultPageBase entry={res}>
			<NavigationDefault />
			{/* Page content */}
			<style jsx>
				{`
					.about #we-believe-jumble .c-panel--small {
						justify-content: flex-start;
					}
				`}
			</style>
			<section className="c-hero--split midnight product-page no-transition">
				<div className="c-image">
					<picture>
						<source
							type="image/webp"
							srcSet="imgs/about/hero/image_about-hero2@2x.webp"
							alt="Priscilla du preez Xk K Cui44i M0 unsplash 1"
						/>
						<source
							type="image/png"
							srcSet="imgs/about/hero/image_about-hero2@2x.png"
							alt="Priscilla du preez Xk K Cui44i M0 unsplash 1"
						/>
						<img
							src="imgs/about/hero/image_about-hero2@2x.png"
							alt="Priscilla du preez Xk K Cui44i M0 unsplash 1"
						/>
					</picture>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-6 c-valign--middle">
							<div className="hero-text">
								<h1>The CRM that puts relationships first.</h1>
								<p>
									We’re here to help you build authentic business relationships
									for life.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="c-cols c-cols-landing asset-first-mobile hot-pink-checks  extra-bottom-margin--medium">
				<div className="container c-animation-container">
					<div className="row">
						<div className="col-md-6 d-flex align-items-center offset-md-1 order-2 animation-element slide-bottom in-view c-cols-landing-asset">
							<div className="c-image c-image--center c-image--shadow h-remove-shadow t">
								<picture>
									<source
										type="image/webp"
										srcSet="imgs/about/image_our-story@2x.webp"
										className="h-remove-shadow"
										alt="Our story image"
									/>
									<source
										type="image/png"
										srcSet="imgs/about/image_our-story@2x.png"
										className="h-remove-shadow"
										alt="Our story image"
									/>
									<img
										className="h-remove-shadow"
										src="imgs/about/image_our-story@2x.png"
										alt="Our story image"
									/>
								</picture>
							</div>
						</div>
						<div className="col-md-5 c-valign--middle order-1 c-cols-landing-content">
							<h3>Our story.</h3>
							<p>
								Copper isn’t just another CRM. We built it from the ground up to
								help you cultivate enduring relationships with your clients. We
								wanted a change from unwieldy databases with legions of custom
								fields, so we reimagined CRM software to enable purposeful
								collaboration between you and the people who matter most to your
								business. With Copper, your business will grow the right way:
								with loyal customers for life.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section
				id="we-believe-jumble"
				className="c-jumble c-jumble-inverted c-our-story c-jumble-background--putty"
			>
				<div className="container">
					<div className="c-jumble__container col-md-10">
						<div className="c-jumble__content">
							<div className="row">
								<div id="jumble-slider" className="col-md-6 col-sm-12">
									<div className="c-panel--small c-panel--top--mint c-valign--middle rectangle--hot-pink rectangle--bottom--left about-page">
										<pre className="c-eyebrow">we believe in</pre>
										<div className="c-our-story-carousel--content">
											<p>
												A CRM that lets you spend time on relationships, not
												data.
											</p>
											<p>A CRM that ends data entry</p>
											<p>A CRM that people will actually use</p>
											<p>
												A CRM that works in productivity tools (Google
												Workspace)
											</p>
											<p>
												A CRM that is not just for sellers, but for any
												relationship type
											</p>
											<p>A CRM that you can deploy in minutes</p>
											<p>A CRM that is designed like the tools you love</p>
											<p>A CRM that works where you work</p>
											<p>A CRM that adapts to any team</p>
											<p>A CRM that recommends what to do next</p>
										</div>
									</div>
								</div>
								<div
									id="jumble-content"
									className="col-md-6 col-sm-12 c-valign--middle"
								>
									<p className="sm graphite">
										We designed it to be fast, beautiful, easy to use and quick
										to get started. With superior Google Workspace (previously G
										Suite) integration, Copper allows you to work exactly how
										you want to: from your inbox. Your team won’t need to learn
										Copper; they’ll already know how to use it.
										<br />
										<br />
										They say “opportunity knocks” ... but most of those
										opportunities are actual human beings. So, go ahead: Open
										that door. Copper CRM exists so you can foster substantive,
										real relationships to build a better business.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				id=""
				className="purple c-cols c-cols-landing c-cols--investers diamond--mint diamond--bottom--left diamond--z-index-increased"
				style={{ paddingBottom: "100px", paddingTop: "100px" }}
			>
				<div className="container c-animation-container circle--mint circle--top--right">
					<div className="row">
						<div className="col-md-7 d-flex align-items-center offset-md-1 order-2 animation-element slide-bottom in-view">
							<div className="c-image c-image--center c-image--shadow h-remove-shadow">
								<picture>
									<source
										type="image/webp"
										srcSet="https://copper.objects.frb.io/imgs/about/LogoGardenv2.webp"
										className="h-remove-shadow"
										alt="Logo garden image"
									/>
									<source
										type="image/png"
										srcSet="https://copper.objects.frb.io/imgs/about/LogoGardenv2.png"
										className="h-remove-shadow"
										alt="Logo garden image"
									/>
									<img
										className="h-remove-shadow"
										src="https://copper.objects.frb.io/imgs/about/LogoGardenv2.png"
										alt="Logo garden image"
									/>
								</picture>
							</div>
						</div>
						<div className="col-md-4 c-valign--middle order-1">
							<h3>Our customers.</h3>
							<p>
								Thousands of companies in over 100 countries use Copper to grow
								their businesses.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="c-numbers about">
				<div className="container">
					<div className="row justify-content-center">
						<h2 className="text-center">Our numbers.</h2>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="c-number__entry c-valign--middle">
								<span
									className="t-numbers add-underline extended-line text-center"
									style={{ color: "black" }}
								>
									2013
								</span>
								<p className="text-center">Year Founded</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="c-number__entry c-valign--middle text-center">
								<span
									className="t-numbers add-underline extended-line text-center "
									style={{ color: "black" }}
								>
									25K+
								</span>
								<p className="text-center">Great Companies</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="c-number__entry c-valign--middle">
								<span
									className="t-numbers add-underline extended-line text-center"
									style={{ color: "black" }}
								>
									$90M
								</span>
								<p className="text-center">In Funding</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<a className="anchor" id="leadership"></a>

			<section className="c-about--leadership">
				<div className="container">
					<div className="row">
						<h2 className="col-12">Our leadership.</h2>
						<div
							className="col-md-8"
							style={{ marginLeft: "auto", marginRight: "auto" }}
						>
							<p>
								We’re a down-to-earth group of professionals with decades of
								experience, building value-oriented software for businesses,
								rooted in our mission to help the workforce thrive. We want our
								customers to grow their businesses and we believe that helping
								them cultivate their relationships—both internally and
								externally—is fundamental to that outcome. We’re dedicated to
								expanding our diverse teams and community, as we evolve and
								share in a common vision to innovate and transform CRM.
							</p>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-md-4 col-sm-6 leader--profile">
							<div
								data-cy="ceo-modal-start-about"
								className="circle-img--leaders"
								onClick={() => {
									displayModal("CEO");
								}}
							>
								<picture>
									<source
										type="image/webp"
										srcSet="/imgs/about/dennis-ceo-1.webp"
										alt="Dennis Fois photo"
									/>
									<source
										type="image/png"
										srcSet="/imgs/about/dennis-ceo-1.jpg"
										alt="Dennis Fois photo"
									/>
									<img
										src="/imgs/about/dennis-ceo-1.jpg"
										alt="Dennis Fois photo"
									/>
								</picture>
							</div>
							<p>Dennis Fois</p>
							<p className="p-sm">CEO</p>
							<span
								onClick={() => {
									displayModal("CEO");
								}}
								className="t-link extra-top-margin--xx-medium-small"
							>
								View Bio
							</span>
						</div>
						<div className="col-md-4 col-sm-6 leader--profile">
							<div
								className="circle-img--leaders"
								onClick={() => {
									displayModal("CMO");
								}}
							>
								<picture>
									<source
										type="image/webp"
										srcSet="/imgs/about/image_leadership-avatar_carrie@2x.webp"
										alt="Carrie Shaw photo"
									/>
									<source
										type="image/png"
										srcSet="/imgs/about/image_leadership-avatar_carrie@2x.png"
										alt="Carrie Shaw photo"
									/>
									<img
										src="/imgs/about/image_leadership-avatar_carrie@2x.png"
										alt="Carrie Shaw photo"
									/>
								</picture>
							</div>
							<p>Carrie Shaw</p>
							<p className="p-sm">Chief Marketing Officer</p>
							<span
								onClick={() => {
									displayModal("CMO");
								}}
								className="t-link extra-top-margin--xx-medium-small"
							>
								View Bio
							</span>
						</div>
						<div className="col-md-4 col-sm-6 leader--profile">
							<div
								className="circle-img--leaders"
								onClick={() => {
									displayModal("counsel");
								}}
							>
								<picture>
									<source
										type="image/webp"
										srcSet="/imgs/about/ben.webp"
										alt="Ben Hance photo"
									/>
									<source
										type="image/png"
										srcSet="/imgs/about/ben.jpg"
										alt="Ben Hance photo"
									/>
									<img src="/imgs/about/ben.jpg" alt="Ben Hance photo" />
								</picture>
							</div>
							<p>Ben Hance</p>
							<p className="p-sm">General Counsel </p>
							<span
								onClick={() => {
									displayModal("counsel");
								}}
								className="t-link extra-top-margin--xx-medium-small"
							>
								View Bio
							</span>
						</div>
						<div className="col-md-4 col-sm-6 leader--profile">
							<div
								className="circle-img--leaders"
								onClick={() => {
									displayModal("VPCS");
								}}
							>
								<picture>
									<source
										type="image/webp"
										srcSet="https://copper.objects.frb.io/imgs/about/ken-aponte-copper-vp-success1.webp"
										alt="Ken Aponte photo"
									/>
									<source
										type="image/png"
										srcSet="https://copper.objects.frb.io/imgs/about/ken-aponte-copper-vp-success1.jpg"
										alt="Ken Aponte photo"
									/>
									<img
										src="https://copper.objects.frb.io/imgs/about/ken-aponte-copper-vp-success1.png"
										alt="Ken Aponte photo"
									/>
								</picture>
							</div>
							<p>Ken Aponte</p>
							<p className="p-sm">VP Customer Success</p>
							<span
								onClick={() => {
									displayModal("VPCS");
								}}
								className="t-link extra-top-margin--xx-medium-small"
							>
								View Bio
							</span>
						</div>
						<div className="col-md-4 col-sm-6 leader--profile">
							<div
								className="circle-img--leaders"
								onClick={() => {
									displayModal("VPRO");
								}}
							>
								<picture>
									<source
										type="image/webp"
										srcSet="/imgs/about/Wyndham_Bio.webp"
										alt="Wydham Hudson photo"
									/>
									<source
										type="image/png"
										srcSet="/imgs/about/Wyndham_Bio.jpg"
										alt="Wydham Hudson photo"
									/>
									<img
										src="/imgs/about/Wyndham_Bio.jpg"
										alt="Wydham Hudson photo"
									/>
								</picture>
							</div>
							<p>Wyndham Hudson</p>
							<p className="p-sm">VP Revenue Operations</p>
							<span
								onClick={() => {
									displayModal("VPRO");
								}}
								className="t-link extra-top-margin--xx-medium-small"
							>
								View Bio
							</span>
						</div>
						<div className="col-md-4 col-sm-6 leader--profile">
							<div
								className="circle-img--leaders"
								onClick={() => {
									displayModal("VPS");
								}}
							>
								<picture>
									<source
										type="image/webp"
										srcSet="https://copper.objects.frb.io/imgs/about/Sam_bio.webp"
										alt="Sam Moorhead photo"
									/>
									<source
										type="image/png"
										srcSet="https://copper.objects.frb.io/imgs/about/Sam_bio.jpg"
										alt="Sam Moorhead photo"
									/>
									<img
										src="https://copper.objects.frb.io/imgs/about/Sam_bio.jpg"
										alt="Sam Moorhead photo"
									/>
								</picture>
							</div>
							<p>Sam Moorhead</p>
							<p className="p-sm">VP Sales</p>
							<span
								onClick={() => {
									displayModal("VPS");
								}}
								className="t-link extra-top-margin--xx-medium-small"
							>
								View Bio
							</span>
						</div>
						<div className="col-md-4 col-sm-6 leader--profile">
							<div
								className="circle-img--leaders"
								onClick={() => {
									displayModal("VPP");
								}}
							>
								<picture>
									<source
										type="image/webp"
										srcSet="https://copper.objects.frb.io/imgs/about/Derek_bio.webp"
										alt="Derek Skaletsky photo"
									/>
									<source
										type="image/png"
										srcSet="https://copper.objects.frb.io/imgs/about/Derek_bio.jpg"
										alt="Derek Skaletsky photo"
									/>
									<img
										src="https://copper.objects.frb.io/imgs/about/Derek_bio.jpg"
										alt="Derek Skaletsky photo"
									/>
								</picture>
							</div>
							<p>Derek Skaletsky</p>
							<p className="p-sm">VP Product</p>
							<span
								onClick={() => {
									displayModal("VPP");
								}}
								className="t-link extra-top-margin--xx-medium-small"
							>
								View Bio
							</span>
						</div>
						<div className="col-md-4 col-sm-6 leader--profile">
							<div
								className="circle-img--leaders"
								onClick={() => {
									displayModal("VPF");
								}}
							>
								<picture>
									<source
										type="image/webp"
										srcSet="https://copper.objects.frb.io/imgs/about/Rick_bio.webp"
										alt="Rick Smith photo"
									/>
									<source
										type="image/png"
										srcSet="https://copper.objects.frb.io/imgs/about/Rick_bio.jpg"
										alt="Rick Smith photo"
									/>
									<img
										src="https://copper.objects.frb.io/imgs/about/Rick_bio.jpg"
										alt="Rick Smith photo"
									/>
								</picture>
							</div>
							<p>Rick Smith</p>
							<p className="p-sm">VP Finance</p>
							<span
								onClick={() => {
									displayModal("VPF");
								}}
								className="t-link extra-top-margin--xx-medium-small"
							>
								View Bio
							</span>
						</div>
						<div className="col-md-4 col-sm-6 leader--profile">
							<div
								className="circle-img--leaders"
								onClick={() => {
									displayModal("VPE");
								}}
							>
								<picture>
									<source
										type="image/webp"
										srcSet="/imgs/about/cory_rework2.webp"
										alt="Cory Thomas photo"
									/>
									<source
										type="image/png"
										srcSet="/imgs/about/cory_rework2.png"
										alt="Cory Thomas photo"
									/>
									<img
										src="/imgs/about/cory_rework2.png"
										alt="Cory Thomas photo"
									/>
								</picture>
							</div>
							<p>Cory Thomas</p>
							<p className="p-sm">VP Engineering</p>
							<span
								onClick={() => {
									displayModal("VPE");
								}}
								className="t-link extra-top-margin--xx-medium-small"
							>
								View Bio
							</span>
						</div>
					</div>
				</div>
			</section>
			<AboutBioModal
				leaderId={modalState}
				closeSignal={() => {
					closeSignal();
				}}
			/>

			<a className="anchor" id="news"></a>

			<section className="h-section-padding">
				<div className="section-cover putty"></div>
				<div className="container tools-category">
					<h2 className="text-center">News highlights.</h2>
					<div className="container">
						<div className="row extra-top-margin--small">
							<picture>
								<source
									type="image/webp"
									srcSet="/imgs/dot-shape.webp"
									className="dotted-circle-svg"
									alt="Dot shape image"
								/>
								<source
									type="image/png"
									srcSet="/imgs/dot-shape.png"
									className="dotted-circle-svg"
									alt="Dot shape image"
								/>
								<img
									className="dotted-circle-svg"
									src="/imgs/dot-shape.png"
									alt="Dot shape image"
								/>
							</picture>
							<picture>
								<source
									type="image/webp"
									srcSet="/imgs/image_news-dot-pattern-circle@2x.webp"
									className="dotted-circle-right"
									alt="Dot pattern circle image"
									style={{ position: "absolute" }}
								/>
								<source
									type="image/png"
									srcSet="/imgs/image_news-dot-pattern-circle@2x.png"
									className="dotted-circle-right"
									alt="Dot pattern circle image"
									style={{ position: "absolute" }}
								/>
								<img
									className="dotted-circle-right"
									src="/imgs/image_news-dot-pattern-circle@2x.png"
									alt="Dot pattern circle image"
									style={{ position: "absolute" }}
								/>
							</picture>
							<div className="col-md-4 c-card--tool ">
								<div className="c-card__entry c-card--internal-padding c-card--permanent-shadow c-card--full-height">
									<div className="c-top-logo">
										<picture>
											<source
												type="image/webp"
												srcSet="https://copper.objects.frb.io/imgs/about/highlights/businesswire-logo.webp"
												alt="Business Wire logo"
											/>
											<source
												type="image/png"
												srcSet="https://copper.objects.frb.io/imgs/about/highlights/businesswire-logo.png"
												alt="Business Wire logo"
											/>
											<img
												src="https://copper.objects.frb.io/imgs/about/highlights/businesswire-logo.png"
												alt="Business Wire logo"
											/>
										</picture>
									</div>
									<p>Copper acquires engagement analytics platform Sherlock</p>
									<div className="c-card__meta c-card__meta--noline c-card__meta--nopadding ">
										<a
											className="t-link"
											href="https://www.businesswire.com/news/home/20210209005321/en/Copper-Acquires-Sherlock-to-Bring-Actionable-Insights-to-CRM"
										>
											Learn More
										</a>
									</div>
								</div>
							</div>
							<div className="col-md-4 c-card--tool ">
								<div className="c-card__entry c-card--internal-padding c-card--permanent-shadow c-card--full-height">
									<div className="c-top-logo">
										<picture>
											<source
												type="image/webp"
												srcSet="imgs/about/highlights/image_news-logo-techcrunch2@2x.webp"
												alt="Techcrunch news logo"
											/>
											<source
												type="image/png"
												srcSet="imgs/about/highlights/image_news-logo-techcrunch2@2x.png"
												alt="Techcrunch news logo"
											/>
											<img
												src="imgs/about/highlights/image_news-logo-techcrunch2@2x.png"
												alt="Techcrunch news logo"
											/>
										</picture>
									</div>
									<p>
										These 3 enterprise deals show there’s plenty of action in
										smaller acquisitions
									</p>
									<div className="c-card__meta c-card__meta--noline c-card__meta--nopadding ">
										<a
											className="t-link"
											href="https://techcrunch.com/2021/02/10/these-three-enterprise-deals-show-theres-plenty-of-action-in-smaller-acquisitions/"
										>
											Learn More
										</a>
									</div>
								</div>
							</div>
							<div className="col-md-4 c-card--tool last-card">
								<div className="c-card__entry c-card--internal-padding c-card--permanent-shadow c-card--full-height">
									<div className="c-top-logo">
										<picture>
											<source
												type="image/webp"
												srcSet="imgs/about/highlights/image_news-logo-gartner2@2x.webp"
												alt="Gartner news logo"
											/>
											<source
												type="image/png"
												srcSet="imgs/about/highlights/image_news-logo-gartner2@2x.png"
												alt="Gartner news logo"
											/>
											<img
												src="imgs/about/highlights/image_news-logo-gartner2@2x.png"
												alt="Gartner news logo"
											/>
										</picture>
									</div>
									<p>
										Copper added to the Gartner Magic Quadrant for Sales Force
										Automation
									</p>
									<div className="c-card__meta c-card__meta--noline c-card__meta--nopadding ">
										<a
											className="t-link"
											href="https://martechseries.com/technology/copper-positioned-gartners-2019-magic-quadrant-sales-force-automation/"
										>
											Learn More
										</a>
									</div>
								</div>
							</div>
							<div className="col-md-4 c-card--tool ">
								<div className="c-card__entry c-card--internal-padding c-card--permanent-shadow c-card--full-height">
									<div className="c-top-logo">
										<picture>
											<source
												type="image/webp"
												srcSet="imgs/about/highlights/image_news-logo-techcrunch2@2x.webp"
												alt="Techcrunch news logo"
											/>
											<source
												type="image/png"
												srcSet="imgs/about/highlights/image_news-logo-techcrunch2@2x.png"
												alt="Techcrunch news logo"
											/>
											<img
												src="imgs/about/highlights/image_news-logo-techcrunch2@2x.png"
												alt="Techcrunch news logo"
											/>
										</picture>
									</div>
									<p>Copper raises $53M for its Google Workspace-centric CRM</p>
									<div className="c-card__meta c-card__meta--noline c-card__meta--nopadding ">
										<a
											className="t-link"
											href="https://techcrunch.com/2017/09/26/prosperworks-raises-53m-for-its-g-suite-centric-crm-service/"
										>
											Learn More
										</a>
									</div>
								</div>
							</div>
							<div className="col-md-4 c-card--tool ">
								<div className="c-card__entry c-card--internal-padding c-card--permanent-shadow c-card--full-height">
									<div className="c-top-logo">
										<picture>
											<source
												type="image/webp"
												srcSet="imgs/about/highlights/martech-cube-logo.webp"
												alt="MarTech Cube logo"
											/>
											<source
												type="image/png"
												srcSet="imgs/about/highlights/martech-cube-logo.png"
												alt="MarTech Cube logo"
											/>
											<img
												src="imgs/about/highlights/martech-cube-logo.png"
												alt="MarTech Cube logo"
											/>
										</picture>
									</div>
									<p>
										CRM Leader Copper Releases Marketing & Sales Relationships
										Survey
									</p>
									<div className="c-card__meta c-card__meta--noline c-card__meta--nopadding ">
										<a
											className="t-link"
											href="https://www.martechcube.com/crm-leader-copper-releases-marketing-sales-relationships-survey/"
										>
											Learn More
										</a>
									</div>
								</div>
							</div>
							<div className="col-md-4 c-card--tool last-card">
								<div className="c-card__entry c-card--internal-padding c-card--permanent-shadow c-card--full-height">
									<div className="c-top-logo">
										<picture>
											<source
												type="image/webp"
												srcSet="imgs/about/highlights/image_news-logo-forbes2@2x.webp"
												alt="Forbes news logo"
											/>
											<source
												type="image/png"
												srcSet="imgs/about/highlights/image_news-logo-forbes2@2x.png"
												alt="Forbes news logo"
											/>
											<img
												src="imgs/about/highlights/image_news-logo-forbes2@2x.png"
												alt="Forbes news logo"
											/>
										</picture>
									</div>
									<p>
										Copper's Winning 60% Against Salesforce In $52B CRM Market
									</p>
									<div className="c-card__meta c-card__meta--noline c-card__meta--nopadding ">
										<a
											className="t-link"
											href="https://www.forbes.com/sites/petercohan/2018/08/08/coppers-winning-60-against-salesforce-in-52b-crm-market/?sh=3381451a13f8"
										>
											Learn More
										</a>
									</div>
								</div>
							</div>
							<div className="col-md-4 c-card--tool last-card">
								<div className="c-card__entry c-card--internal-padding c-card--permanent-shadow c-card--full-height">
									<div className="c-top-logo">
										<picture>
											<source
												type="image/webp"
												srcSet="imgs/about/highlights/image_news-logo-pcmag2@2x.webp"
												alt="Pcmag news image"
											/>
											<source
												type="image/png"
												srcSet="imgs/about/highlights/image_news-logo-pcmag2@2x.png"
												alt="Pcmag news image"
											/>
											<img
												src="imgs/about/highlights/image_news-logo-pcmag2@2x.png"
												alt="Pcmag news image"
											/>
										</picture>
									</div>
									<p>
										Copper maintains its focus on extreme ease of use for folks
										needing CRM who have also standardized on Google's
										productivity environment.
									</p>
									<div className="c-card__meta c-card__meta--noline c-card__meta--nopadding ">
										<a
											className="t-link"
											href="https://au.pcmag.com/cloud-services-1/48133/copper-review"
										>
											Learn More
										</a>
									</div>
								</div>
							</div>
							<div className="col-md-4 c-card--tool ">
								<div className="c-card__entry c-card--internal-padding c-card--permanent-shadow c-card--full-height">
									<div className="c-top-logo">
										<picture>
											<source
												type="image/webp"
												srcSet="imgs/about/highlights/martechtoday-logo.webp"
												alt="MarTech Today logo"
											/>
											<source
												type="image/png"
												srcSet="imgs/about/highlights/martechtoday-logo.png"
												alt="MarTech Today logo"
											/>
											<img
												src="imgs/about/highlights/martechtoday-logo.png"
												alt="MarTech Today logo"
											/>
										</picture>
									</div>
									<p>
										Will marketing and sales finally align around RevOps and
										agile go-to-market strategies?
									</p>
									<div className="c-card__meta c-card__meta--noline c-card__meta--nopadding ">
										<a
											className="t-link"
											href="https://martech.org/will-marketing-and-sales-finally-align-around-revops-and-agile-go-to-market-strategies/"
										>
											Learn More
										</a>
									</div>
								</div>
							</div>
							<div className="col-md-4 c-card--tool ">
								<div className="c-card__entry c-card--internal-padding c-card--permanent-shadow c-card--full-height">
									<div className="c-top-logo">
										<picture>
											<source
												type="image/webp"
												srcSet="imgs/about/highlights/image_news-logo-forbes2@2x.webp"
												alt=" Forbes news logo"
											/>
											<source
												type="image/png"
												srcSet="imgs/about/highlights/image_news-logo-forbes2@2x.png"
												alt=" Forbes news logo"
											/>
											<img
												src="imgs/about/highlights/image_news-logo-forbes2@2x.png"
												alt=" Forbes news logo"
											/>
										</picture>
									</div>
									<p>
										On CRM: ProsperWorks CRM is now Copper… But That’s Not
										What’s Most Important
									</p>
									<div className="c-card__meta c-card__meta--noline c-card__meta--nopadding ">
										<a
											className="t-link"
											href="https://www.forbes.com/sites/quickerbettertech/2018/07/26/on-crm-prosperworks-crm-is-now-copper-but-thats-not-whats-most-important/?sh=4f5e3777ec35"
										>
											Learn More
										</a>
									</div>
								</div>
							</div>
						</div>
						<div
							className="c-valign--middle mobile-container"
							style={{ alignItems: "center" }}
						>
							<button
								id="display-more-button"
								className="c-button c-button--white"
								style={{ width: "fit-content" }}
							>
								Show More
							</button>
						</div>
					</div>
				</div>
			</section>

			<Script
				src="/js/lazyload.min.js"
				strategy="lazyload"
				onLoad={() => {
					LazyLoad.js(
						[
							"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js",
							"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js",
							"/js/functions.min.{{ staticAssetsVersion }}.js",
						],
						function () {
							//
							$("#display-more-button").on("click", function () {
								$(".last-card").toggleClass("active");
								$("#display-more-button").css("display", "none");
							});

							/*****************
							 * About page our story Carousel
							 *****************/

							var $story_quote_carousel = $(".c-our-story-carousel--content");

							// If there's a carousel on the page...
							if ($story_quote_carousel.length) {
								$story_quote_carousel.on("init", function (slick) {
									$story_quote_carousel.css("max-height", "86%");
								});

								$story_quote_carousel.slick({
									fade: true,
									autoplay: true,
									dots: true,
									infinite: true,
									arrows: false,
								});
							}
						}
					);
				}}
			></Script>

			<section
				id=""
				className="c-single-column  bottom-padding-mobile home-proof "
			>
				<div className="container">
					<div className="col-md-12">
						<div className="text-center extra-bottom-margin--small">
							<h4>Our awards.</h4>
						</div>
						<div className="smb-logo-icons">
							<ul className="logo-section--one-column">
								<li
									id="temp-logo-module--images"
									className="logo-section--images two-cols-mobile"
								>
									<picture>
										<source
											type="image/webp"
											srcSet="imgs/about/awards/image_award-logo_gartner@2x.webp"
											alt="Gartner award logo"
										/>
										<source
											type="image/png"
											srcSet="imgs/about/awards/image_award-logo_gartner@2x.png"
											alt="Gartner award logo"
										/>
										<img
											src="imgs/about/awards/image_award-logo_gartner@2x.png"
											alt="Gartner award logo"
										/>
									</picture>
								</li>
								<li
									id="temp-logo-module--images"
									className="logo-section--images two-cols-mobile"
								>
									<picture>
										<source
											type="image/webp"
											srcSet="imgs/about/awards/image_award-logo_g2@2x.webp"
											alt="G2 award logo"
										/>
										<source
											type="image/png"
											srcSet="imgs/about/awards/image_award-logo_g2@2x.png"
											alt="G2 award logo"
										/>
										<img
											src="imgs/about/awards/image_award-logo_g2@2x.png"
											alt="G2 award logo"
										/>
									</picture>
								</li>
								<li
									id="temp-logo-module--images"
									className="logo-section--images two-cols-mobile"
								>
									<picture>
										<source
											type="image/webp"
											srcSet="imgs/about/awards/image_award-logo_inc@2x.webp"
											alt="Inc award logo"
										/>
										<source
											type="image/png"
											srcSet="imgs/about/awards/image_award-logo_inc@2x.png"
											alt="Inc award logo"
										/>
										<img
											src="imgs/about/awards/image_award-logo_inc@2x.png"
											alt="Inc award logo"
										/>
									</picture>
								</li>
								<li
									id="temp-logo-module--images"
									className="logo-section--images two-cols-mobile"
								>
									<picture>
										<source
											type="image/webp"
											srcSet="imgs/about/awards/image_award-logo_appalie@2x.webp"
											alt="Appalie award logo"
										/>
										<source
											type="image/png"
											srcSet="imgs/about/awards/image_award-logo_appalie@2x.png"
											alt="Appalie award logo"
										/>
										<img
											src="imgs/about/awards/image_award-logo_appalie@2x.png"
											alt="Appalie award logo"
										/>
									</picture>
								</li>
								<li
									id="temp-logo-module--images"
									className="logo-section--images two-cols-mobile"
								>
									<picture>
										<source
											type="image/webp"
											srcSet="imgs/about/awards/image_award-logo_martech@2x.webp"
											alt="Martech award logo"
										/>
										<source
											type="image/png"
											srcSet="imgs/about/awards/image_award-logo_martech@2x.png"
											alt="Martech award logo"
										/>
										<img
											src="imgs/about/awards/image_award-logo_martech@2x.png"
											alt="Martech award logo"
										/>
									</picture>
								</li>
								<li
									id="temp-logo-module--images"
									className="logo-section--images two-cols-mobile"
								>
									<picture>
										<source
											type="image/webp"
											srcSet="imgs/about/awards/image_award-logo_capterra@2x.webp"
											alt="Capterra award logo"
										/>
										<source
											type="image/png"
											srcSet="imgs/about/awards/image_award-logo_capterra@2x.png"
											alt="Capterra award logo"
										/>
										<img
											src="imgs/about/awards/image_award-logo_capterra@2x.png"
											alt="Capterra award logo"
										/>
									</picture>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section
				id="investors-section"
				className="c-cols c-cols--investers c-cols-background--midnight diamond--mint diamond--top--left diamond--z-index-increased"
			>
				<div className="container circle--hot-pink circle--bottom--right circle--z-index-increased">
					<div className="row">
						<div className="col-md-8 order-2">
							<div className="c-image c-image--large c-image--left">
								<picture>
									<source
										type="image/webp"
										srcSet="/imgs/about/image_investor-logos-full@2x.webp"
										alt="Investor logo full"
									/>
									<source
										type="image/png"
										srcSet="/imgs/about/image_investor-logos-full@2x.png"
										alt="Investor logo full"
									/>
									<img
										src="/imgs/about/image_investor-logos-full@2x.png"
										alt="Investor logo full"
									/>
								</picture>
							</div>
						</div>
						<div className="col-md-4 order-1">
							<h2>Our investors and board.</h2>
						</div>
					</div>
				</div>
			</section>

			<section style={{ marginTop: "70px" }}>
				<div className="container">
					<div className="row">
						<div className="col-md-12" style={{ textAlign: "center" }}>
							<p
								className="extra-bottom-margin--xx-medium-small"
								style={{
									fontSize: "28px",
									lineHeight: "36px",
									fontWeight: "bold",
								}}
							>
								Our offices
							</p>
						</div>
					</div>
					<div className="row">
						<div className="location-card-container">
							<div className="location-card col-md-4">
								<div className="logo-container">
									<picture>
										<source
											type="image/webp"
											srcSet="imgs/office-logos/image_location-spot-sanfran@2x.webp"
											alt="Location San Fracisco location"
										/>
										<source
											type="image/png"
											srcSet="imgs/office-logos/image_location-spot-sanfran@2x.png"
											alt="Location San Fracisco location"
										/>
										<img
											src="imgs/office-logos/image_location-spot-sanfran@2x.png"
											alt="Location San Fracisco location"
										/>
									</picture>
								</div>
								<div className="location-content">
									<h4 className="header">San Francisco</h4>
									<div className="paragraph">
										<p className="multiple-2-card-trailer">
											301 Howard St. #600 San Francisco, CA 94105
										</p>
									</div>
								</div>
							</div>
							<div className="location-card col-md-4">
								<div className="logo-container">
									<picture>
										<source
											type="image/webp"
											srcSet="imgs/office-logos/image_location-spot-toronto@2x.webp"
											alt="Location Toronto location"
										/>
										<source
											type="image/png"
											srcSet="imgs/office-logos/image_location-spot-toronto@2x.png"
											alt="Location Toronto location"
										/>
										<img
											src="imgs/office-logos/image_location-spot-toronto@2x.png"
											alt="Location Toronto location"
										/>
									</picture>
								</div>
								<div className="location-content">
									<h4 className="header">Toronto</h4>
									<div className="paragraph">
										<p className="no-top-margin multiple-2-card-trailer">
											1050 King St. West Toronto, ON M6K 0C7
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<a className="anchor" id="careers"></a>

			<section
				id=""
				className="c-quote-callout text-md-center split-img-background-callout c-valign--middle"
			>
				<div className="container">
					<div
						className="row c-align--middle"
						style={{ justifyContent: "center" }}
					>
						<div className="c-quote-callout__copy col-md-5 ">
							<h2>Join us!</h2>
							<p></p>
							<h1></h1>
							<p>
								What we’ve achieved so far is the result of empowering
								ambitious, thoughtful and creative people, with wide ranges of
								life experiences, to do exceptional things. We’re betting the
								future of Copper on that strategy. Embark on a career with us —
								from anywhere.
							</p>
							<p></p>
							<div className="c-hero__buttons">
								<a
									className="c-button c-button--hot-pink"
									target="_blank"
									href="https://jobs.lever.co/copper/"
								>
									See Openings
								</a>
							</div>
						</div>
						<div className="img-companier">
							<picture>
								<source
									type="image/webp"
									srcSet="imgs/about/join-us/image_cta-left@2x.webp"
									className="img-left"
									alt="Logo"
								/>
								<source
									type="image/png"
									srcSet="imgs/about/join-us/image_cta-left@2x.png"
									className="img-left"
									alt="Logo"
								/>
								<img
									className="img-left"
									src="imgs/about/join-us/image_cta-left@2x.png"
									alt="Logo"
								/>
							</picture>
							<picture>
								<source
									type="image/webp"
									srcSet="imgs/about/join-us/image_cta-right@2x.webp"
									className="img-right"
									alt="Logo"
								/>
								<source
									type="image/png"
									srcSet="imgs/about/join-us/image_cta-right@2x.png"
									className="img-right"
									alt="Logo"
								/>
								<img
									className="img-right"
									src="imgs/about/join-us/image_cta-right@2x.png"
									alt="Logo"
								/>
							</picture>
						</div>
					</div>
				</div>
			</section>
		</DefaultPageBase>
	);
}

export async function getStaticProps(context) {
	const res = await getEntryByType("about", "about", true);
	return {
		props: {
			res,
		}, // will be passed to the page component as props
	};
}
