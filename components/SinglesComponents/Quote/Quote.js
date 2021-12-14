import Image from "next/image";
import Link from "next/link";
const Quote = (props) => {
	return (
		<section className="c-quote-carousel js-quote-carousel">
			<div className="container-fluid">
				<div className="c-quote-carousel__container col-md-11 col-lg-10 colorblock--putty colorblock--bottom--right">
					<div
						className={`c-quote-carousel__content row background--${props.bgColor}`}
					>
						<div className="container">
							<div className="row">
								<div className="c-testimonial__image offset-md-1 col-md-4">
									<pre
										className="c-eyebrow c-eyebrow--light"
										style={{ top: 0, marginLeft: 0 }}
									>
										Success Stories
									</pre>
									<div className="colorblock--bottom--right colorblock--volt">
										<Image
											src={props.imageUrl}
											width={props.imageWidth}
											height={props.imageHeight}
										></Image>
										{/* <Image src='/imgs/industry/industry-agency-customer.jpg' width='676' height='880'></Image> */}
									</div>
								</div>
								<div className="c-testimonial__quote col-md-5 offset-md-1">
									<div className="c-quote-carousel__blockquote--item active">
										<blockquote>
											{/* Copper has created transparency that has resonated
                        throughout our entire company. */}
											{props.quote}
										</blockquote>
										<cite>
											{/* Nicholas Markovitz */}
											{props.quoteBy}
											<br />
											<span className="c-quote-carousel__blockquote--position">
												{/* Managing Director, Creative Brands */}
												{props.quotePosition}
											</span>
										</cite>
									</div>
									<br />
									<div>
										<Link href={props.ctaUrl}>
											<a className="t-link h-white" target="_blank">
												{/* See how creative brands did it */}
												{props.ctaText}
											</a>
										</Link>
									</div>
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
