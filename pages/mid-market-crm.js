import Head from 'next/head';
import Image from 'next/image';
import HeroProduct from '../components/Blocks/HeroTypes/HeroProduct';
import Footer from '../components/Footer/Footer';
import NavigationDefault from '../components/Navigation/NavigationDefault';
import CaseStudy from '../components/ProductsComponent/CaseStudy/CaseStudy';
import ProductTwoUp from '../components/ProductsComponent/ProductTwoUp/ProductTwoUp';
import TwoUp from '../components/ProductsComponent/ProductTwoUp/TwoUp';
import Customers from '../components/Sections/Customers/Customers';
import CallOut from '../components/SinglesComponents/CallOut/CallOut';
import FinalPleaHero from '../components/SinglesComponents/FinalPleadHero/FinalPleaHero';
import NumbersSection from '../components/SinglesComponents/NumbersSection.js/NumbersSection';
import RelatedContent from '../components/SinglesComponents/RelatedContent/RelatedContent';

export default function MidMarkeCRM() {
	let companiesLogos = [
		{ imageUrl: '/imgs/segmentation/Mailchimp.jpg', width: 180, height: 53 },
		{ imageUrl: '/imgs/segmentation/mealpal.jpg', width: 180, height: 53 },
		{ imageUrl: '/imgs/segmentation/zapier.jpg', width: 180, height: 53 },
		{ imageUrl: '/imgs/segmentation/lumapps.jpg', width: 180, height: 53 },
		{ imageUrl: '/imgs/segmentation/bird.jpg', width: 180, height: 53 },
		{ imageUrl: '/imgs/segmentation/nerdwallet.jpg', width: 180, height: 53 },
	];
	return (
		<>
			<Head>
				<title>Mid Market CRM Software for Fast Growth | Copper</title>
			</Head>
			<NavigationDefault />
			<HeroProduct
				backgroundColor="segmentation"
				eyebrow="COPPER FOR MEDIUM SIZED BUSINESSES"
				eyebrowDark={true}
				title="A CRM that helps you scale revenue, faster."
				copy="When it comes to growing and scaling efficiently, Copper is the leading relationship management tool."
				ctaOneText="Try Free"
				ctaOneUrl="https://www.copper.com/signup"
				ctaTwoText="Request Demo"
				ctaTwoUrl="/demos"
				imageUrl="/imgs/segmentation/segmentation-mm-hero.jpg"
			/>
			<Customers title="The world’s fastest growing businesses choose Copper." companiesLogos={companiesLogos} />
			<section class="c-jumble c-jumble-background--graphite c-jumble--align-right no-top-margin">
				<div class="container">
					<div class="c-jumble__container col-md-10 offset-md-2 no-padding">
						<div class="c-jumble__content c-valign--middle">
							<div class="row column-reverse">
								<div class="col-md-5 order-md-2">
									<div class="c-image">
										<Image src="/imgs/segmentation/segmentation-mm-jumble.png" width="478" height="465" />
									</div>
								</div>
								<div class="col-md-7 order-md-1">
									<pre class="c-eyebrow c-eyebrow--light">SALES WORKFLOW AUTOMATION</pre>
									<h2>Hello productivity. Goodbye busy work.</h2>
									<p>
										Need to streamline your processes? Copper automates tasks and sales workflows, and even prompts you to follow up on next steps in
										your relationship cycle to help every seller move deals forward faster.
									</p>
									<a class="t-link h-white" href="/productivity">
										Start Automating
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ProductTwoUp>
				<TwoUp
					eyebrow="SEAMLESS GOOGLE WORKSPACE INTEGRATION"
					title="Build relationships right in Gmail."
					copy="Why should you have to leave your inbox to do your best work? After all, that’s where your relationships live. Copper seamlessly integrates with the Google Workspace apps you already use so you can track leads, win deals, and manage relationships—right from your inbox."
					imageUrl="/imgs/segmentation/MM-Ui2.png"
					imageWidth="534"
					imageHeight="452"
					reverse={false}
					aboutText="Learn More"
					aboutUrl="/g-suite-crm"
				></TwoUp>
				<TwoUp
					eyebrow="SALES WORKFLOW AUTOMATION"
					title="No more FOMO on customer interactions."
					copy="For growing teams, customer conversations and files are often tracked in different places. Copper automatically captures email history, meetings, notes, docs, and calls for every customer so you’ll get a real-time view of every single interaction."
					imageUrl="/imgs/segmentation/segmentation-mm-2.png"
					imageWidth="538"
					imageHeight="461"
					reverse={true}
					aboutText="Work Together"
					aboutUrl="/collaboration"
				></TwoUp>
				<TwoUp
					eyebrow="REPORTING AND ANALYTICS"
					title="Up-to-the-minute business insights."
					copy="Copper’s out-of-the-box reporting and visual dashboards show you where your best leads are coming from, how sales are trending for the month, and which activities are leading to closed deals. You can even monitor performance and motivate your sellers by setting goals for individuals and teams across the business."
					imageUrl="/imgs/segmentation/segmentation-mm-3.png"
					imageWidth="429"
					imageHeight="346"
					reverse={false}
					aboutText="Learn More"
					aboutUrl="/insights"
				></TwoUp>
			</ProductTwoUp>
			<CaseStudy
				eyebrow="Success Story"
				imageUrl="/imgs/segmentation/segmentation-mm-quote.jpg"
				imageWidth="341"
				imageHeight="450"
				quote={[
					<span>
						We can push out 10x the amount of work because of the <strong>automation</strong> in Copper.
					</span>,
				]}
				quoteby="BEVERLY ROBINSON"
				companyLogo="/imgs/segmentation/segmentation-mm-logo.png"
				companyLogoWidth="186"
				companyLogoHeight="68"
				backgroundColor="hot-pink"
			></CaseStudy>

			<CallOut title="Building better customer relationships today." smallTitle={true} />

			<NumbersSection
				eyebrow="By The Numbers"
				title="Copper + Google Workspace. Better together"
				imageUrl="/imgs/segmentation/segmentation-mm-numbers.jpg"
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
						eyebrow: 'Infographic',
						title: 'ROI Infographic',
						url: 'https://get.copper.com/rs/763-DVL-293/images/infographic_ROI_survey.pdf',
						image: '/imgs/segmentation/inforgraphic-roi header.jpg',
						imageWidth: '800',
						imageHeight: '418',
					},
					{
						eyebrow: 'Resources',
						title: 'The CRM Benchmark Report',
						url: '/blog/crm-benchmark-report',
						image: '/imgs/general/segmentation/benchmark_blog_800x400@2x.jpg',
						imageWidth: '800',
						imageHeight: '418',
					},
					{
						eyebrow: 'CRM & TECH',
						title: 'The New Requirements of CRM',
						url: '/blog/the-new-requirements-of-crm',
						image: '/imgs/general/segmentation/blog_header_C_volt.png',
						imageWidth: '800',
						imageHeight: '418',
					},
				]}
			></RelatedContent>
			<FinalPleaHero
				eyebrow="GOODBYE DATA ENTRY"
				title="Start scaling faster today."
				imageUrl="/imgs/segmentation/segmentation-mm-final-plea.jpg"
				imageWidth="1440"
				imageHeight="1200"
			/>
			<Footer />
		</>
	);
}
