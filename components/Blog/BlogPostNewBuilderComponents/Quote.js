const Quote = ({ quote, author }) => {
	return (
		<div className="col-10 c-resource-quote">
			<div className="t-resource-bold-text--quote c-resource-quote__block t-vertical-line-left">
				{quote}
			</div>
			<div className="c-resource-quote__author">{author}</div>
		</div>
	);
};

export default Quote;
