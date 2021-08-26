import Image from 'next/image'
const Quote = () => {
    return (
      <section className="c-quote-carousel js-quote-carousel">
        <div className="container-fluid">
          <div className="c-quote-carousel__container col-md-11 col-lg-10 colorblock--putty colorblock--bottom--right">
            <div className="c-quote-carousel__content row background--graphite">
              <div className="container">
                <div className="row">
                  <div className="c-testimonial__image offset-md-1 col-md-4">
                    <pre
                      className="c-eyebrow c-eyebrow--light"
                      style={{top:0, marginLeft:0}}
                    >
                      Success Stories
                    </pre>
                    <div className="colorblock--bottom--right colorblock--volt">
                        <Image src='/imgs/industry/industry-agency-customer.jpg' width='676' height='880'></Image>
                      {/* <picture>
                        <source
                          type="image/webp"
                          srcset="/imgs/industry/industry-agency-customer.webp"
                          className=""
                          alt="Customers Testimonial"
                        />
                        <source
                          type="image/png"
                          srcset="/imgs/industry/industry-agency-customer.jpg"
                          className=""
                          alt="Customers Testimonial"
                        />
                        <img
                          className=""
                          src="/imgs/industry/industry-agency-customer.jpg"
                          alt="Customers Testimonial"
                        />
                      </picture> */}
                    </div>
                  </div>
                  <div className="c-testimonial__quote col-md-5 offset-md-1">
                    <div className="c-quote-carousel__blockquote--item active">
                      <blockquote>
                        Copper has created transparency that has resonated
                        throughout our entire company.
                      </blockquote>
                      <cite>
                        Nicholas Markovitz
                        <br />
                        <span className="c-quote-carousel__blockquote--position">
                          Managing Director, Creative Brands
                        </span>
                      </cite>
                    </div>
                    <br />
                    <div>
                      <a
                        className="t-link h-white"
                        target="_blank"
                        href="/blog/creative-brands-case-study"
                      >
                        See how creative brands did it
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Quote;