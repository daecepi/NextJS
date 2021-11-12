import "../styles/global.scss";

// Cookies provide for the cookies context
import { CookiesProvider } from "react-cookie";
import { useEffect, useState } from "react";
import { parseCookies } from "../helpers";
import { RecoilRoot } from "recoil";
function MyApp({ Component, pageProps }) {
	return (
		<RecoilRoot>
			<Component {...pageProps} />
		</RecoilRoot>
	);
}

export default MyApp;
