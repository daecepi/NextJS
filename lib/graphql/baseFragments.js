import {
	backgroundColorCategory,
	basicEntryFieldsToGet,
	ctasTypeHandleProperties,
	optimizedImageProperties,
	basicSeoFIeldsToGet,
	simpleImageProperties,
	assetInterfaceType,
	ctasFieldEntryTypeProperties,
	authorOfEntryGroupField,
	advancedEntryFieldsToGet,
} from "./fieldGroups/baseFIeldGroups";
import {
	newBuilderFieldGroup,
	oldBuilderFieldGroup,
} from "./fieldGroups/BlogPostFieldGroups";
import { globalsFragments } from "./fieldGroups/globalsFieldGroups";

export const globalFieldsBuilder = () => {
	const joinedFragments = Object.keys(globalsFragments).reduce(
		(previousValue, currentValue, currentIndex) => {
			// Attends first index when previous Value is already the 0 element of the array
			if (currentIndex === 1) {
				return {
					call: `${globalsFragments[previousValue].call}
				${globalsFragments[currentValue].call}`,
					fragments: `${globalsFragments[previousValue].fragments}
				${globalsFragments[currentValue].fragments}`,
				};
			}
			// Adds to the first base objects the rest of the declarations of each new currentValue
			return {
				call: `${previousValue.call || ""}
								${globalsFragments[currentValue].call}`,
				fragments: `${previousValue.fragments || ""}
								${globalsFragments[currentValue].fragments}`,
			};
		}
	);

	return joinedFragments;
};

export const singlesFieldhHolder = {
	homepage: {
		call: `
			${basicEntryFieldsToGet}
			${basicSeoFIeldsToGet}
			twitterimage{
				${assetInterfaceType}
			}

			header
			recentWebinarModulePosition
			removeHeader
			addPaddingBottom
		`,
		fragments: ``,
	},
	about: {
		call: `
		id
		${advancedEntryFieldsToGet}
		${basicSeoFIeldsToGet}
		twitterimage{
			${assetInterfaceType}
		}
	`,
		fragments: ``,
	},
	pricing: {
		call: `
			${basicEntryFieldsToGet}
			${basicSeoFIeldsToGet}
			twitterimage{
				${assetInterfaceType}
			}
			

			heroPersonalisation
			heroPersonalisation
			pricingPersonalizationCtas
			variableElements
		`,
		fragments: ``,
	},
	blogFeatured: {
		call: `
			${basicEntryFieldsToGet}
			featuredImage
			clickthrough
		`,
		fragments: ``,
	},
	blogIndex: {
		call: `
			${basicEntryFieldsToGet}
			
			... on blogIndex_blogIndex_Entry{
				featuredAuthors{
					username
					firstName
					lastName
					photo{
						${assetInterfaceType}
					}
				}
				topicsDescription
				authorsDescription
				featuredImage{
					${assetInterfaceType}
				}

				clickthrough
				
				adImage{
					${assetInterfaceType}
				}
				backgroundColor{
					${backgroundColorCategory}
				}
				header
				paragraph
				ctas{
					${ctasFieldEntryTypeProperties}
				}

				${basicSeoFIeldsToGet}
				twitterimage{
					${assetInterfaceType}
				}
			}
		`,
		fragments: ``,
	},
	blog: {
		call: `
		${advancedEntryFieldsToGet}
		${authorOfEntryGroupField}

		${oldBuilderFieldGroup}
		${newBuilderFieldGroup.call}
		`,
		fragments: `
		${newBuilderFieldGroup.fragments}
		`,
	},
	blogBuilder: {
		call: `
			${basicEntryFieldsToGet}
		`,
		fragments: ``,
	},
};

export const siteStructureHolder = {
	...singlesFieldhHolder,
	landingPage: {
		call: ``,
		fragments: ``,
	},
};
