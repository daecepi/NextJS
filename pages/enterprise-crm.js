import Head from "next/head";
import HeroProduct from "../components/Blocks/HeroTypes/HeroProduct";
import Footer from "../components/Footer/Footer";
import NavigationDefault from "../components/Navigation/NavigationDefault";
import CaseStudy from "../components/ProductsComponent/CaseStudy/CaseStudy";
import ProductTwoUp from "../components/ProductsComponent/ProductTwoUp/ProductTwoUp";
import TwoUp from "../components/ProductsComponent/ProductTwoUp/TwoUp";
import Customers from "../components/Sections/Customers/Customers";
import CallOut from "../components/SinglesComponents/CallOut/CallOut";
import FinalPleaHero from "../components/SinglesComponents/FinalPleadHero/FinalPleaHero";
import NumbersSection from "../components/SinglesComponents/NumbersSection.js/NumbersSection";

export default function EnterpriseCRM() {
	let companiesLogos = [
		{ imageUrl: "/imgs/segmentation/google.jpg", width: 127, height: 53 },
		{ imageUrl: "/imgs/segmentation/rhr.jpg", width: 115, height: 53 },
		{ imageUrl: "/imgs/segmentation/ideo.jpg", width: 107, height: 53 },
		{ imageUrl: "/imgs/segmentation/hellofresh.jpg", width: 82, height: 53 },
		{ imageUrl: "/imgs/segmentation/atlassian.jpg", width: 180, height: 53 },
		{ imageUrl: "/imgs/segmentation/softbank.jpg", width: 156, height: 53 },
		{ imageUrl: "/imgs/segmentation/casio.jpg", width: 140, height: 53 },
		{ imageUrl: "/imgs/segmentation/zillow.jpg", width: 180, height: 53 },
	];
	return (
		<>
			<Head>
				<title>Best Enterprise CRM Software | Copper</title>
			</Head>
			<NavigationDefault />
			<HeroProduct
				backgroundColor="segmentation"
				eyebrow="COPPER FOR ENTERPRISE"
				eyebrowDark={true}
				title="A different kind of CRM platform."
				copy="Global enterprises build long-lasting relationships and drive sustainable business growth with Copper."
				ctaOneText="Try Free"
				ctaOneUrl="https://www.copper.com/signup"
				ctaTwoText="Request Demo"
				ctaTwoUrl="/demos"
				imageUrl="/imgs/segmentation/segmentation-enterprise-hero.jpg"
			/>
			<Customers
				title="Companies who have joined the Relationship Era."
				companiesLogos={companiesLogos}
			/>
			<ProductTwoUp>
				<TwoUp
					eyebrow="RECOMMENDED FOR GOOGLE WORKSPACE"
					title="Manage relationships right in Gmail."
					copy="Copper is a different kind of CRM. It’s elegantly designed for Google Workspace, so fast-moving enterprises can build the strong relationships that lead to repeat business."
					imageUrl="/imgs/segmentation/Ent-UI01.png"
					imageWidth="534"
					imageHeight="473"
					reverse={false}
					ctaText="Learn More"
					ctaUrl="/g-suite-crm"
				></TwoUp>
				<TwoUp
					eyebrow="AUTOMATED DATA ENTRY AND WORKFLOWS"
					title="Drive team productivity — automagically."
					copy="Copper eliminates manual data entry, automates every step of your sales process and delivers deal alerts, recommendations right when you need it. Meet the first CRM that drives productivity across the entire organization."
					imageUrl="/imgs/segmentation/segmentation-enterprise-2.png"
					imageWidth="538"
					imageHeight="770"
					reverse={true}
					ctaText="Learn How"
					ctaUrl="/productivity"
				></TwoUp>
				<TwoUp
					eyebrow="POWERFUL INSIGHTS & ANALYTICS"
					title="Business insights from lead to close."
					copy="Copper delivers real-time analytics, dashboards and reports that allow you to monitor your entire funnel from lead conversions to pipeline bottlenecks in real time. With Copper, you’ll have all the metrics you need to make make data-driven decisions."
					imageUrl="/imgs/segmentation/Enterprise-UI03.png"
					imageWidth="540"
					imageHeight="378"
					reverse={false}
					ctaText="Work Together"
					ctaUrl="/insights"
				></TwoUp>
			</ProductTwoUp>
			<CaseStudy
				eyebrow="Success Story"
				imageUrl="/imgs/segmentation/segmentation-enterprise-quote.jpg"
				imageWidth="341"
				imageHeight="450"
				quote={[
					<span>
						Since we started using Copper, we've closed upwards of 10%{" "}
						<strong>more customers</strong>.
					</span>,
				]}
				quoteby="AMY PIENTA"
				company="University of Michigan"
				companyLogo="/imgs/segmentation/segmentation-enterprise-logo.png"
				companyLogoWidth="140"
				companyLogoHeight="35"
				backgroundColor="mint"
			></CaseStudy>

			<CallOut
				title="Strengthen your business relationships with Google Workspace + Copper."
				smallTitle={true}
			/>

			<NumbersSection
				eyebrow="By The Numbers"
				title="Why enterprises love Copper:"
				image={[
					{
						url: "/imgs/segmentation/segementation-enterprise-numbers.jpg",
						title: "Numbers",
					},
				]}
			>
				<div className="row">
					<div className="c-number col-md-5">
						<span className="t-numbers">13</span>
						<p>hours per user per week saved on manual data entry</p>
					</div>
					<div className="c-number col-md-5 offset-md-1">
						<span className="t-numbers">50%</span>
						<p>more accurate reporting</p>
					</div>
				</div>
				<div className="row">
					<div className="c-number col-md-5">
						<span className="t-numbers">43%</span>
						<p>increase in team collaboration when closing deals</p>
					</div>
					<div className="c-number col-md-5 offset-md-1">
						<span className="t-numbers">36%</span>
						<p>faster response time to prospects and clients</p>
					</div>
				</div>
			</NumbersSection>

			<ProductTwoUp>
				<TwoUp
					eyebrow="CASE STUDY"
					title="RHR International builds stronger relationships with Copper and Google Workspace."
					reverse={true}
					imageUrl="/imgs/segmentation/segmentation-enterprise-4.png"
					imageWidth="538"
					imageHeight="505"
					ctaText="Read their story"
					ctaUrl="/blog/rhr-case-study"
				/>
			</ProductTwoUp>

			<FinalPleaHero
				eyebrow="GOODBYE DATA ENTRY"
				title={
					<span>
						Start moving relationships
						<br />
						forward today.
					</span>
				}
				imageUrl="/imgs/segmentation/segmentation-enterprise-final-plea.jpg"
				imageWidth="960"
				imageHeight="720"
			/>
			<Footer />
		</>
	);
}
