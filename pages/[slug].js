import { getAllPostsWithSlug, getSingleEntry } from '../lib/api';

// Styles definitions
import styles from '../styles/Home.module.css';

import TwoColumnComponent from '../components/TwoColumn/TwoColumn'

import Link from 'next/link';
import Image from 'next/image';

const Entry = ({entry}) => {
    const returnsTwoColumnComponent = () => {

      return <>
        <TwoColumnComponent />
      </>;
    }

    return (
        <div className="bg-green"> <p>{entry.title}</p>
        {entry.landingBlocks.map((block, index)=>{
            console.log(block)
            return (
                <div className="testimonial-block bg-blue relative" key={index}>
                    <p>{block.typeHandle == 'twoColumn' ? block.typeHandle : "none" }</p>
                </div>
            )
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