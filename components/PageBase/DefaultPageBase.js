import DefaultHead from "../Head/DefaultHead";
import NavigationSelector from "../Navigation/NavigationSelector";

import { CookiesWrapper } from "../../contexts/CookiesContext";

import { SyncedAppWrapper } from "../..//contexts/SyncContext";
import { globalsAdapter } from "../../helpers/globalsHelpers";

const DefaultPageBase = ({ entry, globals, children }) => {
	console.log("coming from entry", entry);

	const globalToUse = globals || [];
	const globalsObject = globalsAdapter(globalToUse);

	return (
		<SyncedAppWrapper>
			<DefaultHead entry={entry || {}} />
			<NavigationSelector entryType={entry?.typeHandle || "unknown"} />
			<CookiesWrapper>{children}</CookiesWrapper>
		</SyncedAppWrapper>
	);
};

export default DefaultPageBase;
