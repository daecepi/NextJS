import Image from "next/image";
import Link from "next/link";

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
											<Link href={item.url}>
												<a className="c-card__clickthrough"></a>
											</Link>
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
													<Link href={item.url}>
														<a className="underline_from_lefsettt">
															{item.title}
														</a>
													</Link>
												</h4>
											</div>
											<div className="c-card__meta">
												<Link href={item.url}>
													<a className="t-link">Read More</a>
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
