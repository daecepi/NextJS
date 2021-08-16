import Image from "next/image";
const TwoColumnComponent = (props) => {
  return (
    <section className="two-col__section max-w-6xl m-auto pt-32 pb-5">
      <div className="two-col__container flex flex-wrap items-center">
        {/* First col */}
        <div
          className={`two-col__copy w-full md:w-2/5 
          ${props.imageOrientation == "dropLeft" ? "two-col__right" : null}
          ${props.imageOrientation == "left" ? "two-col__right" : ""}
          px-4
          `}
        >
          <div dangerouslySetInnerHTML={{ __html: props.copy }}></div>
        </div>

        {/* second col */}
        <div
          className={`two-col__asset-form w-full md:w-3/5 
          ${props.imageOrientation == "dropLeft" ? "two-col__left" : null}
          ${props.imageOrientation == "left" ? "two-col__left" : null}
          `}
        >
          <Image
            src={`https:${props.image[0].optimizedLandingImages.src}`}
            // srcSet={props.image[0].optimizedLandingImages.srcset}
            width={props.image[0].optimizedLandingImages.originalImageWidth}
            height={props.image[0].optimizedLandingImages.originalImageHeight}
          />
          {/* <picture>
            <source
              srcSet={props.image[0].optimizedLandingImages.srcWebp}
              type="image/webp"
            ></source>
            <img
              src={props.image[0].optimizedLandingImages.src}
              srcSet={props.image[0].optimizedLandingImages.srcset}
              width={props.image[0].optimizedLandingImages.originalImageWidth}
              height={props.image[0].optimizedLandingImages.originalImageHeight}
            />
          </picture> */}
        </div>
      </div>
    </section>
  );
};

export default TwoColumnComponent;
