import Head from "next/head";
import HeroSinglePages from "../../components/Blocks/HeroTypes/HeroSinglePages";
import Jumble from "../../components/SinglesComponents/Jumble/Jumble";
import Footer from "../../components/Footer/Footer";
import CallOut from "../../components/SinglesComponents/CallOut/CallOut";
import NuumbersSection from "../../components/SinglesComponents/NumbersSection.js/NumbersSection";
import RelatedContent from "../../components/SinglesComponents/RelatedContent/RelatedContent";
import FinalPleaHero from "../../components/SinglesComponents/FinalPleadHero/FinalPleaHero";
import NavigationDefault from "../../components/Navigation/NavigationDefault";
import SingleTwoColCraft from "../../components/SinglesComponents/SingleTwoCol/SingleTwoColCraft";
import TwoColModule from "../../components/Blocks/TwoColModule";
import ProductTwoUp from "../../components/ProductsComponent/ProductTwoUp/ProductTwoUp";
import TwoUp from "../../components/ProductsComponent/ProductTwoUp/TwoUp";

const RealEstateCrm = () => {
	return (
		<>
			<Head>
				// Responsive meta tag
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				// bootstrap CDN
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
					crossOrigin="anonymous"
				/>
				<script
					src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
					integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
					crossOrigin="anonymous"
				></script>
			</Head>
			<NavigationDefault />
			<HeroSinglePages
				pageColorcClass="--real-estate"
				eyebrow="COPPER FOR REAL ESTATE"
				title="A real estate CRM solution that's move-in ready."
				copy="Copper is the leading CRM platform for real estate agents and brokers."
				//imageUrl="/imgs/industry/industry-agency-hero@2x.jpg"
			/>
			<SingleTwoColCraft
				image={[
					{
						url: "/imgs/industry/industry-real-estate-logo.png",
						title: "Industry real estate logo",
					},
				]}
				forcedImage={
					<picture>
						<source
							type="image/webp"
							srcset="/imgs/industry/industry-real-estate-logo.webp"
							alt="Industry real estate logo"
						/>
						<source
							type="image/png"
							srcset="/imgs/industry/industry-real-estate-logo.png"
							alt="Industry real estate logo"
						/>
						<img
							src="/imgs/industry/industry-real-estate-logo.png"
							alt="Industry real estate logo"
							style={{ display: "inline", textAlign: "center" }}
						/>
					</picture>
				}
				webpSource={"/imgs/industry/industry-real-estate-logo.webp"}
				title="The heart of your business."
				description="From commercial real estate to residential, all types of real estate professionals love Copper."
				eyebrow={undefined}
			/>
			<Jumble
				backgroundColor="eggplant"
				eyebrow="BUILT FOR WORKSPACE"
				title="Copper plus Workspace."
				copy="Copper is specifically built for Workspace (previousy G Suite), so you can manage and market new listings, drive traffic to open houses, and nurture repeat clients right from your inbox."
				imageUrl="/imgs/industry/industry-real-estate-IMG-01@2x.png"
				ctaText="Learn More"
				ctaUrl="/g-suite-crm"
			/>
			<ProductTwoUp>
				<TwoUp
					eyebrow="GOODBYE DATA ENTRY"
					title="Move right in—there’s zero data entry with Copper."
					copy="It’s the only real estate CRM software that automatically tracks and inputs every communication—leads, contacts, account details, emails, and more."
					imageUrl="/imgs/industry/Real-Estate-Ui.png"
					imageWidth="538"
					imageHeight="520"
					ctaUrl="/blog/houwzer-case-study"
					ctaText="See how Howzer grew their real estate agent team"
					reverse
				/>
				<TwoUp
					eyebrow="REAL ESTATE PROCESSES"
					title="Nurture long-term client relationships on their timeline."
					copy="Copper lets you build multiple customized processes to track everything you need along the real estate sales funnel - MLS postings, presale construction upgrades, staging hires, and open house schedules."
					imageUrl="/imgs/industry/industry-real-estate-IMG-03@2x.png"
					imageWidth="635"
					imageHeight="511"
					ctaUrl="/blog/reali-case-study"
					ctaText="Watch how Reali strengthens relationships."
				/>
				<TwoUp
					eyebrow="MOBILE CRM"
					title="Manage your listings from anywhere."
					copy="Copper’s Android and iOS apps give you the power of a desktop right in your hand: Keep in touch with clients, add notes, manage your calendar. It’s all there."
					imageUrl="https://copper.objects.frb.io/imgs/industry/real-estate-crm/industry-real-estate-IMG-04@2x-migration.png"
					imageWidth="538"
					imageHeight="653"
					ctaUrl="/blog/houwzer-case-study"
					ctaText="How this Remax realtor utilizes Copper on the road"
					reverse
					removeBottomSpacing
				/>
			</ProductTwoUp>
			{/*<Quote></Quote>*/}
			<CallOut
				title={"Manage more listings with Copper real estate CRM system."}
			/>
			<NuumbersSection
				eyebrow={"BY THE NUMBERS"}
				title={"Copper +<br/>Real Estate Agents"}
				image={[
					{
						url: "/imgs/industry/industry-real-estate-IMG-05@2x.jpg",
						title: "Industry real state image 2",
					},
				]}
				numbersTable={[
					{
						number: "13",
						subText: "hours per user per week saved on manual data entry",
					},
					{
						number: "2",
						subText: "additional listings sold per agent per month",
					},
					{ number: "40%", subText: "faster response time to clients" },
					{ number: "4", subText: "additional clients per agent per month" },
				]}
			/>
			<RelatedContent />
			<FinalPleaHero
				title={`Sell more
                with Copper`}
				copy="No credit card required. Start your 14-day free trial today."
				imageUrl="/imgs/industry/industry-real-estate-final-plea@2x.jpg"
			/>

			<Footer />
		</>
	);
};

export default RealEstateCrm;
