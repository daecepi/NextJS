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
  typeHandle
  title
  button
  buttonColor{
    slug
  }
  modalTrigger
  videoModal
  videoId
  takeBackgroundColor
`;

// Complex entry field definitions
