import Head from "next/head";
import NavigationDefault from "../../Navigation/NavigationDefault";
import ThreeColBlock from "../../Blocks/ThreeColBlock";
import TestimonialBlock from "../../Blocks/TestimonialBlock";
import CtaBlock from "../../Blocks/CtaBlock";
import TwoColumn from "../../TwoColumn/TwoColumn";
import FooterLanding from "../../Footer/FooterLanding";
import HeroBlock from "../../Blocks/HeroBlock";
import TemporalLogoModule from "../../TemporalLogoModule/TemporalLogoModule";
import PricingPlans from "../../PricingPlans/PricingPlans";
import OneColumnBlock from "../../Blocks/OneColumnBlock";
import OneColumnSimpleFullScreen from "../../Blocks/OneColumnSimpleFullScreen";
import SimpleTwoColColorConfined from "../../Blocks/SimpleTwoColColorConfined";
import SimpleTwoColOrientedTop from "../../Blocks/SimpleTowColOrientedTop";
import JumbleModule from "../../Blocks/JumbleModule";
import TestimonialSlider from "../../Blocks/TestimonialSlider";
import SpecialTestimonial from "../../Blocks/SpecialTestimonial";
import Details from "../../Blocks/Details";
import EmbeddedVideo from "../../Blocks/EmbeddedVideo";
import LogoModule from "../../Blocks/LogoModule";
import CustomSection from "../../Blocks/CustomSection";
import LatestWebinarModule from "../../Blocks/LatestWebinarModule";
import UnderlineNumbers from "../../Blocks/UnderlineNumber";
import LeadBottomSection from "../../Blocks/LeadBottomSection";
import ResourcesModule from "../../Blocks/ResourcesModule";

