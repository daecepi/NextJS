import Image from "next/image";
import Link from "next/link";

const HeroSinglePages = (props) => {
	return (
		<section className={`c-hero--split background${props.pageColorcClass}`}>
			<div className="hero-split__background pointer-events-none relative md:absolute md:top-0 md:left-0 w-full h-full ">
				{props.imageUrl?.length ? (
					<Image
						src={props.imageUrl}
						layout="fill"
						className="object-cover"
					></Image>
				) : (
					""
				)}
			</div>
			<div className="container ">
				<div className="row">
					<div className="col-md-5 c-valign--middle">
						<pre className="c-eyebrow">{props.eyebrow}</pre>
						<h1 className="t-white">{props.title}</h1>
						<p>{props.copy}</p>
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
