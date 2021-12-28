import Image from "next/image";
import Link from "next/link";

const RelatedContent = ({ eyebrow, cards }) => {
	return (
		<section className="c-blog__entries sl_hide">
			<div className="container">
				<pre className="c-eyebrow" style={{ top: 0, marginLeft: 0 }}>
					{eyebrow}
				</pre>
				<div className="row">
					{cards
						? cards.map((item) => {
								return (
									<div className="col-md-4">
										<div className="c-card__entry extended-card">
											<Link href={item.ctaUrl}>
												<a className="c-card__clickthrough"></a>
											</Link>
											<Image
												src={item.image}
												width={item.imageWidth || "348"}
												height={item.imageHeight || "176"}
												layout="responsive"
												className="c-card__default__image"
											/>

											<div className="c-card__entry__content">
												<div className="entry_categories">
													<span className="t-eyebrow">{item.eyebrow}</span>
												</div>
												<h4 className="c-card__entry-title">
													<Link href={item.ctaUrl}>
														<a className="underline_from_lefsettt">
															{item.title}
														</a>
													</Link>
												</h4>
											</div>
											<div className="c-card__meta">
												<Link href={item.ctaUrl}>
													<a className="t-link">
														{item.ctaText || "Read More"}
													</a>
												</Link>
											</div>
										</div>
									</div>
								);
						  })
						: ""}
				</div>
			</div>
		</section>
	);
};

export default RelatedContent;
