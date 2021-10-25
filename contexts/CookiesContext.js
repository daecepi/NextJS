import { createContext, useContext } from "react";

import { parseCookies } from "../helpers";

const AppContext = createContext();

export function CookiesWrapper({ children }) {
	//const data = parseCookies();

	/*if (data) {
		console.log("head", data);
	}*/

	let sharedState = {
		cookiesList: [],
	};

	return (
		<AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}
