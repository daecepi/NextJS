import gql from 'graphql-tag';

const landingBlockBuilder = `
  fragment c on landingBlocks_MatrixField{
    ... on landingBlocks_twoColumn_BlockType{
          eyebrow
          typeHandle
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
    }
  }
  `

  export default landingBlockBuilder;

