import "../styles/global.scss";

// Cookies provide for the cookies context
import { CookiesProvider } from "react-cookie";
import { useEffect, useState } from "react";
import { parseCookies } from "../helpers";

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
