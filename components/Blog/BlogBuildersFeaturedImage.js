const BlogBuildersFeaturedImage = ({
	slug,
	handleType,
	featuredImage,
	imageGradient,
}) => {
	console.log(" FEATURED IMAGE ", featuredImage);
	const allowedEntryType =
		handleType === "blog" || handleType === "blogBuilder" ? true : false;
	const image = (featuredImage && featuredImage[0]) || undefined;
	const optimizedImages = image?.optimizedFeaturedImages || undefined;

	const customizedStyle =
		slug === "growing-customer-relationships-ebook"
			? { minHeight: "auto", height: "49vh" }
			: {};

	return (
		<div className="c-resource--header">
			{allowedEntryType && imageGradient.length ? (
				<div
					className={`c-resource--header__gradient c-resource--header__gradient--${
						imageGradient[length - 1].slug
					}`}
				></div>
			) : (
				""
			)}
			{image && (
				<>
					{allowedEntryType ? (
						<>
							{optimizedImages?.optimizedImageUrls?.length > 0 ? (
								<picture>
									<img
										className="c-resource--header__background-image"
										alt={
											image.altText?.length > 0 ? image.altText : image.title
										}
										src={optimizedImages.src}
										srcSet={optimizedImages.srcset}
										sizes="100vw"
									/>
								</picture>
							) : (
								<img
									src={image.url}
									alt={image.altText?.length ? image.altText : image.title}
									className="c-resource--header__background-image"
								></img>
							)}
						</>
					) : (
						<img
							src={image.url}
							alt={image.altText?.length ? image.altText : image.title}
							className="c-resource--header__background-image c-resource--header__background-image--fullscreen"
							style={{ ...customizedStyle }}
						/>
					)}
				</>
			)}
		</div>
	);
};

export default BlogBuildersFeaturedImage;
