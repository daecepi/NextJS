import DefaultPageBase from "../PageBase/DefaultPageBase";
import CookiesEntryType from "./EntryTypes/CookiesEntryType";
import LegalEntryType from "./EntryTypes/LegalEntryType";
import LegalTemplateEntryType from "./EntryTypes/LegalTemplateEntryType";
import PrivacyEntryType from "./EntryTypes/PrivacyEntryType";
import TosEntryType from "./EntryTypes/TosEntryType";

const LegalSelector = ({ entry }) => {
	const legalSelector = (entry) => {
		switch (entry.typeHandle) {
			case "legal":
				return <LegalEntryType entry={entry} />;
			case "cookies":
				return <CookiesEntryType entry={entry} />;
			case "privacy":
				return <PrivacyEntryType entry={entry} />;
			case "tos":
				return <TosEntryType entry={entry} />;
			case "legalTemplate":
				return <LegalTemplateEntryType entry={entry} />;
			default:
				return "";
		}
	};

	return <div className="c-legal">{legalSelector(entry)}</div>;
};

export default LegalSelector;
