const HalfFullImageHero = ({
	backgroundColor,
	image,
	eyebrow,
	eyebrowSettings,
	copyLogo,
	richText,
	ctas,
}) => {
	const imageToUse = image[0];
	const optimizedImages = imageToUse.optimizedLandingImages;
	return (
		<section
			class={`c-hero--split ${
				backgroundColor[0] ? backgroundColor[0].slug : "hot-pink"
			} product-page`}
		>
			<div class="c-image">
				{optimizedImages?.optimizedImageUrls?.length > 0 ? (
					<picture>
						{optimizedImages.srcsetWebP ? (
							<source
								srcset={optimizedImages.srcsetWebP()}
								sizes="100vw"
								type="image/webp"
							/>
						) : (
							""
						)}
						<img
							src="{{ optimizedImages.src() }}"
							srcset="{{ optimizedImages.srcset() }}"
							sizes="100vw"
							alt="{{ image.altText is defined and image.altText|length ? image.altText : image.title }}"
						/>
					</picture>
				) : (
					<img
						src={image.url}
						alt={
							imageToUse?.altText?.length
								? imageToUse.altText
								: imageToUse.title
						}
					/>
				)}
			</div>
			<div class="container">
				<div class="row">
					<div class="col-md-6 c-valign--middle">
						<HeroCopy
							slug={slug}
							loopIndex={loopIndex}
							eyebrow={eyebrow}
							eyebrowSettings={eyebrowSettings}
							copyLogo={copyLogo}
							richText={richText}
							ctas={ctas}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HalfFullImageHero;
