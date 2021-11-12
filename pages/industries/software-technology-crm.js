export default function SoftwareTechCrm({}) {
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
				pageColorcClass="--tech"
				eyebrow="COPPER FOR TECHNOLOGY COMPANIES"
				title="CRM minus the sales busy work."
				copy="Big and small software companies grow and scale faster with Copper."
				//imageUrl="/imgs/industry/industry-agency-hero@2x.jpg"
			/>
			<SingleTwoColCraft
				image={[
					{
						url: "/imgs/industry/Logo-cloud.png",
						title: "Cloud logo",
					},
				]}
				forcedImage={
					<picture>
						<source
							type="image/webp"
							srcset="/imgs/industry/Logo-cloud.webp"
							alt="Cloud logo"
						/>
						<source
							type="image/png"
							srcset="/imgs/industry/Logo-cloud.png"
							alt="Cloud logo"
						/>
						<img
							src="/imgs/industry/Logo-cloud.png"
							alt="Cloud logo"
							style={{ display: "inline", textAlign: "center" }}
						/>
					</picture>
				}
				webpSource={"/imgs/industry/Logo-cloud.webp"}
				title="A different kind of CRM for innovators and fast-movers."
				description="Software and technology companies at every stage of growth love Copper."
				eyebrow={undefined}
				//linkText="See customer stories"
				// linkUrl="/customers"
			/>
			<Jumble
				backgroundColor="graphite"
				eyebrow="BUILT FOR WORKSPACE"
				title="BUILT FOR GOOGLE WORKSPACE"
				copy="Copper is designed and built for Google Workspace so your team can do everything—from adding leads to closing deals right from your inbox."
				imageUrl="/imgs/industry/industry-tech-IMG-01-update@2x.png"
				ctaText="Learn More"
				ctaUrl="/g-suite-crm"
			/>
			<TwoColModule
				eyebrow="ZERO DATA ENTRY"
				richText={
					<div>
						<h2>Focus on deals, not on data entry.</h2>
						<p>
							Copper automatically inputs leads, contacts, account details,
							email history and more, so you can spend your time closing deals,
							not copying and pasting.
						</p>
					</div>
				}
				linkText="See how Howzer grew their real estate agent team"
				linkUrl="/blog/advoc8-agency-case-study"
				image={[
					{
						url: "/imgs/industry/tech_ui-01.png",
						title: "Stop the forecasting guessing games",
					},
				]}
				imageWidth="1150"
				imageHeigh="1112"
				imageOrientation="left"
				slug={"software-technology-crm"}
				loopIndex={0}
				forcedCtas={
					<a href="/resources/lumapps-case-study" class="t-link">
						LumApps manages 2,000% lead growth with Copper
					</a>
				}
			/>
			<TwoColModule
				eyebrow="DATA ACCURACY"
				richText={
					<div>
						<h2>Data you need to make the sale.</h2>
						<p>
							Copper creates clear and elegant reports that make it easy for
							everyone on your team to get the insights they need to close a
							deal: a bird’s eye view, a deep dive or anything in between.
						</p>
					</div>
				}
				image={[
					{
						url: "/imgs/industry/Tech_UI02.png",
						title: "Stop the forecasting guessing games",
					},
				]}
				linkText="Watch how Reali strengthens relationships."
				linkUrl="/blog/reali-case-study"
				imageWidth="1344"
				imageHeigh="1082"
				imageOrientation={"right"}
				forcedCtas={
					<a href="/blog/onesupport-growth-case-study" class="t-link">
						How OneSupport grew subscribers by 173%
					</a>
				}
			/>
			{/*<Quote></Quote>*/}
			<CallOut title={"Because you have work to do."} />
			<NuumbersSection
				eyebrow={"BY THE NUMBERS"}
				title={"Copper +<br/>Real Estate Agents"}
				image={[
					{
						url: "/imgs/industry/industry-tech-IMG-04@2x.jpg",
						title: "Industry tech image",
					},
				]}
				numbersTable={[
					{
						number: "13",
						subText: "hours per user per week saved on manual data entry",
					},
					{
						number: "50%",
						subText: "more accurate reporting",
					},
					{
						number: "43%",
						subText: "increase in team collaboration when closing deals",
					},
					{
						number: "36%",
						subText: "faster response time to prospects and clients",
					},
				]}
			/>
			<RelatedContent />
			<FinalPleaHero
				title={`Goodbye data entry
Hello, Copper.`}
				description={`No credit card required. Start your 14-day free trial today.`}
				imageUrl="/imgs/industry/industry-tech-final-plea@2x.jpg"
			/>

			<Footer></Footer>
		</>
	);
}
