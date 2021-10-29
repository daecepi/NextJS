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
			className={`c-hero c-hero--full ${imageOverlay ? "h-image-overlay" : ""}`}
			style={{ backgroundImage: url(`${image[0]?.url ? image[0].url : ""}`) }}
		>
			<div className="container">
				<div className="row">
					<div className="c-hero__container col-md-10 offset-md-1 c-valign--middle text-md-center">
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
