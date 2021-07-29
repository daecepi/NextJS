import { getAllPostsWithSlug, getSingleEntry } from '../lib/api';
import Link from 'next/link';
import Image from 'next/image';

const Entry = ({entry}) => {
    return (
        <div> {entry.title}
        {entry.landingBlocks.map((block, index)=>{
            if(block.typeHandle === 'twoColumn') console.log(block)
            return (
                <div key={index}>
                    <p>{block.typeHandle == 'twoColumn' ? block.typeHandle : "none" }</p>
                    <p>{block.typeHandle == 'threeColumn' ? (
                        <div className='landing-block__threeCol'>
                            {block.entries.map((item)=>{
                                return(
                                    <h1>{item.title}</h1>
                                )
                            })}
                        </div>
                    ) : "none" }</p>
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