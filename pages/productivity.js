import Link from "next/link";
import { useRecoilValue } from "recoil";
import { SyncedAtom } from "../atoms/SyncAtom";
import Footer from "../components/Footer/Footer";
import DefaultPageBase from "../components/PageBase/DefaultPageBase";
import { getEntryBySectionHandle } from "../lib/api";

const ProductivityPage = ({ entry, globals }) => {
	const syncedAtom = useRecoilValue(SyncedAtom);
	// No current template but present in Craft
	return (
		<DefaultPageBase entry={entry} globals={globals}>
			{/* Hero */}
			<section className="c-hero--split background--eggplant">
				<div className="c-image">
					<picture>
						<source
							type="image/webp"
							srcset="/imgs/productivity/productivity-hero.webp"
							alt="Productivity hero image"
						/>
						<source
							type="image/png"
							srcset="/imgs/productivity/productivity-hero.jpg"
							alt="Productivity hero image"
						/>
						<img
							src="/imgs/productivity/productivity-hero.jpg"
							alt="Productivity hero image"
						/>
					</picture>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-6 c-valign--middle">
							<pre className="c-eyebrow c-eyebrow--light">Productivity</pre>
							<h1 className="t-white">Productivity, meet CRM.</h1>
							<p>Spend time on relationships, not data.</p>
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

			<section className="c-cols c-cols-alternate no-bottom-padding">
				<div className="container">
					<div className="row column-reverse">
						<div className="col-md-5 order-1">
							<div className="c-image c-image--left c-image--shadow colorblock--top--left colorblock--eggplant circle--top--right circle--mint">
								<picture>
									<source
										type="image/webp"
										srcset="/imgs/productivity/Productivity-Ui01-new.webp"
										alt="CRM minus the data entry"
									/>
									<source
										type="image/png"
										srcset="/imgs/productivity/Productivity-Ui01-new.png"
										alt="CRM minus the data entry"
									/>
									<img
										src="/imgs/productivity/Productivity-Ui01-new.png"
										alt="CRM minus the data entry"
									/>
								</picture>
							</div>
						</div>
						<div className="col-md-4 offset-md-2 c-valign--middle order-2">
							<div className="c-cols__copy">
								<pre className="c-eyebrow c-eyebrow--dark">Zero Data Entry</pre>
								<h2>CRM minus the data entry.</h2>
								<p>
									Copper scrapes and captures all of your contacts, emails and
									other crucial account details so everything’s automatically
									there and ready for you to start selling.
								</p>
								<Link href="https://www.youtube.com/watch?v=z8LkXkB1izU">
									<a target="_blank" className="t-link">
										See it in action
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-7 order-2">
							<div className="c-image c-image--drop-right colorblock--bottom--right colorblock--putty c-image--shadow rectangle--bottom--left rectangle--mint">
								<picture>
									<source
										type="image/webp"
										srcset="/imgs/productivity/productivity-ui02.webp"
										className="drop-right__img"
										alt="Copper feels like home"
									/>
									<source
										type="image/png"
										srcset="/imgs/productivity/productivity-ui02.png"
										className="drop-right__img"
										alt="Copper feels like home"
									/>
									<img
										className="drop-right__img"
										src="/imgs/productivity/productivity-ui02.png"
										alt="Copper feels like home"
									/>
								</picture>
							</div>
						</div>
						<div className="col-md-4 c-valign--middle order-1">
							<div>
								<pre className="c-eyebrow c-eyebrow--dark">
									Google Material Design
								</pre>
								<h2>Learning curve? Zilch.</h2>
								<p>
									Because Copper looks and feels <em>exactly</em> like the
									Google Workspace tools you already use every day, you’ll be up
									and running in minutes, not months.
								</p>
								<Link href="/g-suite-crm">
									<a className="t-link">Made for Google</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Deal Close Callout */}
			<section className="c-single-column">
				<div className="container">
					<div className="col-md-10 offset-md-1 c-single-column__container h-hairline">
						<h2>Close more deals with Copper</h2>
						<div className="c-single-column__buttons">
							<Link href={syncedAtom.generalSignupUrl}>
								<a className="c-button sendUTMsToAmplitude">Try Free</a>
							</Link>
							<Link href="/demos">
								<a className="c-button c-button--outline">Request Demo</a>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Insights Callout */}
			<section className="c-single-column no-bottom-padding">
				<div className="container">
					<div className="col-md-8 offset-md-2 c-single-column__container">
						<h2>Sell right from your inbox.</h2>
						<p>
							Copper’s native Google Workspace integration allows you to nurture
							leads
							<br />
							and close deals from Gmail.
						</p>
					</div>
					<picture>
						<source
							type="image/webp"
							srcset="/imgs/productivity/productivity-inbox.webp"
							alt="Productivity inbox image"
						/>
						<source
							type="image/png"
							srcset="/imgs/productivity/productivity-inbox.png"
							alt="Productivity inbox image"
						/>
						<img
							src="/imgs/productivity/productivity-inbox.png"
							alt="Productivity inbox image"
						/>
					</picture>
				</div>
			</section>

			{/* Simplify your workday */}
			<section className="c-list-card">
				<div className="container">
					<div className="c-list-card__header">
						<h2 className="t-center">Reimagine the workday</h2>
					</div>
					<div className="row">
						{/* Sales Productivity */}
						<div className="col-md-4">
							<div className="c-list-card__card mint">
								<div className="c-list-card__border mint"></div>
								<span className="t-eyebrow">Sales Productivity</span>
								<div className="c-list-card__icon"></div>
								<div className="c-list-card__copy">
									<h4>Lead Management</h4>
									<p className="p-sm">
										Copper automatically populates your data so you can focus on
										transforming leads into customers.
									</p>
								</div>
								<div className="c-list-card__copy">
									<h4>Contact Management</h4>
									<p className="p-sm">
										All of your contacts are a click or tap away to make it
										easier to nurture all of your business relationships.
									</p>
								</div>
								<div className="c-list-card__copy">
									<h4>Visual Pipeline Management</h4>
									<p className="p-sm">
										Customizable pipelines allow you to easily visualize deal
										progress. Need to manage multiple pipelines? We got that.
									</p>
								</div>
							</div>
						</div>

						{/* Task Management */}
						<div className="col-md-4">
							<div className="c-list-card__card eggplant">
								<div className="c-list-card__border eggplant"></div>
								<span className="t-eyebrow">Task Management</span>
								<div className="c-list-card__icon"></div>
								<div className="c-list-card__copy">
									<h4>Email Templates</h4>
									<p className="p-sm">
										Ready-to-use emails let you answer frequent questions, greet
										new customers, or promote your service with one click.
									</p>
								</div>
								<div className="c-list-card__copy">
									<h4>Automatic Email Sync</h4>
									<p className="p-sm">
										Our seamless integration with Google Workspace means your
										emails are always waiting for you in Copper without you
										doing a thing.{" "}
									</p>
								</div>
								<div className="c-list-card__copy">
									<h4>Alerts & Notifications</h4>
									<p className="p-sm">
										Wow your customers by staying on top of every conversation
										and anticipating their needs.
									</p>
								</div>
							</div>
						</div>

						{/*Native Google Workspace integration */}
						<div className="col-md-4">
							<div className="c-list-card__card hot-pink">
								<div className="c-list-card__border hot-pink"></div>
								<span className="t-eyebrow">
									Native Google Workspace integration
								</span>
								<div className="c-list-card__icon"></div>
								<div className="c-list-card__copy">
									<h4>Google Chrome Extension</h4>
									<p className="p-sm">
										Update opportunities, add contacts, get account histories,
										and manage deals right from your inbox.
									</p>
								</div>
								<div className="c-list-card__copy">
									<h4>Google Calendar & Hangouts</h4>
									<p className="p-sm">
										Copper lives inside of Hangouts' Chat and notifies you of
										critical changes made to leads and opportunities to keep
										deals moving forward.
									</p>
								</div>
								<div className="c-list-card__copy">
									<h4>Google Drive & Shared Drive</h4>
									<p className="p-sm">
										Anyone with permission can access any customer file and
										start collaborating in one click with Copper’s Google Drive
										integration.
									</p>
								</div>
							</div>
						</div>
						<div className="row c-align--center extra-top-margin--small">
							<Link href="/features">
								<a className="t-link">See all features </a>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Numbers */}
			<section className="c-numbers">
				<div className="container">
					<div className="row">
						<div className="col-md-12 c-numbers__title c-align--center">
							<h2 className="col-md-10 t-center">Well, that was easy.</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="c-number__entry hot-pink">
								<span className="t-eyebrow">Less Time</span>
								<span className="t-numbers">15</span>
								<p>Selling hours back per week</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="c-number__entry hot-pink">
								<span className="t-eyebrow">More Accurate Reporting</span>
								<span className="t-numbers">30%</span>
								<p>Improvement in sales reporting</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="c-number__entry hot-pink">
								<span className="t-eyebrow">Reduce Time</span>
								<span className="t-numbers">35%</span>
								<div className="c-number__description">
									<p>Shorter sales cycle</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row c-align--center extra-bottom-margin--medium">
						<Link href="https://get.copper.com/rs/763-DVL-293/images/infographic_ROI_survey.pdf?mkt_tok=eyJpIjoiTmpOaFpXVXlNR0k1T0RKaCIsInQiOiI0ckxRNHcyOHB6QWs5MkFsM3VnVXA5T2VYXC84VENnSklJWUp6WUR3YTN5XC83NVJnSEtIY3Myb3hncUM0Y2pKcDlvZFZ2OWtoWG9zYm5WQ1dhekRYXC9MaVlGU1Jxb3lFREIralpSZHdPcHY1Qlg5ODU0Z2J1T0g0dnd5VW9CbDhuZiJ9">
							<a className="t-link" target="_blank">
								Here's the proof
							</a>
						</Link>
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
