import Image from "next/image";
import Link from "next/link";
const FinalPleaHero = ({
	eyebrow,
	title,
	copy,
	imageUrl,
	imageWidth,
	imageHeight,
}) => {
	return (
		<section className="c-hero--split background--putty background--final-plea fifty-fifty--no-mobile">
			<div className="c-image">
				<Image
					src={imageUrl}
					width={imageWidth || "1140"}
					height={imageHeight || "1200"}
				></Image>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-6 c-valign--middle">
						<pre className="c-eyebrow" style={{ top: 0, marginLeft: 0 }}>
							{eyebrow || ""}
						</pre>
						<h2 className="t-white">{title}</h2>
						{copy && <p style={{ maxWidth: "420px" }}>{copy}</p>}
						<div className="c-hero__buttons">
							<Link href="/demos">
								<a className="c-button">Request Demo</a>
							</Link>
							<Link href="https://www.copper.com/signup">
								<a className="c-button c-button--outline sendUTMsToAmplitude">
									Try Free
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FinalPleaHero;
