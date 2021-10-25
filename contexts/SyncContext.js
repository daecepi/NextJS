import { createContext, useContext } from "react";

const SyncedContext = createContext();

export function SyncedAppWrapper({ children }) {
	let sharedState = {
		pageHeroSynced: false,
		mainFormReference: undefined,
		generalSignupUrl: "/signup",
		marketoConfigurations: {
			replaceMarketoForms: false,
		},
		updateSyncedState: () => {},
	};

	return (
		<SyncedContext.Provider value={sharedState}>
			{children}
		</SyncedContext.Provider>
	);
}

export function useSyncContext() {
	return useContext(SyncedContext);
}
