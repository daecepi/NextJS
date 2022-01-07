import Image from "next/image";
import Link from "next/link";

const BlogCardImage = (props) => {
	console.log("SUPER PROPS ", props);
	return (
		<div className="c-blog-card">
			<Link href={`/${props.uri || ""}`}>
				<a className="c-card__clickthrough"></a>
			</Link>
			<div className="c-blog-card__image-container">
				{props.imagegradient && (
					<div
						className={`${
							props.imagegradient
								? "c-resource--header__gradient c-resource--header__gradient--" +
								  props.imagegradient +
								  ""
								: ""
						}`}
					></div>
				)}
				<Image
					layout="responsive"
					src={`http:${props.imageUrl}`}
					width={props.imageWidth}
					height={props.imageHeight}
				></Image>
				{/* <img className="c-blog-card__image" src={props.imageUrl} />  */}
				{/* // :alt="entry.image[0] && entry.image.altText ? entry.image.altText : entry.title"       */}
			</div>
			<div className="c-blog-card__content c-blog-card__content--large">
				<span className="t-eyebrow ">
					{props.parentCategory}{" "}
					<span v-if="entry.readingTime">: {props.readTime} read</span>
				</span>
				<h3 className="c-blog-card__content__title c-blog-card__content__title--large multiple-3-card-trailer">
					{props.title}
				</h3>
				<p className="c-blog-card__content__subtitle c-blog-card__content__subtitle--large p-sm no-margin d-none d-sm-block multiple-4-card-trailer">
					{props.description}
				</p>
				<div className="c-blog-card__content__author">
					<div className="c-author">
						{props.authorPhoto ? (
							<div
								className={`circle-img c-author__img background-100 relative`}
								style={{ overflow: "hidden", borderRadius: "50%" }}
							>
								<Image
									className="circle"
									src={`http:${props.authorPhoto}`}
									layout="fill"
									objectFit="cover"
								></Image>
							</div>
						) : (
							<div className="circle-img c-author__img c-author__img background-100">
								<span className="c-author__img--alt">
									{props.authorName} {props.authorLastName}
								</span>
							</div>
						)}
						<div className="c-author__meta">
							<p className="p-xtra-sm  no-margin">
								<strong>
									{props.authorName} {props.authorLastName}
								</strong>
							</p>
							{props.authorTitle ? (
								<p className="p-xtra-sm no-margin">{props.authorTitle}</p>
							) : (
								<p className="p-xtra-sm no-margin">Contributor</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogCardImage;
