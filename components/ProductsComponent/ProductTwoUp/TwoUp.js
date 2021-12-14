import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const TwoUp = (props) => {
	return (
		<>
			<div
				className={`row ${
					props.reverse ? "column-reverse" : "extra-padding--bottom"
				}`}
			>
				<div className={`${props.reverse ? "col-md-6" : "col-md-7 order-2"} `}>
					<div
						className={`${
							props.reverse
								? "c-image c-image--left"
								: "c-image c-image--drop-right"
						} `}
					>
						{props.videoWebm && props.videoMp4 ? (
							<div className="video-gif-container">
								<video
									id={props.videoId}
									data-cy="video-element"
									className="video-as-gif onViewport"
									style={{ maxWidth: "100%" }}
									muted
									playsInline
								>
									{" "}
									<source src={props.videoWebm} type="video/webm" />
									<source src={props.videoMp4} type="video/mp4" />
									<p>Su navegador no soporta video HTML5</p>
								</video>
								<Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></Script>
								<Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js"></Script>

								<Script
									id="video-player"
									src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
									onLoad={() => {
										if (!lastGifVidExecuted) {
											var lastGifVidExecuted = [];
										}

										function scrollFunctionality() {
											$(".video-as-gif.onViewport").each(function (index) {
												var elementTop = $(this).offset().top;
												var elementBottom = elementTop + $(this).outerHeight();
												var viewportTop = $(window).scrollTop();
												var viewportBottom = viewportTop + $(window).height();

												var elemenId = $(this).attr("id");
												console.log(elemenId);
												if (
													elementBottom > viewportTop &&
													elementTop < viewportBottom &&
													lastGifVidExecuted[elemenId] !== 1
												) {
													lastGifVidExecuted[elemenId] = 1;
													$(this)[0].play();
												} else if (lastGifVidExecuted[elemenId] !== 1) {
													$(this)[0].pause();
												}
											});
										}

										$(window).scroll(function () {
											scrollFunctionality();
										});

										$(document).ready(function () {
											scrollFunctionality();
											var myInterval = setInterval(function () {
												var videoOne = document.getElementById(props.videoId);
												if (videoOne.readyState >= 3 || videoOne.loadStart) {
													$(`#${props.videoId}-placeholder`).css(
														"opacity",
														"0"
													);
													clearInterval(myInterval);
												}
											}, 200);

											gsap.registerPlugin(ScrollTrigger);

											function getPos(newpos) {
												var position = $(".flagForAnimation").offset().top;
												var divHeight = $("#theAnimation2").height() + 240;
												if (newpos == "#uno") {
													$("html, body").animate(
														{
															scrollTop: position,
														},
														1000
													);
												} else if (newpos == "#dos") {
													$("html, body").animate(
														{
															scrollTop: position + divHeight * 1.5,
														},
														1000
													);
												} else if (newpos == "#tres") {
													$("html, body").animate(
														{
															scrollTop: position + 3 * divHeight,
														},
														1000
													);
												}
											}
											$(document).on("click", "a[href^='#']", function (e) {
												var id = $(this).attr("href");
												if (id.length > 0) {
													e.preventDefault();
													getPos(id);
												}
											});
										});
									}}
								></Script>
								<Script
									strategy="lazyOnload"
									src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
									onLoad={() => {
										$(
											".three-column-slider .container > .container .row"
										).slick({
											infinite: false,
											mobileFirst: true,
											slidesToShow: 1,
											slidesToScroll: 1,
											dots: true,
											rows: 0,
											appendDots: ".dots-box",
											appendArrows: ".buttons-box",
											prevArrow:
												'<a id="arrowBack" target="" className="button-slide-change t-link inverted-arrow">Prev</a>',
											nextArrow:
												'<a id="arrowNext" target="arrowNext"  className="button-slide-change t-link">Next</a>',
											// the magic
											responsive: [
												{
													breakpoint: 769,
													settings: {
														slidesToShow: 3,
														slidesToScroll: 1,
														rows: 0,
													},
												},
											],
										});
										$(window).on("resize", function () {
											$(
												".three-column-slider .container > .container .row"
											).slick("resize");
										});
									}}
								></Script>
							</div>
						) : (
							<Image
								src={props.imageUrl}
								width={props.imageWidth}
								height={props.imageHeight}
							></Image>
						)}
					</div>
				</div>
				<div
					className={` ${
						props.reverse
							? "col-md-5 offset-md-1 c-valign--middle"
							: "col-md-5 c-valign--middle order-1"
					} `}
				>
					<pre className="c-eyebrow c-eyebrow--dark">{props.eyebrow}</pre>
					<h2>{props.title}</h2>
					<p>{props.copy}</p>
					{props.bulletLists ? (
						<ul className="bullets--hot-pink">
							{props.bulletLists.map((item, index) => {
								return <li key={index}>{item}</li>;
							})}
						</ul>
					) : null}
					{props.aboutText && props.aboutUrl && (
						<Link href={props.aboutUrl}>
							<a className="t-link mt-4">{props.aboutText}</a>
						</Link>
					)}
				</div>
			</div>
		</>
	);
};

export default TwoUp;
