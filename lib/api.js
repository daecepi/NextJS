export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

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
          }
        }
      }
    `,{
        variables: {
          slug: slug,
        },
      });
    return data.entry;
}