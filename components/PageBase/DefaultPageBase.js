import DefaultHead from "../Head/DefaultHead";

import { CookiesWrapper } from "../../contexts/CookiesContext";

import { SyncedAppWrapper } from "../..//contexts/SyncContext";
const DefaultPageBase = ({ children }) => {
	return (
		<SyncedAppWrapper>
			<CookiesWrapper>
				<DefaultHead />
				{children}
			</CookiesWrapper>
		</SyncedAppWrapper>
	);
};

export default DefaultPageBase;
