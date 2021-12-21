import Link from "next/link";
import Image from "next/image";
const HeroHomePage = (props) => {
	return (
		<section className="landing-hero c-hero--signup-form enclosed-form no-transition split-background--purple  hero-mod-purple">
			<img
				className="dotted-circle-home disappear-mobile"
				src="https://copper.objects.frb.io/imgs/homepage/DotPattern-Circle.svg"
				alt="Dotted circle adition"
			/>
			<div className="container">
				<div className="row">
					<div className="col-md-6 c-valign--middle signup-aconditioner enclosed-transparent ">
						<div className="pt-0 mt-0" style={{ marginTop: "60px" }}>
							<h1 className="more-space mt-2">{props.title}</h1>
							<p className="form-subtitle">{props.subtitle}</p>
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
												src="//d3jas8421cca9z.cloudfront.net/assets/google-g-0cf576a5dab9315daac7ffe29d29ed585e0ff9850e59408d0f25f38dc1da037b.svg"
												alt="Google g"
											/>
											<span className="google_light_btn_label">
												Continue with Google
											</span>
										</a>
									</Link>
									<div
										className="signup_form_subtext"
										style={{ fontSize: "13px", marginBottom: "25px" }}
									>
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
											value="Try free"
											className="submit_button is-pink with-no-border"
										/>
									</div>
								</form>
								<p className="disclaimer">
									By signing up, I agree to Copper’s
									<Link href="/privacy">
										<a> privacy policy</a>
									</Link>{" "}
									&amp;
									<Link href="/terms">
										<a> terms of service.</a>
									</Link>
								</p>
							</div>
						</div>
					</div>
					<div
						className="col-md-6 c-valign--middle c-image invert-sm-spacing c-valign--middle"
						style={{ position: "relative", left: "0px", minHeight: "350px" }}
					>
						{/* {% import "components/simple-elements/_index.html" as simpleElements %} */}
						<div style={{ position: "relative" }}>
							<picture style={{ opacity: "0" }}>
								<source srcSet="https://copper.objects.frb.io/imgs/homepage/thumbnails/hero/hero-thumb.webp" />
								<source srcSet="https://copper.objects.frb.io/imgs/homepage/thumbnails/hero/hero-thumb.png" />
								<Image
									width={468}
									height={348}
									id="vid-1-placeholder"
									src="https://copper.objects.frb.io/imgs/homepage/thumbnails/hero/hero-thumb.png"
								/>
							</picture>
							<div style={{ position: "absolute", left: "0px", top: "-4%" }}>
								<div className="video-gif-container">
									<video
										id="vid-1"
										data-cy="video-element"
										className="video-as-gif h-remove-shadow onViewport"
										style={{ maxWidth: "100%" }}
										muted="muted"
										playsInline=""
									>
										<source
											src="https://copper.objects.frb.io/videos/homepage/hero/01CopperHome-HeroAnimation3-v4.webm"
											type="video/webm"
										/>
										<source
											src="https://copper.objects.frb.io/videos/homepage/hero/01CopperHome-HeroAnimation3-v4.mp4"
											type="video/mp4"
										/>
										<p>Su navegador no soporta video HTML5</p>
									</video>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroHomePage;
