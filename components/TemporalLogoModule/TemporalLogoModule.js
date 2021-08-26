import Image from "next/image";

const TemporalLogoModule = ({header, logos, sameSpacing}) => {
  const logosLength = logos ? (logos.length ? 5 : (logos.length - 1)) : 0;
   console.log("Container lenght", logosLength)

   const returnImages = () =>{

   };

  return (
    <div  style={{background: '#F5F5F5'}}>
      <section className=" two-col__section max-w-6xl m-auto pt-32 pb-5 bg-soft-gray">
          <div className="w-full pb-20">
            <div className='text-center' dangerouslySetInnerHTML={{ __html: header }}></div>
          </div>
          <div>

          </div>
      <div className="w-10/12 mx-auto mb-20">
        <div className={`grid md:grid-cols-${ logosLength } gap-4 items-center`}>
            {
              logosLength ?
                logos.map( (logo, index) => {
                  if(index < logosLength && logo.optimizedLandingImages?.src){
                  console.log("Logo detail ", logo);
                  return (
                    <div>
                      <Image
                        src={`https:${logo.optimizedLandingImages.src ? logo.optimizedLandingImages.src : "//d2ydtwisqcxv72.cloudfront.net/landing/_1200x1200_crop_center-center_82_line/248609/venture-capital-hero.png.webp"}` }
                        //layout='fill'
                        // srcSet={props.image[0].optimizedLandingImages.srcset}
                        width={logo.optimizedLandingImages.originalImageWidth}
                        height={logo.optimizedLandingImages.originalImageHeight}
                      />
                    </div>
                  );
                  }
                } )
              :
              null
            }
        </div>
      </div>
    </section>
    </div>
  );
}

export default TemporalLogoModule;