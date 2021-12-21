import { getEntryBySectionHandle, getPathsBySection } from "../lib/api";

// Styles definitions
import styles from "../styles/Home.module.css";
import Products from "../components/Sections/Products/Products";
import LegalSelector from "../components/Legal/LegalSelector";
import DefaultPageBase from "../components/PageBase/DefaultPageBase";

const Entry = ({ entry, globals }) => {
	// const returnsTwoColumnComponent = () => {
	//   return (
	//     <>
	//       <TwoColumnComponent />
	//     </>
	//   );
	// };
	const entrySelector = (entry) => {
		if (entry?.sectionHandle == "landingPage") {
			return <Products entry={entry}></Products>;
		} else if (entry?.sectionHandle == "legal") {
			return <LegalSelector entry={entry} />;
		} else {
			return <p>building</p>;
		}
	};
	return (
		<DefaultPageBase entry={entry} globals={globals}>
			{entrySelector(entry)}
		</DefaultPageBase>
	);
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
//     const entry = await getLandingPageEntry(params.slug)
//     return {
//         props: {
//             entry,
//         },
//         revalidate: 1,
//     };
// }

export async function getStaticProps(context) {
	const res = await getEntryBySectionHandle("legal", context.params.slug);
	const res2 = await getEntryBySectionHandle(
		"landingPage",
		context.params.slug
	);

	return {
		props: {
			entry: { ...res.entry, ...res2.entry } || {},
			globals: res.globalSets || [],
		}, // will be passed to the page component as props
		revalidate: 120, // In seconds
	};
}

export async function getStaticPaths() {
	/*
		TODO: Entry Types: generalLanding
	*/
	const landingPages = await getPathsBySection("landingPage");
	const termPages = await getPathsBySection("legal");

	const paths = landingPages.map((landingPage) => ({
		params: { slug: landingPage.slug },
	}));
	const termPaths = termPages.map((landingPage) => ({
		params: { slug: landingPage.slug },
	}));

	return {
		paths: [...paths, ...termPaths],
		fallback: true,
	};
}
