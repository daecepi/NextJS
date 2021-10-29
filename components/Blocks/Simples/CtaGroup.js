const CtaGroup = (ctas) => {
	return (
		<div className="c-hero__buttons">
			{ctas.map((cta) => {
				switch (key) {
					case "ctas":
						let buttonColor = cta.buttonColor[0] || "white";
						if (cta.modalTrigger) {
							return (
								<a
									className={`c-button ${
										ctas.length > 0 ? "button-center--mobile" : ""
									} c-button--${buttonColor}  ${
										cta.takeBackgroundColor ? "section-background-flavor" : ""
									}`}
									href="/demos"
								>
									{cta.button.text}
								</a>
							);
						} else {
							{
								/* Check if the cta have the try free string to add the sendUTMsToAmplitude class */
							}
							if (cta.button.text.toLowerCase() === "try free") {
								return (
									<a
										className={`c-button ${
											ctas.length > 0 ? "button-center--mobile" : ""
										} sendUTMsToAmplitude c-button--${buttonColor} ${
											cta.takeBackgroundColor ? "section-background-flavor" : ""
										}`}
										target={cta.button.target == 1 ? "_blank" : undefined}
										href={cta.button.url}
									>
										{cta.button.text}
									</a>
								);
							} else {
								return (
									<a
										className={`c-button ${
											ctas?.length > 0 ? "button-center--mobile" : ""
										}  c-button--${buttonColor} ${
											cta.takeBackgroundColor ? "section-background-flavor" : ""
										} `}
										target={cta.button.target == 1 ? "_blank" : undefined}
										href={cta.button.url}
									>
										{cta.button.text}
									</a>
								);
							}
						}
						break;

					case "imageCta":
						let image = cta.backgroundImage[0] || undefined;
						return (
							<a
								className="c-button-image"
								target={`${cta.button.target === 1 ? "_blank" : undefined}`}
								href={cta.button.url}
							>
								<img
									src={image.url}
									alt={image.altText?.length ? image.altText : image.title}
								/>
							</a>
						);

					case "link":
						return (
							<div className="flex-column">
								<a
									target={`${cta.button.target === 1 ? "_blank" : undefined}`}
									href={cta.button.url}
									className={`t-link ${
										cta.ctaRemoveUnderline ? "no-underline" : ""
									}`}
								>
									{cta.button.text}
								</a>
							</div>
						);
					default:
						break;
				}
			})}
		</div>
	);
};

export default CtaGroup;
