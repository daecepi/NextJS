import {
	backgroundColorCategory,
	basicEntryFieldsToGet,
	ctasTypeHandleProperties,
	optimizedImageProperties,
	basicSeoFieldsToGet,
	simpleImageProperties,
	assetInterfaceType,
	ctasFieldEntryTypeProperties,
	crmCardProperties,
	customerStoriesProperties,
	authorOfEntryGroupField,
	advancedEntryFieldsToGet,
} from "./fieldGroups/baseFIeldGroups";
import {
	newBuilderFieldGroup,
	oldBuilderFieldGroup,
} from "./fieldGroups/BlogPostFieldGroups";
import { globalsFragments } from "./fieldGroups/globalsFieldGroups";
import { landingPageFieldGroup } from "./fieldGroups/LandingPageFieldGroups";
import {
	legalCookiesEntryType,
	legalLegalEntryType,
	legalLegalTemplateEntryType,
	legalPrivacyEntryType,
	legalTosEntryType,
} from "./fieldGroups/LegalGroupFIelds";
import {
	webinarsRegisterEntryType,
	WebinarsWebinarEntryType,
	webinarsWebinarSpecialEntryType,
} from "./fieldGroups/WebinarsFieldGroup";

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
			${basicSeoFieldsToGet}
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
		${basicSeoFieldsToGet}
		twitterimage{
			${assetInterfaceType}
		}
	`,
		fragments: ``,
	},
	pricing: {
		call: `
			${basicEntryFieldsToGet}
			${basicSeoFieldsToGet}
			... on pricing_pricing_Entry {
				id
				pricingBlocks {
					typeHandle
					... on pricingBlocks_pricingHero_BlockType {
						id
						header
						subHeader
						pricingPlans {
							... on pricingCapstone_pricingCapstone_Entry {
								id
								title
								backgroundImage {
									${assetInterfaceType}
								}
								featured
								planType
								paragraph
								ctas {
									${ctasFieldEntryTypeProperties}
								}
								billedMonthly
								billedAnnually
							}
						}
					}
					... on pricingBlocks_cta_BlockType {
						header
						subHeader
						cta {
							${ctasFieldEntryTypeProperties}
						}
						customClass
						noBottomPadding
					}
					... on pricingBlocks_pricingTable_BlockType {
						id
						includeNavigation
						tableTitle
						pricingFeatures {
							... on pricingFeatures_pricingFeatures_Entry {
								id
								title
								titleLink
								tagText
								basicTierCheckmark
								basicTierText
								professionalTierCheckmark
								professionalTierText
								businessTierCheckmark
								businessTierText
								featureDescription
							}
						}
						lastInstance
						footnote
					}
					... on pricingBlocks_pricingFaq_BlockType {
						id
						header
						accordion {
							... on accordion_accordion_Entry {
								id
								title
								header
								richText
								backgroundColor {
									${backgroundColorCategory}
								}
							}
						}
					}
					... on pricingBlocks_finalPlea_BlockType {
						header
						cta {
							${ctasFieldEntryTypeProperties}
						}
					}
				}
			}
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

				${basicSeoFieldsToGet}
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
		author{
			${authorOfEntryGroupField}
		}
		

		${oldBuilderFieldGroup}
		${newBuilderFieldGroup.call}
		`,
		fragments: `
		${newBuilderFieldGroup.fragments}
		`,
	},
	landingPage: {
		call: `
			${landingPageFieldGroup.call}
		`,
		fragments: `
			${landingPageFieldGroup.fragments}
		`,
	},
	webinarIndex: {
		call: `
			${advancedEntryFieldsToGet}

			${basicSeoFieldsToGet}

			eyebrow
			header
			paragraph
			richText
			ctas
			featuredWebinars{
				handleType
				uri
				featuredImage{
					${assetInterfaceType}
				}
				title
				description
			}
			
		`,
		fragments: ``,
	},
	webinars: {
		call: `
					${basicEntryFieldsToGet}

					${webinarsRegisterEntryType.call}
					${WebinarsWebinarEntryType.call}
					${webinarsWebinarSpecialEntryType.call}

				`,
		fragments: `
		${webinarsRegisterEntryType.fragments}
					${WebinarsWebinarEntryType.fragments}
					${webinarsWebinarSpecialEntryType.fragments}
		`,
	},
	segmentation: {
		call: `
		${basicEntryFieldsToGet}
		${basicSeoFieldsToGet}
		`,
		fragments: ``,
	},
	partners: {
		call: `
					${basicEntryFieldsToGet}
					${basicSeoFieldsToGet}
				`,
		fragments: ``,
	},
	partnersSignup: {
		call: `
					${basicEntryFieldsToGet}
					${basicSeoFieldsToGet}
				`,
		fragments: ``,
	},
	signup: {
		call: `${basicEntryFieldsToGet}`,
		fragments: ``,
	},
	legal: {
		call: `
			${basicEntryFieldsToGet}

			${legalLegalEntryType.call}
			${legalCookiesEntryType.call}
			${legalPrivacyEntryType.call}
			${legalTosEntryType.call}
			${legalLegalTemplateEntryType.call}
		`,
		fragments: `
			${legalLegalEntryType.fragments}
			${legalCookiesEntryType.fragments}
			${legalPrivacyEntryType.fragments}
			${legalTosEntryType.fragments}
			${legalLegalTemplateEntryType.fragments}
		`,
	},
	crmComparisonIndex: {
		interface: `crmComparisonIndex_crmComparisonIndex_Entry`,
		call: `
			${basicEntryFieldsToGet}
			... on crmComparisonIndex_crmComparisonIndex_Entry{
				eyebrow
				header
				heroText
				crmHeroImage{
					... on AssetInterface{
						${assetInterfaceType}
					}
				}
				ctas{
					${ctasFieldEntryTypeProperties}
				}
				crmCards {
					... on crmCards_crmCardComparison_BlockType {
						${crmCardProperties}
					}
				}
				customerStories{
					... on customerStories_customerStories_BlockType{
						${customerStoriesProperties}
					}
				}
				copperFeatures{
					... on copperFeatures_copperFeatures_BlockType{
						featureCategory
						featureList {
							id
							title
							paragraph
						}
					}
				}
				lastModuleImage{
					... on AssetInterface{
						${assetInterfaceType}
					}
				}
			}
		`,
		fragments: ``,
	},
	features: {
		call: `
			${basicEntryFieldsToGet}
			... on features_features_Entry{
				featureGroupBlocks{
					... on featureGroupBlocks_featureGroup_BlockType{
						header
						featureDescription {
							... on featureDescription_featureDescription_Entry{
								title
								pricingPlan
								paragraph
								featureDetailLink
							}
							
						}
					}
				}
			}
		`,
		fragments: ``,
	},
	product: {
		call: `
			${basicEntryFieldsToGet}
			${basicSeoFieldsToGet}
			twitterimage
		`,
		fragments: ``,
	},
	demo: {
		call: `
			${basicEntryFieldsToGet}

			... on demo_demo_Entry{
				${basicSeoFieldsToGet}
				twittermage
			}
				
		`,
		fragments: ``,
	},
	customers: {
		call: `
			${basicEntryFieldsToGet}
			${basicSeoFieldsToGet}
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
