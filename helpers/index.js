import cookie from "cookie";
export function parseCookies(cookieName) {
	return cookie.parse(cookieName ? cookieName : document.cookie);
}

export const detectEnvUrl = () => {
	switch (process.env.NEXT_PUBLIC_ENVIRONMENT) {
		case "dev":
			return ".copper.lndo.site";
		case "staging":
			return "staging.frb.io";
		case "prod":
			return "copper.com";
		default:
			return "";
	}
};
