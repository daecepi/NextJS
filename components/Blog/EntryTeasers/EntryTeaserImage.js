import TeaserImage from "./TeaserImage";

const EntryTeaserImage = ({
	blogCategories,
	featuredImage,
	title,
	readingTime,
	seoDescription,
	author,
	slug,
}) => {
	console.log("ENTERED FEATURED IMAGE", featuredImage);
	const mainCategory = blogCategories?.length
		? blogCategories[blogCategories.length - 1]
		: undefined;
	const entryTeaserAuthorToUse = author ? author : {};

	// Image definitions
	const image = entryTeaserAuthorToUse.photo || undefined;
	const optimizedImages = image?.optimizedFeaturedImages || undefined;
	return (
		<>
			<div className="c-blog-card">
				<TeaserImage featuredImage={featuredImage} />
				<a className="c-card__clickthrough" href={`/resources/${slug}`}></a>
				<div className="c-blog-card__content">
					<span className="t-eyebrow ">
						{mainCategory?.slug || ""}
						{readingTime?.length && <span>: {readingTime} read</span>}
					</span>
					<h3 className="c-blog-card__content__title d-flex d-md-none">
						{title}
					</h3>
					<h4 className="multiple-2-card-trailer  c-blog-card__content__title d-none d-md-flex disappear-mobile">
						{title}
					</h4>
					<p className="c-blog-card__content__subtitle p-sm no-margin d-none d-md-flex">
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
								<div className="circle-img c-author__img c-author__img--x-small background-{{random(1)+1}}">
									<span
										v-if="!entryTeaserAuthorToUse.photo"
										className="c-author__img--alt"
									>
										{author.name?.split(separator)[0] || ""}
									</span>
								</div>
							)}
							<div className="c-author__meta  c-author__meta--small">
								<p className="p-xtra-sm  no-margin">
									<strong>{entryTeaserAuthorToUse.name}</strong>
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
		</>
	);
};

export default EntryTeaserImage;
