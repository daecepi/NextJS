import Link from "next/link";
import Generalimage from "./Simples/GeneralImage";

const testimonialSlider = ({ eyebrow, contentCopy, sliderContent }) => {
	const rawScripts = `
  <script>
        LazyLoad.js([
              'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'],function(){
            jQuery("#testimonial-slider-content .testimonial-slider .buttons-box a").click(function(e){
            e.preventDefault();
            var childLength = jQuery("#testimonial-slider-content .testimonial-slider").length;
            var index = jQuery("#testimonial-slider-content .testimonial-slider.active").index() + 1;
            var nextIndex = index+1;
            if( index == childLength ){
                nextIndex = 1;
            }
            jQuery("#testimonial-slider-content .testimonial-slider.active").removeClass("active");
            jQuery("#testimonial-slider-content .testimonial-slider:nth-child("+ nextIndex +")").addClass("active");
            jQuery(".testimonial-slider .control-box .check-icon.active").removeClass("active");
            jQuery(".testimonial-slider .control-box .check-icon:nth-child("+ nextIndex +")").addClass("active");
        });
      })
      </script>


      <script type="text/javascript">
        LazyLoad.js([
              'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'],function(){
        //Make the style work
        var currentIndex;
        $('.check-icon').each( function(i) {
          $(this).bind('click', function () {
            var targetElement = $(this);
            var targetValue = targetElement.attr('data-target-slide');
            var targetIndex = targetElement.attr('data-target-index');

            jQuery(".testimonial-slider .control-box .check-icon.active").removeClass("active");
            jQuery("#testimonial-slider-content .testimonial-slider.active").removeClass("active");
        
            $('#${targetValue}').addClass("active");
            $('.check-icon-${targetIndex}').addClass('active');
          });
        });
      })
      </script>
  `;

	const testimonialSlide = (totalSlides, index, slideInformation) => {
		let slideDots = [];

		for (let i = 0; i < totalSlides; i++) {
			slideDots.push = (
				<div
					id={`check-${item}`}
					data-target-slide={`testimonial-slide-${item}`}
					data-target-index={i}
					className={`check-icon check-icon-${i} ${item === 0 ? "active" : ""}`}
				>
					<svg
						width="10"
						height="10"
						viewBox="0 0 10 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							data-target-slide={`testimonial-slide-${item}`}
							data-target-index={i}
							className="check-color"
							cx="5"
							cy="5"
							r="5"
							fill="#DCE3E6"
						/>
					</svg>
				</div>
			);
		}

		return (
			<div
				id={`testimonial-slide-${index - 1}`}
				className={`testimonial-slider ${index === 1 ? "active" : ""}`}
			>
				<div className="c-image c-image--shadow testimonial-image">
					{contentImage ? (
						<>
							{optimizedImages.srcset?.length > 0 ? (
								<picture>
									{optimizedImages.srcsetWebP ? (
										<source
											srcSet={optimizedImages.srcsetWebP}
											sizes="100vw"
											type="image/webp"
										/>
									) : (
										""
									)}

									<img
										src={optimizedImages.src}
										srcSet={optimizedImages.srcset}
										sizes="100vw"
										alt={
											contentImage.altText?.length
												? contentImage.altText
												: contentImage.title
										}
									/>
								</picture>
							) : (
								<img
									src={contentImage.url}
									alt={
										contentImage.altText?.length
											? contentImage.altText
											: contentImage.title
									}
								></img>
							)}
						</>
					) : (
						<picture>
							<source
								type="image/webp"
								srcSet="imgs/landing/projects-crm/brooke-cagle-NoRsyXmHGpI-unsplash-1.webp"
								alt="Brooke cagle No Rsy Xm H Gp I unsplash 1"
							/>
							<source
								type="image/png"
								srcSet="imgs/landing/projects-crm/brooke-cagle-NoRsyXmHGpI-unsplash-1.png"
								alt="Brooke cagle No Rsy Xm H Gp I unsplash 1"
							/>
							<img
								src="imgs/landing/projects-crm/brooke-cagle-NoRsyXmHGpI-unsplash-1.png"
								alt="Brooke cagle No Rsy Xm H Gp I unsplash 1"
							/>
						</picture>
					)}
				</div>
				<div className="testimonial-container">
					<div className="c-panel__blockquote c-valign--middle">
						<blockquote className="multiple-11-card-trailer">
							{slideInformation.quote}
						</blockquote>
						<cite>
							{slideInformation.author}
							<span className="c-panel__blockquote--position">
								{slideInformation.jobTitle}
							</span>
						</cite>
					</div>
					<div className="control-box">
						{totalSlides > 1 ? (
							<>
								<div className="dots-box">
									<>{slideDots.map((dot) => dot)}</>
								</div>
								<div className="buttons-box">
									<Link href="http://copper.com/">
										<a target="" className="button-slide-change t-link ">
											Next
										</a>
									</Link>
								</div>
							</>
						) : (
							""
						)}
					</div>
				</div>
			</div>
		);
	};

	return (
		<>
			<section
				className="c-case-study c-case-study--align-left home-quote"
				style={{ marginBottom: "150px" }}
			>
				<div className="container colorblock--eggplant">
					<div className="c-case-study__container col-md-12 no-padding">
						<div
							className="c-case-study__content c-valign--middle no-top-padding no-bottom-padding"
							style={{ paddingBottom: "0px" }}
						>
							<div className="row row-eq-height md-with-spacing">
								<div className="col-md-4">
									<pre className="c-eyebrow c-eyebrow--light special-padding--short">
										{eyebrow}
									</pre>
									<div className="c-panel__blockquote c-valign--middle">
										<h1
											style={{
												color: "white",
												fontSize: "52px",
												lineHeight: "64px",
											}}
										>
											{contentCopy}
										</h1>
									</div>
								</div>
								<div className="col-md-8 testimonial-slider-holder">
									<div id="testimonial-slider-content">
										{sliderContent ? (
											<>
												{sliderContent.map((slideInformation, index) => {
													return testimonialSlide(
														sliderContent.length,
														index,
														slideInformation
													);
												})}
											</>
										) : (
											""
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div dangerouslySetInnerHTML={{ __html: rawScripts }}></div>
		</>
	);
};

export default testimonialSlider;
