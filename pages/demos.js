import NavigationDefault from "../components/Navigation/NavigationDefault";
import Head from "next/head";

const DemosPage = () => {
	return (
		<>
			<NavigationDefault />

			<Head>
				<title>Copper CRM</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div>
				<section
					class="c-gate-form c-gate-form--demo"
					id="choose-webinar-section1"
				>
					<div class="container">
						<div class="row">
							<div class="col-md-10 c-gate-form__form">
								<div class="">
									<div class="col-lg-7 col-md-12">
										<h2 class="t-resource-period--hot-pink">Watch a demo</h2>
										<p class="h-clear-bottom-margin">
											See how easy it is to build lasting relationships with
											Copper.
										</p>
										<div class="c-form c-form__in-line no-top-padding ">
											<div class="online-marketo">
												<form
													id="mktoForm_2185"
													class="mktoForm mktoHasWidth notranslate"
												>
													<div class="h-gdpr" style={{ display: "block" }}>
														<span>
															By submitting this form you agree to our terms.
															See our <a href="/privacy">privacy policy</a> to
															learn about how we use your information.
														</span>
													</div>
												</form>
											</div>
											{() => {
												return `
                        <script>
                        LazyLoad.js([
                          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js',
                          '/js/vendor/js-cookie.js',
                          '/js/functions.min.{{ staticAssetsVersion }}.js'
                        ],function(){
                          if({{ marketoConfigurations.replaceMarketoForms ? 1 : 0 }} || typeof MktoForms2 === "undefined"){
                            {{ localLeadReplacements.lightScriptReplacement("mktoForm_1734", staticAssetsVersion, "VAL", true, true, true) }}
                          } else {
                            loadWebinarForm();
                          }
                          $('footer, .c-footer__legal').addClass('d-none');
                        })
                        </script>`;
											}}
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-2 c-gate-form__img d-none d-lg-block d-xl-block">
								<picture>
									<source
										type="image/webp"
										srcset="https://copper.objects.frb.io/imgs/demos/demo_ui01.webp"
										class=""
										alt="Demo UI image"
									/>
									<source
										type="image/png"
										srcset="https://copper.objects.frb.io/imgs/demos/demo_ui01.png"
										class=""
										alt="Demo UI image"
									/>
									<img
										class=""
										alt="Demo UI image"
										src="https://copper.objects.frb.io/imgs/demos/demo_ui01.png"
									/>
								</picture>
							</div>
						</div>
					</div>
				</section>

				<section
					class="c-gate-form c-gate-form--demo d-none"
					id="choose-webinar-section2"
				>
					<div class="container">
						<div class="row">
							<div class="col-md-5 ">
								<div class="">
									<h2 class="t-resource-period--hot-pink">Select a demo</h2>
									<p class="p-sm">
										Our live demos are presented by one of our product experts
										with a Q&A at the end.
										<br />
										<br />
										Can’t wait? See how Copper works with our pre-recorded{" "}
										<a
											class="t-normal-link"
											style={{ marginTop: "14px" }}
											onClick="viewDemosPage()"
										>
											demo videos.
										</a>
									</p>
									<br />
									<br />
									<picture>
										<source
											type="image/webp"
											srcset="imgs/demos/working.webp"
											class=""
											alt="Working image"
										/>
										<source
											type="image/png"
											srcset="imgs/demos/working.jpg"
											class=""
											alt="Working image"
										/>
										<img
											class=""
											alt="Working image"
											src="imgs/demos/working.jpg"
										/>
									</picture>
								</div>
							</div>
							<div class="col-md-7 ">
								<div class="c-gate-form--card c-list-card__card form_inside">
									<div
										class="c-select-options"
										style={{ marginBottom: "15px" }}
									>
										<div
											id="c-select-options__item-0"
											class="c-select-options__item"
											onClick="selectWebinarTime(0)"
											style={{ display: "none" }}
										>
											<div class="month"></div>
											<div class="date"></div>
											<div class="time"></div>
										</div>
										<div
											id="c-select-options__item-1"
											class="c-select-options__item"
											onClick="selectWebinarTime(1)"
											style={{ display: "none" }}
										>
											<div class="month"></div>
											<div class="date"></div>
											<div class="time"></div>
										</div>
										<div
											id="c-select-options__item-2"
											class="c-select-options__item"
											onClick="selectWebinarTime(2)"
											style={{ display: "none" }}
										>
											<div class="month"></div>
											<div class="date"></div>
											<div class="time"></div>
										</div>
										<div
											id="c-select-options__item-3"
											class="c-select-options__item"
											onClick="selectWebinarTime(3)"
											style={{ display: "none" }}
										>
											<div class="month"></div>
											<div class="date"></div>
											<div class="time"></div>
										</div>
										<div
											id="c-select-options__item-4"
											class="c-select-options__item"
											onClick="selectWebinarTime(4)"
											style={{ display: "none" }}
										>
											<div class="month"></div>
											<div class="date"></div>
											<div class="time"></div>
										</div>
										<div
											id="c-select-options__item-5"
											class="c-select-options__item"
											onClick="selectWebinarTime(5)"
											style={{ display: "none" }}
										>
											<div class="month"></div>
											<div class="date"></div>
											<div class="time"></div>
										</div>
										<div
											id="c-select-options__item-6"
											class="c-select-options__item"
											onClick="selectWebinarTime(6)"
											style={{ display: "none" }}
										>
											<div class="month"></div>
											<div class="date"></div>
											<div class="time"></div>
										</div>
										<div
											id="c-select-options__item-7"
											class="c-select-options__item"
											onClick="selectWebinarTime(7)"
											style={{ display: "none" }}
										>
											<div class="month"></div>
											<div class="date"></div>
											<div class="time"></div>
										</div>
										<div
											id="c-select-options__item-8"
											class="c-select-options__item"
											onClick="selectWebinarTime(8)"
											style={{ display: "none" }}
										>
											<div class="month"></div>
											<div class="date"></div>
											<div class="time"></div>
										</div>
									</div>
									<p
										id="no-webinar-selected"
										class="t-hot-pink p-sm d-none h-clear-top-margin"
										style={{ display: "none" }}
									>
										Please select a date.
									</p>
									<a
										id="registerToWebinar"
										class="c-button c-button--color-fix"
										onClick="submitWebinarForm()"
									>
										Sign Up
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default DemosPage;
