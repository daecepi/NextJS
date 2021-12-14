import DefaultPageBase from "../../components/PageBase/DefaultPageBase";
import Register from "../../components/Webinars/webinarEntryTypes/Register";
import Webinars from "../../components/Webinars/webinarEntryTypes/Webinar";
import WebinarSpecial from "../../components/Webinars/webinarEntryTypes/WebinarEspecial";
import { getEntryBySectionHandle, getPathsBySection } from "../../lib/api";

const WebinarPost = ({ entry, globals }) => {
	const webinarEntryTypeSelector = (entry) => {
		if (!entry) return "";
		if (entry.typeHandle == "register") {
			return <Register entry={entry} />;
		} else if (entry.typeHandle == "webinars") {
			return <Webinars entry={entry} />;
		} else if (entry.typeHandle == "webinarSpecial") {
			return <WebinarSpecial entry={entry} />;
		}

		return "";
	};

	console.log("PROPS ", entry, globals);

	return (
		<DefaultPageBase entry={entry} globals={globals}>
			{webinarEntryTypeSelector()}
		</DefaultPageBase>
	);
};

export default WebinarPost;

export async function getStaticProps(context) {
	const res = await getEntryBySectionHandle(
		"webinars",
		context.params.webinarSlug
	);
	return {
		props: {
			entry: res.entry || {},
			globals: res.globalSets || [],
		}, // will be passed to the page component as props
		revalidate: 120, // in seconds
	};
}

export async function getStaticPaths() {
	const webinarPosts = await getPathsBySection("webinars");

	console.log("webinar slugs", webinarPosts);

	const paths = webinarPosts?.length
		? webinarPosts.map((webinarPost) => ({
				params: { webinarSlug: webinarPost.slug || "" },
		  }))
		: [];

	return {
		paths: paths || [],
		fallback: true,
	};
}
