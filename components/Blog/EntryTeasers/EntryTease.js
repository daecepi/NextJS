import { generateOneOrZero } from "../../../helpers";

const EntryTeaser = ({
	blogCategories,
	readingTime,
	title,
	seoDescription,
	author,
	slug,
}) => {
	const mainCategory = blogCategories?.length
		? blogCategories[blogCategories.length - 1]
		: "";
	const entryTeaserAuthorToUse = author ? author : undefined;

	// IMage definitions
	const image = entryTeaserAuthorToUse.photo || undefined;
	const optimizedImages = image?.optimizedFeaturedImages || undefined;

	return (
		<div className="c-blog-card">
			<a className="c-card__clickthrough" href={`/resources/${slug}` || ""}></a>
			<div className="c-blog-card__content c-blog-card__content--text">
				<span className="t-eyebrow ">
					{mainCategory?.slug || ""}
					{readingTime?.length && <span>: {readingTime} read</span>}
				</span>
				<h3 className="c-blog-card__content__title c-blog-card__content__title--text">
					{title}
				</h3>
				<p className="c-blog-card__content__subtitle p-sm no-margin">
					{seoDescription}
				</p>
				<div className="c-blog-card__content__author">
					<div className="c-author">
						{entryTeaserAuthorToUse?.photo ? (
							<div
								className="circle-img c-author__img c-author__img--x-small"
								style={{
									backgroundImage: `url('${
										optimizedImages?.src(576)
											? optimizedImages.src(576)
											: image.url
									}')`,
								}}
							></div>
						) : (
							<div
								className={`circle-img c-author__img c-author__img--x-small background-${
									generateOneOrZero() + 1
								}`}
							>
								<span
									v-if="!entryTeaserAuthorToUse.photo"
									className="c-author__img--alt"
								>
									{author.name?.split(separator)[0] || ""}
								</span>
							</div>
						)}
						<div className="c-author__meta c-author__meta--small">
							<p className="p-xtra-sm  no-margin">
								<strong>{author.name}</strong>
							</p>
							{author?.authorTitle?.length ? (
								<p className="p-xtra-sm  no-margin">{author.authorTitle}</p>
							) : (
								<p className="p-xtra-sm  no-margin">Contributor</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EntryTeaser;
