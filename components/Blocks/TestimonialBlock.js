import Image from 'next/image';

const TestimonialBlock = (props) => {
    return(
        <section className='testimonial-block bg-white'>
            <div className="testimonial__conatiner max-w-7xl m-auto pt-32 pb-32 z-10 relative">
                <div className="testimonial-eyebrow mb-10 relative z-10 w-1/2 ">
                    <p className='uppercase text-black max-w-sm m-auto text-sm'><span className='eyebrow-big-dash'></span> {props.eyebrow}</p>
                </div>
                <div className="testimonial__content-container flex flex-wrap relative z-10">
                    <div className="testimonial__image-container w-1/2">
                        <div className="testimonial-image max-w-sm m-auto">
                            {/* <Image  src={`https:${props.image[0].optimizedLandingImages.src}`} 
                                    // srcSet={props.image[0].optimizedLandingImages.srcset} 
                                    width={props.image[0].optimizedLandingImages.originalImageWidth} 
                                    height={props.image[0].optimizedLandingImages.originalImageHeight} /> */}
                            <picture>
                                <source srcSet={props.image[0].optimizedLandingImages.srcWebp} type="image/webp"></source>
                                <img  src={props.image[0].optimizedLandingImages.src}
                                        srcSet={props.image[0].optimizedLandingImages.srcset} 
                                        width={props.image[0].optimizedLandingImages.originalImageWidth} 
                                        height={props.image[0].optimizedLandingImages.originalImageHeight} />
                            </picture>
                            
                        </div>
                    </div>
                    <div className="testimonial__quote-container w-1/2 flex flex-col justify-center">
                        <blockquote className=' text-black text-3xl mb-5 font-light'>
                            {props.quote}
                        </blockquote>
                        <cite className=' text-black uppercase text-base font-bold	'>
                            {props.author}
                            <p className=' font-normal'>{props.jobtitle}</p>
                        </cite>
                    </div>
                </div>
                
                
            </div>
        </section>
    )
}

export default TestimonialBlock;