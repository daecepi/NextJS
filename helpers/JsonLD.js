import { filterStripTags } from ".";

export const obtainWebinarDuration = (durationString) => {
	let tempString = durationString
		.filterStripTags()
		.toLowerCase()
		.replace("hours", "H")
		.replace("min", "M")
		.replace("minutes", "M")
		.replace("secs", "S")
		.replace(" ", "");
	return `PT${tempString}`;
};

/**
 * Right now this function cannot generate resized images that can be done from Craft, WORK FOR THE FUTURE
 * CURRENTLY: retuning image size
 */
export const getResizedImagesForJsonLd = (url) => {
	return url;
};
