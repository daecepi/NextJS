export const globalsFragments = {
	webBannerFragment: {
		call: "... webBanner",
		fragments: `
    fragment webBanner  on webBanner_GlobalSet{
      webBannerStatus
      webBannerColor
      webBannerLink
      webBannerTextDesktop
      webBannerTextMobile
    }
  `,
	},
	g2CrowdRatingFragment: {
		call: "... g2CrowdRating",
		fragments: `
  fragment g2CrowdRating on g2crowdRating_GlobalSet{
    rating
    reviewCount
  }
  `,
	},
	globalUserPersonalizationFragment: {
		call: "... globalUserPersonalization",
		fragments: `
    fragment globalUserPersonalization on globalUserPersonalization_GlobalSet{
      applyPersonalizations
      heroPersonalisation{
      ... on heroPersonalisation_BlockType{
        userStatus{
          ... on userStatus_Category{
            title
          }
        }
        copy
      }
      }
      navPersonalizationCta{
        ... on navPersonalizationCta_BlockType{
          userStatus{
            ... on userStatus_Category{
              title
            }
          }
          ctaText
          ctaUrl
        }
      }
      pricingPersonalizationCtas{
        ... on pricingPersonalizationCtas_BlockType{
          userStatus{
            ... on userStatus_Category{
              title
            }
          }
          ctaText
          ctaUrl
        }
      }
      variableElements{
        ... on variableElements_BlockType{
          userStatus{
            ... on userStatus_Category{
              title
            }
          }
          element
          copy
        }
      }
    }
  `,
	},

	googleOptimizeFragment: {
		call: "... googleOptimize",
		fragments: `
	fragment googleOptimize on googleOptimize_GlobalSet{
		googleOptimizeEntries{
			slug
		}
	}
  `,
	},

	marketoConfigurationFragment: {
		call: "... marketoConfiguration",
		fragments: `
    fragment marketoConfiguration on marketoConfigurations_GlobalSet{
      replaceMarketoForms
    }
  `,
	},

	promotedBlogsPostFragment: {
		call: "... promotedBlogPost",
		fragments: `
	fragment promotedBlogPost on promotedBlogPosts_GlobalSet{
		featuredBlogPost{
			slug
		}
	}
  `,
	},

	resourcesListFragment: {
		call: "... resourcesList",
		fragments: `
	fragment resourcesList on resourcesList_GlobalSet{
		featuredResources{
			
			... on webinars_webinars_Entry{
				title
			}
			... on webinars_register_Entry{
				title
			}
			... on webinars_webinarSpecial_Entry{
				title
			}
			... on resources_eBook_Entry{
				title
			}
			... on resources_download_Entry{
				title
			}
			... on resources_newEBook_Entry{
				title
			}
			... on customerStories_customerStories_Entry{
				title
			}
		}
		ebook {
			... on resources_eBook_Entry{
				title
			}
			... on resources_newEBook_Entry{
				title
			}
			... on resources_download_Entry{
				title
			}
		}
		video {
			... on webinars_webinars_Entry{
				title
			}
			... on webinars_register_Entry{
				title
			}
			... on webinars_webinarSpecial_Entry{
				title
			}
			... on resources_eBook_Entry{
				title
			}
			... on resources_download_Entry{
				title
			}
			... on resources_newEBook_Entry{
				title
			}
			... on customerStories_customerStories_Entry{
				title
			}
		}
		caseStudy {
			... on customerStories_customerStories_Entry{
				title
			}
		}
		tools{
			
			... on webinars_webinars_Entry{
				title
			}
			... on webinars_register_Entry{
				title
			}
			... on webinars_webinarSpecial_Entry{
				title
			}
			... on resources_eBook_Entry{
				title
			}
			... on resources_download_Entry{
				title
			}
			... on resources_newEBook_Entry{
				title
			}
			... on customerStories_customerStories_Entry{
				title
			}
		}
	}
  `,
	},

	defaultAuthorFragment: {
		call: `... defaultAuthors`,
		fragments: `
  fragment defaultAuthors on defaultAuthors_GlobalSet{
		defaultUsersGlobal {
			... on defaultUsersGlobal_BlockType{
				globalSpecific
				userToDisplay{
					... on UserInterface{
						name
					}
				}
				differentBio
				differentJobTitle
			}
		}
	}
  `,
	},
};
