import FormBase from "./HeroInternalComponents/FormBase";

const MarketoFormHero = ({
	slug,
	loopIndex,
	removeNavigation,
	marketoSide,
	notFirstHero,
	backgroundColor,
	specialClass,
	image,
	imageContain,
	displayVideo,
	heroVideoUrl,
	eyebrow,
	eyebrowSettings,
	copyLogo,
	richText,
	ctas,
	heroMarketoId,
	marketoFormCopy,
	marketoThankYouMessage,
	successVideoEmbedCode,
}) => {
	const sectionStyles = notFirstHero
		? { paddingTop: "100px", paddingBottom: "100px", minHeight: "0" }
		: {};
	if (marketoSide === "left") {
		return (
			<section
				id="starting-hero"
				class={`c-hero--split
      landing-hero 
      ${notFirstHero ? "not-first" : ""}
      ${
				backgroundColor.length && backgroundColor[0]
					? backgroundColor[0].slug
					: "hot-pink"
			}
      ${removeNavigation ? "h-no-nav" : ""} ${
					specialClass?.length ? specialClass : ""
				}`}
				style={sectionStyles}
			>
				<div class="container">
					<div class="row">
						<div class="col-md-6 c-valign--middle">
							<FormBase
								heroMarketoId={heroMarketoId}
								marketoFormCopy={marketoFormCopy}
								marketoThankYouMessage={marketoThankYouMessage}
								successVideoEmbedCode={successVideoEmbedCode}
							/>
						</div>
						{() => {
							if (displayVideo == "1" && heroVideoUrl) {
								return (
									<div class="col-md-6 c-valign--middle">
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
														src={heroValues.heroVideoUrl}
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
							} else if (imagen?.length) {
								const specificImage = image[0];

								return (
									<div
										class="col-md-6 c-valign--middle c-image invert-sm-spacing c-valign--middle"
										style={{ position: "relative", left: "0px" }}
									>
										<img
											style="object-fit: initial; height: auto;"
											class={imageContain ? "h-image-contain" : ""}
											src={specificImage.url}
											alt={
												specificImage?.altText?.length
													? specificImage.altText
													: specificImage.title
											}
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
	} else if (marketoSide === "right") {
		return (
			<section
				id="starting-hero"
				class={`c-hero--split landing-hero {{ backgroundColor ? backgroundColor.slug : 'hot-pink' }} ${
					removeNavigation ? "h-no-nav" : ""
				} ${heroValues?.specialClass?.length ? heroValues.specialClass : ""}`}
				style={sectionStyles}
			>
				<div class="container">
					<div class="row  row--no-reverse">
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
						<div class="col-md-6 c-valign--middle">
							<FormBase
								heroMarketoId={heroMarketoId}
								marketoFormCopy={marketoFormCopy}
								marketoThankYouMessage={marketoThankYouMessage}
								successVideoEmbedCode={successVideoEmbedCode}
							/>
						</div>
					</div>
				</div>
			</section>
		);
	}
};

export default MarketoFormHero;
