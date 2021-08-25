import Link from 'next/link';
import Image from 'next/image'; 
const Jumble = () => {
  return (
    <section className="c-jumble c-jumble-background--hot-pink top-margin-mobile relative">
      <div className="container">
        <div className="c-jumble__container col-md-10 no-padding">
          <div className="c-jumble__content c-valign--middle extra-padding">
            <div className="row">
              <div className="col-md-6 order-md-2">
                <div className="c-image">
                    {/* <Image src="https://copper.objects.frb.io/imgs/industry/agencies-crm/industry-agency-IMG-01@2x.png" layout='responsive' width='1252' height='1342'></Image> */}
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="https://copper.objects.frb.io/imgs/industry/agencies-crm/industry-agency-IMG-01@2x.webp"
                      alt="Industry agency 1"
                    />
                    <source
                      type="image/png"
                      srcSet="https://copper.objects.frb.io/imgs/industry/agencies-crm/industry-agency-IMG-01@2x.png"
                      alt="Industry agency 1"
                    />
                    <img
                      alt="Industry agency 1"
                      src="https://copper.objects.frb.io/imgs/industry/agencies-crm/industry-agency-IMG-01@2x.png"
                    />
                  </picture>
                </div>
              </div>
              <div className="col-md-6 order-md-1">
                <pre className="c-eyebrow c-eyebrow--light">agency CRM</pre>
                <h2>Strengthen your relationships & do your best work.</h2>
                <p>
                  Copper is a different kind of CRM. It’s elegantly designed for
                  Google Workspace, so fast-moving digital agencies can build
                  the strong relationships that lead to repeat business.
                </p>
                <a className="t-link h-white" href="/g-suite-crm">
                  Learn More
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
