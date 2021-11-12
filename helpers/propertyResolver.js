const linkitButtonPropertyGetter = (linkitString) => {
	// Verifies string structure
	if (
		linkitString.includes("class") &&
		!linkitString.includes('href=\\"') &&
		!linkitString.includes("</a>")
	)
		return undefined;
	const baseIndex = linkitString.lastIndexOf('\\">');
	const href = linkitString.substring(
		linkitString.indexOf('href=\\"') + 1,
		baseIndex
	);
	const value = linkitString.substring(
		baseIndex + 1,
		linkitString.indexOf("</a>")
	);
	const keyCtas = "ctas";
	return { href, value };
};
