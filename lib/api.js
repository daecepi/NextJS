export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;
import gql from 'graphql-tag';
import {landingBlockBuilder} from '../lib/graphql/landingBlockBuilder';

async function fetchAPI(query, { previewData, variables } = {}) {
    let craftUrl = API_URL;

    if (previewData && previewData !== '') {
        craftUrl += '?token=' + previewData;
    }

    const res = await fetch(craftUrl, {
        method: 'POST',
        body: JSON.stringify({
            query,
            variables,
        }),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
        },
    });

    if (res.status !== 200) {
        console.log(await res.text());
        throw new Error('Failed to fetch API');
    }

    const json = await res.json();

    if (json.errors) {
        console.error(json.errors);
        throw new Error('Failed to fetch API');
    }

    return json.data;
}

export async function getAllPostsWithSlug() {
    const data = await fetchAPI(`
        {
            entries(limit:1000){
                id
                title
                slug
            }
        }
    `);
    return data.entries;
}

// Blog entries
export async function getBlogEntry(slug) {
  const data = await fetchAPI(`
  query getSingleEntry($slug:[String]){
      entry(slug: $slug){
        id
        uid
        title
        typeHandle
        ... on landingPage_landingPage_Entry{
          slug
                landingBlocks{
            ...landingBlockFragment
          }
        }
      }
    }
    
    fragment landingBlockFragment on landingBlocks_MatrixField{
      ...formFlow
      ...leadBottomSection
      ...resources
      ...underlineNumbers
      ...temporalLogo
      ...latestWebinars
      ...logoSection
      ...embededVideo
      ...details
      ...specialTestimonial
      ...testimonialSlider
      ...testimonial
      ...jumbleModule
      ...threeCol
      ...createSimpleTwoCol
      ...twoColSimple
      ...oneColumnSimple
      ...oneColumn
      ...cta
      ...table
      ...pricingPlan
        ...twoCol
    }
    fragment formFlow on landingBlocks_formFlowHero_BlockType{
      typeHandle
      heroBackground {
        id
      }
      copperIcon
      heroTitle
      copy
      ctaText
      tryFreeCtaText
      buttonColorOption
      image{
        ... on landingPageImages_Asset{
          optimizedLandingImages{
            src
          }
        }
      }
      nearNavigation
      formId
    }
    fragment leadBottomSection on landingBlocks_leadBottomSection_BlockType{
      typeHandle
      copy
    }
    fragment resources on landingBlocks_resources_BlockType{
      typeHandle
      text
    }
    fragment underlineNumbers on landingBlocks_underlineNumbers_BlockType{
      typeHandle
      image{
        ... on landingPageImages_Asset{
          optimizedLandingImages{
            src
          }
        }
      }
      eyebrow
      copy
      numbersTable {
        col1
        number
        col2
        description
      }
    }
    fragment temporalLogo on landingBlocks_temporalLogoModule_BlockType{
      typeHandle
      header
      logos{
        ... on landingPageImages_Asset{
          optimizedLandingImages {
            originalImageWidth
            originalImageHeight
            placeholder
            placeholderSvg
            lightness
            placeholderWidth
            placeholderHeight
            maxSrcsetWidth
            placeholderImage
            placeholderSilhouette
            src
            srcWebp
            srcset
            srcsetWebp
            placeholderBox
          }
        }
      }
      sameSpacing
    }
    fragment latestWebinars on landingBlocks_latestWebinarsModule_BlockType{
      typeHandle
      header
      removeHeader
      addPaddingBottom
    }
    fragment logoSection on landingBlocks_logoSection_BlockType{
      typeHandle
      eyebrow
      logotitle
      subtitle
      copyText
      logoImages{
        ... on landingPageImages_Asset{
          optimizedLandingImages{
            src
          }
        }
      }
      cta {
        id
      }
      logobackgroundColor {
        id
      }
      layout
      twoColSettings {
        col1
        reverseLayout
        col2
        textColor
      }
      oneColSettings {
        col1
        textColor
      }
      stickyNavName
    }
    fragment embededVideo on landingBlocks_embeddedVideo_BlockType{
      typeHandle
      embeddedVideoSnippet
      stickyNavName
    }
    fragment details on landingBlocks_details_BlockType{
      typeHandle
      richText
      stickyNavName
    }
    fragment specialTestimonial on landingBlocks_specialTestimonial_BlockType{
      typeHandle
      text
    }
    fragment testimonialSlider on landingBlocks_testimonialSlider_BlockType{
      typeHandle
      eyebrow
      contentCopy
      sliderContent{
        ... on sliderContent_BlockType{
          title
        }
      }
    }
    fragment testimonial on landingBlocks_testimonial_BlockType{
      typeHandle
      eyebrow
      eyebrowColor{
        title
      }
      image{
        ... on landingPageImages_Asset{
          optimizedLandingImages{
            src
          }
        }
      }
      quote
      author
      jobTitle
      logo{
        ... on landingPageImages_Asset{
          optimizedLandingImages{
            src
          }
        }
      }
      logoPositioning
      cta {
        id
      }
      linkToNav
      blockColor {
        id
      }
    }
    fragment jumbleModule on landingBlocks_jumbleModule_BlockType{
      typeHandle
      eyebrow
      copy
      jumbleCtas: ctas{
        id
      }
      image{
        ... on landingPageImages_Asset{
          optimizedLandingImages{
            src
          }
        }
      }
    }
    fragment threeCol on landingBlocks_threeColumn_BlockType{
      typeHandle
      backgroundColor {
        id
      }
      eyebrow
      header
      subHeader
      entries{
        title
      }
      addBottomPadding
      linkToNav
      stickyNavName
    }
    fragment createSimpleTwoCol on landingBlocks_createSimpleTwoColColorConfined_BlockType{
      typeHandle
      backgroundColor {
        id
      }
      eyebrow
        copy
      image{
        ... on landingPageImages_Asset{
            optimizedLandingImages{
            src
          }
        }
      }
      ctaText
      ctaUrl
    }
    fragment twoColSimple on landingBlocks_simpleTwoColOrientedTop_BlockType{
      typeHandle
        copy
      image{
        ... on landingPageImages_Asset{
            optimizedLandingImages{
            src
          }
        }
      }
    }
    fragment oneColumnSimple on landingBlocks_oneColumnSimpleFullScreenImage_BlockType{
          typeHandle
        backgroundImageClassText
        copy
        ctaText
        ctaUrl
    }
    fragment oneColumn on landingBlocks_oneColumn_BlockType{
          typeHandle
        header
        subText
        copy
        textRatio
        entries{
          title
        }
        backgroundColor{
          title
        }
        addBottomPadding 
        linkToNav
        stickyNavName
        configurations{
          col1
        }
        ctas
    }
    fragment cta on landingBlocks_cta_BlockType{
          typeHandle
        header
        subHeader
        cta{
          url
          title
          ... on ctas_ctas_Entry{
            buttonColor {
              slug
            }
          }
        }
        linkToNav
        noBottomPadding
        stickyNavName
    }
    fragment table on landingBlocks_table_BlockType{
        typeHandle
        includeNavigation
        tableTitle
        features {
          id
        }
        lastInstance
        linkToNav
        headerLogoOne{
          ... on landingPageImages_Asset{
            optimizedLandingImages{
              src
            }
          }
        }
        headerLogoTwo{
          ... on landingPageImages_Asset{
            optimizedLandingImages{
              src
            }
          }
        }
        stickyNavName
    }
    fragment pricingPlan on landingBlocks_pricingPlans_BlockType{
      typeHandle
        header
      subHeader
      pricingPlans{
        title
      }
      reducePadding
      linkToNav
      stickyNavName
      removeCtas
    }
    
    fragment twoCol on landingBlocks_twoColumn_BlockType{
      typeHandle
      backgroundColor {
        id
      }
      sectionsHeader
      eyebrowColor {
        id
      }
      eyebrow
      copy
      bulletsColor {
        id
      }
      image{
        ... on landingPageImages_Asset{
          optimizedLandingImages{
            src
            srcset
            srcWebp
            srcsetWebp
            placeholderImage
            placeholderBox
            placeholderSilhouette
          }
        }
        }
      imageOrientation
      cta {
        id
      }
      useForm
      freeTrial
      formTitle
      formCode
      addBottomPadding
      removeShadow
      linkToNav
      stickyNavName
    }
  `,{
      variables: {
        slug: slug,
      },
    });
  return data.entry;
} 

