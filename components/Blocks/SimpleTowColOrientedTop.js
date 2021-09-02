const SimpleTwoColOrientedTop = ({ copy, image }) => {
  let contentImage = image[0]

  let optimizedImages = contentImage.optimizedLandingImages
  return (
    <section class="c-cols">
  <div class="container">
    <div class="row">
      <div class="col-md order-2">
        <div class="c-image c-image--center no-embelleshment">
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
      </div>
      <div class="col-md order-1">
      <div dangerouslySetInnerHTML={{ __html: copy }}></div>
      </div>
    </div>
  </div>
</section>
  )
}

export default SimpleTwoColOrientedTop