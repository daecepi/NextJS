// Final Plea Hero
const FinalPlea = () => {
	return (
		<section className="c-hero--split background--leavebehind">
			<div className="c-image">
				<picture>
					<source
						type="image/webp"
						srcSet="/imgs/UI_ipad_final-plea-update-new.webp"
						alt="Ipad UI updated image"
					/>
					<source
						type="image/png"
						srcSet="/imgs/UI_ipad_final-plea-update-new.jpg"
						alt="Ipad UI updated image"
					/>
					<img
						src="/imgs/UI_ipad_final-plea-update-new.jpg"
						alt="Ipad UI updated image"
					/>
				</picture>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-6 c-valign--middle">
						<pre className="c-eyebrow c-eyebrow--light">Goodbye Data Entry</pre>
						<h2 className="t-white">
							Hello Copper.
							<br />
							Try it free!
						</h2>
						<p style={{ maxWidth: "420px" }}>
							No credit card required. Start your 14-day free trial today.
						</p>
						<div className="c-hero__buttons">
							<a
								className="c-button sendUTMsToAmplitude"
								href="{{ craft.app.config.general.signUpUrl }}"
							>
								Try Free
							</a>
							<a className="c-button c-button--outline" href="/demos">
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
