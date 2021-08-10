import { getAllPostsWithSlug, getSingleEntry } from '../lib/api';

// Styles definitions
import styles from '../styles/Home.module.css';

import TwoColumnComponent from '../components/TwoColumn/TwoColumn'

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import ThreeColBlock from '../components/Blocks/ThreeColBlock';
import TestimonialBlock from '../components/Blocks/TestimonialBlock';
import TextLink from '../components/CTAS/TextLink';
import NavigationDefault from '../components/Navigation/NavigationDefault'
import CtaBlock from '../components/Blocks/CtaBlock';

const Entry = ({entry}) => {
    const returnsTwoColumnComponent = () => {

      return <>
        <TwoColumnComponent />
      </>;
    }

    return (
        <div className='mt-24 '> 
            <NavigationDefault/>

            <Head>
            <title>Copper CRM</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            {entry.title}
            <TextLink url='https://google.com' text='test link' />
            {entry.landingBlocks.map((block)=>{
                console.log(block)
                return (
                    <div>
                        <>{block.typeHandle == 'twoColumn' ? block.typeHandle : null }</>

                        <>{block.typeHandle == 'threeColumn' ? (
                            <ThreeColBlock eyebrow={block.eyebrow} title={block.header} entries={block.entries} />
                        ) : "none" }</>
                        <>{block.typeHandle == 'testimonial' ? (
                            <TestimonialBlock   eyebrow={block.eyebrow} 
                                                image={block.image} quote={block.quote} 
                                                author={block.author} 
                                                jobtitle={block.jobTitle} />
                        ) : null }</>

                        <>{block.typeHandle == 'cta' ? (
                            <CtaBlock header={block.header} subheader={block.subHeader} ctas={block.cta} />
                        ) : null }</>
                        

                    </div>
                )
                if(block.typeHandle == 'twoColumn'){
                    return (<div>test</div>)
                }
            })}
        
        {/* <Image
            src={entry.image[0].optimizedLandingImages.srcet}
            alt="Picture of the author"
            width={500}
            height={500}
        /> */}
      </div>
        
    )
}

export default Entry;

// export async function getStaticPaths() {
//     const entries = await getAllPostsWithSlug();
//     const paths = entries.map((post) => ({
//         params: { slug: post.slug },
//       }))
//     return {
//       paths,
//       fallback: true // See the "fallback" section below
//     };
// }

// export async function getStaticProps({ params }) {
//     const entry = await getSingleEntry(params.slug)
//     return {
//         props: {
//             entry,
//         },
//         revalidate: 1,
//     };
// }

export async function getServerSideProps({params}) {
    const entry = await getSingleEntry(params);
  
    if (!entry) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
          entry
      }, // will be passed to the page component as props
    }
}