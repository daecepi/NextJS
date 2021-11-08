import VideoSide from "./HeroInternalComponents/VideoSide";
import HeroCopy from "./HeroInternalComponents/HeroCopy";
import DefaultSignupWidget from "../Simples/DefaultSingupWidget";

const SignupFormHero = ({
	imageContain,
	signupSide,
	signupFormType,
	backgroundColor,
	specialClass,
	image,
	eyebrow,
	heroSignupTitle,
	heroSignupDescription,
	heroVideoUrl,
	removeNavigation,
}) => {
	const imageToUse = image[0];
	const reusableTempContainerStyles = { color: "#000000", marginTop: "60px" };
	const sectionStyles =
		notFirstHero && notFirstHero == 1
			? { paddingTop: "100px", paddingBottom: "100px", minHeight: "0" }
			: {};

	if (signupSide == "left") {
		return (
			<section
				id="starting-hero"
				className={`c-hero--split
    landing-hero
    ${removeNavigation ? "h-no-nav" : ""}
    c-hero--general-signup-form
    ${signupFormType == "enclosed" ? "enclosed-form" : ""} 
    ${backgroundColor[0]?.slug ? backgroundColor[0].slug : "hot-pink"}
    ${specialClass?.length ? specialClass : ""}
    `}
				style={sectionStyles}
			>
				<div className="container">
					<div className="row">
						<div
							className={`col-md-6 c-valign--middle signup-aconditioner ${
								signupFormType == "enclosed" ? "enclosed-container" : ""
							}`}
						>
							<div style={reusableTempContainerStyles}>
								{heroSignupTitle?.length ? (
									<h1 className="more-space">{heroSignupTitle}</h1>
								) : (
									""
								)}
								{heroSignupDescription?.length ? (
									<p className="form-subtitle">{heroSignupDescription}</p>
								) : (
									""
								)}
								<div className="form_container">
									<form
										className="signup_form"
										id="signup_form"
										action="https://app.copper.com/users"
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
											href="https://app.copper.com/auth/auto_login?continue_with_google=true&amp;failure_url=https%3A%2F%2Fapp.copper.com%2Fusers%2Fsign_up%3Fauth_error%3DAuthentication%2Bfailed.%2BPlease%2Benter%2Byour%2Bemail%2Bbelow%2Bto%2Bcontinue.&amp;prompt=consent&amp;provider=google_oauth2_extended"
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
										<a href="/privacy">privacy policy</a> &{" "}
										<a href="/terms">terms of service.</a>
									</p>
								</div>
							</div>
						</div>
						{() => {
							if (displayVideo == "1" && heroVideoUrl) {
								return <VideoSide heroVideoUrl={heroVideoUrl} />;
							} else if (image) {
								const optimizedImages =
									imageToUse.optimizedLandingImages || undefined;
								return (
									<div
										className="col-md-6 c-valign--middle c-image invert-sm-spacing c-valign--middle"
										style={{ position: "relative", left: "0px" }}
									>
										{optimizedImages?.srcset?.length > 0 ? (
											<picture>
												{optimizedImages.srcsetWebP ? (
													<source
														srcSet={optimizedImages.srcsetWebP}
														sizes="100vw"
														type="image/webp"
													/>
												) : (
													""
												)}
												<img
													src={optimizedImages.src}
													srcSet={optimizedImages.srcset}
													sizes="100vw"
													className={imageContain ? "h-image-contain" : ""}
													style={{ objectFit: "initial", height: "auto" }}
													alt={
														imageToUse?.altText?.length
															? imageToUse.altText
															: imageToUse.title
													}
												/>
											</picture>
										) : (
											<img
												style={{ objectFit: "initial", height: "auto" }}
												className={imageContain ? "h-image-contain" : ""}
												src={imageToUse.url}
												alt={
													imageToUse?.altText?.length
														? imageToUse.altText
														: imageToUse.title
												}
											/>
										)}
									</div>
								);
							}
							return <div className="col-md-6"></div>;
						}}
					</div>
				</div>
			</section>
		);
	} else if (signupSide == "right") {
		return (
			<section
				id="starting-hero"
				className={`c-hero--split
					landing-hero
					${entry.removeNavigation ? "h-no-nav" : ""}
					c-hero--general-signup-form
					${signupFormType == "enclosed" ? "enclosed-form" : ""} 
					${backgroundColor[0]?.slug ? backgroundColor[0].slug : "hot-pink"}
					${specialClass?.length ? specialClass : ""}
					`}
				style={sectionStyles}
			>
				<div className="container">
					<div className="row row--no-reverse">
						<div className="col-md-6 col-margin-inverted c-valign--middle copy-aconditioner {{ backgroundColor ? backgroundColor.slug : 'hot-pink' }}">
							<HeroCopy
								slug={slug}
								loopIndex={loopIndex}
								eyebrow={eyebrow}
								eyebrowSettings={eyebrowSettings}
								copyLogo={copyLogo}
								richText={richText}
								ctas={ctas}
							/>
						</div>
						<div className="col-md-6 c-valign--middle signup-aconditioner {% if heroValues.signupFormType == 'enclosed' %} enclosed-container {% endif %}">
							<DefaultSignupWidget
								title={heroSignupTitle}
								subTitle={heroSignupDescription}
							/>
						</div>
					</div>
				</div>
			</section>
		);
	}
	return "";
};

export default SignupFormHero;
