import { getEntryByType } from "../lib/api";

export default function BlogFeatured({ res }) {
	return <h1 style={{ textAlign: "center" }}> Waiting blog redesing </h1>;
}

export async function getStaticProps(context) {
	const res = await getEntryByType("blogFeatured", "blog-featured");
	return {
		props: {
			res,
		}, // will be passed to the page component as props
		revalidate: 120, // in seconds
	};
}
