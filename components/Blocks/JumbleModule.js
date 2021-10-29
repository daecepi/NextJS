import CtaGroup from "./Simples/CtaGroup";

const JumbleModule = ({ eyebrow, copy, ctas, image }) => {
	let contentImage = image[0];

	let optimizedImages = contentImage.optimizedLandingImages;

	return (
		<section className="c-case-study c-case-study--align-left home-quote extra-top-margin--medium extra-bottom-margin--medium ">
			<div className="container colorblock--hot-pink">
				<div className="c-case-study__container col-md-11 no-padding">
					<div className="c-case-study__content c-valign--middle">
						<div className="row row-eq-height">
							<div className="col-md-6">
								<pre className="c-eyebrow c-eyebrow--light">
									{matrixBlock.eyebrow | (length > 0)
										? matrixBlock.eyebrow
										: ""}
								</pre>
								<div className="c-panel__blockquote c-valign--middle">
									<div dangerouslySetInnerHTML={{ __html: copy }}></div>
									{ctas.length ? <CtaGroup ctas={ctas} /> : ""}
								</div>
							</div>

							<div className="col-md-6 c-align--center">
								<div className="c-image c-image--shadow">
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
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default JumbleModule;
