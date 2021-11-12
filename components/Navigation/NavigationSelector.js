import NavigationDefault from "./NavigationDefault";
import NavigationLanding from "./NavigationLanding";
import NavigationBlog from "./NavigationBlog";

const NavigationSelector = ({ entryType }) => {
	// Holds the jsx required for each entry type''
	const specialNavigationDistribution = {
		landingPage: <NavigationLanding />,
		blog: <NavigationBlog />,
		blogFeatured: <NavigationBlog />,
		unknown: "",
	};

	return specialNavigationDistribution[entryType] || <NavigationDefault />;
};

export default NavigationSelector;
