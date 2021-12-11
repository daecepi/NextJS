import Script from "next/script";

import DefaultPageBase from "../../components/PageBase/DefaultPageBase";
import { getEntryBySectionHandle } from "../../lib/api";

const PartnersSignup = ({ entry, globals }) => {
	return (
		<DefaultPageBase
			entry={entry}
			globals={globals}
			classNameOverride={entry.slug}
		>
			{/* Hero */}
			{/* Customers block */}
			<section className="c-cols extra-top-margin--small">
				<div className="container">
					<div className="row d-flex">
						<div className="col-md-6 offset-md-1 order-2">
							<div className="c-image c-image--center" style={{ margin: "0" }}>
								<div className="c-form">
									<div className="online-marketo">
										<form id="mktoForm_1285"></form>
									</div>
									<Script
										src="/js/lazyload.min.js"
										strategy="afterInteractive"
										onLoad={() => {
											LazyLoad.js(
												[
													"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js",
												],
												function () {
													MktoForms2.loadForm(
														"//app-sj17.marketo.com",
														"763-DVL-293",
														1285,
														function (form) {
															form.onSuccess(function (x, y) {
																form.getFormElem().css({
																	display: "none",
																});
																$(".js-form-success").css({
																	display: "block",
																});
																$(".js-form-success").addClass(
																	"h-demo-success"
																);
																return false;
															});
														}
													);
												}
											);
										}}
									></Script>

									<div className="js-form-success">
										<h3 className="h3">Thanks! We'll be in touch shortly.</h3>
										<a
											className="c-button"
											data-dismiss="modal"
											aria-label="Close"
										>
											Return to site
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-5 order-1 relative">
							<pre className="c-eyebrow">Partnership</pre>
							<h2>Sign up today.</h2>
							<p>
								Team work is everything. Join our partner program so we can work
								together and win together!
							</p>
							<p>
								Still have questions? <a href="/contact">Contact us</a>
							</p>
							<picture>
								<source
									type="image/webp"
									srcset="/imgs/partners/partners-IMG-03@2x.webp"
									alt="Partners image"
									style={{ position: "absolute", bottom: "0", width: "100%" }}
								/>
								<source
									type="image/png"
									srcset="/imgs/partners/partners-IMG-03@2x.png"
									alt="Partners image"
									style={{ position: "absolute", bottom: "0", width: "100%" }}
								/>
								<img
									src="/imgs/partners/partners-IMG-03@2x.png"
									alt="Partners image"
									style={{ position: "absolute", bottom: "0", width: "100%" }}
								/>
							</picture>
						</div>
					</div>
				</div>
			</section>
		</DefaultPageBase>
	);
};

export default PartnersSignup;

export async function getStaticProps(context) {
	const res = await getEntryBySectionHandle("partnersSignup", "sign-up");
	return {
		props: {
			entry: res.entry || {},
			globals: res.globalSets || [],
		}, // will be passed to the page component as props
		revalidate: 120, // in seconds
	};
}
