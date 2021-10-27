import cookie from "cookie";
export function parseCookies(cookieName) {
	return cookie.parse(cookieName ? cookieName : document.cookie);
}

export const detectEnvUrl = () => {
	switch (process.env.ENVIRONMENT) {
		case "dev":
			return ".copper.lndo.site";

		default:
			return "";
	}
};
