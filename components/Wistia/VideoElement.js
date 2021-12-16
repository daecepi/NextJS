import Script from "next/script";
import { useEffect } from "react";

const VideoElement = ({ url }) => {
	useEffect(() => {
		const wistiaLibrary = document.createElement("script");
		wistiaLibrary.src = "";
		wistiaLibrary.defer = true;

		const wistiaScript = document.createElement("script");
		wistiaScript.src = url;
		wistiaScript.defer = true;

		//document.body.appendChild(wistiaLibrary);
		//document.body.appendChild(wistiaScript);
	});

	return (
		<>
			<Script strategy="afterInteractive" src={url} />
		</>
	);
};

export default VideoElement;
