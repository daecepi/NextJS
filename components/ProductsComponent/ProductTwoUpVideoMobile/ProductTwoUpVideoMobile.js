import Script from "next/script";
const ProductTwoUpVideoMobile = () => {
	return (
		<section className="animation-one-mobile d-block h-section-padding">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="first-animated-block">
							<pre className="c-eyebrow c-eyebrow--compressed c-eyebrow--dark multiple-2-card-trailer">
								THE CRM FOR WORKSPACE
							</pre>
							<h3>We're known for our Google Workspace integration.</h3>
							<p>
								Use Google Workspace (formerly G Suite)? Then you already know
								how to use Copper. Work out of your inbox with the CRM
								integration recommended for Google Workspace and Chrome.
							</p>
							<div className="c-hero__buttons mb-5">
								<div className="flex-column">
									<a href="/g-suite-crm" className="t-link ">
										Learn more
									</a>
								</div>
							</div>
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
											var videoOne = document.getElementById(
												"vid-mob-1-1-placeholder"
											);
											if (
												videoOne &&
												(videoOne.readyState >= 3 || videoOne.loadStart)
											) {
												$("#vid-1-placeholder").css("opacity", "0");
												clearInterval(myInterval);
											}
										}, 200);
									});
								}}
							/>
							<div className="video-gif-container">
								<video
									id="vid-mob-1-1"
									data-cy="video-element"
									className="video-as-gif h-remove-shadow onViewport"
									style={{ maxWidth: "100%" }}
									muted=""
									playsinline=""
									poster="https://copper.objects.frb.io/imgs/homepage/thumbnails/features/features-thumb-1.webp"
								>
									{" "}
									<source
										src="https://copper.objects.frb.io/videos/homepage/features/CopperHome-Features-Adoption.webm"
										type="video/webm"
									/>
									<source
										src="https://copper.objects.frb.io/videos/homepage/features/CopperHome-Features-Adoption.mp4"
										type="video/mp4"
									/>
									<p>Su navegador no soporta video HTML5</p>
								</video>
							</div>
						</div>
					</div>

					<div className="col-12 mt-5">
						<div className="first-animated-block">
							<pre className="c-eyebrow c-eyebrow--dark">
								BUILD BETTER RELATIONSHIPS
							</pre>
							<h3>Never drop an opportunity again.</h3>
							<p>
								You’ll have perfect visibility into all the activity that goes
								into closing a deal across your whole team.
							</p>
							<div className="c-hero__buttons mb-2">
								<div className="flex-column">
									<a href="/track-leads" className="t-link ">
										Learn more
									</a>
								</div>
							</div>
							<Script
								strategy="lazyOnload"
								src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
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
											var videoOne = document.getElementById(
												"vid-mob-2-placeholder"
											);
											if (
												videoOne &&
												(videoOne.readyState >= 3 || videoOne.loadStart)
											) {
												$("#vid-1-placeholder").css("opacity", "0");
												clearInterval(myInterval);
											}
										}, 200);
									});
								}}
							/>
							<div className="video-gif-container">
								<video
									id="vid-mob-2"
									data-cy="video-element"
									className="video-as-gif h-remove-shadow onViewport"
									style={{ maxWidth: "100%" }}
									muted=""
									playsinline=""
									poster="https://copper.objects.frb.io/imgs/homepage/thumbnails/features/features-thumb-2.webp"
								>
									{" "}
									<source
										src="https://copper.objects.frb.io/videos/homepage/features/CopperHome-Features-Opportunities.webm"
										type="video/webm"
									/>
									<source
										src="https://copper.objects.frb.io/videos/homepage/features/CopperHome-Features-Opportunities.mp4"
										type="video/mp4"
									/>
									<p>Su navegador no soporta video HTML5</p>
								</video>
							</div>
						</div>
					</div>

					<div className="col-12 mt-5">
						<div className="first-animated-block">
							<pre className="c-eyebrow c-eyebrow--dark">EASY TO ADOPT</pre>
							<h3>The CRM tool your team will actually love.</h3>
							<p>
								Zero learning curve. Zero data entry. Workflows the way you want
								them. Copper is the fastest path to your most productive team.
							</p>
							<div className="c-hero__buttons mb-4">
								<div className="flex-column">
									<a href="/manage-contacts" className="t-link ">
										Learn more
									</a>
								</div>
							</div>
							<Script
								strategy="lazyOnload"
								src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
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
											var videoOne = document.getElementById(
												"vid-mob-3-placeholder"
											);
											if (
												videoOne &&
												(videoOne.readyState >= 3 || videoOne.loadStart)
											) {
												$("#vid-1-placeholder").css("opacity", "0");
												clearInterval(myInterval);
											}
										}, 200);
									});
								}}
							/>
							<div className="video-gif-container">
								<video
									id="vid-mob-3"
									data-cy="video-element"
									className="video-as-gif h-remove-shadow onViewport"
									style={{ maxWidth: "100%" }}
									muted=""
									playsinline=""
									poster="https://copper.objects.frb.io/imgs/homepage/thumbnails/features/features-thumb-3.webp"
								>
									{" "}
									<source
										src="https://copper.objects.frb.io/videos/homepage/features/CopperHome-Features-Gsuite.webm"
										type="video/webm"
									/>
									<source
										src="https://copper.objects.frb.io/videos/homepage/features/CopperHome-Features-Gsuite.mp4"
										type="video/mp4"
									/>
									<p>Su navegador no soporta video HTML5</p>
								</video>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductTwoUpVideoMobile;
