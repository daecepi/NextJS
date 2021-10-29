import CtaGroup from "../../Simples/CtaGroup";

import { useSyncContext } from "../../../../contexts/SyncContext";

const HeroCopy = ({
	slug,
	loopIndex,
	eyebrow,
	eyebrowSettings,
	copyLogo,
	richText,
	ctas,
	bulletItemsInHero,
	bulletPointsMode,
	specialBulletLogos,
	specialBulletsText,
}) => {
	let firstEyebrowToTakePlace =
		eyebrowSettings && eyebrowSettings[0]?.eyebrowColor[0]?.slug
			? eyebrowSettings[0].eyebrowColor[0].slug
			: { eyebrowColor: [{ slug: "white" }] };

	// Synced context
	const syncedContext = useSyncContext();
	return (
		<>
			{firstEyebrowToTakePlace && eyebrow?.length ? (
				<pre
					className={`c-eyebrow ${
						eyebrowSettings && firstEyebrowToTakePlace
							? "c-eyebrow--" + firstEyebrowToTakePlace
							: ""
					}`}
				>
					{eyebrow}
				</pre>
			) : (
				""
			)}
			{copyLogo && copyLogo[0] ? (
				<div
					className={`hero-logo${
						slug == "try-free-crm-capterra" && loopIndex == 1
							? "--double-size"
							: ""
					}`}
				>
					<img
						src={copyLogo[0].url}
						alt={
							copyLogo[0].altText?.length
								? copyLogo[0].altText
								: copyLogo[0].title
						}
					/>
				</div>
			) : (
				""
			)}

			<div
				className="hero-text"
				dangerouslySetInnerHTML={{ __html: richText }}
			></div>
			{/* Bullets points section */}
			{bulletItemsInHero?.length ? (
				<ul className="ul-list__container ul-list--white-checks ">
					{bulletItemsInHero.map((bulletItem) => {
						return (
							<>
								{/* Assuming 'text' is the column handle of the text field */}
								<li
									className={`${
										bulletItem.bulletHeader?.length
											? "ul-list--li-paragraph-design"
											: ""
									}`}
								>
									<h4 className="ul-list__bullet-header">
										{bulletItem.bulletHeader}
									</h4>
									<p className="ul_list__bullet-description">
										{bulletItem.bulletContent}
									</p>
								</li>
							</>
						);
					})}
				</ul>
			) : (
				""
			)}
			{/* Special bullet points with logos section */}
			{bulletPointsMode == "displayAsBulletPoints" &&
			specialBulletLogos &&
			specialBulletsText ? (
				<div className="c-logo-bullets">
					{specialBulletLogos.map((bulletLogo, index) => {
						return (
							<div className="c-logo-bullets--element">
								<img
									src={bulletLogo.url}
									alt={
										bulletLogo.altText?.length
											? bulletLogo.altText
											: bulletLogo.title
									}
								/>
								<h3>
									{specialBulletsText.length >= index - 1
										? matrixBlock.specialBulletsText[index - 1].header
										: ""}
								</h3>
							</div>
						);
					})}
				</div>
			) : (
				""
			)}
			{/* CTAs section */}
			{() => {
				if (ctas?.length) {
					return <CtaGroup ctas={ctas} />;
				} else if (slug == "demo-request-pers") {
					return (
						<a className="c-button c-button--large" href="/demos">
							Request Demo
						</a>
					);
				} else if (slug == "free-trial-pers") {
					<a
						className="c-button c-button--large sendUTMsToAmplitude"
						href={syncedContext.generalSignupUrl}
					>
						Try Free
					</a>;
				}
				return "";
			}}
		</>
	);
};

export default HeroCopy;
