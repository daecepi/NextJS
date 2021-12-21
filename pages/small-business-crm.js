import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HeroProduct from "../components/Blocks/HeroTypes/HeroProduct";
import Footer from "../components/Footer/Footer";
import NavigationDefault from "../components/Navigation/NavigationDefault";
import CaseStudy from "../components/ProductsComponent/CaseStudy/CaseStudy";
import ProductTwoUp from "../components/ProductsComponent/ProductTwoUp/ProductTwoUp";
import TwoUp from "../components/ProductsComponent/ProductTwoUp/TwoUp";
import CallOut from "../components/SinglesComponents/CallOut/CallOut";
import FinalPleaHero from "../components/SinglesComponents/FinalPleadHero/FinalPleaHero";
import NumbersSection from "../components/SinglesComponents/NumbersSection.js/NumbersSection";
export default function SmallBusinessCRM() {
	return (
		<>
			<Head>
				<title>
					Agency CRM for Advertising, Marketing & Creative Agencies | Copper
				</title>
			</Head>
			<NavigationDefault />
			<HeroProduct
				backgroundColor="segmentation"
				eyebrow="COPPER FOR SMALL BUSINESSES"
				eyebrowDark={true}
				title="A small business CRM, minus the bloat."
				copy="Copper is designed for Google Workspace so entrepreneurs, startups, and small-but-mighty teams can grow their businesses right from Gmail."
				ctaOneText="Try Free"
				ctaOneUrl="https://www.copper.com/signup"
				ctaTwoText="Request Demo"
				ctaTwoUrl="/demos"
				imageUrl="/imgs/segmentation/segmentation-smb-hero.jpg"
			/>
			<section className="c-single-column gsuite-cloud extra-top-margin">
				<div className="container">
					<div className="col-md-10 offset-md-1 c-single-column__container">
						<h2>
							Recommended for
							<br />
							Google Workspace
						</h2>
						<p>4.8 stars on Google Workspace Marketplace.</p>
						<Link href="https://workspace.google.com/marketplace/app/copper_crm/461423560386">
							<a className="t-link">See For Yourself</a>
						</Link>
					</div>
				</div>
			</section>
			<section className="c-jumble c-jumble-background--eggplant c-jumble--align-right no-top-margin">
				<div className="container">
					<div className="c-jumble__container col-md-10 offset-md-2 no-padding">
						<div className="c-jumble__content c-valign--middle">
							<div className="row column-reverse">
								<div className="col-md-5 order-md-2 relative">
									<div className="c-image">
										<Image
											src="/imgs/segmentation/SMB-UI02.png"
											width="478"
											height="500"
										/>
									</div>
								</div>
								<div className="col-md-7 order-md-1">
									<pre className="c-eyebrow c-eyebrow--light">
										SIMPLE & EASY TO USE{" "}
									</pre>
									<h2>Get up and running in minutes.</h2>
									<p>
										Copper is a different kind of CRM. We made implementation
										super easy so all your data is automatically populated
										without IT or admin support. Not only that, it’s also easily
										customizable to your processes in minutes—just sit back and
										watch your team instantly adopt the beautiful and intuitive
										system.
									</p>
									<Link href="/implementation">
										<a className="t-link h-white">Learn More</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ProductTwoUp>
				<TwoUp
					eyebrow="ONE CENTRALIZED SYSTEM"
					title="Finally, everything in one place."
					copy="Copper automatically captures and connects all your files, docs, emails, notes, contracts, and invoices in one place. With Copper, your team stays productive and marching in lockstep, so you can spend more time building customer relationships and growing your business."
					imageUrl="/imgs/segmentation/SMB-Ui03.png"
					imageWidth="534"
					imageHeight="430"
					ctaText="Learn More"
					ctaUrl="/collaboration"
				/>
				<TwoUp
					eyebrow="Copper plus Google Workspace</pre>"
					title="Work right from Gmail."
					copy="Through a seamless integration with Gmail, Docs, Sheets, and Hangouts, Copper empowers you to effortlessly track leads, work deals, add tasks, and collaborate together — all from your inbox. You won’t even notice you’re using a CRM."
					imageUrl="/imgs/segmentation/SMB-Ui04.png"
					imageWidth="538"
					imageHeight="464"
					reverse={true}
					ctaText="Learn More"
					ctaUrl="/g-suite-crm"
				/>
				<TwoUp
					eyebrow="AUTOMATED DATA ENTRY"
					title="Say goodbye to manual data entry."
					copy="Imagine: no more copying and pasting your leads’ information. Copper automatically captures and updates important contact information so your relationship database is always up to date. All that time wasted on data entry? It can now be spent on your future customers."
					imageUrl="/imgs/segmentation/segmentation-smb-3.png"
					imageWidth="429"
					imageHeight="711"
					ctaText="Eliminate data entry"
					ctaUrl="/productivity"
				/>
			</ProductTwoUp>
			<CaseStudy
				eyebrow="Success Story"
				imageUrl="/imgs/segmentation/segmentation-smb-quote.jpg"
				imageWidth="341"
				imageHeight="450"
				quote={[
					<span>
						Copper is <strong>incredibly intuitive</strong>, easy-to-use, and
						works instantly without IT admins.
					</span>,
				]}
				quoteby="OLIVIER CHANOUX"
				company="CMO/Co-Founder at LumApps"
				companyLogo="/imgs/segmentation/segmentation-smb-logo.png"
				companyLogoWidth="140"
				companyLogoHeight="30"
				backgroundColor="midnight"
				linkUrl="https://www.copper.com/blog/lumapps-case-study"
				linkText="See Case Study"
			/>
			<CallOut title="Because you have work to do." smallTitle={true} />

			<NumbersSection
				eyebrow="By The Numbers"
				title="The only CRM that works for you."
				image={[
					{
						url: "/imgs/segmentation/segmentation-smb-numbers.jpg",
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
			<section className="c-cols">
				<div className="container">
					<div className="row">
						<div className="col-md order-2">
							<div className="c-image c-image--center no-embelleshment">
								<Image
									src="/imgs/segmentation/segmentation-smb-customers.png"
									width="350"
									height="297"
								/>
							</div>
						</div>
						<div className="col-md order-1">
							<h2>
								Small businesses
								<br />
								love Copper.
							</h2>
							<p>
								Small businesses love Copper. Meet the first simple and
								intuitive CRM that allows you to work right from your Gmail.
							</p>
						</div>
					</div>
				</div>
			</section>
			<FinalPleaHero
				eyebrow="GOODBYE DATA ENTRY"
				title="Start moving relationships forward today."
				imageUrl="/imgs/segmentation/segmentation-smb-final-plea.jpg"
				imageWidth="960"
				imageHeight="720"
			/>
			<Footer />
		</>
	);
}
