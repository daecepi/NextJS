import Image from "next/image";
import Link from "next/link";
const Quote = ({
	bgColor,
	imageUrl,
	imageWidth,
	imageHeight,
	quote,
	quoteBy,
	quotePosition,
	ctaUrl,
	ctaText,
}) => {
	return (
		<section className="c-quote-carousel js-quote-carousel">
			<div className="container-fluid">
				<div className="c-quote-carousel__container col-md-11 col-lg-10 colorblock--putty colorblock--bottom--right">
					<div
						className={`c-quote-carousel__content row background--${bgColor}`}
					>
						<div className="container">
							<div className="row">
								<div className="c-testimonial__image offset-md-2 col-md-4">
									<pre
										className="c-eyebrow c-eyebrow--light"
										style={{ top: 0, marginLeft: 0 }}
									>
										Success Stories
									</pre>
									<div className="colorblock--bottom--right colorblock--volt">
										<Image
											src={imageUrl}
											width={imageWidth}
											height={imageHeight}
										/>
									</div>
								</div>
								<div className="c-testimonial__quote col-md-4 offset-md-1">
									<div className="c-quote-carousel__blockquote--item active">
										<blockquote>
											{/* Copper has created transparency that has resonated
                        throughout our entire company. */}
											{quote}
										</blockquote>
										<cite>
											{/* Nicholas Markovitz */}
											{quoteBy}
											<br />
											<span className="c-quote-carousel__blockquote--position">
												{/* Managing Director, Creative Brands */}
												{quotePosition}
											</span>
										</cite>
									</div>
									<br />
									{ctaUrl && (
										<div>
											<Link href={ctaUrl}>
												<a className="t-link h-white" target="_blank">
													{/* See how creative brands did it */}
													{ctaText}
												</a>
											</Link>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Quote;
