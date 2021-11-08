const Generalimage = ({ image }) => {
	let contentImage = image[0];

	let optimizedImages = contentImage.optimizedLandingImages;

	return (
		<>
			{contentImage ? (
				<>
					{optimizedImages.srcset?.length > 0 ? (
						<picture>
							{optimizedImages.srcsetWebP ? (
								<source
									srcSet={optimizedImages.srcsetWebP}
									sizes="100vw"
									type="image/webp"
								/>
							) : (
								""
							)}

							<img
								src={optimizedImages.src}
								srcSet={optimizedImages.srcset}
								sizes="100vw"
								alt={
									contentImage.altText?.length
										? contentImage.altText
										: contentImage.title
								}
							/>
						</picture>
					) : (
						<img
							src={contentImage.url}
							alt={
								contentImage.altText?.length
									? contentImage.altText
									: contentImage.title
							}
						></img>
					)}
				</>
			) : (
				""
			)}
		</>
	);
};

export default Generalimage;
