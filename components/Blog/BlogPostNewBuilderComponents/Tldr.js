const Tldr = ({ tldr }) => {
	console.log("TLDR ", tldr);
	if (!tldr) return "";
	return (
		<div
			className="t-resource-bold-text"
			dangerouslySetInnerHTML={{ _html: tldr || "" }}
		></div>
	);
};

export default Tldr;
