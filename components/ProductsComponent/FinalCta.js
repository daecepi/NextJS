import Image from "next/image";
const FinalCta = (props) => {
    return (
      <section className="final-plea product-page">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h2>{props.title}</h2>
              <p>{props.copy}</p>
              <div className="c-hero__buttons">
                <a
                  className="c-button sendUTMsToAmplitude"
                  href={props.ctaOneUrl}
                >
                  {props.ctaOneText}
                </a>
                <a className="c-button c-button--outline" href={props.ctaTwoUrl}>
                  {props.ctaTwoText}
                </a>
              </div>
            </div>
            <div className="col-md-5 offset-md-2">
              <div className="relative">
                  <Image src={props.imageUrl} width='736' height='840' ></Image>
                {/* <picture>
                  <source
                    type="image/webp"
                    srcset="/imgs/product/191223_Automate_finalplea.webp"
                    className=""
                    alt="Automation final image"
                  />
                  <source
                    type="image/png"
                    srcset="/imgs/product/191223_Automate_finalplea.png"
                    className=""
                    alt="Automation final image"
                  />
                  <img
                    className=""
                    src="/imgs/product/191223_Automate_finalplea.png"
                    alt="Automation final image"
                  />
                </picture> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default FinalCta