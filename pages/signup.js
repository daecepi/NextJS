import { useRouter } from "next/router";
import DefaultSignupWidget from "../components/Blocks/Simples/DefaultSingupWidget";
import DefaultPageBase from "../components/PageBase/DefaultPageBase";
import { getEntryBySectionHandle } from "../lib/api";

const SignupPage = ({ entry, globals }) => {
	const reviewsData = [
		{
			rating: 5,
			quote: "The best project management tool and CRM",
			author: "Daniel C",
			authorRole: "Sales and Marketing Specialist",
		},
		{
			rating: 4.5,
			quote: "Easy to use and great CRM",
			author: "Federico M",
			authorRole: "Commercial Director and Financial Services",
		},
		{
			rating: 4.5,
			quote: "The best CRM if you use Google Workspace products!",
			author: "Erik V",
			authorRole: "Manager, Marketing and Advertising",
		},
	];
	const { pathname } = useRouter();
	console.log(
		"MEGA SOMETHING",
		new Array(reviewsData.length + 1, {}).map((val) => "hols")
	);
	return (
		<DefaultPageBase entry={entry} globals={globals}>
			<section
				id="variation-b"
				className="full-screen-section signup-configuration"
			>
				<div className="floating-button left top">
					<a href="/">
						{/* 
                <?xml version="1.0" encoding="UTF-8" standalone="no"?>
                <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
              */}
						<svg
							class="company-logo"
							version="1.1"
							id="Layer_1"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							width="64px"
							height="64px"
							viewBox="0 0 128 128"
							enable-background="new 0 0 128 128"
							xmlSpace="preserve"
						>
							{" "}
							<image
								id="image0"
								width="128"
								height="128"
								x="0"
								y="0"
								xlinkHref="data:image/png;base64,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"
							/>
						</svg>
					</a>
				</div>
				<section
					className={`
              c-hero--split
              landing-hero
              ${entry.removeNavigation ? "h-no-nav" : ""}
              c-hero--general-signup-form
              no-background
              special-margin`}
				>
					<div className="container">
						<div className="row">
							{/* Section you should place (with or without container depending on situation) */}
							<div
								className="col-md-6 .c-valign--middle c-align--center"
								style={{ color: "#3C3F40" }}
							>
								<h3
									className="text-center"
									style={{ fontSize: "32px", fontFamily: "Graphik-regular" }}
								>
									Our customers love us.
								</h3>
								<p
									className="text-center extra-margin no-top-margin"
									style={{ marginBottom: "2px", color: "#646567" }}
								>
									4.6 out of 5 stars
								</p>
								{reviewsData.map((review) => {
									const ceiledValue = Math.ceil(review.rating + 1);
									return (
										<div className="row row--no-reverse align-items-center">
											<div className="col-md-7 text-center">
												<div className="stars-container no-bottom-margin star-container-light-top">
													{/* Loop for filled stars */}
													{Array.from(
														Array(Math.floor(review.rating)).keys()
													).map((val) => (
														<img
															className="star"
															alt="Filled star image"
															src="/imgs/slider/Single-filled-star.svg"
														/>
													))}
													{/* Printing the odd star */}
													{review.rating % 1 == 0.5 && (
														<img
															className="star"
															alt="Half star image"
															src="/imgs/slider/Half-star.svg"
														/>
													)}
													{/* If 5 stars haven't been printed */}
													{ceiledValue < 6 &&
														Array.from(Array(5 - ceiledValue).keys()).map(
															(val) => (
																<img
																	className="star"
																	alt="Empty star image"
																	src="/imgs/slider/null-star.svg"
																/>
															)
														)}
												</div>
											</div>
											<p
												className="no-bottom-margin text-center"
												style={{ marginTop: "14px" }}
											>
												"{review.quote}"
											</p>
											<p
												className="p-sm no-bottom-margin text-center"
												style={{
													marginTop: "6px",
													fontSize: "13px",
													lineHeight: "18px",
												}}
											>
												— {review.author}, {review.authorRole}
											</p>
										</div>
									);
								})}
								<p className="text-center extra-top-margin--x-small">
									Read our reviews on{" "}
									<img
										alt="G2 slider logo"
										style={{
											height: "28px",
											width: "100px",
											display: "inline-block",
										}}
										src="imgs/slider/G2-logo.svg"
									/>
								</p>
							</div>
							{/* End of section you should place */}
							<div className="col-md-6 col-margin-inverted c-valign--middle signup-aconditioner lining split-left-lining">
								<DefaultSignupWidget />
							</div>
						</div>
					</div>
				</section>
			</section>
		</DefaultPageBase>
	);
};

export default SignupPage;

export async function getStaticProps(context) {
	const res = await getEntryBySectionHandle("signup", "signup");

	return {
		props: {
			entry: res.entry,
			globals: res.globalSets,
		},
		revalidate: 120, // in seconds
	};
}
