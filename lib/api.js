export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;
import gql from "graphql-tag";
import { landingBlockBuilder } from "../lib/graphql/landingBlockBuilder";
import {
	globalFieldsBuilder,
	siteStructureHolder,
} from "./graphql/baseFragments";

// First level data transformer
/*const firstLevelDataTransformer = (dataObject) => {
	if (!dataObject.entry) return dataObject;
  const buttonTransform = dataObject.entry.landingBlocks.cta
	return dataObject.entry.map(entryIn);
};*/

// General query function
async function fetchAPI(query, { previewData, variables } = {}) {
	let craftUrl = API_URL;

	if (previewData && previewData !== "") {
		craftUrl += "?token=" + previewData;
	}

	const res = await fetch(craftUrl, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${API_TOKEN}`,
		},
	}).catch((err) => {
		console.log("Error from GRAPHQL ", err);
	});

	if (res?.status !== 200) {
		console.log(await res?.text());
		return {};
		// throw new Error("Failed to fetch API");
	}

	const json = (await res?.json()) || {};

	// console.log("IMPORTANT ", json);
	if (json.errors) {
		console.error(query, "ON", json.errors && json.errors[0]?.locations);
		// throw new Error("Failed to fetch API", json);
		return {};
	}

	return json.data;
}

export function graphPropertiesBuilder(entryType) {
	// If the path received more than one url builds the composed query for it
	if (!typeof entryType === "string") {
		console.log("IS ARRAY");
		return entryType.reduce((previousEntryType, currentEntryType) => ({
			call: `${siteStructureHolder[previousEntryType].call} ${siteStructureHolder[currentEntryType].call}`,
			fragments: `${siteStructureHolder[previousEntryType].fragments} ${siteStructureHolder[currentEntryType].fragments}`,
		}));
	}
	console.log("IS NOT ARRAY");

	// if there is only a single entry type for the path/{slug} return its correspondant mapping object
	return siteStructureHolder[entryType] || {};
}

// Queries for the GraphQL
export async function getEntryByType(entryType, slug) {
	console.log("IN FETCH ", entryType, slug);
	const globalsBuild = globalFieldsBuilder();
	const propertyBuild = graphPropertiesBuilder(entryType || "landingPage");

	console.log("PROPERTY BUILDER ", propertyBuild);

	const query = `
  query getEntryByType($slug:[String]){
    entry(type: "${entryType || "landingPage"}",slug: $slug){
      ${propertyBuild.call || "slug"}
    }
    globalSets{
      handle
      ${globalsBuild.call}
    }
  }
  ${propertyBuild.fragments || ""}
  ${globalsBuild.fragments}
  `;

	//console.log("SUPER QUERY ", query);

	const data = await fetchAPI(query, {
		variables: {
			slug: slug,
		},
	});

	return data || {};
}

export async function getEntryBySectionHandle(entryType, slug, justEntryInfo) {
	//console.log("IN FETCH ", entryType, slug);
	const globalsBuild = globalFieldsBuilder();
	const propertyBuild = graphPropertiesBuilder(entryType || "");
	console.log("PROPERTIES BEING ANALIZED", propertyBuild);

	//console.log("AFTER FETCH", propertyBuild);
	const query = `
  query getEntryBySection($slug:[String]){
    entry(section: "${entryType || ""}",slug: $slug){
      ${propertyBuild.call}
    }
    globalSets{
      handle
      ${(!justEntryInfo && "") || globalsBuild.call}
    }
  }
  ${propertyBuild.fragments}
  ${(!justEntryInfo && "") || globalsBuild.fragments}
  `;

	console.log("SUPER QUERY ", query);

	const data = await fetchAPI(query, {
		variables: {
			slug: slug,
		},
	});

	console.log("DATA BEING SENT ", data);

	return data || {};
}

export async function getEntriesBySectionHandle(entryType, slug, limit) {
	//console.log("IN FETCH ", entryType, slug);
	const globalsBuild = globalFieldsBuilder();
	const propertyBuild = graphPropertiesBuilder(entryType || "");
	//console.log("AFTER FETCH", propertyBuild);
	const query = `
  query getEntriesBySectionHandle($slug:[String]){
    entries(section: "${entryType || ""}",slug: $slug${
		limit ? "limit: " + limit : ""
	}){
      ${propertyBuild.call}
    }
    globalSets{
      handle
      ${globalsBuild.call}
    }
  }
  ${propertyBuild.fragments}
  ${globalsBuild.fragments}
  `;

	//console.log("SUPER QUERY ", query);

	const data = await fetchAPI(query, {
		variables: {
			slug: slug,
		},
	});

	console.log("DATA BEING SENT ", data);

	return data || {};
}

export async function getSingle(entryType) {
	const homeSingle = homeSimple();
	const data = await fetchAPI(`
    {
      entries(type:"${entryType}"){
          title
          slug
          
      }
    }
  `);
}

export async function getLatestWebinars() {
	const data = await fetchAPI(`
    query getLatestWebinars{
      query getLatestWebinars{
        entries(section: "webinars") {
          ... on webinars_register_Entry{
            title
            specialStyle
            releaseDate
            featuredImage {
              ... on AssetInterface{
                id
                title
                url
              }
            }
            imageGradient {
              id
              url
              title
              slug
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
          ... on webinars_webinars_Entry{
            title
            specialStyle
            imageGradient {
              id
            }
            featuredImage {
              ... on AssetInterface{
                title
                url
              }
            }
            eyebrow
            featured
            duration
            releaseDate
            embeddedVideo
            description
            featuredAuthors {
              id
              name
              photo
              slug
            }
            relatedResource {
              id
              uri
              url
              slug
            }
            formId
            formHeader
            formCopy
            belowTheFormCopy
            landingPageNavigation
            canonical
            defaultSourceUtm
            defaultMediumUtm
            defaultCampaignUtm
            index
            seoDescription
            seoTitle
          }
          
          ... on webinars_webinarSpecial_Entry{
            specialStyle
            imageGradient{
              ... on backgroundColor_Category{
                id
                slug
                title
              }
            }
            featuredImage{
              ... on AssetInterface{
                title
                url
              }
            }
            eyebrow
            descriptionRichText
            eventDate
            embeddedVideo
            featuredAuthors{
               ... on UserInterface{
                name
                title
                photo {
                  ... on AssetInterface{
                    title
                    url
                  }
                }
              }
            }
            webinarBoilerplate{
              ... on webinarBoilerplate_boilerplate_BlockType{
                boilerPlateTitle
                boilerPlateCopyText
              }
            }
            formId
            formHeader
            formCopy
            belowTheFormCopy
            formSuccessMessage
            canonical
            defaultSourceUtm
            defaultCampaignUtm
            index
            seoDescription
            seoTitle
          }
        }
        
      }
    }
  `);

	return data.entries;
}

export async function getRecentWebinars() {
	const data = await fetchAPI(`
  
  `);

	return data.entries || [];
}

export async function getFeaturesLinking() {
	const data = await fetchAPI(`
    query getFeatures{
      entries(section: "featureDetail"){
        title
        url
        level
        children {
          title
          url
        }
      }
    }
  `);

	return data.entries;
}

export async function getBlogEntries() {
	const data = await fetchAPI(`
  query getBlogEntries{
    entries(section:"blog", limit:8) {
      title
      typeHandle
      
      ... on blog_blog_Entry{
        readingTime
        seoDescription
        url
        slug
        featuredImage{
          url
          width
          height
        }
        blogCategories(level:1){
          title
        }
        author{
          firstName
          lastName
          ... on User{
            username
            authorTitle
          }
          photo {
            url
          }
        }
      }
      ... on blog_blogBuilder_Entry{
        readingTime
        seoDescription
        url
        featuredImage{
          url
          width
          height
        }
        blogCategories(level:1){
          title
        }
        author{
          firstName
          lastName
          ... on User{
            username
            authorTitle
          }
          photo {
            url
          }
        }
      }
      
    }
  }
  `);

	return data.entries;
}

export async function getBlogFeaturedEntries() {
	const data = await fetchAPI(`
  query getBlogFeaturedEntries{
    entries(section:"blog", limit:8, featuredArticle:1){
      title
      typeHandle
      
      ... on blog_blog_Entry{
        readingTime
        seoDescription
        url
        featuredImage{
          url
          width
          height
        }
        blogCategories(level:1){
          title
        }
        author{
          firstName
          lastName
          ... on User{
            username
            authorTitle
          }
          photo {
            url
          }
        }
      }
      ... on blog_blogBuilder_Entry{
        readingTime
        seoDescription
        url
        featuredImage{
          url
          width
          height
        }
        blogCategories(level:1){
          title
        }
        author{
          firstName
          lastName
          ... on User{
            username
            authorTitle
          }
          photo {
            url
          }
        }
      }
      
    }
  }
  `);

	return data.entries;
}

export async function getGlobalSets() {
	const data = await fetchAPI(`
      globalSets{
        ... webBanner
        ... g2CrowdRating
        ... globalUserPersonalization
        ... googleOptimize
        ... marketoConfiguration
        ... promotedBlogPost
        ... resourcesList
        ... defaultAuthors
      }
    
    fragment webBanner  on webBanner_GlobalSet{
          webBannerStatus
          webBannerColor
          webBannerLink
          webBannerTextDesktop
          webBannerTextMobile
        }
        
    fragment g2CrowdRating on g2crowdRating_GlobalSet{
          rating
          reviewCount
        }
        
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
        
        fragment googleOptimize on googleOptimize_GlobalSet{
          googleOptimizeEntries{
            slug
          }
        }
        
        fragment marketoConfiguration on marketoConfigurations_GlobalSet{
          replaceMarketoForms
        }
        
        fragment promotedBlogPost on promotedBlogPosts_GlobalSet{
          featuredBlogPost{
            slug
          }
        }
        
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
    `);

	console.log("returning ", data.data);

	return data.globalSets;
}

export async function getAllPostsWithSlug() {
	const data = await fetchAPI(`
        {
            entries(id:1){
                title
                slug
            }
        }
    `);
	return data.entries;
}

export async function getBlogCategoriesMenu() {
	const data = await fetchAPI(`
      query getBlogCategoriesMenu{
        categories(groupId: "1",level:1){
          id
          title
          level
          slug
          groupHandle
          uri
        }
      }
    `);
	return data.categories;
}

export async function getBlogFormats() {
	const data = await fetchAPI(`
      query getBlogFormats{
        categories(groupId: "6",level:1){
          id
          title
          level
          slug
          groupHandle
          uri
        }
      }
    `);
	return data.categories;
}

// Blog entries
export async function getFeaturedPosts(entryId) {
	const data = await fetchAPI(`
    query{
      entries(section: "blog", limit: 3, id: "not ${entryId}"){
        id
        title
        slug
        typeHandle
        featuredImage{
          url
          title
          altText
        }
        seoDescription
        blogCategories{
          slug
          title
        }
        author{
          id
          name
          authorTitle
          photo{
            url
          }
        }
        
      }
    }
  `);

	return data.entries;
}

export async function getBlogAd() {
	const data = await fetchAPI(`
    query{
      entry(section: "blogIndex"){
        id
        title
        slug
        typeHandle
        featuredImage{
          url
          title
          altText
        }
        author{
          id
          name
          authorTitle
          photo{
            url
          }
        }
        
      }
    }
  `);

	return data.entries;
}

export async function getBlogEntry(slug) {
	const data = await fetchAPI(
		`
  query getBlogEntry($slug:[String]){
      entry(slug: $slug){
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
          image{
            url
            title
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
            title
            altText
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
            title
            altText
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
      reducePadding
      linkToNav
      stickyNavName
      removeCtas
    }
    
    fragment twoCol on landingBlocks_twoColumn_BlockType{
      typeHandle
      backgroundColor {
        id
        title
        slug
      }
      sectionsHeader
      eyebrowColor {
        id
        title
        slug
      }
      eyebrow
      copy
      bulletsColor {
        id
        title
        slug
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
		{
			variables: {
				slug: slug,
			},
		}
	);
	return data.entry;
}
import { landingPageHeroFragment } from "./graphql/fieldGroups/LandingPageFieldGroups";
export async function getLandingPageEntry(slug) {
	const data = await fetchAPI(
		`
    query getLandingPageEntry($slug:[String]){
      entry(type: "landingPage",slug: $slug){
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
      }
    }
    
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
		{
			variables: {
				slug: slug,
			},
		}
	);
	console.log("ENTRY ", data);

	return data.entry;
}

export const getOnDemandWebinar = async () => {
	const data = await fetchAPI(
		`
    query{
      entries(section: "webinars", type: "webinars",embeddedVideo:"not null"){
				title
        url
        uri
        ... on webinars_webinars_Entry{
          formCopy
          description
          embeddedVideo
          duration
        }
      }
    }
  `,
		{
			variables: {},
		}
	);

	return data.entries || [];
};

export const getPathsBySection = async (sectionHandle, limit) => {
	const paths = await fetchAPI(`
    query paths{
      entries(section: "${sectionHandle}", limit: ${limit ? limit : 10}){
        slug
      }
    }
  `);

	return paths.entries;
};

import { crmComparisonHeroFragment } from "./graphql/fieldGroups/CrmComparisonFieldGroups";
export async function getCrmComparison(slug) {
	const data = await fetchAPI(
		`
    query getCrmComparison($slug:[String]){
      entry(type: "landingPage",slug: $slug){
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
      }
    }
    
    fragment landingBlockFragment on landingBlocks_MatrixField{
      ${crmComparisonHeroFragment.call}
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
    ${crmComparisonHeroFragment.declaration}
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
        typeHandle
        title
        ... on numbers_numbers_Entry{
          eyebrow
          number
          subText
        }
        clickthrough
        image {
          ... on landingPageImages_Asset {
            title
            altText
            optimizedLandingImages {
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
          uri
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
          ... on comparisonFeature_comparisonFeature_Entry {
            description
            copperCheckmark
            copperText
            competitorCheckmark
            competitorText
          }
        }
        lastInstance
        linkToNav
        headerLogoOne {
          ... on landingPageImages_Asset {
            url
            width
            height
            optimizedLandingImages {
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
        headerLogoTwo {
          ... on landingPageImages_Asset {
            url
            width
            height
            optimizedLandingImages {
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
		{
			variables: {
				slug: slug,
			},
		}
	);
	console.log("ENTRY ", data);

	return data.entry;
}
