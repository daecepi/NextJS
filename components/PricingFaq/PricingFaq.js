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
		<section class="c-press-articles">
			<div class="container">
				<div class="row">
					<div class="col-md-4">
						<h2>{header}</h2>
					</div>
					<div class="col-md-7 offset-md-1">
						{accordion.map((acc) => {
							console.log(
								"🚀 ~ file: PricingFaq.js ~ line 30 ~ {accordion.map ~ acc",
								acc
							);
							return (
								<div class="extra-bottom-margin--x-small">
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
