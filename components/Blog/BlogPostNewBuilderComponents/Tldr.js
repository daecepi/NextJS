const Tldr = ({ tldr }) => {
	return (
		<div
			className="t-resource-bold-text"
			dangerouslySetInnerHTML={{ _html: tldr }}
		></div>
	);
};

export default Tldr;
