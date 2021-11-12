import { atom, useRecoilState } from "recoil";

export const globalsAtom = atom({
	key: "globalsSet",
	default: {},
});

export function updateGlobalsAtom(newGlobalObject) {
	console.log("global object from which state is updating");
	const [globals, updateGlobals] = useRecoilState(globalsAtom);

	if (newGlobalObject === globals) return;

	updateGlobals(newGlobalObject);
}
