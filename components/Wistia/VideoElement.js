import { useEffect } from "react";

const VideoElement = ({ url }) => {
	useEffect(() => {
		const wistiaLibrary = document.createElement("script");
		wistiaLibrary.src = "https://fast.wistia.com/embed/medias/videolink.jsonp";
		wistiaLibrary.defer = true;

		const wistiaScript = document.createElement("script");
		wistiaScript.src = url;
		wistiaScript.defer = true;

		document.body.appendChild(wistiaLibrary);
		document.body.appendChild(wistiaScript);
	});

	return <></>;
};

export default VideoElement;
