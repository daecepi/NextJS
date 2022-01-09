import React from "react";
import { getTagText } from "../../helpers/propertyResolver";

const PricingFaq = ({ header, accordion }) => {
	console.log(
		"🚀 ~ file: PricingFaq.js ~ line 5 ~ PricingFaq ~ header",
		header
	);
	console.log(
		"🚀 ~ file: PricingFaq.js ~ line 4 ~ PricingFaq ~ accordion",
		accordion
	);
	return (
		<section className="c-press-articles">
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<h2>{header}</h2>
					</div>
					<div className="col-md-7 offset-md-1">
						{accordion.map((acc) => {
							console.log(
								"🚀 ~ file: PricingFaq.js ~ line 30 ~ {accordion.map ~ acc",
								acc
							);
							return (
								<div className="extra-bottom-margin--x-small">
									<h3>{acc.header}</h3>
									<div
										dangerouslySetInnerHTML={{
											__html: acc.richText,
										}}
									></div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default PricingFaq;
