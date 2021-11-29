const Media = ({ addMedia, mediaDescription }) => {
	return (
		<div className="c-resource-media">
			<div className="" dangerouslySetInnerHTML={{ __html: addMedia }}></div>
			{mediaDescription && (
				<pre className="description">{mediaDescription}</pre>
			)}
		</div>
	);
};
export default Media;
