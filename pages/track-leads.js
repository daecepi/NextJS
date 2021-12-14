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
import TwoColModule from "../components/Blocks/TwoColModule";

const TrackLeads = () => {
	return (
		<>
			<Head>
				// Responsive meta tag
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				// bootstrap CDN
			</Head>
			<NavigationDefault></NavigationDefault>
			<HeroProduct
				backgroundColor="midnight"
				eyebrow="track leads and deals"
				title="Keep track of every opportunity."
				copy="Capture new leads and track conversations right from your inbox with Copper."
				ctaOneText="Try Free"
				ctaOneUrl="https://www.copper.com/signup"
				ctaTwoText="Request Demo"
				ctaTwoUrl="/demos"
				imageUrl="https://copper.objects.frb.io/imgs/product/hero-track-deals-james.jpg"
			/>
			<section className="c-single-column product-page">
				<div className="container">
					<div className="row">
						<div className="col-md-10 offset-md-1 c-single-column__container">
							<div className="c-product-focus__media">
								<Image
									src="/imgs/product/200309_TrackDeals_UI01.png"
									width="2002"
									height="1211 "
								/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-7 c-single-column__container pull-to-center">
							<h2>Know what’s going on with every deal.</h2>
							<p>
								With Copper you don’t have to worry that you’re leaving money on
								the table. Don’t let a lead slip through the cracks ever again.
							</p>
							<div className="c-single-column__buttons">
								<Link href="/signup">
									<a className="c-button sendUTMsToAmplitude">Try Free</a>
								</Link>
								<Link href="/demos">
									<a className="c-button c-button--outline">Request Demo</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<TwoColModule
				eyebrow="AUTOMATED FOLLOW-UPS"
				richText={
					<div>
						<h2>Never drop the ball.</h2>
						<p>
							Copper speeds up follow-ups with email templates and sets
							reminders for you to stay on top of hot deals and respond to
							customers without missing a beat. Say goodbye to lost deals, and
							hello to keeping customers around longer!
						</p>
						<ul className="bullets--hot-pink">
							<li>Personalized email templates</li>
							<li>Automatically set reminders based off any trigger</li>
							<li>Assign time-based tasks without lifting a finger</li>
						</ul>
					</div>
				}
				image={[
					{
						url: "/imgs/product/200309_TrackDeals_UI02.png",
						title: "Track deals image 4",
					},
				]}
				backgroundColor={[{ slug: "product-page" }]}
				imageWidth="641"
				imageHeight="510"
				imageOrientation="dropRight"
				slug={"track-leads"}
				loopIndex={0}
			/>
			<ProductTwoUp>
				<TwoUp
					eyebrow="ISUAL SALES PIPELINES"
					title="Make sales more visual."
					copy="Know where every lead is at in your sales process and move opportunities to the next stage using the customizable drag-and-drop pipelines."
					imageUrl="/imgs/product/200309_TrackDeals_UI03.png"
					imageWidth="1144"
					imageHeight="735"
					bulletLists={[
						"Track and sort deals by their value amounts",
						"Know the win probability for any deal",
						"Easily see which deals are slipping",
					]}
					reverse={true}
				></TwoUp>
			</ProductTwoUp>
			<CaseStudy
				eyebrow="Success Story"
				imageUrl="/imgs/product/191223_TrackDeals_QuotePhoto.png"
				imageWidth="860"
				imageHeight="1040"
				quote={[
					"We were letting more than 25% of our leads slip through the cracks because we weren’t following up. With Copper, we're capturing more leads in an organized way.",
				]}
				quoteby="MATT CHAPMAN"
				company="SMARTPRESS"
				backgroundColor="indigo"
			></CaseStudy>

			<TwoColModule
				eyebrow="KEEP THINGS MOVING"
				richText={
					<div>
						<h2>
							Always know
							<br />
							your next step.
						</h2>
						<p>
							Stay on top of hot deals and close them faster thanks to Copper’s
							recommendations, which suggest next steps based on upcoming
							meetings, tasks, and overdue email responses.
						</p>
					</div>
				}
				image={[
					{
						url: "/imgs/product/200309_TrackDeals_UI04.png",
						title: "Always know your next step image",
					},
				]}
				backgroundColor={[{ slug: "product-page" }]}
				imageWidth="540"
				imageHeight="560"
				imageOrientation="right"
				slug={"track-leads"}
				loopIndex={0}
			/>
			<ThreeColList
				title="Know what you need to do to close deals faster."
				linkUrl="/features"
				linkText="See all features"
			>
				<div className="col-md-4">
					<h4>Inactivity Monitor</h4>
					<p className="p-sm">
						See the number of days a lead has gone without a follow-up so you
						know when you should reach out.
					</p>
				</div>
				<div className="col-md-4">
					<h4>Deal Length Monitor</h4>
					<p className="p-sm">
						See how long a deal has been in any stage of your sales process so
						you’ll know which ones are dragging and which ones are moving
						forward.
					</p>
				</div>
				<div className="col-md-4">
					<h4>Alerts and Notifications</h4>
					<p className="p-sm">
						Copper sends you real-time notifications that indicate when leads or
						contacts need your attention.
					</p>
				</div>

				<div className="col-md-4">
					<h4>Workflow Automation</h4>
					<p className="p-sm">
						Instead of assigning tasks manually, let Copper automatically
						assigned time-based tasks to teammates when leads are entered or
						updated.
					</p>
				</div>
				<div className="col-md-4">
					<h4>Email Templates</h4>
					<p className="p-sm">
						Stop writing emails from scratch. With ready-to-use email templates
						you can answer frequent questions, greet new customers, or promote
						your service withjust one click.
					</p>
				</div>
				<div className="col-md-4">
					<h4>Custom Fields</h4>
					<p className="p-sm">
						Want to track more specific data about your contacts? Add custom
						fields to record special details that you can use to build better
						relationships.
					</p>
				</div>

				<div className="col-md-4">
					<h4>Activity Feed</h4>
					<p className="p-sm">
						See exactly what’s going on at anytime with the real-time feed of
						all the activities that are going on with your contacts and
						accounts.
					</p>
				</div>
				<div className="col-md-4">
					<h4>Email Open Tracking</h4>
					<p className="p-sm">
						Easily monitor when a hot lead or customer opens your email so you
						can send timely follow-ups.
					</p>
				</div>
				<div className="col-md-4">
					<h4>Custom Opportunity Cards</h4>
					<p className="p-sm">
						Decide what information is valuable for pending deals by customizing
						the visual card with critical deal information.
					</p>
				</div>
			</ThreeColList>
			<FinalCta
				title="Turn more leads into customers."
				copy="Start your 14-day free trial today."
				ctaOneText="Try Free"
				ctaOneUrl="https://www.copper.com/signup"
				ctaTwoText="Request Demo"
				ctaTwoUrl="/demos"
				imageUrl="/imgs/product/191223_TrackDeals_FinalPlea.png"
			></FinalCta>

			<Footer></Footer>
		</>
	);
};

export default TrackLeads;
