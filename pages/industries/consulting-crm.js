import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HeroSinglePages from "../../components/Blocks/HeroTypes/HeroSinglePages";
import Footer from "../../components/Footer/Footer";
import NavigationDefault from "../../components/Navigation/NavigationDefault";
import ProductTwoUp from "../../components/ProductsComponent/ProductTwoUp/ProductTwoUp";
import TwoUp from "../../components/ProductsComponent/ProductTwoUp/TwoUp";
import CallOut from "../../components/SinglesComponents/CallOut/CallOut";
import FinalPleaHero from "../../components/SinglesComponents/FinalPleadHero/FinalPleaHero";
import Jumble from "../../components/SinglesComponents/Jumble/Jumble";
import NumbersSection from "../../components/SinglesComponents/NumbersSection.js/NumbersSection";
import Quote from "../../components/SinglesComponents/Quote/Quote";
import RelatedContent from "../../components/SinglesComponents/RelatedContent/RelatedContent";
import SingleTwoColCraft from "../../components/SinglesComponents/SingleTwoCol/SingleTwoColCraft";

export default function ConsultingCrm() {
	return (
		<>
			<Head>
				<title>Best CRM For Consultants | Copper</title>
			</Head>
			<NavigationDefault />

			<HeroSinglePages
				pageColorcClass="--consulting"
				eyebrow="COPPER FOR CONSULTING COMPANIES"
				title="Manage relationships from deal to project."
				copy="Build strong and lasting client relationships with Copper."
				eyebrowLight
			/>

			<SingleTwoColCraft
				image={[
					{
						url: "/imgs/industry/industry-consulting-logo-cloud@2x.png",
						title: "Consulting logo",
					},
				]}
				forcedImage={
					<picture>
						<source
							type="image/webp"
							srcSet="/imgs/industry/industry-consulting-logo-cloud@2x.webp"
							alt="Consulting logo"
						/>
						<source
							type="image/png"
							srcSet="/imgs/industry/industry-consulting-logo-cloud@2x.png"
							alt="Consulting logo"
						/>
						<Image
							src="/imgs/industry/industry-consulting-logo-cloud@2x.png"
							alt="Consulting logo"
							style={{ display: "inline", textAlign: "center" }}
							width={350}
							height={327}
						/>
					</picture>
				}
				webpSource={"/imgs/industry/Logo-cloud.webp"}
				title="2000+ business services use a different kind of CRM."
				description="Consulting businesses of all sizes are happier with Copper."
				eyebrow={undefined}
				//linkText="See customer stories"
				// linkUrl="/customers"
			/>

			<Jumble
				backgroundColor="eggplant"
				eyebrow="ONE CENTRAL SYSTEM"
				title="Finally, your relationships organized."
				copy="You’ve got a lot of clients to juggle. Copper automatically organizes client and project information in one place—leads, deals, proposals, contracts, resources."
				imageUrl="/imgs/industry/consulting-02.png"
			/>

			<ProductTwoUp>
				<TwoUp
					eyebrow="ZERO DATA ENTRY"
					title="Less busy work, more revenue."
					copy="Relationships are your bread and butter. Copper is the only CRM that automatically tracks and inputs leads, contacts, account details, email history and more."
					reverse
					imageUrl="/imgs/industry/consulting-03.png"
					imageWidth="538"
					imageHeight="518"
					ctaText="How RHR manages relationships with Copper."
					ctaUrl="resources/rhr-case-study"
				/>
				<TwoUp
					eyebrow="STREAMLINED WORKFLOWS"
					title="Multiple funnels: from deals to projects"
					copy="Copper streamlines deal management so your client relationship teams can deliver on sales goals and uplevel customer satisfaction."
					imageUrl="/imgs/industry/industry-consulting-IMG-03@2x.png"
					imageWidth="540"
					imageHeight="433"
					dropRight
				/>
			</ProductTwoUp>
			<Quote
				quote="Copper helps us sell faster and get higher-quality clients because of the way it allows people to share information and contacts across teams."
				quoteBy="SARAH GILBERT"
				quotePosition="Director of Operations and IT, RHR International"
				imageUrl="/imgs/industry/industry-consulting-customer.jpg"
				imageWidth="325"
				imageHeight="423"
				bgColor="eggplant"
			/>
			<CallOut
				title={
					<>
						Build stronger relationships
						<br />
						with Copper.
					</>
				}
			/>
			<NumbersSection
				eyebrow="By The Numbers"
				title="Copper + Consultants"
				image={[
					{
						url: "/imgs/industry/industry-consulting-IMG-04@2x.jpg",
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
			<RelatedContent
				eyebrow="Resources"
				cards={[
					{
						eyebrow: "CASE STUDY",
						title:
							"Copper and Google Workspace help RHR International Boost Customer Relations and Sales",
						ctaUrl: "/resources/rhr-case-study",
						image: "/imgs/industry/industry-consulting-blog-01@2x.jpg",
					},
					{
						eyebrow: "RELATIONSHIP ERA",
						title: "The New Wave of Customer Relationship Management",
						ctaUrl: "/resources/new-wave-customer-relationship-management",
						image: "/imgs/industry/industry-consulting-blog-02@2x.jpg",
					},
					{
						eyebrow: "CASE STUDY",
						title:
							"Zivelo Accelerates Their Sales and BD Efforts by Leveraging Copper’s Deep Integration with Google Apps",
						ctaUrl: "/7-ways-to-get-the-most-out-of-your-agencys-crm",
						image: "/imgs/industry/industry-consulting-blog-03@2x.jpg",
					},
				]}
			/>
			<FinalPleaHero
				title="Grow lasting relationships"
				copy="No credit card required. Start your 14-day free trial today."
				imageUrl="/imgs/industry/industry-consulting-final-plea@2x.jpg"
				imageWidth="960"
				imageHeight="720"
			/>
			<Footer />
		</>
	);
}
