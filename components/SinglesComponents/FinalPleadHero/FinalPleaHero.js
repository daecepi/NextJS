import Image from 'next/image';
const FinalPleaHero = ({ eyebrow, title, copy, imageUrl, imageWidth, imageHeight }) => {
	return (
		<section className="c-hero--split background--putty background--final-plea fifty-fifty--no-mobile">
			<div className="c-image">
				<Image src={imageUrl} width="1140" height="1200"></Image>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-6 c-valign--middle">
						<pre className="c-eyebrow" style={{top:0, marginLeft:0}}>
							{eyebrow}
						</pre>
						<h2 className="t-white">{title}</h2>
						{copy && <p style={{ maxWidth: '420px' }}>{copy}</p>}
						<div className="c-hero__buttons">
							<a className="c-button" href="/demos">Request Demo</a>
							<a className="c-button c-button--outline sendUTMsToAmplitude" href="{{ craft.app.config.general.signUpUrl }}">Try Free</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FinalPleaHero;
