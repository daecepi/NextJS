export const linkitButtonPropertyGetter = (linkitString) => {
	// Verifies string structure
	if (linkitString.includes("class") && !linkitString.includes('href="') && !linkitString.includes("</a>"))
		return undefined;
	const baseIndex = linkitString.lastIndexOf('">');
	const href = linkitString.substring(linkitString.indexOf('href="') + 6, baseIndex);
	const value = linkitString.substring(baseIndex + 2, linkitString.indexOf("</a>"));
	return { href, value };
};

export const paragraphTextGetter = (paragraphString) => {
	if (paragraphString.includes("class") && !paragraphString.includes("</p>")) return undefined;

	const baseIndex = paragraphString.lastIndexOf("<p>");
	const text = paragraphString.substring(baseIndex + 3, paragraphString.indexOf("</p>"));
	return text;
};
