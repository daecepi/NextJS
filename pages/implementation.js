import Link from "next/link";
import { useRecoilValue } from "recoil";
import { SyncedAtom } from "../atoms/SyncAtom";
import Footer from "../components/Footer/Footer";
import DefaultPageBase from "../components/PageBase/DefaultPageBase";
import { getEntryBySectionHandle } from "../lib/api";

const ImplementationPage = ({ entry, globals }) => {
	const syncedAtom = useRecoilValue(SyncedAtom);
	return (
		<DefaultPageBase entry={entry} globals={globals}>
			{/* Hero */}
			<section className="c-hero--split background--hot-pink">
				<div className="c-image">
					<picture>
						<source
							type="image/webp"
							srcset="/imgs/implementation/implementation-hero.webp"
							alt="Implementation hero image"
						/>
						<source
							type="image/png"
							srcset="/imgs/implementation/implementation-hero.jpg"
							alt="Implementation hero image"
						/>
						<img
							src="/imgs/implementation/implementation-hero.jpg"
							alt="Implementation hero image"
						/>
					</picture>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-6 c-valign--middle">
							<pre className="c-eyebrow c-eyebrow--light">Implementation</pre>
							<h1 className="t-white">The only CRM that works instantly.</h1>
							<p>
								With Copper, you’ll be up and running in minutes, not months.
							</p>
							<div className="c-hero__buttons">
								<Link href="https://app.copper.com/users/sign_up">
									<a className="c-button c-button--white">Free Trial</a>
								</Link>
								<Link href="/demos">
									<a className="c-button c-button--white-outline">
										Request Demo
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Product Focus */}
			<section className="c-product-focus">
				<div className="container">
					<div className="row c-align--center">
						<div className="col-md">
							<h2 className="col-md-10">Set up over a cup of coffee.</h2>
							<p className="col-md-8">
								Yes, you read that right. With Copper you’re up and running in
								minutes. All data is automatically populated from Gmail, and
								it’s easy to configure from there.
							</p>
							<Link href="https://www.youtube.com/watch?v=Lp5HrKsnf9o">
								<a className="t-link" target="_blank">
									How easy is it?
								</a>
							</Link>
							<br />
							<div className="c-product-focus__media rectangle--hot-pink rectangle--top--left">
								<picture>
									<source
										type="image/webp"
										srcset="/imgs/Implementation_UI00.webp"
										alt="Implementation image 1"
									/>
									<source
										type="image/png"
										srcset="/imgs/Implementation_UI00.png"
										alt="Implementation image 1"
									/>
									<img
										src="/imgs/Implementation_UI00.png"
										alt="Implementation image 1"
									/>
								</picture>
							</div>
							<div className="c-image c-image--bottom--right c-image--shadow">
								<picture>
									<source
										type="image/webp"
										srcset="/imgs/implementation/products-implementations-UI-01.webp"
										alt="Implementation image 2"
									/>
									<source
										type="image/png"
										srcset="/imgs/implementation/products-implementations-UI-01.jpg"
										alt="Implementation image 2"
									/>
									<img
										src="/imgs/implementation/products-implementations-UI-01.jpg"
										alt="Implementation image 2"
									/>
								</picture>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Content Jumble */}
			<section className="c-jumble c-jumble-background--hot-pink c-jumble--align-left">
				<div className="container">
					<div className="c-jumble__container col-md-10 no-padding">
						<div className="c-jumble__content c-valign--middle">
							<div className="row">
								<div className="col-md-6 order-md-2">
									<div className="c-panel__blockquote c-panel--top--mint c-valign--middle rectangle--hot-pink rectangle--bottom--left">
										<blockquote>
											With Copper, there has been <strong>absolutely</strong> no
											learning curve.
										</blockquote>
										<cite>
											John Logan{" "}
											<span className="c-panel__blockquote--position">
												TAS Tradesoft
											</span>
										</cite>
										<div className="c-panel__blockquote--logo">
											<picture>
												<source
													type="image/webp"
													srcset="/imgs/implementation/tas-tradesoft-logo.webp"
													alt="Tas tradesoft logo"
												/>
												<source
													type="image/png"
													srcset="/imgs/implementation/tas-tradesoft-logo.png"
													alt="Tas tradesoft logo"
												/>
												<img
													src="/imgs/implementation/tas-tradesoft-logo.png"
													alt="Tas tradesoft logo"
												/>
											</picture>
										</div>
									</div>
								</div>
								<div className="col-md-6 order-md-1 c-valign--middle">
									<pre className="c-eyebrow c-eyebrow--light">
										Full Team Adoption
									</pre>
									<h2>So intuitive, there’s no learning curve.</h2>
									<p>
										Copper looks and feels <em>exactly</em> like Google
										Workspace apps so there’s no coaching or training needed.
										Every team member is up and running in minutes from
										anywhere.
									</p>
									<div>
										<Link href="/blog/tas-tradesoft-case-study">
											<a className="c-button c-button--white" target="">
												Check out their story
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="c-cols c-cols-alternate">
				<div className="container">
					<div className="row extra-padding--bottom">
						<div className="col-md-7 order-2">
							<div className="c-image c-image--drop-right colorblock--bottom--right colorblock--light-mint c-image--shadow rectangle--bottom--left rectangle--mint">
								<picture>
									<source
										type="image/webp"
										srcset="/imgs/implementation/implementation_ui01.webp"
										className="drop-right__img"
										alt="Admin, reps, consultants will thank you"
									/>
									<source
										type="image/png"
										srcset="/imgs/implementation/implementation_ui01.png"
										className="drop-right__img"
										alt="Admin, reps, consultants will thank you"
									/>
									<img
										className="drop-right__img"
										src="/imgs/implementation/implementation_ui01.png"
										alt="Admin, reps, consultants will thank you"
									/>
								</picture>
							</div>
						</div>
						<div className="col-md-4 c-valign--middle order-1">
							<pre className="c-eyebrow c-eyebrow--dark">No Heavy Lifting</pre>
							<h2>Admin, reps, & consultants will thank you.</h2>
							<p>
								Copper adapts to ongoing needs for every relationship team. It
								works from the get-go so you don’t have to waste budget on the
								endless customizations traditional CRMs demand.
							</p>
							<div>
								<Link href="https://www.youtube.com/watch?v=0fZdsmBlaUs">
									<a className="t-link" target="_blank">
										Watch the video
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Pricing Hero */}
			<section className="c-pricing-hero--cornflower no-top-padding">
				<div className="container c-align--center">
					<h2 className="col-md-10">Pick a plan</h2>
				</div>

				<div className="container">
					<div className="c-pricing-hero__plans-container square--top--left square--hot-pink circle--bottom--right circle--volt">
						<div className="c-pricing-hero__plans ">
							<div className="c-pricing-hero__plans__title ">
								<h3>Basic</h3>
							</div>
							<div className="c-pricing-hero__plans__content">
								<div className="c-pricing-hero__billing">
									<div className="c-pricing-hero__annual desc js-pricingannual">
										$19
									</div>
									<div
										className="c-pricing-hero__monthly desc js-pricingmonthly"
										style={{ display: "none" }}
									>
										$24
									</div>
									<span className="c-pricing-hero__sub">
										Per User, Per Month
									</span>
								</div>
								<p className="p-sm">
									Never used CRM before? Let us help you avoid the time-wasting
									traps of other CRMs.
								</p>
								<div className="c-pricing-plans__footer">
									<div className="c-pricing-plans__ctas">
										<Link href={syncedAtom.generalSignupUrl}>
											<a
												className="c-button c-button--white sendUTMsToAmplitude"
												target=""
											>
												Try Free
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="c-pricing-hero__plans featured">
							<div className="c-pricing-hero__plans__title featured">
								<p className="p-sm">MOST POPULAR</p>
								<h3>Professional</h3>
							</div>
							<div className="c-pricing-hero__plans__content">
								<div className="c-pricing-hero__billing">
									<div className="c-pricing-hero__annual desc js-pricingannual">
										$49
									</div>
									<div
										className="c-pricing-hero__monthly desc js-pricingmonthly"
										style={{ display: "none" }}
									>
										$69
									</div>
									<span className="c-pricing-hero__sub">
										Per User, Per Month
									</span>
								</div>
								<p className="p-sm">
									Ready to see real growth? Try free for 14 days—no credit card
									required, cancel anytime!
								</p>
								<div className="c-pricing-plans__footer">
									<div className="c-pricing-plans__ctas">
										<Link href={syncedAtom.generalSignupUrl}>
											<a
												className="c-button c-button--hot-pink sendUTMsToAmplitude"
												target=""
											>
												Try Free
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="c-pricing-hero__plans ">
							<div className="c-pricing-hero__plans__title ">
								<h3>Business</h3>
							</div>
							<div className="c-pricing-hero__plans__content">
								<div className="c-pricing-hero__billing">
									<div className="c-pricing-hero__annual desc js-pricingannual">
										$119
									</div>
									<div
										className="c-pricing-hero__monthly desc js-pricingmonthly"
										style={{ display: "none" }}
									></div>
									<span className="c-pricing-hero__sub">
										Per User, Per Month
									</span>
								</div>
								<p className="p-sm">
									Already scaling? Our solutions support the needs of
									established sales teams.
								</p>
								<div className="c-pricing-plans__footer">
									<div className="c-pricing-plans__ctas">
										<Link href={syncedAtom.generalSignupUrl}>
											<a
												className="c-button c-button--white sendUTMsToAmplitude"
												target=""
											>
												Try Free
											</a>
										</Link>
									</div>
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

export default ImplementationPage;

export async function getStaticProps(context) {
	const res = await getEntryBySectionHandle("product", "implementation");
	return {
		props: {
			entry: res.entry || {},
			globals: res.globalSets || [],
		}, // will be passed to the page component as props
		revalidate: 120, // in seconds
	};
}
