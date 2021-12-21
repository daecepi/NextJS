export const demoBlocksField = {
	call: `
    demoBlocks{
      ... on demoBlocks_demoHero_BlockType{
        ${demoHeroDemoBlockField}
      }
    }
  `,
	fragments: `
  
  `,
};

export const demoHeroDemoBlockField = {
	call: `
  ... on demoBlocks_demoHero_BlockType{
    subHeader
    paragraph
  }
  `,
	fragments: ``,
};

export const demoHeroDemoBlockField = {
	call: `
  ... on demoBlocks_demoHero_BlockType{
    subHeader
    paragraph
  }
  `,
	fragments: ``,
};
export const demoThumbnailDemoBlockField = {
	call: `
  ... on demoBlocks_demoThumbnails_BlockType{
    subHeader
    paragraph
  }
  `,
	fragments: ``,
};
export const demoHeroDemoBlockField = {
	call: `
  ... on demoBlocks_demoHero_BlockType{
    subHeader
    paragraph
  }
  `,
	fragments: ``,
};
