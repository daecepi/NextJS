import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import cookieCutter from "cookie-cutter";

import { parseCookies } from "../helpers";
import { cookiesKeysUsed } from "../helpers/cookieDefinitions";

const CookieContext = createContext();

export function CookiesWrapper({ values, children }) {
	// Query params manager from NextJS (can only be called insied a component body, will be used in Hook)
	const { query } = useRouter();

	// Creates prototype object of the cookies that are being used right now
	//console.log("cookies value ", cookiesKeysUsed, values);
	const defaultCookieValue = cookiesKeysUsed.map((cookieKey) => {
		return [cookieKey, undefined];
	});

	const finalTransFormation = Object.fromEntries(defaultCookieValue);

	//console.log("Cookie starting combination ", finalTransFormation);

	// reference list of the cookies to use
	const [cookieValues, updateCookieValues] = useState({
		...finalTransFormation,
	});

	useEffect(() => {
		// Review the changes needed
		const savedCookieValues = parseCookies();

		// Getting
		const filteredQueryParams = Object.keys(query)
			.filter((key) => cookiesKeysUsed.includes(key))
			.reduce((obj, key) => {
				obj[key] = query[key];
				return obj;
			}, {});

		// Getting params and comparing it with the current values to make the appropiate overrides
		updateCookieValues({
			...cookieValues,
			...savedCookieValues,
			...filteredQueryParams,
		});

		// Making a listener to check when a user is oging ot leave the page for saving the cookies

		/*window.onbeforeunload = (event) => {
			const e = event || window.event;
			// Cancel the event
			e.preventDefault();
			if (e) {
				e.returnValue = ""; // Legacy method for cross browser support
			}
			return ""; // Legacy method for cross browser support
		};*/
	}, []);

	const updateCookieContext = (cookiesToUpdate) => {
		updateCookieValues({ ...cookieValues, ...cookiesToUpdate });
	};

	//const data = parseCookies();

	/*if (data) {
		console.log("head", data);
	}*/

	return (
		<CookieContext.Provider value={{ cookieValues, updateCookieContext }}>
			{children}
		</CookieContext.Provider>
	);
}

export function useCookieContext() {
	return useContext(CookieContext);
}
