const firstNameExtractor = (name, separator) => {
	return name?.split(separator)[0] || "";
};
