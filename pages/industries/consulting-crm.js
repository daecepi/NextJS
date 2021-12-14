import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer/Footer";
import NavigationDefault from "../../components/Navigation/NavigationDefault";
import ProductTwoUp from "../../components/ProductsComponent/ProductTwoUp/ProductTwoUp";
import TwoUp from "../../components/ProductsComponent/ProductTwoUp/TwoUp";
import CallOut from "../../components/SinglesComponents/CallOut/CallOut";
import FinalPleaHero from "../../components/SinglesComponents/FinalPleadHero/FinalPleaHero";
import NumbersSection from "../../components/SinglesComponents/NumbersSection.js/NumbersSection";
import RelatedContent from "../../components/SinglesComponents/RelatedContent/RelatedContent";

export default function ConsultingCrm() {
	return (
		<>
			<Head>
				<title>Best CRM For Consultants | Copper</title>
			</Head>
			<NavigationDefault />
			<section className="c-hero--split background--consulting">
				<div className="container">
					<div className="row">
						<div className="col-md-5 col-lg-5 c-valign--middle">
							<pre className="c-eyebrow c-eyebrow--light">
								COPPER FOR CONSULTING COMPANIES
							</pre>
							<h1 className="t-white">
								Manage relationships from deal to project.
							</h1>
							<p>Build strong and lasting client relationships with Copper.</p>
							<div className="c-hero__buttons">
								<Link href="/signup">
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
			<section className="c-cols no-bottom-padding">
				<div className="container">
					<div className="row">
						<div className="col-md order-2">
							<div className="c-image c-image--center no-embelleshment">
								<picture>
									<source
										type="image/webp"
										srcset="/imgs/industry/industry-consulting-logo-cloud@2x.webp"
										alt="Consulting logo"
									/>
									<source
										type="image/png"
										srcset="/imgs/industry/industry-consulting-logo-cloud@2x.png"
										alt="Consulting logo"
									/>
									<img
										src="/imgs/industry/industry-consulting-logo-cloud@2x.png"
										alt="Consulting logo"
									/>
								</picture>
							</div>
						</div>
						<div className="col-md order-1">
							<h2>2000+ business services use a different kind of CRM.</h2>
							<p>Consulting businesses of all sizes are happier with Copper.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="c-jumble c-jumble-background--eggplant top-margin-mobile">
				<div className="container">
					<div className="c-jumble__container col-md-10 no-padding">
						<div className="c-jumble__content c-valign--middle extra-padding">
							<div className="row">
								<div className="col-md-6 order-md-2">
									<div className="c-image">
										<picture>
											<source
												type="image/webp"
												srcset="/imgs/industry/consulting-02.webp"
												alt="Consulting industry image"
											/>
											<source
												type="image/png"
												srcset="/imgs/industry/consulting-02.png"
												alt="Consulting industry image"
											/>
											<img
												alt="Consulting industry image"
												src="/imgs/industry/consulting-02.png"
											/>
										</picture>
									</div>
								</div>
								<div className="col-md-6 order-md-1">
									<pre className="c-eyebrow c-eyebrow--light">
										ONE CENTRAL SYSTEM
									</pre>
									<h2>Finally, your relationships organized.</h2>
									<p>
										You’ve got a lot of clients to juggle. Copper automatically
										organizes client and project information in one place—leads,
										deals, proposals, contracts, resources.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ProductTwoUp>
				<TwoUp
					eyebrow="ZERO DATA ENTRY"
					title="Less busy work, more revenue."
					copy="Relationships are your bread and butter. Copper is the only CRM that automatically tracks and inputs leads, contacts, account details, email history and more."
					reverse={true}
					imageUrl="/imgs/industry/consulting-03.png"
					imageWidth="538"
					imageHeight="518"
					aboutText="How RHR manages relationships with Copper."
					aboutUrl="resources/rhr-case-study"
				/>
				<TwoUp
					eyebrow="STREAMLINED WORKFLOWS"
					title="Multiple funnels: from deals to projects"
					copy="Copper streamlines deal management so your client relationship teams can deliver on sales goals and uplevel customer satisfaction."
					imageUrl="/imgs/industry/industry-consulting-IMG-03@2x.png"
					imageWidth="540"
					imageHeight="433"
				/>
			</ProductTwoUp>
			<section className="c-quote-carousel js-quote-carousel">
				<div className="container-fluid">
					<div className="c-quote-carousel__container col-md-11 col-lg-10 colorblock--putty colorblock--bottom--right">
						<div className="c-quote-carousel__content row background--eggplant">
							<div className="container">
								<div className="row">
									<div className="c-testimonial__image offset-md-2 col-md-4">
										<pre
											className="c-eyebrow c-eyebrow--light"
											style={{ top: "0", marginLeft: "0" }}
										>
											Success Stories
										</pre>
										<div className="colorblock--bottom--right colorblock--volt">
											<picture>
												<source
													type="image/webp"
													srcset="/imgs/industry/industry-consulting-customer.webp"
													className=""
													alt="Customers Testimonial"
												/>
												<source
													type="image/png"
													srcset="/imgs/industry/industry-consulting-customer.jpg"
													className=""
													alt="Customers Testimonial"
												/>
												<img
													className=""
													src="/imgs/industry/industry-consulting-customer.jpg"
													alt="Customers Testimonial"
												/>
											</picture>
										</div>
									</div>
									<div className="c-testimonial__quote col-md-4 offset-md-1">
										<div className="c-quote-carousel__blockquote--item active">
											<blockquote>
												Copper helps us sell faster and get higher-quality
												clients because of the way it allows people to share
												information and contacts across teams.
											</blockquote>
											<cite>
												Sarah Gilbert
												<br />
												<span className="c-quote-carousel__blockquote--position">
													Director of Operations and IT, RHR International
												</span>
											</cite>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<CallOut
				title={
					<>
						Build stronger relationships
						<br />
						with Copper.
					</>
				}
			/>
			<NumbersSection
				eyebrow="By The Numbers"
				title="Copper + Consultants"
				image={[
					{
						url: "/imgs/industry/industry-consulting-IMG-04@2x.jpg",
						title: "Numbers",
					},
				]}
			>
				<div className="row">
					<div className="c-number col-md-5">
						<span className="t-numbers">13</span>
						<p>hours per user per week saved on manual data entry</p>
					</div>
					<div className="c-number col-md-5 offset-md-1">
						<span className="t-numbers">50%</span>
						<p>more accurate reporting</p>
					</div>
				</div>
				<div className="row">
					<div className="c-number col-md-5">
						<span className="t-numbers">43%</span>
						<p>increase in team collaboration when closing deals</p>
					</div>
					<div className="c-number col-md-5 offset-md-1">
						<span className="t-numbers">36%</span>
						<p>faster response time to prospects and clients</p>
					</div>
				</div>
			</NumbersSection>
			<RelatedContent
				eyebrow="Resources"
				cards={[
					{
						eyebrow: "CASE STUDY",
						title:
							"Copper and Google Workspace help RHR International Boost Customer Relations and Sales",
						url: "/resources/rhr-case-study",
						image: "/imgs/industry/industry-consulting-blog-01@2x.jpg",
						imageWidth: "354",
						imageHeight: "190",
					},
					{
						eyebrow: "RELATIONSHIP ERA",
						title: "The New Wave of Customer Relationship Management",
						url: "/resources/new-wave-customer-relationship-management",
						image: "/imgs/industry/industry-consulting-blog-02@2x.jpg",
						imageWidth: "354",
						imageHeight: "190",
					},
					{
						eyebrow: "CASE STUDY",
						title:
							"Zivelo Accelerates Their Sales and BD Efforts by Leveraging Copper’s Deep Integration with Google Apps",
						url: "/7-ways-to-get-the-most-out-of-your-agencys-crm",
						image: "/imgs/industry/industry-consulting-blog-03@2x.jpg",
						imageWidth: "354",
						imageHeight: "190",
					},
				]}
			/>
			<FinalPleaHero
				title="Grow lasting relationships"
				copy="No credit card required. Start your 14-day free trial today."
				imageUrl="/imgs/industry/industry-consulting-final-plea@2x.jpg"
				imageWidth="960"
				imageHeight="720"
			/>
			<Footer />
		</>
	);
}
