import Link from "next/link";
const OneColumnSimpleFullScreen = (
	backgroundImageClass,
	copy,
	ctaText,
	ctaUrl
) => {
	return (
		<section
			className={`c-single-column ${
				backgroundImageClass ? backgroundImageClass : ""
			} extra-top-margin`}
		>
			<div className="container">
				<div className="col-md-10 offset-md-1 c-single-column__container">
					<div dangerouslySetInnerHTML={{ __html: copy }}></div>
					{ctaText.length && ctaUrl.length ? (
						<Link href={ctaUrl}>
							<a className="t-link">{ctaText}</a>
						</Link>
					) : (
						""
					)}
				</div>
			</div>
		</section>
	);
};
export default OneColumnSimpleFullScreen;