export async function getSingleEntry(slug) {
    const data = await fetchAPI(`
    query getSingleEntry($slug:[String]){
        entry(slug: $slug){
          id
          uid
          title
          typeHandle
          ... on landingPage_landingPage_Entry{
            slug
                  landingBlocks{
              ...landingBlockFragment
            }
          }
        }
      }
      
      fragment landingBlockFragment on landingBlocks_MatrixField{
        ...formFlow
        ...leadBottomSection
        ...resources
        ...underlineNumbers
        ...temporalLogo
        ...latestWebinars
        ...logoSection
        ...embededVideo
        ...details
        ...specialTestimonial
        ...testimonialSlider
        ...testimonial
        ...jumbleModule
        ...threeCol
        ...createSimpleTwoCol
        ...twoColSimple
        ...oneColumnSimple
        ...oneColumn
        ...cta
        ...table
        ...pricingPlan
          ...twoCol
      }
      fragment formFlow on landingBlocks_formFlowHero_BlockType{
        typeHandle
        heroBackground {
          id
        }
        copperIcon
        heroTitle
        copy
        ctaText
        tryFreeCtaText
        buttonColorOption
        image{
          ... on landingPageImages_Asset{
            optimizedLandingImages{
              src
            }
          }
        }
        nearNavigation
        formId
      }
      fragment leadBottomSection on landingBlocks_leadBottomSection_BlockType{
        typeHandle
        copy
      }
      fragment resources on landingBlocks_resources_BlockType{
        typeHandle
        text
      }
      fragment underlineNumbers on landingBlocks_underlineNumbers_BlockType{
        typeHandle
        image{
          ... on landingPageImages_Asset{
            optimizedLandingImages{
              src
            }
          }
        }
        eyebrow
        copy
        numbersTable {
          col1
          number
          col2
          description
        }
      }
      fragment temporalLogo on landingBlocks_temporalLogoModule_BlockType{
        typeHandle
        header
        logos{
          ... on landingPageImages_Asset{
            altText
            title
            optimizedLandingImages {
              originalImageWidth
              originalImageHeight
              placeholder
              placeholderSvg
              lightness
              placeholderWidth
              placeholderHeight
              maxSrcsetWidth
              placeholderImage
              placeholderSilhouette
              src
              srcWebp
              srcset
              srcsetWebp
              placeholderBox
            }
          }
        }
        sameSpacing
      }
      fragment latestWebinars on landingBlocks_latestWebinarsModule_BlockType{
        typeHandle
        header
        removeHeader
        addPaddingBottom
      }
      fragment logoSection on landingBlocks_logoSection_BlockType{
        typeHandle
        eyebrow
        logotitle
        subtitle
        copyText
        logoImages{
          ... on landingPageImages_Asset{
            optimizedLandingImages{
              src
            }
          }
        }
        cta {
          id
        }
        logobackgroundColor {
          id
        }
        layout
        twoColSettings {
          col1
          reverseLayout
          col2
          textColor
        }
        oneColSettings {
          col1
          textColor
        }
        stickyNavName
      }
      fragment embededVideo on landingBlocks_embeddedVideo_BlockType{
        typeHandle
        embeddedVideoSnippet
        stickyNavName
      }
      fragment details on landingBlocks_details_BlockType{
        typeHandle
        richText
        stickyNavName
      }
      fragment specialTestimonial on landingBlocks_specialTestimonial_BlockType{
        typeHandle
        text
      }
      fragment testimonialSlider on landingBlocks_testimonialSlider_BlockType{
        typeHandle
        eyebrow
        contentCopy
        sliderContent{
          ... on sliderContent_BlockType{
            title
          }
        }
      }
      fragment testimonial on landingBlocks_testimonial_BlockType{
        typeHandle
        eyebrow
        eyebrowColor{
          title
        }
        image{
          ... on landingPageImages_Asset{
            optimizedLandingImages{
              src
              srcset
              srcWebp
              srcsetWebp
              originalImageWidth
              originalImageHeight
            }
          }
        }
        quote
        author
        jobTitle
        logo{
          ... on landingPageImages_Asset{
            optimizedLandingImages{
              src
            }
          }
        }
        logoPositioning
        cta {
          id
        }
        linkToNav
        blockColor {
          id
        }
      }
      fragment jumbleModule on landingBlocks_jumbleModule_BlockType{
        typeHandle
        eyebrow
        copy
        jumbleCtas: ctas{
          id
        }
        image{
          ... on landingPageImages_Asset{
            optimizedLandingImages{
              src
            }
          }
        }
      }
      fragment threeCol on landingBlocks_threeColumn_BlockType{
        typeHandle
        backgroundColor {
          id
        }
        eyebrow
        header
        subHeader
        entries{
          title
          ... on numbers_numbers_Entry{
            eyebrow
            number
            subText
          }
        }
        addBottomPadding
        linkToNav
        stickyNavName
      }
      fragment createSimpleTwoCol on landingBlocks_createSimpleTwoColColorConfined_BlockType{
        typeHandle
        backgroundColor {
          id
        }
        eyebrow
          copy
        image{
          ... on landingPageImages_Asset{
              optimizedLandingImages{
              src
            }
          }
        }
        ctaText
        ctaUrl
      }
      fragment twoColSimple on landingBlocks_simpleTwoColOrientedTop_BlockType{
        typeHandle
          copy
        image{
          ... on landingPageImages_Asset{
              optimizedLandingImages{
              src
            }
          }
        }
      }
      fragment oneColumnSimple on landingBlocks_oneColumnSimpleFullScreenImage_BlockType{
            typeHandle
          backgroundImageClassText
          copy
          ctaText
          ctaUrl
      }
      fragment oneColumn on landingBlocks_oneColumn_BlockType{
            typeHandle
          header
          subText
          copy
          textRatio
          entries{
            title
          }
          backgroundColor{
            title
          }
          addBottomPadding 
          linkToNav
          stickyNavName
          configurations{
            col1
          }
          ctas
      }
      fragment cta on landingBlocks_cta_BlockType{
            typeHandle
          header
          subHeader
          cta{
            url
            title
          }
          linkToNav
          noBottomPadding
          stickyNavName
      }
      fragment table on landingBlocks_table_BlockType{
          typeHandle
          includeNavigation
          tableTitle
          features {
            id
          }
          lastInstance
          linkToNav
          headerLogoOne{
            ... on landingPageImages_Asset{
              optimizedLandingImages{
                src
              }
            }
          }
          headerLogoTwo{
            ... on landingPageImages_Asset{
              optimizedLandingImages{
                src
              }
            }
          }
          stickyNavName
      }
      fragment pricingPlan on landingBlocks_pricingPlans_BlockType{
        typeHandle
          header
        subHeader
        pricingPlans{
          title
        }
        reducePadding
        linkToNav
        stickyNavName
        removeCtas
      }
      
      fragment twoCol on landingBlocks_twoColumn_BlockType{
        typeHandle
        backgroundColor {
          id
        }
        sectionsHeader
        eyebrowColor {
          id
        }
        eyebrow
        copy
        bulletsColor {
          id
        }
        image{
          ... on landingPageImages_Asset{
            optimizedLandingImages{
              src
              srcset
              srcWebp
              srcsetWebp
              placeholderImage
              placeholderBox
              placeholderSilhouette
            }
          }
          }
        imageOrientation
        cta {
          id
        }
        useForm
        freeTrial
        formTitle
        formCode
        addBottomPadding
        removeShadow
        linkToNav
        stickyNavName
      }
    `,{
        variables: {
          slug: slug,
        },
      });
    return data.entry;
}