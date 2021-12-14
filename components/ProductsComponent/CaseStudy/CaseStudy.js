import Image from "next/image";
import Link from "next/link";
const CaseStudy = (props) => {
	return (
		<section className="c-case-study c-case-study--align-left">
			<div className={`container colorblock--${props.backgroundColor}`}>
				<div className="c-case-study__container col-md-11 no-padding">
					<div className="c-case-study__content c-valign--middle">
						<div className="row row-eq-height align-items-center">
							<div className="col-md-6 c-align--center">
								<div className="c-image c-image--shadow">
									<pre className="c-eyebrow c-eyebrow--light">
										{props.eyebrow}
									</pre>
									<Image
										src={props.imageUrl}
										width={props.imageWidth}
										height={props.imageHeight}
									></Image>
								</div>
							</div>
							<div className="col-md-6">
								<div className="c-panel__blockquote c-valign--middle">
									<blockquote>
										{/* Thanks to Copper, I have
                      <br />a lot more time to focus on high-value work */}
										{props.quote.map((item, index) => {
											console.log(props.quote.length);
											if (props.quote.length == index + 1) {
												return <>{item}</>;
											} else {
												return (
													<>
														{item}
														<br />
													</>
												);
											}
										})}
									</blockquote>
									<cite>
										{props.quoteby}
										<span className="c-panel__blockquote--position">
											{props.company}
										</span>
									</cite>
									{props.companyLogo && (
										<div className="c-panel__blockquote--logo">
											<Image
												src={props.companyLogo}
												width={props.companyLogoWidth}
												height={props.companyLogoHeight}
											/>
										</div>
									)}
								</div>
								{props.linkUrl && (
									<div className="col-md-12 c-align--right">
										<Link href={props.linkUrl}>
											<a className="t-link">{props.linkText}</a>
										</Link>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CaseStudy;
