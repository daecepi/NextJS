const CustomSection = ({ backgroundColor, settings, layout }) => {
	const sectionBackgroundColor = backgroundColor[0] || "white";

	return (
		<section
			className={`c-single-column ${
				sectionBackgroundColor?.length > 0 ? sectionBackgroundColor.slug : ""
			} pb-${settings[0]?.paddingBottom} pt-${settings[0].paddingTop}`}
		>
			<div className="container ">
				<div className="row">
					{layout.map((layoutPiece) => {
						let sectionSettings = {
							width: "12",
							offset: "0",
							paddingTop: "0",
							paddingBottom: "0",
							padddingLeft: "0",
							paddingRight: "0",
						};

						let mobileSettings = {
							width: "12",
							offset: "0",
							paddingTop: "0",
							paddingBottom: "0",
							padddingLeft: "0",
							paddingRight: "0",
						};

						for (
							let settingIndex = layoutPiece.sectionSettings.length - 1;
							settingIndex >= 0;
							settingIndex++
						) {
							sectionSettings["width"] =
								layoutPiece.sectionSettings[settingIndex].sectionWidth;
							sectionSettings["offset"] =
								layoutPiece.sectionSettings[settingIndex].offset;
							sectionSettings["paddingTop"] =
								layoutPiece.sectionSettings[settingIndex].paddingTop;
							sectionSettings["paddingBottom"] =
								layoutPiece.sectionSettings[settingIndex].paddingBottom;
							sectionSettings["paddingLeft"] =
								layoutPiece.sectionSettings[settingIndex].paddingLeft;
							sectionSettings["paddingRight"] =
								layoutPiece.sectionSettings[settingIndex].paddingRight;

							if (
								layoutPiece.sectionSettings[settingIndex]?.sectionWidth !==
								undefined
							) {
								break;
							}
						}
						for (
							let settingIndex = layoutPiece.mobileSettings.length - 1;
							settingIndex >= 0;
							settingIndex++
						) {
							mobileSettings["width"] =
								layoutPiece.mobileSettings[settingIndex].sectionWidth;
							mobileSettings["offset"] =
								layoutPiece.mobileSettings[settingIndex].offset;
							mobileSettings["paddingTop"] =
								layoutPiece.mobileSettings[settingIndex].paddingTop;
							mobileSettings["paddingBottom"] =
								layoutPiece.mobileSettings[settingIndex].paddingBottom;
							mobileSettings["paddingLeft"] =
								layoutPiece.mobileSettings[settingIndex].paddingLeft;
							mobileSettings["paddingRight"] =
								layoutPiece.mobileSettings[settingIndex].paddingRight;

							if (
								layoutPiece.mobileSettings[settingIndex]?.sectionWidth !==
								undefined
							) {
								break;
							}
						}

						return (
							<div
								className={`
              col-md-${sectionSettings.width}
                        offset-md-${sectionSettings.offset}
                        pt-md-${sectionSettings.paddingTop}
                        pb-md-${sectionSettings.paddingBottom}
                        pl-md-${sectionSettings.paddingLeft}
                        pr-md-${sectionSettings.paddingRight}
                        col-${mobileSettings.width}
                        offset-${mobileSettings.offset}
                        pt-${mobileSettings.paddingTop}
                        pb-${mobileSettings.paddingBottom}
                        pl-${mobileSettings.paddingLeft}
                        pr-${mobileSettings.paddingRight}
                        
              `}
							>
								{layoutPiece.buildSection.map((internalSection) => {
									let html = "";
									switch (internalSection.type) {
										case "sectionTitle":
											html = `<h${internalSection.settings[0].type} style="${
												internalSection?.settings[0]?.minHeight?.length > 0
													? "min-height:" +
													  internalSection.settings[0].minHeight
													: ""
											}" className="text-${
												internalSection.settings[0].alignment
											} pt-${internalSection.settings[0].paddingTop} pb-${
												internalSection.settings[0].paddingBottom
											}">${internalSection.sectionTitle}</h${
												internalSection.settings[0].type
											}>`;
											return (
												<div dangerouslySetInnerHTML={{ __html: html }}></div>
											);

										case "sectionSubtitle":
											let tempStyle = {};
											if (internalSection?.settings[0]?.minHeight)
												tempStyle["minHeight"] =
													internalSection.settings[0].minHeight;
											return (
												<div className="" style={tempStyle}>
													{internalSection.subtitle}
												</div>
											);

										case "image":
											const internalSectionContent = () => {
												const imageD = internalSection.image[0];
												const optimizedImages = imageD.optimizedLandingImages;
												if (imageD?.url) {
													if (optimizedImages?.srcset?.length > 0) {
														let styleProp =
															internalSection.settings[0].maxWidth.length > 0
																? internalSection.settings[0].maxWidth
																: { maxWidth: "100%" };
														return (
															<picture>
																{optimizedImages.srcsetWebP ? (
																	<source
																		srcset={optimizedImages.srcsetWebP}
																		sizes="100vw"
																		type="image/webp"
																	/>
																) : (
																	""
																)}
																<img
																	src={optimizedImages.src}
																	srcset={optimizedImages.srcset}
																	sizes="100vw"
																	className="my-0"
																	style={styleProp}
																	alt={
																		imageD?.altText?.length > 0
																			? imageD.altText
																			: imageD.title
																	}
																/>
															</picture>
														);
													} else {
														let styleProp = { maxWidth: "100%" };
														if (
															matrixSection?.settings[0]?.maxWidth?.length > 0
														)
															styleProp["maxWidth"] =
																internalSection.settings[0]["maxWidth"];
														return (
															<img
																className="my-0"
																style={styleProp}
																alt={
																	imageD?.altText?.length > 0
																		? imageD.altText
																		: imageD.title
																}
																src={imageD.url}
															/>
														);
													}
												}
												return "";
											};
											return (
												<div
													className={`text-${matrixSection.settings[0].alignment}`}
												>
													{matrixSection?.imageLink?.length > 0 ? (
														<a href={matrixSection.imageLink} taget="_blank">
															{internalSectionContent()}
														</a>
													) : (
														<>{internalSectionContent()}</>
													)}
												</div>
											);
										case "urlLink":
											return (
												<div
													className={`text-${internalSection.settings[0].alignment} pt-${internalSection.settings[0].paddingTop} pb-${internalSection.settings[0].paddingBottom}`}
													style={{
														width: "100%",
														position: internalSection.settings[0].position,
														bottom: internalSection.settings[0].bottom,
														left: "0px",
													}}
												>
													<a
														className="c-button sendUTMsToAmplitude mr-0"
														target="_blank"
														href={internalSection.urlLink.url}
													>
														{internalSection.urlLink.text}
													</a>
												</div>
											);

										case "ctaLink":
											return (
												<div
													className={`text-${internalSection.settings[0].alignment} c-single-column__buttons`}
												>
													<div className="c-hero__buttons">
														{internalSection.ctaLinks.map((cta) => {
															switch (cta.type) {
																case "ctas":
																	let buttonColor = cta.buttonColor[0];
																	if (cta.modalTrigger) {
																		return (
																			<a
																				className={`c-button c-button--${
																					buttonColor
																						? buttonColor.slug
																						: "white"
																				}`}
																				href="/demos"
																			>
																				{cta.button.text}
																			</a>
																		);
																	}
																	return (
																		<a
																			className={`${
																				loop.length <= 1 ? "mr-0" : ""
																			} c-button sendUTMsToAmplitude c-button--${
																				buttonColor ? buttonColor.slug : "white"
																			}`}
																			target="{{ cta.button.target }}"
																			href="{{ cta.button.url }}"
																		>
																			{cta.button.text}
																		</a>
																	);
																case "imageCta":
																	let image = cta.backgroundImage[0];
																	return (
																		<a
																			className="c-button-image"
																			target={cta.button.target}
																			href={cta.button.url}
																		>
																			<img
																				src={image.url}
																				alt={
																					image?.altText?.length
																						? image.altText
																						: image.title
																				}
																			/>
																		</a>
																	);
																case "link":
																	return (
																		<div className="flex-column">
																			<a
																				target={cta.button.target}
																				href={cta.button.url}
																				className="t-link"
																			>
																				{cta.button.text}
																			</a>
																		</div>
																	);
																default:
																	return "";
															}
														})}
													</div>
												</div>
											);
										default:
											return "";
									}
								})}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default CustomSection;
