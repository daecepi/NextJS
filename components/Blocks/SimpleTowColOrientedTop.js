const SimpleTwoColOrientedTop = ({ copy, image }) => {
	let contentImage = image[0];

	let optimizedImages = contentImage.optimizedLandingImages;
	return (
		<section className="c-cols">
			<div className="container">
				<div className="row">
					<div className="col-md order-2">
						<div className="c-image c-image--center no-embelleshment">
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
					</div>
					<div className="col-md order-1">
						<div dangerouslySetInnerHTML={{ __html: copy }}></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SimpleTwoColOrientedTop;
