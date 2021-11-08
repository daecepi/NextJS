const TableModule = ({
	includeNavigation,
	tableTitle,
	features,
	lastInstance,
	linkToNav,
	headerLogoOne,
	headerLogoTwo,
	stickyNavName,
}) => {
	const convertToCamel = () => {};

	let sectionId = linkToNav;

	let firstHeaderLogoOne = headerLogoOne[0];

	let logoOneOptimized = firstHeaderLogoOne.optimizedLandingImages;

	let firstHeaderLogoTwo = headerLogoOne[0];
	let logoTwoOptimized = firstHeaderLogoTwo.optimizedLandingImages;

	const componentInternals = () => {
		return (
			<section
				id={`${stickyNavName != "" ? stickyNavName.toLowerCase() : ""}`}
				className={`c-pricing-table--cornflower ${
					matrixBlock.lastInstance ? "last-instance" : ""
				} ${matrixBlock.includeNavigation ? "nav-added" : ""}`}
			>
				{includeNavigation ? (
					<div className="c-pricing-table--cornflower__navigation js-pricing-nav">
						<div className="c-pricing-table__row--cornflower">
							<div className="container c-pricing-table--cornflower__navigation--container">
								<div className="c-pricing-table__info--cornflower md">
									<p></p>
								</div>
								{firstHeaderLogoOne.length ? (
									<>
										<div className="c-pricing-table__logo__container">
											{logoOneOptimized.length > 0 ? (
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
														srcSet={logoOneOptimized.srcset}
														sizes="100vw"
														width={logoOneOptimized.originalImageWidth}
														height={logoOneOptimized.originalImageHeight}
														className="c-pricing-table__logo"
														alt={`${
															logoOneOptimized?.altText?.length
																? logoOneOptimized?.altText
																: logoOneOptimized.title
														}`}
														title={logoOneOptimized.title}
													/>
												</picture>
											) : (
												<img
													className="c-pricing-table__logo"
													src={headerLogoOne?.url || ""}
													alt={`${
														headerLogoOne?.altText !== undefined &&
														headerLogoOne?.altText?.length
															? headerLogoOne.altText
															: headerLogoOne.title
													}`}
													title={headerLogoOne.title}
												/>
											)}
										</div>
									</>
								) : (
									""
								)}
								{firstHeaderLogoTwo?.length ? (
									<div className="c-pricing-table__logo__container">
										{logoTwoOptimized?.srcset?.length > 0 ? (
											<picture>
												{logoTwoOptimized.srcsetWebP ? (
													<source
														srcSet={`${logoTwoOptimized.srcsetWebP}`}
														sizes="100vw"
														type="image/webp"
													/>
												) : (
													""
												)}
												<img
													src={`${logoTwoOptimized.src}`}
													srcSet={`${logoTwoOptimized.srcset}`}
													sizes="100vw"
													width={logoTwoOptimized.originalImageWidth}
													height={logoTwoOptimized.originalImageHeight}
													className="c-pricing-table__logo"
													alt={`${
														headerLogoTwo.altText !== undefined &&
														headerLogoTwo.altText.length
															? headerLogoTwo.altText
															: headerLogoTwo.title
													}`}
													title="{{ headerLogoTwo.title }}"
												/>
											</picture>
										) : (
											<img
												className="c-pricing-table__logo"
												src={headerLogoTwo.url}
												alt={
													headerLogoTwo?.altText?.length
														? headerLogoTwo.altText
														: headerLogoTwo.title
												}
												title={headerLogoTwo.title}
											/>
										)}
									</div>
								) : (
									""
								)}
							</div>
						</div>
					</div>
				) : (
					""
				)}
				<div className="container">
					<h4 className={includeNavigation ? "include-nav" : "no-nav"}>
						{tableTitle}
					</h4>
					<div className="c-pricing-table__table--cornflower">
						{features.map((feature) => {
							<div className="c-pricing-table__row--cornflower">
								<div className="c-pricing-table__info--cornflower md">
									{feature.description}
								</div>
								<div className="c-pricing-table__tier--cornflower">
									{() => {
										if (feature.copperCheckmark) {
											return (
												<i className="notranslate material-icons done">done</i>
											);
										} else if (feature.copperText?.length) {
											return <p className="p-sm">{feature.copperText}</p>;
										}
										return (
											<i className="notranslate material-icons close">close</i>
										);
									}}
								</div>
								<div className="c-pricing-table__tier--cornflower">
									{() => {
										if (feature.copperCheckmark) {
											return (
												<i className="notranslate material-icons done">done</i>
											);
										} else if (feature.copperText?.length) {
											return <p className="p-sm">{feature.competitorText}</p>;
										}
										return (
											<i className="notranslate material-icons close">close</i>
										);
									}}
								</div>
							</div>;
						})}
						{footnote.length ? (
							<div className="c-pricing-table__footnote">
								{matrixBlock.footnote}
							</div>
						) : (
							""
						)}
					</div>
				</div>
			</section>
		);
	};

	return (
		<>
			{/** WORK TO DO MAKE LINK TO NAV */}
			{includeNavigation && lastInstance ? (
				<div className="l-pricing-tables--container">
					{componentInternals()}
				</div>
			) : (
				<>{componentInternals()}</>
			)}
		</>
	);
};

export default Table;
