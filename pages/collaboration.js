import Link from "next/link";
import { useRecoilValue } from "recoil";
import { SyncedAtom } from "../atoms/SyncAtom";
import Footer from "../components/Footer/Footer";
import DefaultPageBase from "../components/PageBase/DefaultPageBase";
import { getEntryBySectionHandle } from "../lib/api";

const ProductivityPage = ({ entry, globals }) => {
	const syncedAtom = useRecoilValue(SyncedAtom);
	return (
		<DefaultPageBase entry={entry} globals={globals}>
			{/* Hero */}
			<section className="c-hero--split background--midnight">
				<div className="c-image">
					<picture>
						<source
							type="image/webp"
							srcset="/imgs/collaboration/collaboration-hero.webp"
							alt="Collaboration hero image"
						/>
						<source
							type="image/png"
							srcset="/imgs/collaboration/collaboration-hero.jpg"
							alt="Collaboration hero image"
						/>
						<img
							src="/imgs/collaboration/collaboration-hero.jpg"
							alt="Collaboration hero image"
						/>
					</picture>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-6 c-valign--middle">
							<pre className="c-eyebrow c-eyebrow--light">Collaboration</pre>
							<h1 className="t-white">Selling better together.</h1>
							<p style={{ maxWidth: "450px" }}>
								Copper makes collaboration easier so you close deals faster.
							</p>
							<div className="c-hero__buttons">
								<Link href={syncedAtom.generalSignupUrl}>
									<a className="c-button sendUTMsToAmplitude">Try Free</a>
								</Link>
								<Link href="/demos">
									<a className="c-button c-button--outline">Request Demo</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Product Focus */}
			<section className="c-product-focus">
				<div className="container">
					<div className="row">
						<div className="col-md c-align--center">
							<h2 className="col-md-10">Every customer moment. Captured.</h2>
							<p className="col-md-8">
								All of your teams have visibility into every single customer
								moment so you can pick up where your colleague left off knowing
								exactly what’s going on with every deal. (Hint: your customers
								will <i>love</i> this).
							</p>
							<div className="c-product-focus__media">
								<picture>
									<source
										type="image/webp"
										srcset="/imgs/collaboration/collaboration_ui01.webp"
										className="c-product-focus__media--no-shadow"
										alt="Collaboration image 1"
									/>
									<source
										type="image/png"
										srcset="/imgs/collaboration/collaboration_ui01.png"
										className="c-product-focus__media--no-shadow"
										alt="Collaboration image 1"
									/>
									<img
										className="c-product-focus__media--no-shadow"
										src="/imgs/collaboration/collaboration_ui01.png"
										alt="Collaboration image 1"
									/>
								</picture>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="c-cols c-cols-alternate">
				<div className="container">
					<div className="row">
						<div className="col-md-5 col-lg-4 offset-md-1 c-valign--middle">
							<div className="c-cols__copy">
								<pre className="c-eyebrow c-eyebrow--dark">Team Selling</pre>
								<h2>Real time sales help from others.</h2>
								<p>
									Selling takes a village. With Copper, your team can work
									together to deliver the best relationship experience at every
									stage of the sales process.
								</p>
								<Link href="blog/start-team-selling">
									<a className="t-link" target="_blank">
										Learn about team selling
									</a>
								</Link>
							</div>
						</div>
						<div className="col-md-5 offset-md-1">
							<div className="c-image c-image--left team-selling">
								<picture>
									<source
										type="image/webp"
										srcset="/imgs/collaboration/collaboration_ui02.webp"
										alt="Real time sales help from others"
									/>
									<source
										type="image/png"
										srcset="/imgs/collaboration/collaboration_ui02.png"
										alt="Real time sales help from others"
									/>
									<img
										src="/imgs/collaboration/collaboration_ui02.png"
										alt="Real time sales help from others"
									/>
								</picture>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Deal Close Callout */}
			<section className="c-single-column">
				<div className="container">
					<div className="col-md-10 offset-md-1 c-single-column__container h-hairline">
						<h2>Connected teams get it done.</h2>
						<div className="c-single-column__buttons">
							<Link href={syncedAtom.generalSignupUrl}>
								<a className="c-button">Start selling together today</a>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Content Jumble */}
			<section className="c-jumble c-jumble-background--eggplant c-jumble--align-right no-top-margin">
				<div className="container">
					<div className="c-jumble__container col-md-10 offset-md-2 no-padding">
						<div className="c-jumble__content c-valign--middle">
							<div className="row column-reverse">
								<div className="col-md-5 order-md-2">
									<div className="c-image">
										<picture>
											<source
												type="image/webp"
												srcset="/imgs/collaboration/automation.webp"
												alt="Collaboration image 2"
											/>
											<source
												type="image/png"
												srcset="/imgs/collaboration/automation.png"
												alt="Collaboration image 2"
											/>
											<img
												src="/imgs/collaboration/automation.png"
												alt="Collaboration image 2"
											/>
										</picture>
									</div>
								</div>
								<div className="col-md-7 order-md-1">
									<pre className="c-eyebrow c-eyebrow--light">
										Automate Workflows
									</pre>
									<h2>Automation powers selling teams.</h2>
									<p>
										Copper’s workflow automation streamlines selling process and
										best practices. Every seller gets personal notifications so
										they can move deals forward, faster.
									</p>
									<br />
									<Link href="/features/sales-workflow">
										<a className="c-button " target="_blank">
											See automation features
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="c-cols c-cols-alternate">
				<div className="container">
					<div className="row">
						<div className="col-md-5 col-lg-4 offset-md-1">
							<div className="c-cols__copy">
								<pre className="c-eyebrow c-eyebrow--dark">
									One Central System
								</pre>
								<h2>
									The best relationship experiences are created, together.
								</h2>
								<p>
									Effortlessly work deals and relationships with the full
									picture and context. Finally, all your customer moments in one
									place.
								</p>
								<Link href="https://www.youtube.com/watch?v=0fZdsmBlaUs">
									<a className="t-link" target="_blank">
										Watch the video
									</a>
								</Link>
							</div>
						</div>
						<div className="col-md-4 offset-md-1 c-valign--middle">
							<div className="c-image c-image--left central-system">
								<picture>
									<source
										type="image/webp"
										srcset="/imgs/collaboration/central-system.webp"
										alt="The best relationship experiences are created, together"
									/>
									<source
										type="image/png"
										srcset="/imgs/collaboration/central-system.jpg"
										alt="The best relationship experiences are created, together"
									/>
									<img
										src="/imgs/collaboration/central-system.jpg"
										alt="The best relationship experiences are created, together"
									/>
								</picture>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Case Study */}
			<section className="c-case-study c-case-study--align-left">
				<div className="container colorblock--mint">
					<div className="c-case-study__container col-md-11 no-padding">
						<div className="c-case-study__content c-valign--middle">
							<div className="row row-eq-height align-items-center">
								<div className="col-md-6 c-align--center">
									<div className="c-image c-image--shadow">
										<pre className="c-eyebrow c-eyebrow--dark">
											Success Story
										</pre>
										<picture>
											<source
												type="image/webp"
												srcset="/imgs/collaboration/stephanie-oriarte.webp"
												alt="Stephanie photo"
											/>
											<source
												type="image/png"
												srcset="/imgs/collaboration/stephanie-oriarte.jpg"
												alt="Stephanie photo"
											/>
											<img
												src="/imgs/collaboration/stephanie-oriarte.jpg"
												alt="Stephanie photo"
											/>
										</picture>
									</div>
								</div>
								<div className="col-md-6">
									<div className="c-panel__blockquote c-valign--middle">
										<blockquote>
											We now service our customers{" "}
											<strong>more efficiently</strong> because our team is
											finally in sync.
										</blockquote>
										<cite>
											Stephanie Oriarte{" "}
											<span className="c-panel__blockquote--position">
												Events and Sales Manager, Il Fiorello
											</span>
										</cite>
										<div className="c-panel__blockquote--logo">
											<picture>
												<source
													type="image/webp"
													srcset="/imgs/collaboration/il-fiorello-logo.webp"
													alt="Fiorello photo"
												/>
												<source
													type="image/png"
													srcset="/imgs/collaboration/il-fiorello-logo.png"
													alt="Fiorello photo"
												/>
												<img
													src="/imgs/collaboration/il-fiorello-logo.png"
													alt="Fiorello photo"
												/>
											</picture>
										</div>
									</div>
									<div className="col-md-12 c-align--right c-case-study__link">
										<Link href="/blog/il-fiorello-case-study">
											<a className="t-link" target="_blank">
												Read the full story
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="c-list">
				<div className="container">
					<div className="c-list__header c-align--center">
						<h2 className="t-center col-md-10">
							The beauty is in the details.
						</h2>
					</div>
					<div className="row">
						<div className="col-md-4">
							<h4>Dropbox & Box Integrations</h4>
							<p className="p-sm">
								Easily upload files from Dropbox or Box to contacts, accounts or
								deals. Any team member can store and access relevant files.
							</p>
						</div>
						<div className="col-md-4">
							<h4>Hangouts Integration</h4>
							<p className="p-sm">
								Be notified of critical changes to leads and opportunities from
								a smart bot inside your Hangouts Chat room.
							</p>
						</div>
						<div className="col-md-4">
							<h4>Slack Integration</h4>
							<p className="p-sm">
								Get real-time updates on your leads and opportunities in one
								centralized Slack channel.
							</p>
						</div>

						<div className="col-md-4">
							<h4>Team Email Templates</h4>
							<p className="p-sm">
								Create standardized email templates with merge tags to send one
								personalized message to multiple recipients.
							</p>
						</div>
						<div className="col-md-4">
							<h4>Google Sheets</h4>
							<p className="p-sm">
								Get insights with advanced reporting using our Custom Report
								Builder that connects directly to Google Sheets.
							</p>
						</div>

						<div className="col-md-4">
							<h4>@Mention</h4>
							<p className="p-sm">
								Ping teammates when you need their help on a deal or want keep
								them in the loop on an account.
							</p>
						</div>
						<div className="col-md-4">
							<h4>Shared Drive</h4>
							<p className="p-sm">
								Quickly upload and access any file related to accounts that are
								accessible by the entire team.
							</p>
						</div>
						<div className="col-md-4">
							<h4>Chrome Extension</h4>
							<p className="p-sm">
								Automatic email capture and activity sync gives you the complete
								view of leads and accounts right in your inbox.
							</p>
						</div>
					</div>
				</div>
				<div className="row c-align--center extra-top-margin--small">
					<Link href="/features">
						<a className="t-link">See all Copper features</a>
					</Link>
				</div>
			</section>

			{/* Numbers */}
			<section className="c-numbers insights off-white rectangle--mint rectangle--top--left">
				<div className="container">
					<div className="row">
						<div className="col-md-12 c-numbers__title c-align--center">
							<h2 className="t-center col-md-10">Win more, together</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="c-number__entry hot-pink">
								<span className="t-eyebrow">Response Time</span>
								<span className="t-numbers">36%</span>
								<p>Quicker response time to customers and prospects</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="c-number__entry hot-pink">
								<span className="t-eyebrow">Collaborate More</span>
								<span className="t-numbers">43%</span>
								<p>Increase in team collaboration when closing deals</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="c-number__entry hot-pink">
								<span className="t-eyebrow">Reduce Wasted Time</span>
								<span className="t-numbers">13</span>
								<div className="c-number__description">
									<p>Hours per week saved on manual data entry</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Hero */}
			<section className="c-hero--split background--leavebehind">
				<div className="c-image">
					<picture>
						<source
							type="image/webp"
							srcset="/imgs/UI_ipad_final-plea-update-new.webp"
							alt="Ipad UI image"
						/>
						<source
							type="image/png"
							srcset="/imgs/UI_ipad_final-plea-update-new.jpg"
							alt="Ipad UI image"
						/>
						<img
							src="/imgs/UI_ipad_final-plea-update-new.jpg"
							alt="Ipad UI image"
						/>
					</picture>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-6 c-valign--middle">
							<pre className="c-eyebrow c-eyebrow--light">
								Goodbye Data Entry
							</pre>
							<h2 className="t-white">
								Hello Copper.
								<br />
								Try it free!
							</h2>
							<p style={{ maxWidth: "420px" }}>
								No credit card required. Start your 14-day free trial today.
							</p>
							<div className="c-hero__buttons">
								<Link href={syncedAtom.generalSignupUrl}>
									<a className="c-button sendUTMsToAmplitude">Try Free</a>
								</Link>
								<Link href="/demos">
									<a className="c-button c-button--outline">Request Demo</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</DefaultPageBase>
	);
};

export default ProductivityPage;

export async function getStaticProps(context) {
	const res = await getEntryBySectionHandle("product", "productivity");
	return {
		props: {
			entry: res.entry || {},
			globals: res.globalSets || [],
		}, // will be passed to the page component as props
		revalidate: 120, // in seconds
	};
}
