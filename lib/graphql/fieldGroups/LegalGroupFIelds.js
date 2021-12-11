import { assetInterfaceType, basicSeoFieldsToGet } from "./baseFIeldGroups";

export const legalLegalEntryType = {
	call: `
  ... on legal_legal_Entry{
    title
  }
  `,
	fragments: ``,
};

export const legalCookiesEntryType = {
	call: `
    ... on legal_cookies_Entry{
      richText

      ${basicSeoFieldsToGet}
      twitterimage{
        ${assetInterfaceType}
      }
    }
  `,
	fragments: ``,
};

export const legalPrivacyEntryType = {
	call: `
  ... on legal_privacy_Entry{
    richText

    ${basicSeoFieldsToGet}
    twitterimage{
      ${assetInterfaceType}
    }
  }
  
  `,
	fragments: ``,
};

export const legalTosEntryType = {
	call: `
  ... on legal_tos_Entry{
      termsRedactor
      richText

      ${basicSeoFieldsToGet}
      twitterimage{
        ${assetInterfaceType}
      }
  }
  `,
	fragments: ``,
};

export const legalLegalTemplateEntryType = {
	call: `
    ... on legal_legalTemplate_Entry{
      header
      richText
    }
  `,
	fragments: ``,
};
