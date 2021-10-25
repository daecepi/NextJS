const VideoSimple = ({ embeddedVideo }) => {
	return (
		<>
			<div className="c-video">
				{embeddedVideo ? (
					<div dangerouslySetInnerHTML={{ __html: embeddedVideo }}></div>
				) : (
					""
				)}
			</div>
		</>
	);
};

export default VideoSimple;
