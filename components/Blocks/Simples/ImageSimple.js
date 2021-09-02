import Image from "next/image";

const ImageSimple = ({image}) =>{
  let singleImage = image[0];
  if(image.length){
    return '';
  }
  let  optimizedImages = singleImage.optimizedLandingImages;
  return (
    <>
    {
      singleImage.length ?      
      <>
      {
        optimizedImages.optimizedImageUrls.length > 0 ?
          <picture>
            {
              optimizedImages.srcsetWebP() ?
                <source srcset={ optimizedImages.srcsetWebP() }
                sizes="100vw"
                type="image/webp" />
                : ''
            }
            <img src={ optimizedImages.src() }
                srcset={ optimizedImages.srcset() }
                sizes="100vw"
                alt={ image?.altText|length ? image.altText : image.title } />
          </picture>
          : <img src={ image.url } alt={ image.altText?.length ? image.altText : image.title } />
      }
      </>
      : ''
    }
    </>
  )

};

export default ImageSimple