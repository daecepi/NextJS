const CookiesEntryType = () => {
	return (
		<section className="c-full-text">
			<div className="c-full-text__container">
				<h1>Cookie Policy</h1>
				<div dangerouslySetInnerHTML={{ __html: entry.richText }}></div>
			</div>
		</section>
	);
};

export default CookiesEntryType;
