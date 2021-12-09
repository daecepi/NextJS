import ImageSimple from "./Simples/ImageSimple";
import VideoSimple from "./Simples/VideosSimple";

const OneColumnBlock = ({
	header,
	subText,
	copy,
	textRatio,
	entries,
	backgroundColor,
	addBottomPadding,
	linkToNav,
	stickyNavName,
	configurations,
	ctas,
}) => {
	// Scalable copy ratio selector
	let copyVariationRatios = {
		normal: {
			ratio: "col-md-8 offset-md-2",
		},
		bigger: {
			ratio: "col-md-10 offset-md-1",
		},
	};

	let singleBackgroundColor = backgroundColor[0].slug || "white";
	return (
		<>
			<section
				id={stickyNavName.toLowerCase() || ""}
				className={`c-single-column ${
					addBottomPadding ? "h-padding-bottom" : ""
				} ${singleBackgroundColor}`}
			>
				<div className="container">
					{header?.length || subText?.length ? (
						<>
							<div
								className={`${
									textRatio?.value?.length &&
									copyVariationRatios[textRatio.value]
										? copyVariationRatios[textRatio.value].ratio
										: "col-md-8 offset-md-2"
								}  c-single-column__container ${
									configurations?.length > 0 &&
									configurations[0]?.removeSpacingBottom
										? "no-bottom-padding"
										: ""
								}`}
							>
								{header?.length ? <h2>{matrixBlock.header}</h2> : ""}
								{subText?.length ? <p>{matrixBlock.subText}</p> : ""}
							</div>
						</>
					) : (
						""
					)}
					{copy ? <div dangerouslySetInnerHTML={{ __html: copy }}></div> : ""}
					{entries.map((entry) => {
						console.log("Entry received ", entry);
						return entry.typeHandle === "Video" ? (
							<VideoSimple {...entry} />
						) : (
							<ImageSimple {...entry} />
						);
					})}
				</div>
			</section>
		</>
	);
};

export default OneColumnBlock;
