import {
	backgroundColorCategory,
	basicEntryFieldsToGet,
	ctasTypeHandleProperties,
	optimizedImageProperties,
	basicSeoFIeldsToGet,
	simpleImageProperties,
} from "./fieldGroups/baseFIeldGroups";
import { globalsFragments } from "./fieldGroups/globalsFieldGroups";

export const globalFieldsBuilder = () => {
	const joinedFragments = Object.keys(globalsFragments).reduce(
		(previousValue, currentValue, currentIndex) => {
			// Attends first index when previous Value is already the 0 element of the array
			if (currentIndex === 1) {
				return {
					call: `${globalsFragments[previousValue].call}
				${globalsFragments[currentValue].call}`,
					declaration: `${globalsFragments[previousValue].declaration}
				${globalsFragments[currentValue].declaration}`,
				};
			}
			// Adds to the first base objects the rest of the declarations of each new currentValue
			return {
				call: `${previousValue.call || ""}
								${globalsFragments[currentValue].call}`,
				declaration: `${previousValue.declaration || ""}
								${globalsFragments[currentValue].declaration}`,
			};
		}
	);

	return joinedFragments;
};

export const singlesFieldhHolder = {
	homepage: `
	${basicEntryFieldsToGet}
	${basicSeoFIeldsToGet}

	header
	recentWebinarModulePosition
	removeHeader
	addPaddingBottom
	`,
	about: `
		${basicEntryFieldsToGet}
		${basicSeoFIeldsToGet}
	`,
	pricing: `
		${basicEntryFieldsToGet}
		${basicSeoFIeldsToGet}
		

		heroPersonalisation
		heroPersonalisation
		pricingPersonalizationCtas
		variableElements
	`,
};

export const siteStructureHolder = {
	...singlesFieldhHolder,
	landingPage: {},
};
