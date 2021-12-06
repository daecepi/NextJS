const SocialSharePostComponent = (entry) => {
	return (
		<div
			className="c-resource-right-rail c-resource-right-rail--social"
			style={{ right: "0px" }}
		>
			<div className="c-blog-builder--social-share__content">
				<a
					target="_blank"
					href={`https://twitter.com/home?status=${entry.title || ""}%20${
						entry.fullUrl || ""
					}`}
				>
					<img src="https://www.copper.com/icons/social-twitter-outline.svg" />
				</a>
				<a
					target="_blank"
					href={`https://www.linkedin.com/shareArticle?mini=true&url=${
						entry.fullUrl || ""
					}&title=${entry.title || ""}&summary=&source=`}
				>
					<img src="https://www.copper.com/icons/social-linkedin-outline.svg" />
				</a>
				<a
					href={`mailto:?&subject=${entry.title || ""}&body=${
						entry.fullUrl || ""
					}`}
				>
					<img src="https://www.copper.com/icons/social-mail-outline.svg" />
				</a>
			</div>
		</div>
	);
};

export default SocialSharePostComponent;
