import Head from "next/head";
import HeroSinglePages from "../../components/Blocks/HeroTypes/HeroSinglePages";
import Jumble from "../../components/SinglesComponents/Jumble/Jumble";
import Footer from "../../components/Footer/Footer";
import CallOut from "../../components/SinglesComponents/CallOut/CallOut";
import NuumbersSection from "../../components/SinglesComponents/NumbersSection.js/NumbersSection";
import RelatedContent from "../../components/SinglesComponents/RelatedContent/RelatedContent";
import FinalPleaHero from "../../components/SinglesComponents/FinalPleadHero/FinalPleaHero";
import NavigationDefault from "../../components/Navigation/NavigationDefault";
import SingleTwoColCraft from "../../components/SinglesComponents/SingleTwoCol/SingleTwoColCraft";
import TwoColModule from "../../components/Blocks/TwoColModule";
export default function CorporateDevCrm({}) {
	return (
		<>
			<Head>
				// Responsive meta tag
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				// bootstrap CDN
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
					crossOrigin="anonymous"
				/>
				<script
					src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
					integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
					crossOrigin="anonymous"
				></script>
			</Head>
			<NavigationDefault />
			<HeroSinglePages
				pageColorcClass="--corp-dev"
				eyebrow="COPPER FOR CORPORATE DEVELOPMENT"
				title="Build your best deal flow with Copper."
				copy="Manage your pipeline and nurture founder relationships right from your inbox."
				//imageUrl="/imgs/industry/industry-agency-hero@2x.jpg"
			/>
			<SingleTwoColCraft
				image={[
					{
						url: "https://copper.objects.frb.io/imgs/industry/corp-dev/industry-corp-dev-logo-cloud.png",
						title: "Cloud logo",
					},
				]}
				forcedImage={
					<picture>
						<source
							type="image/webp"
							srcset="https://copper.objects.frb.io/imgs/industry/corp-dev/industry-corp-dev-logo-cloud.webp"
							alt="Industry corp cloud logo"
						/>
						<source
							type="image/png"
							srcset="https://copper.objects.frb.io/imgs/industry/corp-dev/industry-corp-dev-logo-cloud.png"
							alt="Industry corp cloud logo"
						/>
						<img
							src="https://copper.objects.frb.io/imgs/industry/corp-dev/industry-corp-dev-logo-cloud.png"
							alt="Industry corp cloud logo"
							style={{ display: "inline", textAlign: "center" }}
						/>
					</picture>
				}
				title="The Google Workspace recommended CRM"
				description="You live in Gmail. So does Copper - so you can continue to work directly out of your inbox."
				eyebrow={undefined}
				//linkText="See customer stories"
				// linkUrl="/customers"
			/>
			<Jumble
				backgroundColor="eggplant"
				eyebrow="ONE CENTRAL SYSTEM"
				title={`No more\nscattered data.`}
				copy="Copper tracks every founder, CEO, and company touch point so you never lose important tribal knowledge. All your emails, company data points, term sheets, models, and diligence notes are automatically attached to the relevant contact record. Finally, all your deal data in one central place, so the next time your CFO asks for an update—you'll have it."
				imageUrl="/imgs/industry/industry-corp-dev-IMG-01.png"
				//ctaText=""
				//ctaUrl=""
			/>
			<TwoColModule
				eyebrow="ZERO DATA ENTRY"
				richText={
					<div>
						<h2>Spend time on new acquisitions, not data entry.</h2>
						<p>
							Copper automatically pulls in contact details and important
							company data from your email and the web—without you having to
							update it manually. Instead of spending hours maintaining a
							database, your team can focus on due diligence and outreach to get
							more exciting deals in the pipeline.
						</p>
					</div>
				}
				linkText="See how Howzer grew their real estate agent team"
				linkUrl="/blog/advoc8-agency-case-study"
				image={[
					{
						url: "/imgs/industry/CorpDev-Ui.png",
						title: "Stop the forecasting guessing games",
					},
				]}
				imageWidth="1150"
				imageHeigh="1112"
				imageOrientation="left"
				slug={"corporate-development-crm"}
				loopIndex={0}
				forcedCtas={
					<a href="/blog/storm-ventures-case-study" className="t-link">
						How Storm Ventures focused on acquisitions.
					</a>
				}
			/>
			<TwoColModule
				eyebrow="DEAL TRACKING"
				richText={
					<div>
						<h2>Manage multiple deal pipelines.</h2>
						<p>
							Copper’s customizable drag-and-drop pipelines make it easy to get
							a visual representation of current deals and investments in real
							time. Instantly see where each deal is in the process and how many
							deals are in each stage. Always know how your team is contributing
							to the top business growth priorities.
						</p>
					</div>
				}
				image={[
					{
						url: "/imgs/industry/industry-corp-dev-IMG-03.png",
						title: "Stop the forecasting guessing games",
					},
				]}
				linkText="Watch how Reali strengthens relationships."
				linkUrl="/blog/reali-case-study"
				imageWidth="1344"
				imageHeigh="1082"
				imageOrientation={"right"}
			/>

			<TwoColModule
				eyebrow="NATIVE GOOGLE WORKSPACE INTEGRATION "
				richText={
					<div>
						<h2>Manage relationships right from Gmail.</h2>
						<p>
							Copper automatically pulls in contact details and important
							company data from your email and the web—without you having to
							update it manually. Instead of spending hours maintaining a
							database, your team can focus on due diligence and outreach to get
							more exciting deals in the pipeline.
						</p>
					</div>
				}
				linkText="See how Howzer grew their real estate agent team"
				linkUrl="/blog/advoc8-agency-case-study"
				image={[
					{
						url: "/imgs/industry/CorpDev-Ui.png",
						title: "Stop the forecasting guessing games",
					},
				]}
				imageWidth="1150"
				imageHeigh="1112"
				imageOrientation="left"
				slug={"corporate-development-crm"}
				loopIndex={0}
				forcedCtas={
					<a href="/blog/storm-ventures-case-study" className="t-link">
						How Storm Ventures focused on acquisitions.
					</a>
				}
			/>
			<section className="c-jumble c-jumble-background--graphite c-jumble--align-left no-top-margin extra-bottom-margin">
				<div className="container">
					<div className="c-jumble__container col-md-10 no-padding">
						<div className="c-jumble__content c-valign--middle">
							<div className="row">
								<div className="col-md-6 order-md-2">
									<div className="c-panel__image c-panel__image--sm-padding c-panel--top--mint c-valign--middle rectangle--mint rectangle--bottom--left">
										<picture>
											<source
												type="image/webp"
												srcset="/imgs/industry/industry-corp-dev-logo-security.webp"
												alt="Need a custom integration?"
											/>
											<source
												type="image/png"
												srcset="/imgs/industry/industry-corp-dev-logo-security.png"
												alt="Need a custom integration?"
											/>
											<img
												src="/imgs/industry/industry-corp-dev-logo-security.png"
												alt="Need a custom integration?"
											/>
										</picture>
									</div>
								</div>
								<div className="col-md-6 order-md-1">
									<h2>Secure, even by Google Cloud's standards.</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*<Quote></Quote>*/}
			<CallOut title={"Because you have deals to close."} />
			<NuumbersSection
				eyebrow={"BY THE NUMBERS"}
				title={"Copper +<br/>Real Estate Agents"}
				image={[
					{
						url: "/imgs/industry/industry-corp-dev-IMG-04 new.jpg",
						title: "Industry cop dev image 2",
					},
				]}
				numbersTable={[
					{
						number: "5",
						subText: "hours per week saved on manual data entry",
					},
					{
						number: "30",
						subText: "days to deploy (on average)",
					},
					{
						number: "48%",
						subText: "more accurate reporting",
					},
					{
						number: "39%",
						subText: "increase in team collaboration when closing deals",
					},
				]}
			/>
			<RelatedContent />
			<FinalPleaHero
				title={`Start managing deals with Copper today.`}
				description={`No credit card required. Start your 14-day free trial today.`}
				imageUrl="/imgs/industry/industry-corp-dev-final-plea.jpg"
			/>

			<Footer></Footer>
		</>
	);
}
