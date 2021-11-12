import Image from 'next/image';

const HeroProduct = props => {
	return (
		<section className={`c-hero--split background--${props.backgroundColor} product-page`}>
			<div className="c-image">
				<Image layout="fill" className=" object-cover" src={props.imageUrl}></Image>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-6 c-valign--middle">
						<pre className={props.eyebrowDark ? 'c-eyebrow' : 'c-eyebrow c-eyebrow--light'}>{props.eyebrow}</pre>
						<h1 className="t-white">{props.title}</h1>
						<p>{props.copy}</p>
						<div className="c-hero__buttons">
							<a className={props.ctaLight ? 'c-button c-button--white sendUTMsToAmplitude' : 'c-button sendUTMsToAmplitude'} href={props.ctaOneUrl}>
								{props.ctaOneText}
							</a>
							<a className={props.ctaLight ? 'c-button c-button--outline--white' : 'c-button c-button--outline'} href={props.ctaTwoUrl}>
								{props.ctaTwoText}
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroProduct;
