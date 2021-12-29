import DefaultHead from "../Head/DefaultHead";
import NavigationSelector from "../Navigation/NavigationSelector";

import { CookiesWrapper } from "../../contexts/CookiesContext";

import { SyncedAppWrapper } from "../..//contexts/SyncContext";
import { globalsAdapter } from "../../helpers/globalsHelpers";

const DefaultPageBase = ({
	entry,
	globals,
	classNameOverride,
	navigationButtonsOverride,
	children,
}) => {
	console.log("coming from entry", entry);

	const globalToUse = globals || [];
	const globalsObject = globalsAdapter(globalToUse);

	const slugToUse = entry?.slug || "";

	return (
		<SyncedAppWrapper>
			<DefaultHead entry={entry || {}} />
			<NavigationSelector
				entryType={entry?.typeHandle || slugToUse}
				navigationButtonsOverride={navigationButtonsOverride || undefined}
			/>
			<CookiesWrapper>
				<div className={classNameOverride || ""}>
					<main className="content">{children}</main>
				</div>
			</CookiesWrapper>
		</SyncedAppWrapper>
	);
};

export default DefaultPageBase;
