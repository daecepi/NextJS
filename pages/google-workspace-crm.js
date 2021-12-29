import Image from "next/image";
import Link from "next/link";

import Script from "next/script";
import LogoComponent from "../components/Blocks/LogosComponent";
import DefaultPageBase from "../components/PageBase/DefaultPageBase";
import Footer from "../components/Footer/Footer";
import { getEntryBySectionHandle } from "../lib/api";

export default function GoogleWorkspaceCrm({ entry, globals }) {
	const cardsData = [
		{
			imageWebp:
				"https://copper.objects.frb.io/imgs/product/google-workspace-crm/G2-Crowd-logo.webp",
			imageNormal:
				"https://copper.objects.frb.io/imgs/product/google-workspace-crm/G2-Crowd-logo.png",
			altText: "Review from Atira R",
			quote:
				'“Gmail integration is my favorite feature of Copper. It makes it easy to add new leads. people, etc... I also love the task tool and how it integrates with Gmail and Calendar. Having all of my points of contact for each business as well as each opportunity in one place is also a great feature."',
			author: "Atira R",
		},
		{
			imageWebp:
				"https://copper.objects.frb.io/imgs/product/google-workspace-crm/G2-Crowd-logo.webp",
			imageNormal:
				"https://copper.objects.frb.io/imgs/product/google-workspace-crm/G2-Crowd-logo.png",
			altText: "Review from Jeff L",
			quote:
				"“We have been Google Apps/G Suite/Workspace users for a long time. This CRM piggy backs right on top of that tool in a seamless way. It adds to our daily routine workflow for communication and almost makes CRM automatic.”",
			author: "Jeff L",
		},
		{
			imageWebp:
				"https://copper.objects.frb.io/imgs/product/google-workspace-crm/G2-Crowd-logo.webp",
			imageNormal:
				"https://copper.objects.frb.io/imgs/product/google-workspace-crm/G2-Crowd-logo.png",
			altText: "Review from Andrew W.",
			quote:
				"“Great CRM for Gmail users. Copper's unique angle is that it is tightly integrated with Gmail - so as you're emailing contacts, you can easily add those people and opportunities into your CRM. This makes it very easy to use which saves a lot of time and makes CRM updates less of a chore.”",
			author: "Andrew W.",
		},
	];
	const printReviews = (id, classes) => {
		cardsData.map((slideCard, index) => {
			return (
				<div id={id && `${id}-${index}`} className={classes}>
					<div className="c-card__entry c-card--entry-1 ">
						<picture>
							<source srcSet={slideCard.imageWebp} />
							<source srcSet={slideCard.imageNormal} />
							<img
								src={slideCard.imageNormal}
								className="c-card--logo"
								alt="{{ slideCard.altText }}"
							/>
						</picture>
						<div className="c-card__entry__content">
							<p className="c-card--review p-sm">{slideCard.quote}</p>
							<p className="c-card--author p-sm">{slideCard.author}</p>
						</div>
					</div>
				</div>
			);
		});
	};
	return (
		<DefaultPageBase entry={entry} globals={globals}>
			<div className="google-workspace-crm">
				<main className="main">
					<section className="c-hero--signup-form split-background--light-blue">
						<div className="container">
							<div className="row">
								<div className="col-md-6 c-valign--middle no-mobile-margin">
									<h1 className="reduced-mobile-spacing more-space">
										CRM for Google Workspace
									</h1>
									<p className="form-subtitle">
										Build better relationships and win more customers with
										Copper + Google
									</p>
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
														src="/imgs/google-g-0cf576a5dab9315daac7ffe29d29ed585e0ff9850e59408d0f25f38dc1da037b.svg"
														alt="Google g"
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
											&{" "}
											<Link href="/terms">
												<a>terms of service.</a>
											</Link>
										</p>
									</div>
								</div>
								<div className="c-image floating">
									<picture>
										<source srcSet="https://copper.objects.frb.io/imgs/product/google-workspace-crm/hero-google-workspace-CRM-updated.webp" />
										<source srcSet="https://copper.objects.frb.io/imgs/product/google-workspace-crm/hero-google-workspace-CRM-updated.jpg" />
										<img
											className="home-floating-image large-image"
											src="https://copper.objects.frb.io/imgs/product/google-workspace-crm/hero-google-workspace-CRM-updated.jpg"
											alt="Google Workspace hero image"
										/>
									</picture>
								</div>
							</div>
						</div>
					</section>

					<style jsx>
						{`
							.c-product-focus .c-resource-media .video-content {
								width: 100%;
								max-width: 802.25px;
								-webkit-box-shadow: 0px 16px 18px 0px rgb(0 0 0 / 24%);
								box-shadow: 0px 16px 18px 0px rgb(0 0 0 / 24%);
								margin-bottom: 52px;
							}
						`}
					</style>
					<section
						className="c-product-focus c-single-column"
						style={{ paddingTop: "70px", paddingBottom: "94px" }}
					>
						<div className="container">
							<div className="row">
								<div className="col-md-12 c-align--center">
									<h2 className="col-md-10">
										You live in Google Workspace.
										<br />
										So should your CRM.
									</h2>
									<div className="c-resource-media no-top-padding col-md-10">
										<figure>
											<video
												style={{ width: "100%" }}
												playsInline
												autoPlay
												muted
												loop
												className="video-content"
											>
												<source
													src="https://copper.objects.frb.io/videos/product/google-workspace-crm/google-crm-integration-gmail-3.mp4"
													type="video/mp4"
												/>
											</video>
										</figure>
									</div>
									<p className="col-md-8 md-offset-2 no-top-margin">
										Copper’s CRM integration with Google works seamlessly with
										your Gmail, Calendar and Drive, you never have to switch
										tabs to add leads, track email conversations, and manage
										tasks in your marketing and sales process.
									</p>
									<div className="c-single-column__buttons">
										<Link href="/signup">
											<a className="c-button sendUTMsToAmplitude">Try Free</a>
										</Link>
										<Link href="/demos">
											<a className="c-button c-button--outline">Request Demo</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="two-logos-module purple">
						<div className="container">
							<div className="row">
								<div className="col-md-6">
									<h1>Copper + Google integration</h1>
									<p>
										A Google-recommended CRM, Chrome Enterprise Partner,
										Google-backed company and a featured Workspace solution at{" "}
										<Link href="https://copper-crm.wistia.com/medias/4wvijtqq4r?wvideo=4wvijtqq4r&mkt_tok=NzYzLURWTC0yO[…]khvz0bw2n8uZO1FK25UAN2cmAydUMNG6aNZRM50469xJhcSWB6-Fz6dG8Q">
											<a target="_blank">Google Next '21</a>
										</Link>
										, Copper is the CRM of choice for Workspace businesses.
									</p>
								</div>
								<div className="col-md-3 logo-container">
									<div className="c-image">
										<picture>
											<source srcSet="https://copper.objects.frb.io/imgs/product/google-workspace-crm/Google-Partner-Logo-updated.webp" />
											<source srcSet="https://copper.objects.frb.io/imgs/product/google-workspace-crm/Google-Partner-Logo-updated.png" />
											<img
												className="home-floating-image large-image"
												src="https://copper.objects.frb.io/imgs/product/google-workspace-crm/Google-Partner-Logo-updated.png"
												alt="Google Partner image"
											/>
										</picture>
									</div>
								</div>
								<div className="col-md-3 logo-container">
									<div className="c-image">
										<picture>
											<source srcSet="https://copper.objects.frb.io/imgs/product/google-workspace-crm/Chrome-enterprise-recommended-logo-updated-2.webp" />
											<source srcSet="https://copper.objects.frb.io/imgs/product/google-workspace-crm/Chrome-enterprise-recommended-logo-updated-2.png" />
											<img
												className="home-floating-image large-image"
												src="https://copper.objects.frb.io/imgs/product/google-workspace-crm/Chrome-enterprise-recommended-logo-updated-2.png"
												alt="Google enterpricerecommended recognition logo"
											/>
										</picture>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section
						className="c-product-focus c-single-column"
						style={{ paddingBottom: "100px", paddingTop: "89px" }}
					>
						<div className="container">
							<div className="row">
								<div className="col-md-12 c-align--center">
									<h2 className="col-md-10" style={{ marginBottom: "52px" }}>
										Arrive effortlessly prepared to every prospect and client
										meeting
									</h2>
									<div className="c-resource-media no-top-padding col-md-10">
										<figure>
											<video
												style={{ width: "100%" }}
												playsInline
												autoPlay
												muted
												loop
												className="video-content"
											>
												<source
													src="https://copper.objects.frb.io/videos/product/google-workspace-crm/google-crm-integration-calendar-updated-2.mp4"
													type="video/mp4"
												/>
											</video>
										</figure>
									</div>
									<p className="col-md-8 md-offset-2 no-top-margin">
										Look up event details, participants and materials directly
										from Google Calendar without breaking your workflow.
									</p>
								</div>
							</div>
						</div>
					</section>

					<section className="c-cols c-cols-alternate no-top-padding">
						<div className="container">
							<div className="row extra-padding--bottom">
								<div className="col-md-6 order-2">
									<div className="c-image google-drive-integration c-image--drop-right">
										<picture>
											<source srcSet="https://copper.objects.frb.io/imgs/product/google-workspace-crm/gmail-copper-integration-updated.webp" />
											<source srcSet="https://copper.objects.frb.io/imgs/product/google-workspace-crm/gmail-copper-integration-updated.png" />
											<img
												className="drop-right__img h-remove-shadow"
												src="https://copper.objects.frb.io/imgs/product/google-workspace-crm/gmail-copper-integration-updated.png"
												alt="Google Drive Integration"
											/>
										</picture>
									</div>
								</div>
								<div className="col-md-5 c-valign--middle order-1">
									<h2>
										Work uninterrupted and let Copper do the heavy lifting
									</h2>
									<p>
										Simplify contact management by adding new contacts directly
										from Gmail and Calendar.{" "}
									</p>
								</div>
							</div>
						</div>
					</section>

					<section className="c-cols c-cols-alternate no-top-padding disappear-mobile">
						<div className="container">
							<div className="row extra-padding--bottom">
								<div className="col-md-6  order-1">
									<div className="c-image google-drive-integration c-image--drop-left">
										<picture>
											<source srcSet="https://copper.objects.frb.io/imgs/product/google-workspace-crm/Group4508.webp" />
											<source srcSet="https://copper.objects.frb.io/imgs/product/google-workspace-crm/Group4508.png" />
											<img
												className="drop-left__img h-remove-shadow"
												src="https://copper.objects.frb.io/imgs/product/google-workspace-crm/Group4508.png"
												alt="Gmail integration with Copper image"
											/>
										</picture>
									</div>
								</div>
								<div className="col-md-6 c-valign--middle order-2">
									<h2 style={{ maxWidth: "469px", marginLeft: "35px" }}>
										View the full history of a relationship, instantly{" "}
									</h2>
									<p style={{ maxWidth: "430px", marginLeft: "35px" }}>
										Hover over any Copper contact in Gmail and Calendar for
										rich, contextualized communication and activity details
									</p>
								</div>
							</div>
						</div>
					</section>
					<section className="c-cols c-cols-alternate no-top-padding appear-mobile">
						<div className="container">
							<div className="row extra-padding--bottom">
								<div className="col-md-6 order-2">
									<div className="c-image google-drive-integration c-image--drop-right">
										<picture>
											<source srcSet="https://copper.objects.frb.io/imgs/product/google-workspace-crm/Group4508.webp" />
											<source srcSet="https://copper.objects.frb.io/imgs/product/google-workspace-crm/Group4508.png" />
											<img
												className="drop-right__img h-remove-shadow"
												src="https://copper.objects.frb.io/imgs/product/google-workspace-crm/Group4508.png"
												alt="Copper interaction with Google Workspace tools image"
											/>
										</picture>
									</div>
								</div>
								<div className="col-md-5 c-valign--middle order-1">
									<h2>View the full history of a relationship, instantly </h2>
									<p>
										Hover over any Copper contact in Gmail and Calendar for
										rich, contextualized communication and activity details
									</p>
								</div>
							</div>
						</div>
					</section>

					<section className="c-cols c-cols-alternate last-c-col no-top-padding">
						<div className="container">
							<div className="row extra-padding--bottom">
								<div className="offset-md-1 col-md-6 order-2">
									<div
										id="drive-two-col-image"
										className="c-image google-drive-integration c-image--drop-right"
									>
										<picture>
											<source srcSet="https://copper.objects.frb.io/imgs/product/google-workspace-crm/Group4513.webp" />
											<source srcSet="https://copper.objects.frb.io/imgs/product/google-workspace-crm/Group4513.png" />
											<img
												className="drop-right__img h-remove-shadow"
												src="https://copper.objects.frb.io/imgs/product/google-workspace-crm/Group4513.png"
												alt="Google Drive Image"
											/>
										</picture>
									</div>
								</div>
								<div className="col-md-5 c-valign--middle order-1">
									<h2>Access shared documents, unified around your contacts</h2>
									<p>
										Attach Google files to Copper records for immediate context
										around opportunities and accounts.
									</p>
								</div>
							</div>
						</div>
					</section>
					<section className="c-cols c-cols-alternate no-top-padding disappear-mobile">
						<div className="container">
							<div className="row extra-padding--bottom">
								<div className="col-md-6  order-1">
									<div className="c-video google-drive-integration c-video--drop-left">
										<video
											className="drop-left__vid"
											playsInline
											autoPlay
											muted
											loop
										>
											<source
												src="https://copper.objects.frb.io/videos/product/google-workspace-crm/copper-gmail-spotlight-set-reminder.mp4"
												type="video/mp4"
											/>
										</video>
									</div>
								</div>
								<div className="col-md-6 c-valign--middle order-2">
									<h2 style={{ maxWidth: "469px", marginLeft: "35px" }}>
										Get more organized and track your priorities
									</h2>
									<p style={{ maxWidth: "430px", marginLeft: "35px" }}>
										Surface reminders and tasks alongside your inbox or in your
										calendar; you decide where you want to work.
									</p>
								</div>
							</div>
						</div>
					</section>

					<section
						id=""
						className="c-three-column "
						style={{ paddingTop: "0px", paddingBottom: "74px" }}
					>
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<h2 className="title">
										Ranked first by customers for Google Workspace integration
									</h2>
								</div>
							</div>
							<div className="row mobile-slider-testimonial">
								<div className="display-mobile">
									<div
										id="slider-reviews-holder"
										className="row slider-reviews-holder"
									>
										{printReviews("review-slider-element", "review-slide")}
									</div>
									<div className="controls-box"></div>
									<Script
										src="/js/lazyload.min.js"
										strategy={"beforeInteractive"}
										onLoad={() => {
											// LazyLoad.css(['https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css'])
											LazyLoad.js(
												[
													"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js",
													"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js",
												],
												function () {
													// Slider configuration variables
													var sliderConfigurations = {
														horizontal: {
															dots: false,
															appendArrows: ".controls-box",
															prevArrow:
																'<a id="arrowBack" target="" className="button-slide-change t-link inverted-arrow">Prev</a>',
															nextArrow:
																'<a id="arrowNext" target=""  className="button-slide-change t-link">Next</a>',
															responsive: [
																{
																	breakpoint: 1024,
																	settings: {
																		infinite: true,
																		slidesToShow: 1,
																		slidesToScroll: 1,
																	},
																},
																{
																	breakpoint: 768,
																	settings: {
																		infinite: true,
																		slidesToShow: 1,
																		slidesToScroll: 1,
																	},
																},
															],
														},
													};
													// nextArrow: <div className=" c-align--center arrow-control arrow-control-next"><div className="arrow-box"><img className="" alt="Arrow right image" src="imgs/slider/arrow_right.svg" /></div></div>
													// prevArrow: <div className=" c-align--center arrow-control arrow-control-prev"><div className="arrow-box"><img className="" alt="Arrow left image" src="imgs/slider/arrow_left.svg" /></div></div>

													$(".slider-reviews-holder").slick(
														sliderConfigurations["horizontal"]
													);

													// Ensures some of the styling coming from slick
													$(".review-slider-element").css("width", "350px");
													$(".review-slider-element").css(
														"padding-left",
														"15px"
													);
													$(".review-slider-element").css(
														"padding-right",
														"15px"
													);

													// Selects the first element slide to be shown
													jQuery("#review-slide-0").addClass("active");

													// Makes sure on resizing of the window Slick continues working
												}
											);
										}}
									></Script>
								</div>
								{printReviews("col-md-4 display-medium-up")}
							</div>
						</div>
					</section>

					<LogoComponent title="Over 25,000+ companies trust Copper.">
						<li id="temp-logo-module--images" className="logo-section--images ">
							<picture>
								<source
									type="image/webp"
									srcSet="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_IDEO@2x.webp"
									alt="Ideo graphic"
								/>
								<source
									type="image/png"
									srcSet="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_IDEO@2x.png"
									alt="Ideo graphic"
								/>
								<Image
									style={{ width: "calc(100% / 1.3)!important;" }}
									src="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_IDEO@2x.png"
									alt="Ideo graphic"
									width={80}
									height={19}
								/>
							</picture>
						</li>
						<li id="temp-logo-module--images" className="logo-section--images ">
							<picture>
								<source
									type="image/webp"
									srcSet="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_masterclass@2x.webp"
									alt="Masterclass graphic"
								/>
								<source
									type="image/png"
									srcSet="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_masterclass@2x.png"
									alt="Masterclass graphic"
								/>
								<Image
									style={{ width: "calc(100% / 1.3)!important;" }}
									src="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_masterclass@2x.png"
									alt="Masterclass graphic"
									width={80}
									height={11}
								/>
							</picture>
						</li>
						<li id="temp-logo-module--images" className="logo-section--images ">
							<picture>
								<source
									type="image/webp"
									srcSet="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_swell@2x.webp"
									alt="Swell graphic"
								/>
								<source
									type="image/png"
									srcSet="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_swell@2x.png"
									alt="Swell graphic"
								/>
								<Image
									style={{ width: "calc(100% / 1.3)!important;" }}
									src="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_swell@2x.png"
									alt="Swell graphic"
									width={80}
									height={26}
								/>
							</picture>
						</li>
						<li id="temp-logo-module--images" className="logo-section--images ">
							<picture>
								<source
									type="image/webp"
									srcSet="https://copper.objects.frb.io/imgs/homepage//logos-module/Logo_Mailchimp.webp"
									alt="Bubbles graphic"
								/>
								<source
									type="image/png"
									srcSet="https://copper.objects.frb.io/imgs/homepage//logos-module/Logo_Mailchimp.png"
									alt="Bubbles graphic"
								/>
								<Image
									style={{ width: "calc(100% / 1.3)!important;" }}
									src="https://copper.objects.frb.io/imgs/homepage//logos-module/Logo_Mailchimp.png"
									alt="Bubbles graphic"
									width={80}
									height={22}
								/>
							</picture>
						</li>
						<li id="temp-logo-module--images" className="logo-section--images ">
							<picture>
								<source
									type="image/webp"
									srcSet="https://copper.objects.frb.io/imgs/homepage/logos-module/Logo_Softbank.webp"
									alt="Bubbles graphic"
								/>
								<source
									type="image/png"
									srcSet="https://copper.objects.frb.io/imgs/homepage/logos-module/Logo_Softbank.png"
									alt="Bubbles graphic"
								/>
								<Image
									style={{ width: "calc(100% / 1.3)!important;" }}
									src="https://copper.objects.frb.io/imgs/homepage/logos-module/Logo_Softbank.png"
									alt="Bubbles graphic"
									width={80}
									height={12}
								/>
							</picture>
						</li>
						<li id="temp-logo-module--images" className="logo-section--images ">
							<picture>
								<source
									type="image/webp"
									srcSet="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_zipi@2x.webp"
									alt="Swell graphic"
								/>
								<source
									type="image/png"
									srcSet="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_zipi@2x.png"
									alt="Swell graphic"
								/>
								<Image
									style={{ width: "calc(100% / 1.3)!important;" }}
									src="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_zipi@2x.png"
									alt="Swell graphic"
									width={72}
									height={51}
								/>
							</picture>
						</li>
						<li id="temp-logo-module--images" className="logo-section--images ">
							<picture>
								<source
									type="image/webp"
									srcSet="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_houwzer2x.webp"
									alt="Bubbles graphic"
								/>
								<source
									type="image/png"
									srcSet="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_houwzer2x.png"
									alt="Bubbles graphic"
								/>
								<Image
									style={{ width: "calc(100% / 1.3)!important;" }}
									src="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_houwzer2x.png"
									alt="Bubbles graphic"
									width={80}
									height={23}
								/>
							</picture>
						</li>
					</LogoComponent>

					<section
						className="c-list"
						style={{ paddingBottom: "80px", paddingTop: "110px" }}
					>
						<div className="container">
							<div className="c-list__header reduced-spacing c-align--center">
								<h2 className="t-center col-md-10">
									Operate just like you’re used to in all of your Workspace apps
								</h2>
							</div>
							<div className="row">
								<div className="col-md-4">
									<div className="row d-flex">
										<div className="col-2 col-sm-1 col-md-2 title-alignment-icon">
											<picture>
												<img
													src="https://copper.objects.frb.io/imgs/product/google-workspace-crm/Google-Workspace-logos/gmail-logo.png"
													alt="Google Calendar"
												/>
											</picture>
										</div>
										<div className="col-10">
											<h4>Gmail</h4>
											<p className="p-sm">
												Gmail activity is automatically synchronized to Copper
												through our native Gmail integration.
											</p>
										</div>
									</div>
								</div>

								<div className="col-md-4">
									<div className="row d-flex">
										<div className="col-2 col-sm-1 col-md-2 title-alignment-icon">
											<picture>
												<img
													src="https://copper.objects.frb.io/imgs/product/google-workspace-crm/Google-Workspace-logos/gmail-contacts-logo.png"
													alt="Gmail Contact"
												/>
											</picture>
										</div>
										<div className="col-10">
											<h4>Gmail Contacts</h4>
											<p className="p-sm">
												Add new leads and update old ones based on your email
												conversations and Copper suggestions.
											</p>
										</div>
									</div>
								</div>

								<div className="col-md-4">
									<div className="row d-flex">
										<div className="col-2 col-sm-1 col-md-2 title-alignment-icon">
											<picture>
												<img
													src="https://copper.objects.frb.io/imgs/product/google-workspace-crm/Google-Workspace-logos/calendar-logo.png"
													alt="Google Calendar"
												/>
											</picture>
										</div>
										<div className="col-10">
											<h4>Google Calendar</h4>
											<p className="p-sm">
												Get contextual, enriched information instantly about
												meeting attendees and add new contacts to Copper with
												one click.
											</p>
										</div>
									</div>
								</div>

								<div className="col-md-4">
									<div className="row d-flex">
										<div className="col-2 col-sm-1 col-md-2 title-alignment-icon">
											<picture>
												<img
													src="https://copper.objects.frb.io/imgs/product/google-workspace-crm/Google-Workspace-logos/drive-logo.png"
													alt="Google Calendar"
												/>
											</picture>
										</div>
										<div className="col-10">
											<h4>Google Drive</h4>
											<p className="p-sm">
												Easily attach and access any Google Drive file related
												to your accounts and deals.
											</p>
										</div>
									</div>
								</div>

								<div className="col-md-4">
									<div className="row d-flex">
										<div className="col-2 col-sm-1 col-md-2 title-alignment-icon">
											<picture>
												<img
													src="https://copper.objects.frb.io/imgs/product/google-workspace-crm/Google-Workspace-logos/sheets-logo.png"
													alt="Google Sheets"
												/>
											</picture>
										</div>
										<div className="col-10">
											<h4>Google Sheets</h4>
											<p className="p-sm">
												Export any data from Copper directly to Google Sheets
												with Copper’s Custom Report Builder.
											</p>
										</div>
									</div>
								</div>

								<div className="col-md-4">
									<div className="row d-flex">
										<div className="col-2 col-sm-1 col-md-2 title-alignment-icon">
											<picture>
												<img
													src="https://copper.objects.frb.io/imgs/product/google-workspace-crm/Google-Workspace-logos/forms-logo.png"
													alt="Google Forms"
												/>
											</picture>
										</div>
										<div className="col-10">
											<h4>Google Forms</h4>
											<p className="p-sm">
												Move data from Google forms into Copper via our API or
												Zapier.
											</p>
										</div>
									</div>
								</div>

								<div className="col-md-4">
									<div className="row d-flex">
										<div className="col-2 col-sm-1 col-md-2 title-alignment-icon">
											<picture>
												<img
													src="https://copper.objects.frb.io/imgs/product/google-workspace-crm/Google-Workspace-logos/data-studio-logo.png"
													alt="Data Studio"
												/>
											</picture>
										</div>
										<div className="col-10">
											<h4>Data Studio</h4>
											<p className="p-sm">
												Connect Copper and Google’s Data Studio to analyze and
												visualize data from multiple sources.
											</p>
										</div>
									</div>
								</div>

								<div className="col-md-4">
									<div className="row d-flex">
										<div className="col-2 col-sm-1 col-md-2 title-alignment-icon">
											<picture>
												<img
													src="https://copper.objects.frb.io/imgs/product/google-workspace-crm/Google-Workspace-logos/data-enrichment-logo.png"
													alt="Data Enrichment"
												/>
											</picture>
										</div>
										<div className="col-10">
											<h4>Data Enrichment</h4>
											<p className="p-sm">
												Automatically update contact details using our Google
												integration including: phone numbers, social media
												handles and more.
											</p>
										</div>
									</div>
								</div>

								<div className="col-md-4">
									<div className="row d-flex">
										<div className="col-2 col-sm-1 col-md-2 title-alignment-icon">
											<picture>
												<source srcSet="https://copper.objects.frb.io/imgs/product/google-workspace-crm/Google-Workspace-logos/google-chat-logo.webp" />
												<source srcSet="https://copper.objects.frb.io/imgs/product/google-workspace-crm/Google-Workspace-logos/google-chat-logo.png" />
												<img
													src="https://copper.objects.frb.io/imgs/product/google-workspace-crm/Google-Workspace-logos/google-chat-logo.png"
													alt="Google Chat"
												/>
											</picture>
										</div>
										<div className="col-10">
											<h4>Google Chat</h4>
											<p className="p-sm">
												Push notifications about leads and opportunities from
												Copper into Google Chat.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

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
											height: "158%",
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
											maxWidth: "505px",
											height: "auto",
											position: "absolute",
											zIndex: "2",
											left: "50%",
											top: "49%",
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
							<div
								className="row column-reverse"
								style={{ position: "static" }}
							>
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
											<picture>
												<source
													type="image/webp"
													srcSet="https://copper.objects.frb.io/imgs/pricing/pricing_cta-image-mobile@2x-migration-2.webp"
													alt="Bubbles graphic"
												/>
												<source
													type="image/png"
													srcSet="https://copper.objects.frb.io/imgs/pricing/pricing_cta-image-mobile@2x-migration-2.png"
													alt="Bubbles graphic"
												/>
												<img
													className="drop-right__img h-remove-shadow"
													src="https://copper.objects.frb.io/imgs/pricing/pricing_cta-image-mobile@2x-migration-2.png"
													alt="Bubbles graphic"
												/>
											</picture>
										</div>
									</div>
								</div>
								<div className="col-md-6 c-valign--middle order-2">
									<h2>Try Copper for free</h2>
									<p>
										Instant activation, no credit card required. Give Copper a
										try today.
									</p>
									<div
										className="c-hero__buttons"
										style={{ flexDirection: "row" }}
									>
										<Link href="/signup">
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
				</main>
			</div>
			<Footer />
		</DefaultPageBase>
	);
}

export async function getStaticProps(context) {
	const res = await getEntryBySectionHandle("product", "google-workspace-crm");
	return {
		props: {
			entry: res?.entry || {},
			globals: res?.globalSets || [],
		}, // will be passed to the page component as props
		revalidate: 120, // in seconds
	};
}
