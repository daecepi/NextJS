import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useRecoilValue } from "recoil";
import { SyncedAtom } from "../atoms/SyncAtom";
import NavigationDefault from "../components/Navigation/NavigationDefault";
import DefaultPageBase from "../components/PageBase/DefaultPageBase";
import { getEntryBySectionHandle } from "../lib/api";

const DemosPage = ({ entry, globals }) => {
	const syncedAtom = useRecoilValue(SyncedAtom);

	const generalScripsValue = `
	
	`;

	return (
		<DefaultPageBase entry={entry} globals={globals}>
			<NavigationDefault />

			<Head>
				<title>Copper CRM</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div>
				<section
					className="c-gate-form c-gate-form--demo"
					id="choose-webinar-section1"
				>
					<div className="container">
						<div className="row">
							<div className="col-md-10 c-gate-form__form">
								<div className="">
									<div className="col-lg-7 col-md-12">
										<h2 className="t-resource-period--hot-pink">
											Watch a demo
										</h2>
										<p className="h-clear-bottom-margin">
											See how easy it is to build lasting relationships with
											Copper.
										</p>
										<div className="c-form c-form__in-line no-top-padding ">
											<div className="online-marketo">
												<form
													id="mktoForm_2252"
													className="mktoForm mktoHasWidth notranslate"
												>
													<div className="h-gdpr" style={{ display: "block" }}>
														<span>
															By submitting this form you agree to our terms.
															See our{" "}
															<Link href="/privacy">
																<a>privacy policy</a>
															</Link>{" "}
															to learn about how we use your information.
														</span>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-2 c-gate-form__img d-none d-lg-block d-xl-block relative">
								<style jsx>{`
									.demo-capsule {
										position: absolute;
										top: 5px;
										bottom: 0;
										left: -295px;
									}
								`}</style>
								<div className="demo-capsule">
									<Image
										className=""
										alt="Demo UI image"
										src="https://copper.objects.frb.io/imgs/demos/demo_ui01.png"
										height={600}
										width={569}
										layout="fixed"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					className="c-gate-form c-gate-form--demo d-none"
					id="choose-webinar-section2"
				>
					<div className="container">
						<div className="row">
							<div className="col-md-5 ">
								<div className="">
									<h2 className="t-resource-period--hot-pink">Select a demo</h2>
									<p className="p-sm">
										Our live demos are presented by one of our product experts
										with a Q&A at the end.
										<br />
										<br />
										Can’t wait? See how Copper works with our pre-recorded{" "}
										<a
											className="t-normal-link"
											style={{ marginTop: "14px" }}
											onClick={() => {
												viewDemosPage();
											}}
										>
											demo videos.
										</a>
									</p>
									<br />
									<br />

									<style jsx>{`
										.demo-capsule {
											position: absolute;
											top: 5px;
											bottom: 0;
											left: -295px;
										}
									`}</style>
									<div className="demo-capsule">
										<Image
											className=""
											alt="Demo UI image"
											src="/imgs/demos/working.jpg"
											height={600}
											width={569}
											layout="fixed"
										/>
									</div>
								</div>
							</div>
							<div className="col-md-7 ">
								<div className="c-gate-form--card c-list-card__card form_inside">
									<div
										className="c-select-options"
										style={{ marginBottom: "15px" }}
									>
										<div
											id="c-select-options__item-0"
											className="c-select-options__item"
											onClick={() => {
												selectWebinarTime(0);
											}}
											style={{ display: "none" }}
										>
											<div className="month"></div>
											<div className="date"></div>
											<div className="time"></div>
										</div>
										<div
											id="c-select-options__item-1"
											className="c-select-options__item"
											onClick={() => {
												selectWebinarTime(1);
											}}
											style={{ display: "none" }}
										>
											<div className="month"></div>
											<div className="date"></div>
											<div className="time"></div>
										</div>
										<div
											id="c-select-options__item-2"
											className="c-select-options__item"
											onClick={() => {
												selectWebinarTime(2);
											}}
											style={{ display: "none" }}
										>
											<div className="month"></div>
											<div className="date"></div>
											<div className="time"></div>
										</div>
										<div
											id="c-select-options__item-3"
											className="c-select-options__item"
											onClick={() => {
												selectWebinarTime(3);
											}}
											style={{ display: "none" }}
										>
											<div className="month"></div>
											<div className="date"></div>
											<div className="time"></div>
										</div>
										<div
											id="c-select-options__item-4"
											className="c-select-options__item"
											onClick={() => {
												selectWebinarTime(4);
											}}
											style={{ display: "none" }}
										>
											<div className="month"></div>
											<div className="date"></div>
											<div className="time"></div>
										</div>
										<div
											id="c-select-options__item-5"
											className="c-select-options__item"
											onClick={() => {
												selectWebinarTime(5);
											}}
											style={{ display: "none" }}
										>
											<div className="month"></div>
											<div className="date"></div>
											<div className="time"></div>
										</div>
										<div
											id="c-select-options__item-6"
											className="c-select-options__item"
											onClick={() => {
												selectWebinarTime(6);
											}}
											style={{ display: "none" }}
										>
											<div className="month"></div>
											<div className="date"></div>
											<div className="time"></div>
										</div>
										<div
											id="c-select-options__item-7"
											className="c-select-options__item"
											onClick={() => {
												selectWebinarTime(7);
											}}
											style={{ display: "none" }}
										>
											<div className="month"></div>
											<div className="date"></div>
											<div className="time"></div>
										</div>
										<div
											id="c-select-options__item-8"
											className="c-select-options__item"
											onClick={() => {
												selectWebinarTime(8);
											}}
											style={{ display: "none" }}
										>
											<div className="month"></div>
											<div className="date"></div>
											<div className="time"></div>
										</div>
									</div>
									<p
										id="no-webinar-selected"
										className="t-hot-pink p-sm d-none h-clear-top-margin"
										style={{ display: "none" }}
									>
										Please select a date.
									</p>
									<a
										id="registerToWebinar"
										className="c-button c-button--color-fix"
										onClick={() => {
											submitWebinarForm();
										}}
									>
										Sign Up
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<Script
					src="/js/lazyload.min.js"
					strategy="afterInteractive"
					onLoad={() => {
						var selectedWebinar = "";
						var selectedWebinarMarketo = "";
						var webinarValues = "";
						var submittedVals = "";
						var skipOptionPage = false;
						var sndleveldomain = window.location.hostname;

						// (1) Load Marketo form with onSuccess function
						// (2) Get webinar values from form
						// (3) Set webinar values & display up to 4 dates
						// (4) return array of possible webinar values
						// (5) Save user inputed data when form is submitted and show next stage
						function loadWebinarForm() {
							// // (1)
							// old form 1784
							if (!MktoForms2) return;
							MktoForms2.loadForm(
								"//app-sj17.marketo.com",
								"763-DVL-293",
								2252,
								function (form) {
									form.onSubmit(function () {
										var vals = form.vals();
										var cBcompanymetricsemployees = document.getElementsByName(
											"cBcompanymetricsemployees"
										)[0];
										if (cBcompanymetricsemployees) {
											if (cBcompanymetricsemployees.value <= 1) {
												vals.companySize = "1";
											} else if (cBcompanymetricsemployees.value <= 5) {
												vals.companySize = "2-5";
											} else if (cBcompanymetricsemployees.value <= 20) {
												vals.companySize = "6-20";
											} else if (cBcompanymetricsemployees.value <= 50) {
												vals.companySize = "21-50";
											} else if (cBcompanymetricsemployees.value <= 100) {
												vals.companySize = "51-100";
											} else if (cBcompanymetricsemployees.value <= 500) {
												vals.companySize = "101-500";
											} else {
												vals.companySize = "500+";
											}
										}
									});
									form.onSuccess(function () {
										console.log("RAN ");
										// Fix GA
										if (
											(window.location.pathname === "/demos" ||
												window.location.pathname === "/demo") &&
											typeof ga !== undefined
										) {
											// ga("send", "event", "demos", "demo_request", "old_flow");
										}

										submittedVals = form.vals();
										if (
											submittedVals !== "" &&
											submittedVals.prosperWorks101Date === ""
										) {
											window.scrollTo(0, 0);
											form.getFormElem().remove();
											// POner coookies
											if (!skipOptionPage) {
												switch (submittedVals.companySize) {
													case "1":
													case "2-5":
														$("#choose-webinar-section1").addClass("d-none");
														$("#choose-webinar-option1").removeClass("d-none");
														viewDemosPage();
														break;
													//  case '2-5':
													//    $("#choose-webinar-section1").addClass('d-none');
													//    $("#choose-webinar-section2").removeClass('d-none');
													//    $("#choose-webinar-confrimation-medium").removeClass('d-none');
													//    break;
													default:
														$("#choose-webinar-section1").addClass("d-none");
														$("#choose-webinar-section2").addClass("d-none");
														$("#choose-webinar-confrimation-large").removeClass(
															"d-none"
														);
														$("#choose-webinar-confrimation").removeClass(
															"d-none"
														);
												}
											} else {
												console.log("RAN 2");
												$("#choose-webinar-section1").addClass("d-none");
												$("#choose-webinar-option1").removeClass("d-none");
											}
											runCapterra();
										}
										return false;
									});
								}
							);
							MktoForms2.whenReady(function (form) {
								if (form.getId() === 1734) {
									// (2)
									$("#mktoForm_1734").removeClass("mktoLayoutAbove");
									$(".c-footer--simple").removeClass("d-none");
									window.scrollTo(0, 0);
									var count = 0;
									var getUserInfo = Cookies.get("demo_gate_form", {
										domain: sndleveldomain,
									})
										? JSON.parse(
												Cookies.get("demo_gate_form", {
													domain: sndleveldomain,
												})
										  )
										: undefined;
									if (getUserInfo) {
										$("#FirstName").val(getUserInfo.FirstName);
										$("#LastName").val(getUserInfo.LastName);
										$("#Email").val(getUserInfo.Email);
										$("#Company").val(getUserInfo.Company);
										// console.log(getUserInfo.companySize);
										$("#companySize").val(getUserInfo.companySize);
										$("#Phone").val(getUserInfo.Phone);
									}
									webinarValues = $("select#prosperWorks101Date option")
										.filter(function (index) {
											var now = new Date();
											var current = new Date($(this).text().split(" ")[1]);
											return $(this).val() !== "" && current > now;
										})
										.map(function (index) {
											// (3)
											count++;
											if (index < 9) {
												var month = $(this).text().split(" ")[1].split("/")[0];
												switch (month) {
													case "1":
														month = "January";
														break;
													case "2":
														month = "February";
														break;
													case "3":
														month = "March";
														break;
													case "4":
														month = "April";
														break;
													case "5":
														month = "May";
														break;
													case "6":
														month = "June";
														break;
													case "7":
														month = "July";
														break;
													case "8":
														month = "August";
														break;
													case "9":
														month = "September";
														break;
													case "10":
														month = "October";
														break;
													case "11":
														month = "November";
														break;
													case "12":
														month = "December";
														break;
												}
												var date = $(this).text().split(" ")[1].split("/")[1];
												var day = $(this).text().split(" ")[0].slice(0, 3);
												// If space is added e.g. 2 pm instead of 2pm us this instead
												//var time = $(this).text().split(' ')[2] + ' ' + $(this).text().split(' ')[3] + ' ' +  $(this).text().split(' ')[4];
												var time =
													$(this).text().split(" ")[2] +
													" " +
													$(this).text().split(" ")[3];
												$("#c-select-options__item-" + index).css({
													display: "inline-flex",
												});
												$("#c-select-options__item-" + index + " .month").text(
													month
												);
												$("#c-select-options__item-" + index + " .date").text(
													date
												);
												$("#c-select-options__item-" + index + " .time").text(
													day + ", " + time
												);
											}
											// (4)
											return $(this).val();
										})
										.get();

									// count set to 1 to always ask for what section to show
									count = 1;

									if (count === 0) {
										skipOptionPage = true;
									}
								}
							});
						}

						// Add selected class to selected time
						// Update user inputed data (submittedVals) with chosen webinar
						function selectWebinarTime(option) {
							$("#no-webinar-selected").addClass("d-none");
							if (selectedWebinar !== "") {
								$("#c-select-options__item-" + selectedWebinar).removeClass(
									"selected"
								);
							}
							selectedWebinar = option;
							$("#c-select-options__item-" + option).addClass("selected");
							if (webinarValues !== "") {
								selectedWebinarMarketo = webinarValues[selectedWebinar];
							}
						}
						function runCapterra() {
							var capterra_vkey = "bdf9d93f2565930e2fb6cb6b3c348d8c",
								capterra_vid = "2100282",
								capterra_prefix =
									"https:" == document.location.protocol
										? "https://ct.capterra.com"
										: "http://ct.capterra.com";
							var ct = document.createElement("script");
							ct.type = "text/javascript";
							ct.async = true;
							ct.src =
								capterra_prefix +
								"/capterra_tracker.js?vid=" +
								capterra_vid +
								"&vkey=" +
								capterra_vkey;
							var s = document.getElementsByTagName("script")[0];
							s.parentNode.insertBefore(ct, s);
						}

						function submitWebinarForm() {
							if (selectedWebinar === "") {
								$("#no-webinar-selected").removeClass("d-none");
								return false;
							}

							MktoForms2.loadForm(
								"//app-sj17.marketo.com",
								"763-DVL-293",
								1734,
								function (form) {
									form.onSuccess(function () {
										submittedVals = form.vals();
										$("#choose-webinar-section1").addClass("d-none");
										$("#choose-webinar-section2").addClass("d-none");
										$("#choose-webinar-confrimation").removeClass("d-none");
										return false;
									});
								}
							);

							MktoForms2.whenReady(function (form) {
								if (form && form.getId() === 1734) {
									var formValues = JSON.parse(
										Cookies.get("demo_gate_form", {
											domain: sndleveldomain,
										})
									);
									formValues.prosperWorks101Date = selectedWebinarMarketo;
									form.setValues(formValues);
									form.submit();
								}
							});
						}

						function viewDemosPage() {
							window.scrollTo(0, 0);

							// Update footer
							$(".c-footer--simple").addClass("d-none");
							$(".c-footer").removeClass("d-none");
							$(".c-footer__legal").removeClass("d-none");

							// Append wistia scripts to the page
							var mainWistiaScript = document.createElement("script");
							mainWistiaScript.type = "text/javascript";
							mainWistiaScript.src =
								"https://fast.wistia.com/assets/external/E-v1.js";
							mainWistiaScript.setAttribute("async", "async");
							$("#wistia-script").append(mainWistiaScript);

							$.each($(".c-demo-video-script"), function () {
								var videoId = $(this).attr("id").split("videoScript-")[1];
								var src =
									"https://fast.wistia.com/embed/medias/" + videoId + ".jsonp";
								var wistiaVideoScript = document.createElement("script");
								wistiaVideoScript.type = "text/javascript";
								wistiaVideoScript.src = src;
								wistiaVideoScript.setAttribute("async", "async");
								$(this).append(wistiaVideoScript);
							});
							$("#choose-webinar-section2").addClass("d-none");
							$("#choose-webinar-option1").removeClass("d-none");
							$("#choose-webinar-confrimation").addClass("d-none");
						}

						LazyLoad.js(
							[
								"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js",
								"/js/vendor/js-cookie.js",
								"/js/functions.min.{{ staticAssetsVersion }}.js",
							],
							function () {
								loadWebinarForm();
								$("footer, .c-footer__legal").addClass("d-none");
							}
						);
					}}
				/>
			</div>
			<section
				className="c-gate-form c-gate-form--demo c-cols d-none"
				id="choose-webinar-confrimation"
			>
				<div className="container">
					<div className="row">
						<div className="col-md-5 c-gate-form__form">
							<h2 className="t-resource-period--hot-pink">Thank you</h2>
							<p
								id="choose-webinar-confrimation-large"
								className="h-clear-bottom-margin d-none"
							>
								Please check your <strong>promotions</strong> tab if you don’t
								see an email from us.
								<br />
								<br />
								We also recommend checking out
								<br />{" "}
								<a
									className="t-normal-link"
									style={{ marginTop: "14px" }}
									onClick={() => {
										viewDemosPage();
									}}
								>
									our demo video
								</a>{" "}
								for an intro to Copper.
							</p>
							<div id="choose-webinar-confrimation-medium" className="d-none">
								<p className="h-clear-bottom-margin">
									We’re looking forward to seeing you at the live demo. In the
									meantime, here’s a picture of our beloved copper pup, Frank.
									<br />
									<br />
									We also recommend starting a free trial.
								</p>
								<div className="c-hero__buttons">
									<Link href={syncedAtom.generalSignupUrl}>
										<a className="c-button sendUTMsToAmplitude">Try Free</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-md-7 c-gate-form__confirmation-img d-none d-lg-block d-xl-block">
							<style jsx>{`
								.confirmation-capsule {
									position: relative;
									right: -60px;
									max-height: 700px;
									height: 700px;
									width: 629px;
								}
							`}</style>
							<div className="confirmation-capsule">
								<Image
									className=""
									alt="Demo UI image"
									src="/imgs/demos/demo-confirmation.jpg"
									layout="fill"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</DefaultPageBase>
	);
};

export default DemosPage;

export async function getStaticProps(context) {
	const res = await getEntryBySectionHandle("demo", "demo");
	return {
		props: {
			entry: res?.entry || {},
			globals: res?.globalSets || [],
		}, // will be passed to the page component as props
		revalidate: 120, // in seconds
	};
}
