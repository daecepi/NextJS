const LogoModule = ({
	eyebrow,
	logoTitle,
	subtitle,
	copyText,
	logoImages,
	ctas,
	backgroundColor,
	layout,
	twoColSettings,
	oneColSettings,
	stickyNavName,
}) => {
	const singleBackgroundColor = backgroundColor?.length
		? backgroundColor[0].slug
		: "white";

	const styleForTwoCols = `
    <style>
        .c-eyebrow:before{
            border-bottom-color:'${twoColSettings.textColor} !important';
        }
    </style>`;

	const logoPrinter = () => {
		return (
			<>
				{logoImages.map((logo) => {
					let optimizedImages = logo.optimizedLandingImages || undefined;
					return (
						<li class="logo-section--images">
							{optimizedImages?.optimizedImageUrls?.length > 0 ? (
								<picture>
									{optimizedImages.srcsetWebP ? (
										<source
											srcset={optimizedImages.srcsetWebP()}
											sizes="100vw"
											type="image/webp"
										/>
									) : (
										""
									)}
									<img
										src={optimizedImages.src()}
										srcset={optimizedImages.srcset()}
										sizes="100vw"
										alt={logo.altText?.length ? logo.altText : logo.title}
									/>
								</picture>
							) : (
								<img
									src={logo.url}
									alt={logo.altText.length ? logo.altText : logo.title}
								/>
							)}
						</li>
					);
				})}
			</>
		);
	};

	return (
		<section
			id={`${stickyNavName !== "" ? logo.stickyNavName.toLowerCase() : ""}`}
			className={`c-single-column ${
				layout == "2Col" ? "c-cols h-padding-bottom" : ""
			} bottom-padding-mobile home-proof background--${backgroundColor}`}
		>
			<div class="container">
				{layout === "1Col" ? (
					<div class="col-md-12">
						{title?.length > 0 ? (
							<h2
								style={{ color: oneColSettings.textColor }}
								class="text-center"
							>
								{title}
								<br />
							</h2>
						) : (
							""
						)}
						<p
							style={{ color: oneColSettings.textColor }}
							class="text-center"
							dangerouslySetInnerHTML={{ __html: copy }}
						></p>
						<div class="smb-logo-icons">
							<ul class="logo-section--one-column">{logoPrinter()}</ul>
						</div>
					</div>
				) : (
					""
				)}
				{layout == "2Col" ? (
					<div class="row" style={{ paddingBottom: "0px" }}>
						<div
							class={`col-md-6 d-flex align-items-center ${
								twoColSettings?.reverseLayout === "0"
									? "order-1"
									: "order-2 offset-md-1"
							}`}
						>
							<div class="">
								<ul class="logo-section--two-column">{logoPrinter()}</ul>
							</div>
						</div>
						<div
							class={`col-md-5 c-valign--middle ${
								twoColSettings.reverseLayout === "0"
									? "order-2 offset-md-1"
									: "order-1"
							}`}
						>
							<div class="col_copy" style={`color:${twoColSettings.textColor}`}>
								{styleForTwoCols}
								<pre
									class="c-eyebrow"
									style={{ color: twoColSettings.textColor }}
								>
									{eyebrow}
								</pre>
								<h2 style={{ color: twoColSettings.textColor }}>{title}</h2>
								<p style={{ color: twoColSettings.textColor }}>{subtitle}</p>
								<div class="c-single-column__buttons">
									{ctas.map((cta) => {
										if (cta.buttonColor) {
											return (
												<a
													class={`c-button c-button--${cta.buttonColor[0].slug}`}
													target={cta.button.target}
													href={cta.button.url}
												>
													{ctas.button.text}
												</a>
											);
										}
										return "";
									})}
								</div>
							</div>
						</div>
					</div>
				) : (
					""
				)}
			</div>
		</section>
	);
};

export default LogoModule;