import Image from "next/image";
import ImageSimple from "./Simples/ImageSimple";
const ComparisonTableBlock = ({ slug, block }) => {
	let headerLogoOne = block.headerLogoOne[0];
	let headerLogoTwo = block.headerLogoTwo[0];
	return (
		<>
			{block.linkToNav && <a className="anchor" id={`${slug}Anchor`}></a>}
			<section
				id={block.stickyNavName || ""}
				className={`c-pricing-table--cornflower ${
					block.lastInstance ? "last-instance" : ""
				} ${block.includeNavigation ? "nav-added" : ""}`}
			>
				{block.includeNavigation && (
					<div className="c-pricing-table--cornflower__navigation js-pricing-nav">
						<div className="c-pricing-table__row--cornflower">
							<div className="container c-pricing-table--cornflower__navigation--container">
								<div className="c-pricing-table__info--cornflower md"></div>
								<div class="c-pricing-table__logo__container">
									{headerLogoOne && (
										<ImageSimple
											image={block.headerLogoOne}
											imageWidth={
												headerLogoOne.optimizedLandingImages
													.originalImageWidth || headerLogoOne.width
											}
											imageHeight={
												headerLogoOne.optimizedLandingImages
													.originalImageHeight || headerLogoOne.height
											}
										/>
									)}
								</div>
								<div class="c-pricing-table__logo__container">
									{headerLogoTwo && (
										<ImageSimple
											image={block.headerLogoTwo}
											imageWidth={
												headerLogoTwo.optimizedLandingImages
													.originalImageWidth || headerLogoTwo.width
											}
											imageHeight={
												headerLogoTwo.optimizedLandingImages
													.originalImageHeight || headerLogoTwo.height
											}
										/>
									)}
								</div>
							</div>
						</div>
					</div>
				)}
				<div className="container">
					<h4 className={block.includeNavigation ? "include-nav" : "no-nav"}>
						{block.tableTitle}
					</h4>
					<div className="c-pricing-table__table--cornflower">
						{block.features.map((feature) => (
							<div className="c-pricing-table__row--cornflower">
								<div className="c-pricing-table__info--cornflower md">
									{feature.description}
								</div>
								<div className="c-pricing-table__tier--cornflower">
									{feature.copperCheckmark ? (
										<i className="notranslate material-icons done">done</i>
									) : feature.copperText ? (
										<p className="p-sm">{feature.copperText}</p>
									) : (
										<i className="notranslate material-icons close">close</i>
									)}
								</div>
								<div className="c-pricing-table__tier--cornflower">
									{feature.competitorCheckmark ? (
										<i className="notranslate material-icons done">done</i>
									) : feature.competitorText ? (
										<p className="p-sm">{feature.competitorText}</p>
									) : (
										<i className="notranslate material-icons close">close</i>
									)}
								</div>
							</div>
						))}
						{block.footnote && (
							<div className="c-pricing-table__footnote">{block.footnote}</div>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default ComparisonTableBlock;
