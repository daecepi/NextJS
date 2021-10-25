const VideoSide = ({ heroVideoUrl }) => {
	return (
		<div class="col-md-6 c-valign--middle">
			<div class="c-video ">
				<div
					class="wistia_responsive_padding"
					style="padding:56.25% 0 0 0;position:relative;"
				>
					<div
						class="wistia_responsive_wrapper"
						style="height:100%;left:0;position:absolute;top:0;width:100%;"
					>
						<iframe
							src={heroVideoUrl}
							title="Wistia video player"
							allowtransparency="true"
							frameborder="0"
							scrolling="no"
							class="wistia_embed"
							name="wistia_embed"
							allowfullscreen
							mozallowfullscreen
							webkitallowfullscreen
							oallowfullscreen
							msallowfullscreen
							width="100%"
							height="100%"
						></iframe>
					</div>
				</div>
				<script
					src="https://fast.wistia.net/assets/external/E-v1.js"
					async
				></script>
			</div>
		</div>
	);
};
export default VideoSide;
