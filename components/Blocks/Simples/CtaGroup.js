import { linkitButtonPropertyGetter } from "../../../helpers/propertyResolver";

const CtaGroup = ({ ctas }) => {
	const numberCtas = ctas.length;
	// In case the component is called with no params or not array return
	if (!ctas?.length) return "";

	// Appropiate return for the component with its validations
	return (
		<div className="c-hero__buttons">
			{ctas.map((cta) => {
				const convertedCta = linkitButtonPropertyGetter(cta.button);
				switch (cta.typeHandle) {
					case "ctas":
						let buttonColor = cta.buttonColor[0].slug || "white";
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
									{convertedCta?.value || ""}
								</a>
							);
						} else {
							{
								/* Check if the cta have the try free string to add the sendUTMsToAmplitude class */
							}
							if (convertedCta.value.toLowerCase() === "try free") {
								return (
									<a
										className={`c-button ${
											ctas.length > 0 ? "button-center--mobile" : ""
										} sendUTMsToAmplitude c-button--${buttonColor} ${
											cta.takeBackgroundColor ? "section-background-flavor" : ""
										}`}
										target={
											convertedCta?.target && convertedCta.target == 1
												? "_blank"
												: undefined
										}
										href={convertedCta?.href || ""}
									>
										{convertedCta?.value || ""}
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
										target={
											convertedCta?.target && convertedCta.target == 1
												? "_blank"
												: undefined
										}
										href={convertedCta?.href || ""}
									>
										{convertedCta?.value || ""}
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
								target={`${
									convertedCta?.target && convertedCta.target === 1
										? "_blank"
										: undefined
								}`}
								href={convertedCta?.href || ""}
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
									target={`${
										convertedCta?.target && convertedCta.target === 1
											? "_blank"
											: undefined
									}`}
									href={convertedCta?.href || ""}
									className={`t-link ${
										cta.ctaRemoveUnderline ? "no-underline" : ""
									}`}
								>
									{convertedCta?.value || ""}
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
