const TEXT_INSIDE_TAG_REGEX = /(?<=\>)(?!\<)(.*)(?=\<)(?<!\>)/g;
const HREF_REGEX = /(?<=href=")([^\'\"]+)/g;

export const linkitButtonPropertyGetter = (linkitString) => {
	if (!linkitString?.length) return "";
	// Verifies string structure
	if (
		linkitString.includes("class") &&
		!linkitString.includes('href="') &&
		!linkitString.includes("</a>")
	)
		return undefined;
	const baseIndex = linkitString.lastIndexOf('">');
	const href = linkitString.substring(
		linkitString.indexOf('href="') + 6,
		baseIndex
	);
	const value = linkitString.substring(
		baseIndex + 2,
		linkitString.indexOf("</a>")
	);
	return { href, value };
};

export const getLink = (ancorText) => {
	const href = ancorText.match(TEXT_INSIDE_TAG_REGEX)[0];
	const value = ancorText.match(HREF_REGEX)[0];
	return { href, value };
};

export const getTagText = (tagString) => {
	const found = tagString.match(TEXT_INSIDE_TAG_REGEX)?.[0];
	return found;
};

export const addHTTPStoUrl = (url) => {
	if (!url) return "";
	if (url.startsWith("//")) return url.replace("//", "https://");
	return url;
};

export const urlDomainStripper = (url, domain) => {
	const domainToUse = domain ? domain : "copper.com";
	if (!url && !url.indexOf(domainToUse)) return "";
	return url.replace("https://", "");
};
