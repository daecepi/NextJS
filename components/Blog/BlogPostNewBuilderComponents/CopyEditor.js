const CopyEditor = ({ copyEditorSectionId, calloutSentence, copy }) => {
	return (
		<div
			id={copyEditorSectionId?.length ? copyEditorSectionId : undefined}
			className="c-resource-copy__editor"
		>
			<div className="row">
				{calloutSentence?.length && (
					<div className="col-md-10 callout">
						<h2>{calloutSentence}</h2>
					</div>
				)}
				<div
					className="col-md-10 offset-md-1 copy t-pink-bullet-points t-pink-bullet-points--pull-left"
					dangerouslySetInnerHTML={{ __html: copy }}
				></div>
			</div>
		</div>
	);
};
export default CopyEditor;
