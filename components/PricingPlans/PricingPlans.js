import Link from "next/link";

import { useState } from "react";

import { useSyncContext } from "../../contexts/SyncContext";
import { getLink } from "../../helpers/propertyResolver";

const PricingPlans = ({
	header,
	subHeader,
	pricingPlans,
	reducePadding,
	removeCtas,
}) => {
	const [payAnnually, setPayAnnually] = useState(true);
	const syncedContext = useSyncContext();
	console.log("Synced context ", syncedContext);

	const handlePaymentType = () => {
		setPayAnnually(!payAnnually);
	};

	const heroPropertyresetter = () => {
		syncedContext.mainFormReference.style = {
			height: "fit-content",
			minHeight: "1px",
			marginTop: "30px",
			overflow: "visible",
			display: "none",
		};
	};
	const showSyncedHeroForm = () => {
		if (syncedContext.pageHeroSynced === 1) {
			heroPropertyReseter();

			if (false || typeof MktoForms2 === "undefined") {
				if ($("input#email").val() == "example.example.example@example.com")
					$("input#email").val("");
			} else {
				var generalForm = MktoForms2.getForm(syncedFormId);
				if (
					generalForm.getValues()["Email"] ==
					"example.example.example@example.com"
				)
					generalForm.setValues({ Email: "" });
			}
			document
				.querySelector("#initial-control")
				.setAttribute("display", "none");

			document
				.querySelector("#default-asset-container")
				.setAttribute("display", "none")
				.fadeOut(500, function () {
					document.querySelector("#main-form").setAttribute("display", "block");
				});

			window.location.hash = "synced-hero";
			scrollToElements();
		} else if (syncedContext.pageHeroSynced === 2) {
			// WORK TO DO MARKETO POINTER
			window.location.hash = "hero";
			scrollToElements();
		}
	};

	const scrollToElements = () => {
		syncedContext.mainFormReference.scrollIntoView({ behavior: "smooth" });
	};

	if (syncedContext.pageHeroSynced) {
		heroPropertyresetter();
	}

	return (
		<section
			className={`c-pricing-hero--cornflower price-hero ${
				reducePadding ? "h-reduce-padding" : ""
			}`}
		>
			<div
				className="fb-data-fetched hot-pink banner container extra-bottom-margin--x-small"
				style={{ display: "none" }}
			>
				<div className="row">
					<div className="col-md-10 offset-md-1">
						<p className="content"></p>
					</div>
				</div>
			</div>
			<div id="pricing-hero-copy-headers" className="container">
				<h2>{header ? header : ""}</h2>
				<p>{subHeader ? subHeader : ""}</p>
			</div>
			<div className="c-pricing-hero__toggle">
				<div className="c-pricing-hero__checkbox">
					<span style={{ marginRight: "5px" }}>Pay monthly </span>
					<label className="switch">
						<input
							onClick={handlePaymentType}
							type="checkbox"
							checked={payAnnually}
						/>
						<span id="toggle-control" className="toggle-slider round"></span>
					</label>
					<span style={{ marginLeft: "5px" }}>Pay annually</span>
				</div>
			</div>
			<div className="container">
				<div className="c-pricing-hero__plans-container square--top--left square--hot-pink circle--bottom--right extra-top-margin--xx-small">
					{pricingPlans.map((plan) => {
						const amountMonthly = Number(plan.billedMonthly.split("$")[1]);
						const amountAnnually = Number(plan.billedAnnually.split("$")[1]);
						return (
							<>
								<div
									className={`c-pricing-hero__plans ${
										plan.featured ? "featured" : ""
									}`}
								>
									<div
										className={`c-pricing-hero__plans__title ${
											plan.featured ? "featured" : ""
										} text-center`}
									>
										{plan.featured ? <p className="p-sm">MOST POPULAR</p> : ""}
										<h3 id={`${plan.planType}-plan`}>{plan.planType}</h3>
									</div>
									<div className="c-pricing-hero__plans__content justify-content-between text-center">
										<div className="c-pricing-hero__billing no-top-margin">
											<p
												className="p-sm extra-bottom-margin--xx-medium-small"
												style={{ marginLeft: "auto", marginRight: "auto" }}
											>
												{plan.paragraph}
											</p>

											{payAnnually ? (
												<div className="c-pricing-hero__annual desc js-pricingannual">
													<span
														className="pricing__number-row"
														style={{ color: "#FF3465" }}
													>
														<span className="previous-price">
															{plan.billedMonthly}
														</span>{" "}
														{plan.billedAnnually}
														{/* For promo code if Business is the featured plan */}
														{plan.featured && plan.planType === "Business" && (
															<span className="promo-code-container">
																<div className="code">Use code BIZ23X23</div>
															</span>
														)}
													</span>
													<div className="sub-description extra-bottom-margin--xx-small">
														<p
															className="c-pricing-hero__sub extra-top-margin--xx-small"
															style={{ minHeight: "36px" }}
														>
															Per user, per month paid annually.
															<br />
															Billed at{" "}
															<span style={{ textDecoration: "line-through" }}>
																${(amountMonthly * 12).toLocaleString()}
															</span>{" "}
															${(amountAnnually * 12).toLocaleString()}/year
														</p>
														<span className="special"></span>
													</div>
												</div>
											) : (
												<div className="c-pricing-hero__monthly desc js-pricingmonthly">
													<span className="pricing__number-row">
														{plan.billedMonthly}
													</span>
													<div className="sub-description extra-bottom-margin--xx-small">
														<p
															className="c-pricing-hero__sub extra-top-margin--xx-small"
															style={{ minHeight: "36px", padding: "0px 41px" }}
														>
															Per user, per month paid monthly with{" "}
															{plan.title == "Plan - Basic"
																? "a monthly"
																: "an annual"}{" "}
															commitment.
														</p>
													</div>
												</div>
											)}
											{/* <div className="sub-description">
												{subDescriptionSelector(plan)}
											</div> */}
										</div>
										<div className="c-pricing-plans__footer">
											{plan.ctas?.length > 0 && !removeCtas ? (
												<div className="c-pricing-plans__ctas">
													{plan.ctas.map((cta) => {
														const buttonColor = cta.buttonColor[0];
														if (
															syncedContext.pageHeroSynced !== undefined &&
															syncedContext.pageHeroSynced
														) {
															return (
																<a
																	className="t-link underline-hot-pink"
																	onclick={(e) => {
																		showSyncedHeroForm(e);
																	}}
																>
																	Get Demo
																</a>
															);
														} else {
															const ctaLink = getLink(cta.button);
															if (cta.modalTrigger) {
																return (
																	<Link href="/demos">
																		<a
																			className={`c-button c-button--${
																				buttonColor
																					? buttonColor.slug
																					: "outline"
																			}`}
																		>
																			{ctaLink.value}
																		</a>
																	</Link>
																);
															} else {
																return (
																	<Link href={ctaLink.href}>
																		<a
																			className={`c-button c-button--${
																				buttonColor
																					? buttonColor.slug
																					: "outline"
																			} ${
																				plan.featured ? "featured-button" : ""
																			} pricing-cta`}
																			data-plan-type={plan.planType}
																		>
																			{ctaLink.value}
																		</a>
																	</Link>
																);
															}
														}
													})}
												</div>
											) : (
												""
											)}
										</div>
									</div>
								</div>
							</>
						);
					})}
				</div>
			</div>
			<p className="p-xtra-sm extra-top-margin--x-small">
				Prices are in USD and don't include taxes and fees where applicable.
			</p>
		</section>
	);
};

export default PricingPlans;
