import { atom, useRecoilState } from "recoil";

export const SyncedAtom = atom({
	key: "SyncedAtom",
	default: {
		pageHeroSynced: false,
		mainFormReference: undefined,
		generalSignupUrl: "/signup",
		marketoConfigurations: {
			replaceMarketoForms: false,
		},
	},
});

export const updateSyncedAtom = (newSyncedData) => {
	const [syncedAtomValue, setSyncedAtom] = useRecoilState(SyncedAtom);

	// Updating the synced state without losing previous important imformation
	setSyncedAtom({ ...syncedAtomValue, ...newSyncedData });
};
