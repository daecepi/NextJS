const LegalEntryType = ({ entry }) => {
	return (
		<section className="c-full-text">
			<div className="c-full-text__container">
				<h1>Privacy Policy</h1>
				<div dangerouslySetInnerHTML={{ _html: entry.richText }}></div>
				<div className="certificates"></div>
			</div>
		</section>
	);
};

export default LegalEntryType;
