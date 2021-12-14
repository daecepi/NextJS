import Image from "next/image";
import Link from "next/link";
import { getHighlightsPopupInformation } from "../../../models/about-models";

import ModalBase from "./ModalBase/ModalBase";

const AboutBioModal = ({ leaderId, containerStyles, closeSignal }) => {
	const leaderInformation = getHighlightsPopupInformation();

	// Social media destructuring
	const linkedingUrl = leaderInformation[leaderId]?.socialLinks?.linkedin || "";
	const linkedinDisplay = linkedingUrl !== "" ? "block" : "none";

	const twitterUrl = leaderInformation[leaderId]?.socialLinks?.twitter || "";
	const twitterDisplay = twitterUrl !== "" ? "block" : "none";

	return (
		<ModalBase
			display={leaderInformation[leaderId] ? true : false}
			template="about-bio"
			specialStyle={containerStyles}
			closeSignal={closeSignal}
		>
			<div className="title row">
				<div className="col-md-5 ">
					<div className="">
						<div className="leader-img">
							<img
								width="100%"
								src={
									leaderInformation[leaderId]?.profileImage ||
									"/imgs/about/dennis-ceo-1.jpg"
								}
								alt="Dennis CEO image"
								id="leader-image"
							/>
						</div>
						<div className="social-links">
							<Link href={linkedingUrl}>
								<a className="s-linkedin" style={{ display: linkedinDisplay }}>
									<Image
										src="https://copper.objects.frb.io/imgs/about/highlights/linkedin-modal.svg"
										width="15px"
										height="15px"
									/>
								</a>
							</Link>
							<Link href={twitterUrl}>
								<a className="s-twitter" style={{ display: twitterDisplay }}>
									<Image
										src="https://copper.objects.frb.io/imgs/about/highlights/twitter-modal.svg"
										width="18px"
										height="15px"
									/>
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-md-7 leader-titles">
					<p id="leader-name">
						{leaderInformation[leaderId]?.leaderName || ""}
					</p>
					<p id="leader-title" className="sm putty">
						{leaderInformation[leaderId]?.leaderTitle || ""}
					</p>
					<p
						id="leader-bio"
						className="p-sm"
						dangerouslySetInnerHTML={{
							__html: leaderInformation[leaderId]?.leaderBio || "",
						}}
					></p>
				</div>
			</div>
		</ModalBase>
	);
};

export default AboutBioModal;
