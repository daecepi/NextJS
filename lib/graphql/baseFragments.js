import {
	backgroundColorCategory,
	basicEntryFieldsToGet,
	ctasTypeHandleProperties,
	optimizedImageProperties,
	basicSeoFIeldsToGet,
	simpleImageProperties,
} from "./fieldGroups/baseFIeldGroups";

export const homeSimple = () => {
	const usageSyntax = `
    
  `;

	const fragmentDeclaration = `
    
  `;

	return [usageSyntax, fragmentDeclaration];
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
