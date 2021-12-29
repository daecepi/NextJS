import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
const Footer = () => {
	return (
		<footer className="c-footer footer-about">
			<div className="container">
				<div className="footer-and-social-div">
					<div className="footer__links__container">
						<div className="footer__links">
							<ul>
								<span
									className="footer__title pb-1 pt-0"
									style={{ marginTop: "19px" }}
								>
									<Image
										src="/imgs/copper_logo-white-sharp.svg"
										width="143"
										height="28"
									/>
								</span>
								<li>
									<Link href="/about">
										<a>Company</a>
									</Link>
								</li>
								<li>
									<Link href="/about#leadership">
										<a>Team</a>
									</Link>
								</li>
								<li>
									<Link href="/about#careers">
										<a>Careers</a>
									</Link>
								</li>
								<li>
									<Link href="/press">
										<a>Press Kit</a>
									</Link>
								</li>
								<li>
									<Link href="/contact">
										<a>Contact Us</a>
									</Link>
								</li>
								<li>
									<Link href="https://support.copper.com/hc/en-us/requests/new">
										<a target="_blank">Support Request</a>
									</Link>
								</li>
								<li>
									<Link href="/demos">
										<a>Talk to Sales</a>
									</Link>
								</li>
								<li>
									<Link href="/partners">
										<a>Become a Partner!</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className="footer__links">
							<ul>
								<span className="footer__title">Why Copper</span>
								<li>
									<Link href="/contact-management-software">
										<a>Organize Contacts</a>
									</Link>
								</li>
								<li>
									<Link href="/features/lead-tracking">
										<a>Track Leads & Deals</a>
									</Link>
								</li>
								<li>
									<Link href="/project-management-crm">
										<a>Manage Projects</a>
									</Link>
								</li>
								<li>
									<Link href="/features/pipeline-management">
										<a>Build Pipelines</a>
									</Link>
								</li>
								<li>
									<Link href="/features/email-tracking">
										<a>Track Emails & Tasks</a>
									</Link>
								</li>
								<li>
									<Link href="/sales-reporting">
										<a>Reporting & Insights</a>
									</Link>
								</li>
								<li>
									<Link href="/mobile-crm">
										<a>Mobile CRM</a>
									</Link>
								</li>
								<li>
									<Link href="/features">
										<a>See All Features</a>
									</Link>
								</li>
								<li>
									<Link href="/pricing">
										<a>Pricing</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className="footer__links">
							<ul>
								<span className="footer__title">Solutions</span>
								<li>
									<Link href="/industries/agency-crm">
										<a>Agency CRM</a>
									</Link>
								</li>
								<li>
									<Link href="/industries/software-technology-crm">
										<a>Technology CRM</a>
									</Link>
								</li>
								<li>
									<Link href="/industries/consulting-crm">
										<a>Consulting CRM </a>
									</Link>
								</li>
								<li>
									<Link href="/industries/real-estate-crm">
										<a>Real Estate CRM</a>
									</Link>
								</li>
								<li>
									<Link href="/small-business-crm">
										<a>Small Businesses</a>
									</Link>
								</li>
								<li>
									<Link href="/mid-market-crm">
										<a>Mid-Market</a>
									</Link>
								</li>
								<li>
									<Link href="/enterprise-crm">
										<a>Enterprise</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className="footer__links">
							<ul>
								<span style={{ minWidth: "155px" }} className="footer__title">
									CRM for Google Workspace
								</span>
								<li>
									<Link href="/g-suite-crm">
										<a>Google Workspace CRM </a>
									</Link>
								</li>
								<li>
									<Link href="/gmail-crm">
										<a>Gmail CRM</a>
									</Link>
								</li>
								<li>
									<Link href="/google-sheets-crm">
										<a>Google Sheets CRM</a>
									</Link>
								</li>
								<li>
									<Link href="https://workspace.google.com/partner/recommended/">
										<a>Official Google Workspace Partner</a>
									</Link>
								</li>
								<li>
									<Link href="https://chrome.google.com/webstore/detail/copper-crm-for-gmail/hpfmedbkgaakgagknibnonpkimkibkla?hl=en">
										<a>Chrome Store App</a>
									</Link>
								</li>
								<li>
									<Link href="https://play.google.com/store/apps/details?id=com.prosperworks.android&hl=en_US">
										<a>Android Mobile App</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className="footer__links">
							<ul>
								<span className="footer__title">Integrations</span>
								<li>
									<Link href="/integrations/slack-crm">
										<a>Slack</a>
									</Link>
								</li>
								<li>
									<Link href="/integrations/zendesk-crm">
										<a>Zendesk</a>
									</Link>
								</li>
								<li>
									<Link href="/integrations/hubspot-crm">
										<a>HubSpot</a>
									</Link>
								</li>
								<li>
									<Link href="/integrations/quickbooks-crm">
										<a>QuickBooks</a>
									</Link>
								</li>
								<li>
									<Link href="/integrations/xero-crm">
										<a>Xero</a>
									</Link>
								</li>
								<li>
									<Link href="/integrations/docusign-crm">
										<a>Docusign</a>
									</Link>
								</li>
								<li>
									<Link href="/integrations">
										<a>See all integrations</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className="footer__links">
							<ul>
								<span className="footer__title">Learn</span>
								<li>
									<Link href="/resources">
										<a>Blog</a>
									</Link>
								</li>
								<li>
									<Link href="/webinars">
										<a>Webinars</a>
									</Link>
								</li>
								<li>
									<Link href="https://support.copper.com">
										<a>Help Center</a>
									</Link>
								</li>
								<li>
									<Link href="/resources">
										<a>Business Tools</a>
									</Link>
								</li>
								<li>
									<Link href="https://support.copper.com/hc/en-us/community/topics">
										<a>Community</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="c-footer__legal">
						<div className="c-footer__container">
							<div className="legal-info disappear-mobile">
								<address
									style={{
										fontSize: "20px",
										lineHeight: "30px",
										marginRight: "auto",
									}}
								>
									301 Howard St. #600 <br />
									San Francisco, CA 94105
								</address>
								<span
									style={{
										flexBasis: "unset",
										marginRight: "51px",
										marginTop: "auto",
									}}
									className="copyright"
								>
									Copper CRM, Inc. © 2021
								</span>
								<Link href="/privacy">
									<a
										style={{
											flexBasis: "unset",
											marginRight: "51px",
											marginTop: "auto",
											marginBottom: "20px",
										}}
									>
										Privacy
									</a>
								</Link>
								<Link href="/terms">
									<a
										style={{
											flexBasis: "unset",
											marginRight: "51px",
											marginTop: "auto",
											marginBottom: "20px",
										}}
									>
										Terms
									</a>
								</Link>
								<div
									style={{ marginTop: "auto", marginBottom: "3px" }}
									className="show-social d-none d-sm-none d-md-block"
								>
									<SocialLinks />
								</div>
							</div>
							<div className="legal-info appear-mobile">
								<span className="copyright">Copper CRM, Inc. © 2021</span>
								<Link href="/terms">
									<a>Privacy</a>
								</Link>
								<Link href="/terms">
									<a>Terms</a>
								</Link>
							</div>
							<div className="show-social d-md-none appear-mobile extra-bottom-margin--small">
								<SocialLinks />
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
