const SimpleTwoColColorConfined = ({
	backgroundColor,
	eyebrow,
	copy,
	image,
	ctaText,
	ctaUrl,
}) => {
	let contentImage = image[0];

	let optimizedImages = contentImage.optimizedLandingImages;
	return (
		<section className="c-jumble confined-contaner no-top-margin">
			<div className="container">
				<div className="c-jumble__container col-md-10 offset-md-2 no-padding">
					<div className="c-jumble__content c-valign--middle">
						<div className="row column-reverse">
							<div className="col-md-5 order-md-2">
								<div className="c-image">
									{contentImage ? (
										<>
											{optimizedImages.srcset?.length > 0 ? (
												<picture>
													{optimizedImages.srcsetWebP ? (
														<source
															srcset={optimizedImages.srcsetWebP}
															sizes="100vw"
															type="image/webp"
														/>
													) : (
														""
													)}

													<img
														src={optimizedImages.src}
														srcset={optimizedImages.srcset}
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
								</div>
								<div className="col-md-7 order-md-1">
									<pre className="c-eyebrow c-eyebrow--light">{eyebrow}</pre>
									<div dangerouslySetInnerHTML={{ __html: copy }}></div>
									{ctaText.length && ctaUrl.length ? (
										<a className="t-link h-white" href={ctaLink}>
											{ctaText}
										</a>
									) : (
										""
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SimpleTwoColColorConfined;
