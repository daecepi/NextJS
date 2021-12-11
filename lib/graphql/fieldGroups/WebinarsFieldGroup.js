import {
	basicSeoFieldsToGet,
	assetInterfaceType,
	authorOfEntryGroupField,
	basicEntryFieldsToGet,
	imageGradientCategory,
	minimalEntryFieldsToGet,
} from "../fieldGroups/baseFIeldGroups";

export const WebinarsWebinarEntryType = {
	call: `
  ... on webinars_webinars_Entry{
    specialStyle
    imageGradient{
      ${imageGradientCategory}
    }
    featuredImage{
      ${assetInterfaceType}
    }
    eyebrow
    featured
    duration
    releaseDate
    embeddedVideo
    description
    featuredAuthors{
      ... on UserInterface{
        ${authorOfEntryGroupField}
      }
    }
    relatedResource{
      ${basicEntryFieldsToGet}
    }
    
    formId
    formHeader
    formCopy
    belowTheFormCopy
    
    landingPageNavigation
   
    ${basicSeoFieldsToGet}
  }
  `,
	fragments: ``,
};

export const webinarsRegisterEntryType = {
	call: `
  ... on webinars_register_Entry{
    specialStyle
    releaseDate
    imageGradient{
      ${imageGradientCategory}
    }
    featuredImage{
      ${assetInterfaceType}
    }
    eyebrow
    featured
    description
    
    formId
    formHeader
    formCopy
    belowTheFormCopy
    
    paragraph
  }
  `,
	fragment: ``,
};

export const webinarsWebinarSpecialEntryType = {
	call: `
    
  ... on webinars_webinarSpecial_Entry{
    specialStyle
    imageGradient{
      ${imageGradientCategory}
    }
    featuredImage{
      ${assetInterfaceType}
    }
    eyebrow
    descriptionRichText
    eventDate
    embeddedVideo
    featuredAuthors
    
    webinarBoilerplate
    
    formId
    formHeader
    formCopy
    belowTheFormCopy
    formSuccessMessage
    
    ${basicSeoFieldsToGet}
  }
  `,
	fragments: ``,
};
