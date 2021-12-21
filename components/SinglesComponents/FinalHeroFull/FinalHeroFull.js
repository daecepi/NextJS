import Image from "next/image";
import Link from "next/link";

export default function FinalHeroFull({ title, copy }) {
	return (
		<>
			<section id="" className="c-cols c-cols pricing-style hot-pink">
				<div
					style={{
						position: "absolute",
						top: "0px",
						left: "0px",
						width: "50%",
						height: "100%",
					}}
				>
					<div
						className="disappear-mobile"
						style={{ width: "100%", position: "relative", height: "100%" }}
					>
						<picture>
							<source
								type="image/webp"
								srcSet="/imgs/pricing/Pricing_CTA-image-dots@2x.webp"
								alt="Bubbles graphic"
							/>
							<source
								type="image/png"
								srcSet="/imgs/pricing/Pricing_CTA-image-dots@2x.png"
								alt="Bubbles graphic"
							/>
							<img
								className="drop-right__img h-remove-shadow bubbles-raw"
								style={{
									maxWidth: "auto",
									height: "135%",
									position: "absolute",
									zIndex: "2",
									left: "50%",
									top: "50%",
									width: "auto",
									right: "0px",
									transform: "translateX(-50%) translateY(-50%)",
								}}
								src="/imgs/pricing/Pricing_CTA-image-dots@2x.png"
								alt="Bubbles graphic"
							/>
						</picture>
						<picture>
							<source
								type="image/webp"
								srcSet="https://copper.objects.frb.io/imgs/pricing/Pricing_CTA-image-bubbles@2x-migration-2.webp"
								alt="Bubbles graphic"
							/>
							<source
								type="image/png"
								srcSet="https://copper.objects.frb.io/imgs/pricing/Pricing_CTA-image-bubbles@2x-migration-2.png"
								alt="Bubbles graphic"
							/>
							<img
								className="drop-right__img h-remove-shadow bubbles-user"
								style={{
									maxWidth: "650px",
									height: "auto",
									position: "absolute",
									zIndex: "2",
									left: "50%",
									top: "50%",
									width: "100%",
									transform: "translateX(-50%) translateY(-50%)",
									minWidth: "200px",
								}}
								src="https://copper.objects.frb.io/imgs/pricing/Pricing_CTA-image-bubbles@2x-migration-2.png"
								alt="Bubbles graphic"
							/>
						</picture>
					</div>
				</div>
				<div
					className="container c-animation-container"
					style={{ position: "static" }}
				>
					<h2
						className="extra-bottom-margin--x-small"
						style={{ textAlign: "center" }}
					></h2>
					<div className="row column-reverse" style={{ position: "static" }}>
						<div
							className="col-md-6 d-flex align-items-center order-1 "
							style={{ position: "static" }}
						>
							<div
								className="c-image c-image--extended-left c-image--shadow h-remove-shadow"
								style={{ position: "static" }}
							>
								<div
									className="appear-mobile"
									style={{
										width: "100%",
										height: "auto",
										position: "relative",
										zIndex: "2",
										bottom: "unset",
										left: "0px",
										right: "0px",
										marginLeft: "0px",
									}}
								>
									<Image
										src="https://copper.objects.frb.io/imgs/pricing/pricing_cta-image-mobile@2x-migration-2.png"
										width="600"
										height="454"
									/>
								</div>
							</div>
						</div>
						<div className="col-md-6 c-valign--middle order-2">
							<h2>{title}</h2>
							<p>
								{copy}
								<br />
							</p>
							<div className="c-hero__buttons" style={{ flexDirection: "row" }}>
								<Link href="https://www.copper.com/signup">
									<a
										className="c-button sendUTMsToAmplitude c-button--white  section-background-flavor"
										style={{
											justifyContent: "center",
											marginRight: "5px",
											width: "fit-content",
										}}
									>
										Try free
									</a>
								</Link>
								<Link href="/demos">
									<a
										className="c-button c-button--outline  section-background-flavor "
										style={{
											justifyContent: "center",
											marginLeft: "5px",
											width: "fit-content",
										}}
									>
										Request demo
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
