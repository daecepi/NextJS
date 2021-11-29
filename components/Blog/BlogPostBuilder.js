import Script from "next/script";
import { useEffect } from "react";
import BlogBuildersFeaturedImage from "./BlogBuildersFeaturedImage";
import BlogFinalPlea from "./BlogFinalPlea";
import EntryTeaser from "./EntryTeasers/EntryTease";
import EntryTeaserImage from "./EntryTeasers/EntryTeaserImage";

const BlogPostBuilder = ({ entry, featuredPosts }) => {
	// SELECTS THE LAST CATEGORY
	const mainCategory =
		(entry.blogCategories?.length &&
			entry.blogCategories[entry.blogCategories.length - 1]) ||
		undefined;

	return (
		<>
			<BlogBuildersFeaturedImage
				slug={entry.slug}
				featuredImage={entry.featuredImage}
				imageGradient={entry.imageGradient}
			/>
			<section className="c-resource-content c-resource-content--overlap--blog">
				<div className="c-blog-builder--social-share"></div>
				<div className="c-resource-content__container container">
					<div className="row">
						<div className="c-resource-content__container__col col-sm-12">
							<div className="c-blog-builder--content__title">
								{/* Show category & reading time */}
								{mainCategory?.length && entry.readingTime?.length && (
									<pre className="c-eyebrow">
										{mainCategory.title} : {entry.readingTime} read
									</pre>
								)}
								{/* Only show category if no readng time given */}
								{mainCategory?.length && !entry.readingTime.length && (
									<pre className="c-eyebrow">{mainCategory.title}</pre>
								)}
								{entry.blogSubtitle?.length ? (
									<>
										<h1 className="shared-title-space">{entry.title || ""}</h1>
										<p className="shared-title-space">
											{entry.blogSubtitle || ""}
										</p>
									</>
								) : (
									<h1 className="">{entry.title || ""}</h1>
								)}
							</div>
							<div className="c-blog-builder--content__meta">
								<div className="c-author">
									{authorInformation.photo ? (
										<div
											className="circle-img c-author__img"
											style={{
												backgroundImage: `url(' ${authorInformation.photo.url} )'`,
											}}
										></div>
									) : (
										<div
											className={`circle-img c-author__img background-${
												(authorInformation.id % 2) + 1
											}`}
										>
											<span
												v-if="!authorInformation.photo"
												className="c-author__img--alt"
											>
												{authorInformation.name?.split(" ")[0] || ""}
											</span>
										</div>
									)}
									<div className="c-author__meta">
										<p className="p-sm  no-margin">
											<strong>{authorInformation.name}</strong>
										</p>
										{authorInformation.authorTitle ? (
											<p className="p-sm  no-margin">
												{authorInformation.authorTitle}
											</p>
										) : (
											<p className="p-sm  no-margin">Contributor</p>
										)}
									</div>
								</div>
								<p className="p-sm date">
									{new Date(entry.postDate).toLocaleDateString("F j, Y")}
								</p>
							</div>
							<div className="c-blog__entry--post">
								<div className="c-blog__entry__copy">
									<div
										className="c-blog__body-copy"
										dangerouslySetInnerHTML={{ __html: entry.richText }}
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{featuredPosts?.length ? (
				<div className="c-blog-builder__related">
					<h3 className="c-copper-chronicles__title">Related articles</h3>
					<div className="row">
						{featuredPosts.map((postCard) => {
							return (
								<div className="col-xl-4 col-lg-6 col-md-12 c-card-col">
									{postCard.featuredImage?.length ? (
										<EntryTeaserImage {...postCard} />
									) : (
										<EntryTeaser {...postCard} />
									)}
								</div>
							);
						})}
					</div>
				</div>
			) : (
				""
			)}
			<BlogFinalPlea />
		</>
	);
};

export default BlogPostBuilder;
