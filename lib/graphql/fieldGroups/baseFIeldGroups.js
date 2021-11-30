// Craft common interface definition for fields
export const backgroundColorCategory = `
  slug
`;

export const assetInterfaceType = `
  title
  url
`;

export const simpleImageProperties = `
  altText
  title
  url
`;

export const optimizedImageProperties = `
  originalImageWidth
  originalImageHeight
  placeholder
  placeholderSvg
  lightness
  placeholderWidth
  placeholderHeight
  placeholderSilhouette
  src
  srcWebp
  srcset
  srcsetWebp
  placeholderBox
`;

export const ctasTypeCtaEntryProperties = `
  typeHandle
  title
  button
  buttonColor{
    ${backgroundColorCategory}
  }
  modalTrigger
  videoModal
  videoId
  takeBackgroundColor
`;

// Craft General compositions
export const basicEntryFieldsToGet = `
  title
  slug
  typeHandle
`;

export const advancedEntryFieldsToGet = `
  slug
  title
  typeHandle
  author{
    photo{
      ... on AssetInterface{
        ${assetInterfaceType}
      }
    }
    name
  }
  dateUpdated
`;

export const basicSeoFIeldsToGet = `
seoTitle
defaultSourceUtm
defaultMediumUtm
defaultCampaignUtm
canonical
index
seoDescription
twitterimage
`;

// Simple entry field definitions
export const ctasTypeHandleProperties = `
  ... on ctas_ctas_Entry{
    typeHandle
    title
    button
    buttonColor {
      ... on CategoryInterface{
        ${backgroundColorCategory}
      }
    }
    modalTrigger
    videoModal
    videoId
    takeBackgroundColor
  }
`;

export const ctaImageHandleProperties = `
  ... on ctas_imageCta_Entry{
    button
    backgroundImage{
      ... on AssetInterface{
        ${backgroundColorCategory}
      }
    }
  }
`;

export const linkTypeHandleProperties = `
  ... on ctas_link_Entry{
    button
    ctaRemoveUnderline
  }
`;
// Complex entry field definitions
export const ctasFieldEntryTypeProperties = `
  typeHandle
  slug
  ${ctasTypeHandleProperties}
  ${ctaImageHandleProperties}
  ${linkTypeHandleProperties}
`;

export const crmCardProperties = `
  crmName
  crmCopy
  crmCardLink
  crmLogo {
    ... on AssetInterface {
      ${assetInterfaceType}
    }
  }
`;

export const customerStoriesProperties = `
  customerImage{
    ... on AssetInterface{
      ${assetInterfaceType}
    }
  }
  customerQuote
  customerName
  customerPosition
  customerCompanyLogo{
    ... on AssetInterface{
      ${assetInterfaceType}
    }
  }
`;
