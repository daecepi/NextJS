import Script from "next/script";
import DefaultMultiStepForm from "./MSF/DefaultMultiStepForm";

const heroFormFlow = ({
	slug,
	id,
	heroBackground,
	copperIcon,
	heroTitle,
	copy,
	ctaText,
	tryFreeCtaText,
	buttonColorOption,
	image,
	nearNavigation,
	formId,
}) => {
	const signupPriter = () => {
		return (
			<div style={{ color: "#000000", marginTop: "60px" }}>
				<h1 className="more-space">Try Free title</h1>
				<p className="form-subtitle">Try Free content</p>
				<div className="form_container">
					<form
						className="signup_form"
						id="signup_form"
						action="https://app.prosperworks.com/users"
						accept-charset="UTF-8"
						method="post"
					>
						<input name="utf8" type="hidden" value="✓" />
						<input
							type="hidden"
							name="authenticity_token"
							value="lAAB/AYz9RxQR4RN74ZQgCErmru66/VW8Kzw3EeKrJrJC4AjlOsOIwvmktA9F0k1HVJQkSEber78cUBqUaYwhw=="
						/>
						<a
							className="google_light_btn"
							href="https://app.prosperworks.com/auth/auto_login?continue_with_google=true&amp;failure_url=https%3A%2F%2Fapp.prosperworks.com%2Fusers%2Fsign_up%3Fauth_error%3DAuthentication%2Bfailed.%2BPlease%2Benter%2Byour%2Bemail%2Bbelow%2Bto%2Bcontinue.&amp;prompt=consent&amp;provider=google_oauth2_extended"
						>
							<img
								className="google_icon"
								src="//d3jas8421cca9z.cloudfront.net/assets/google-g-0cf576a5dab9315daac7ffe29d29ed585e0ff9850e59408d0f25f38dc1da037b.svg"
								alt="Google g"
							/>
							<span className="google_light_btn_label">
								Continue with Google
							</span>
						</a>
						<div className="signup_form_subtext">
							or use your email to sign up:
						</div>
						<div className="field">
							<div className="form_text_field_container">
								<label for="user[full_name]">Full Name</label>
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
								<label for="user[email]">Work Email</label>
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

						<input type="hidden" name="amp_device_id" value="" />
						<input type="hidden" name="utm_source" value="" />
						<input type="hidden" name="utm_campaign" value="" />
						<input type="hidden" name="utm_medium" value="" />
						<input type="hidden" name="utm_adgroup" value="" />
						<input type="hidden" name="utm_content" value="" />
						<input type="hidden" name="utm_term" value="" />
						<input type="hidden" name="gclid" value="" />
						<input type="hidden" name="visitor_token" value="" />
						<input type="hidden" name="fireb_device_id" value="" />
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
						<a href="/privacy">privacy policy</a> &amp;{" "}
						<a href="/terms">terms of service.</a>
					</p>
				</div>
			</div>
		);
	};

	return (
		<>
			<style jsx>
				{`
					#copper-logo {
						height: 27px;
					}
					.empty-nav {
						height: fit-content;
						padding-top: 34px;
						padding-bottom: 70px;
					}
					@media (max-width: 990px) {
						.empty-nav {
							padding-top: 20px;
						}
						#copper-logo {
							height: 22px;
						}
					}
				`}
			</style>
			<section
				className={`c-hero--general-signup-form enclosed-form ${
					heroBackground[0]?.slug ? heroBackground[0].slug : "white"
				} hero-form-flow hero-form-flow-${id} ${
					nearNavigation ? "hero-near-nav" : ""
				}`}
			>
				<div className="container">
					<div className="row">
						<div className="col-md-7 flex align-items-center screening">
							<div className="hero-text">
								{copperIcon ? (
									<div className="mb-2">
										<svg
											width="85"
											height="85"
											viewBox="0 0 85 85"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M42.5 85C19.0279 85 0 65.9721 0 42.5C0 19.0279 19.0279 0 42.5 0C65.9721 0 85 19.0279 85 42.5C85 65.9721 65.9721 85 42.5 85ZM33.0759 65.3211C36.0132 66.5037 39.236 67.0964 42.7453 67.0964C53.1442 67.0964 61.0069 61.178 66.3324 49.3366L65.2057 48.7762C63.0743 50.9579 60.8818 52.5612 58.6273 53.5899C56.3718 54.6176 53.8661 55.1314 51.1093 55.1314C46.223 55.1314 42.3366 53.4616 39.4566 50.1183C36.5737 46.7758 35.1327 42.2623 35.1327 36.5757C35.1327 34.1403 35.3953 31.8446 35.9205 29.6885C36.4457 27.5324 37.1562 25.6755 38.0538 24.1121C38.9495 22.5515 40.0009 21.3168 41.2069 20.4116C42.4101 19.5064 43.7241 19.0514 45.1478 19.0514C46.754 19.0514 48.088 19.5653 49.146 20.5939C50.2031 21.6217 50.7331 22.9467 50.7331 24.5661C50.7331 25.1901 50.6853 25.7667 50.5927 26.2957C50.4982 26.8257 50.2938 27.6198 49.9806 28.6788C49.6674 29.8633 49.4325 30.7675 49.2768 31.3896C49.1193 32.0127 49.0419 32.6681 49.0419 33.3529C49.0419 35.7218 49.7934 37.6841 51.2974 39.2418C52.8004 40.7995 54.6797 41.5784 56.9352 41.5784C59.1277 41.5784 60.9764 40.7843 62.4803 39.1943C63.9834 37.6053 64.7349 35.6278 64.7349 33.2589C64.7349 31.1417 64.2183 29.1319 63.1841 27.2294C62.1509 25.3298 60.7415 23.6942 58.9558 22.3226C57.1701 20.953 55.0703 19.8778 52.6601 19.098C50.247 18.3191 47.6621 17.9297 44.9072 17.9297C41.2098 17.9297 37.7645 18.5841 34.5694 19.893C31.3752 21.2018 28.5859 22.9932 26.2063 25.2671C23.8247 27.5419 21.9608 30.2214 20.6143 33.3064C19.267 36.3905 18.5938 39.7091 18.5938 43.2605C18.5938 46.7511 19.1963 49.9435 20.4004 52.8414C21.6036 55.7393 23.2823 58.2487 25.4385 60.3669C27.5918 62.4859 30.1386 64.1377 33.0759 65.3211Z"
												fill="white"
											/>
										</svg>
									</div>
								) : (
									""
								)}
								<h2>{heroTitle}</h2>
								<div dangerouslySetInnerHTML={{ __html: copy }}></div>
								<div className="c-hero__buttons ">
									<a
										id="form-hero-screening"
										className="form-hero-screening c-button  sendUTMsToAmplitude c-button--outline"
										href="#"
									>
										{ctaText}
									</a>

									{tryFreeCtaText?.length ? (
										<a
											id="form-hero-try-free"
											className={`form-hero-try-free c-button  sendUTMsToAmplitude ${
												buttonColorOption == "white" ? "c-button--white" : ""
											}`}
											href="#"
										>
											{tryFreeCtaText}
										</a>
									) : (
										""
									)}
								</div>
							</div>
						</div>
						<div className="col-md-7 hidden form-hero-flow">
							<DefaultMultiStepForm
								specialClass={"hero-step-form"}
								id={formId}
							/>
						</div>
						<div className="col-md-6 hidden try-free-flow c-valign--middle signup-aconditioner  enclosed-container">
							{signupPriter()}
						</div>
						<div
							className="col-md-5 disappear-mobile"
							style={{ alignItems: "flex-start", display: "flex" }}
						>
							<div className="c-image">
								<picture>
									<img
										style={{
											width: "100%",
											height: "auto",
										}}
										src={image[0].url}
										alt="Masterclass graphic"
									/>
								</picture>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Script
				src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
				onLoad={() => {
					jQuery(".form-hero-screening").click(function (e) {
						e.preventDefault();
						jQuery(this).parents(".hero-form-flow").find(".screening").hide();
						jQuery(this)
							.parents(".hero-form-flow")
							.find(".form-hero-flow")
							.fadeIn();
					});
					jQuery(".form-hero-try-free").click(function (e) {
						e.preventDefault();
						jQuery(this).parents(".hero-form-flow").find(".screening").hide();
						jQuery(this)
							.parents(".hero-form-flow")
							.find(".try-free-flow")
							.fadeIn();
					});
				}}
			></Script>
		</>
	);
};

export default heroFormFlow;
