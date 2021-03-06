import ImageSimple from "../Simples/ImageSimple";

import HeroCopy from "./HeroInternalComponents/HeroCopy";

const DefaultHero = ({
	slug,
	loopIndex,
	notFirstHero,
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
	const removeNavigation = false;
	// Defines not first hero styles
	const sectionStyles = notFirstHero
		? { paddingTop: "100px", paddingBottom: "100px", minHeight: "0" }
		: {};

	const addAppropiateAsset = () => {
		console.log("THIS IS BEING CALLED");
		if (displayVideo == "1" && heroVideoUrl) {
			return (
				<div className="col-md-6 c-valign--middle">
					<div className="hero-text video-header">{assetText}</div>
					<div className="c-video ">
						<div
							className="wistia_responsive_padding"
							style={{ padding: "56.25% 0 0 0", position: "relative" }}
						>
							<div
								className="wistia_responsive_wrapper"
								style={{
									height: "100%",
									left: "0",
									position: "absolute",
									top: "0",
									width: "100%",
								}}
							>
								<iframe
									src="{{ heroValues.heroVideoUrl }}"
									title="Wistia video player"
									allowtransparency="true"
									frameborder="0"
									scrolling="no"
									className="wistia_embed"
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
					className="col-md-6 c-valign--middle c-image invert-sm-spacing c-valign--middle"
					style={{
						position: "relative",
						left: "0px",
						height: "fit-content",
						maxHeight: "none",
						maxWidth: "50%",
					}}
				>
					{assetText?.length ? (
						<div className="hero-text image-header">{assetText}</div>
					) : (
						""
					)}
					<ImageSimple
						image={image}
						classAtr={`${imageContain ? "h-image-contain" : ""}`}
						stylesAtr={imageStyles}
					/>
				</div>
			);
		} else {
			return <div className="col-md-6"></div>;
		}
	};

	let imageStyles = {
		objectFit: "initial",
		height: "auto",
		width: "100%",
	};
	if (slug == "email-tracking-lp") {
		imageStyles = { ...imageStyles, maxWidth: "unset" };
	}
	return (
		<section
			id="starting-hero"
			className={`c-hero--split landing-hero ${
				backgroundColor && backgroundColor[0]?.slug
					? backgroundColor[0].slug
					: "hot-pink"
			} ${removeNavigation ? "h-no-nav" : ""} ${
				specialClass?.length ? specialClass : ""
			}`}
			style={{ ...sectionStyles }}
		>
			<div className="container">
				<div className="row row--no-reverse">
					<div className="col-md-6 c-valign--middle">
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
					{addAppropiateAsset()}
				</div>
			</div>
		</section>
	);
};

export default DefaultHero;
