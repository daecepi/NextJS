import { useRecoilValue } from "recoil";
import { SyncedAtom } from "../atoms/SyncAtom";
import DefaultPageBase from "../components/PageBase/DefaultPageBase";
import { getEntryBySectionHandle } from "../lib/api";
import Link from "next/link";
import Footer from "../components/Footer/Footer";
const CustomersPage = ({ entry, globals }) => {
	const syncedAtom = useRecoilValue(SyncedAtom);
	return (
		<DefaultPageBase entry={entry} globals={globals}>
			{/* Hero */}
			<section className="c-hero--split background--eggplant h-overhang">
				<div className="c-image">
					<picture>
						<source
							type="image/webp"
							srcset="https://copper.objects.frb.io/imgs/customers/customers-hero.webp"
							className="h-image-contain"
							alt="Customer hero image"
						/>
						<source
							type="image/png"
							srcset="https://copper.objects.frb.io/imgs/customers/customers-hero.png"
							className="h-image-contain"
							alt="Customer hero image"
						/>
						<img
							className="h-image-contain"
							src="https://copper.objects.frb.io/imgs/customers/customers-hero.png"
							alt="Customer hero image"
						/>
					</picture>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-6 c-valign--middle">
							<h1 className="t-white">So happy with Copper.</h1>
							<p>
								12,000 companies big and small grow relationships with Copper.
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
						<div className="col-md-12 c-align--center">
							<h3 className="col-md-8">
								Global enterprise companies use Copper to move business
								relationships forward.
							</h3>
							<div className="c-product-focus__media">
								<picture>
									<source
										type="image/webp"
										srcset="/imgs/customers/customers-primary.webp"
										alt="Customer image"
										className="h-remove-shadow"
									/>
									<source
										type="image/png"
										srcset="/imgs/customers/customers-primary.png"
										alt="Customer image"
										className="h-remove-shadow"
									/>
									<img
										src="/imgs/customers/customers-primary.png"
										alt="Customer image"
										className="h-remove-shadow"
									/>
								</picture>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Deal Close Callout */}
			<section className="c-single-column background--putty gsuite-cloud extra-top-margin">
				<div className="container">
					<div className="col-md-10 offset-md-1 c-single-column__container">
						<h2>
							Thousands of Google Workspace
							<br />
							users choose Copper.
						</h2>
						{/* TODO GOOGLE */}
						<p>
							Recommended for Google Workspace <strong>4.8 / 5 Stars</strong> on
							Google Workspace Marketplace
						</p>
						<div className="c-single-column__buttons">
							<Link href="https://workspace.google.com/marketplace/app/copper_formerly_prosperworks_crm/461423560386">
								<a className="c-button">See For Yourself</a>
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="c-blog__entries extra-top-margin--small sl_hide">
				<div className="container">
					<div className="row">
						<div className="col-md-12 c-section__title c-align--center">
							<h2 className="t-center col-md-10">
								CRM: not just for sales teams.
							</h2>
							<p className="t-center col-md-8">
								Copper brings all your relationship makers together and allows
								teams to manage every relationship type &ndash; leads, accounts,
								partners, creatives, agents, investors, brokers, and more.
							</p>
							<Link href="/blog-categories/copper?sc=201">
								<a className="t-link">Read all our customer stories</a>
							</Link>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="c-card__entry extended-card">
								<Link href="/blog/rhr-case-study">
									<a className="c-card__clickthrough"></a>
								</Link>

								<div
									className="c-card__default__image"
									style={{
										backgroundImage: "url('/imgs/customers/rhr-block.png')",
									}}
								></div>
								<div className="c-card__entry__content">
									<div className="entry_categories">
										<span className="t-eyebrow">Consulting</span>
									</div>
									<h4 className="c-card__entry-title">
										<Link href="/blog/rhr-case-study">
											<a className="underline_from_lefsettt">
												See how they made selling into a team sport.
											</a>
										</Link>
									</h4>
								</div>
								<div className="c-card__meta">
									<Link href="/blog/rhr-case-study">
										<a className="t-link">Read More</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="c-card__entry extended-card">
								<Link href="/blog/reali-case-study">
									<a className="c-card__clickthrough"></a>
								</Link>
								<div
									className="c-card__default__image"
									style={{
										backgroundImage: "url('/imgs/customers/reali-block.png')",
									}}
								></div>
								<div className="c-card__entry__content">
									<div className="entry_categories">
										<span className="t-eyebrow">Real Estate</span>
									</div>
									<h4 className="c-card__entry-title">
										<Link href="/blog/reali-case-study">
											<a className="underline_from_lefsettt">
												See how they saved 15 hours per user per week.
											</a>
										</Link>
									</h4>
								</div>
								<div className="c-card__meta">
									<Link href="/blog/reali-case-study">
										<a className="t-link">Read More</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="c-card__entry extended-card">
								<Link href="/blog/lumapps-case-study">
									<a className="c-card__clickthrough"></a>
								</Link>
								<div
									className="c-card__default__image"
									style={{
										backgroundImage: "url('/imgs/customers/lumapps-block.png')",
									}}
								></div>
								<div className="c-card__entry__content">
									<div className="entry_categories">
										<span className="t-eyebrow">Technology</span>
									</div>
									<h4 className="c-card__entry-title">
										<Link href="/blog/lumapps-case-study">
											<a className="underline_from_lefsettt">
												See how they managed 2000% lead growth.
											</a>
										</Link>
									</h4>
								</div>
								<div className="c-card__meta">
									<Link href="/blog/lumapps-case-study">
										<a className="t-link">Read More</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Numbers */}
			<section className="c-numbers c-numbers--background-image no-bottom-padding">
				<div className="c-numbers-background">
					<picture>
						<source
							type="image/webp"
							srcset="/imgs/customers/customers-numbers.webp"
							alt="Customer numbers image"
						/>
						<source
							type="image/png"
							srcset="/imgs/customers/customers-numbers.jpg"
							alt="Customer numbers image"
						/>
						<img
							alt="Customer numbers image"
							src="/imgs/customers/customers-numbers.jpg"
						/>
					</picture>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-12 c-numbers__title c-align--center">
							<h2 className="t-center col-md-10">
								Relationship makers
								<br />
								love Copper.
							</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="c-number__entry hot-pink">
								<span className="t-eyebrow">Less Time</span>
								<span className="t-numbers">
									<span>15</span>
								</span>
								<p>Selling hours back per week</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="c-number__entry hot-pink">
								<span className="t-eyebrow">More Accuracy</span>
								<span className="t-numbers">
									<span>30%</span>
								</span>
								<p>Improvement in sales reporting</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="c-number__entry hot-pink">
								<span className="t-eyebrow">Reduce Time</span>
								<span className="t-numbers">
									<span>35%</span>
								</span>
								<div className="c-number__description">
									<p>Shorter sales cycle</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Customers block */}
			<section className="c-cols unicorns">
				<div className="container">
					<div className="row">
						<div className="col-md-6 offset-md-1 order-2">
							<div className="c-image c-image--center">
								<picture>
									<source
										type="image/webp"
										srcset="/imgs/customers/unicorns.webp"
										alt="Unicorns company image"
									/>
									<source
										type="image/png"
										srcset="/imgs/customers/unicorns.png"
										alt="Unicorns company image"
									/>
									<img
										src="/imgs/customers/unicorns.png"
										alt="Unicorns company image"
									/>
								</picture>
							</div>
						</div>
						<div className="col-md-5 order-1">
							<h2>Startups and unicorns love Copper.</h2>
							<p>
								The most innovative small and midsize businesses use Copper to
								grow and scale globally.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Leave Behind */}
			<section className="c-hero--split background--leavebehind">
				<div className="c-image">
					<picture>
						<source
							type="image/webp"
							srcset="/imgs/leave-behind.webp"
							alt="Leave behind concept image"
						/>
						<source
							type="image/png"
							srcset="/imgs/leave-behind.jpg"
							alt="Leave behind concept image"
						/>
						<img
							src="/imgs/leave-behind.jpg"
							alt="Leave behind concept image"
						/>
					</picture>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-6 c-valign--middle">
							<h2 className="t-white">
								Join the 12,000 customers that love Copper.
							</h2>
							<p style={{ maxWidth: "420px" }}>Try Copper today!</p>
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

export default CustomersPage;

export async function getStaticProps(context) {
	const res = await getEntryBySectionHandle("customers", "customers");
	return {
		props: {
			entry: res.entry || {},
			globals: res.globalSets || [],
		}, // will be passed to the page component as props
		revalidate: 120, // in seconds
	};
}
