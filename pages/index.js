import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/Home.module.css";
import { getEntryBySectionHandle } from "../lib/api";
import HeroHomePage from "../components/Blocks/HeroTypes/HeroHomePage";

import DefaultPageBase from "../components/PageBase/DefaultPageBase";

import LogoComponent from "../components/Blocks/LogosComponent";
import Footer from "../components/Footer/Footer";
import VideoElement from "../components/Wistia/VideoElement";

import ProductTwoUp from "../components/ProductsComponent/ProductTwoUp/ProductTwoUp";
import TwoUp from "../components/ProductsComponent/ProductTwoUp/TwoUp";
import { useCallback } from "react";

export default function Home({ entry, globals }) {
	console.log("page fields ", entry, globals);

	// Async Wistia importer
	const wistiaCall = useCallback((url, id) => {
		console.log("Executing");
		const wistiaLibrary = document.createElement("script");
		wistiaLibrary.src = "https://fast.wistia.com/assets/external/E-v1.js";
		wistiaLibrary.defer = true;

		const wistiaScript = document.createElement("script");
		wistiaScript.src = url;
		wistiaScript.defer = true;

		document.body.appendChild(wistiaLibrary);
		document.body.appendChild(wistiaScript);

		// Making the triggering of the video
		window._wq = window._wq || [];
		_wq.push({
			id: "abcde12345",
			onReady: function (video) {
				console.log("I got a handle to the video!", video);
			},
		});
	}, []);

	const callBackTest = useCallback(() => {
		console.log("TES CALLBACK");
	}, []);

	return (
		<DefaultPageBase entry={entry} globals={globals}>
			<HeroHomePage
				title="Win clients for life with Copper CRM"
				subtitle="Focus on what matters most: building enduring business relationships. We’ll take care of the rest."
			/>

			<LogoComponent title="Over 25,000+ companies trust Copper.">
				<li id="temp-logo-module--images" className="logo-section--images ">
					<picture>
						<source
							type="image/webp"
							srcSet="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_IDEO@2x.webp"
							alt="Ideo graphic"
						/>
						<source
							type="image/png"
							srcSet="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_IDEO@2x.png"
							alt="Ideo graphic"
						/>
						<Image
							style={{ width: "calc(100% / 1.3)!important;" }}
							src="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_IDEO@2x.png"
							alt="Ideo graphic"
							width={67}
							height={16}
						/>
					</picture>
				</li>
				<li id="temp-logo-module--images" className="logo-section--images ">
					<picture>
						<source
							type="image/webp"
							srcSet="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_masterclass@2x.webp"
							alt="Masterclass graphic"
						/>
						<source
							type="image/png"
							srcSet="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_masterclass@2x.png"
							alt="Masterclass graphic"
						/>
						<Image
							style={{ width: "calc(100% / 1.3)!important;" }}
							src="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_masterclass@2x.png"
							alt="Masterclass graphic"
							width={64}
							height={9}
						/>
					</picture>
				</li>
				<li id="temp-logo-module--images" className="logo-section--images ">
					<picture>
						<source
							type="image/webp"
							srcSet="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_swell@2x.webp"
							alt="Swell graphic"
						/>
						<source
							type="image/png"
							srcSet="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_swell@2x.png"
							alt="Swell graphic"
						/>
						<Image
							style={{ width: "calc(100% / 1.3)!important;" }}
							src="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_swell@2x.png"
							alt="Swell graphic"
							width={64}
							height={20}
						/>
					</picture>
				</li>
				<li id="temp-logo-module--images" className="logo-section--images ">
					<picture>
						<source
							type="image/webp"
							srcSet="https://copper.objects.frb.io/imgs/homepage//logos-module/Logo_Mailchimp.webp"
							alt="Bubbles graphic"
						/>
						<source
							type="image/png"
							srcSet="https://copper.objects.frb.io/imgs/homepage//logos-module/Logo_Mailchimp.png"
							alt="Bubbles graphic"
						/>
						<Image
							style={{ width: "calc(100% / 1.3)!important;" }}
							src="https://copper.objects.frb.io/imgs/homepage//logos-module/Logo_Mailchimp.png"
							alt="Bubbles graphic"
							width={64}
							height={18}
						/>
					</picture>
				</li>
				<li id="temp-logo-module--images" className="logo-section--images ">
					<picture>
						<source
							type="image/webp"
							srcSet="https://copper.objects.frb.io/imgs/homepage/logos-module/Logo_Softbank.webp"
							alt="Bubbles graphic"
						/>
						<source
							type="image/png"
							srcSet="https://copper.objects.frb.io/imgs/homepage/logos-module/Logo_Softbank.png"
							alt="Bubbles graphic"
						/>
						<Image
							style={{ width: "calc(100% / 1.3)!important;" }}
							src="https://copper.objects.frb.io/imgs/homepage/logos-module/Logo_Softbank.png"
							alt="Bubbles graphic"
							width={64}
							height={10}
						/>
					</picture>
				</li>
				<li id="temp-logo-module--images" className="logo-section--images ">
					<picture>
						<source
							type="image/webp"
							srcSet="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_zipi@2x.webp"
							alt="Swell graphic"
						/>
						<source
							type="image/png"
							srcSet="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_zipi@2x.png"
							alt="Swell graphic"
						/>
						<Image
							style={{ width: "calc(100% / 1.3)!important;" }}
							src="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_zipi@2x.png"
							alt="Swell graphic"
							width={64}
							height={45}
						/>
					</picture>
				</li>
				<li id="temp-logo-module--images" className="logo-section--images ">
					<picture>
						<source
							type="image/webp"
							srcSet="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_houwzer2x.webp"
							alt="Bubbles graphic"
						/>
						<source
							type="image/png"
							srcSet="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_houwzer2x.png"
							alt="Bubbles graphic"
						/>
						<Image
							style={{ width: "calc(100% / 1.3)!important;" }}
							src="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_houwzer2x.png"
							alt="Bubbles graphic"
							width={64}
							height={19}
						/>
					</picture>
				</li>
			</LogoComponent>

			<ProductTwoUp>
				<TwoUp
					eyebrow="THE CRM FOR WORKSPACE"
					title="We’re known for our Google Workspace integration."
					copy="Use Google Workspace? Then you already know how to use Copper. Work out of your inbox with the CRM integration for Google Workspace and Chrome."
					reverse={true}
					videoId="vid-2"
					videoWebm="https://copper.objects.frb.io/videos/homepage/features/CopperHome-Features-Adoption.webm"
					videoMp4="https://copper.objects.frb.io/videos/homepage/features/CopperHome-Features-Adoption.mp4"
				/>
				<TwoUp
					eyebrow="TOTAL FLEXIBILITY"
					title="Personalize to fit your special business needs"
					copy="Adaptable as your business evolves, personalized templates give you the capability to build exactly what you want, without having to ask for help."
					videoId="vid-3"
					videoWebm="https://copper.objects.frb.io/videos/homepage/features/CopperHome-Features-Opportunities.webm"
					videoMp4="https://copper.objects.frb.io/videos/homepage/features/CopperHome-Features-Opportunities.mp4"
				/>
				<TwoUp
					eyebrow="TOTAL FLEXIBILITY"
					title="Personalize to fit your special business needs"
					copy="Adaptable as your business evolves, personalized templates give you the capability to build exactly what you want, without having to ask for help."
					reverse={true}
					videoId="vid-5"
					videoWebm="https://copper.objects.frb.io/videos/homepage/features/CopperHome-Features-Gsuite.webm"
					videoMp4="https://copper.objects.frb.io/videos/homepage/features/CopperHome-Features-Gsuite.mp4"
				/>
			</ProductTwoUp>

			<section className="h-section-padding three-column-slider">
				<div className="section-cover maintain-spacing midnight"></div>
				<div style={{ position: "absolute", left: "50%" }}>
					<div className="video-slider-blue-circle mobile-disappear"></div>
				</div>
				<div className="container tools-category cover-container">
					<h2 className="text-center" style={{ color: "white" }}>
						What our clients are saying.
					</h2>

					<p
						className="text-center"
						style={{ color: "white" }}
						onClick={() => {
							callBackTest();
						}}
					>
						Customer satisfaction, customer retention, and customer loyalty are
						our top priorities.
					</p>

					{/*<Script
							src="https://fast.wistia.com/assets/external/E-v1.js"
							strategy="afterInteractive"
						></Script>*/}
					<div className="container">
						<div className="row extra-top-margin--small">
							<div className="col-md-4 c-card--tool ">
								<div
									className="c-card__entry h-webinar webinar-like-styling "
									style={{
										border: "none",
										marginBottom: "0px",
										minHeight: "100%",
										display: "flex",
										flexDirection: "column",
									}}
								>
									<div
										className="imageThumb"
										onClick={() => {
											wistiaCall(
												"https://fast.wistia.com/embed/medias/tihe7k9xsl.jsonp"
											);
										}}
									>
										<Image
											src="https://copper.objects.frb.io/imgs/homepage/da869d0e3b7d0cf8334cacd2248f9288.jpeg"
											alt="Video Slide 1"
											layout="fill"
										/>
										{/*<VideoElement
												url={
													"https://fast.wistia.com/embed/medias/tihe7k9xsl.jsonp"
												}
											/>
											<Script
											strategy="afterInteractive"
											src="https://fast.wistia.com/embed/medias/tihe7k9xsl.jsonp"
											defer
										></Script>
										<Script
											strategy="afterInteractive"
											src="https://fast.wistia.com/assets/external/E-v1.js"
											defer
										></Script>*/}
										<div
											className="wistia_responsive_padding"
											style={{
												padding: "56.25% 0 0 0",
												position: "relative",
											}}
										>
											<div
												className="wistia_responsive_wrapper"
												style={{
													height: "100%",
													left: "0",
													position: "absolute",
													top: "0",
													width: "100%",
												}}
											>
												<span
													className="wistia_embed wistia_async_tihe7k9xsl popover=true popoverAnimateThumbnail=true playButton=false videoFoam=true"
													style={{
														display: "inline-block",
														height: "100%",
														position: "relative",
														width: "100%",
													}}
												>
													&nbsp;
												</span>
											</div>
										</div>
										<div className="playbutton">
											<svg
												width="60"
												height="60"
												viewBox="0 0 60 60"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M0.833344 30C0.833344 13.9 13.9 0.833374 30 0.833374C46.1 0.833374 59.1667 13.9 59.1667 30C59.1667 46.1 46.1 59.1667 30 59.1667C13.9 59.1667 0.833344 46.1 0.833344 30ZM41.6667 30L24.1667 16.875V43.125L41.6667 30Z"
													fill="white"
												/>
											</svg>
											<div className="pulseCircle"></div>
										</div>
									</div>
									<div
										className="c-card__entry__content"
										style={{
											display: "flex",
											flexgrow: "1",
											flexDirection: "column",
											height: "100%",
											justifyContent: "space-between",
										}}
									>
										<span className="t-eyebrow "></span>

										<p className="p-sm multiple-5-card-trailer">
											“We love Copper as it’s beautifully designed, fully
											customizable for exactly what we needed and it works the
											way we need it to work.”
										</p>
										<cite>
											Lexie Barnhorn
											<span className="c-panel__blockquote--position">
												Influencer Marketing Manager
											</span>
										</cite>
										<div className="c-top-logo">
											<picture>
												<source
													type="image/webp"
													srcSet="https://copper.objects.frb.io/imgs/homepage/video-slider/Logo_Curology.webp"
													alt="Gartner news logo"
												/>
												<source
													type="image/png"
													srcSet="https://copper.objects.frb.io/imgs/homepage/video-slider/Logo_Curology.png"
													alt="Gartner news logo"
												/>
												<Image
													style={{ width: "calc(100% / 2)" }}
													src="https://copper.objects.frb.io/imgs/homepage/video-slider/Logo_Curology.png"
													alt="Gartner news logo"
													width={80}
													height={19}
												/>
											</picture>
										</div>
									</div>
									<div className="c-card__meta"></div>
								</div>
							</div>

							<div className="col-md-4 c-card--tool">
								<div
									className="c-card__entry h-webinar webinar-like-styling "
									style={{
										border: "none",
										marginBottom: "0px",
										minHeight: "100%",
										display: "flex",
										flexDirection: "column",
									}}
								>
									<div
										className="imageThumb"
										onClick={() => {
											wistiaCall(
												"https://fast.wistia.com/embed/medias/tihe7k9xsl.jsonp"
											);
										}}
									>
										<Image
											src="https://copper.objects.frb.io/imgs/homepage/e022cc4c117cf34dfb470ece8cc7daf25dc3f044.jpeg"
											alt="Video Slide 2"
											layout="fill"
										/>
										{/*<VideoElement
												url={
													"https://fast.wistia.com/embed/medias/p24wanuzo7.jsonp"
												}
											/>
											<Script
											src="https://fast.wistia.com/embed/medias/p24wanuzo7.jsonp"
											strategy="afterInteractive"
											defer
										></Script>
										<Script
											src="https://fast.wistia.com/assets/external/E-v1.js"
											strategy="afterInteractive"
											defer
										></Script>*/}
										<div
											className="wistia_responsive_padding"
											style={{
												padding: "56.25% 0 0 0",
												position: "relative",
											}}
										>
											<div
												className="wistia_responsive_wrapper"
												style={{
													height: "100%",
													left: "0",
													position: "absolute",
													top: "0",
													width: "100%",
												}}
											>
												<span
													className="wistia_embed wistia_async_p24wanuzo7 popover=true popoverAnimateThumbnail=true playButton=false videoFoam=true"
													style={{
														display: "inline-block",
														height: "100%",
														position: "relative",
														width: "100%",
													}}
												>
													&nbsp;
												</span>
											</div>
										</div>
										<div className="playbutton">
											<svg
												width="60"
												height="60"
												viewBox="0 0 60 60"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M0.833344 30C0.833344 13.9 13.9 0.833374 30 0.833374C46.1 0.833374 59.1667 13.9 59.1667 30C59.1667 46.1 46.1 59.1667 30 59.1667C13.9 59.1667 0.833344 46.1 0.833344 30ZM41.6667 30L24.1667 16.875V43.125L41.6667 30Z"
													fill="white"
												/>
											</svg>
											<div className="pulseCircle"></div>
										</div>
									</div>
									<div
										className="c-card__entry__content"
										style={{
											display: "flex",
											flexgrow: "1",
											flexDirection: "column",
											height: "100%",
											justifyContent: "space-between",
										}}
									>
										<span className="t-eyebrow "></span>

										<p className="p-sm multiple-5-card-trailer">
											“I love that Copper is simple, easy to use, and intuitive.
											Our business is all about relationships and it helps us
											build better relationships with our clients.”
										</p>
										<cite>
											CRESCENT DIAMOND
											<span className="c-panel__blockquote--position">
												Executive Producer, Corduroy Media
											</span>
										</cite>
										<div className="c-top-logo">
											<picture>
												<source
													type="image/webp"
													srcSet="https://copper.objects.frb.io/imgs/homepage/video-slider/Logo_Corduroy.webp"
													alt="Corduroy logo"
												/>
												<source
													type="image/png"
													srcSet="https://copper.objects.frb.io/imgs/homepage/video-slider/Logo_Corduroy.png"
													alt="Corduroy logo"
												/>
												<Image
													style={{ width: "calc(100% / 2)" }}
													src="https://copper.objects.frb.io/imgs/homepage/video-slider/Logo_Corduroy.png"
													alt="Corduroy logo"
													width={74}
													height={25}
												/>
											</picture>
										</div>
									</div>
									<div className="c-card__meta"></div>
								</div>
							</div>

							<div className="col-md-4 c-card--tool">
								<div
									className="c-card__entry h-webinar webinar-like-styling "
									style={{
										border: "none",
										marginBottom: "0px",
										minHeight: "100%",
										display: "flex",
										flexDirection: "column",
									}}
								>
									<div
										className="imageThumb"
										onClick={() => {
											wistiaCall(
												"https://fast.wistia.com/embed/medias/tihe7k9xsl.jsonp"
											);
										}}
									>
										<Image
											src="https://copper.objects.frb.io/imgs/homepage/765af49b08e3270449d60f296bdcee51.jpeg"
											alt="Video Slide 1"
											layout="fill"
										/>
										{/*<VideoElement
												url={
													"https://fast.wistia.com/embed/medias/2yhihnpbkc.jsonp"
												}
											/>
											<Script
											src="https://fast.wistia.com/embed/medias/2yhihnpbkc.jsonp"
											strategy="afterInteractive"
											defer
										></Script>
										<Script
											src="https://fast.wistia.com/assets/external/E-v1.js"
											strategy="afterInteractive"
											defer
										></Script>*/}
										<div
											className="wistia_responsive_padding"
											style={{
												padding: "56.25% 0 0 0",
												position: "relative",
											}}
										>
											<div
												className="wistia_responsive_wrapper"
												style={{
													height: "100%",
													left: "0",
													position: "absolute",
													top: "0",
													width: "100%",
												}}
											>
												<span
													className="wistia_embed  wistia_async_2yhihnpbkc popover=true popoverAnimateThumbnail=true playButton=false videoFoam=true"
													style={{
														display: "inline-block",
														height: "100%",
														position: "relative",
														width: "100%",
													}}
												>
													&nbsp;
												</span>
											</div>
										</div>
										<div className="playbutton">
											<svg
												width="60"
												height="60"
												viewBox="0 0 60 60"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M0.833344 30C0.833344 13.9 13.9 0.833374 30 0.833374C46.1 0.833374 59.1667 13.9 59.1667 30C59.1667 46.1 46.1 59.1667 30 59.1667C13.9 59.1667 0.833344 46.1 0.833344 30ZM41.6667 30L24.1667 16.875V43.125L41.6667 30Z"
													fill="white"
												/>
											</svg>
											<div className="pulseCircle"></div>
										</div>
									</div>
									<div
										className="c-card__entry__content"
										style={{
											display: "flex",
											flexgrow: "1",
											flexDirection: "column",
											height: "100%",
											justifyContent: "space-between",
										}}
									>
										<span className="t-eyebrow "></span>

										<p className="p-sm multiple-5-card-trailer">
											“Building relationships has never been more important. I
											can't imagine running Storm without having Copper to help
											us compete and win opportunities in the Valley.”
										</p>
										<cite>
											Ryan Floyd
											<span className="c-panel__blockquote--position">
												Managing Director, Storm Ventures
											</span>
										</cite>
										<div className="c-top-logo">
											<picture>
												<source
													type="image/webp"
													srcSet="https://copper.objects.frb.io/imgs/homepage/video-slider/storm-ventures-logo-bw.webp"
													alt="Storm Venture logo"
												/>
												<source
													type="image/png"
													srcSet="https://copper.objects.frb.io/imgs/homepage/video-slider/storm-ventures-logo-bw.png"
													alt="Storm Venture logo"
												/>
												<Image
													style={{ width: "calc(100% / 2)" }}
													src="https://copper.objects.frb.io/imgs/homepage/video-slider/storm-ventures-logo-bw.png"
													alt="Storm Venture logo"
													width={134}
													height={18}
												/>
											</picture>
										</div>
									</div>
									<div className="c-card__meta"></div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="control-box" style={{ width: "100% !important" }}>
								<div className="dots-box"></div>
								<div className="buttons-box"></div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="c-single-column bottom-padding-mobile home-proof">
				<div className="container">
					<div className="col-md-8 offset-md-2 c-single-column__container c-align--center no-padding-top">
						<h3 className="col-md-10">Never leave your inbox.</h3>
						<p className="col-md-12">
							Add leads, update deals, look up past interactions, create Google
							Calendar events, and follow up on tasks—right from your Gmail
							inbox.
						</p>
						<div className="c-single-column__buttons">
							<Link href="/signup">
								<a className="c-button sendUTMsToAmplitude">Try free</a>
							</Link>
							<Link href="/demos">
								<a
									className="c-button c-button--outline"
									style={{ marginRight: "0px" }}
								>
									Request demo
								</a>
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="animation-two-mobile d-block d-md-none h-section-padding">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h2 className="text-center">
								Why your team will{" "}
								<span
									style={{
										backgroundImage:
											"linear-gradient(transparent 0%, transparent 65%, #38E4CA 65%, #38E4CA 90%, transparent 90%, transparent)",
									}}
									className="underline-green"
								>
									love
								</span>{" "}
								Copper.
							</h2>
						</div>

						<div className="col-12 mt-5">
							<div>
								<div className="animation-button">It's quick to launch</div>
								<h4 className="text-center">Make your mark ... fast.</h4>
								<p className="text-center">
									Burned by expensive and lengthy implementation cycles in the
									past? Put that behind you. With Copper, you can be up and
									running in days, not weeks (or months).{" "}
								</p>
							</div>
							<div>
								<div style={{ position: "relative" }}>
									<picture>
										<source srcSet="https://copper.objects.frb.io/imgs/homepage/thumbnails/why/why-thumb-1.webp" />
										<source srcSet="https://copper.objects.frb.io/imgs/homepage/thumbnails/why/why-thumb-1.png" />
										<Image
											src="https://copper.objects.frb.io/imgs/homepage/thumbnails/why/why-thumb-1.png"
											width={570}
											height={417}
										/>
									</picture>
									<div
										style={{
											position: "absolute",
											left: "0px",
											top: "-4%",
										}}
									>
										<div className="video-gif-container">
											<video
												id="vid-mob-4"
												data-cy="video-element"
												className="video-as-gif h-remove-shadow onViewport"
												style={{ maxWidth: "100%" }}
												muted
												playsInline
											>
												<source
													src="https://copper.objects.frb.io/videos/homepage/why/CopperHome-Why-Team-new-new.webm"
													type="video/webm"
												/>
												<source
													src="https://copper.objects.frb.io/videos/homepage/why/CopperHome-Why-Team-new-new.mp4"
													type="video/{{vidExtension}}"
												></source>
												<p>Su navegador no soporta video HTML5</p>
											</video>
										</div>
									</div>
								</div>
								{/* {% import "components/simple-elements/_index.html" as simpleElements %}
					{{ simpleElements.createVideoAsGifElement(entry.slug,'vid-mob-4','https://copper.objects.frb.io/videos/homepage/why/CopperHome-Why-Team-new-new', 'mp4', 'h-remove-shadow onViewport', 'max-width: 100%;', 'https://copper.objects.frb.io/imgs/homepage/thumbnails/why/why-thumb-1.png') }} */}
							</div>
						</div>

						<div className="col-12 mt-5">
							<div>
								<div className="animation-button">There's no busy work</div>
								<h4 className="text-center">
									Thousands of tasks off your plate.
								</h4>
								<p className="text-center">
									Automate everything with simple, intuitive workflow and task
									automation. No coding required!
								</p>
							</div>
							<div>
								<div style={{ position: "relative" }}>
									<picture>
										<source srcSet="https://copper.objects.frb.io/imgs/homepage/thumbnails/why/why-thumb-2.webp" />
										<source srcSet="https://copper.objects.frb.io/imgs/homepage/thumbnails/why/why-thumb-2.png" />
										<Image
											src="https://copper.objects.frb.io/imgs/homepage/thumbnails/why/why-thumb-2.png"
											width={570}
											height={417}
										/>
									</picture>
									<div
										style={{
											position: "absolute",
											left: "0px",
											top: "-4%",
										}}
									>
										<div className="video-gif-container">
											<video
												id="vid-mob-5"
												data-cy="video-element"
												className="video-as-gif h-remove-shadow onViewport"
												style={{ maxWidth: "100%" }}
												muted
												playsInline
											>
												<source
													src="https://copper.objects.frb.io/videos/homepage/why/CopperHome-Why-Automation-new.webm"
													type="video/webm"
												/>
												<source
													src="https://copper.objects.frb.io/videos/homepage/why/CopperHome-Why-Automation-new.mp4"
													type="video/{{vidExtension}}"
												></source>
												<p>Su navegador no soporta video HTML5</p>
											</video>
										</div>
									</div>
								</div>
								{/* {% import "components/simple-elements/_index.html" as simpleElements %}
					{{ simpleElements.createVideoAsGifElement(entry.slug,'vid-mob-5','https://copper.objects.frb.io/videos/homepage/why/CopperHome-Why-Automation-new', 'mp4', 'h-remove-shadow onViewport', 'max-width: 100%;', 'https://copper.objects.frb.io/imgs/homepage/thumbnails/why/why-thumb-2.png') }} */}
							</div>
						</div>

						<div className="col-12 mt-5">
							<div>
								<div className="animation-button">It's made for closing</div>
								<h4 className="text-center">
									The best CRM system for relationship builders
								</h4>
								<p className="text-center">
									Take care of your prospects with perfect visibility into all
									your interactions and activity, and build an enduring business
									process through Copper's robust customer relationship
									management (CRM) platform.
								</p>
							</div>
							<div>
								<div style={{ position: "relative" }}>
									<picture>
										<source srcSet="https://copper.objects.frb.io/imgs/homepage/thumbnails/why/why-thumb-3.webp" />
										<source srcSet="https://copper.objects.frb.io/imgs/homepage/thumbnails/why/why-thumb-3.png" />
										<Image
											src="https://copper.objects.frb.io/imgs/homepage/thumbnails/why/why-thumb-3.png"
											width={570}
											height={417}
										/>
									</picture>
									<div
										style={{
											position: "absolute",
											left: "0px",
											top: "-4%",
										}}
									>
										<div className="video-gif-container">
											<video
												id="vid-mob-6"
												data-cy="video-element"
												className="video-as-gif h-remove-shadow onViewport"
												style={{ maxWidth: "100%" }}
												muted
												playsInline
											>
												<source
													src="https://copper.objects.frb.io/videos/homepage/why/CopperHome-Why-ROI-new.webm"
													type="video/webm"
												/>
												<source
													src="https://copper.objects.frb.io/videos/homepage/why/CopperHome-Why-ROI-new.mp4"
													type="video/{{vidExtension}}"
												></source>
												<p>Su navegador no soporta video HTML5</p>
											</video>
										</div>
									</div>
								</div>
								{/* {% import "components/simple-elements/_index.html" as simpleElements %}
					{{ simpleElements.createVideoAsGifElement(entry.slug,'vid-mob-6','https://copper.objects.frb.io/videos/homepage/why/CopperHome-Why-ROI-new', 'mp4', 'h-remove-shadow onViewport', 'max-width: 100%;', 'https://copper.objects.frb.io/imgs/homepage/thumbnails/why/why-thumb-3.png') }} */}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="flagForAnimation d-none d-md-block"></section>
			<section
				id="theAnimation2"
				className="d-none d-md-block c-cols c-cols-landing h-padding-bottom"
			>
				<div className="thecircle"></div>
				<div
					className="row disappear-mobile"
					style={{
						position: "absolute",
						top: "20%",
						width: "100%",
						zIndex: "99",
					}}
				>
					<div className="col-md-12">
						<h4
							className="extra-bottom-margin--x-small"
							style={{ textAlign: "center" }}
						>
							Why your team will love Copper.
						</h4>
						<div className="radios-box">
							<Link href="#uno">
								<a style={{ color: "inherit" }}>
									<div className="radio-box">
										<input
											type="radio"
											checked
											className="radio-selector"
											id="but1"
											name="sel_button"
										/>
										<label for="but1">
											<strong>It's quick to launch</strong>
										</label>
									</div>
								</a>
							</Link>
							<Link href="#dos">
								<a style={{ color: "inherit" }}>
									<div className="radio-box">
										<input
											type="radio"
											className="radio-selector"
											id="but2"
											name="sel_button"
										/>
										<label for="but2">
											<strong>There's no busy work</strong>
										</label>
									</div>
								</a>
							</Link>
							<Link href="#tres">
								<a style={{ color: "inherit" }}>
									<div className="radio-box">
										<input
											type="radio"
											className="radio-selector"
											id="but3"
											name="sel_button"
										/>
										<label for="but3">
											<strong>It's made for closing</strong>
										</label>
									</div>
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="container c-animation-container theone2">
					<div className="row column-reverse">
						<div className="col-md-6 d-flex align-items-center order-1 ">
							<div className="c-image c-image--center c-image--shadow h-remove-shadow">
								<div className="video-gif-container">
									<video
										id="vid-4"
										data-cy="video-element"
										className="video-as-gif h-remove-shadow onViewport"
										style={{ maxWidth: "100%" }}
										muted
										playsInline
										poster="https://copper.objects.frb.io/videos/homepage/why/CopperHome-Why-Team-new-new', 'mp4', 'h-remove-shadow', 'max-width: 100%;', 'https://copper.objects.frb.io/imgs/homepage/thumbnails/why/why-thumb-1.png"
									>
										<source
											src="https://copper.objects.frb.io/videos/homepage/why/CopperHome-Why-Team-new-new.webm"
											type="video/webm"
										/>
										<source
											src="https://copper.objects.frb.io/videos/homepage/why/CopperHome-Why-Team-new-new.mp4"
											type="video/{{vidExtension}}"
										></source>
										<p>Su navegador no soporta video HTML5</p>
									</video>
								</div>
								{/* {% import "components/simple-elements/_index.html" as simpleElements %}
									{{ simpleElements.createVideoAsGifElement(entry.slug,'vid-4','https://copper.objects.frb.io/videos/homepage/why/CopperHome-Why-Team-new-new', 'mp4', 'h-remove-shadow', 'max-width: 100%;', 'https://copper.objects.frb.io/imgs/homepage/thumbnails/why/why-thumb-1.png') }}
																							{#<img className="h-remove-shadow" src="//d2ydtwisqcxv72.cloudfront.net/landing/Image-Gsuite.png" alt="Image Google Workspace">#} */}
							</div>
						</div>
						<div className="col-md-5 offset-md-1 c-valign--middle order-2">
							<div className="col_copy">
								<div
									className="radios-box appear-mobile"
									style={{ marginBottom: "20px" }}
								>
									<div className="radio-box">
										<input
											type="radio"
											checked
											className="radio-selector"
											id="bu1"
											name="independent1"
										/>
										<label for="bu1">It's quick to launch</label>
									</div>
								</div>
								<h4>Make Your Mark… Fast!</h4>
								<p>
									Burned by expensive and lengthy implementation cycles in the
									past? Put that behind you. With Copper, you can be up and
									running in days, not weeks (or months).{" "}
								</p>
								<div className="c-hero__buttons">
									<div className="flex-column"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container c-animation-container thetwo2 d-none">
					<h2
						className="extra-bottom-margin--x-small"
						style={{ textAlign: "center" }}
					></h2>
					<div className="row column-reverse">
						<div className="col-md-6 d-flex align-items-center order-1 ">
							<div className="c-image c-image--center c-image--shadow h-remove-shadow">
								<div className="video-gif-container">
									<video
										id="vid-5"
										data-cy="video-element"
										className="video-as-gif h-remove-shadow onViewport"
										style={{ maxWidth: "100%" }}
										muted
										playsInline
										poster="https://copper.objects.frb.io/videos/homepage/why/CopperHome-Why-Team-new-new', 'mp4', 'h-remove-shadow', 'max-width: 100%;', 'https://copper.objects.frb.io/imgs/homepage/thumbnails/why/why-thumb-2.png"
									>
										<source
											src="https://copper.objects.frb.io/videos/homepage/why/CopperHome-Why-Automation-new.webm"
											type="video/webm"
										/>
										<source
											src="https://copper.objects.frb.io/videos/homepage/why/CopperHome-Why-Automation-new.mp4"
											type="video/{{vidExtension}}"
										></source>
										<p>Su navegador no soporta video HTML5</p>
									</video>
								</div>
								{/* {% import "components/simple-elements/_index.html" as simpleElements %}
										{{ simpleElements.createVideoAsGifElement(entry.slug,'vid-5','https://copper.objects.frb.io/videos/homepage/why/CopperHome-Why-Automation-new', 'mp4', 'h-remove-shadow', 'max-width: 100%;', 'https://copper.objects.frb.io/imgs/homepage/thumbnails/why/why-thumb-2.png') }}
																								{#<img className="h-remove-shadow" src="//d2ydtwisqcxv72.cloudfront.net/landing/Image-Gsuite.png" alt="Image Google Workspace">#} */}
							</div>
						</div>
						<div className="col-md-5 offset-md-1 c-valign--middle order-2">
							<div className="col_copy">
								<div
									className="radios-box appear-mobile"
									style={{ marginBottom: "20px" }}
								>
									<div className="radio-box">
										<input
											type="radio"
											checked
											className="radio-selector"
											id="bu2"
											name="independent2"
										/>
										<label for="bu2">There's no busy work</label>
									</div>
								</div>
								<h4>Thousands of tasks off your plate.</h4>
								<p>
									Automate everything with simple, intuitive workflow and task
									automation. No coding required!
								</p>
								<div className="c-hero__buttons">
									<div className="flex-column"></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container c-animation-container thethree2 d-none">
					<h2
						className="extra-bottom-margin--x-small"
						style={{ textAlign: "center" }}
					></h2>
					<div className="row column-reverse">
						<div className="col-md-6 d-flex align-items-center order-1 ">
							<div className="c-image c-image--center c-image--shadow h-remove-shadow">
								<div className="video-gif-container">
									<video
										id="vid-6"
										data-cy="video-element"
										className="video-as-gif h-remove-shadow onViewport"
										style={{ maxWidth: "100%" }}
										muted
										playsInline
										poster="https://copper.objects.frb.io/videos/homepage/why/CopperHome-Why-Team-new-new', 'mp4', 'h-remove-shadow', 'max-width: 100%;', 'https://copper.objects.frb.io/imgs/homepage/thumbnails/why/why-thumb-3.png"
									>
										<source
											src="https://copper.objects.frb.io/videos/homepage/why/CopperHome-Why-ROI-new.webm"
											type="video/webm"
										/>
										<source
											src="https://copper.objects.frb.io/videos/homepage/why/CopperHome-Why-ROI-new.mp4"
											type="video/{{vidExtension}}"
										></source>
										<p>Su navegador no soporta video HTML5</p>
									</video>
								</div>
								{/* {% import "components/simple-elements/_index.html" as simpleElements %}
										{{ simpleElements.createVideoAsGifElement(entry.slug,'vid-6','https://copper.objects.frb.io/videos/homepage/why/CopperHome-Why-ROI-new', 'mp4', 'h-remove-shadow', 'max-width: 100%;', 'https://copper.objects.frb.io/imgs/homepage/thumbnails/why/why-thumb-3.png') }}
																								{#<img className="h-remove-shadow" src="//d2ydtwisqcxv72.cloudfront.net/landing/Image-Gsuite.png" alt="Image Google Workspace">#} */}
							</div>
						</div>
						<div className="col-md-5 offset-md-1 c-valign--middle order-2">
							<div className="col_copy">
								<div
									className="radios-box appear-mobile"
									style={{ marginBottom: "20px" }}
								>
									<div className="radio-box">
										<input
											type="radio"
											checked
											className="radio-selector"
											id="bu3"
											name="independent3"
										/>
										<label for="bu3">It's made for closing</label>
									</div>
								</div>
								<h4>The best CRM system for relationship builders</h4>
								<p>
									Take care of your prospects with complete visibility into all
									your interactions and activity, and build an enduring business
									through Copper's robust customer relationship management (CRM)
									platform.
								</p>
								<div className="c-hero__buttons">
									<div className="flex-column"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				id=""
				className="c-cols c-cols-landing modified-new-volt padding-bottom"
			>
				<div className="container c-animation-container">
					<h2
						className="extra-bottom-margin--x-small"
						style={{ textAlign: "center" }}
					></h2>
					<div className="row">
						<div className="col-md-6 d-flex align-items-center offset-md-1 order-2 ">
							<div className="c-image c-image--center c-image--shadow h-remove-shadow">
								<div className="video-gif-container">
									<video
										id="vid-7"
										data-cy="video-element"
										className="video-as-gif h-remove-shadow onViewport"
										style={{ maxWidth: "100%" }}
										muted
										playsInline
										poster="https://copper.objects.frb.io/videos/homepage/why/CopperHome-Why-Team-new-new', 'mp4', 'h-remove-shadow', 'max-width: 100%;', 'https://copper.objects.frb.io/imgs/homepage/thumbnails/projects/projects-thumb-1.png"
									>
										<source
											src="https://copper.objects.frb.io/videos/homepage/projects/CopperHome-Projects-v4.webm"
											type="video/webm"
										/>
										<source
											src="https://copper.objects.frb.io/videos/homepage/projects/CopperHome-Projects-v4.mp4"
											type="video/{{vidExtension}}"
										></source>
										<p>Su navegador no soporta video HTML5</p>
									</video>
								</div>
								{/* {#<img className="h-remove-shadow" src="//d2ydtwisqcxv72.cloudfront.net/landing/Group-437.png" alt="Group 437">#}

															{% import "components/simple-elements/_index.html" as simpleElements %}
    													{{ simpleElements.createVideoAsGifElement(entry.slug,'vid-7','https://copper.objects.frb.io/videos/homepage/projects/CopperHome-Projects-v4', 'mp4', 'h-remove-shadow onViewport', 'max-width: 100%;', 'https://copper.objects.frb.io/imgs/homepage/thumbnails/projects/projects-thumb-1.png') }} */}
							</div>
						</div>
						<div className="col-md-5 c-valign--middle order-1">
							<pre className="c-eyebrow c-eyebrow--light">
								REAL-TIME COLLABORATION
							</pre>
							<h2>Keep going after the deal is closed.</h2>
							<p>
								With Projects, you can close the deal, and deliver the work, all
								within Copper.
							</p>
							<div className="c-hero__buttons">
								<div className="flex-column">
									<Link href="/project-management-crm">
										<a className="t-link h-white">Learn more</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer></Footer>
		</DefaultPageBase>
	);
}
export async function getStaticProps(context) {
	const res = await getEntryBySectionHandle("homepage", "homepage");
	return {
		props: {
			entry: res.entry || {},
			globals: res.globalSets || [],
		}, // will be passed to the page component as props
		revalidate: 120, // in seconds
	};
}
