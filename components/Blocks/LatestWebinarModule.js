import { useCallback, useState } from "react";
import { getLatestWebinars } from "../../lib/api";

const LatestWebinarModule = ({ header, removeHeader, addPaddingBottom }) => {
	const { state, changeState } = useState({
		webinarList: [],
	});

	const webinarRetriever = useCallback(async () => {
		const webinarData = await getLatestWebinars();

		console.log("Webinar data received", webinarData);

		changeState({ ...state, webinarList: webinarData.slice(0, 2) });
	});

	webinarRetriever();

	return (
		<section
			className={`h-section-padding ${
				addPaddingBottom ? "extra-bottom-margin--small" : ""
			}`}
		>
			<div className="container">
				{removeHeader ? (
					<h2 className="text-center">
						{header?.length > 0
							? header
							: "Learn from our community of experts"}
					</h2>
				) : (
					""
				)}

				<div className="row extra-top-margin--small">
					{state.webinarList.map((webinar) => {
						const image = webinar.featuredImage[0] || undefined;
						const optimizedImage = image
							? image.optimizedLandingImages
							: undefined;
						return (
							<div className="col-md-4">
								<div className="c-card__entry h-webinar">
									<a className="c-card__clickthrough" href={webinar.url}></a>
									{image ? (
										<>
											{optimizedImage.optimizedImagesUrls.length ? (
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
														alt={entry.title}
													/>
												</picture>
											) : (
												<img
													className="c-card__default__image"
													src={image.url}
													alt={entry.title}
												/>
											)}
										</>
									) : (
										<picture>
											<source
												type="image/webp"
												srcSet="/imgs/industry/industry-agency-blog-01@2x.webp"
												className="c-card__default__image"
												alt="Industry agency blog"
											/>
											<source
												type="image/png"
												srcSet="/imgs/industry/industry-agency-blog-01@2x.jpg"
												className="c-card__default__image"
												alt="Industry agency blog"
											/>
											<img
												className="c-card__default__image"
												src="/imgs/industry/industry-agency-blog-01@2x.jpg"
												alt="Industry agency blog"
											/>
										</picture>
									)}
									<div className="c-card__entry__content">
										{webinar.type == "register" ? (
											<>
												<span className="t-eyebrow t-special-eyebrow t-special-eyebrow--lt-purple">
													Upcoming webinar
												</span>
												<br />
											</>
										) : (
											<>
												<span className="t-eyebrow t-special-eyebrow t-special-eyebrow--lt-purple">
													{webinar.releaseDate
														? webinar.releaseDate >= new Date()
														: "Video"}
												</span>
												<br />
											</>
										)}
										<span className="t-eyebrow ">{webinar.eyebrow}</span>
										<h4 className="c-card__entry-title multiple-2-card-trailer">
											<a className="underline_from_lefsettt" href={webinar.url}>
												{webinar.title}
											</a>
										</h4>
										<p className="p-sm multiple-5-card-trailer">
											{webinar.description}
										</p>
									</div>
									<div className="c-card__meta">
										{webinar.type === "register" ? (
											<a className="t-link" href={webinar.url}>
												Sign up
											</a>
										) : (
											<a className="t-link" href={webinar.url}>
												Watch now
											</a>
										)}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default LatestWebinarModule;
