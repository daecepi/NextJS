import { useRecoilValue } from "recoil";
import { SyncedAtom } from "../atoms/SyncAtom";
import Footer from "../components/Footer/Footer";
import DefaultPageBase from "../components/PageBase/DefaultPageBase";
import { getEntryBySectionHandle } from "../lib/api";
import Link from "next/link";

const InsightsPage = ({ entry, globals }) => {
	const syncedAtom = useRecoilValue(SyncedAtom);
	return (
		<DefaultPageBase entry={entry} globals={globals}>
			{/* Hero */}
			<section className="c-hero--split background--graphite">
				<div className="c-image">
					<picture>
						<source
							type="image/webp"
							srcset="/imgs/insights/insights--hero.webp"
							alt="Insights hero image"
						/>
						<source
							type="image/png"
							srcset="/imgs/insights/insights--hero.jpg"
							alt="Insights hero image"
						/>
						<img
							src="/imgs/insights/insights--hero.jpg"
							alt="Insights hero image"
						/>
					</picture>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-6 c-valign--middle">
							<pre className="c-eyebrow c-eyebrow--light">Insights</pre>
							<h1 className="t-white">Accurate data from lead to close.</h1>
							<p>
								Copper gives you real-time insights to help you close more
								deals.
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
							<h2 className="col-md-10">Reports you’ll actually use.</h2>
							<p className="col-md-8">
								Copper’s native Google Workspace integration automatically
								captures all of your data so you get reports you can act on, not
								just send to your boss.
							</p>
							<Link href="/features/pipeline-management">
								<a className="t-link" target="_blank">
									Pipeline management
								</a>
							</Link>
							<br />
							<div className="c-product-focus__media rectangle--mint rectangle--top--left">
								<picture>
									<source
										type="image/webp"
										srcset="/imgs/insights/Insights_UI01.webp"
										alt="Insights image 1"
									/>
									<source
										type="image/png"
										srcset="/imgs/insights/Insights_UI01.png"
										alt="Insights image 1"
									/>
									<img
										src="/imgs/insights/Insights_UI01.png"
										alt="Insights image 1"
									/>
								</picture>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Content Jumble */}
			<section className="c-jumble c-jumble-background--hot-pink top-margin-mobile">
				<div className="container">
					<div className="c-jumble__container col-md-10 no-padding">
						<div className="c-jumble__content c-valign--middle">
							<div className="row">
								<div className="col-md-6 order-md-2">
									<div className="c-image">
										<picture>
											<source
												type="image/webp"
												srcset="/imgs/insights/insights-jumble-2.webp"
												alt="Insights jumble"
											/>
											<source
												type="image/png"
												srcset="/imgs/insights/insights-jumble-2.png"
												alt="Insights jumble"
											/>
											<img
												alt="Insights jumble"
												src="/imgs/insights/insights-jumble-2.png"
											/>
										</picture>
									</div>
								</div>
								<div className="col-md-6 order-md-1">
									<pre className="c-eyebrow c-eyebrow--light">
										Deal Management
									</pre>
									<h2>Never drop the ball.</h2>
									<p>
										Copper’s multiple and customizable pipelines allow everyone
										in your company to track deals in real-time.
									</p>
									<Link href="https://www.youtube.com/watch?v=3PiUhz692B8">
										<a className="c-button c-button--white" target="_blank">
											More on pipelines
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="c-cols c-cols-alternate no-bottom-padding">
				<div className="container">
					<div className="row column-reverse">
						<div className="col-md-5">
							<div className="c-image c-image--left c-image--shadow colorblock--top--left colorblock--eggplant diamond--bottom--left diamond--volt">
								<picture>
									<source
										type="image/webp"
										srcset="/imgs/insights/insights-forecast.webp"
										alt="Stop the forecasting guessing games"
									/>
									<source
										type="image/png"
										srcset="/imgs/insights/insights-forecast.jpg"
										alt="Stop the forecasting guessing games"
									/>
									<img
										src="/imgs/insights/insights-forecast.jpg"
										alt="Stop the forecasting guessing games"
									/>
								</picture>
							</div>
						</div>
						<div className="col-md-5 offset-md-2 c-valign--middle">
							<div className="c-cols__copy">
								<pre className="c-eyebrow c-eyebrow--dark">
									Forecast management
								</pre>
								<h2>Stop the forecasting guessing games.</h2>
								<p>
									Built-in sales forecast reports display potential revenue by
									expected close date so you can keep a pulse on your pipeline,
									plan ahead and course correct.
								</p>
								<Link href="/features/sales-forecasting">
									<a className="t-link" target="_blank">
										Learn more
									</a>
								</Link>
								<br />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Deal Close Callout */}
			<section className="c-single-column">
				<div className="container">
					<div className="col-md-10 offset-md-1 c-single-column__container h-hairline">
						<h2>Make everyone a decision-maker</h2>
						<div className="c-single-column__buttons">
							<Link href={syncedAtom.generalSignupUrl}>
								<a className="c-button">Empower Your Team</a>
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="c-cols c-cols-alternate">
				<div className="container">
					<div className="row extra-padding--bottom">
						<div className="col-md-7 order-2">
							<div className="c-image c-image--drop-right colorblock--bottom--right colorblock--putty c-image--shadow rectangle--bottom--left rectangle--mint">
								<picture>
									<source
										type="image/webp"
										srcset="/imgs/insights/pipeline-report.webp"
										className="drop-right__img"
										alt="Slice numbers your way"
									/>
									<source
										type="image/png"
										srcset="/imgs/insights/pipeline-report.jpg"
										className="drop-right__img"
										alt="Slice numbers your way"
									/>
									<img
										className="drop-right__img"
										src="/imgs/insights/pipeline-report.jpg"
										alt="Slice numbers your way"
									/>
								</picture>
							</div>
						</div>
						<div className="col-md-4 c-valign--middle order-1">
							<pre className="c-eyebrow c-eyebrow--dark">
								Advanced Reporting
							</pre>
							<h2>Slice numbers your way.</h2>
							<p>
								Custom fields and pipeline filters let you instantly customize
								your data so you can see and use it how you want to (not how we
								think you should).
							</p>
						</div>
					</div>
					<div className="row column-reverse">
						<div className="col-md-5">
							<div className="c-image c-image--left c-image--shadow colorblock--bottom--left colorblock--midnight circle--bottom--left circle--mint">
								<picture>
									<source
										type="image/webp"
										srcset="/imgs/insights/insights_ui05.webp"
										alt="Put sales data to work"
									/>
									<source
										type="image/png"
										srcset="/imgs/insights/insights_ui05.png"
										alt="Put sales data to work"
									/>
									<img
										src="/imgs/insights/insights_ui05.png"
										alt="Put sales data to work"
									/>
								</picture>
							</div>
						</div>
						<div className="col-md-4 offset-md-2 c-valign--middle">
							<div className="c-cols__copy">
								<pre className="c-eyebrow c-eyebrow--dark">Data Studio</pre>
								<h2>Put sales data to work.</h2>
								<p>
									Join data from multiple sources with our Google Sheets add-on
									and Data Studio integration.
								</p>
								<Link href="/blog/turn-copper-data-into-visual-analytics-via-google-data-studio">
									<a className="t-link" target="_blank">
										Data Studio Integration
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<style jsx>
				{`
					.c-quote-carousel__blockquote.col-md-10.c-valign--middle.rectangle--hot-pink.rectangle--top--right:before {
						content: "";
						position: absolute;
						top: -45%;
						right: -180px;
						z-index: -1;
						display: block;
						transform: rotate(45deg) scale(0.8);
					}
				`}
			</style>

			{/* Quote Carousel */}
			<section className="c-quote-carousel js-quote-carousel">
				<div className="container-fluid">
					<div className="c-quote-carousel__container col-md-11 col-lg-10 colorblock--mint colorblock--bottom--right">
						<div className="c-quote-carousel__content row">
							<div className="container">
								<div className="col-md-10 offset-md-1">
									<pre
										className="c-eyebrow c-eyebrow--light"
										style={{ top: "0", marginLeft: "0" }}
									>
										Success Stories
									</pre>
									<div className="c-quote-carousel__blockquote col-md-10 c-valign--middle rectangle--hot-pink rectangle--top--right">
										<div className="c-quote-carousel__blockquote--item active">
											<blockquote>
												Now that we can quickly identify blocked opportunities
												with a real value attached, we can better identify where
												to dedicate our time and resources.
											</blockquote>
											<cite>
												Nick Ryan
												<span className="c-quote-carousel__blockquote--position">
													Business Development Manager, Voxel group
												</span>
											</cite>
											<div className="c-quote-carousel__blockquote--logo">
												<picture>
													<source
														type="image/webp"
														srcset="/imgs/logo-voxel.webp"
														alt="Voxel logo"
													/>
													<source
														type="image/png"
														srcset="/imgs/logo-voxel.png"
														alt="Voxel logo"
													/>
													<img src="/imgs/logo-voxel.png" alt="Voxel logo" />
												</picture>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* List */}
			<section className="c-list">
				<div className="container">
					<div className="c-list__header t-center">
						<h2>Coach with confidence</h2>
					</div>
					<div className="row">
						<div className="col-md-4">
							<h4>Leaderboards</h4>
							<p className="p-sm">
								Show top performers by revenue, pipeline, meetings set, calls
								made, and emails sent.
							</p>
						</div>
						<div className="col-md-4">
							<h4>Goal Setting</h4>
							<p className="p-sm">
								Set and track individual and team goals to monitor progress and
								course-correct quickly.
							</p>
						</div>
						<div className="col-md-4">
							<h4>Real-time Alerts</h4>
							<p className="p-sm">
								Task reminders delivered right to your inbox so you’ll never
								miss a step with a lead or deal.{" "}
							</p>
						</div>
						<div className="col-md-4">
							<h4>Google Sheets</h4>
							<p className="p-sm">
								Take action with insights using our Custom Report Builder that
								connects directly to Google Sheets.
							</p>
						</div>
						<div className="col-md-4">
							<h4>Performance Dashboards </h4>
							<p className="p-sm">
								Give every team member quick insight into sales performance,
								lead source and pipeline created.
							</p>
						</div>
						<div className="col-md-4">
							<h4>Activity Reports</h4>
							<p className="p-sm">
								Gain insight into team productivity and learn what actions led
								to closed business.
							</p>
						</div>
					</div>
					<div className="col-md-12 c-align--center c-case-study__link">
						<Link href="/features">
							<a className="t-link" target="_blank">
								See All Reporting Features
							</a>
						</Link>
					</div>
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
								<span className="t-eyebrow">Sales Forecasts</span>
								<span className="t-numbers">40%</span>
								<p>More accurate</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="c-number__entry hot-pink">
								<span className="t-eyebrow">Response Time</span>
								<span className="t-numbers">36%</span>
								<p>Faster response time</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="c-number__entry hot-pink">
								<span className="t-eyebrow">Reduce Time</span>
								<span className="t-numbers">13</span>
								<div className="c-number__description">
									<p>Hours saved on manual data entry</p>
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
								<Link href="/demos">
									<a className="c-button">Request Demo</a>
								</Link>
								<Link href={syncedAtom.generalSignupUrl}>
									<a className="c-button c-button--outline sendUTMsToAmplitude">
										Try Free
									</a>
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

export default InsightsPage;

export async function getStaticProps(context) {
	const res = await getEntryBySectionHandle("product", "insights");
	return {
		props: {
			entry: res.entry || {},
			globals: res.globalSets || [],
		}, // will be passed to the page component as props
		revalidate: 120, // in seconds
	};
}
