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
			class={`h-section-padding ${
				addPaddingBottom ? "extra-bottom-margin--small" : ""
			}`}
		>
			<div class="container">
				{removeHeader ? (
					<h2 class="text-center">
						{header?.length > 0
							? header
							: "Learn from our community of experts"}
					</h2>
				) : (
					""
				)}

				<div class="row extra-top-margin--small">
					{state.webinarList.map((webinar) => {
						const image = webinar.featuredImage[0] || undefined;
						const optimizedImage = image
							? image.optimizedLandingImages
							: undefined;
						return (
							<div class="col-md-4">
								<div class="c-card__entry h-webinar">
									<a class="c-card__clickthrough" href={webinar.url}></a>
									{image ? (
										<>
											{optimizedImage.optimizedImagesUrls.length ? (
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
														src={optimizedImages.src()}
														srcset={optimizedImages.srcset()}
														sizes="100vw"
														alt={entry.title}
													/>
												</picture>
											) : (
												<img
													class="c-card__default__image"
													src={image.url}
													alt={entry.title}
												/>
											)}
										</>
									) : (
										<picture>
											<source
												type="image/webp"
												srcset="/imgs/industry/industry-agency-blog-01@2x.webp"
												class="c-card__default__image"
												alt="Industry agency blog"
											/>
											<source
												type="image/png"
												srcset="/imgs/industry/industry-agency-blog-01@2x.jpg"
												class="c-card__default__image"
												alt="Industry agency blog"
											/>
											<img
												class="c-card__default__image"
												src="/imgs/industry/industry-agency-blog-01@2x.jpg"
												alt="Industry agency blog"
											/>
										</picture>
									)}
									<div class="c-card__entry__content">
										{webinar.type == "register" ? (
											<>
												<span class="t-eyebrow t-special-eyebrow t-special-eyebrow--lt-purple">
													Upcoming webinar
												</span>
												<br />
											</>
										) : (
											<>
												<span class="t-eyebrow t-special-eyebrow t-special-eyebrow--lt-purple">
													{webinar.releaseDate
														? webinar.releaseDate >= new Date()
														: "Video"}
												</span>
												<br />
											</>
										)}
										<span class="t-eyebrow ">{webinar.eyebrow}</span>
										<h4 class="c-card__entry-title multiple-2-card-trailer">
											<a class="underline_from_lefsettt" href={webinar.url}>
												{webinar.title}
											</a>
										</h4>
										<p class="p-sm multiple-5-card-trailer">
											{webinar.description}
										</p>
									</div>
									<div class="c-card__meta">
										{webinar.type === "register" ? (
											<a class="t-link" href={webinar.url}>
												Sign up
											</a>
										) : (
											<a class="t-link" href={webinar.url}>
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
