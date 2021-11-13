import HeroCopy from "./HeroTypes/HeroInternalComponents/HeroCopy";
import ImageSimple from "./Simples/ImageSimple";

const TwoColModule = ({
	slug,
	loopIndex,
	backgroundColor,
	imageOrientation,
	eyebrow,
	richText,
	ctas,
	forcedCtas,
	image,
	removeShadow,
	addBottomPadding,
	imageWidth,
	imageHeight,
}) => {
	let width = imageWidth ? imageWidth : undefined;
	let height = imageHeight ? imageHeight : undefined;
	const internalStructure = () => {
		switch (imageOrientation) {
			case "left":
				return (
					<div class="row column-reverse">
						<div class="col-md-6 d-flex align-items-center order-1">
							<div
								class={`c-image c-image--center c-image--shadow ${
									removeShadow ? "h-remove-shadow" : ""
								}`}
							>
								{image?.length ? (
									<ImageSimple
										classAtr={removeShadow ? "h-remove-shadow" : ""}
										image={image}
										imageWidth={width}
										imageHeight={height}
									/>
								) : (
									""
								)}
							</div>
						</div>
						<div class="col-md-5 offset-md-1 c-valign--middle order-2">
							<HeroCopy
								slug={slug}
								eyebrow={eyebrow}
								richText={richText}
								ctas={ctas}
								forcedCtas={forcedCtas}
								loopIndex={0}
							/>
						</div>
					</div>
				);
				break;
			case "right":
				return (
					<div class="row">
						<div class="col-md-6 d-flex align-items-center offset-md-1 order-2">
							<div class="c-image c-image--center c-image--shadow {{ matrixBlock.removeShadow ? 'h-remove-shadow' : '' }}">
								{image?.length ? (
									<ImageSimple
										classAtr={removeShadow ? "h-remove-shadow" : ""}
										image={image}
										imageWidth={width}
										imageHeight={height}
									/>
								) : (
									""
								)}
							</div>
						</div>
						<div class="col-md-5 c-valign--middle order-1">
							<HeroCopy
								slug={slug}
								eyebrow={eyebrow}
								richText={richText}
								ctas={ctas}
								forcedCtas={forcedCtas}
								loopIndex={0}
							/>
						</div>
					</div>
				);
				break;
			case "dropRight":
				return (
					<div class="row">
						<div class="col-md-7 d-flex align-items-center order-2">
							<div class="c-image c-image--drop-right c-image--shadow {{ matrixBlock.removeShadow ? 'h-remove-shadow' : '' }}">
								{image?.length ? (
									<ImageSimple
										classAtr={`drop-right__img ${
											removeShadow ? "h-remove-shadow" : ""
										}`}
										image={image}
										imageWidth={width}
										imageHeight={height}
									/>
								) : (
									""
								)}
							</div>
						</div>
						<div class="col-md-5 c-valign--middle order-1">
							<HeroCopy
								slug={slug}
								eyebrow={eyebrow}
								richText={richText}
								ctas={ctas}
								forcedCtas={forcedCtas}
								loopIndex={0}
							/>
						</div>
					</div>
				);
				break;
			case "dropLeft":
				return (
					<div class="row column-reverse">
						<div class="col-md-7 d-flex align-items-center order-1">
							<div class="c-image c-image--drop-left c-image--shadow {{ matrixBlock.removeShadow ? 'h-remove-shadow' : '' }}">
								{image?.length ? (
									<ImageSimple
										classAtr={`drop-left__img ${
											removeShadow ? "h-remove-shadow" : ""
										}`}
										image={image}
										imageWidth={width}
										imageHeight={height}
									/>
								) : (
									""
								)}
							</div>
						</div>
						<div class="col-md-5 c-valign--middle order-2">
							<HeroCopy
								slug={slug}
								eyebrow={eyebrow}
								richText={richText}
								ctas={ctas}
								forcedCtas={forcedCtas}
								loopIndex={0}
							/>
						</div>
					</div>
				);
				break;
			default:
				break;
		}
	};

	return (
		<section
			class={`c-cols c-cols-landing ${
				backgroundColor && backgroundColor[0] ? backgroundColor[0].slug : ""
			} ${addBottomPadding ? "h-padding-bottom" : ""}`}
		>
			<div class="container">{internalStructure()}</div>
		</section>
	);
};

export default TwoColModule;
