import Script from "next/script";
import Head from "next/head";
import DefaultPageBase from "../components/PageBase/DefaultPageBase";
import { getEntryBySectionHandle, getEntryByType } from "../lib/api";
import { useState } from "react";
import PricingPlans from "../components/PricingPlans/PricingPlans";
import PricingTable from "../components/PricingTable/PricingTable";
import PricingFaq from "../components/PricingFaq/PricingFaq";
import FinalHeroFull from "../components/SinglesComponents/FinalHeroFull/FinalHeroFull";
import Footer from "../components/Footer/Footer";

const PricingPage = ({ entry, globals, reducePadding }) => {
	const { pricingBlocks } = entry;

	return (
		<DefaultPageBase entry={entry} globals={globals}>
			<Head>
				<title>Copper Pricing & Plans: How Much Does Copper Cost?</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Script src="/js/lazyload.min.js" strategy="beforeInteractive"></Script>
			{pricingBlocks.map((block) => (
				<div className="pricing">
					{block.typeHandle === "pricingHero" ? (
						<PricingPlans
							header={block.header}
							subHeader={block.subHeader}
							pricingPlans={block.pricingPlans}
						/>
					) : block.typeHandle === "pricingTable" ? (
						<PricingTable
							includeNavigation={block.includeNavigation}
							tableTitle={block.tableTitle}
							pricingFeatures={block.pricingFeatures}
							lastInstance={block.lastInstance}
							footnote={block.footnote}
						/>
					) : (
						block.typeHandle === "pricingFaq" && (
							<>
								<PricingFaq header={block.header} accordion={block.accordion} />
							</>
						)
					)}
				</div>
			))}
			<FinalHeroFull
				title="Try Copper for free"
				copy="14-day trial. Instant activation, no credit card required. Give the Copper software solution a try today."
			/>
			<Footer />
		</DefaultPageBase>
	);
};

export default PricingPage;

export async function getStaticProps({ context }) {
	const res = await getEntryByType("pricing", "pricing");
	return {
		props: {
			entry: res?.entry || {},
			globals: res?.globalSets || [],
		},
		revalidate: 120, // In seconds
	};
}
