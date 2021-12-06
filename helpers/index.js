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

export const filterStripTags = (string) => {
	return string.replace(/(<([^>]+)>)/gi, "");
};

export const generateOneOrZero = () => {
	return Math.round(Math.random());
};

export function getFullUrl(req, fallback) {
	//server side request object(req)
	if (req) {
		return (
			req.protocol + "://" + (req.req?.headers?.host || "") + req.originalUrl
		);
	} //making sure we are on the client side
	else if (!(typeof window === "undefined")) {
		return window.location.href;
	} else {
		return fallback;
	}
}
