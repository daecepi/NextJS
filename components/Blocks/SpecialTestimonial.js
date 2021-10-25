const SpecialTestimonial = ({ text }) => {
	return (
		<section className="c-jumble c-jumble-background--graphite top-margin-mobile">
			<div className="container">
				<div className="c-jumble__container col-md-10 no-padding">
					<div className="c-jumble__content c-valign--middle extra-padding">
						<div className="row">
							<div className="col-md-6 order-md-2">
								<div className="c-image">
									<picture>
										<source
											type="image/webp"
											srcset="/imgs/industry/industry-tech-IMG-01-update@2x.webp"
											alt="Industry real state image 1"
										/>
										<source
											type="image/png"
											srcset="/imgs/industry/industry-tech-IMG-01-update@2x.png"
											alt="Industry real state image 1"
										/>
										<img
											alt="Industry real state image 1"
											src="/imgs/industry/industry-tech-IMG-01-update@2x.png"
										/>
									</picture>
								</div>
							</div>
							<div className="col-md-6 order-md-1">
								<pre className="c-eyebrow c-eyebrow--light">
									BUILT FOR GOOGLE WORKSPACE
								</pre>
								<h2>The CRM for Google Workspace.</h2>
								<p>
									Copper is designed and built for Google Workspace so your team
									can do everything—from adding leads to closing deals right
									from your inbox.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SpecialTestimonial;
