import { createContext, useContext, useState } from "react";
import { atom } from "recoil";

const SyncedContext = createContext();

export function SyncedAppWrapper({ children }) {
	const [syncData, updateSyncData] = useState({
		pageHeroSynced: false,
		mainFormReference: undefined,
		generalSignupUrl: "/signup",
		marketoConfigurations: {
			replaceMarketoForms: false,
		},
	});

	const updateSyncState = (updateData) => {
		updateSyncData({ ...syncData, ...updateData });
	};

	return (
		<SyncedContext.Provider value={{ syncData, updateSyncState }}>
			{children}
		</SyncedContext.Provider>
	);
}

export function useSyncContext() {
	return useContext(SyncedContext);
}
