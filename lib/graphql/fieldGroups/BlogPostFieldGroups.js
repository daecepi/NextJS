import {
	assetInterfaceType,
	backgroundColorCategory,
	basicSeoFieldsToGet,
	defaultAuthorFields,
	imageGradientCategory,
} from "./baseFIeldGroups";

export const oldBuilderFieldGroup = `

... on blog_blog_Entry{
  blogSubtitle
    blogCategories{
      slug
    }
    readingTime
    consolidatedTitle
    featuredArticle
    consolidatedTitleFeaturedArticle
    imageGradient{
      slug
    }
    featuredImage{
      ${assetInterfaceType}
      url
    }
    richText
    
    ${basicSeoFieldsToGet}
    twittercreator
    
    
    externalAuthorName
    externalAuthorJobTitle
    externalAuthorPhoto{
      url
    }
    useExternalAuthor{
      name
      authorTitle
    }
  }
  blogSubtitle
  imageGradient{
    ${backgroundColorCategory}
  }
  featuredImage{
    ${assetInterfaceType}
  }
`;

export const newBuilderFieldGroup = {
	call: `
  ... on blog_blogBuilder_Entry{
    blogSubtitle
    imageGradient{
      ${imageGradientCategory}
    }
    featuredImage{
      ${assetInterfaceType}
    }
    blogCategories{
      slug
    }
    displayGeneralAdd
    readingTime
    featuredArticle
    consolidatedTitle
    consolidatedTitleFeaturedArticle
    
    adImage{
      ${assetInterfaceType}
    }
    backgroundColor{
      ${backgroundColorCategory}
    }
    header
    paragraph
    ctas{
      slug
    }
    
    blogBuilder{
      typeHandle
      ... tldrList
      ... copyEditorList
      ... mediaList
      ... calloutList
      ... cardList
      ... quoteList
      ... adAList
      ... adBList
      ... wistiaVideoList
    }


    ${basicSeoFieldsToGet}
    twittercreator

    ${defaultAuthorFields}
  }
  `,
	fragments: `
      fragment tldrList on blogBuilder_tldr_BlockType{
        tldr
      }
      
      fragment copyEditorList on blogBuilder_copyEditor_BlockType{
        calloutSentence
        copy
        copyEditorSectionId
      }
      
      fragment mediaList on blogBuilder_media_BlockType{
        addMedia
        mediaDescription
      }
      
      fragment calloutList on blogBuilder_callout_BlockType{
        copy
      }
      
      fragment cardList on blogBuilder_card_BlockType{
        eyebrow
        header
        copy
      }
      
      fragment quoteList on blogBuilder_quote_BlockType{
        quote
        author
      }
      
      fragment adAList on blogBuilder_adA_BlockType{
        eyebrow
        header
        paragraph
        cta{
          slug
        }
        ad{
          url
          title
        }
      }
      
      fragment adBList on blogBuilder_adB_BlockType{
        eyebrow
        header
        pinkPeriodAfterHeader
        paragraph
        ctas{
          slug
        }
      }
      
      fragment wistiaVideoList on blogBuilder_wistiaVideo_BlockType{
        wistiaVideoCode
      }
  `,
};
