import NavigationDefault from "./NavigationDefault";
import NavigationLanding from "./NavigationLanding";
import NavigationBlog from "./NavigationBlog";

const NavigationSelector = ({ entryType }) => {
	console.log("ENTRYTYPE RECEIVED ", entryType);
	// Holds the jsx required for each entry type''
	const specialNavigationDistribution = {
		landingPage: <NavigationLanding />,
		blog: <NavigationBlog />,
		blogFeatured: <NavigationBlog />,
		unknown: "",
		demo: "",
	};

	return specialNavigationDistribution[entryType] === "" ||
		specialNavigationDistribution[entryType] !== undefined ? (
		specialNavigationDistribution[entryType]
	) : (
		<NavigationDefault />
	);
};

export default NavigationSelector;
