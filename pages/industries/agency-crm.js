import Head from "next/head";
import Link from "next/link";
import HeroSinglePages from "../../components/Blocks/HeroTypes/HeroSinglePages";
import Jumble from "../../components/SinglesComponents/Jumble/Jumble";
import Footer from "../../components/Footer/Footer";
import Quote from "../../components/SinglesComponents/Quote/Quote";
import CallOut from "../../components/SinglesComponents/CallOut/CallOut";
import NuumbersSection from "../../components/SinglesComponents/NumbersSection.js/NumbersSection";
import RelatedContent from "../../components/SinglesComponents/RelatedContent/RelatedContent";
import FinalPleaHero from "../../components/SinglesComponents/FinalPleadHero/FinalPleaHero";
import NavigationDefault from "../../components/Navigation/NavigationDefault";
import TwoColModule from "../../components/Blocks/TwoColModule";
import ProductTwoUp from "../../components/ProductsComponent/ProductTwoUp/ProductTwoUp";
import TwoUp from "../../components/ProductsComponent/ProductTwoUp/TwoUp";

const AgencyCrm = () => {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<NavigationDefault></NavigationDefault>
			<HeroSinglePages
				pageColorcClass="--agency"
				eyebrow="COPPER FOR CREATIVE AGENCIES"
				title="CRM minus the creative blocks."
				copy="Digital and creative agencies get more done and make their clients happier with Copper."
				imageUrl="/imgs/industry/industry-agency-hero@2x.jpg"
			/>
			<TwoColModule
				richText={
					<div>
						<h2 className=" mb-2">
							900+ digital and creative agencies, big and small, love Copper.
						</h2>

						<Link href="/customers">
							<a className="t-link" target="_blank">
								See customer stories
							</a>
						</Link>
					</div>
				}
				image={[
					{
						url: "/industries/industry-agency-logo-cloud@2x.png",
						title: "Track deals image 4",
					},
				]}
				backgroundColor={[{ slug: "product-page" }]}
				imageWidth="350"
				imageHeight="298"
				imageOrientation="dropRight"
				slug={"track-leads"}
				loopIndex={0}
			/>
			<Jumble
				backgroundColor="hot-pink"
				eyebrow="agency CRM"
				title="Strengthen your relationships & do your best work."
				copy="Copper is a different kind of CRM. It’s elegantly designed for Google Workspace, so fast-moving digital agencies can build the strong relationships that lead to repeat business."
				imageUrl="https://copper.objects.frb.io/imgs/industry/agencies-crm/industry-agency-IMG-01@2x.png"
				ctaText="Learn More"
				ctaUrl="/g-suite-crm"
			/>
			<ProductTwoUp>
				<TwoUp
					eyebrow="CENTRALIZE RELATIONSHIPS"
					title="Every little detail, 100% organized."
					copy="Creative projects are complex—lots of people, lots of files, lots of opinions. Copper automatically captures and connects everything so nothing falls through the cracks and you can concentrate on creative work, not busy work."
					imageUrl="https://copper.objects.frb.io/imgs/industry/agencies-crm/industry-agency-IMG-02@2x.png"
					imageWidth="538"
					imageHeight="605"
					ctaText="See how Advoc8 does it."
					ctaUrl="/blog/advoc8-agency-case-study"
					reverse={true}
				/>
				<TwoUp
					eyebrow="REAL-TIME COLLABORATION"
					title="Up-to-the-minute insights on everybody you interact with."
					copy="Copper's activity feed gives everyone on your team visibility into real-time customer and seller moments. Trust us, your account managers and deal makers will love it."
					imageUrl="https://copper.objects.frb.io/imgs/industry/agencies-crm/industry-agency-insights.png"
					imageWidth="429"
					imageHeight="604"
					ctaText="Learn More"
					ctaUrl="/collaboration"
					reverse={false}
					dropRight={true}
				/>
			</ProductTwoUp>
			<Quote
				quote="Copper has created transparency that has resonated throughout our entire company."
				quoteby="Nicholas Markovitz"
				quotePosition="Managing Director, Creative Brands"
				ctaUrl="/blog/creative-brands-case-study"
				ctaText="See how creative brands did it"
				imageUrl="/imgs/industry/industry-agency-customer.jpg"
				imageWidth="676"
				imageHeight="880"
				bgColor="graphite"
			></Quote>
			<CallOut title="Create something awesome, together."></CallOut>
			<NuumbersSection
				eyebrow="By The Numbers"
				title="Copper + Digital Agencies"
				image={[
					{
						url: "/imgs/industry/industry-agency-IMG-04@2x.jpg",
						title: "Industry real state image 2",
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
			</NuumbersSection>
			<RelatedContent
				eyebrow="Resources"
				cards={[
					{
						eyebrow: "Case Study",
						title: "How an NYC Agency Beats the Competition with Automation",
						url: "/blog/jump-450-agency-crm-case-study",
						image: "/imgs/industry/jump-blog-01.png",
						imageWidth: "899",
						imageHeight: "581",
					},
					{
						eyebrow: "Copper Blog",
						title: "How to Build Long-lasting Client/Agency Relationships",
						url: "/blog/agency-client-relationships",
						image: "/imgs/industry/industry-agency-blog-02@2x.jpg",
						imageWidth: "899",
						imageHeight: "581",
					},
					{
						eyebrow: "BEST PRACTICES",
						title: "Top 6 Things to Look for in a CRM for Agencies",
						url: "/blog/crm-agencies",
						image: "/imgs/industry/industry-agency-blog-03@2x.jpg",
						imageWidth: "899",
						imageHeight: "581",
					},
				]}
			></RelatedContent>
			<FinalPleaHero
				title={
					<div>
						Retain more
						<br /> clients today
					</div>
				}
				copy="No credit card required. Start your 14-day free trial today."
				imageUrl="/imgs/industry/industry-agency-final-plea.jpg"
				imageWidth="1140"
				imageHeight="1200"
			/>

			<Footer></Footer>
		</>
	);
};

export default AgencyCrm;
