import ImageSimple from "../Simples/ImageSimple";

const DefaultHero = ({
	slug,
	loopIndex,
	backgroundColor,
	eyebrow,
	eyebrowSettings,
	copyLogo,
	specialClass,
	richText,
	ctas,
	assetText,
	image,
	imageContain,
	displayVideo,
	heroVideoUrl,
}) => {
	let imageStyles = { objectFit: "initial", height: "auto", width: "100%" };
	if (entry.slug == "email-tracking-lp") {
		imageStyles = { ...imageStyles, maxWidth: "unset" };
	}
	return (
		<section
			id="starting-hero"
			class={`c-hero--split landing-hero ${
				backgroundColor ? backgroundColor.slug : "hot-pink"
			} ${removeNavigation ? "h-no-nav" : ""} ${
				specialClass?.length ? specialClass : ""
			}`}
			style="{{ notFirstHero is defined and notFirstHero is not null and notFirstHero == 1 ? 'padding-top: 100px; padding-bottom: 100px; min-height: 0;' : '' }}"
		>
			<div class="container">
				<div class="row row--no-reverse">
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
					{() => {
						if (displayVideo == "1" && heroVideoUrl) {
							return (
								<div class="col-md-6 c-valign--middle">
									<div class="hero-text video-header">{assetText}</div>
									<div class="c-video ">
										<div
											class="wistia_responsive_padding"
											style="padding:56.25% 0 0 0;position:relative;"
										>
											<div
												class="wistia_responsive_wrapper"
												style="height:100%;left:0;position:absolute;top:0;width:100%;"
											>
												<iframe
													src="{{ heroValues.heroVideoUrl }}"
													title="Wistia video player"
													allowtransparency="true"
													frameborder="0"
													scrolling="no"
													class="wistia_embed"
													name="wistia_embed"
													allowfullscreen
													mozallowfullscreen
													webkitallowfullscreen
													oallowfullscreen
													msallowfullscreen
													width="100%"
													height="100%"
												></iframe>
											</div>
										</div>
										<script
											src="https://fast.wistia.net/assets/external/E-v1.js"
											async
										></script>
									</div>
								</div>
							);
						} else if (image?.length) {
							return (
								<div
									class="col-md-6 c-valign--middle c-image invert-sm-spacing c-valign--middle"
									style="position: relative; left: 0px; height: fit-content; max-height: none;"
								>
									{assetText?.length ? (
										<div class="hero-text image-header">{assetText}</div>
									) : (
										""
									)}
									<ImageSimple
										image={image}
										class={`${imageContain ? "h-image-contain" : ""}`}
										style={imageStyles}
									/>
								</div>
							);
						} else {
							return <div class="col-md-6"></div>;
						}
					}}
				</div>
			</div>
		</section>
	);
};

export default DefaultHero;
