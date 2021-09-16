import HeroCopy from "./HeroInternalComponents/HeroCopy";

const FullImageHero = ({
	slug,
	loopIndex,
	image,
	imageOverlay,
	eyebrow,
	eyebrowSettings,
	copyLogo,
	richText,
	ctas,
}) => {
	return (
		<section
			class={`c-hero c-hero--full ${imageOverlay ? "h-image-overlay" : ""}`}
			style={{ backgroundImage: url(`${image[0]?.url ? image[0].url : ""}`) }}
		>
			<div class="container">
				<div class="row">
					<div class="c-hero__container col-md-10 offset-md-1 c-valign--middle text-md-center">
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

export default FullImageHero;
