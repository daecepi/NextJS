import NavigationDefault from "./NavigationDefault";
import NavigationLanding from "./NavigationLanding";
import NavigationBlog from "./NavigationBlog";

const NavigationSelector = ({ entryType, navigationButtonsOverride }) => {
	console.log("ENTRYTYPE RECEIVED ", entryType);
	// Holds the jsx required for each entry type''
	const specialNavigationDistribution = {
		landingPage: (
			<NavigationLanding buttons={navigationButtonsOverride || undefined} />
		),
		blog: <NavigationBlog buttons={navigationButtonsOverride || undefined} />,
		blogFeatured: (
			<NavigationBlog buttons={navigationButtonsOverride || undefined} />
		),
		unknown: "",
		demo: "",
	};

	/*console.log(
		"ESTO ES UNA PRUEBA ",
		specialNavigationDistribution[entryType] === "" ||
			specialNavigationDistribution[entryType] !== undefined
	);*/
	return specialNavigationDistribution[entryType] === "" ||
		specialNavigationDistribution[entryType] !== undefined ? (
		specialNavigationDistribution[entryType]
	) : (
		<NavigationDefault buttons={navigationButtonsOverride || undefined} />
	);
};

export default NavigationSelector;
