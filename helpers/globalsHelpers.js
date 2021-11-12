export const globalsAdapter = (globalValue) => {
	if (globalValue.length === 0) return {};
	// returns the transformed global object to make to have the structure as twig woulod return it
	return globalValue
		.map((globalCategory) => {
			const { handle, ...globalInfo } = globalCategory;
			let obj = {};
			obj[handle] = { ...globalInfo };
			return obj;
		})
		.reduce((previousValue, currentValue) => {
			return { ...previousValue, ...currentValue };
		});
};
