// Craft common interface definition for fields
export const imageGradientCategory = `
  slug
  title
`;

export const backgroundColorCategory = `
  slug
  title
`;

export const assetInterfaceType = `
  ... on AssetInterface{
    title
    url
    altText
  }
`;
export const authorOfEntryGroupField = `
  id
  name
  firstname
  lastName
  authorTitle
  photo{
    url
  }
`;

export const authorSimpleFieldDefinition = `
  photo{
    ${assetInterfaceType}
  }
  name
  firstName
  lastName
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
export const minimalEntryFieldsToGet = `
  title
  uri
  url
  slug
`;

export const basicEntryFieldsToGet = `
  id
  title
  slug
  typeHandle
  sectionHandle
  uri
  url
`;

export const advancedEntryFieldsToGet = `
  slug
  title
  typeHandle
  sectionHandle
  postDate
  author{
    id
    name
    authorTitle
    photo{
      title
      url
    }
  }
  dateUpdated
  url
  uri
`;

export const basicSeoFieldsToGet = `
seoTitle
defaultSourceUtm
defaultMediumUtm
defaultCampaignUtm
canonical
index
seoDescription
`;

export const defaultAuthorFields = `
  externalAuthorJobTitle
  externalAuthorName
  externalAuthorPhoto{
    url
  }
  useExternalAuthor{
    name
    authorTitle
  }
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
      ${assetInterfaceType}
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
