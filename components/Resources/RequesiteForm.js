import Script from "next/script";
import { useRecoilValue } from "recoil";
import { SyncedAtom } from "../../contexts/SyncContext";

const RequesiteForm = ({ entry }) => {
	const syncedAtom = useRecoilValue(SyncedAtom);

	const entryFormId = entry.formId
		? entry.type == "webinars"
			? 2250
			: entry.type == "register"
			? 2155
			: entry.formId
		: 2157;

	const eyebrowSelector = (entry) => {
		if (entry.specialStyle && entry.specialStyle == "inspirationSeries")
			return (
				<span className="t-eyebrow t-special-eyebrow t-special-eyebrow--lt-purple t-eyebrow-lg">
					Copper Inspiration Series <br />
				</span>
			);
		if (entry.typeHandle == "webinars" || entry.typeHandle == "register")
			return (
				<span className="t-eyebrow t-special-eyebrow t-special-eyebrow--lt-purple">
					Upcoming webinar
					{entry.releaseDate
						? `: ${new Date(entry.releaseDate).toISOString().split("T")[0]}`
						: ""}
					<br />
					<span className="t-eyebrow hot-pink">
						<strong>{entry.eyebrow}</strong>
					</span>
				</span>
			);
	};
	return (
		<section
			className="c-resource-content c-resource-content--overlap"
			id="c-ebook-gate"
		>
			<div className="c-resource-content__container container ">
				<div className="c-ebook-gate">
					<div className="c-e-book-builder__header col-md-12 ">
						{eyebrowSelector()}
						<div
							className={
								entry.specialStyle && entry.specialStyle == "inspirationSeries"
									? "col-md-10 offset-md-1"
									: "col-md-8 offset-md-2"
							}
						>
							{entry.typeHandle == "webinars" && entry.embeddedVideo?.length ? (
								<h2>Video not yet available. Check back soon.</h2>
							) : (
								<h1>{entry.title}</h1>
							)}
						</div>
					</div>
					<div className="col-md-12">
						<section className="c-e-book-gate__form h-padding-bottom">
							<div className="row justify-content-center">
								<div className="col-md-5 ">
									{entry.formHeader?.length && <h3>{entry.formHeader}</h3>}
									<div
										className="p p-sm t-pink-bullet-points"
										dangerouslySetInnerHTML={{ __html: entry.formCopy }}
									></div>
								</div>
								{entry.typeHandle != "webinars" ||
								entry.embeddedVideo?.length ? (
									<div className="col-md-6 offset-md-1">
										<div className="c-form">
											<div id="landing-form-snip" className="sl_swap">
												<div className="online-marketo">
													<form id={`mktoForm_${entryFormId}`}>
														<div className="h-gdpr d-flex">
															{entry.id == "11741" ? (
																<i>
																	By submitting this form, you agree to our
																	terms. See Copper’s{" "}
																	<a href="/privacy">privacy policy</a> to learn
																	about how we use your information. See
																	DocuSign’s{" "}
																	<a href="https://www.docusign.com/company/terms-and-conditions/web">
																		Terms & Conditions
																	</a>{" "}
																	and{" "}
																	<a href="https://www.docusign.com/company/privacy-policy">
																		Privacy Policy
																	</a>{" "}
																	here.
																</i>
															) : (
																<>
																	<input
																		type="hidden"
																		name="consent"
																		value="true"
																	/>
																	<i>
																		Copper uses the information you provide to
																		us to contact you about our relevant
																		software and content. You may unsubscribe
																		from these communications at any time. For
																		more information, check out our{" "}
																		<a href="/privacy">privacy policy</a>.
																	</i>
																</>
															)}
														</div>
													</form>

													<div className="js-form-success js-form-success--content-download">
														{entry.typeHandle == "register" && (
															<>
																<span className="t-eyebrow t-special-eyebrow t-special-eyebrow--lt-purple">
																	{entry.specialStyle == "inspirationSeries"
																		? "Inspiration series"
																		: "Upcoming webinar"}
																</span>
																<br />
															</>
														)}
														<h3>{entry.paragraph}</h3>
														<p>
															Want to try Copper for yourself? Start a 14-day
															free trial!
														</p>
														<Link href={syncedAtom.generalSignupUrl}>
															<a className="c-button">Try Copper Free</a>
														</Link>
														<picture>
															<source
																type="image/webp"
																srcset="/imgs/webinars/webinar-form-image.webp"
																className=""
																alt="Working image"
															/>
															<source
																type="image/png"
																srcset="/imgs/webinars/webinar-form-image.png"
																className=""
																alt="Working image"
															/>
															<img
																className=""
																alt="Working image"
																src="/imgs/webinars/webinar-form-image.png"
																width="322"
															/>
														</picture>
													</div>
													<Script
														src="js/Lazyload.min.js"
														strategy="afterInteractive"
														onLoad={() => {
															LazyLoad.js(
																[
																	"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js",
																	"/js/vendor/js-cookie.js",
																	"/js/functions.min.{{ staticAssetsVersion }}.js",
																],
																function () {
																	MktoForms2.loadForm(
																		"//app-sj17.marketo.com",
																		"763-DVL-293",
																		entryFormId,
																		function (form) {
																			form.onSuccess(function () {
																				var submittedVals = form.vals();
																				if (submittedVals !== "") {
																					// Use the entry id so its unique to that entry not just the form
																					Cookies.set(
																						`form_gate_${entry.id}`,
																						true,
																						{ domain: sndleveldomain },
																						14
																					);
																					const reloadEntries = [
																						"eBook",
																						"newEBook",
																						"webinars",
																					];
																					if (
																						entry.typeHandle in reloadEntries
																					) {
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
								) : (
									""
								)}
								{entry.slug == "coffee-with-copper-integrations" && (
									<div className="col-12">
										<img
											style={{ width: "100%", marginTop: "20px" }}
											src="https://copper.objects.frb.io/imgs/webinar-integrations-logos.png"
										/>
									</div>
								)}
							</div>
							{entry.belowTheFormCopy?.length && (
								<div className="row">
									<div className="col-md-12">
										<div
											className="p p-sm t-bullet-pink-points"
											dangerouslySetInnerHTML={{
												__html: entry.belowTheFormCopy,
											}}
										></div>
									</div>
								</div>
							)}
						</section>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RequesiteForm;
