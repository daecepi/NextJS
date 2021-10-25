import { useRouter } from "next/router";
import FullImageHero from "./HeroTypes/FullImageHero";
import HalfFullImageHero from "./HeroTypes/HalfFullImageHero";

import SignupFormHero from "./HeroTypes/SingupFormHero";
import MarketoFormHero from "./HeroTypes/MarketoFormHero";
import DefaultHero from "./HeroTypes/DefaultHero";

const HeroBlock = ({
	slug,
	loopIndex,
	removeNavigation,
	fullImageHero,
	halfFullImage,
	backgroundColor,
	specialClass,
	imageContain,
	linkToNav,
	imageOverlay,
	eyebrow,
	eyebrowSettings,
	copyLogo,
	richText,
	bulletItemsInHero,
	bulletPointsMode,
	specialBulletsText,
	cta,
	assetText,
	image,
	displayVideo,
	heroVideoUrl,
	displaySignupForm,
	signupFormType,
	heroSignupTitle,
	heroSignupDescription,
	signupSide,
	displayMarketoForm,
	marketoFormCopy,
	heroMarketoId,
	ctasOnMarketo,
	marketoThankYouMessage,
	successVideoEmbedCode,
	marketoSide,
	marketoConnect,
}) => {
	const commonParams = {
		slug,
		loopIndex,
		backgroundColor,
		image,
		imageContain,
		imageOverlay,
		eyebrow,
		eyebrowSettings,
		copyLogo,
		richText,
		ctas: cta,
	};
	const { query } = useRouter();

	if (fullImageHero) {
		return <FullImageHero {...commonParams} />;
	} else if (halfFullImage) {
		return <HalfFullImageHero {...commonParams} />;
	} else if (displaySignupForm == true) {
		return (
			<SignupFormHero
				imageContain={imageContain}
				signupSide={signupSide}
				signupFormType={signupFormType}
				specialClass={specialClass}
				heroSignupTitle={heroSignupTitle}
				heroSignupDescription={heroSignupDescription}
				heroVideoUrl={heroVideoUrl}
				{...commonParams}
			/>
		);
	} else if (marketoSide == true) {
		return (
			<MarketoFormHero
				{...commonParams}
				removeNavigation={removeNavigation}
				marketoSide={marketoSide}
				notFirstHero={loopIndex > 1 ? true : false}
				specialClass={specialClass}
				displayVideo={displayVideo}
				heroVideoUrl={heroVideoUrl}
				heroMarketoId={heroMarketoId}
				marketoFormCopy={marketoFormCopy}
				marketoThankYouMessage={marketoThankYouMessage}
				successVideoEmbedCode={successVideoEmbedCode}
			/>
		);
	}

	return (
		<DefaultHero
			{...commonParams}
			specialClass={specialClass}
			assetText={assetText}
			displayVideo={displayVideo}
			heroVideoUrl={heroVideoUrl}
		/>
	);
};

export default HeroBlock;
