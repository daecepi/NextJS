import { React } from "react";

import DropImage from "./variations/DropImage";
import ExtendedImage from "./variations/ExtendedImage";
import NormalImage from "./variations/NormalImage";

const TwoColumnSection = (props) => {
	const { imageOrientation, title, copyTitle, copyParagraph } = props;

	const TwoColumnSelector = (imageOrientation) => {
		console.log("Slector executed");
		if (imageOrientation === "Drop Left" || imageOrientation === "Drop Right") {
			return <DropImage {...props} />;
		} else if (
			imageOrientation === "Extended Image Left" ||
			imageOrientation === "Extended Image Right"
		) {
			return <ExtendedImage {...props} />;
		}

		return <NormalImage {...props} />;
	};

	return (
		<div className="md:container md:mx-auto">
			<h1>{title}</h1>

			{TwoColumnSelector(imageOrientation)}
		</div>
	);
};

export default TwoColumnSection;
