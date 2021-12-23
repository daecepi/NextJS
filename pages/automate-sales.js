import Head from "next/head";
import NavigationDefault from "../components/Navigation/NavigationDefault";
import Footer from "../components/Footer/Footer";

import HeroProduct from "../components/Blocks/HeroTypes/HeroProduct";
import CaseStudy from "../components/ProductsComponent/CaseStudy/CaseStudy";
import ProductOneCol from "../components/ProductsComponent/ProductOneCol";
import ProductTwoUp from "../components/ProductsComponent/ProductTwoUp/ProductTwoUp";
import TwoUp from "../components/ProductsComponent/ProductTwoUp/TwoUp";
import ThreeColList from "../components/ProductsComponent/List/ThreeColList";
import FinalCta from "../components/ProductsComponent/FinalCta";

const AutomateSells = () => {
	return (
		<>
			<Head>
				// Responsive meta tag
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				// bootstrap CDN
			</Head>
			<NavigationDefault></NavigationDefault>
			<HeroProduct
				backgroundColor="burgundy"
				eyebrow="automate your process"
				title="Take the busywork out of your day."
				copy="Stop doing repetitive admin work. Copper’s automations take care of tasks like logging calls, meetings, tasks, and activities."
				ctaOneText="Try Free"
				ctaOneUrl="https://www.copper.com/signup"
				ctaTwoText="Request Demo"
				ctaTwoUrl="/demos"
				imageUrl="/imgs/product/191223_Automate_Hero.png"
			/>
			<ProductOneCol
				title="Get more done—by doing less."
				copy={[
					"Spend your time on the tasks in your selling",
					"process that are actually valuable.",
				]}
				imageUrl="/imgs/product/200309_Automate_UI01.png"
			/>
			<ProductTwoUp>
				<TwoUp
					eyebrow="WORKFLOW AUTOMATION"
					title="You set the rules, we’ll do the rest."
					copy="Smart workflows allow you to set the rules that tell Copper to do tasks for you. From automatically creating tasks, to updating contact profiles or changing deal statuses, all you have to do is choose a trigger, and Copper will do the rest."
					imageUrl="/imgs/product/200309_Automate_UI02.png"
					imageWidth="635"
					imageHeight="561"
					reverse={false}
				></TwoUp>
				<TwoUp
					eyebrow="EMAIL AUTOMATION"
					title="More personalized emails, less effort."
					copy="Improve the quality of your email communications, faster, with ready-to-use email templates to answer frequent questions, greet new customers, or promote your service. Save more time by automating nurture sequences and follow-up communications so that you can catch hot leads before they go cold and send your customers the love they deserve."
					imageUrl="/imgs/product/200309_Automate_UI03.png"
					imageWidth="540"
					imageHeight="431"
					bulletLists={[
						"Access email templates right from Gmail",
						"Use shared email templates across your team for consistency",
						"Send emails with a personalized message to multiple recipients with merge fields",
						"Automate all your key customer communications based on CRM status, website intent signals, email behavior and more",
					]}
					bulletsColor="hot-pink"
					reverse={true}
				></TwoUp>
			</ProductTwoUp>
			<CaseStudy
				eyebrow="Success Story"
				imageUrl="/imgs/product/191223_Automate_QuotePhoto.png"
				imageWidth="860"
				imageHeight="1040"
				quote={[
					"Thanks to Copper, I have",
					"a lot more time to focus on high-value work",
				]}
				quoteby="OLGA AVRAMESCU"
				company="STORM VENTURES"
				backgroundColor="light-pink"
			></CaseStudy>
			<ProductTwoUp>
				<TwoUp
					eyebrow="GOOGLE CALENDAR INTEGRATION"
					title="Copper even books meetings for you."
					copy="Stop emailing back and forth when setting up a meeting. Just send a link to your calendar with your availability and let your contact choose a time."
					imageUrl="/imgs/product/200309_Automate_UI04.png"
					imageWidth="540"
					imageHeight="344"
					reverse={false}
				></TwoUp>
			</ProductTwoUp>
			<ThreeColList
				title="Let Copper do the busywork."
				linkUrl="/features"
				linkText="See all features"
			>
				<div className="col-md-4">
					<h4>Workflow Automation</h4>
					<p className="p-sm">
						Copper automatically assigns time-based tasks to you when leads are
						entered or updated.
					</p>
				</div>
				<div className="col-md-4">
					<h4>Recurring Tasks</h4>
					<p className="p-sm">
						Create one recurring task, tell it how often to reoccur, and set a
						reminder relative to the task if you want a heads up when it
						approaches.
					</p>
				</div>
				<div className="col-md-4">
					<h4>Alerts + Notifications</h4>
					<p className="p-sm">
						Copper sends you real-time notifications that indicate when leads or
						contacts need your attention.
					</p>
				</div>

				<div className="col-md-4">
					<h4>Email Templates</h4>
					<p className="p-sm">
						Stop writing emails from scratch. Use prebuilt emails to answer
						frequent questions, greet new customers, or promote your service.
					</p>
				</div>
				<div className="col-md-4">
					<h4>Suggested Contacts</h4>
					<p className="p-sm">
						Copper scrapes your email history to suggest new leads and contacts
						to add to the system.
					</p>
				</div>
				<div className="col-md-4">
					<h4>Task Automation</h4>
					<p className="p-sm">
						When you update an opportunity from one stage to the next you can
						automatically trigger the next set of actions in Copper.
					</p>
				</div>

				<div className="col-md-4">
					<h4>Auto-enrich records</h4>
					<p className="p-sm">
						Copper scrapes the internet for contact information, social
						profiles, personal interests and automatically adds it to the
						record.
					</p>
				</div>
				<div className="col-md-4">
					<h4>Email Capture</h4>
					<p className="p-sm">
						Automatically sync emails and contacts in Gmail to companies in
						Copper—so you have the whole history in one place without having to
						lift a finger.
					</p>
				</div>
				<div className="col-md-4">
					<h4>Meeting scheduler </h4>
					<p className="p-sm">
						Send a meeting request and provide your availability right from
						Copper.
					</p>
				</div>
			</ThreeColList>
			<FinalCta
				title="Now you can do the work that matters."
				copy="Start your 14-day free trial today."
				ctaOneText="Try Free"
				ctaOneUrl="https://www.copper.com/signup"
				ctaTwoText="Request Demo"
				ctaTwoUrl="/demos"
				imageUrl="/imgs/product/191223_Automate_finalplea.png"
			/>

			<Footer />
		</>
	);
};

export default AutomateSells;
