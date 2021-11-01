import Image from "next/image";

const ImageSimple = ({ image, classAtr, stylesAtr }) => {
	console.log("Image object obtained ", image);
	if (!image.length) {
		return "";
	}
	let singleImage = image[0];
	let optimizedImages = singleImage.optimizedLandingImages;
	return (
		<>
			{optimizedImages.srcset?.length > 0 ? (
				<picture>
					{optimizedImages.srcsetWebp ? (
						<source
							srcSet={optimizedImages.srcsetWebp}
							sizes="100vw"
							type="image/webp"
						/>
					) : (
						""
					)}
					<img
						src={optimizedImages.src}
						srcSet={optimizedImages.srcset}
						className={classAtr ? classAtr : ""}
						style={stylesAtr ? { ...stylesAtr } : {}}
						sizes="100vw"
						alt={image.altText?.length ? image.altText : image.title}
					/>
				</picture>
			) : (
				<img
					className={classAtr ? classAtr : ""}
					style={stylesAtr ? { ...stylesAtr } : {}}
					src={image.url}
					alt={image.altText?.length ? image.altText : image.title}
				/>
			)}
		</>
	);
};

export default ImageSimple;
