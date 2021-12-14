// Next imports
import Script from "next/script";
import Link from "next/link";
// Package imports
import ModalBase from "./ModalBase/ModalBase";

const PersonalizationModal = ({}) => {
	return (
		<>
			<ModalBase template="personalization-base" style={{ maxWidth: "513px" }}>
				<style
					jsx={`
          .l-modal--content .modal-content .container {
            padding: 60px !important;
            max-height: 100vh !important;
            overflow-y: auto !important;
          }`}
				></style>
				<div id="base-personalization-popup-template">
					<div className="initial-state">
						<div className="row extra-bottom-margin--x-small">
							<div className="col-md-12" style={{ textAlign: "center" }}>
								<div id="main-image-container" className="c-image">
									<img
										src="https://copper.objects.frb.io/imgs/personalization/copper-spin.gif"
										alt="Image on pop up"
										style={{
											maxWidth: "277.75px",
											maxHeight: "245.52px",
											boxShadow: "5px 6px 5px #b9b8b8",
										}}
									/>
								</div>
							</div>
						</div>
						<div className="row">
							<div
								className="col-md-12 leader-titles"
								style={{ textAlign: "center" }}
							>
								<h4
									id="main-title"
									className="extra-bottom-margin--xx-medium-small"
								>
									See how Copper can work for you
								</h4>
								<p id="main-paragraph" className="p-sm">
									Try Copper free for 14 days. No credit card needed.
								</p>
							</div>
						</div>
						<div className="row">
							<div
								className="col-md-12 leader-titles"
								style={{ textAlign: "center" }}
							>
								<Link href="https://www.copper.com/signup">
									<a id="do-success" className="c-button c-button--hot-pink">
										Try Free
									</a>
								</Link>
								<Link href="#">
									<a id="do-close" className="c-button c-button--outline">
										No thanks
									</a>
								</Link>
							</div>
						</div>
					</div>
					<Script
						src="/js/lazyload.min.js"
						strategy="lazyload"
						onLoad={() => {
							LazyLoad.js(
								[
									"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js",
								],
								function () {
									$("#do-success").on("click", function () {
										ga(
											"send",
											"event",
											"FOSP-PopupCTA",
											"success-action",
											deviceId.status.status
										);
										// Since calendly is not available this will force an event on the marketo API
										if (Munchkin) {
											Munchkin.munchkinFunction("clickLink", {
												href: "/pricing/requested/1on1",
											});
										}

										// UI changes
										$(".initial-state").hide();
										$(".success-state").fadeIn("fast");
									});
									$("#do-close").on("click", function () {
										window.location.hash = "";
										$("#l-modal--overlay").fadeOut("fast");
									});
								}
							);
						}}
					></Script>
					<div className="success-state">
						<div className="row">
							<div className="col-md-12" style={{ textAlign: "center" }}>
								<div className="c-image">
									<img
										src="https://d2ydtwisqcxv72.cloudfront.net/landing/copper-logo.png"
										alt="Copper logo"
										style={{ maxWidth: "100%" }}
									/>
								</div>
							</div>
						</div>
						<div className="row">
							<div
								className="col-md-12 leader-titles"
								style={{ textAlign: "center" }}
							>
								<h3>Thanks & hang tight!</h3>
								<p className="p-sm">
									One of our reps will get in touch with you shortly for a
									one-on-one demo
								</p>
							</div>
						</div>
						<div className="row">
							<div
								className="col-md-12 leader-titles"
								style={{ textAlign: "center" }}
							>
								<Link href="#">
									<a id="success-close" className="c-button c-button--hot-pink">
										Back to Copper
									</a>
								</Link>
							</div>
						</div>
					</div>
					<script
						onLoad={() => {
							$("#success-close").on("click", function () {
								window.location.hash = "";
								$("#l-modal--overlay").fadeOut("fast");
							});
						}}
					></script>
				</div>
			</ModalBase>
		</>
	);
};

export default PersonalizationModal;
