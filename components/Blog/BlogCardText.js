const BlogCardText = (props) => {
	return (
		<div className="c-blog-card ">
			<a className="c-card__clickthrough" href={props.url}></a>
			<div className="c-blog-card__content c-blog-card__content--large">
				<span className="t-eyebrow ">
					{props.parentCategory}{" "}
					{props.readTime ? <span>: {props.readTime} read</span> : null}
				</span>
				<h2 className="c-blog-card__content__title c-blog-card__content__title--large multiple-3-card-trailer">
					{props.title}
				</h2>
				<p className="c-blog-card__content__subtitle c-blog-card__content__subtitle--large p-sm no-margin d-none d-sm-block multiple-4-card-trailer">
					{props.description}
				</p>
				<div className="c-blog-card__content__author">
					<div className="c-author circle">
						{props.authorPhoto ? (
							<div
								className="circle-img circle c-author__img background-100"
								style={{ backgroundImage: "url(" + props.authorPhoto + ")" }}
							></div>
						) : (
							<div className="['circle-img c-author__img', 'c-author__img', 'background-' +random(entry.author.id)]">
								<span className="c-author__img--alt">
									{props.authorName} {props.authorLastName}
								</span>
							</div>
						)}

						<div className="c-author__meta">
							<p className="p-sm  no-margin">
								<strong>
									{props.authorName} {props.authorLastName}
								</strong>
							</p>
							{props.authorTitle ? (
								<p className="p-sm no-margin">{props.authorTitle}</p>
							) : (
								<p className="p-sm no-margin">Contributor</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogCardText;
