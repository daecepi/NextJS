import Link from 'next/link';
import Image from 'next/image'; 
const Jumble = (props) => {
  return (
    <section className={`c-jumble c-jumble-background--${props.backgroundColor} top-margin-mobile relative`}>
      <div className="container">
        <div className="c-jumble__container col-md-10 no-padding">
          <div className="c-jumble__content c-valign--middle extra-padding">
            <div className="row">
              <div className="col-md-6 order-md-2">
                <div className="c-image">
                    {/* <Image src="https://copper.objects.frb.io/imgs/industry/agencies-crm/industry-agency-IMG-01@2x.png" layout='responsive' width='1252' height='1342'></Image> */}
                  <picture>
                    {/* <source
                      type="image/webp"
                      srcSet="https://copper.objects.frb.io/imgs/industry/agencies-crm/industry-agency-IMG-01@2x.webp"
                      alt="Industry agency 1"
                    />
                    <source
                      type="image/png"
                      srcSet="https://copper.objects.frb.io/imgs/industry/agencies-crm/industry-agency-IMG-01@2x.png"
                      alt="Industry agency 1"
                    /> */}
                    <img
                      alt="Industry agency 1"
                      src={props.imageUrl}
                    />
                  </picture>
                </div>
              </div>
              <div className="col-md-6 order-md-1">
                <pre className="c-eyebrow c-eyebrow--light">{props.eyebrow}</pre>
                <h2>{props.title}</h2>
                <p>
                  {props.copy}
                </p>
                <a className="t-link h-white" href={props.ctaUrl}>
                  {props.ctaText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumble;
