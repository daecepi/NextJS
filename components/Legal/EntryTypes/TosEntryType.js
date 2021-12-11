import Script from "next/script";
import Link from "next/link";
const TosEntryType = ({ entry }) => {
	return (
		<>
			<div className="c-blog-content__main container c-blog-content__main--blog-entry">
				<progress
					max="0"
					value="0"
					style={{ left: "0px", zIndex: "1001" }}
				></progress>

				<div className="c-resource--header">
					<img
						src="/imgs/tos/terms/terms_header.png"
						alt="CRM and Project Management Combined: Copper Introduces Redesigned Projects"
						className="c-resource--header__background-image"
					/>
				</div>

				<section className="c-resource-content c-resource-content--overlap--blog">
					<div className="container" style={{ display: "flex" }}>
						<div className="col-md-3">
							<nav id="terms-menu" className="c-side-nav">
								<a className="c-side-nav__logo" href="/resources">
									<picture>
										<source
											type="image/webp"
											srcset="/imgs/tos/terms/terms_logo.webp"
											alt="Terms logo"
										/>
										<source
											type="image/png"
											srcset="/imgs/tos/terms/terms_logo.png"
											alt="Terms logo"
										/>
										<img
											alt="Terms logo"
											src="/imgs/tos/terms/terms_logo.png"
										/>
									</picture>
								</a>
								<div className="c-side-nav__categories">
									<ul
										id="floating-menu-list"
										className="c-side-nav__categories__container"
										style={{ paddingTop: "0" }}
									></ul>
								</div>

								<div className="c-side-nav__categories">
									<ul className="c-side-nav__categories__container">
										<li>
											<p className="t-link__gray p-sm" href="/ds">
												Legal pages
											</p>
										</li>
										<li>
											<Link href="/privacy">
												<a
													className="c-side-nav__link"
													style={{ marginBottom: "6px" }}
												>
													Security and Privacy Policy
												</a>
											</Link>
										</li>
									</ul>
								</div>
							</nav>
						</div>
						<div className="col-md-9">
							<div
								className="c-resource-content__container c-resource-content__container--new-posts container li-tittling-green-underline"
								style={{ paddingTop: "25px" }}
							>
								<div className="row">
									<div className="c-resource-content__container__col col-sm-12">
										<div className="c-blog-builder--content__title">
											<h1
												id="menu-item-0"
												className="menu-item"
												style={{ paddingBottom: "0px", paddingTop: "0px" }}
											>
												Terms of Service
											</h1>
										</div>
										<div className="c-resource-copy__editor legal-specializations">
											<div
												className="row c-terms-content"
												dangerouslySetInnerHTML={{
													__html: entry.termsRedactor,
												}}
											></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" />
			<Script
				src="/js/lazyload.min.js"
				strategy="afterInteractive"
				onLoad={() => {
					LazyLoad.js(
						[
							"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js",
						],
						function () {
							var idItem = 0;
							var floatingMenu = null;
							var menuItems = null;

							var menuItemsOffset = {};
							var scrollTopCopy = 0;

							function assignElementToMenu(liElementParent, menuText) {
								//Adding elements to the floating menu
								var tempLi = document.createElement("li");
								tempLi.setAttribute("id", `reference-menu-item-${idItem}`);
								var tempA = document.createElement("a");
								tempA.classList.add("c-side-nav__link");
								//tempA.setAttribute('href', `#menu-item-${idItem}`);
								tempA.setAttribute("data-target-id", `menu-item-${idItem}`);
								//tempA.href = `#`;
								tempA.onclick = function (e) {
									e.preventDefault();
									$(".c-side-nav__link").removeClass("active");
									e.target.classList.add("active");
									var target = e.target.getAttribute("data-target-id");
									var elementPosition = $(`#${target}`).offset().top;
									//var offset = 0;
									if ($(".c-nav").is(":visible")) {
										elementPosition -= 100;
										//offset = 100;
									} else {
										elementPosition -= 60;
										//offset = 60;
									}
									window.scrollTo({ top: elementPosition, behavior: "smooth" });
									//var elementToScroll = document.getElementById(target);
									//elementToScroll.scrollIntoView({ behavior: 'smooth'});
									//elementToScroll.scrollTop -= offset;

									return false;
								};
								tempA.innerText = menuText;
								tempLi.appendChild(tempA);

								//Adding the entire element to the
								var a = document.getElementById("floating-menu-list");
								a.appendChild(tempLi);

								//Incrementing the index applied
								idItem = idItem + 1;
							}

							function initializeFloatingMenu() {
								floatingMenu = document.getElementById("terms-menu");

								//Assigning first elememt which is the header
								var liElementParent = $("#menu-item-0");
								assignElementToMenu(
									liElementParent,
									liElementParent[0].innerText
								);

								identifyMenuLiElements();
							}

							function identifyMenuLiElements() {
								if (floatingMenu !== null) {
								}
								$(".c-terms-content>ol>li").each(function () {
									var liElementParent = $(this);
									liElementParent.attr("id", `menu-item-${idItem}`);
									liElementParent.addClass("menu-item");

									var liText = liElementParent.find("strong")[0].innerText;
									assignElementToMenu(liElementParent, liText);
								});

								menuItems = document.querySelectorAll(".menu-item");

								Array.prototype.forEach.call(menuItems, function (e) {
									menuItemsOffset[e.id] = e.offsetTop;
								});

								// Preparing the scroll event handler
								window.addEventListener("scroll", function (e) {
									var scrollTop = $(window).scrollTop(),
										elementOffset = 170,
										distance = elementOffset - scrollTop;

									scrollTopCopy = scrollTop;

									// Offset from footer
									var footerOffset = $(".c-footer").offset().top,
										distanceFromFooter = footerOffset - scrollTop;

									//Menu stickyness
									if (distanceFromFooter <= 900) {
										if (!floatingMenu.classList.contains("end-position")) {
											window.requestAnimationFrame(function () {
												floatingMenu.classList.remove("floating-active");
												floatingMenu.classList.add("end-position");
											});
										}
									} else if (distance <= 60) {
										if (!floatingMenu.classList.contains("floating-active")) {
											window.requestAnimationFrame(function () {
												floatingMenu.classList.add("floating-active");
												floatingMenu.classList.remove("end-position");
											});
										}
									} else if (distance > 60) {
										if (floatingMenu.classList.contains("floating-active")) {
											window.requestAnimationFrame(function () {
												floatingMenu.classList.remove("floating-active");
												floatingMenu.classList.remove("end-position");
											});
										}
									}

									// Elements scroll spy
									var i = 0;
									var index = 0;
									for (i in menuItemsOffset) {
										var tempOffset = $(`#${i}`).offset().top;
										if (tempOffset <= scrollTop + 155) {
											var elements = document.querySelectorAll(".active");
											for (var j = elements.length - 1; j >= 0; j--) {
												elements[j].classList.remove("active");
											}
											document
												.querySelector(`#reference-menu-item-${index}>a`)
												.classList.add("active");
										}
										index += 1;
									}
								});
							}
							initializeFloatingMenu();
						}
					);
				}}
			></Script>
		</>
	);
};

export default TosEntryType;
