const SimpleTwoColColorConfined = ({ backgroundColor, eyebrow, copy, image, ctaText, ctaUrl  }) => {
  let contentImage = image[0]

  let optimizedImages = contentImage.optimizedLandingImages
  return (
    <section class="c-jumble confined-contaner no-top-margin">
        <div class="container">

          <div class="c-jumble__container col-md-10 offset-md-2 no-padding">
            <div class="c-jumble__content c-valign--middle">
                
                <div class="row column-reverse">
                  <div class="col-md-5 order-md-2">
                    <div class="c-image">
                    {
                      contentImage ?
                      <>
                        {
                          optimizedImages.optimizedImageUrls.length > 0 ?
                            <picture>
                              {
                                optimizedImages.srcsetWebP ?
                                  <source srcset={ optimizedImages.srcsetWebP() } 
                                        sizes="100vw"
                                        type="image/webp" />
                                : ''
                              }
                              
                              <img src={ optimizedImages.src() }
                                  srcset={ optimizedImages.srcset() }
                                  sizes="100vw"
                                  alt={ contentImage.altText?.length ? contentImage.altText : contentImage.title } />
                            </picture>
                          :
                          <img src={contentImage.url} alt={ contentImage.altText?.length ? contentImage.altText : contentImage.title }></img>
                        }
                      </>
                      : ''
                    }
                  </div>
                  <div class="col-md-7 order-md-1">	
                    <pre class="c-eyebrow c-eyebrow--light">{eyebrow}</pre>
                    <div dangerouslySetInnerHTML={{ __html: copy }}></div>
                      {
                        ctaText.length && ctaUrl.length ?
                        <a class="t-link h-white" href={ctaLink}>{ctaText}</a>
                        : ''
                      }
                  </div>
                </div>
                        
            </div>
          </div>

        </div>
        </div>
      </section>
  )
}

export default SimpleTwoColColorConfined