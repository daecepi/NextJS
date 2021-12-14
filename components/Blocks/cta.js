import Link from "next/link";
const CtaModule = ({
	header,
	subHeader,
	cta,
	linkToNav,
	noBottomPadding,
	stickyNavName,
}) => {
	const ctaGroupPrinter = (ctas) => {
		return (
			<div className="c-hero__buttons">
				{ctas.map((cta) => {
					switch (key) {
						case "ctas":
							let buttonColor = cta.buttonColor[0] || "white";
							if (cta.modalTrigger) {
								return (
									<Link href="/demos">
										<a
											className={`c-button ${
												ctas.length > 0 ? "button-center--mobile" : ""
											} c-button--${buttonColor}  ${
												cta.takeBackgroundColor
													? "section-background-flavor"
													: ""
											}`}
										>
											{cta.button.text}
										</a>
									</Link>
								);
							} else {
								{
									/* Check if the cta have the try free string to add the sendUTMsToAmplitude class */
								}
								if (cta.button.text.toLowerCase() === "try free") {
									return (
										<Link href={cta.button.url}>
											<a
												className={`c-button ${
													ctas.length > 0 ? "button-center--mobile" : ""
												} sendUTMsToAmplitude c-button--${buttonColor} ${
													cta.takeBackgroundColor
														? "section-background-flavor"
														: ""
												}`}
												target={cta.button.target == 1 ? "_blank" : undefined}
											>
												{cta.button.text}
											</a>
										</Link>
									);
								} else {
									return (
										<Link href={cta.button.url}>
											<a
												className={`c-button ${
													ctas?.length > 0 ? "button-center--mobile" : ""
												}  c-button--${buttonColor} ${
													cta.takeBackgroundColor
														? "section-background-flavor"
														: ""
												} `}
												target={cta.button.target == 1 ? "_blank" : undefined}
											>
												{cta.button.text}
											</a>
										</Link>
									);
								}
							}
							break;

						case "imageCta":
							let image = cta.backgroundImage[0] || undefined;
							return (
								<Link href={cta.button.url}>
									<a
										className="c-button-image"
										target={`${cta.button.target === 1 ? "_blank" : undefined}`}
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
									<Link href={cta.button.url}>
										<a
											target={`${
												cta.button.target === 1 ? "_blank" : undefined
											}`}
											className={`t-link ${
												cta.ctaRemoveUnderline ? "no-underline" : ""
											}`}
										>
											{cta.button.text}
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

	return (
		<section
			id={`${stickyNavName ? stickyNavName.toLowercase() : ""}`}
			className={`c-quote-callout text-md-center ${
				noBottomPadding ? "no-bottom-padding" : ""
			}`}
		>
			<div className="container">
				<div className="row">
					<div className="c-quote-callout__copy col-lg-10 offset-lg-1">
						<h2>{matrixBlock.header}</h2>
						<p>{matrixBlock.subHeader}</p>
						{cta?.length ? (
							<>
								{cta.map((cta) => {
									ctaPrinter(cta);
								})}
							</>
						) : (
							""
						)}
						{cta?.length ? <>{ctaGroupPrinter()}</> : ""}
					</div>
				</div>

				<div className="h-divider extra-top-margin--medium"></div>
			</div>
		</section>
	);
};

export default CtaModule;
