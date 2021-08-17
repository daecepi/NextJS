import { getAllPostsWithSlug, getSingleEntry } from "../lib/api";

// Styles definitions
import styles from "../styles/Home.module.css";

import TwoColumnComponent from "../components/TwoColumn/TwoColumn";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ThreeColBlock from "../components/Blocks/ThreeColBlock";
import TestimonialBlock from "../components/Blocks/TestimonialBlock";
import TextLink from "../components/CTAS/TextLink";
import NavigationDefault from "../components/Navigation/NavigationDefault";
import CtaBlock from "../components/Blocks/CtaBlock";
import TwoColumnSection from "../components/Sections/TwoColumn";
import TwoColumn from "../components/TwoColumn/TwoColumn";
import FooterLanding from "../components/Footer/FooterLanding";
import Products from "../components/Sections/Products/Products";

const Entry = ({ entry }) => {
  // const returnsTwoColumnComponent = () => {
  //   return (
  //     <>
  //       <TwoColumnComponent />
  //     </>
  //   );
  // };
  if( entry.sectionHandle == 'landingPage'){
    return(
      <Products entry={entry}></Products>
    )
  }else{
    return (
        <p>building</p>
      );
  }

  
};

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

export async function getServerSideProps({ params }) {
  const entry = await getSingleEntry(params);

  if (!entry) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      entry,
    }, // will be passed to the page component as props
  };
}
