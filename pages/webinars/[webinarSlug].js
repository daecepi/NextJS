import DefaultPageBase from "../../components/PageBase/DefaultPageBase";
import Register from "../../components/Webinars/webinarEntryTypes/Register";
import Webinars from "../../components/Webinars/webinarEntryTypes/Webinar";
import WebinarSpecial from "../../components/Webinars/webinarEntryTypes/WebinarEspecial";
import { getEntryBySectionHandle } from "../../lib/api";

const WebinarPost = ({ entry, globals }) => {
	const webinarEntryTypeSelector = (entry) => {
		if (entry.typeHandle == "register") {
			return <Register entry={entry} />;
		} else if (entry.typeHandle == "webinars") {
			return <Webinars entry={entry} />;
		} else if (entry.typeHandle == "webinarSpecial") {
			return <WebinarSpecial entry={entry} />;
		}

		return "";
	};

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
		context.query.webinarSlug
	);
	return {
		props: {
			entry: res.entry || {},
			globals: res.globalSets || [],
		}, // will be passed to the page component as props
	};
}
