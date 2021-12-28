import CtaGroup from "../components/Blocks/Simples/CtaGroup";
import DefaultPageBase from "../components/PageBase/DefaultPageBase";
import { getEntryBySectionHandle } from "../lib/api";

const EventsPage = ({ entry, globals }) => {
	return (
		<DefaultPageBase entry={entry} globals={globals}>
			{/* Hero */}
			<section className="c-hero--split background--eggplant">
				<div className="c-image">
					<picture>
						<source
							type="image/webp"
							srcset="/imgs/events-hero.webp"
							alt="Events Page Hero"
						/>
						<source
							type="image/png"
							srcset="/imgs/events-hero.jpg"
							alt="Events Page Hero"
						/>
						<img src="/imgs/events-hero.jpg" alt="Events Page Hero" />
					</picture>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-6 c-valign--middle">
							<pre className="c-eyebrow c-eyebrow--light">
								On The Road Again
							</pre>
							{entry.heroText}
							<CtaGroup ctas={entry.ctas} />
						</div>
					</div>
				</div>
			</section>

			{/* Table */}
			<section className="h-section-padding">
				<div className="container">
					<div className="col-md-8 offset-md-2">
						<h2 className="text-md-center">What's next?</h2>
						<p className="text-md-center">
							Copper is building relationships on the road.
						</p>
					</div>
					<div className="table-responsive">
						<table className="table c-event-table">
							<thead>
								<tr className="d-flex">
									<th className="col-md-6">Events</th>
									<th className="col-md-3">Where</th>
									<th className="col-md-3">When</th>
								</tr>
							</thead>
							<tbody></tbody>
						</table>
					</div>
				</div>
			</section>

			{/* Content Jumble */}
			<section className="c-jumble c-jumble-background--graphite c-jumble--align-right no-top-margin">
				<div className="container">
					<div className="c-jumble__container col-md-10 offset-md-2 no-padding">
						<div className="c-jumble__content c-valign--middle">
							<div className="row column-reverse">
								<div className="col-md-5 order-md-2">
									<div className="c-image c-image--video rectangle--bottom--right rectangle--mint">
										<div id="videoScript-45dro7cdil" className="sl_swap">
											<script
												src="https://fast.wistia.com/embed/medias/45dro7cdil.jsonp"
												async="async"
											></script>
										</div>
										<div id="videoClick-45dro7cdil" className="sl_swap">
											<span className="c-card__clickthrough wistia_embed wistia_async_45dro7cdil popover=true popoverContent=link"></span>
										</div>
										<div className="c-image--video__container">
											<picture>
												<source
													type="image/webp"
													srcset="/imgs/events-IMG-2.webp"
													alt="Events image"
												/>
												<source
													type="image/png"
													srcset="/imgs/events-IMG-2.jpg"
													alt="Events image"
												/>
												<img alt="Events image" src="/imgs/events-IMG-2.jpg" />
											</picture>
											<a
												className="c-button c-button--white c-button--circle c-button--circle--large"
												href="#"
											>
												<i className="material-icons notranslate">play_arrow</i>
											</a>
										</div>
									</div>
								</div>
								<div className="col-md-7 order-md-1">
									<pre className="c-eyebrow c-eyebrow--light">
										Copper + Google
									</pre>
									<h2>Better together.</h2>
									<p>
										Copper is the CRM that works for you. It’s made for Google
										Workspace (previously G Suite), works instantly and has a
										beautiful user experience. Over 10,000+ companies in over
										100 countries use Copper to grow and foster long-lasting
										business relationships.
									</p>
									<p>
										See why 78% of our customers go live with implementing
										Copper within 1 week.Try it free today!
									</p>
									<div className="c-hero__buttons">
										<a
											className="c-button sendUTMsToAmplitude"
											href="{{ craft.app.config.general.signUpUrl }}"
										>
											Try Free
										</a>
										<a
											className="c-button c-button--outline"
											href="#"
											data-toggle="modal"
											data-target="#formModal"
										>
											Request Demo
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Table */}
			<section className="h-section-padding">
				<div className="container">
					<div className="col-md-8 offset-md-2">
						<h2 className="text-md-center">Past Events</h2>
						<p className="text-md-center">See where we have been.</p>
					</div>
					<div className="table-responsive">
						<table className="table c-event-table">
							<thead>
								<tr className="d-flex">
									<th className="col-md-6">Events</th>
									<th className="col-md-3">Where</th>
									<th className="col-md-3">When</th>
								</tr>
							</thead>
							<tbody></tbody>
						</table>
					</div>
				</div>
			</section>

			{/* Final Plea */}
			<section className="c-hero--split background--leavebehind">
				<div className="c-image">
					<picture>
						<source
							type="image/webp"
							srcset="/imgs/leave-behind-scaled.webp"
							alt="Leave behind scaled image"
						/>
						<source
							type="image/png"
							srcset="/imgs/leave-behind-scaled.jpg"
							alt="Leave behind scaled image"
						/>
						<img
							src="/imgs/leave-behind-scaled.jpg"
							alt="Leave behind scaled image"
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
								<a
									className="c-button"
									href="#"
									data-toggle="modal"
									data-target="#formModal"
								>
									Request Demo
								</a>
								<a
									className="c-button c-button--outline sendUTMsToAmplitude"
									href="{{ craft.app.config.general.signUpUrl }}"
								>
									Try Free
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</DefaultPageBase>
	);
};

export default EventsPage;

export async function getStaticProps(context) {
	const res = await getEntryBySectionHandle("events", "events");

	// Getting the events to listen
	//const eventListings = await

	return {
		props: {
			entry: res.entry || {},
			globals: res.globalSets || [],
		}, // will be passed to the page component as props
		revalidate: 120, // in seconds
	};
}
