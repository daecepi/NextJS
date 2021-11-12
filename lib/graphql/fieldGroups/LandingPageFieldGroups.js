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

export const heroFormFlowFragment = {
	call: ``,
	declaration: ``,
};
