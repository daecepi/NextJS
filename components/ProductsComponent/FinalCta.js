import Image from "next/image";
import Link from "next/link";
const FinalCta = (props) => {
	return (
		<section className="final-plea product-page">
			<div className="container">
				<div className="row">
					<div className="col-md-5 text-dark">
						<h2>{props.title}</h2>
						<p>{props.copy}</p>
						<div className="c-hero__buttons">
							<Link href={props.ctaOneUrl}>
								<a className="c-button sendUTMsToAmplitude">
									{props.ctaOneText}
								</a>
							</Link>
							<Link href={props.ctaTwoUrl}>
								<a className="c-button c-button--outline">{props.ctaTwoText}</a>
							</Link>
						</div>
					</div>
					<div className="col-md-5 offset-md-2">
						<div className="relative">
							<Image src={props.imageUrl} width="395" height="451"></Image>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FinalCta;
