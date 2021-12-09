// Final Plea Hero
const FinalPlea = () => {
	return (
		<section class="c-hero--split background--leavebehind">
			<div class="c-image">
				<picture>
					<source
						type="image/webp"
						srcset="/imgs/UI_ipad_final-plea-update-new.webp"
						alt="Ipad UI updated image"
					/>
					<source
						type="image/png"
						srcset="/imgs/UI_ipad_final-plea-update-new.jpg"
						alt="Ipad UI updated image"
					/>
					<img
						src="/imgs/UI_ipad_final-plea-update-new.jpg"
						alt="Ipad UI updated image"
					/>
				</picture>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-md-6 c-valign--middle">
						<pre class="c-eyebrow c-eyebrow--light">Goodbye Data Entry</pre>
						<h2 class="t-white">
							Hello Copper.
							<br />
							Try it free!
						</h2>
						<p style={{ maxWidth: "420px" }}>
							No credit card required. Start your 14-day free trial today.
						</p>
						<div class="c-hero__buttons">
							<a
								class="c-button sendUTMsToAmplitude"
								href="{{ craft.app.config.general.signUpUrl }}"
							>
								Try Free
							</a>
							<a class="c-button c-button--outline" href="/demos">
								Request Demo
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FinalPlea;
