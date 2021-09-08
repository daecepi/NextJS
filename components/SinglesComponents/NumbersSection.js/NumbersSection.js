import Image from 'next/image';

const NumbersSection = (props) => {
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
                  {props.eyebrow}
                </pre>
                <h2>{props.title}</h2>
              </div>
              <div className="col-md-8">
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default NumbersSection;
