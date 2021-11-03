import DefaultHead from "../Head/DefaultHead";

import { CookiesWrapper } from "../../contexts/CookiesContext";

import { SyncedAppWrapper } from "../..//contexts/SyncContext";
const DefaultPageBase = ({ entry, children }) => {
	return (
		<SyncedAppWrapper>
			<DefaultHead entry={entry || {}} />
			<CookiesWrapper>{children}</CookiesWrapper>
		</SyncedAppWrapper>
	);
};

export default DefaultPageBase;
