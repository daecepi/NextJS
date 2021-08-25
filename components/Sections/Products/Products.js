import Head from 'next/head';
import NavigationDefault from '../../Navigation/NavigationDefault';
import ThreeColBlock from '../../Blocks/ThreeColBlock';
import TestimonialBlock from '../../Blocks/TestimonialBlock';
import CtaBlock from '../../Blocks/CtaBlock';
import TwoColumn from '../../TwoColumn/TwoColumn'
import FooterLanding from '../../Footer/FooterLanding';
import HeroBlock from '../../Blocks/HeroBlock';

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
              {block.typeHandle == "cta" ? (
                <CtaBlock
                  header={block.header}
                  subHeader={block.subHeader}
                  ctas={block.cta}
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