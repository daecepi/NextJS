import Script from "next/script";
const PricingTable = ({
	includeNavigation,
	tableTitle,
	pricingFeatures = [],
	lastInstance,
	footnote,
}) => {
	return (
		<>
			<section
				className={`d-none d-sm-none d-md-block c-pricing-table--cornflower ${
					lastInstance ? "last-instance" : ""
				} ${includeNavigation ? "nav-added" : ""}`}
			>
				{includeNavigation && (
					<>
						<div
							className="c-pricing-table--cornflower__navigation js-pricing-nav"
							style={{ paddingBottom: "10px" }}
						>
							<div className="c-pricing-table__row--cornflower">
								<div className="container c-pricing-table--cornflower__navigation--container">
									<div
										className="c-pricing-table__info--cornflower"
										style={{ marginRight: "15px" }}
									>
										<p>Compare Features</p>
									</div>
									<div className="c-pricing-table__tier--cornflower">
										<p>Basic</p>
									</div>
									<div className="c-pricing-table__tier--cornflower js-truncate-string">
										<p>Professional</p>
									</div>
									<div className="c-pricing-table__tier--cornflower">
										<p>Business</p>
									</div>
								</div>
							</div>
						</div>
						<div className="container">
							<h4 className={includeNavigation ? "include-nav" : "no-nav"}></h4>
							<div className="c-pricing-table__table--cornflower">
								<div className="c-pricing-table__row--cornflower">
									<div className="c-pricing-table__info--cornflower sm">
										Users
									</div>
									<div className="c-pricing-table__tier--cornflower">
										<p className="p-sm text-center">Maximum of 3 seats</p>
									</div>
									<div className="c-pricing-table__tier--cornflower">
										<p className="p-sm text-center">No seat maximum</p>
									</div>
									<div className="c-pricing-table__tier--cornflower">
										<p className="p-sm text-center">No seat maximum</p>
									</div>
								</div>
							</div>
						</div>
						<div className="container">
							<h4 className={includeNavigation ? "include-nav" : "no-nav"}></h4>
							<div className="c-pricing-table__table--cornflower">
								<div className="c-pricing-table__row--cornflower">
									<div className="c-pricing-table__info--cornflower sm">
										Contacts (Leads + People)
									</div>
									<div className="c-pricing-table__tier--cornflower">
										<p className="p-sm text-center">2,500</p>
									</div>
									<div className="c-pricing-table__tier--cornflower">
										<p className="p-sm text-center">15,000</p>
									</div>
									<div className="c-pricing-table__tier--cornflower">
										<p className="p-sm text-center">Unlimited</p>
									</div>
								</div>
							</div>
						</div>
						<div className="container">
							<h4 className={includeNavigation ? "include-nav" : "no-nav"}></h4>
							<div className="c-pricing-table__table--cornflower">
								<div className="c-pricing-table__row--cornflower">
									<div className="c-pricing-table__info--cornflower sm">
										Personalized Onboarding*
									</div>
									<div className="c-pricing-table__tier--cornflower">
										<p className="p-sm text-center">
											<i className="notranslate material-icons close">close</i>
										</p>
									</div>
									<div className="c-pricing-table__tier--cornflower">
										<p className="p-sm text-center">
											<i className="notranslate material-icons close">close</i>
										</p>
									</div>
									<div className="c-pricing-table__tier--cornflower">
										<p className="p-sm text-center">
											<i className="notranslate material-icons done">done</i>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="container">
							<h4 className={includeNavigation ? "include-nav" : "no-nav"}></h4>
							<div className="c-pricing-table__table--cornflower">
								<div className="c-pricing-table__row--cornflower">
									<div className="c-pricing-table__info--cornflower sm">
										Premium Support*
									</div>
									<div className="c-pricing-table__tier--cornflower">
										<p className="p-sm text-center">
											<i className="notranslate material-icons close">close</i>
										</p>
									</div>
									<div className="c-pricing-table__tier--cornflower">
										<p className="p-sm text-center">
											<i className="notranslate material-icons close">close</i>
										</p>
									</div>
									<div className="c-pricing-table__tier--cornflower">
										<p className="p-sm text-center">
											<i className="notranslate material-icons done">done</i>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="container">
							<p
								style={{
									fontSize: "small",
									color: "gray",
									marginTop: "0px",
									paddingLeft: "13px",
								}}
							>
								*Seat minimums apply, speak to salesperson about personalized
								onboarding and premium support
							</p>
						</div>
						<br />
					</>
				)}

				<div className="container">
					<h4 className={includeNavigation ? "include-nav" : "no-nav"}>
						{tableTitle}
					</h4>
					<div className="c-pricing-table__table--cornflower">
						{pricingFeatures.map((feature) => (
							<>
								<div className="c-pricing-table__row--cornflower">
									<div className="c-pricing-table__info--cornflower sm">
										{feature.titleLink?.length ? (
											<a
												style={{ color: "#ff3465" }}
												href={feature.titleLink}
												target="_blank"
											>
												{feature.title}
											</a>
										) : (
											feature.title
										)}
										{feature.tagText?.length && (
											<span className="tag--new page-content-context">
												{feature.tagText}
											</span>
										)}
									</div>
									<div className="c-pricing-table__tier--cornflower">
										{feature.basicTierCheckmark ? (
											<i className="notranslate material-icons done">done</i>
										) : feature.basicTierText?.length ? (
											<p className="p-sm text-center">
												{feature.basicTierText}
											</p>
										) : (
											<i className="notranslate material-icons close">close</i>
										)}
									</div>
									<div className="c-pricing-table__tier--cornflower">
										{feature.professionalTierCheckmark ? (
											<i className="notranslate material-icons done">done</i>
										) : feature.professionalTierText?.length ? (
											<p className="p-sm text-center">
												{feature.professionalTierText}
											</p>
										) : (
											<i className="notranslate material-icons close">close</i>
										)}
									</div>
									<div className="c-pricing-table__tier--cornflower">
										{feature.businessTierCheckmark ? (
											<i className="notranslate material-icons done">done</i>
										) : feature.businessTierText?.length ? (
											<p className="p-sm text-center">
												{feature.businessTierText}
											</p>
										) : (
											<i className="notranslate material-icons close">close</i>
										)}
									</div>
								</div>
							</>
						))}
						{footnote?.length && (
							<div className="c-pricing-table__footnote">{footnote}</div>
						)}
					</div>
					{tableTitle == "Integrations" && (
						<>
							<div>
								<a
									target="_blank"
									style={{
										display: "block",
										padding: "13px",
										fontSize: "16px",
									}}
									href="/integrations"
								>
									Read more about our integrations
								</a>
							</div>
							<p
								style={{
									fontSize: "small",
									color: "gray",
									marginTop: "0px",
									paddingLeft: "13px",
								}}
							>
								*For Professional plans, LinkedIn integration is available via{" "}
								<a href="http://leadjet.io">leadjet.io</a> at discounted rate.
							</p>
						</>
					)}
				</div>
			</section>

			{/* =================================== */}

			<section
				className={`price-table-mobile d-block d-sm-block d-md-none c-pricing-table--cornflower ${
					lastInstance ? "last-instance" : ""
				} ${includeNavigation ? "nav-added" : ""}`}
			>
				{includeNavigation && (
					<>
						<div className="floating-starting-point--pricing"></div>
						<div className="c-pricing-table--cornflower__navigation js-pricing-nav pb-0">
							<div className="c-pricing-table__row--cornflower united-bottom  floating-container--pricing">
								<div className="container c-pricing-table--cornflower__navigation--container align-items-center">
									<div
										className="c-pricing-table__info--cornflower"
										style={{ marginRight: "15px" }}
									>
										<p>Compare Features</p>
									</div>
									<div className="d-block w-50">
										<div className="pricing-table-nav-slider">
											<div className="c-pricing-table__tier--cornflower">
												<p className="text-center pricing-cat-Basic">Basic</p>
											</div>
											<div className="c-pricing-table__tier--cornflower js-truncate-string">
												<p className="text-center pricing-cat-Professional">
													Professional
												</p>
											</div>
											<div className="c-pricing-table__tier--cornflower">
												<p className="text-center pricing-cat-Business">
													Business
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							className="container no-side-space"
							style={{ maxWidth: "none" }}
						>
							<div className="c-pricing-table__table--cornflower">
								<div className="c-pricing-table__row--cornflower">
									<div className="c-pricing-table__info--cornflower pricing-table-description sm">
										Users
									</div>
									<div
										className="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile"
										style={{ flex: "3" }}
									>
										<p className="p-sm text-center">Maximum of 3 seats</p>
									</div>
									<div
										className="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile"
										style={{ flex: "3", transform: "scale(0)", opacity: "0" }}
									>
										<p className="p-sm text-center">No seat maximum</p>
									</div>
									<div
										className="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile "
										style={{ flex: "3", transform: "scale(0)", opacity: "0" }}
									>
										<p className="p-sm text-center">No seat maximum</p>
									</div>
								</div>
							</div>
						</div>
						<div
							className="container no-side-space"
							style={{ maxWidth: "none" }}
						>
							<div className="c-pricing-table__table--cornflower">
								<div className="c-pricing-table__row--cornflower">
									<div className="c-pricing-table__info--cornflower pricing-table-description sm">
										Contacts (Leads + People)
									</div>
									<div
										className="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile"
										style={{ flex: "3" }}
									>
										<p className="p-sm text-center">2,500</p>
									</div>
									<div
										className="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile"
										style={{ flex: "3", transform: "scale(0)", opacity: "0" }}
									>
										<p className="p-sm text-center">15,000</p>
									</div>
									<div
										className="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile "
										style={{ flex: "3", transform: "scale(0)", opacity: "0" }}
									>
										<p className="p-sm text-center">Unlimited</p>
									</div>
								</div>
							</div>
						</div>
						<br />
					</>
				)}
				<div className="container no-side-space" style={{ maxWidth: "none" }}>
					<h4 className={includeNavigation ? "include-nav" : "no-nav"}>
						{tableTitle}
					</h4>
					<div className="c-pricing-table__table--cornflower">
						{pricingFeatures.map((feature) => (
							<div className="c-pricing-table__row--cornflower">
								<div className="c-pricing-table__info--cornflower pricing-table-description sm">
									{feature.titleLink?.length ? (
										<a href={feature.titleLink} target="_blank">
											{feature.title}
										</a>
									) : (
										feature.title
									)}
								</div>
								<p>*</p>
								<div
									className="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile"
									style={{ flex: "3" }}
								>
									{feature.basicTierCheckmark ? (
										<i className="notranslate material-icons done">done</i>
									) : feature.basicTierText?.length ? (
										<p className="p-sm text-center">{feature.basicTierText}</p>
									) : (
										<i className="notranslate material-icons close">close</i>
									)}
								</div>
								<div
									className="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile"
									style={{ flex: "3", transform: "scale(0)", opacity: "0" }}
								>
									{feature.professionalTierCheckmark ? (
										<i className="notranslate material-icons done">done</i>
									) : feature.professionalTierText?.length ? (
										<p className="p-sm text-center">
											{feature.professionalTierText}
										</p>
									) : (
										<i className="notranslate material-icons close">close</i>
									)}
								</div>
								<div
									className="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile "
									style={{ flex: "3", transform: "scale(0)", opacity: "0" }}
								>
									{feature.businessTierCheckmark ? (
										<i className="notranslate material-icons done">done</i>
									) : feature.businessTierText?.length ? (
										<p className="p-sm text-center">
											{feature.businessTierText}
										</p>
									) : (
										<i className="notranslate material-icons close">close</i>
									)}
								</div>
							</div>
						))}
						{footnote?.length && (
							<div className="c-pricing-table__footnote">{footnote}</div>
						)}
					</div>
					{tableTitle == "Integrations" && (
						<>
							<div>
								<a
									target="_blank"
									style={{
										display: "block",
										padding: "13px",
										fontSize: "16px",
									}}
									href="/integrations"
								>
									Read more about our integrations
								</a>
							</div>
							<p
								style={{
									fontSize: "small",
									color: "gray",
									marginTop: "0px",
									paddingLeft: "13px",
								}}
							>
								*For Professional plans, LinkedIn integration is available via{" "}
								<a href="http://leadjet.io">leadjet.io</a> at discounted rate.
							</p>
						</>
					)}
				</div>
				{lastInstance && <div class="floating-ending-point--pricing"></div>}
			</section>
			<Script
				src="/js/lazyload.min.js"
				strategy="afterInteractive"
				onLoad={() => {
					LazyLoad.js(
						[
							"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js",
							"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js",
						],
						function () {
							LazyLoad.css([
								"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css",
								"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css",
							]);
							// Scrolling logic
							window.addEventListener("scroll", function (e) {
								// Positions
								let startingFloatingEl = $(".floating-starting-point--pricing")
									.first()
									.offset().top;
								let endingFloatingEl = $(".floating-ending-point--pricing")
									.first()
									.offset().top;
								let scrollTop = $(window).scrollTop();

								if (endingFloatingEl < scrollTop + 90) {
									$(".floating-container--pricing").removeClass(
										"floating-active"
									);
								} else if (startingFloatingEl < scrollTop) {
									$(".floating-container--pricing").addClass("floating-active");
								} else {
									$(".floating-container--pricing").removeClass(
										"floating-active"
									);
								}
							});

							$(".pricing-table-nav-slider").not(".slick-initialized").slick({
								arrows: true,
								infinite: false,
								prevArrow:
									'<img class="pricing-arrow pricing-prev-arrow" src="/imgs/pricing/ArrowPrev-24px.svg" alt="Prev arrow">',
								nextArrow:
									'<img class="pricing-arrow pricing-forward-arrow" src="/imgs/pricing/arrowForward-24px.svg" alt="Forward arrow">',
							});

							$(".pricing-table-nav-slider").on(
								"swipe",
								function (event, slick, direction) {
									// console.log(direction);
									// left
								}
							);

							$(".pricing-table-nav-slider").on(
								"beforeChange",
								function (event, slick, currentSlide, nextSlide) {
									$(".price-table-mobile .pricing-table-cat-content").css({
										transform: "scale(0)",
										opacity: "0",
										transition: "0.25s",
									});
								}
							);

							$(".pricing-table-nav-slider").on(
								"afterChange",
								function (event, slick, currentSlide) {
									if (
										$(".price-table-mobile .slick-active p").hasClass(
											"pricing-cat-Basic"
										)
									) {
										$(
											".price-table-mobile .c-pricing-table__row--cornflower .basic-mobile"
										).css("display", "block");

										$(".price-table-mobile .basic-mobile").css({
											transform: "scale(1)",
											opacity: "1",
											transition: "0.25s",
										});
									}
									if (
										$(".price-table-mobile .slick-active p").hasClass(
											"pricing-cat-Professional"
										)
									) {
										$(".professional-mobile").css("display", "block");
										$(".price-table-mobile .professional-mobile").css({
											transform: "scale(1)",
											opacity: "1",
											transition: "0.25s",
										});
									}
									if (
										$(".price-table-mobile .slick-active p").hasClass(
											"pricing-cat-Business"
										)
									) {
										$(".business-mobile").css("display", "block");
										$(".price-table-mobile .business-mobile").css({
											transform: "scale(1)",
											opacity: "1",
											transition: "0.25s",
										});
									}
								}
							);
						}
					);
				}}
			/>
		</>
	);
};

export default PricingTable;
