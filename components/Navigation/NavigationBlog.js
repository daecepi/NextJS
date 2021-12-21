import Link from "next/link";
import Script from "next/script";
import FBSvg from "../SVGs/FBSvg";
import IGSvg from "../SVGs/IGSvg";
import IG from "../SVGs/IGSvg";
import LNSvg from "../SVGs/LNSvg";
import TWSvg from "../SVGs/TWSvg";
import YTSvg from "../SVGs/YTSvg";
import YT from "../SVGs/YTSvg";
const NavigationBlog = (props) => {
	return (
		<>
			<div className="c-side-nav__burger">
				<Script
					strategy="lazyOnLoad"
					dangerouslySetInnerHTML={{
						_html: `
							console.log("HOLA GODA");
							`,
					}}
				/>
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
							<YTSvg />
							<IGSvg />
							<FBSvg />
							<TWSvg />
							<LNSvg />
						</div>
						<Link href="/">
							<a className="t-link__gray">copper.com</a>
						</Link>
					</div>
				</div>
				{/*<Script
					strategy="beforeInteractive"
					dangerouslySetInnerHTML={{
						_html: `
							console.log("entered");
							// Desktop Nav Toggle
							$(".js-dropdown-nav").click(function () {
								console.log("entered");
								var nav = $(this).attr("dropdown-type");
								if ($(this).hasClass("active")) {
									$(this).removeClass("active");
									$("#" + nav).removeClass("active");
								} else {
									$(".js-dropdown-nav").removeClass("active");
									$(".c-nav__dropdown").removeClass("active");
									$(this).addClass("active");
									$("#" + nav).addClass("active");
									$("#nav-icon2 span").addClass("white");
									$(".c-nav--mobile").addClass("z-index");
								}
							});

							$("main").click(function () {
								var nav = $(".js-dropdown-nav").attr("dropdown-type");
								if ($(".js-dropdown-nav").hasClass("active")) {
									$(".js-dropdown-nav").removeClass("active");
									$("#" + nav).removeClass("active");
									$(".c-nav__dropdown").removeClass("active");
								}
							});

							// Mobile Nav Toggle
							$("#nav-icon2").click(function () {
								$(this).toggleClass("open");
								$("body").toggleClass("body--stop-scrolling");
								$(".c-nav--mobile__overlay").toggleClass("open");
								$("#nav-icon2 span").removeClass("white");
								$(".c-nav--mobile").removeClass("z-index");
								$(".c-nav__dropdown").removeClass("active");
								$(".js-dropdown-nav").removeClass("active");
							});

							$(".close-mobile-nav").click(function () {
								$("#nav-icon2").removeClass("open");
								$("body").toggleClass("body--stop-scrolling");
								$(".c-nav--mobile__overlay").toggleClass("open");
								$("#nav-icon2 span").removeClass("white");
								$(".c-nav--mobile").removeClass("z-index");
								$(".c-nav__dropdown").removeClass("active");
								$(".js-dropdown-nav").removeClass("active");
							});

							$(".js-sub-back").click(function () {
								$(".c-nav__dropdown").removeClass("active");
								$("#nav-icon2 span").removeClass("white");
								$(".js-dropdown-nav").removeClass("active");
								$(".c-nav--mobile").removeClass("z-index");
							});

							// Mobile Footer control
							$("span.footer__title").click(function () {
								$(this).parent().parent(".footer__links").toggleClass("open");
							});	
							`,
					}}
				/>*/}

				<Script
					src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
					onLoad={() => {
						// Desktop Nav Toggle
						$(".js-dropdown-nav").click(function () {
							var nav = $(this).attr("dropdown-type");
							if ($(this).hasClass("active")) {
								$(this).removeClass("active");
								$("#" + nav).removeClass("active");
							} else {
								$(".js-dropdown-nav").removeClass("active");
								$(".c-nav__dropdown").removeClass("active");
								$(this).addClass("active");
								$("#" + nav).addClass("active");
								$("#nav-icon2 span").addClass("white");
								$(".c-nav--mobile").addClass("z-index");
							}
						});

						$("main").click(function () {
							var nav = $(".js-dropdown-nav").attr("dropdown-type");
							if ($(".js-dropdown-nav").hasClass("active")) {
								$(".js-dropdown-nav").removeClass("active");
								$("#" + nav).removeClass("active");
								$(".c-nav__dropdown").removeClass("active");
							}
						});

						// Mobile Nav Toggle
						$("#nav-icon2").click(function () {
							$(this).toggleClass("open");
							$("body").toggleClass("body--stop-scrolling");
							$(".c-nav--mobile__overlay").toggleClass("open");
							$("#nav-icon2 span").removeClass("white");
							$(".c-nav--mobile").removeClass("z-index");
							$(".c-nav__dropdown").removeClass("active");
							$(".js-dropdown-nav").removeClass("active");
						});

						$(".close-mobile-nav").click(function () {
							$("#nav-icon2").removeClass("open");
							$("body").toggleClass("body--stop-scrolling");
							$(".c-nav--mobile__overlay").toggleClass("open");
							$("#nav-icon2 span").removeClass("white");
							$(".c-nav--mobile").removeClass("z-index");
							$(".c-nav__dropdown").removeClass("active");
							$(".js-dropdown-nav").removeClass("active");
						});

						$(".js-sub-back").click(function () {
							$(".c-nav__dropdown").removeClass("active");
							$("#nav-icon2 span").removeClass("white");
							$(".js-dropdown-nav").removeClass("active");
							$(".c-nav--mobile").removeClass("z-index");
						});

						// Mobile Footer control
						$("span.footer__title").click(function () {
							$(this).parent().parent(".footer__links").toggleClass("open");
						});
					}}
				/>
			</nav>
		</>
	);
};

export default NavigationBlog;
