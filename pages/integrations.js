import Head from "next/head";
import HeroProduct from "../components/Blocks/HeroTypes/HeroProduct";
import Footer from "../components/Footer/Footer";
import NavigationDefault from "../components/Navigation/NavigationDefault";
import CaseStudy from "../components/ProductsComponent/CaseStudy/CaseStudy";
import FinalCta from "../components/ProductsComponent/FinalCta";
import ProductTwoUp from "../components/ProductsComponent/ProductTwoUp/ProductTwoUp";
import TwoUp from "../components/ProductsComponent/ProductTwoUp/TwoUp";

export default function Integrations() {
	return (
		<>
			<Head>
				<title>CRM Integration With Your Favorite Tools | Copper</title>
			</Head>
			<NavigationDefault
				buttons={{
					option: { text: "Try Free", ulr: "https://www.copper.com/signup" },
					login: { text: "Login", ulr: "https://app.copper.com/users/sign_in" },
				}}
			/>
			<HeroProduct
				backgroundColor="midnight"
				eyebrow="CRM INTEGRATION & MOBILE"
				title="What if your CRM solution, apps and tools worked together seamlessly?"
				copy="With Copper at the center, you can easily integrate your CRM with your go-to tools so you don’t have to hire a developer—or pick up a night class in coding."
				ctaOneText="Learn More"
				ctaOneUrl="https://www.copper.com/signup"
				imageUrl="https://copper.objects.frb.io/imgs/product/191223_Integrations_hero-optimized.webp"
			/>
			<section className="c-list-card">
				<div className="container">
					<div className="c-list-card__header c-align--center">
						<h2 className="col-sm-10 t-center">Featured Integrations</h2>
						<p className="col-sm-8 t-center">
							These are just some of the popular tools you can connect to Copper
							with a single click. We have dozens more.{" "}
						</p>
					</div>
					<div className="row">
						<a
							href="https://www.copper.com/google-workspace-crm"
							target="_blank"
							className="col-md-4 extra-top-margin--x-small"
						>
							<div className="c-list-card__card c-list-card__card--centered no-margin">
								<div className="c-list-card__image c-list-card__image--text c-list-card__card--no-outline c-valign--middle">
									<picture>
										<img
											src="https://copper.objects.frb.io/imgs/product/logo_Google.png"
											alt="Google Workspace"
											style={{ maxWidth: "200px", maxHeight: "140px" }}
										/>
									</picture>
								</div>
								<p className="p-sm">
									Class-leading, native integration with Gmail, Drive, and other
									Google Workspace apps.
								</p>
							</div>
						</a>

						<a
							href="/integrations/linkedin-crm-integration"
							target="_blank"
							className="col-md-4 extra-top-margin--x-small"
						>
							<div className="c-list-card__card c-list-card__card--centered no-margin">
								<div className="c-list-card__image c-list-card__image--text c-list-card__card--no-outline c-valign--middle">
									<picture>
										<img
											src="https://copper.objects.frb.io/imgs/product/LI-Logo.png"
											alt="LinkedIn"
											style={{ maxHeight: "200px", maxWidth: "200px" }}
										/>
									</picture>
								</div>
								<p className="p-sm">
									Prospect smarter and ditch the data entry with profiles at
									your fingertips
								</p>
							</div>
						</a>

						<a
							href="/integrations/slack-crm"
							target="_blank"
							className="col-md-4 extra-top-margin--x-small"
						>
							<div className="c-list-card__card c-list-card__card--centered no-margin">
								<div className="c-list-card__image c-list-card__image--text c-list-card__card--no-outline c-valign--middle">
									<picture>
										<source
											type="image/webp"
											srcset="/imgs/product/slack_logo.webp"
											alt="Slack"
										/>
										<source
											type="image/png"
											srcset="/imgs/product/slack_logo.png"
											alt="Slack"
										/>
										<img src="/imgs/product/slack_logo.png" alt="Slack" />
									</picture>
								</div>
								<p className="p-sm">
									Receive important Copper notifications in any Slack channel
								</p>
							</div>
						</a>

						<a
							href="#"
							target="_blank"
							className="col-md-4 extra-top-margin--x-small"
						>
							<div className="c-list-card__card c-list-card__card--centered no-margin">
								<div className="c-list-card__image c-list-card__image--text c-list-card__card--no-outline c-valign--middle">
									<picture>
										<img
											src="https://copper.objects.frb.io/imgs/product/Dropbox.svg"
											alt="Dropbox"
										/>
									</picture>
								</div>
								<p className="p-sm">
									Browse and link files and folders in Dropbox right from
									Copper.
								</p>
							</div>
						</a>

						<a
							href="/integrations/docusign-crm"
							target="_blank"
							className="col-md-4 extra-top-margin--x-small"
						>
							<div className="c-list-card__card c-list-card__card--centered no-margin">
								<div className="c-list-card__image c-list-card__image--text c-list-card__card--no-outline c-valign--middle">
									<picture>
										<source
											type="image/webp"
											srcset="/imgs/product/Docusign_logo.webp"
											alt="DocuSign"
										/>
										<source
											type="image/png"
											srcset="/imgs/product/Docusign_logo.png"
											alt="DocuSign"
										/>
										<img src="/imgs/product/Docusign_logo.png" alt="DocuSign" />
									</picture>
								</div>
								<p className="p-sm">
									Auto-fill templates that make it easy to send and sign
									e-documents
								</p>
							</div>
						</a>

						<a
							href="https://mailchimp.com/integrations/prosperworks/"
							target="_blank"
							className="col-md-4 extra-top-margin--x-small"
						>
							<div className="c-list-card__card c-list-card__card--centered no-margin">
								<div className="c-list-card__image c-list-card__image--text c-list-card__card--no-outline c-valign--middle">
									<picture>
										<source
											type="image/webp"
											srcset="/imgs/product/mailchimp_logo.webp"
											alt="MailChimp"
										/>
										<source
											type="image/png"
											srcset="/imgs/product/mailchimp_logo.png"
											alt="MailChimp"
										/>
										<img
											src="/imgs/product/mailchimp_logo.png"
											alt="MailChimp"
										/>
									</picture>
								</div>
								<p className="p-sm">
									Export contacts from Copper to MailChimp email campaigns
								</p>
							</div>
						</a>

						<a
							href="https://www.copper.com/integrations/quickbooks-crm"
							target="_blank"
							className="col-md-4 extra-top-margin--x-small"
						>
							<div className="c-list-card__card c-list-card__card--centered no-margin">
								<div className="c-list-card__image c-list-card__image--text c-list-card__card--no-outline c-valign--middle">
									<picture>
										<source
											type="image/webp"
											srcset="/imgs/product/QuickBooks_logo.webp"
											alt="Quickbooks"
											style={{ maxWidth: "200px" }}
										/>
										<source
											type="image/png"
											srcset="/imgs/product/QuickBooks_logo.png"
											alt="Quickbooks"
											style={{ maxWidth: "200px" }}
										/>
										<img
											src="/imgs/product/QuickBooks_logo.png"
											alt="Quickbooks"
											style={{ maxWidth: "200px" }}
										/>
									</picture>
								</div>
								<p className="p-sm">
									See any Quickbooks invoice status and amount on any record
								</p>
							</div>
						</a>

						<a
							href="https://www.ringcentral.com/apps/copper-ringcentral"
							target="_blank"
							className="col-md-4 extra-top-margin--x-small"
						>
							<div className="c-list-card__card c-list-card__card--centered no-margin">
								<div className="c-list-card__image c-list-card__image--text c-list-card__card--no-outline c-valign--middle">
									<picture>
										<source
											type="image/webp"
											srcset="/imgs/product/ringcentral_logo.webp"
											alt="Ring Central"
										/>
										<source
											type="image/png"
											srcset="/imgs/product/ringcentral_logo.png"
											alt="Ring Central"
										/>
										<img
											src="/imgs/product/ringcentral_logo.png"
											alt="Ring Central"
										/>
									</picture>
								</div>
								<p className="p-sm">
									Make, receive, and quick-log phone calls within Copper
								</p>
							</div>
						</a>

						<a
							href="/integrations/zendesk-crm"
							target="_blank"
							className="col-md-4 extra-top-margin--x-small"
						>
							<div className="c-list-card__card c-list-card__card--centered no-margin">
								<div className="c-list-card__image c-list-card__image--text c-list-card__card--no-outline c-valign--middle">
									<picture>
										<source
											type="image/webp"
											srcset="/imgs/product/zendesk_logo.webp"
											alt="Zendesk"
										/>
										<source
											type="image/png"
											srcset="/imgs/product/zendesk_logo.png"
											alt="Zendesk"
										/>
										<img src="/imgs/product/zendesk_logo.png" alt="Zendesk" />
									</picture>
								</div>
								<p className="p-sm">View support tickets on related records</p>
							</div>
						</a>

						<a
							href="https://www.copper.com/integrations/hubspot-crm"
							target="_blank"
							className="col-md-4 extra-top-margin--x-small"
						>
							<div className="c-list-card__card c-list-card__card--centered no-margin">
								<div className="c-list-card__image c-list-card__image--text c-list-card__card--no-outline c-valign--middle">
									<picture>
										<source
											type="image/webp"
											srcset="/imgs/product/hubspot_logo.webp"
											alt="HubSpot"
										/>
										<source
											type="image/png"
											srcset="/imgs/product/hubspot_logo.png"
											alt="HubSpot"
										/>
										<img src="/imgs/product/hubspot_logo.png" alt="HubSpot" />
									</picture>
								</div>
								<p className="p-sm">View subscriber lists and campaigns</p>
							</div>
						</a>

						<a
							href="https://outfunnel.com/copper-outfunnel-integration/"
							target="_blank"
							className="col-md-4 extra-top-margin--x-small"
						>
							<div className="c-list-card__card c-list-card__card--centered no-margin">
								<div className="c-list-card__image c-list-card__image--text c-list-card__card--no-outline c-valign--middle">
									<picture>
										<source
											type="image/webp"
											srcset="https://copper.objects.frb.io/imgs/product/outfunnel-logo-v2.webp"
											alt="Outfunnel"
										/>
										<source
											type="image/png"
											srcset="https://copper.objects.frb.io/imgs/product/outfunnel-logo-v2.png"
											alt="Outfunnel"
										/>
										<img
											src="https://copper.objects.frb.io/imgs/product/outfunnel-logo-v2.png"
											alt="Outfunnel"
										/>
									</picture>
								</div>
								<p className="p-sm">
									Start and stop targeted email campaigns and get lead context
									without leaving your inbox
								</p>
							</div>
						</a>

						<a
							href="https://aircall.io/call-center-software-integrations/copper/"
							target="_blank"
							className="col-md-4 extra-top-margin--x-small"
						>
							<div className="c-list-card__card c-list-card__card--centered no-margin">
								<div className="c-list-card__image c-list-card__image--text c-list-card__card--no-outline c-valign--middle">
									<picture>
										<source
											type="image/webp"
											srcset="/imgs/product/aircall-logo.webp"
											alt="AirCall"
										/>
										<source
											type="image/png"
											srcset="/imgs/product/aircall-logo.png"
											alt="AirCall"
										/>
										<img src="/imgs/product/aircall-logo.png" alt="AirCall" />
									</picture>
								</div>
								<p className="p-sm">
									Automatically log calls and sync with records in Copper
								</p>
							</div>
						</a>

						<a
							href="/integrations/copper-square-crm-integration"
							target="_blank"
							className="col-md-4 extra-top-margin--x-small"
						>
							<div className="c-list-card__card c-list-card__card--centered no-margin">
								<div className="c-list-card__image c-list-card__image--text c-list-card__card--no-outline c-valign--middle">
									<picture>
										<img
											src="https://copper.objects.frb.io/imgs/product/integrations/Square_logo.svg"
											alt="Square"
											style={{ maxWidth: "200px" }}
										/>
									</picture>
								</div>
								<p className="p-sm">
									Simplify invoices and revenue tracking; offer flexible payment
									options
								</p>
							</div>
						</a>

						<a
							href="/integrations/sow-software-solution-vogsy-integration"
							target="_blank"
							className="col-md-4 extra-top-margin--x-small"
						>
							<div className="c-list-card__card c-list-card__card--centered no-margin">
								<div className="c-list-card__image c-list-card__image--text c-list-card__card--no-outline c-valign--middle">
									<picture>
										<img
											src="https://copper.objects.frb.io/imgs/product/integrations/vogsy_logo-1.svg"
											alt="Vogsy"
											style={{ maxWidth: "200px" }}
										/>
									</picture>
								</div>
								<p className="p-sm">
									Easily create SOWs and quotes, forecast revenue without manual
									spreadsheet work
								</p>
							</div>
						</a>

						<a
							href="/integrations/xero-crm"
							target="_blank"
							className="col-md-4 extra-top-margin--x-small"
						>
							<div className="c-list-card__card c-list-card__card--centered no-margin">
								<div className="c-list-card__image c-list-card__image--text c-list-card__card--no-outline c-valign--middle">
									<picture>
										<source
											type="image/webp"
											srcset="/imgs/product/xero_logo.webp"
											alt="Xero"
										/>
										<source
											type="image/png"
											srcset="/imgs/product/xero_logo.png"
											alt="Xero"
										/>
										<img src="/imgs/product/xero_logo.png" alt="Xero" />
									</picture>
								</div>
								<p className="p-sm">
									View any Xero invoice status and amount on any record
								</p>
							</div>
						</a>
					</div>
				</div>
			</section>
			<div className="c-list-card__header c-align--center container">
				<h2 className="col-sm-10 t-center" style={{ maxWidth: "700px" }}>
					Need more? No problem. Connect to over 3000 apps with Zapier.
				</h2>
				<p className="col-sm-8 t-center" style={{ maxWidth: "700px" }}>
					With Copper, you have the power to build your own app connections to
					work the way you want using the CRM application for data integration.
				</p>
				<ul className="remove-list-bullets">
					<li>
						<a
							href="https://developer.copper.com/"
							style={{ color: "#ff5d84" }}
							target="_blank"
						>
							Open API
						</a>
					</li>
					<li>
						<a
							href="https://support.copper.com/hc/en-us/articles/115000333246-Working-with-the-Zapier-Integration"
							style={{ color: "#ff5d84" }}
							target="_blank"
						>
							Zapier
						</a>
					</li>
				</ul>
				<div
					className="zapier-implementation col-sm-8 t-center"
					style={{
						padding: "40px",
						boxShadow:
							"0px 0px 8px rgb(0 0 0 / 5%), 0px 4px 8px rgb(0 0 0 / 15%)",
						borderRadius: "9px",
						marginTop: "40px",
					}}
				>
					<script
						type="module"
						src="https://cdn.zapier.com/packages/partner-sdk/v0/zapier-elements/zapier-elements.esm.js"
					></script>
					<link
						rel="stylesheet"
						href="https://cdn.zapier.com/packages/partner-sdk/v0/zapier-elements/zapier-elements.css"
					/>
					<zapier-app-directory
						app="copper"
						theme="light"
						hide="facebook-lead-ads-legacy"
						applimit="6"
						zaplimit="4"
						zapstyle="row"
						cta="View Zap"
						introcopy="hide"
					></zapier-app-directory>
					{() => {
						return `<script>
					LazyLoad.js([
            'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js',
          ],function(){
            $(window).on('load',function(){
							var zapierEl = jQuery('zapier-app-directory')[0].shadowRoot;
							var zapierItems = jQuery(zapierEl).find('zapier-app-select')[0].shadowRoot;
							var zappierSuggestions = jQuery(zapierEl).find('zapier-zap-suggestions')[0].shadowRoot;
							var zappierPrefab = jQuery(zappierSuggestions).find('zapier-prefab-row')[0].shadowRoot;
							jQuery(zapierEl).find('.scratch').remove();
							jQuery(zapierEl).find('br').remove();
							jQuery(zappierSuggestions).find('zapier-prefab-row').each(function(){
								var ctaContainer = $(this)[0].shadowRoot;
								var cta = jQuery(ctaContainer).find('zapier-cta')[0].shadowRoot;
								jQuery(cta).find('a').css('width','70px')
							});
							jQuery(zapierItems).find('.connect-this').css('text-align','left');
							jQuery(zapierItems).find('.with-this').css('text-align','left');

							$('.zapier-implementation').on('click',function(){
								setTimeout(function(){
								var zapierEl = jQuery('zapier-app-directory')[0].shadowRoot;
								var zapierItems = jQuery(zapierEl).find('zapier-app-select')[0].shadowRoot;
								var zappierSuggestions = jQuery(zapierEl).find('zapier-zap-suggestions')[0].shadowRoot;
								var zappierPrefab = jQuery(zappierSuggestions).find('zapier-prefab-row')[0].shadowRoot;
								jQuery(zapierEl).find('.scratch').remove();
								jQuery(zapierEl).find('br').remove();
								jQuery(zappierSuggestions).find('zapier-prefab-row').each(function(){
									var ctaContainer = $(this)[0].shadowRoot;
									var cta = jQuery(ctaContainer).find('zapier-cta')[0].shadowRoot;
									jQuery(cta).find('a').css('width','70px')
								});
								jQuery(zapierItems).find('.connect-this').css('text-align','left');
								jQuery(zapierItems).find('.with-this').css('text-align','left');
								},500)
							})
            })


          });
					</script>`;
					}}
				</div>
				<p style={{ marginTop: "41px" }}>
					Don’t see what you’re looking for?{" "}
					<a href="https://zapier.com/apps/copper/integrations">
						Search on Zapier
					</a>
				</p>
			</div>
			<ProductTwoUp>
				<TwoUp
					eyebrow="OPEN APIS"
					title="Prefer APIs? We have that too."
					copy={
						<>
							Our{" "}
							<a
								href="https://developer.copper.com/"
								style={{ color: "#ff5d84" }}
							>
								Open API
							</a>{" "}
							allows you to access and build your own applications that interact
							with Copper.
						</>
					}
					imageUrl="https://copper.objects.frb.io/imgs/product/integrations-open-api-group2.png"
					imageWidth="635"
					imageHeight="637"
					aboutText="View the API documentation"
					aboutUrl="https://developer.copper.com"
				/>
			</ProductTwoUp>
			<CaseStudy
				eyebrow="Success Story"
				imageUrl="/imgs/product/191223_Integrations_QuotePhoto.png"
				imageWidth="341"
				imageHeight="450"
				quote={[
					"I love how Copper is able to grab information from LinkedIn and other tools. It provides us context around who we’re talking to, so that we’re more likely able to turn contacts into opportunities.",
				]}
				quoteby="JOHN LOGAN"
				company="TAS TRADESOFT"
				backgroundColor="indigo"
			/>
			<section class="c-cols c-cols-alternate product-page product-page-section">
				<div class="container">
					<div class="row extra-padding--bottom">
						<div class="col-md-6 order-2">
							<div class="c-image c-image--drop-right">
								<picture>
									<source
										type="image/webp"
										srcset="https://copper.objects.frb.io/imgs/integrations/200309_Integrations_UI02.webp"
										class="drop-right__img img-no-shadow"
										alt="Integration image 2"
									/>
									<source
										type="image/png"
										srcset="https://copper.objects.frb.io/imgs/integrations/200309_Integrations_UI02.png"
										class="drop-right__img img-no-shadow"
										alt="Integration image 2"
									/>
									<img
										class="drop-right__img img-no-shadow"
										src="https://copper.objects.frb.io/imgs/integrations/200309_Integrations_UI02.png"
										alt="Integration image 2"
									/>
								</picture>
							</div>
						</div>
						<div class="col-md-5 c-valign--middle order-1">
							<pre class="c-eyebrow c-eyebrow--dark">MOBILE APPS</pre>
							<h2>
								Take your business tools
								<br />
								and CRM integration solution on the go.
							</h2>
							<p>
								Copper's CRM software iOS and Android mobile applications make
								the sales process with your customers, prospects and team
								members easy, right from your phone — wherever you are. Each CRM
								application can help you with data integration and connection to
								every customer.
							</p>
							<div class="row">
								<div class="col-6 c-valign--middle">
									<a
										href="https://apps.apple.com/us/app/copper/id941438829"
										target="_blank"
									>
										<img
											class="img-fluid"
											src="/imgs/product/Download_on_the_App_Store_Badge.svg"
											alt="Download on the app store image"
										/>
									</a>
								</div>
								<div class="col-6 c-valign--middle">
									<a
										href="https://chrome.google.com/webstore/detail/copper-crm-for-gmail/hpfmedbkgaakgagknibnonpkimkibkla?hl=en"
										target="_blank"
									>
										<img
											class="img-fluid"
											src="/imgs/product/google-play-badge-01.svg"
											alt="Google play badge image"
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<FinalCta
				title="Make your life easier — and more organized — with Copper’s CRM solution."
				copy="Start your 14-day free trial today."
				ctaOneText="Try Free"
				ctaOneUrl="https://www.copper.com/signup"
				ctaTwoText="Request Demo"
				ctaTwoUrl="/demos"
				imageUrl="https://copper.objects.frb.io/imgs/product/integrations/191223_Integrations_finalplea.png"
			/>
			<Footer />
		</>
	);
}
