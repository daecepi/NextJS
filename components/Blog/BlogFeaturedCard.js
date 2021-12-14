import Image from "next/image";
import Link from "next/link";

const BlogFeaturedCard = (props) => {
	return (
		<div className="c-blog-featured-card">
			<Link href={props.url}>
				<a className="c-card__clickthrough"></a>
			</Link>
			<div className="c-blog-card__content--featured">
				<span className="t-eyebrow ">
					<strong>
						{props.parentCategory}{" "}
						{props.readTime ? (
							<span
								className="d-inline-block d-md-none"
								v-if="entry.readingTime"
							>
								{props.readTime}: read
							</span>
						) : null}
					</strong>
				</span>
				{props.consolidateTitle ? (
					<p className="c-blog-featured-card__title p-sm no-margin">
						{props.consolidateTitle}
					</p>
				) : (
					<p className="c-blog-featured-card__title p-sm no-margin">
						{props.title}
					</p>
				)}
			</div>
			<div className="c-blog-featured-card__image">
				{props.imageGradient ? (
					<div
						className={`c-resource--header__gradient c-resource--header__gradient--${props.imageGradient}`}
					></div>
				) : null}
				{props.image ? (
					<Image
						className="c-blog-card__image d-none d-md-block"
						src={`https:${props.image}`}
						width={props.imageWidth}
						height={props.imageHeight}
					></Image>
				) : (
					<Image
						src="https://d2ydtwisqcxv72.cloudfront.net/placeholder.svg"
						width="900"
						height="631"
					></Image>
				)}
			</div>
		</div>
	);
};

export default BlogFeaturedCard;
