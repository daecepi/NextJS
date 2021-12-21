const TeaserImage = ({ featuredImage }) => {
	// console.log("FEATURED IMAGE GETTING HERE ", featuredImage);
	const singleFeaturedImage = featuredImage?.length
		? featuredImage[0]
		: undefined;
	const optimizedImages = singleFeaturedImage?.optimizedFeaturedImages
		? singleFeaturedImage.optimizedFeaturedImages
		: undefined;
	return (
		<>
			{singleFeaturedImage ? (
				<>
					{optimizedImages?.optimizedImageUrls?.length ? (
						<picture>
							<img
								className="c-blog-card__image lazyload"
								src={optimizedImages?.placeholderBox || ""}
								data-src={optimizedImages.src}
								data-srcSet={optimizedImages.srcset}
								alt={
									singleFeaturedImage.altText?.length
										? singleFeaturedImage.altText
										: singleFeaturedImage.title
								}
							/>
						</picture>
					) : (
						<img
							className="c-blog-card__image"
							src={singleFeaturedImage.url}
							alt={
								singleFeaturedImage.altText?.length
									? singleFeaturedImage.altText
									: singleFeaturedImage.title
							}
						/>
					)}
				</>
			) : (
				<div
					className="c-blog-card__image"
					style={{ backgroundImage: "url('/imgs/blog-logo.jpg')" }}
				></div>
			)}
		</>
	);
};

export default TeaserImage;
