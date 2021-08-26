import Image from 'next/image';

const RelatedContent = () => {
    return (
      <section className="c-blog__entries sl_hide">
        <div className="container">
          <pre className="c-eyebrow" style={{ top: 0, marginLeft: 0 }}>
            Resources
          </pre>
          <div className="row">
            <div className="col-md-4">
              <div className="c-card__entry extended-card">
                <a
                  className="c-card__clickthrough"
                  href="/blog/jump-450-agency-crm-case-study"
                ></a>
                <Image src='/imgs/industry/jump-blog-01.png' width='899' height='581'></Image>

                <div className="c-card__entry__content">
                  <div className="entry_categories">
                    <span className="t-eyebrow">Case Study</span>
                  </div>
                  <h4 className="c-card__entry-title">
                    <a
                      className="underline_from_lefsettt"
                      href="/blog/amigo-case-study"
                    >
                      How an NYC Agency Beats the Competition with Automation
                    </a>
                  </h4>
                </div>
                <div className="c-card__meta">
                  <a className="t-link" href="/blog/amigo-case-study">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="c-card__entry extended-card">
                <a
                  className="c-card__clickthrough"
                  href="/blog/agency-client-relationships"
                ></a>
                <Image src='/imgs/industry/industry-agency-blog-02@2x.jpg' width='899' height='581'></Image>
                
                <div className="c-card__entry__content">
                  <div className="entry_categories">
                    <span className="t-eyebrow">Copper Blog</span>
                  </div>
                  <h4 className="c-card__entry-title">
                    <a
                      className="underline_from_lefsettt"
                      href="/blog/agency-client-relationships"
                    >
                      How to Build Long-lasting Client/Agency Relationships
                    </a>
                  </h4>
                </div>
                <div className="c-card__meta">
                  <a
                    className="t-link"
                    href="/blog/agency-client-relationships"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="c-card__entry extended-card">
                <a
                  className="c-card__clickthrough"
                  href="/blog/crm-agencies"
                ></a>
                <Image src='/imgs/industry/industry-agency-blog-03@2x.jpg' width='899' height='581'></Image>
                
                <div className="c-card__entry__content">
                  <div className="entry_categories">
                    <span className="t-eyebrow">BEST PRACTICES</span>
                  </div>
                  <h4 className="c-card__entry-title">
                    <a
                      className="underline_from_lefsettt"
                      href="/blog/crm-agencies"
                    >
                      Top 6 Things to Look for in a CRM for Agencies
                    </a>
                  </h4>
                </div>
                <div className="c-card__meta">
                  <a className="t-link" href="/blog/crm-agencies">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default RelatedContent