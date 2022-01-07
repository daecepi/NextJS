import RequesiteForm from "../../Resources/RequesiteForm";

const Register = ({ entry }) => {
	const image =
		(entry.featuredImage?.length && entry.featuredImage[0]) || undefined;
	return (
		<div
			className={`c-webinar-form ${
				entry.specialStyle && entry.specialStyle == "inspirationSeries"
					? "inspiration-series-transform"
					: ""
			}`}
		>
			<div className="c-resource--header">
				{image && (
					<img
						src={image.url}
						alt={image.altText?.length ? image.altText : entry.title}
						className="c-resource--header__background-image c-resource--header__background-image--fullscreen"
					></img>
				)}
			</div>

			<RequesiteForm entry={entry} />
		</div>
	);
};

export default Register;
