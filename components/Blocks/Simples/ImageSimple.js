import Image from "next/image";

const ImageSimple = ({ image, webpSource, classAtr, stylesAtr, imageWidth, imageHeight }) => {
	console.log("Image object obtained ", image);
	if (!image?.length) {
		return "";
	}
	let singleImage = image[0];
	let optimizedImages = singleImage.optimizedLandingImages;
	let width = imageWidth ? imageWidth : "806";
	let height = imageHeight ? imageHeight : "734";
	return (
		<>
			{optimizedImages?.srcset?.length > 0 ? (
				<picture>
					{optimizedImages?.srcsetWebp ? (
						<source
							srcSet={optimizedImages.srcsetWebp}
							sizes="100vw"
							type="image/webp"
						/>
					) : (
						""
					)}
					<Image
						src={optimizedImages.src}
						srcSet={optimizedImages.srcset}
						className={classAtr ? classAtr : ""}
						style={stylesAtr ? { ...stylesAtr } : {}}
						sizes="100vw"
						alt={image.altText?.length ? image.altText : image.title}
					/>
				</picture>
			) : (
				<picture>
					{webpSource ? <source srcSet={webpSource} type="image/webp" /> : ""}
					<Image
						className={classAtr ? classAtr : ""}
						style={stylesAtr ? { ...stylesAtr } : {}}
						// layout="fill"
						src={singleImage.url}
						width={width}
						height={height}
						alt={image.altText?.length ? image.altText : image.title}
					/>
				</picture>
			)}
		</>
	);
};

export default ImageSimple;
