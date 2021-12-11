import Script from "next/script";

import WebinarSpecialForm from "../WebinarSpecialForm";

// import "https://use.typekit.net/uaf5vus.css";

const WebinarSpecial = ({ entry }) => {
	const image =
		(entry.featuredImage?.length && entry.featuredImage[0]) || undefined;
	return (
		<>
			<div className="blur-container">
				<div className="blur-first-color"></div>
				<div className="blur-second-color"></div>
				<div className="blur-third-color"></div>
			</div>
			<div className="c-webinar-form webinar-special-form" id="c-webinar-gate">
				<div className="c-resource--header">
					<WebinarSpecialForm entry={entry} />
				</div>
			</div>

			<div className="c-webinar d-none webinar-special-content" id="c-webinar">
				<section className="c-webinar-video">
					<div className="container">
						<div
							className="c-video"
							dangerouslySetInnerHTML={{ __html: entry.embeddedVideo }}
						></div>
					</div>
				</section>

				<section className="c-webinar-content mobile-order h-section-padding">
					<div className="container">
						<div className="row">
							<div className="col-md-3 bottom-margin-mobile mobile-order-2">
								{entry.webinarBoilerplate?.length &&
									entry.webinarBoilerplate.map((item) => {
										return (
											<div className="webinar-special-boilerplate">
												{
													/*Make sure that this becomes a switch if need to create more types*/
													item.type == "boilerplate" && (
														<>
															<h3>{items.boilerPlateTitle}</h3>
															<p>{items.boilerPlateCopyText}</p>
														</>
													)
												}
											</div>
										);
									})}
							</div>
							<div className="col-md-8 offset-md-1 mobile-order-1">
								<h3>{entry.title}</h3>
								<p>{entry.descriptionRichText}</p>
								<div className="c-webinar-hosts extra-top-margin--small ">
									<h3>Hosted By:</h3>
									<div className="d-flex flex-wrap">
										{entry.featuredAuthors?.length &&
											entry.featuredAuthors.map((author) => {
												const authorStyle = `url('${author.photo?.url || ""}')`;
												return (
													<div className="c-author__detail">
														{!author.photo ? (
															<div
																className={`square-img c-author__img background-${
																	(author.id % 2) + 1
																}`}
															>
																<span className="c-author__img--alt">
																	{author.firstName?.split(" ")[0] || ""}
																</span>
															</div>
														) : (
															<div
																className="square-img c-author__img"
																style={{ background: authorStyle }}
															></div>
														)}
														<div className="c-author__meta c-author__meta--detail">
															<p className="p-sm">
																<strong>{author.name}</strong>
															</p>
															<p className="p-sm">
																{author.authorTitle}, {author.userCompany}
															</p>
														</div>
													</div>
												);
											})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

			<Script
				src="js/lazyload.min.js"
				strategy="afterInteractive"
				onLoad={() => {
					LazyLoad.js(
						[
							"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js",
							"/js/vendor/js-cookie.js",
							"/js/functions.min.{{ staticAssetsVersion }}.js",
						],
						function () {
							$("footer, .c-footer__legal").addClass("d-none");
							$("main.no-banner").css("margin-top", "0px");
							// Use the entry id so its unique to that entry not just the form

							//just not set the getUserInfo variable
							var getUserInfo = Cookies.get("form_gate_{{entry.id}}", {
								domain: sndleveldomain,
							});
							if (entry.formSuccessMessage != 1) {
								var successMessage = false;
							} else {
								var successMessage = true;
							}

							if (getUserInfo && successMessage == false) {
								$("#c-webinar-gate").addClass("d-none");
								$("#c-webinar").removeClass("d-none");
								$(".c-footer--simple").removeClass("d-none");
								$(".c-footer__legal").removeClass("d-none");
							} else if (getUserInfo && successMessage == true) {
								$(".c-footer--simple").removeClass("d-none");
							} else {
								$(".c-footer--simple").removeClass("d-none");
							}
						}
					);
				}}
			/>
		</>
	);
};

export default WebinarSpecial;
