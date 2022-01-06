import HeroProduct from "./HeroProduct";

const HeroProductsSalesReportingVariation = (props) => {
	return (
		<>
			<style jsx global>
				{`
					.c-hero--split.product-page .c-image {
						background: #d7e0e7;
						margin-top: 50px;
					}
				`}
			</style>
			<HeroProduct {...props} />
		</>
	);
};

export default HeroProductsSalesReportingVariation;
