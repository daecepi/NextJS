import Link from "next/link";
const SocialSharePostComponent = (entry) => {
	return (
		<div
			className="c-resource-right-rail c-resource-right-rail--social"
			style={{ right: "0px" }}
		>
			<div className="c-blog-builder--social-share__content">
				<Link
					href={`https://twitter.com/home?status=${entry.title || ""}%20${
						entry.fullUrl || ""
					}`}
				>
					<a target="_blank">
						<img src="https://www.copper.com/icons/social-twitter-outline.svg" />
					</a>
				</Link>
				<Link
					href={`https://www.linkedin.com/shareArticle?mini=true&url=${
						entry.fullUrl || ""
					}&title=${entry.title || ""}&summary=&source=`}
				>
					<a target="_blank">
						<img src="https://www.copper.com/icons/social-linkedin-outline.svg" />
					</a>
				</Link>
				<Link
					href={`mailto:?&subject=${entry.title || ""}&body=${
						entry.fullUrl || ""
					}`}
				>
					<a>
						<img src="https://www.copper.com/icons/social-mail-outline.svg" />
					</a>
				</Link>
			</div>
		</div>
	);
};

export default SocialSharePostComponent;
