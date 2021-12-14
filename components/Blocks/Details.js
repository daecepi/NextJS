import Link from "next/link";
import { useCallback, useState } from "react";
import { getFeaturesLinking } from "../../lib/api";

const Details = ({ richText, stickyNavName }) => {
	let [pages, setPages] = useState({
		features: [],
	});

	const captureDetailPage = useCallback(async () => {
		const features = await getFeaturesLinking();
		setPages({ ...pages, features: features });
	}, []);

	captureDetailPage();

	return (
		<section
			id={`${stickyNavName != "" ? stickyNavName.toLowerCase() : ""}`}
			className="c-product-detail h-section-padding"
		>
			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<nav className="c-product-nav">
							<div className="c-product-nav__title">
								<p>More Features</p>
							</div>
							<ul className="js-accordion c-product-nav__container">
								{pages.features.map((feature) => {
									return (
										<li>
											{() => {
												if (feature.level === 1) {
													return (
														<a
															className="c-product-nav__parent js-accordion-toggle"
															onclick="event.stopPropagation();"
														>
															{feature.title}
															<div className="c-product-nav__toggle">
																<i className="material-icons notranslate">
																	keyboard_arrow_down
																</i>
															</div>
														</a>
													);
												} else {
													return feature.url;
												}
											}}
											{pages.children ? (
												<ul className="c-product-nav__children">
													{pages.children.map((child) => {
														return <li>{child.title}</li>;
													})}
												</ul>
											) : (
												""
											)}
										</li>
									);
								})}
							</ul>
						</nav>
						<div className="c-product-nav__details">
							<p className="p-xtra-sm">
								Want to see all the features?
								<br />
								<Link href="/features">
									<a>See the complete list</a>
								</Link>
							</p>

							<p className="p-xtra-sm">
								No credit card required.
								<br />
								Start your 14-day free trial today.
							</p>
							<Link href="https://app.copper.com/users/sign_up">
								<a className="c-button">Free Trial</a>
							</Link>
						</div>
					</div>
					<article className="col-md-8 offset-md-1">
						<div dangerouslySetInnerHTML={{ __html: richText }}></div>
					</article>
				</div>
			</div>
		</section>
	);
};
export default Details;
