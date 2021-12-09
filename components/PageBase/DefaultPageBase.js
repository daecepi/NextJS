import DefaultHead from "../Head/DefaultHead";
import NavigationSelector from "../Navigation/NavigationSelector";

import { CookiesWrapper } from "../../contexts/CookiesContext";

import { SyncedAppWrapper } from "../..//contexts/SyncContext";
import { globalsAdapter } from "../../helpers/globalsHelpers";

const DefaultPageBase = ({ entry, globals, classNameOverride, children }) => {
	console.log("coming from entry", entry);

	const globalToUse = globals || [];
	const globalsObject = globalsAdapter(globalToUse);

	return (
		<SyncedAppWrapper>
			<DefaultHead entry={entry || {}} />
			<NavigationSelector entryType={entry?.typeHandle || "unknown"} />
			<CookiesWrapper>
				<div className={classNameOverride || entry.slug}>
					<main className="content">{children}</main>
				</div>
			</CookiesWrapper>
		</SyncedAppWrapper>
	);
};

export default DefaultPageBase;
