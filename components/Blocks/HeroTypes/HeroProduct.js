import Image from "next/image";
import Link from "next/link";

const HeroProduct = (props) => {
	return (
		<section
			className={`c-hero--split background--${props.backgroundColor} product-page`}
		>
			<div className="c-image">
				<Image
					layout="fill"
					className=" object-cover"
					src={props.imageUrl}
					priority
				/>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-6 c-valign--middle">
						<pre
							className={
								props.eyebrowDark ? "c-eyebrow" : "c-eyebrow c-eyebrow--light"
							}
						>
							{props.eyebrow}
						</pre>
						<h1 className="t-white">{props.title}</h1>
						<p>{props.copy}</p>
						<div className="c-hero__buttons">
							{props.ctaOneUrl && props.ctaOneText && (
								<Link href={props.ctaOneUrl}>
									<a
										className={
											props.ctaLight
												? "c-button c-button--white sendUTMsToAmplitude"
												: "c-button sendUTMsToAmplitude"
										}
									>
										{props.ctaOneText}
									</a>
								</Link>
							)}
							{props.ctaTwoUrl && props.ctaTwoText && (
								<Link href={props.ctaTwoUrl}>
									<a
										className={
											props.ctaLight
												? "c-button c-button--outline--white"
												: "c-button c-button--outline"
										}
									>
										{props.ctaTwoText}
									</a>
								</Link>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroProduct;
