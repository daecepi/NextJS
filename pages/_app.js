import "../styles/global.scss";
import { CookiesWrapper } from "../contexts/CookiesContext";

import { SyncedAppWrapper } from "../contexts/SyncContext";

// Cookies provide for the cookies context
import { CookiesProvider } from "react-cookie";
import { useEffect, useState } from "react";
import { parseCookies } from "../helpers";

function MyApp({ Component, pageProps }) {
	const [cookieValues, updateCookieValues] = useState({});
	useEffect(() => {
		const data = parseCookies();

		console.log("data", data);
		updateCookieValues({ data, updateCookieValues });
	});
	return (
		// <ThemeProvider attribute="class">
		// <ThemeProvider attribute="class">

		<CookiesProvider>
			<SyncedAppWrapper>
				<CookiesWrapper value={cookieValues}>
					<Component {...pageProps} />
				</CookiesWrapper>
			</SyncedAppWrapper>
		</CookiesProvider>
		// </ThemeProvider>
	);
}

export default MyApp;
