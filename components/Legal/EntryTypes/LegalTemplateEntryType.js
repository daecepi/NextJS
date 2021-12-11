const LegalTemplateEntryType = ({ entry }) => {
	return (
		<section className="c-full-text">
			<div className="c-full-text__container">
				<h1>{entry.header}</h1>
				<div dangerouslySetInnerHTML={{ __html: entry.richText }}></div>
			</div>
		</section>
	);
};

export default LegalTemplateEntryType;
