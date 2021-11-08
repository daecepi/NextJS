import Image from "next/image";

const RelatedContent = (props) => {
	return (
		<section className="c-blog__entries sl_hide">
			<div className="container">
				<pre className="c-eyebrow" style={{ top: 0, marginLeft: 0 }}>
					{props.eyebrow}
				</pre>
				<div className="row">
					{props.cards
						? props.cards.map((item) => {
								return (
									<div className="col-md-4">
										<div className="c-card__entry extended-card">
											<a
												className="c-card__clickthrough"
												href={item.url}
											></a>
											<Image
												src={item.image}
												width={item.imageWidth}
												height={item.imageHeight}
											></Image>

											<div className="c-card__entry__content">
												<div className="entry_categories">
													<span className="t-eyebrow">{item.eyebrow}</span>
												</div>
												<h4 className="c-card__entry-title">
													<a
														className="underline_from_lefsettt"
														href={item.url}
													>
														{item.title}
													</a>
												</h4>
											</div>
											<div className="c-card__meta">
												<a className="t-link" href={item.url}>
													Read More
												</a>
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
