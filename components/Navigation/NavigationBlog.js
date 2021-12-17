import Link from "next/link";
import Script from "next/script";
const NavigationBlog = (props) => {
	return (
		<>
			<div className="c-side-nav__burger">
				<Link href="/resources">
					<a className="c-side-nav__logo">
						<img alt="Side nav logo" src="/imgs/blog/side-nav-logo.svg" />
					</a>
				</Link>

				<Link href="/">
					<a
						className="round-logo-cover"
						style={{
							position: "absolute",
							left: "10px",
							height: "100%",
						}}
					></a>
				</Link>
				<Link href="https://www.copper.com/signup">
					<a
						className="c-button blog-nav-style sendUTMsToAmplitude blogCTA"
						target="_blank"
						style={{ position: "absolute", right: "50px", top: "15px" }}
					>
						Try Copper free
					</a>
				</Link>
				<div className="c-nav--mobile__burger">
					<div id="nav-icon2">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
			<nav className="c-side-nav" style={{ height: "100vh" }}>
				<div className="container">
					<Link href="/resources">
						<a className="c-side-nav__logo">
							<img alt="Side nav logo" src="/imgs/blog/side-nav-logo.svg" />
							<Link href="/">
								<a
									className="round-logo-cover"
									style={{
										position: "absolute",
										left: "38px",
										top: "24px",
									}}
								></a>
							</Link>
						</a>
					</Link>

					<div className="c-side-nav__search__container yext-searchbar-container blog-style">
						<div
							className="search-bar-menu-delimiter show-delimiter"
							style={{
								position: "relative",
								visibility: "visible",
								zIndex: "100000",
							}}
						>
							<div className="search-bar-container"></div>
							<span
								className="search-free-open"
								style={{
									top: "16px",
									right: "10px",
									position: "absolute",
									zIndex: "7",
								}}
							></span>
						</div>
					</div>
					<div className="c-side-nav__categories">
						<ul className="c-side-nav__categories__container">
							<li>
								<Link href="/blog-featured">
									<a className="c-side-nav__link">Featured</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className="c-side-nav__categories">
						<ul
							className="c-side-nav__categories__container"
							style={{ paddingTop: "0" }}
						>
							{props.menuCategories.map((item) => {
								return (
									<li key={item.id}>
										<Link href={`/${item.uri}`}>
											<a className="c-side-nav__link">{item.title}</a>
										</Link>
									</li>
								);
							})}
						</ul>
					</div>

					<div className="c-side-nav__categories">
						<ul
							className="c-side-nav__categories__container"
							style={{ paddingTop: "0" }}
						>
							{props.menuBlogFormats.map((item) => {
								return (
									<li key={item.id}>
										<Link href={`/${item.uri}`}>
											<a className="c-side-nav__link">{item.title}</a>
										</Link>
									</li>
								);
							})}
						</ul>
					</div>

					<div className="c-blog-nav__form">
						<p>Get the latest from Copper Chronicles delivered to your inbox</p>
						<div className="c-form-blog">
							{/* {% import "/components/replacements/_marketo-replacements.html" as localLeadReplacements %}
        <div className="offline-marketo">
          {{ localLeadReplacements.htmlReplacement("mktoForm_1942", 'Lead', entry.slug) }}
        </div> */}
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
									MktoForms2.loadForm(
										"//app-sj17.marketo.com",
										"763-DVL-293",
										1942,
										function (form) {
											$("#mktoForm_1942 #Email").after(
												'<button type="submit" id="newsletter-submit" class="c-form-blog__submit">' +
													'<i class="material-icons" style="font-family:Material Icons">' +
													"arrow_forward" +
													"</i>" +
													"</button>"
											);

											$("#mktoForm_1942 .mktoEmailField").keyup(function () {
												if ($(this).val() != "") {
													$(".material-icons").css({
														color: "#3C3F40",
														transition: "0.5s",
													});
												} else {
													$(".material-icons").css({
														color: "#D9D9D9",
														transition: "0.5s",
													});
												}
											});

											// Find the button element that you want to attach the event to
											var btn = document.getElementById("newsletter-submit");
											btn.onclick = function () {
												// When the button is clicked, get the form object and submit it
												MktoForms2.whenReady(function (form) {
													form.submit();
												});
											};
											form.onSuccess(function (x, y) {
												$(".c-form-blog").addClass("h-form-success");
												return false;
											});
											$(".js-form-close").click(function () {
												$("input[name=Email]").val("");
												$(".c-form-blog").removeClass("h-form-success");
											});
										}
									);
								}}
							></Script>
							<div className="online-marketo">
								<form id="mktoForm_1942"></form>
							</div>
							<div className="c-blog__form-success">
								<div className="c-blog__form-success-container">
									<p>Thanks for signing up!</p>
									<i className="material-icons js-form-close">close</i>
								</div>
							</div>
						</div>
						{/* {% include "blog/newsletter-form.html" %} */}
					</div>

					<div className="c-side-nav__utility">
						<div className="c-side-nav__social">
							<Link href="https://www.youtube.com/c/CopperInc">
								<a target="_blank">
									<svg
										width="21px"
										height="15px"
										viewBox="0 0 21 15"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
									>
										<title>social_youtube</title>
										<desc>Created with Sketch.</desc>
										<g
											id="Symbols"
											stroke="none"
											stroke-width="1"
											fill="none"
											fill-rule="evenodd"
										>
											<g
												id="footer-blog-desktop"
												transform="translate(-361.000000, -412.000000)"
												fill="#FFFFFF"
												fill-rule="nonzero"
											>
												<path
													d="M381.474484,414.316105 C381.911352,415.968547 381.911352,419.416279 381.911352,419.416279 C381.911352,419.416279 381.911352,422.864012 381.474484,424.516454 C381.233844,425.427965 380.525352,426.146047 379.625623,426.389709 C377.994852,426.832558 371.45559,426.832558 371.45559,426.832558 C371.45559,426.832558 364.9165,426.832558 363.28573,426.389709 C362.386,426.146047 361.677508,425.427965 361.437041,424.516454 C361,422.864012 361,419.416279 361,419.416279 C361,419.416279 361,415.968547 361.437041,414.316105 C361.677508,413.404593 362.386,412.686512 363.28573,412.442849 C364.9165,412 371.45559,412 371.45559,412 C371.45559,412 377.994852,412 379.625623,412.442849 C380.525352,412.686512 381.233844,413.404593 381.474484,414.316105 Z M369.262295,422.717326 L374.695098,419.538895 L369.262295,416.360465 L369.262295,422.717326 Z"
													id="social_youtube"
												></path>
											</g>
										</g>
									</svg>
								</a>
							</Link>
							<Link href="https://www.instagram.com/copperinc/">
								<a target="_blank">
									<svg
										width="15px"
										height="15px"
										viewBox="0 0 15 15"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
									>
										<title>social_instagram</title>
										<desc>Created with Sketch.</desc>
										<g
											id="Symbols"
											stroke="none"
											stroke-width="1"
											fill="none"
											fill-rule="evenodd"
										>
											<g
												id="footer-blog-desktop"
												transform="translate(-396.000000, -412.000000)"
												fill="#FFFFFF"
											>
												<path
													d="M403.500015,412 C405.536878,412 405.792286,412.008634 406.59224,412.045133 C407.390528,412.081544 407.93573,412.20834 408.412785,412.393755 C408.905976,412.585393 409.324233,412.841843 409.74121,413.25879 C410.158157,413.675767 410.414607,414.094024 410.606275,414.587215 C410.79166,415.06427 410.918456,415.609472 410.954867,416.40776 C410.991366,417.207714 411,417.463122 411,419.500015 C411,421.536878 410.991366,421.792286 410.954867,422.59224 C410.918456,423.390528 410.79166,423.93573 410.606275,424.412785 C410.414607,424.905976 410.158157,425.324233 409.74121,425.74121 C409.324233,426.158157 408.905976,426.414607 408.412785,426.606275 C407.93573,426.79166 407.390528,426.918456 406.59224,426.954867 C405.792286,426.991366 405.536878,427 403.500015,427 C401.463122,427 401.207714,426.991366 400.40776,426.954867 C399.609472,426.918456 399.06427,426.79166 398.587215,426.606275 C398.094024,426.414607 397.675767,426.158157 397.25879,425.74121 C396.841843,425.324233 396.585393,424.905976 396.393755,424.412785 C396.20834,423.93573 396.081544,423.390528 396.045133,422.59224 C396.008634,421.792286 396,421.536878 396,419.500015 C396,417.463122 396.008634,417.207714 396.045133,416.40776 C396.081544,415.609472 396.20834,415.06427 396.393755,414.587215 C396.585393,414.094024 396.841843,413.675767 397.25879,413.25879 C397.675767,412.841843 398.094024,412.585393 398.587215,412.393755 C399.06427,412.20834 399.609472,412.081544 400.40776,412.045133 C401.207714,412.008634 401.463122,412 403.500015,412 Z M403.500015,413.351349 C401.497419,413.351349 401.260201,413.359 400.469356,413.395083 C399.738114,413.428427 399.340994,413.550608 399.076715,413.653319 C398.726634,413.789374 398.476793,413.951896 398.214359,414.214359 C397.951896,414.476793 397.789374,414.726634 397.653319,415.076715 C397.550608,415.340994 397.428427,415.738114 397.395083,416.469356 C397.359,417.260201 397.351349,417.497419 397.351349,419.500015 C397.351349,421.502581 397.359,421.739799 397.395083,422.530644 C397.428427,423.261886 397.550608,423.659006 397.653319,423.923285 C397.789374,424.273366 397.951925,424.523207 398.214359,424.785641 C398.476793,425.048104 398.726634,425.210626 399.076715,425.346681 C399.340994,425.449392 399.738114,425.571573 400.469356,425.604917 C401.260112,425.641 401.49727,425.648651 403.500015,425.648651 C405.50273,425.648651 405.739918,425.641 406.530644,425.604917 C407.261886,425.571573 407.659006,425.449392 407.923285,425.346681 C408.273366,425.210626 408.523207,425.048104 408.785641,424.785641 C409.048104,424.523207 409.210626,424.273366 409.346681,423.923285 C409.449392,423.659006 409.571573,423.261886 409.604917,422.530644 C409.641,421.739799 409.648651,421.502581 409.648651,419.500015 C409.648651,417.497419 409.641,417.260201 409.604917,416.469356 C409.571573,415.738114 409.449392,415.340994 409.346681,415.076715 C409.210626,414.726634 409.048104,414.476793 408.785641,414.214359 C408.523207,413.951896 408.273366,413.789374 407.923285,413.653319 C407.659006,413.550608 407.261886,413.428427 406.530644,413.395083 C405.739799,413.359 405.502581,413.351349 403.500015,413.351349 Z M403.500015,422 C404.880718,422 406,420.880718 406,419.500015 C406,418.119282 404.880718,417 403.500015,417 C402.119282,417 401,418.119282 401,419.500015 C401,420.880718 402.119282,422 403.500015,422 Z M403.500015,415.648651 C405.627055,415.648651 407.351349,417.372945 407.351349,419.500015 C407.351349,421.627055 405.627055,423.351349 403.500015,423.351349 C401.372945,423.351349 399.648651,421.627055 399.648651,419.500015 C399.648651,417.372945 401.372945,415.648651 403.500015,415.648651 Z M408.403526,415.49649 C408.403526,415.993552 408.000572,416.396476 407.50351,416.396476 C407.006478,416.396476 406.603524,415.993552 406.603524,415.49649 C406.603524,414.999428 407.006478,414.596474 407.50351,414.596474 C408.000572,414.596474 408.403526,414.999428 408.403526,415.49649 Z"
													id="social_instagram"
												></path>
											</g>
										</g>
									</svg>
								</a>
							</Link>
							<Link href="https://www.facebook.com/CopperInc/">
								<a target="_blank">
									<svg
										width="8px"
										height="15px"
										viewBox="0 0 8 15"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
									>
										<title>social_facebook</title>
										<desc>Created with Sketch.</desc>
										<g
											id="Symbols"
											stroke="none"
											stroke-width="1"
											fill="none"
											fill-rule="evenodd"
										>
											<g
												id="footer-blog-desktop"
												transform="translate(-426.000000, -412.000000)"
												fill="#FFFFFF"
											>
												<path
													d="M431.041615,427 L431.041615,420.167165 L433.347659,420.167165 L433.69189,417.49252 L431.041615,417.49252 L431.041615,415.789642 C431.041615,415.015883 431.257902,414.491921 432.366752,414.491921 L433.783279,414.491921 L433.783279,412.103627 C433.100157,412.033023 432.41379,411.998451 431.727031,412.000053 C429.689061,412.000053 428.299951,413.242941 428.299951,415.524614 L428.299951,417.49252 L426,417.49252 L426,420.167165 L428.299951,420.167165 L428.299951,427 L431.041615,427 Z"
													id="social_facebook"
												></path>
											</g>
										</g>
									</svg>
								</a>
							</Link>
							<Link href="https://twitter.com/copperinc">
								<a target="_blank">
									<svg
										width="18px"
										height="15px"
										viewBox="0 0 18 15"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
									>
										<title>social_twitter</title>
										<desc>Created with Sketch.</desc>
										<g
											id="Symbols"
											stroke="none"
											stroke-width="1"
											fill="none"
											fill-rule="evenodd"
										>
											<g
												id="footer-blog-desktop"
												transform="translate(-449.000000, -412.000000)"
												fill="#FFFFFF"
											>
												<path
													d="M454.66064,426.626058 C461.45312,426.626058 465.16832,420.998538 465.16832,416.118378 C465.16832,415.958538 465.16832,415.799418 465.15752,415.641018 C465.880279,415.118234 466.504176,414.470931 467,413.729418 C466.325993,414.028075 465.610997,414.223934 464.87888,414.310458 C465.649816,413.848925 466.226809,413.123014 466.50248,412.267818 C465.777553,412.697986 464.984465,413.001146 464.15744,413.164218 C463.0127,411.946982 461.193718,411.649059 459.720475,412.437507 C458.247233,413.225956 457.486118,414.904692 457.86392,416.532378 C454.894565,416.383517 452.128023,414.98101 450.2528,412.673898 C449.272608,414.361322 449.773271,416.520037 451.39616,417.603738 C450.808454,417.586319 450.233561,417.427779 449.72,417.141498 C449.72,417.156618 449.72,417.172458 449.72,417.188298 C449.720481,418.946245 450.959661,420.460363 452.6828,420.808458 C452.139106,420.956735 451.568658,420.97841 451.01528,420.871818 C451.499083,422.376202 452.885534,423.406782 454.46552,423.436458 C453.157809,424.464209 451.542363,425.022134 449.87912,425.020458 C449.585291,425.019894 449.291747,425.002103 449,424.967178 C450.688858,426.050977 452.653938,426.625854 454.66064,426.623178"
													id="social_twitter"
												></path>
											</g>
										</g>
									</svg>
								</a>
							</Link>
							<Link href="https://www.linkedin.com/company/copper-inc/">
								<a target="_blank">
									<svg
										width="15px"
										height="15px"
										viewBox="0 0 15 15"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
									>
										<title>social_linkedin</title>
										<desc>Created with Sketch.</desc>
										<g
											id="Symbols"
											stroke="none"
											stroke-width="1"
											fill="none"
											fill-rule="evenodd"
										>
											<g
												id="footer-blog-desktop"
												transform="translate(-480.000000, -412.000000)"
												fill="#FFFFFF"
											>
												<path
													d="M492.782438,424.782022 L490.557793,424.782022 L490.557793,421.300675 C490.557793,420.470652 490.543626,419.402706 489.401928,419.402706 C488.243979,419.402706 488.067307,420.307314 488.067307,421.241507 L488.067307,424.782022 L485.845162,424.782022 L485.845162,417.62349 L487.977722,417.62349 L487.977722,418.602267 L488.008556,418.602267 C488.305231,418.039334 489.031084,417.445985 490.113198,417.445985 C492.366177,417.445985 492.782438,418.928109 492.782438,420.856079 L492.782438,424.782022 Z M483.336759,416.645546 C482.622156,416.645546 482.04589,416.067613 482.04589,415.355093 C482.04589,414.64299 482.622156,414.065057 483.336759,414.065057 C484.048446,414.065057 484.625962,414.64299 484.625962,415.355093 C484.625962,416.067613 484.048446,416.645546 483.336759,416.645546 Z M482.222562,424.782022 L484.449707,424.782022 L484.449707,417.62349 L482.222562,417.62349 L482.222562,424.782022 Z M493.890386,412 L481.106281,412 C480.495847,412 480,412.48418 480,413.081697 L480,425.917887 C480,426.515403 480.495847,427.000417 481.106281,427.000417 L493.890386,427.000417 C494.50207,427.000417 495,426.515403 495,425.917887 L495,413.081697 C495,412.48418 494.50207,412 493.890386,412 Z"
													id="social_linkedin"
												></path>
											</g>
										</g>
									</svg>
								</a>
							</Link>
						</div>
						<Link href="/">
							<a className="t-link__gray">copper.com</a>
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavigationBlog;
