import Link from "next/link";
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
							<Link href="/blog/customer-management-relationship-era-research-report">
								<a className="c-card__clickthrough"></a>
							</Link>
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
									<Link href="/blog/customer-management-relationship-era-research-report">
										<a className="underline_from_lefsettt">
											New Research: The State of Customer Management in the
											Relationship Era
										</a>
									</Link>
								</h4>
							</div>
							<div className="c-card__meta">
								<Link href="/blog/customer-management-relationship-era-research-report">
									<a className="t-link">Read More</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="c-card__entry extended-card">
							<Link href="/blog/lumapps-case-study">
								<a className="c-card__clickthrough"></a>
							</Link>
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
									<Link href="/blog/lumapps-case-study">
										<a className="underline_from_lefsettt">
											LumApps Selects Copper CRM to Manage 2000% Lead Growth
										</a>
									</Link>
								</h4>
							</div>
							<div className="c-card__meta">
								<Link href="/blog/lumapps-case-study">
									<a className="t-link">Read More</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="c-card__entry extended-card">
							<Link href="/blog/sales-content-machine">
								<a className="c-card__clickthrough"></a>
							</Link>
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
									<Link href="/blog/sales-content-machine">
										<a className="underline_from_lefsettt">
											How to Turn Your Sales Process into a Money-Making Machine
										</a>
									</Link>
								</h4>
							</div>
							<div className="c-card__meta">
								<Link href="/blog/sales-content-machine">
									<a className="t-link">Read More</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default ResourcesModule;
