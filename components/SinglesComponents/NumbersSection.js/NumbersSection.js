import Image from 'next/image';

const NumbersSection = () => {
    return (
      <div className="c-numbers--full">
          <Image src='/imgs/industry/industry-agency-IMG-04@2x.jpg' width='2880' height='1280'></Image>
        {/* <picture>
          <source
            type="image/webp"
            srcset="/imgs/industry/industry-agency-IMG-04@2x.webp"
            alt="Industry agency image 2"
            className="c-numbers__background-image"
          />
          <source
            type="image/png"
            srcset="/imgs/industry/industry-agency-IMG-04@2x.jpg"
            alt="Industry agency image 2"
            className="c-numbers__background-image"
          />
          <img
            src="/imgs/industry/industry-agency-IMG-04@2x.jpg"
            alt="Industry agency image 2"
            className="c-numbers__background-image"
          />
        </picture> */}
        <div className="c-numbers__container">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <pre className="c-eyebrow" style={{top:0, marginLeft:0}}>
                  By The Numbers
                </pre>
                <h2>Copper + Digital Agencies</h2>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="c-number col-md-5">
                    <span className="t-numbers">13</span>
                    <p>hours per user per week saved on manual data entry</p>
                  </div>
                  <div className="c-number col-md-5 offset-md-1">
                    <span className="t-numbers">50%</span>
                    <p>more accurate reporting</p>
                  </div>
                </div>
                <div className="row">
                  <div className="c-number col-md-5">
                    <span className="t-numbers">43%</span>
                    <p>increase in team collaboration when closing deals</p>
                  </div>
                  <div className="c-number col-md-5 offset-md-1">
                    <span className="t-numbers">36%</span>
                    <p>faster response time to prospects and clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default NumbersSection;
