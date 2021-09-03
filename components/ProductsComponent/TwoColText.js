const TwoColText = () => {
    return (
      <section className="h-section-padding product-page-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <pre className="c-eyebrow">DATA protection</pre>
              <h2>Backed up and verified.</h2>
              <p>
                Copper’s data policies and procedures are externally
                validated—so you don’t have to take our word for it.
              </p>
            </div>
            <div className="col-md-7 offset-md-1">
              <div className="extra-bottom-margin--x-small">
                <p className="bold">Global Compliance</p>
                <p>
                  Copper has been built to comply with global data privacy laws,
                  from the EU to California and beyond. For more information,
                  visit our help center and Privacy Policy.
                </p>
              </div>
              <div className="extra-bottom-margin--x-small">
                <p className="bold">Cross-Border Data Transfers</p>
                <p>
                  Copper participates in the Privacy Shield program and has
                  incorporated the EU’s Standard Contractual Clauses (SCCs) into
                  its Terms of Service, so all Copper customers can rest assured
                  that their EU-to-US data transfers comply with EU legal
                  mandates.
                </p>
              </div>
              <div className="extra-bottom-margin--x-small">
                <p className="bold">Third-Party Tested</p>
                <p>
                  Copper regularly subjects its systems to outside vulnerability
                  scans and penetration tests to identify, track, and resolve
                  vulnerabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default TwoColText;