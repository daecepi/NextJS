import Script from "next/script";

// import "https://use.typekit.net/uaf5vus.css";

const WebinarSpecialForm = ({ entry }) => {
	return (
		<>
			<section className="c-resource-content" id="c-ebook-gate">
				<div className="c-resource-content__container container">
					<div className="c-ebook-gate">
						<div className="c-e-book-builder__header col-md-12">
							<p className="t-eyebrow">{entry.eyebrow}</p>
							<div className="h-title">
								<h1>{entry.title}</h1>
							</div>
							<p className="t-event-date">{entry.eventDate}</p>
						</div>
						<div className="col-md-12">
							<section className="c-e-book-gate__form h-padding-bottom">
								<div className="row">
									<div className="col-md-5 ">
										{entry.formHeader?.length && <h3>{entry.formHeader}</h3>}
										<div
											className="p p-sm t-aqua-mint-bullet-points"
											dangerouslySetInnerHTML={{ __html: entry.formCopy }}
										></div>
									</div>
									<div className="col-md-6 offset-md-1">
										<div className="c-form">
											<div id="landing-form-snip" className="sl_swap">
												<div className="online-marketo">
													<form id={`mktoForm_${entry.formId}`}>
														<div className="h-gdpr d-flex"></div>
													</form>
												</div>
												<div className="js-form-success js-form-success--content-download">
													<h2>Thank you!</h2>
													<p>
														We’re looking forward to seeing you at the webinar!
													</p>
													<p>{entry.eventDate}</p>
												</div>
												<Script
													src="/js/lazyload.min.js"
													onLoad={() => {
														LazyLoad.js(
															[
																"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js",
																"/js/vendor/js-cookie.js",
																"/js/functions.min.{{ staticAssetsVersion }}.js",
															],
															function () {
																var formId = `mktoForm_${
																	entry.formId ? entry.formId : 2157
																}`;
																MktoForms2.loadForm(
																	"//app-sj17.marketo.com",
																	"763-DVL-293",
																	entry.formId,
																	function (form) {
																		form.onSuccess(function () {
																			var submittedVals = form.vals();
																			if (submittedVals !== "") {
																				// Use the entry id so its unique to that entry not just the form
																				Cookies.set(
																					"form_gate_{{entry.id}}",
																					true,
																					{ domain: sndleveldomain },
																					14
																				);

																				const reloadEntries = [
																					"eBook",
																					"newEBook",
																					"webinars",
																				];
																				if (entry.typeHandle in reloadEntries) {
																					location.reload();
																				} else if (
																					entry.typeHandle == "download"
																				) {
																					form.getFormElem().css({
																						display: "none",
																					});
																					$(".js-form-success").css({
																						display: "block",
																					});
																					ga("send", {
																						hitType: "event",
																						eventCategory: "PDF Downloads",
																						eventAction: "Click URL",
																						eventLabel: "{{ entry.url }}",
																					});
																					window.open(
																						"{{entry.clickthrough.url}}",
																						"_blank"
																					);
																				} else if (
																					entry.typeHandle == "register"
																				) {
																					form.getFormElem().css({
																						display: "none",
																					});
																					$(".js-form-success").css({
																						display: "block",
																					});
																				}
																			}
																			function runCapterra() {
																				var capterra_vkey =
																						"bdf9d93f2565930e2fb6cb6b3c348d8c",
																					capterra_vid = "2100282",
																					capterra_prefix =
																						"https:" ==
																						document.location.protocol
																							? "https://ct.capterra.com"
																							: "http://ct.capterra.com";
																				var ct =
																					document.createElement("script");
																				ct.type = "text/javascript";
																				ct.async = true;
																				ct.src =
																					capterra_prefix +
																					"/capterra_tracker.js?vid=" +
																					capterra_vid +
																					"&vkey=" +
																					capterra_vkey;
																				var s =
																					document.getElementsByTagName(
																						"script"
																					)[0];
																				s.parentNode.insertBefore(ct, s);
																			}
																			runCapterra();
																			return false;
																		});
																	}
																);
															}
														);
													}}
												/>
											</div>
										</div>
									</div>
								</div>
							</section>
						</div>
					</div>
				</div>
			</section>

			<section className="c-cols c-cols-alternate home-col-alternate webinar-meet-hosts">
				<div className="container c-animation-container">
					<div className="col-md-12">
						<div className="row">
							<div className="col-md-8 c-align--center">
								<h1 className="meet-hosts-title">Meet the hosts</h1>
							</div>
						</div>

						{entry.featuredAuthors?.length &&
							entry.featuredAuthors.map((user) => {
								const authorBioToUse = user.bio?.replace({
									"\n": "<br>",
									"\r": "<br>",
								});
								return (
									<div className="row ">
										<div className="col-md-5 order-1">
											<div className="c-image c-image--shadow animation-element slide-bottom in-view">
												{user.photo?.url && (
													<img
														style={{ maxWidth: "370px!important" }}
														className=""
														src={user.photo.url}
														alt="Author photo"
													/>
												)}
											</div>
										</div>
										<div className="col-md-6 offset-md-1 c-valign--middle order-2">
											<div>
												<h2 className="host-name">
													{user.firstName} {user.lastName}
												</h2>
												<h3 className="host-title">
													{user.authorTitle}, {user.userCompany}
												</h3>
												<p
													className="host-bio"
													dangerouslySetInnerHTML={{ __html: authorBioToUse }}
												></p>
											</div>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</section>
		</>
	);
};

export default WebinarSpecialForm;
