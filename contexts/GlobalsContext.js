import { createContext, useContext, useEffect, useState } from "react";

const GlobalsContext = createContext();

export function CookiesWrapper({ children }) {
	return (
		<GlobalsContext.Provider value={{ cookieValues, updateCookieContext }}>
			{children}
		</GlobalsContext.Provider>
	);
}

export function useCookieContext() {
	return useContext(GlobalsContext);
}
