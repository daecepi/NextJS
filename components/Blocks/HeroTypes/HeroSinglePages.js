import Image from "next/image";
import Link from "next/link";

const HeroSinglePages = ({
	pageColorcClass,
	imageUrl,
	eyebrow,
	eyebrowLight,
	title,
	copy,
}) => {
	return (
		<section className={`c-hero--split background${pageColorcClass}`}>
			<div className="hero-split__background pointer-events-none relative md:absolute md:top-0 md:left-0 w-full h-full ">
				{imageUrl?.length ? (
					<Image src={imageUrl} layout="fill" className="object-cover"></Image>
				) : (
					""
				)}
			</div>
			<div className="container ">
				<div className="row">
					<div className="col-md-5 c-valign--middle">
						<pre className={`c-eyebrow ${eyebrowLight && "c-eyebrow--light"}`}>
							{eyebrow}
						</pre>
						<h1 className="t-white">{title}</h1>
						<p>{copy}</p>
						<div className="c-hero__buttons">
							<Link href="https://www.copper.com/signup">
								<a className="c-button sendUTMsToAmplitude">Try Free</a>
							</Link>
							<Link href="/demos">
								<a className="c-button c-button--outline">Request Demo</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSinglePages;
