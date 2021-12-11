import {
	backgroundColorCategory,
	simpleImageProperties,
	optimizedImageProperties,
	ctasTypeHandleProperties,
} from "./baseFIeldGroups";

export const landingPageHeroFragment = {
	call: `...hero`,
	declaration: `
	fragment hero on landingBlocks_hero_BlockType{
		typeHandle
		fullImageHero
		halfFullImage
		backgroundColor{
			${backgroundColorCategory}
		}
		specialClass
		imageContain
		linkToNav
		imageOverlay
		eyebrow
		copyLogo{
			... on landingPageImages_Asset{
					${simpleImageProperties}
					optimizedLandingImages {
						${optimizedImageProperties}
				}
			}
		}
		richText
		bulletItemsInHero{
			bulletHeader
			bulletContent
		}
		image{
			... on landingPageImages_Asset{
				${simpleImageProperties}
				optimizedLandingImages{
					... on optimizedLandingImages_OptimizedImages{
						${optimizedImageProperties}
					}
				}
			}
		}
		bulletPointsMode
		specialBulletLogos{
			... on landingPageImages_Asset{
					${simpleImageProperties}
					... on optimizedLandingImages {
						${optimizedImageProperties}
				}
			}
		}
		specialBulletsText{
			specialBulletText
		}
		cta{
			... on ctas_ctas_Entry{
				${ctasTypeHandleProperties}
			}
		}
		assetText
		displayVideo
		heroVideoUrl
		displaySignupForm
		signupFormType
		heroSignupTitle
		heroSignupDescription
		signupSide
		displayMarketoForm
		marketoFormCopy
		heroMarketoId
		ctasOnMarketo{
			typeHandle
			slug
			title
		}
		marketoThankYouMessage
		successVideoEmbedCode
		marketoSide
		marketoConnectToNav
	}
	`,
};

export const landingPageFieldGroup = {
	call: `
	id
	uid
	title
	typeHandle
	sectionHandle
	... on landingPage_landingPage_Entry{
		slug
					landingBlocks{
			...landingBlockFragment
		}
	}
	`,
	fragments: `

    fragment landingBlockFragment on landingBlocks_MatrixField{
      ${landingPageHeroFragment.call}
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
    ${landingPageHeroFragment.declaration}
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
          title
          altText
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
          title
          altText
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
          image {
            id
          }
          quote
          author
          jobTitle
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
          title
          altText
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
          title
          altText
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
          title
          altText
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
            title
            altText
            optimizedLandingImages{
              srcset
              srcWebp
              srcsetWebp
              originalImageWidth
              originalImageHeight
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
            button
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
        ... on pricingCapstone_pricingCapstone_Entry{
        title
        backgroundImage{
          ... on landingPageImages_Asset{
            title
            altText
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
        featured
        planType
        paragraph
        ctas{
          url
          title
          ... on ctas_ctas_Entry{
            button
            buttonColor {
              slug
            }
          }
        }
        billedAnnually
        billedMonthly
      }
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
            originalImageWidth
            originalImageHeight
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
	`,
};

export const heroFormFlowFragment = {
	call: ``,
	declaration: ``,
};
