const ResourcesModule = () => {
	return (
		<section className="c-blog__entries sl_hide">
			<div className="container">
				<pre className="c-eyebrow" style={{ top: "0", marginLeft: "0" }}>
					Resources
				</pre>
				<div className="row">
					<div className="col-md-4">
						<div className="c-card__entry extended-card">
							<a
								className="c-card__clickthrough"
								href="/blog/customer-management-relationship-era-research-report"
							></a>
							<picture>
								<source
									type="image/webp"
									srcSet="/imgs/industry/industry-tech-blog-01@2x.webp"
									className="c-card__default__image"
									alt="Industry tech blog image"
								/>
								<source
									type="image/png"
									srcSet="/imgs/industry/industry-tech-blog-01@2x.png"
									className="c-card__default__image"
									alt="Industry tech blog image"
								/>
								<img
									className="c-card__default__image"
									alt="Industry tech blog image"
									src="/imgs/industry/industry-tech-blog-01@2x.png"
								/>
							</picture>

							<div className="c-card__entry__content">
								<div className="entry_categories">
									<span className="t-eyebrow">RELATIONSHIP ERA</span>
								</div>
								<h4 className="c-card__entry-title">
									<a
										className="underline_from_lefsettt"
										href="/blog/customer-management-relationship-era-research-report"
									>
										New Research: The State of Customer Management in the
										Relationship Era
									</a>
								</h4>
							</div>
							<div className="c-card__meta">
								<a
									className="t-link"
									href="/blog/customer-management-relationship-era-research-report"
								>
									Read More
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="c-card__entry extended-card">
							<a
								className="c-card__clickthrough"
								href="/blog/lumapps-case-study"
							></a>
							<picture>
								<source
									type="image/webp"
									srcSet="/imgs/industry/industry-tech-blog-02@2x.webp"
									className="c-card__default__image"
									alt="Industry tech blog image 2"
								/>
								<source
									type="image/png"
									srcSet="/imgs/industry/industry-tech-blog-02@2x.png"
									className="c-card__default__image"
									alt="Industry tech blog image 2"
								/>
								<img
									className="c-card__default__image"
									alt="Industry tech blog image 2"
									src="/imgs/industry/industry-tech-blog-02@2x.png"
								/>
							</picture>
							<div className="c-card__entry__content">
								<div className="entry_categories">
									<span className="t-eyebrow">CASE STUDY</span>
								</div>
								<h4 className="c-card__entry-title">
									<a
										className="underline_from_lefsettt"
										href="/blog/lumapps-case-study"
									>
										LumApps Selects Copper CRM to Manage 2000% Lead Growth
									</a>
								</h4>
							</div>
							<div className="c-card__meta">
								<a className="t-link" href="/blog/lumapps-case-study">
									Read More
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="c-card__entry extended-card">
							<a
								className="c-card__clickthrough"
								href="/blog/sales-content-machine"
							></a>
							<picture>
								<source
									type="image/webp"
									srcSet="/imgs/industry/industry-tech-blog-03@2x.webp"
									className="c-card__default__image"
									alt="Industry tech blog image 3"
								/>
								<source
									type="image/png"
									srcSet="/imgs/industry/industry-tech-blog-03@2x.png"
									className="c-card__default__image"
									alt="Industry tech blog image 3"
								/>
								<img
									className="c-card__default__image"
									alt="Industry tech blog image 3"
									src="/imgs/industry/industry-tech-blog-03@2x.png"
								/>
							</picture>
							<div className="c-card__entry__content">
								<div className="entry_categories">
									<span className="t-eyebrow">SALES PRODUCTIVITY</span>
								</div>
								<h4 className="c-card__entry-title">
									<a
										className="underline_from_lefsettt"
										href="/blog/sales-content-machine"
									>
										How to Turn Your Sales Process into a Money-Making Machine
									</a>
								</h4>
							</div>
							<div className="c-card__meta">
								<a className="t-link" href="/blog/sales-content-machine">
									Read More
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default ResourcesModule;
