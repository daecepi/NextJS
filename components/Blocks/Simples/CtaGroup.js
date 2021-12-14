import { linkitButtonPropertyGetter } from "../../../helpers/propertyResolver";
import Link from "next/link";

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
								<Link href="/demos">
									<a
										className={`c-button ${
											ctas.length > 0 ? "button-center--mobile" : ""
										} c-button--${buttonColor}  ${
											cta.takeBackgroundColor ? "section-background-flavor" : ""
										}`}
									>
										{convertedCta?.value || ""}
									</a>
								</Link>
							);
						} else {
							{
								/* Check if the cta have the try free string to add the sendUTMsToAmplitude class */
							}
							if (convertedCta.value.toLowerCase() === "try free") {
								return (
									<Link href={convertedCta?.href || ""}>
										<a
											className={`c-button ${
												ctas.length > 0 ? "button-center--mobile" : ""
											} sendUTMsToAmplitude c-button--${buttonColor} ${
												cta.takeBackgroundColor
													? "section-background-flavor"
													: ""
											}`}
											target={
												convertedCta?.target && convertedCta.target == 1
													? "_blank"
													: undefined
											}
										>
											{convertedCta?.value || ""}
										</a>
									</Link>
								);
							} else {
								return (
									<Link href={convertedCta?.href || ""}>
										<a
											className={`c-button ${
												ctas?.length > 0 ? "button-center--mobile" : ""
											}  c-button--${buttonColor} ${
												cta.takeBackgroundColor
													? "section-background-flavor"
													: ""
											} `}
											target={
												convertedCta?.target && convertedCta.target == 1
													? "_blank"
													: undefined
											}
										>
											{convertedCta?.value || ""}
										</a>
									</Link>
								);
							}
						}
						break;

					case "imageCta":
						let image = cta.backgroundImage[0] || undefined;
						return (
							<Link href={convertedCta?.href || ""}>
								<a
									className="c-button-image"
									target={`${
										convertedCta?.target && convertedCta.target === 1
											? "_blank"
											: undefined
									}`}
								>
									<img
										src={image.url}
										alt={image.altText?.length ? image.altText : image.title}
									/>
								</a>
							</Link>
						);

					case "link":
						return (
							<div className="flex-column">
								<Link href={convertedCta?.href || ""}>
									<a
										target={`${
											convertedCta?.target && convertedCta.target === 1
												? "_blank"
												: undefined
										}`}
										className={`t-link ${
											cta.ctaRemoveUnderline ? "no-underline" : ""
										}`}
									>
										{convertedCta?.value || ""}
									</a>
								</Link>
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
