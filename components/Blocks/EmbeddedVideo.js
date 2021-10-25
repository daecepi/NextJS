const EmbeddedVideo = ({ slug, embeddedVideoSnippet, stickyNavName }) => {
	return (
		<section
			id={`${stickyNavName ? stickyNavName.toLowerCase() : ""}`}
			className="c-webinar-video"
		>
			<div className="container my-5">
				{slug === "crm-for-real-estate-agents-and-brokers" ? (
					<div
						className="c-video col-md-10 offset-md-1 p-0"
						dangerouslySetInnerHTML={{ __html: embeddedVideoSnippet }}
					></div>
				) : (
					<div
						className="c-video"
						dangerouslySetInnerHTML={{ __html: embeddedVideoSnippet }}
					></div>
				)}
			</div>
		</section>
	);
};

export default EmbeddedVideo;
