import Head from 'next/head';
import NavigationDefault from '../../Navigation/NavigationDefault';
import ThreeColBlock from '../../Blocks/ThreeColBlock';
import TestimonialBlock from '../../Blocks/TestimonialBlock';
import CtaBlock from '../../Blocks/CtaBlock';
import TwoColumn from '../../TwoColumn/TwoColumn'
import FooterLanding from '../../Footer/FooterLanding';
import HeroBlock from '../../Blocks/HeroBlock';
import TemporalLogoModule from '../../TemporalLogoModule/TemporalLogoModule';
import PricingPlans from '../../PricingPlans/PricingPlans'
import OneColumnBlock from '../../Blocks/OneColumnBlock';
import OneColumnSimpleFullScreen from '../../Blocks/OneColumnSimpleFullScreen';
import SimpleTwoColColorConfined from '../../Blocks/SimpleTwoColColorConfined';
import SimpleTwoColOrientedTop from '../../Blocks/SimpleTowColOrientedTop';
import JumbleModule from '../../Blocks/JumbleModule';
import testimonialSlider from '../../Blocks/TestimonialSlider';

const Products = ({entry}) => {
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
                <HeroBlock
                  hero={block}
                />
              ) : null}
            </>
            <>
              {block.typeHandle == "threeColumn" ? (
                <ThreeColBlock
                  eyebrow={block.eyebrow}
                  title={block.header}
                  entries={block.entries}
                />
              ) : null}
            </>

            <>
              {block.typeHandle == "cta" ? (
                <CtaBlock
                  header={block.header}
                  subHeader={block.subHeader}
                  ctas={block.cta}
                />
              ) : null}
            </>
              
            <>
              {block.typeHandle == "oneColumn" ? (
                <OneColumnBlock
                  {...block}
                />
              ) : null}
            </>

            <>
              {block.typeHandle == "oneColumnSimpleFullScreenImage" ? (
                <OneColumnSimpleFullScreen
                  backgroundImageClass = {block.backgroundImageClass}
                  copy={block.copy}
                  ctaText={block.ctaText}
                  ctaUrl={block.ctaUrl}
                />
              ) : null}
            </>

            <>
              {block.typeHandle == "twoColumn" ? (
                <TwoColumn
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
                  image = {block.image}
                  copy={block.copy}
                />
              ) : null}
            </>

            <>
              {block.typeHandle == "createSimpleTwoColColorConfined" ? (
                <SimpleTwoColColorConfined
                  backgroundImageClass = {block.backgroundImageClass}
                  copy={block.copy}
                  ctaText={block.ctaText}
                  ctaUrl={block.ctaUrl}
                />
              ) : null}
            </>

            <>
              {block.typeHandle == "jumbleModule" ? (
                <JumbleModule
                  backgroundImageClass = {block.backgroundImageClass}
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
                <testimonialSlider
                  eyebrow={block.eyebrow}
                  contentCopy ={block.contentCopy}
                  sliderContent={block.sliderContent}
                />
              ) : null}
            </>

            <>
                {block.typeHandle == "temporalLogoModule" ? (
                  <TemporalLogoModule 
                    header={block.header}
                    logos={block.logos}
                    sameSpacing={block.sameSpacing} 
                  />
                ) : null}
            </>
            <>
                {block.typeHandle == "pricingPlans" ? (
                  <PricingPlans 
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
          </div>
        );
        if (block.typeHandle == "twoColumn") {
          return <div>test</div>;
        }
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