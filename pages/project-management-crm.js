import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Footer from "../components/Footer/Footer";
import NavigationDefault from "../components/Navigation/NavigationDefault";
import { getEntryBySectionHandle } from "../lib/api";
const PmCRM = () => {
	return (
		<main id="content" role="main" className="no-top-margin">
			<Head>
				// Responsive meta tag
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				// bootstrap CDN
			</Head>
			<NavigationDefault></NavigationDefault>

			<Script
				strategy="beforeInteractive"
				src="https://app-sj17.marketo.com/js/forms2/js/forms2.min.js"
			></Script>
			<Script
				strategy="beforeInteractive"
				src="https://marketo.clearbit.com/assets/v1/marketo/forms.js"
				data-clearbit-publishable-key="pk_297de2bd498f18ecd1cabfdd7ad4fea9"
			></Script>
			<Script
				src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
				onLoad={() => {
					var compSize = undefined;
					var tyMsgSelect = [
						{
							variationLogic: "companySize",
							variationLogicComparison: "lessThan",
							variationLogicValue: 6,
							vSuccessMessage: "",
						},
					];
					function shDisplayVariationMessage(formValues) {
						// Get the number to evaluate from
						var messageNotFound = true;
						var messageDisplayed = true;
						tyMsgSelect.forEach(function (tyVariation) {
							var companySize =
								formValues["companySize"] ||
								formValues.cBcompanymetricsemployees;
							var sizes = companySize.replace("+", "").split("-");
							var maxValue = Math.max(...sizes);
							var minValue = Math.min(...sizes);
							if (tyVariation.variationLogic === "companySize") {
								if (
									messageNotFound &&
									tyVariation.variationLogicValue <= maxValue &&
									tyVariation.variationLogicValue >= minValue
								) {
									// When we just want to affect the
									$(
										`#synced-${tyVariation.variationLogic}${tyVariation.variationLogicValue}`
									)
										.first()
										.removeClass("invisible-start");
									messageNotFound = false;
								} else if (
									messageNotFound &&
									tyVariation.variationLogicComparison === "lessThan" &&
									tyVariation.variationLogicValue >= maxValue
								) {
									$(
										`#synced-${tyVariation.variationLogic}${tyVariation.variationLogicValue}`
									)
										.first()
										.removeClass("invisible-start");
									messageNotFound = false;
								}
							}
						});
						if (messageNotFound) {
							$("#synced-default-thank-you")
								.first()
								.removeClass("invisible-start");
						}

						$("#c-form--default-hero")
							.fadeOut(300, "linear")
							.promise()
							.done(function () {
								$(".marketo-flow-trigger").hide(0);
								$("#success-flow-variation").css("display", "block");
								$("#success-flow-row").fadeIn(1000, "linear");
							});

						document
							.getElementById("success-flow-variation")
							.scrollIntoView({ behavior: "smooth" });
					}

					MktoForms2.loadForm(
						"https://app-sj17.marketo.com",
						"763-DVL-293",
						"2164",
						function (form) {
							//Add an onSuccess handler
							form.onSuccess(function (values, followUpUrl) {
								//get the form's jQuery element and hide it
								// Preparing intercom fields
								var heroForm = MktoForms2.getForm("2164");
								var formSubmitted = heroForm.getValues();
								form.getFormElem().hide();

								ga("send", "event", "Get Demo", "FormFill", "2164");
								shDisplayVariationMessage(formSubmitted);

								//return false to prevent the submission handler from taking the lead to the follow up url.
								return false;
							});
						}
					);

					MktoForms2.whenReady(function (form) {
						$(".loading-cover").each(function () {
							var loadingElement = $(this);
							loadingElement.css("display", "none");
						});
					});
					$(".hero-marketo-flow-button").click(configureMarketoNavigation);
					$(".hero-trial-flow-button").click(configureTryFreeNavigation);

					function configureTryFreeNavigation(event) {
						event.preventDefault();

						// Hiding flows before showing
						$("#default-image")
							.fadeOut(300, "linear")
							.promise()
							.done(function () {
								$("#c-form--default-hero")
									.fadeOut(300, "linear")
									.promise()
									.done(function () {
										$(".marketo-flow-trigger")
											.hide(0, "linear")
											.promise()
											.done(function () {
												$(".c-default-state")
													.hide(0, "linear")
													.promise()
													.done(function () {
														$(".trial-flow-trigger")
															.show(0, "linear")
															.promise()
															.done(function () {
																$("#signup-aconditioner-container").fadeIn(500);
															});
													});
											});
									});
							});
					}
					function configureMarketoNavigation(event) {
						event.preventDefault();

						$("#default-image")
							.fadeOut(300, "linear")
							.promise()
							.done(function () {
								$("#signup-aconditioner-container")
									.fadeOut(300, "linear")
									.promise()
									.done(function () {
										$(".trial-flow-trigger")
											.hide(0, "linear")
											.promise()
											.done(function () {
												$(".c-default-state")
													.hide(0, "linear")
													.promise()
													.done(function () {
														$(".marketo-flow-trigger")
															.show(0, "linear")
															.promise()
															.done(function () {
																$("#c-form--default-hero").fadeIn(
																	500,
																	"linear"
																);
															});
													});
											});
									});
							});
					}
				}}
			></Script>

			<section className="c-hero--split soft-midnight product-page no-transition c-default-state">
				<div className="c-animation-container">
					<div
						id="default-image"
						className="c-image condensed-in-background image-center"
					>
						<picture>
							<source
								type="image/webp"
								srcSet="https://copper.objects.frb.io/imgs/simples/projects-page/section-image_hero@2xupdated.webp"
								alt="Image hero"
							/>
							<source
								type="image/png"
								srcSet="https://copper.objects.frb.io/imgs/simples/projects-page/section-image_hero@2xupdated.png"
								alt="Image hero"
							/>
							<Image
								src="https://copper.objects.frb.io/imgs/simples/projects-page/section-image_hero@2xupdated.png"
								alt="Image hero"
								width={1517}
								height={1137}
								layout="responsive"
							/>
						</picture>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-md-6 c-valign--middle">
								<pre className="c-eyebrow c-eyebrow--dark">COPPER PROJECTS</pre>
								<div className="hero-text">
									<h1>CRM doesn’t end with the deal</h1>
									<p>
										After the deal is closed and the work begins, you shouldn't
										have to switch to another tool - incurring the pain of
										duplicate data entry - to make the transition for each task.
										Now, because of Copper’s CRM system, you don't need any
										other project management tool or CRM software.
									</p>
								</div>
								<div className="c-hero__buttons">
									<button className="c-button c-button--hot-pink hero-trial-flow-button">
										Try Free
									</button>
									<button className="c-button c-button--outline hero-marketo-flow-button">
										Request Demo
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="marketo-flow-trigger" style={{ display: "none" }}>
				<section className="c-hero--split soft-midnight product-page no-transition">
					<div className="container">
						<div className="row">
							<div className="col-md-6 c-valign--middle">
								<pre className="c-eyebrow c-eyebrow--dark">COPPER PROJECTS</pre>
								<div className="hero-text">
									<h1>CRM doesn’t end with the deal</h1>
									<p>
										After the deal is closed and the work begins, you shouldn’t
										have to switch to another tool - incurring the pain of
										duplicate data entry - to make the transition.
									</p>
								</div>
								<div className="c-hero__buttons">
									<button className="c-button c-button--hot-pink hero-trial-flow-button">
										Try Free
									</button>
									<button className="c-button c-button--outline hero-marketo-flow-button">
										Request Demo
									</button>
								</div>
							</div>
							<div className="col-md-6 c-valign--middle">
								<div
									id="c-form--default-hero"
									className="c-form c-form-mkto2164"
								>
									<div className="online-marketo">
										{/* {% include "components/graphics/_hero-loading.html" %} */}
										{/* {# form element #} */}
										<form
											id="mktoForm_2164"
											dataformid="2164"
											dataforminstance="one"
										>
											{/* {% if pageHeroSynced is defined and pageHeroSynced == 1 %}
                  <h4>Watch Demo<span className="t-hot-pink">.</span></h4>
                  {% elseif entry.marketoFormCopy is not null and entry.marketoFormCopy|length %}
                  {{ entry.marketoFormCopy }}
                  {% endif %} */}
										</form>
									</div>
									<div
										id="c-thank-you-message--default-hero"
										className="invisible-start"
									>
										{/* {% if entry.marketoThankYouMessage is not null and entry.marketoThankYouMessage|length > 0 %}
                {{ entry.marketoThankYouMessage }}
                {% else %} */}
										<h3>
											Thank you<span className="hot-pink t-hot-pink">.</span>
										</h3>
										<p className="p-sm">
											Someone from our team will be with you shortly
										</p>
										{/* {% endif %} */}
										{/* {{entry.successVideoEmbedCode is not null and entry.successVideoEmbedCode|length > 0 ? entry.successVideoEmbedCode|raw : ''}} */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

			<div className="trial-flow-trigger" style={{ display: "none" }}>
				<section
					className="c-hero--split landing-hero c-hero--general-signup-form split-background--inverted soft-midnight no-transition"
					style={{
						paddingTop: "200px",
						paddingBottom: "100px",
						minHeight: "0",
					}}
				>
					<div className="container">
						<div className="row row--no-reverse">
							<div className="col-md-6 col-margin-inverted c-valign--middle copy-aconditioner soft-midnight">
								<pre className="c-eyebrow c-eyebrow--dark">COPPER PROJECTS</pre>
								<div className="hero-text">
									<h1>CRM doesn’t end with the deal</h1>
									<p>
										After the deal is closed and the work begins, you shouldn’t
										have to switch to another tool - incurring the pain of
										duplicate data entry - to make the transition.
									</p>
								</div>
								<div className="c-hero__buttons">
									<button className="c-button c-button--hot-pink hero-trial-flow-button">
										Try Free
									</button>
									<button className="c-button c-button--outline hero-marketo-flow-button">
										Request Demo
									</button>
								</div>
							</div>
							<div
								id="signup-aconditioner-container"
								className="col-md-6 c-valign--middle signup-aconditioner "
							>
								<div style={{ color: "#000000", marginTop: "60px" }}>
									<div className="form_container">
										<form
											className="signup_form"
											id="signup_form"
											action="https://app.copper.com/users"
											acceptCharset="UTF-8"
											method="post"
										>
											<input name="utf8" type="hidden" value="✓" />
											<input
												type="hidden"
												name="authenticity_token"
												value="lAAB/AYz9RxQR4RN74ZQgCErmru66/VW8Kzw3EeKrJrJC4AjlOsOIwvmktA9F0k1HVJQkSEber78cUBqUaYwhw=="
											/>
											<Link href="https://app.copper.com/auth/auto_login?continue_with_google=true&amp;failure_url=https%3A%2F%2Fapp.copper.com%2Fusers%2Fsign_up%3Fauth_error%3DAuthentication%2Bfailed.%2BPlease%2Benter%2Byour%2Bemail%2Bbelow%2Bto%2Bcontinue.&amp;prompt=consent&amp;provider=google_oauth2_extended">
												<a className="google_light_btn">
													<img
														className="google_icon"
														alt="Google Icon"
														src="//d3jas8421cca9z.cloudfront.net/assets/google-g-0cf576a5dab9315daac7ffe29d29ed585e0ff9850e59408d0f25f38dc1da037b.svg"
													/>
													<span className="google_light_btn_label">
														Continue with Google
													</span>
												</a>
											</Link>
											<div className="signup_form_subtext">
												or use your email to sign up:
											</div>
											<div className="field">
												<div className="form_text_field_container">
													<label htmlFor="user[full_name]">Full Name</label>
													<input
														className="text_field"
														size="30"
														placeholder="Jane Doe"
														type="text"
														name="user[full_name]"
														id="user_full_name"
													/>
												</div>
											</div>
											<div className="field">
												<div className="form_text_field_container">
													<label htmlFor="user[email]">Work Email</label>
													<input
														size="30"
														className="text_field"
														placeholder="janedoe@example.com"
														type="email"
														name="user[email]"
														id="user_email"
													/>
												</div>
											</div>
											<input type="hidden" name="ampDeviceID" value="" />
											<div className="submit-button-row">
												<input
													type="submit"
													name="commit"
													value="Try Free"
													className="submit_button is-pink with-no-border"
												/>
											</div>
										</form>
										<p className="disclaimer">
											By signing up, I agree to Copper’s{" "}
											<Link href="/privacy">
												<a>privacy policy</a>
											</Link>{" "}
											&amp;{" "}
											<Link href="/terms">
												<a>terms of service.</a>
											</Link>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

			{/* rest of the page */}

			{/* Animations styles and scripts */}
			<style jsx>
				{`
					@media (min-width: 768px) {
						#project-first-module .canvas-image-container {
							position: absolute;
							width: 100% !important;
							left: 15px !important;
							right: -15px !important;
							height: 20px !important;
						}
						.c-jumble:after {
							position: absolute;
						}
						.project-first-module-animation img {
							max-width: 112% !important;
							width: 150%;
						}
					}
					#project-first-module .canvas-image-container {
						position: relative;
						width: 100%;
						left: 0;
						right: 0;
						height: auto;
					}
					#project-first-module img,
					#project-second-module img,
					#project-third-module img {
						max-width: 100%;
					}
					.kanbanbasehidden {
						visibility: hidden;
					}
					.kanbanAnimation {
						margin-top: -50px !important;
					}
					.firstmoduleAnimation,
					.secondmoduleAnimation,
					.thirdmoduleAnimation,
					.kanbanslide {
						opacity: 0;
						position: absolute;
						top: 0px;
						left: 0px;
					}
					.smbase,
					.tmbapp,
					.fmfapptab1,
					.fmfapptab2,
					.fmfapptab3,
					.fmsapp,
					.fmsapptab1,
					.kanbanbase {
						opacity: 1;
						position: absolute;
						top: 0px;
						left: 0px;
					}
					.fmsapptabgray,
					.smgraytab {
						opacity: 0.3;
						position: absolute;
						top: 0px;
						left: 0px;
					}
					.fmdetalcard {
						opacity: 0;
						position: absolute;
						top: 0px;
						left: 0px;
					}
				`}
			</style>
			<Script
				src="/js/lazyload.min.js"
				onLoad={() => {
					LazyLoad.js(
						[
							"https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js",
							"https://cdn.jsdelivr.net/npm/in-view@0.6.1/dist/in-view.min.js",
							"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js",
						],
						function () {
							var kanbantimeline = anime.timeline({
								loop: false,
								easing: "linear",
								autoplay: false,
							});
							kanbantimeline.add({
								targets: "#project-kanban-animation .kanbanslide",
								opacity: 1,
								translateX: ["34%", "0"],
								delay: 120,
								duration: 300,
								direction: "linear",
								easing: "linear",
								loop: false,
							});
							inView("#project-kanban-animation").once("enter", function () {
								kanbantimeline.play();
							});
							//   .on('exit', function(){
							//       //el.style.opacity = 0.5;
							//       kanbantimeline.seek(0);
							// });
							// ANIMATION FIRST MODULE
							var fmtimeline = anime.timeline({
								loop: false,
								easing: "linear",
								autoplay: false,
							});
							fmtimeline
								.add({
									targets: "#project-first-module .fmcirclepattern",
									opacity: 1,
									delay: 120,
									duration: 1500,
									direction: "linear",
									easing: "easeOutElastic(0.5, 1)",
									loop: false,
								})
								// .add({
								//   targets: '#project-first-module .fmfapp',
								//   opacity: 1,
								//   translateX:['-100','0'],
								//   delay: 100,
								//   duration: 300,
								//   direction: 'linear',
								//   easing: 'linear',
								//   loop: false
								// },0)
								// .add({
								//   targets: '#project-first-module .fmfapptab',
								//   opacity: 1,
								//   translateY:['100','0'],
								//   delay: anime.stagger(100,{start: 0}),
								//   duration: 100,
								//   direction: 'linear',
								//   easing: 'spring(0.8, 80, 10, 0)',
								//   loop: false
								// },300)
								// .add({
								//   targets: '#project-first-module .fmsapp',
								//   opacity: 1,
								//   translateY:['100','0'],
								//   duration: 300,
								//   direction: 'linear',
								//   easing: 'linear',
								//   loop: false
								// },0)
								// .add({
								//   targets: '#project-first-module .fmsapptab1',
								//   opacity: ['0','1'],
								//   translateY:['100','0'],
								//   duration: 100,
								//   direction: 'linear',
								//   easing: 'spring(0.8, 80, 10, 0)',
								//   loop: false
								// },300)
								// .add({
								//   targets: '#project-first-module .fmsapptabgray',
								//   opacity: 0.5,
								//   // translateY:['100','0'],
								//   duration: 500,
								//   direction: 'linear',
								//   easing: 'spring(0.8, 80, 10, 0)',
								//   loop: false
								// },100)
								.add(
									{
										targets: "#project-first-module .fmsapptabgray",
										opacity: 1,
										//translateY:['100','0'],
										duration: 500,
										direction: "linear",
										easing: "spring(0.8, 80, 10, 0)",
										loop: false,
									},
									220
								)
								.add(
									{
										targets: "#project-first-module .fmdetalcard",
										opacity: 1,
										translateX: ["-40%", "0%"],
										translateY: ["21%", "0%"],
										duration: 1000,
										direction: "linear",
										easing: "spring(0.8, 80, 100, 0)",
										loop: false,
									},
									220
								);
							inView("#project-first-module").once("enter", function () {
								fmtimeline.play();
							});
							//   .on('exit', function(){
							//       //el.style.opacity = 0.5;
							//       fmtimeline.seek(0);
							// });
							// SECOND MODULE ANIMATION
							var smtimeline = anime.timeline({
								loop: false,
								easing: "linear",
								autoplay: false,
							});
							smtimeline
								.add(
									{
										targets: "#project-second-module .smgraytab",
										opacity: 1,
										direction: "linear",
										duration: 500,
										easing: "linear",
										loop: false,
									},
									0
								)
								// .add({
								//   targets: '#project-second-module .smgraytab',
								//   opacity: ['0.5','1'],
								//   direction: 'linear',
								//   duration:100,
								//   easing: 'linear',
								//   loop: false
								// },100)
								.add(
									{
										targets: "#project-second-module .smdetailcard",
										opacity: 1,
										translateX: ["-27%", "0%"],
										duration: 1000,
										direction: "linear",
										easing: "spring(0.8, 80, 10, 0)",
										loop: false,
									},
									120
								);
							inView("#project-second-module").once("enter", function () {
								smtimeline.play();
							});
							//   .on('exit', function(){
							//       //el.style.opacity = 0.5;
							//       smtimeline.seek(0);
							// });
							// THIRDMODULE ANIMATION
							var tmtimeline = anime.timeline({
								loop: false,
								easing: "linear",
								autoplay: false,
							});
							tmtimeline.add({
								targets: "#project-third-module .tmicons",
								opacity: 1,
								translateY: ["100", "0"],
								duration: 500,
								delay: anime.stagger(120, { start: 0 }),
								direction: "linear",
								easing: "spring(0.8, 80, 10, 0)",
								loop: false,
							});
							inView.offset(300);
							inView("#project-third-module").once("enter", function () {
								tmtimeline.play();
							});
							//   .on('exit', function(){
							//       //el.style.opacity = 0.5;
							//       tmtimeline.seek(0);
							// });
						}
					);
				}}
			/>

			{/* One column video */}
			<section id="" className="c-single-column h-padding-bottom white">
				<div id="project-kanban-animation" className="container">
					<div className="col-md-8 offset-md-2 c-single-column__container no-bottom-padding">
						<h2>No more tooling around with online CRM project management</h2>
						<p>
							Say hello to Projects in Copper. Achieve seamless handoffs and
							better collaboration, especially team collaboration, across your
							business... with fewer tools for marketing automation, workflow
							automation, and your online CRM project management.
						</p>
					</div>
					<h1>
						<br />
					</h1>
					<p>
						<br />
					</p>
					<div
						style={{
							position: "relative",
							width: "fit-content",
							margin: "auto",
						}}
					>
						<picture>
							<source
								type="image/webp"
								srcSet="imgs/simples/projects-page/kanban/animation-layer_kanban-1@2x.webp"
								className="kanbanAnimation kanbanbasehidden"
								alt="Layer kanban animation 1"
							/>
							<source
								type="image/png"
								srcSet="imgs/simples/projects-page/kanban/animation-layer_kanban-1@2x.png"
								className="kanbanAnimation kanbanbasehidden"
								alt="Layer kanban animation 1"
							/>
							<img
								className="kanbanAnimation kanbanbasehidden"
								src="imgs/simples/projects-page/kanban/animation-layer_kanban-1@2x.png"
								alt="Layer kanban animation 1"
							/>
						</picture>
						<picture>
							<source
								type="image/webp"
								srcSet="imgs/simples/projects-page/kanban/animation-layer_kanban-1@2x.webp"
								className="kanbanAnimation kanbanbase"
								alt="Layer kanban animation 2"
							/>
							<source
								type="image/png"
								srcSet="imgs/simples/projects-page/kanban/animation-layer_kanban-1@2x.png"
								className="kanbanAnimation kanbanbase"
								alt="Layer kanban animation 2"
							/>
							<img
								className="kanbanAnimation kanbanbase"
								src="imgs/simples/projects-page/kanban/animation-layer_kanban-1@2x.png"
								alt="Layer kanban animation 2"
							/>
						</picture>
						<picture>
							<source
								type="image/webp"
								srcSet="imgs/simples/projects-page/kanban/animation-layer_kanban-2@2x.webp"
								className="kanbanAnimation kanbanslide"
								alt="Layer kanban animation 3"
							/>
							<source
								type="image/png"
								srcSet="imgs/simples/projects-page/kanban/animation-layer_kanban-2@2x.png"
								className="kanbanAnimation kanbanslide"
								alt="Layer kanban animation 3"
							/>
							<img
								className="kanbanAnimation kanbanslide"
								src="imgs/simples/projects-page/kanban/animation-layer_kanban-2@2x.png"
								alt="Layer kanban animation 3"
							/>
						</picture>
					</div>
				</div>
			</section>

			{/* Testimonial with animations */}
			<section
				id="project-first-module"
				className="c-jumble c-jumble-background--hot-pink top-margin-mobile"
			>
				<div className="container">
					<div className="c-jumble__container col-md-10 no-padding">
						<div className="c-jumble__content c-valign--middle extra-padding">
							<div className="row">
								<div className="col-md-6 order-md-2">
									<div className="canvas-image-container ">
										<div className="project-first-module-animation ">
											<picture>
												<source
													type="image/webp"
													srcSet="imgs/simples/projects-page/first-module/animation-layer_workflows1@2x.webp"
													className="fmfapp"
													alt="Animation workflow 1"
												/>
												<source
													type="image/png"
													srcSet="imgs/simples/projects-page/first-module/animation-layer_workflows1@2x.png"
													className="fmfapp"
													alt="Animation workflow 1"
												/>
												<img
													className="fmfapp"
													src="imgs/simples/projects-page/first-module/animation-layer_workflows1@2x.png"
													alt="Animation workflow 1"
												/>
											</picture>
											<picture>
												<source
													type="image/webp"
													srcSet="imgs/simples/projects-page/first-module/animation-layer_workflows2@2x.webp"
													className="fmsapptab fmsapptabgray"
													alt="Animation workflow 2"
												/>
												<source
													type="image/png"
													srcSet="imgs/simples/projects-page/first-module/animation-layer_workflows2@2x.png"
													className="fmsapptab fmsapptabgray"
													alt="Animation workflow 2"
												/>
												<img
													className="fmsapptab fmsapptabgray"
													src="imgs/simples/projects-page/first-module/animation-layer_workflows2@2x.png"
													alt="Animation workflow 2"
												/>
											</picture>
											<picture>
												<source
													type="image/webp"
													srcSet="imgs/simples/projects-page/first-module/animation-layer_workflows3@2x.webp"
													className="firstmoduleAnimation fmdetalcard"
													alt="Animation workflow 3"
												/>
												<source
													type="image/png"
													srcSet="imgs/simples/projects-page/first-module/animation-layer_workflows3@2x.png"
													className="firstmoduleAnimation fmdetalcard"
													alt="Animation workflow 3"
												/>
												<img
													className="firstmoduleAnimation fmdetalcard"
													src="imgs/simples/projects-page/first-module/animation-layer_workflows3@2x.png"
													alt="Animation workflow 3"
												/>
											</picture>
										</div>
									</div>
								</div>
								<div className="col-md-6 order-md-1">
									<pre className="c-eyebrow c-eyebrow--light">
										FULLY CUSTOMIZABLE
									</pre>
									<h2>Your CRM software workflows, your way</h2>
									<p>
										Flexible, Kanban-style project boards in your project
										management software and CRM system - fully customizable and
										deeply integrated with Google Workspace - tie back directly
										to your deal pipeline for a customer relationship.
									</p>
									<Link href="https://www.copper.com/signup?_ga=2.203906000.1318646422.1594028674-1197161615.1589920381&_gac=1.248633752.1593720638.null">
										<a className="t-link h-white sendUTMsToAmplitude">
											Try Free Today
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Two cols */}
			<section id="" className="c-cols c-cols-landing extra-top-margin--medium">
				<div className="container c-animation-container">
					<h2
						className="extra-bottom-margin--x-small"
						style={{ textAlign: "center" }}
					></h2>
					<div className="row column-reverse">
						<div className="col-md-6 d-flex align-items-center order-1 ">
							<div id="project-second-module" className="relative">
								<picture>
									<source
										type="image/webp"
										srcSet="imgs/simples/projects-page/second-module/animation-layer_revenue1@2x.webp"
										className="smblankbase"
										style={{ visibility: "hidden" }}
										alt="revenue animation layer 1"
									/>
									<source
										type="image/png"
										srcSet="imgs/simples/projects-page/second-module/animation-layer_revenue1@2x.png"
										className="smblankbase"
										style={{ visibility: "hidden" }}
										alt="revenue animation layer 1"
									/>
									<img
										className="smblankbase"
										style={{ visibility: "hidden" }}
										src="imgs/simples/projects-page/second-module/animation-layer_revenue1@2x.png"
										alt="revenue animation layer 1"
									/>
								</picture>
								<picture>
									<source
										type="image/webp"
										srcSet="imgs/simples/projects-page/second-module/animation-layer_revenue1@2x.webp"
										className="smbase"
										alt="revenue animation layer 2"
									/>
									<source
										type="image/png"
										srcSet="imgs/simples/projects-page/second-module/animation-layer_revenue1@2x.png"
										className="smbase"
										alt="revenue animation layer 2"
									/>
									<img
										className="smbase"
										src="imgs/simples/projects-page/second-module/animation-layer_revenue1@2x.png"
										alt="revenue animation layer 2"
									/>
								</picture>
								<picture>
									<source
										type="image/webp"
										srcSet="imgs/simples/projects-page/second-module/animation-layer_revenue2@2x.webp"
										className="secondmoduleAnimation smgraytab"
										alt="revenue animation layer 3"
									/>
									<source
										type="image/png"
										srcSet="imgs/simples/projects-page/second-module/animation-layer_revenue2@2x.png"
										className="secondmoduleAnimation smgraytab"
										alt="revenue animation layer 3"
									/>
									<img
										className="secondmoduleAnimation smgraytab"
										src="imgs/simples/projects-page/second-module/animation-layer_revenue2@2x.png"
										alt="revenue animation layer 3"
									/>
								</picture>
								<picture>
									<source
										type="image/webp"
										srcSet="imgs/simples/projects-page/second-module/animation-layer_revenue3@2x.webp"
										className="secondmoduleAnimation smdetailcard"
										alt="revenue animation layer 4"
									/>
									<source
										type="image/png"
										srcSet="imgs/simples/projects-page/second-module/animation-layer_revenue3@2x.png"
										className="secondmoduleAnimation smdetailcard"
										alt="revenue animation layer 4"
									/>
									<img
										className="secondmoduleAnimation smdetailcard"
										src="imgs/simples/projects-page/second-module/animation-layer_revenue3@2x.png"
										alt="revenue animation layer 4"
									/>
								</picture>
							</div>
						</div>
						<div className="col-md-5 offset-md-1 c-valign--middle order-2 pb-5 pb-md-0">
							<div className="col_copy">
								<pre className="c-eyebrow c-eyebrow--dark">REAL INSIGHTS</pre>
								<h1>Revenue visibility</h1>
								<p>
									The management work you do for your customers using the CRM
									project management system and software, involving marketing
									automation, is directly tied to your business' revenue and
									overall health metrics.
								</p>
								<div className="c-hero__buttons">
									<div className="flex-column">
										<Link href="https://www.copper.com/signup?_ga=2.203906000.1318646422.1594028674-1197161615.1589920381&_gac=1.248633752.1593720638.null">
											<a target="" className="t-link sendUTMsToAmplitude">
												Try Free Today
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				id=""
				className="c-cols c-cols-landing extra-bottom-margin--medium"
				style={{ overflow: "visible" }}
			>
				<div className="container c-animation-container">
					<h2
						className="extra-bottom-margin--x-small"
						style={{ textAlign: "center" }}
					></h2>
					<div className="row">
						<div className="col-md-6 d-flex align-items-center offset-md-1 order-2 ">
							<div id="project-third-module" className="relative">
								<picture>
									<source
										type="image/webp"
										srcSet="/imgs/simples/projects-page/third-module/animation-layer_gsuite1@2x.webp"
										className="tmbase"
										style={{ visibility: "hidden" }}
										alt="Google Workspace animation layer 1"
									/>
									<source
										type="image/png"
										srcSet="/imgs/simples/projects-page/third-module/animation-layer_gsuite1@2x.png"
										className="tmbase"
										style={{ visibility: "hidden" }}
										alt="Google Workspace animation layer 1"
									/>
									<img
										className="tmbase"
										style={{ visibility: "hidden" }}
										src="/imgs/simples/projects-page/third-module/animation-layer_gsuite1@2x.png"
										alt="Google Workspace animation layer 1"
									/>
								</picture>
								<picture>
									<source
										type="image/webp"
										srcSet="/imgs/simples/projects-page/third-module/animation-layer_gsuite1@2x.webp"
										className="tmbapp"
										alt="Google Workspace animation layer 2"
									/>
									<source
										type="image/png"
										srcSet="/imgs/simples/projects-page/third-module/animation-layer_gsuite1@2x.png"
										className="tmbapp"
										alt="Google Workspace animation layer 2"
									/>
									<img
										className="tmbapp"
										src="/imgs/simples/projects-page/third-module/animation-layer_gsuite1@2x.png"
										alt="Google Workspace animation layer 2"
									/>
								</picture>
								<picture>
									<source
										type="image/webp"
										srcSet="https://copper.objects.frb.io/imgs/simples/projects-page/third-module/animation-layer_gsuite2@2x.webp"
										className="thirdmoduleAnimation tmicons tmgmail"
										alt="Google Workspace animation layer 3"
									/>
									<source
										type="image/png"
										srcSet="https://copper.objects.frb.io/imgs/simples/projects-page/third-module/animation-layer_gsuite2@2x.png"
										className="thirdmoduleAnimation tmicons tmgmail"
										alt="Google Workspace animation layer 3"
									/>
									<img
										className="thirdmoduleAnimation tmicons tmgmail"
										src="https://copper.objects.frb.io/imgs/simples/projects-page/third-module/animation-layer_gsuite2@2x.png"
										alt="Google Workspace animation layer 3"
									/>
								</picture>
								<picture>
									<source
										type="image/webp"
										srcSet="https://copper.objects.frb.io/imgs/simples/projects-page/third-module/animation-layer_gsuite3@2x.webp"
										className="thirdmoduleAnimation tmicons tmsheets"
										alt="Google Workspace animation layer 4"
									/>
									<source
										type="image/png"
										srcSet="https://copper.objects.frb.io/imgs/simples/projects-page/third-module/animation-layer_gsuite3@2x.png"
										className="thirdmoduleAnimation tmicons tmsheets"
										alt="Google Workspace animation layer 4"
									/>
									<img
										className="thirdmoduleAnimation tmicons tmsheets"
										src="https://copper.objects.frb.io/imgs/simples/projects-page/third-module/animation-layer_gsuite3@2x.png"
										alt="Google Workspace animation layer 4"
									/>
								</picture>
								<picture>
									<source
										type="image/webp"
										srcSet="https://copper.objects.frb.io/imgs/simples/projects-page/third-module/animation-layer_gsuite4@2x.webp"
										className="thirdmoduleAnimation tmicons tmdocs"
										alt="Google Workspace animation layer 5"
									/>
									<source
										type="image/png"
										srcSet="https://copper.objects.frb.io/imgs/simples/projects-page/third-module/animation-layer_gsuite4@2x.png"
										className="thirdmoduleAnimation tmicons tmdocs"
										alt="Google Workspace animation layer 5"
									/>
									<img
										className="thirdmoduleAnimation tmicons tmdocs"
										src="https://copper.objects.frb.io/imgs/simples/projects-page/third-module/animation-layer_gsuite4@2x.png"
										alt="Google Workspace animation layer 5"
									/>
								</picture>
								<picture>
									<source
										type="image/webp"
										srcSet="https://copper.objects.frb.io/imgs/simples/projects-page/third-module/animation-layer_gsuite5@2x.webp"
										className="thirdmoduleAnimation tmicons tmslides"
										alt="Google Workspace animation layer 6"
									/>
									<source
										type="image/png"
										srcSet="https://copper.objects.frb.io/imgs/simples/projects-page/third-module/animation-layer_gsuite5@2x.png"
										className="thirdmoduleAnimation tmicons tmslides"
										alt="Google Workspace animation layer 6"
									/>
									<img
										className="thirdmoduleAnimation tmicons tmslides"
										src="https://copper.objects.frb.io/imgs/simples/projects-page/third-module/animation-layer_gsuite5@2x.png"
										alt="Google Workspace animation layer 6"
									/>
								</picture>
							</div>
						</div>
						<div className="col-md-5 c-valign--middle order-1 ">
							<pre className="c-eyebrow c-eyebrow--dark">FAMILIARITY</pre>
							<h1>Google Workspace at the core of Copper’s CRM tool</h1>
							<p>
								Attach files with project management software, see tasks from
								within Gmail, and use @mentions to collaborate even better in
								ways that are completely aligned with your business processes.
								Complete each task, which will help with workflow automation.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Case Study */}
			<section className="c-case-study c-case-study--align-left home-quote extra-top-margin--medium extra-bottom-margin--medium ">
				<div className="container colorblock--eggplant">
					<div className="c-case-study__container col-md-11 no-padding background--eggplant ">
						<div className="c-case-study__content c-valign--middle">
							<div
								className="row row-eq-height"
								style={{ alignItems: "center" }}
							>
								<div className="col-md-6" style={{ alignItems: "flex-start" }}>
									<div className="c-image enforce-normal-height square--down--left">
										<pre className="c-eyebrow c-eyebrow--light">
											SUCCESS STORIES
										</pre>
										<Link href="https://www.alliswellstudios.com/">
											<a target="_blank">
												<img
													src="//d2ydtwisqcxv72.cloudfront.net/landing/section-image_testimonial-avatar@2x.png"
													alt="James Keblas"
													style={{ width: "359px !important", height: "393px" }}
												/>
											</a>
										</Link>
									</div>
								</div>

								<div className="col-md-6">
									<div className="c-panel__blockquote c-valign--middle enforced-font-color">
										<blockquote>
											Used Asana before for Task Management. All in on Copper
											being the one tool for projects and CRM.
										</blockquote>
										<cite>
											JAMES KEBLAS
											<span className="c-panel__blockquote--position">
												Head of Business Development,{" "}
												<Link href="https://www.alliswellstudios.com/">
													<a className="no-style-link" target="_blank">
														All is Well
													</a>
												</Link>
											</span>
										</cite>
										<div className="c-panel__blockquote--logo"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				id=""
				className="c-quote-callout text-md-center backgrounded-callout c-valign--middle"
				style={{
					backgroundImage:
						"url('//d2ydtwisqcxv72.cloudfront.net/landing/section-image_cta@2x.png')",
				}}
			>
				<div className="container">
					<div className="row">
						<div className="c-quote-callout__copy col-lg-10 offset-lg-1">
							<h2>
								Close the deal and deliver the work, with Copper’s project
								management tool
							</h2>
							<p></p>
							<h1></h1>
							<p>
								Your ability to nurture key business relationships, and team
								collaboration, just got much better, now that your favorite CRM
								software includes Project Management. Continue to grow every
								customer relationship, with Copper’s tool for project
								management.
							</p>
							<p></p>
							<div className="c-hero__buttons">
								<Link href="https://www.copper.com/signup">
									<a
										className="c-button sendUTMsToAmplitude c-button--hot-pink"
										target=""
									>
										Try Free Today
									</a>
								</Link>
							</div>
						</div>
						<div className="img-companier">
							<picture>
								<source
									type="image/webp"
									srcSet="imgs/simples/projects-page/last-section/section-image_cta-left@2x.webp"
									alt="Logo"
								/>
								<source
									type="image/png"
									srcSet="imgs/simples/projects-page/last-section//section-image_cta-left@2x.png"
									alt="Logo"
								/>
								<img
									src="imgs/simples/projects-page/last-section/section-image_cta-left@2x.png"
									alt="Logo"
								/>
							</picture>

							<picture>
								<source
									type="image/webp"
									srcSet="imgs/simples/projects-page/last-section/section-image_cta-right@2x.webp"
									alt="Logo"
								/>
								<source
									type="image/png"
									srcSet="imgs/simples/projects-page/last-section/section-image_cta-right@2x.png"
									alt="Logo"
								/>
								<img
									src="imgs/simples/projects-page/last-section/section-image_cta-right@2x.png"
									alt="Logo"
								/>
							</picture>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
};

export default PmCRM;

export async function getStaticProps(context) {
	const res = await getEntryBySectionHandle(
		"seoPage",
		"project-management-crm"
	);
	return {
		props: {
			entry: res.entry || {},
			globals: res.globalSets || [],
		}, // will be passed to the page component as props
		revalidate: 120, // in seconds
	};
}
