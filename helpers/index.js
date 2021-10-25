import cookie from "cookie";
export function parseCookies(cookieName) {
	return cookie.parse(cookieName ? cookieName : document.cookie);
}
