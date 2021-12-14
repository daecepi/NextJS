import Head from "next/head";
import NavigationDefault from "../components/Navigation/NavigationDefault";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";

import HeroProduct from "../components/Blocks/HeroTypes/HeroProduct";
import CaseStudy from "../components/ProductsComponent/CaseStudy/CaseStudy";
import ProductOneCol from "../components/ProductsComponent/ProductOneCol";
import ProductTwoUp from "../components/ProductsComponent/ProductTwoUp/ProductTwoUp";
import TwoUp from "../components/ProductsComponent/ProductTwoUp/TwoUp";
import ThreeColList from "../components/ProductsComponent/List/ThreeColList";
import ListItem from "../components/ProductsComponent/List/ListItem";
import FinalCta from "../components/ProductsComponent/FinalCta";

const Security = () => {
	return (
		<>
			<Head>
				// Responsive meta tag
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				// bootstrap CDN
			</Head>
			<NavigationDefault></NavigationDefault>
			<HeroProduct
				backgroundColor="graphite"
				eyebrow="SECURITY AND PRIVACY"
				title="Your data is safe and sound."
				copy="We take data protection seriously, Copper’s security controls and data protection are built for businesses of any size."
				ctaOneText="Try Free"
				ctaOneUrl="https://www.copper.com/signup"
				ctaTwoText="Request Demo"
				ctaTwoUrl="/demos"
				imageUrl="/imgs/product/191223_Security_hero.png"
			/>
			<section className="h-section-padding product-page-section">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<pre className="c-eyebrow">DATA protection</pre>
							<h2>Backed up and verified.</h2>
							<p>
								Copper’s data policies and procedures are externally
								validated—so you don’t have to take our word for it.
							</p>
						</div>
						<div className="col-md-7 offset-md-1">
							<div className="extra-bottom-margin--x-small">
								<p className="bold">Global Compliance</p>
								<p>
									Copper has been built to comply with global data privacy laws,
									from the EU to California and beyond. For more information,
									visit our help center and Privacy Policy.
								</p>
							</div>
							<div className="extra-bottom-margin--x-small">
								<p className="bold">Cross-Border Data Transfers</p>
								<p>
									Copper participates in the Privacy Shield program and has
									incorporated the EU’s Standard Contractual Clauses (SCCs) into
									its Terms of Service, so all Copper customers can rest assured
									that their EU-to-US data transfers comply with EU legal
									mandates.
								</p>
							</div>
							<div className="extra-bottom-margin--x-small">
								<p className="bold">Third-Party Tested</p>
								<p>
									Copper regularly subjects its systems to outside vulnerability
									scans and penetration tests to identify, track, and resolve
									vulnerabilities.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ThreeColList
				title="How we do it"
				copy="Our customers trust us with mission-critical business data.  We take this responsibility very seriously, always keeping data protection front-of-mind."
			>
				<div className="col-md-4">
					<h4>User Access Management</h4>
					<p className="p-sm">
						Employee and vendor access to all customer data is tightly regulated
						and restricted to a need-to-know basis using role-based access
						controls.
					</p>
				</div>
				<div className="col-md-4">
					<h4>Two-factor Authentication</h4>
					<p className="p-sm">
						To prevent social engineering attacks, Copper utilizes two-factor
						authentication before granting access to infrastructure that runs
						the Copper service.
					</p>
				</div>
				<div className="col-md-4">
					<h4>Regular User Access Review</h4>
					<p className="p-sm">
						Our employee access to resources is monitored and controlled to make
						sure we’re always up to date with role and employment status
						changes.
					</p>
				</div>
				<div className="col-md-4">
					<h4>Data Security Training</h4>
					<p className="p-sm">
						Copper provides security awareness training for all employees and
						requires all employess to review and sign the Employee Code of
						Conduct.
					</p>
				</div>
				<div className="col-md-4">
					<h4>Data Encryption</h4>
					<p className="p-sm">
						Encryption enhances the security of a message or file by scrambling
						its contents. Copper encrypts your data both in transit and at rest.
					</p>
				</div>
				<div className="col-md-4">
					<h4>Technical Controls</h4>
					<p className="p-sm">
						Copper’s security program is designed to protect its networks and
						systems from malware and unauthorized software and to keep these
						systems up-to-date.
					</p>
				</div>
			</ThreeColList>
			<CaseStudy
				eyebrow="Success Story"
				imageUrl="/imgs/product/191223_Security_QuotePhoto.png"
				imageWidth="860"
				imageHeight="1040"
				quote={[
					"I chose Copper because it has most of the expected modern features, integrates with Gmail and Inbox, and provides a security model that supports a complex business with multiple teams.",
				]}
				quoteby="GOVIND D"
				company="G2 CROWD REVIEW"
				backgroundColor="hot-pink"
			></CaseStudy>

			<section className="c-single-column product-page">
				<div className="container">
					<div className="row">
						<div className="col-md-7 c-single-column__container pull-to-center">
							<h2>Safety first</h2>
							<p>
								At Copper, we work hard to ensure that our customer data remains
								private and secure. If you believe you've discovered a security
								vulnerability in our product, we want to hear from you.
							</p>
							<div className="c-single-column__buttons">
								<Link href="mailto:security@copper.com?subject=Security%20Report">
									<a className="c-button" target="_blank">
										Report an issue
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<FinalCta
				title="You deserve a secure CRM."
				copy="Start your 14-day free trial today."
				ctaOneText="Try Free"
				ctaOneUrl="https://www.copper.com/signup"
				ctaTwoText="Request Demo"
				ctaTwoUrl="/demos"
				imageUrl="/imgs/product/191223_Security_finalplea.png"
			></FinalCta>

			<Footer></Footer>
		</>
	);
};

export default Security;
