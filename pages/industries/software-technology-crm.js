import Head from "next/head";
import Image from "next/image";
import HeroSinglePages from "../../components/Blocks/HeroTypes/HeroSinglePages";
import Jumble from "../../components/SinglesComponents/Jumble/Jumble";
import Footer from "../../components/Footer/Footer";
import CallOut from "../../components/SinglesComponents/CallOut/CallOut";
import NuumbersSection from "../../components/SinglesComponents/NumbersSection.js/NumbersSection";
import RelatedContent from "../../components/SinglesComponents/RelatedContent/RelatedContent";
import FinalPleaHero from "../../components/SinglesComponents/FinalPleadHero/FinalPleaHero";
import NavigationDefault from "../../components/Navigation/NavigationDefault";
import SingleTwoColCraft from "../../components/SinglesComponents/SingleTwoCol/SingleTwoColCraft";
import ProductTwoUp from "../../components/ProductsComponent/ProductTwoUp/ProductTwoUp";
import TwoUp from "../../components/ProductsComponent/ProductTwoUp/TwoUp";

export default function SoftwareTechCrm({}) {
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
				pageColorcClass="--tech"
				eyebrow="COPPER FOR TECHNOLOGY COMPANIES"
				title="CRM minus the sales busy work."
				copy="Big and small software companies grow and scale faster with Copper."
				//imageUrl="/imgs/industry/industry-agency-hero@2x.jpg"
			/>
			<SingleTwoColCraft
				image={[
					{
						url: "/imgs/industry/Logo-cloud.png",
						title: "Cloud logo",
					},
				]}
				forcedImage={
					<picture>
						<source
							type="image/webp"
							srcset="/imgs/industry/Logo-cloud.webp"
							alt="Cloud logo"
						/>
						<source
							type="image/png"
							srcset="/imgs/industry/Logo-cloud.png"
							alt="Cloud logo"
						/>
						<Image
							src="/imgs/industry/Logo-cloud.png"
							alt="Cloud logo"
							style={{ display: "inline", textAlign: "center" }}
							width={350}
							height={263}
						/>
					</picture>
				}
				webpSource={"/imgs/industry/Logo-cloud.webp"}
				title="A different kind of CRM for innovators and fast-movers."
				description="Software and technology companies at every stage of growth love Copper."
				eyebrow={undefined}
				//linkText="See customer stories"
				// linkUrl="/customers"
			/>
			<Jumble
				backgroundColor="graphite"
				eyebrow="BUILT FOR GOOGLE WORKSPACE"
				title="The CRM for Google Workspace."
				copy="Copper is designed and built for Google Workspace so your team can do everything—from adding leads to closing deals right from your inbox."
				imageUrl="/imgs/industry/industry-tech-IMG-01-update@2x.png"
				ctaText="Learn More"
				ctaUrl="/g-suite-crm"
			/>

			<ProductTwoUp>
				<TwoUp
					eyebrow="ZERO DATA ENTRY"
					title="Focus on deals, not on data entry."
					copy="Copper automatically inputs leads, contacts, account details, email history and more, so you can spend your time closing deals, not copying and pasting."
					imageUrl="/imgs/industry/tech_ui-01.png"
					imageWidth="540"
					imageHeight="521"
					ctaUrl="/blog/lumapps-case-study"
					ctaText="LumApps manages 2,000% lead growth with Copper"
					reverse
				/>
				<TwoUp
					eyebrow="DATA ACCURACY"
					title="Data you need to make the sale."
					copy="Copper creates clear and elegant reports that make it easy for everyone on your team to get the insights they need to close a deal: a bird’s eye view, a deep dive or anything in between."
					imageUrl="/imgs/industry/Tech_UI02.png"
					imageWidth="540"
					imageHeight="430"
					ctaUrl="/blog/onesupport-growth-case-study"
					ctaText="How OneSupport grew subscribers by 173%"
					dropRight
					removeBottomSpacing
				/>
			</ProductTwoUp>
			{/*<Quote></Quote>*/}
			<CallOut title={"Because you have work to do."} />
			<NuumbersSection
				eyebrow={"BY THE NUMBERS"}
				title={"Copper +<br/>Real Estate Agents"}
				image={[
					{
						url: "/imgs/industry/industry-tech-IMG-04@2x.jpg",
						title: "Industry tech image",
					},
				]}
				numbersTable={[
					{
						number: "13",
						subText: "hours per user per week saved on manual data entry",
					},
					{
						number: "50%",
						subText: "more accurate reporting",
					},
					{
						number: "43%",
						subText: "increase in team collaboration when closing deals",
					},
					{
						number: "36%",
						subText: "faster response time to prospects and clients",
					},
				]}
			/>
			<RelatedContent />
			<FinalPleaHero
				title={`Goodbye data entry
Hello, Copper.`}
				copy="No credit card required. Start your 14-day free trial today."
				imageUrl="/imgs/industry/industry-tech-final-plea@2x.jpg"
			/>

			<Footer />
		</>
	);
}
