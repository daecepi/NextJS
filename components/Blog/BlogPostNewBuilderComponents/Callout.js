const Callout = ({ copy }) => {
	return (
		<div
			className="c-resource-callout col-md-10"
			dangerouslySetInnerHTML={{ _html: copy }}
		></div>
	);
};

export default Callout;
