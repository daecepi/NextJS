const Slider = ({
	displaG2CrowdModule,
	displayG2CrowdHeader,
	g2CrowdHeader,
	g2CrowdReviews,
}) => {
	return (
		<>
			{displaG2CrowdModule !== undefined && displaG2CrowdModule ? (
				<>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"
					/>

					<section className="c-single-column slider-section">
						{displayG2CrowdHeader !== undefined && displayG2CrowdHeader ? (
							<h2 className="text-center">
								{g2CrowdHeader !== undefined && g2CrowdHeader.length > 0
									? matrixBlock.g2CrowdHeader
									: "The recommended CRM<br /> for Google Workspace."}
							</h2>
						) : (
							""
						)}
						<div className="row extra-top-margin--small  align-items-center slider-container">
							<div className="container extra-bottom-margin--x-small ">
								<div
									id="slider-reviews-holder"
									className="row slider-reviews-holder"
								>
									{g2CrowdReviews !== undefined ? (
										<>
											{g2CrowdReviews.map((review) => {
												{
													/** for range() prints must add 1 because the function iterates in any number it get (closed intervals) */
												}
												const ceiledValue = Math.ceil(review.rating + 1);
												const floorValue = Math.floor(review.rating);
												let starCount = [];
												let emptyStarCount = [];

												for (let i = 0; i < floorValue; i++) {
													starCount.push(i);
												}

												for (let i = ceiledValue; i < 5; i++) {
													emptyStarCount.push(i);
												}

												return (
													<div
														id=""
														className="c-card__entry c-card--internal-padding review-slider-element"
													>
														<div className="stars-container">
															{/* Loop for filled stars */}
															{starCount.map((star) => {
																return (
																	<img
																		className="star"
																		src="/imgs/slider/Single-filled-star.svg"
																		alt="Full star image"
																	/>
																);
															})}
															{review.rating - floorValue > 0 ? (
																<>
																	{/* Printing the odd star */}
																	<img
																		className="star"
																		alt="Half star image"
																		src="/imgs/slider/Half-star.svg"
																	/>
																</>
															) : (
																""
															)}
															{/* If 5 stars haven't been printed */}
															{ceiledValue < 6 ? (
																<>
																	{emptyStarCount.map((emptyStar) => {
																		return (
																			<img
																				className="star"
																				alt="Empty star image"
																				src="/imgs/slider/null-star.svg"
																			/>
																		);
																	})}
																</>
															) : (
																""
															)}
														</div>
														<div className="c-card__entry-title">
															<h4
																className="multiple-2-card-trailer"
																style="width: 288px"
															>
																{review.reviewTitle}
															</h4>
														</div>
														<p className="review-quote multiple-4-card-trailer">
															{review.reviewQuote}
														</p>
														<span className="c-eyebrow">
															— {review.reviewAuthor}
														</span>
													</div>
												);
											})}
										</>
									) : (
										""
									)}
								</div>
							</div>
							<div className="indicators col-sm-12">
								<div id="indicators-place" className="container">
									{g2CrowdReviews !== undefined ? (
										<>
											{g2CrowdReviews.map((review) => {
												<span
													id={`review-slide-${loop.index}`}
													className="indicator-line"
													onclick={`changeReviewSlide(${loop.index}, '#review-slide-${loop.index}')`}
												></span>;
											})}
										</>
									) : (
										""
									)}
								</div>
							</div>
						</div>
						<p className="text-center reviews-module-footer">
							4.6 out of 5 stars based on{" "}
							<a
								href="https://www.g2.com/products/copper/reviews"
								className="t-link no-arrow"
							>
								437 reviews
							</a>{" "}
							on{" "}
							<img
								style="height: 28px; width: 100px; display: inline-block;"
								alt="G2 slider logo"
								src="imgs/slider/G2-logo.svg"
							/>
						</p>
					</section>

					{
						// returns scripts
						() => {
							return `<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script>
              <script>
                LazyLoad.js([
                    'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js',
                    'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js'],function(){
    
                    
                $(window).resize(function () {
                  $('.review-slider-element').css('width','350px');
                  $('.review-slider-element').css('padding-left','15px');
                  $('.review-slider-element').css('padding-right','15px');
                  $('.slick-track').css('margin-top', '15px');
                  $('.slick-track').css('margin-bottom', '15px');
                  $('.draggable').css('height', '368px');
                })
    
                function changeReviewSlide(slideNumber, element){
                  $('.indicator-line').removeClass('active')
                  $(element).addClass('active');
                  
                  $('#slider-reviews-holder').slick('slickGoTo','${slideNumber}');
                }
                // Slider configuration variables
                var sliderConfigurations = {
                  'horizontal': {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    nextArrow: '<div className=" c-align--center arrow-control arrow-control-next"><div className="arrow-box"><img className="" alt="Arrow right image" src="imgs/slider/arrow_right.svg" /></div></div>',
                    prevArrow: '<div className=" c-align--center arrow-control arrow-control-prev"><div className="arrow-box"><img className="" alt="Arrow left image" src="imgs/slider/arrow_left.svg" /></div></div>',
                    adaptiveHeight: true,
                    responsive: [
                      {
                        breakpoint: 1500,
                        settings: {
                          slidesToShow: 2,
                        }
                      },
                      {
                        breakpoint: 1200,
                        settings: {
                          slidesToShow: 1,
                        }
                      },
                      {
                        breakpoint: 768,
                        settings: {
                          slidesToShow: 1,
                          arrows: false,
                        }
                      },
                    ]
                  },
                  'vertical': {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    nextArrow: '.arrow-left',
                    prevArrow: '.arrow-right',
                    adaptiveHeight: true,
                    vertical:true,
                    responsive: [
                      {
                        breakpoint: 768,
                        settings: {
                          arrows: false,
                        }
                      }
                    ]
                  },
                };
                // nextArrow: <div className=" c-align--center arrow-control arrow-control-next"><div className="arrow-box"><img className="" alt="Arrow right image" src="imgs/slider/arrow_right.svg" /></div></div>
                // prevArrow: <div className=" c-align--center arrow-control arrow-control-prev"><div className="arrow-box"><img className="" alt="Arrow left image" src="imgs/slider/arrow_left.svg" /></div></div>
                
                  $('.slider-reviews-holder').slick(sliderConfigurations['{{ entry.sliderType }}']);
                  $('.review-slider-element').css('width','350px');
                  $('.review-slider-element').css('padding-left','15px');
                  $('.review-slider-element').css('padding-right','15px');
                  $('.slick-track').css('margin-top', '15px');
                  $('.slick-track').css('margin-bottom', '15px');
                  $('.draggable').css('margin-bottom', '30px');
                  $('#review-slide-{{ entry.g2CrowdReviews.count() }}').addClass('active');
                });
    
              </script>`;
						}
					}
				</>
			) : (
				""
			)}
		</>
	);
};

export default Slider;
