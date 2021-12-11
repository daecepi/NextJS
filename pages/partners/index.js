import DefaultPageBase from "../../components/PageBase/DefaultPageBase";
import { getEntryBySectionHandle } from "../../lib/api";

const ParnersPage = ({ entry, globals }) => {
	return (
		<DefaultPageBase
			classNameOverride={"partners"}
			entry={entry}
			globals={globals}
		>
			{/* New Hero */}
			<section className="c-hero--split landing-hero midnight no-transition ">
				<div className="c-image">
					<picture>
						<source
							type="image/webp"
							srcset="https://copper.objects.frb.io/imgs/partners/Partners-Landing-Page-Hero.webp"
							alt="Partner page's hero image"
						/>
						<source
							type="image/png"
							srcset="https://copper.objects.frb.io/imgs/partners/Partners-Landing-Page-Hero.jpg"
							alt="Partner page's hero image"
						/>
						<img
							src="https://copper.objects.frb.io/imgs/partners/Partners-Landing-Page-Hero.jpg"
							alt="Partner page's hero image"
						/>
					</picture>
				</div>
				<div className="container">
					<div className="row row--no-reverse">
						{/* Content side */}
						<div id="main-hero-copy-col" className="col-md-5 c-valign--middle">
							<div className="hero-text">
								<h2>
									Copper Partner Program<span className="t-hot-pink">.</span>
								</h2>
								<p style={{ textAlign: "left" }}>
									Let's work together to help our customers thrive. Partners
									bridge the gap between productivity and CRM for Google
									Workspace Users.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Three card column | Tools Categories */}
			<section>
				<div
					className="container tools-category extra-top-margin--small extra-bottom-margin--small"
					id="cards-section"
				>
					<h2 className="text-center">Technology Partners</h2>
					<div className="container">
						<div className="row extra-top-margin--small">
							<div className="col-md-4 c-card--tool ">
								<div className="c-card__entry c-card--internal-padding c-card--permanent-shadow c-small-reducer ">
									<h4 className="c-card__entry-title">Marketing Automation</h4>
									<ul className="c-card-icons--list">
										<li
											className="c-tooltip c-card--icon"
											data-cy="first-tools-tooltip-icon"
										>
											<img
												className=""
												src="/imgs/partners/Marketing_Automation/Persistiq.png"
												width="45px"
												height="45px"
												alt="Persistiq"
											/>
											<span data-cy="first-tools-tooltip-text">
												PersistIQ
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/Marketing_Automation/Mailchimp.png"
												width="45px"
												height="45px"
												alt="Mailchimp"
											/>
											<span>
												Mailchimp
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/Marketing_Automation/Marketo.png"
												width="45px"
												height="45px"
												alt="Marketo"
											/>
											<span>
												Marketo
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/Marketing_Automation/Hubspot.png"
												width="45px"
												height="45px"
												alt="Hubspot"
											/>
											<span>
												Hubspot
												<i></i>
											</span>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/Marketing_Automation/Campaign_monitor.png"
												width="45px"
												height="45px"
												alt="Campaing Monitor"
											/>
											<span>
												Campaign Monitor
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/Marketing_Automation/Constant_Contact.png"
												width="45px"
												height="45px"
												alt="Constant Contact"
											/>
											<span>
												Constant Contact
												<i></i>
											</span>
										</li>
									</ul>
								</div>
								<div className="c-card__entry c-card--internal-padding c-card--permanent-shadow c-small-reducer">
									<h4 className="c-card__entry-title">Website & E-Commerce</h4>
									<ul className="c-card-icons--list">
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/Website_Y_ECommerce/SquareSpace.png"
												width="45px"
												height="45px"
												alt="SquareSpace"
											/>
											<span>
												Squarespace
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/Website_Y_ECommerce/Magento.png"
												width="45px"
												height="45px"
												alt="Magento"
											/>
											<span>
												Magento
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/Website_Y_ECommerce/Shopify.png"
												width="45px"
												height="45px"
												alt="Shopify"
											/>
											<span>
												Shopify
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/Website_Y_ECommerce/Typeform.png"
												width="45px"
												height="45px"
												alt="Typeform"
											/>
											<span>
												Typeform
												<i></i>
											</span>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/Website_Y_ECommerce/wufoo-logo-png-transparent 1.png"
												width="45px"
												height="45px"
												alt="Wufoo"
											/>
											<span>
												Wufoo
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-md-4 c-card--tool ">
								<div className="c-card__entry c-card--internal-padding c-card--permanent-shadow c-small-reducer">
									<h4 className="c-card__entry-title">Project Management</h4>
									<ul className="c-card-icons--list">
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/Project_Management/Asana.png"
												width="45px"
												height="45px"
												alt="Asana"
											/>
											<span>
												Asana
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/Project_Management/Basecamp.png"
												width="45px"
												height="45px"
												alt="Basecamp"
											/>
											<span>
												Basecamp
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/Project_Management/Trello.png"
												width="45px"
												height="45px"
												alt="Trello"
											/>
											<span>
												Trello
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/Project_Management/Smartsheet.png"
												width="45px"
												height="45px"
												alt="Smartsheet"
											/>
											<span>
												Smartsheet
												<i></i>
											</span>
										</li>
									</ul>
								</div>
								<div className="c-card__entry c-card--internal-padding c-card--permanent-shadow c-small-reducer">
									<h4 className="c-card__entry-title">Document Management</h4>
									<ul className="c-card-icons--list">
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/Document_Management/Docusign.png"
												width="45px"
												height="45px"
												alt="Docusign"
											/>
											<span>
												DocuSign
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/Document_Management/Panda Doc.png"
												width="45px"
												height="45px"
												alt="Panda Doc"
											/>
											<span>
												Panda Doc
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/Document_Management/Hellosign.png"
												width="45px"
												height="45px"
												alt="Hellosign"
											/>
											<span>
												HelloSign
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
									</ul>
								</div>
								<div className="c-card__entry c-card--internal-padding c-card--permanent-shadow c-small-reducer">
									<h4 className="c-card__entry-title">VoIP/Telephone & SMS</h4>
									<ul className="c-card-icons--list">
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/VoIP_Telephone/Aircall.png"
												width="45px"
												height="45px"
												alt="Aircall"
											/>
											<span>
												Aircall
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/VoIP_Telephone/RingCentral.png"
												width="45px"
												height="45px"
												alt="RingCentral"
											/>
											<span>
												RingCentral
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/VoIP_Telephone/JustCall.png"
												width="45px"
												height="45px"
												alt="JustCall"
											/>
											<span>
												JustCall
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/VoIP_Telephone/BurstSMS.png"
												width="45px"
												height="45px"
												alt="BurstSMS"
											/>
											<span>
												BurstSMS
												<i></i>
											</span>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/VoIP_Telephone/Twillio.png"
												width="45px"
												height="45px"
												alt="Twillio"
											/>
											<span>
												Twillio
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-md-4 c-card--tool ">
								<div className="c-card__entry c-card--internal-padding c-card--permanent-shadow c-small-reducer">
									<h4 className="c-card__entry-title">
										Sales Engagement & Social
									</h4>
									<ul className="c-card-icons--list">
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/Sales_Engagement_Y_Social/Slack.png"
												width="45px"
												height="45px"
												alt="Slack"
											/>
											<span>
												Slack
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/Sales_Engagement_Y_Social/Intercom.png"
												width="45px"
												height="45px"
												alt="Intercom"
											/>
											<span>
												Intercom
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/Sales_Engagement_Y_Social/LinkedIn.png"
												width="45px"
												height="45px"
												alt="LinkedIn"
											/>
											<span>
												LinkedIn
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/Sales_Engagement_Y_Social/Outreach.png"
												width="45px"
												height="45px"
												alt="Outreach"
											/>
											<span>
												Outreach
												<i></i>
											</span>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/Sales_Engagement_Y_Social/Drift.png"
												width="45px"
												height="45px"
												alt="Drift"
											/>
											<span>
												Drift
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/Sales_Engagement_Y_Social/facebook ads.png"
												width="45px"
												height="45px"
												alt="Facebook ads"
											/>
											<span>
												Facebook Ads
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/Sales_Engagement_Y_Social/Reply.png"
												width="45px"
												height="45px"
												alt="Reply"
											/>
											<span>
												Reply
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
									</ul>
								</div>
								<div className="c-card__entry c-card--internal-padding c-card--permanent-shadow c-small-reducer">
									<h4 className="c-card__entry-title">
										CPQ/Billing & Accounting
									</h4>
									<ul className="c-card-icons--list">
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/CPQ-Billing_Accounting/QuickBooks.png"
												width="45px"
												height="45px"
												alt="QuickBooks"
											/>
											<span>
												QuickBooks
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/CPQ-Billing_Accounting/Xero.png"
												width="45px"
												height="45px"
												alt="Xero"
											/>
											<span>
												Xero
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/CPQ-Billing_Accounting/Zuora.png"
												width="45px"
												height="45px"
												alt="Zuora"
											/>
											<span>
												Zuora
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/CPQ-Billing_Accounting/ORacle.png"
												width="45px"
												height="45px"
												alt="Oracle"
											/>
											<span>
												Oracle
												<i></i>
											</span>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/CPQ-Billing_Accounting/Netsuite.png"
												width="45px"
												height="45px"
												alt="Netsuite"
											/>
											<span>
												NetSuite
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
										<li className="c-tooltip c-card--icon">
											<img
												className=""
												src="/imgs/partners/CPQ-Billing_Accounting/Vogsy.png"
												width="45px"
												height="45px"
												alt="Vogsy"
											/>
											<span>
												Vogsy
												<i></i>
											</span>
										</li>
										<li>
											<div className="spacer"></div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FORMS SECTION */}

			<script src="https://app-sj17.marketo.com/js/forms2/js/forms2.min.js"></script>

			{/* Pop up section for the form */}
			<div className="invisible-container" id="pop-over">
				<div className="container">
					<div className="col-md-12">
						<section className="c-e-book-gate__form h-padding-bottom extra-bottom-margin--medium">
							<div className="row">
								{/* One referal section */}
								<div
									data-cy="partners-referral-invisible-pop-over"
									className="col-md-5 t-aqua-mint-bullet-points invisible"
									id="referral"
								>
									<h2>
										Apply today<span className="t-hot-pink">.</span>
									</h2>
									<p className="extra-bottom-margin--x-small">
										Teamwork is everything. Join our{" "}
										<br className="mobile-disappear" />
										partner program so we can work{" "}
										<br className="mobile-disappear" />
										and win together!
										<br />
										<br />
										Do you have customers evaluating a CRM for{" "}
										<br className="mobile-disappear" />
										Google Workspace? In the Referral Partner tier, you will{" "}
										<br className="mobile-disappear" />
										receive a unique link that you can send to{" "}
										<br className="mobile-disappear" />
										your customers and prospects to begin their{" "}
										<br className="mobile-disaappear" /> Free 14 Day Trial with
										Copper.
										<br />
										<br />
										Once you sign up, we will send you all of the{" "}
										<br className="mobile-disappear" />
										information you will need; including demo{" "}
										<br className="mobile-disappear" />
										video, pricing and key assets.
									</p>
									<span className="bold">Benefits</span>
									<ul>
										<li>10% on monthly or 1st Year</li>
										<li>1 Time Contract/Lead</li>
										<li>Unique Code provided</li>
									</ul>
									<p>
										Still have a question?{" "}
										<a
											href="mailto:partners@copper.com"
											className="t-link--volt__link"
										>
											Contact us.
										</a>
									</p>
								</div>

								{/* ISV technology section */}
								<div
									data-cy="partners-technology-invisible-pop-over"
									className="col-md-5 invisible"
									id="technology"
								>
									<h2>
										Apply today<span className="t-hot-pink">.</span>
									</h2>
									<p>
										Teamwork is everything. Join our{" "}
										<br className="mobile-disappear" />
										partner program so we can work{" "}
										<br className="mobile-disappear" />
										and win together!
									</p>
									<ul className="check-mark-ul">
										<li>
											<p>Build quickly</p>
											<p className="p-sm">
												Our open APIs and integration team
												<br />
												make it easier than ever.
											</p>
										</li>
										<li>
											<p>'Wow' customers</p>
											<p className="p-sm">
												Seamless experiences turn users
												<br />
												into evangelists.
											</p>
										</li>
										<li>
											<p>Grow faster</p>
											<p className="p-sm">Team work makes the dream work</p>
										</li>
									</ul>
									<div className="t-aqua-mint-bullet-points">
										<span className="bold">Benefits</span>
										<ul>
											<li>15% on monthly or 1st Year</li>
											<li>GTM Strategy</li>
											<li>Ongoing referrals</li>
											<li>Co-Marketing Opportunities</li>
											<li>Monthly and Quarterly Training</li>
										</ul>
									</div>
									<p>
										Still have a question?{" "}
										<a
											href="mailto:partners@copper.com"
											className="t-link--volt__link"
										>
											Contact us.
										</a>
									</p>
								</div>

								{/* Reseller section */}
								<div
									data-cy="partners-reseller-invisible-pop-over"
									className="col-md-5 invisible"
									id="reseller"
								>
									<h2>
										Apply today<span className="t-hot-pink">.</span>
									</h2>
									<p>
										If you're a Google Reseller or an{" "}
										<br className="mobile-disappear" />
										Implementation Partner looking to{" "}
										<br className="mobile-disappear" />
										expand your portfolio with a CRM{" "}
										<br className="mobile-disappear" />
										designed for Google Workspace, let's work together.
									</p>
									<p id="reseller-text">
										In the reseller tier with Copper Support,{" "}
										<br className="mobile-disappear" />
										you will resell Copper's licenses and pass{" "}
										<br className="mobile-disappear" />
										the customer back to Copper to onboard{" "}
										<br className="mobile-disappear" /> and service.
									</p>
									<p id="strategic-reseller-text">
										In this tier, the partner will own the entire{" "}
										<br className="mobile-disappear" />
										process including closing the deal,{" "}
										<br className="mobile-disappear" />
										onboarding and servicing the customer.{" "}
										<br className="mobile-disappear" />
										In order for the partner to qualify, you will{" "}
										<br className="mobile-disappear" />
										have to complete a Partner Sales{" "}
										<br className="mobile-disappear" />
										Enablement Training and Partner{" "}
										<br className="mobile-disappear" />
										Implementation Certification.
									</p>
									<span className="bold" id="reseller-description-title">
										Reseller Partner with Copper's Support
									</span>
									<span
										className="bold"
										id="strategic-reseller-description-title"
									>
										Strategic Certified Reseller
									</span>
									<ul className="check-mark-ul" id="reseller-benefits-list">
										<li>
											<p>Copper sourced</p>
											<p className="p-sm">10% margin in perpetuity.</p>
										</li>
										<li>
											<p>Partner referal</p>
											<p className="p-sm">25% margin in perpetuity.</p>
										</li>
									</ul>
									<ul
										className="check-mark-ul"
										id="strategic-reseller-benefits-list"
									>
										<li>
											<p>Copper sourced</p>
											<p className="p-sm">20% margin in perpetuity.</p>
										</li>
										<li>
											<p>Partner referal</p>
											<p className="p-sm">30% margin in perpetuity.</p>
										</li>
									</ul>
									<div className="t-aqua-mint-bullet-points ">
										<span className="bold">Benefits</span>
										<ul id="reseller-list">
											<li>Resell Copper licenses</li>
											<li>Copper to service onboard</li>
											<li>Joint GTM Strategy</li>
											<li>Co-Marketing Opportunities</li>
											<li>Quarterly Training</li>
										</ul>
										<ul id="strategic-reseller-list">
											<li>Resell Copper and services</li>
											<li>Support Level 1 and Level 2</li>
											<li>GTM Strategy</li>
											<li>Co-Marketing Opportunities</li>
											<li>Monthly and Quarterly Training</li>
											<li>Executive Alignment</li>
										</ul>
									</div>
									<p>
										Still have a question?{" "}
										<a
											href="mailto:partners@copper.com"
											className="t-link--volt__link"
										>
											Contact us.
										</a>
									</p>
								</div>
								<div className="col-md-6 offset-md-1">
									<div className="c-form">
										<div id="landing-form-snip c-form" className="sl_swap">
											<div className="online-marketo">
												<form id="mktoForm_2102"></form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>

			<div className="invisible-container" id="success">
				<section className="c-cols c-cols-alternate extra-top-margin--small no-bottom-padding">
					<div className="container">
						<div className="row">
							<div className="col-md-6 order-2">
								<div className="c-image c-image--drop-right c-image--shadow ">
									<picture>
										<source
											type="image/webp"
											srcset="/imgs/partners/Confirmation_Image.webp"
											style={{ marginRight: "20px" }}
											className="drop-right__img no-shadow"
											alt="Thank you from Copper"
										/>
										<source
											type="image/png"
											srcset="/imgs/partners/Confirmation_Image.png"
											style={{ marginRight: "20px" }}
											className="drop-right__img no-shadow"
											alt="Thank you from Copper"
										/>
										<img
											style={{ marginRight: "20px" }}
											className="drop-right__img no-shadow"
											src="/imgs/partners/Confirmation_Image.png"
											alt="Thank you from Copper"
										/>
									</picture>
								</div>
							</div>
							<div className="col-md-5 c-valign--top order-1">
								<div>
									<h2>
										Thank you<span className="t-hot-pink">.</span>
									</h2>
									<p>
										We're excited that you're interested in{" "}
										<br className="mobile-disappear" />
										joining the Copper Partner Program.{" "}
										<br className="mobile-disappear" />
										We'll be in touch with you shortly.
										<br className="mobile-disappear" />
										<br />
										<br />
										Still have questions?
										<br />
										Email us at{" "}
										<a
											href="mailto:partners@copper.com"
											className="t-link--volt__link"
										>
											partners@copper.com
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</DefaultPageBase>
	);
};

export default ParnersPage;

export async function getStaticProps(context) {
	const res = await getEntryBySectionHandle("partners", "partners");
	return {
		props: {
			entry: res.entry,
			globals: res.globalSets,
		}, // will be passed to the page component as props
		revalidate: 120, // in seconds
	};
}