const Products = ({ entry }) => {
	return (
		<div className="mt-24 ">
			<Head>
				<title>Copper CRM</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavigationDefault />

			{/* {entry} */}

			{entry.landingBlocks.map((block) => {
				return (
					<div>
						<>
							{block.typeHandle == "hero" ? (
								<HeroBlock slug={entry.slug} hero={block} />
							) : null}
						</>
						<>
							{block.typeHandle == "threeColumn" ? (
								<ThreeColBlock
									slug={entry.slug}
									eyebrow={block.eyebrow}
									title={block.header}
									entries={block.entries}
								/>
							) : null}
						</>

						<>
							{block.typeHandle == "cta" ? (
								<CtaBlock
									slug={entry.slug}
									header={block.header}
									subHeader={block.subHeader}
									ctas={block.cta}
								/>
							) : null}
						</>

						<>
							{block.typeHandle == "oneColumn" ? (
								<OneColumnBlock slug={entry.slug} {...block} />
							) : null}
						</>

						<>
							{block.typeHandle == "oneColumnSimpleFullScreenImage" ? (
								<OneColumnSimpleFullScreen
									slug={entry.slug}
									backgroundImageClass={block.backgroundImageClass}
									copy={block.copy}
									ctaText={block.ctaText}
									ctaUrl={block.ctaUrl}
								/>
							) : null}
						</>

						<>
							{block.typeHandle == "twoColumn" ? (
								<TwoColumn
									slug={entry.slug}
									title={block.title}
									copy={block.copy}
									eyebrow={block.eyebrow}
									image={block.image}
									imageOrientation={block.imageOrientation}
								/>
							) : null}
						</>

						<>
							{block.typeHandle == "simpleTwoColOrientedTop" ? (
								<SimpleTwoColOrientedTop
									slug={entry.slug}
									image={block.image}
									copy={block.copy}
								/>
							) : null}
						</>

						<>
							{block.typeHandle == "createSimpleTwoColColorConfined" ? (
								<SimpleTwoColColorConfined
									slug={entry.slug}
									backgroundImageClass={block.backgroundImageClass}
									copy={block.copy}
									ctaText={block.ctaText}
									ctaUrl={block.ctaUrl}
								/>
							) : null}
						</>

						<>
							{block.typeHandle == "jumbleModule" ? (
								<JumbleModule
									slug={entry.slug}
									backgroundImageClass={block.backgroundImageClass}
									copy={block.copy}
									ctaText={block.ctaText}
									ctaUrl={block.ctaUrl}
								/>
							) : null}
						</>

						<>
							{block.typeHandle == "testimonial" ? (
								<TestimonialBlock
									eyebrow={block.eyebrow}
									image={block.image}
									quote={block.quote}
									author={block.author}
									jobtitle={block.jobTitle}
								/>
							) : null}
						</>

						<>
							{block.typeHandle == "testimonialSlider" ? (
								<TestimonialSlider
									slug={entry.slug}
									eyebrow={block.eyebrow}
									contentCopy={block.contentCopy}
									sliderContent={block.sliderContent}
								/>
							) : null}
						</>

						<>
							{block.typeHandle == "specialTestimonial" ? (
								<SpecialTestimonial slug={entry.slug} text={block.text} />
							) : null}
						</>

						<>
							{block.typeHandle == "details" ? (
								<Details
									slug={entry.slug}
									richText={block.richText}
									stickyNavName={block.stickyNavName}
								/>
							) : null}
						</>

						<>
							{block.typeHandle == "embeddedVideo" ? (
								<EmbeddedVideo
									slug={entry.slug}
									embeddedVideoSnippet={block.embeddedVideoSnippet}
									stickyNavName={block.stickyNavName}
								/>
							) : null}
						</>

						<>
							{block.typeHandle == "logoSection" ? (
								<LogoModule
									slug={entry.slug}
									eyebrow={block.eyebrow}
									logoTitle={block.logoTitle}
									subtitle={block.subtitle}
									copyText={block.copyText}
									logoImages={block.logoImages}
									ctas={block.cta}
									backgroundColor={block.backgroundColor}
									layout={block.layout}
									twoColSettings={block.twoColSettings}
									oneColSettings={block.oneColSettings}
									stickyNavName={block.stickyNavName}
								/>
							) : null}
						</>

						<>
							{block.typeHandle == "customSection" ? (
								<CustomSection
									slug={entry.slug}
									backgroundColor={block.backgroundColor}
									settings={block.settings}
									layout={block.layout}
								/>
							) : null}
						</>

						<>
							{block.typeHandle == "latestWebinarModule" ? (
								<LatestWebinarModule
									slug={entry.slug}
									header={block.header}
									removeHeader={block.removeHeader}
									addPaddingBottom={block.addPaddingBottom}
								/>
							) : null}
						</>

						<>
							{block.typeHandle == "temporalLogoModule" ? (
								<TemporalLogoModule
									slug={entry.slug}
									header={block.header}
									logos={block.logos}
									sameSpacing={block.sameSpacing}
								/>
							) : null}
						</>

						<>
							{block.typeHandle == "underlineNumbers" ? (
								<UnderlineNumbers
									slug={entry.slug}
									image={block.image}
									eyebrow={block.eyebrow}
									copy={block.copy}
									numbersTable={block.numbersTable}
								/>
							) : null}
						</>

						<>
							{block.typeHandle == "pricingPlans" ? (
								<PricingPlans
									slug={entry.slug}
									header={block.header}
									subHeader={block.subHeader}
									pricingPlans={block.pricingPlans}
									reducePadding={block.reducePadding}
									linkToNav={block.linkToNav}
									stickyNavName={block.stickyNavName}
									removeCtas={block.removeCtas}
								/>
							) : null}
						</>

						<>
							{block.typeHandle == "resources" ? (
								<ResourcesModule slug={entry.slug} text={block.text} />
							) : null}
						</>

						<>
							{block.typeHandle == "leadBottomSection" ? (
								<LeadBottomSection slug={entry.slug} copy={block.copy} />
							) : null}
						</>
					</div>
				);
			})}

			{/* <Image
            src={entry.image[0].optimizedLandingImages.srcet}
            alt="Picture of the author"
            width={500}
            height={500}
        /> */}
			<FooterLanding></FooterLanding>
		</div>
	);
};

export default Products;
