const OneColumnSimpleFullScreen = (
	backgroundImageClass,
	copy,
	ctaText,
	ctaUrl
) => {
	return (
		<section
			class={`c-single-column ${
				backgroundImageClass ? backgroundImageClass : ""
			} extra-top-margin`}
		>
			<div className="container">
				<div className="col-md-10 offset-md-1 c-single-column__container">
					<div dangerouslySetInnerHTML={{ __html: copy }}></div>
					{ctaText.length && ctaUrl.length ? (
						<a className="t-link" href={ctaUrl}>
							{ctaText}
						</a>
					) : (
						""
					)}
				</div>
			</div>
		</section>
	);
};
export default OneColumnSimpleFullScreen;
