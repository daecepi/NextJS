const Callout = ({ copy }) => {
	return (
		<div
			className="c-resource-callout col-md-10"
			dangerouslySetInnerHTML={{ __html: copy }}
		></div>
	);
};

export default Callout;
