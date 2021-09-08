import Head from "next/head";
import Script from "next/script";
import HeroHomePage from "../components/Blocks/HeroTypes/HeroHomePage";
import NavigationDefault from "../components/Navigation/NavigationDefault";
const PmCRM = () => {
  return (
    <main id="content" role="main" className="no-top-margin">
      <Head>
        // Responsive meta tag
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        // bootstrap CDN
      </Head>
      <NavigationDefault></NavigationDefault>

      <Script
        strategy="beforeInteractive"
        src="https://app-sj17.marketo.com/js/forms2/js/forms2.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="https://marketo.clearbit.com/assets/v1/marketo/forms.js"
        data-clearbit-publishable-key="pk_297de2bd498f18ecd1cabfdd7ad4fea9"
      ></Script>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
        onLoad={() => {
          var compSize = undefined;
          var tyMsgSelect = [
            {
              variationLogic: "companySize",
              variationLogicComparison: "lessThan",
              variationLogicValue: 6,
              vSuccessMessage: "",
            },
          ];
          function shDisplayVariationMessage(formValues) {
            // Get the number to evaluate from
            var messageNotFound = true;
            var messageDisplayed = true;
            tyMsgSelect.forEach(function (tyVariation) {
              var companySize =
                formValues["companySize"] ||
                formValues.cBcompanymetricsemployees;
              var sizes = companySize.replace("+", "").split("-");
              var maxValue = Math.max(...sizes);
              var minValue = Math.min(...sizes);
              if (tyVariation.variationLogic === "companySize") {
                if (
                  messageNotFound &&
                  tyVariation.variationLogicValue <= maxValue &&
                  tyVariation.variationLogicValue >= minValue
                ) {
                  // When we just want to affect the
                  $(
                    `#synced-${tyVariation.variationLogic}${tyVariation.variationLogicValue}`
                  )
                    .first()
                    .removeClass("invisible-start");
                  messageNotFound = false;
                } else if (
                  messageNotFound &&
                  tyVariation.variationLogicComparison === "lessThan" &&
                  tyVariation.variationLogicValue >= maxValue
                ) {
                  $(
                    `#synced-${tyVariation.variationLogic}${tyVariation.variationLogicValue}`
                  )
                    .first()
                    .removeClass("invisible-start");
                  messageNotFound = false;
                }
              }
            });
            if (messageNotFound) {
              $("#synced-default-thank-you")
                .first()
                .removeClass("invisible-start");
            }

            $("#c-form--default-hero")
              .fadeOut(300, "linear")
              .promise()
              .done(function () {
                $(".marketo-flow-trigger").hide(0);
                $("#success-flow-variation").css("display", "block");
                $("#success-flow-row").fadeIn(1000, "linear");
              });

            document
              .getElementById("success-flow-variation")
              .scrollIntoView({ behavior: "smooth" });
          }

          MktoForms2.loadForm(
            "https://app-sj17.marketo.com",
            "763-DVL-293",
            "2164",
            function (form) {
              //Add an onSuccess handler
              form.onSuccess(function (values, followUpUrl) {
                //get the form's jQuery element and hide it
                // Preparing intercom fields
                var heroForm = MktoForms2.getForm("2164");
                var formSubmitted = heroForm.getValues();
                form.getFormElem().hide();

                ga("send", "event", "Get Demo", "FormFill", "2164");
                shDisplayVariationMessage(formSubmitted);

                //return false to prevent the submission handler from taking the lead to the follow up url.
                return false;
              });
            }
          );

          MktoForms2.whenReady(function (form) {
            $(".loading-cover").each(function () {
              var loadingElement = $(this);
              loadingElement.css("display", "none");
            });
          });
          $(".hero-marketo-flow-button").click(configureMarketoNavigation);
          $(".hero-trial-flow-button").click(configureTryFreeNavigation);

          function configureTryFreeNavigation(event) {
            event.preventDefault();

            // Hiding flows before showing
            $("#default-image")
              .fadeOut(300, "linear")
              .promise()
              .done(function () {
                $("#c-form--default-hero")
                  .fadeOut(300, "linear")
                  .promise()
                  .done(function () {
                    $(".marketo-flow-trigger")
                      .hide(0, "linear")
                      .promise()
                      .done(function () {
                        $(".c-default-state")
                          .hide(0, "linear")
                          .promise()
                          .done(function () {
                            $(".trial-flow-trigger")
                              .show(0, "linear")
                              .promise()
                              .done(function () {
                                $("#signup-aconditioner-container").fadeIn(500);
                              });
                          });
                      });
                  });
              });
          }
          function configureMarketoNavigation(event) {
            event.preventDefault();

            $("#default-image")
              .fadeOut(300, "linear")
              .promise()
              .done(function () {
                $("#signup-aconditioner-container")
                  .fadeOut(300, "linear")
                  .promise()
                  .done(function () {
                    $(".trial-flow-trigger")
                      .hide(0, "linear")
                      .promise()
                      .done(function () {
                        $(".c-default-state")
                          .hide(0, "linear")
                          .promise()
                          .done(function () {
                            $(".marketo-flow-trigger")
                              .show(0, "linear")
                              .promise()
                              .done(function () {
                                $("#c-form--default-hero").fadeIn(
                                  500,
                                  "linear"
                                );
                              });
                          });
                      });
                  });
              });
          }
        }}
      ></Script>

      <section className="c-hero--split soft-midnight product-page no-transition c-default-state">
        <div className="c-animation-container">
          <div
            id="default-image"
            className="c-image condensed-in-background image-center"
          >
            <picture>
              <source
                type="image/webp"
                srcSet="https://copper.objects.frb.io/imgs/simples/projects-page/section-image_hero@2xupdated.webp"
                alt="Image hero"
              />
              <source
                type="image/png"
                srcSet="https://copper.objects.frb.io/imgs/simples/projects-page/section-image_hero@2xupdated.png"
                alt="Image hero"
              />
              <img
                src="https://copper.objects.frb.io/imgs/simples/projects-page/section-image_hero@2xupdated.png"
                alt="Image hero"
              />
            </picture>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 c-valign--middle">
                <pre className="c-eyebrow c-eyebrow--dark">COPPER PROJECTS</pre>
                <div className="hero-text">
                  <h1>CRM doesn’t end with the deal</h1>
                  <p>
                    After the deal is closed and the work begins, you shouldn't
                    have to switch to another tool - incurring the pain of
                    duplicate data entry - to make the transition for each task.
                    Now, because of Copper’s CRM system, you don't need any
                    other project management tool or CRM software.
                  </p>
                </div>
                <div className="c-hero__buttons">
                  <button className="c-button c-button--hot-pink hero-trial-flow-button">
                    Try Free
                  </button>
                  <button className="c-button c-button--outline hero-marketo-flow-button">
                    Request Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marketo-flow-trigger" style={{ display: "none" }}>
        <section className="c-hero--split soft-midnight product-page no-transition">
          <div className="container">
            <div className="row">
              <div className="col-md-6 c-valign--middle">
                <pre className="c-eyebrow c-eyebrow--dark">COPPER PROJECTS</pre>
                <div className="hero-text">
                  <h1>CRM doesn’t end with the deal</h1>
                  <p>
                    After the deal is closed and the work begins, you shouldn’t
                    have to switch to another tool - incurring the pain of
                    duplicate data entry - to make the transition.
                  </p>
                </div>
                <div className="c-hero__buttons">
                  <button className="c-button c-button--hot-pink hero-trial-flow-button">
                    Try Free
                  </button>
                  <button className="c-button c-button--outline hero-marketo-flow-button">
                    Request Demo
                  </button>
                </div>
              </div>
              <div className="col-md-6 c-valign--middle">
                <div
                  id="c-form--default-hero"
                  className="c-form c-form-mkto2164"
                >
                  <div className="online-marketo">
                    {/* {% include "components/graphics/_hero-loading.html" %} */}
                    {/* {# form element #} */}
                    <form
                      id="mktoForm_2164"
                      dataformid="2164"
                      dataforminstance="one"
                    >
                      {/* {% if pageHeroSynced is defined and pageHeroSynced == 1 %}
                  <h4>Watch Demo<span className="t-hot-pink">.</span></h4>
                  {% elseif entry.marketoFormCopy is not null and entry.marketoFormCopy|length %}
                  {{ entry.marketoFormCopy }}
                  {% endif %} */}
                    </form>
                  </div>
                  <div
                    id="c-thank-you-message--default-hero"
                    className="invisible-start"
                  >
                    {/* {% if entry.marketoThankYouMessage is not null and entry.marketoThankYouMessage|length > 0 %}
                {{ entry.marketoThankYouMessage }}
                {% else %} */}
                    <h3>
                      Thank you<span className="hot-pink t-hot-pink">.</span>
                    </h3>
                    <p className="p-sm">
                      Someone from our team will be with you shortly
                    </p>
                    {/* {% endif %} */}
                    {/* {{entry.successVideoEmbedCode is not null and entry.successVideoEmbedCode|length > 0 ? entry.successVideoEmbedCode|raw : ''}} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="trial-flow-trigger" style={{ display: "none" }}>
        <section
          className="c-hero--split landing-hero c-hero--general-signup-form split-background--inverted soft-midnight no-transition"
          style={{
            paddingTop: "200px",
            paddingBottom: "100px",
            minHeight: "0",
          }}
        >
          <div className="container">
            <div className="row row--no-reverse">
              <div className="col-md-6 col-margin-inverted c-valign--middle copy-aconditioner soft-midnight">
                <pre className="c-eyebrow c-eyebrow--dark">COPPER PROJECTS</pre>
                <div className="hero-text">
                  <h1>CRM doesn’t end with the deal</h1>
                  <p>
                    After the deal is closed and the work begins, you shouldn’t
                    have to switch to another tool - incurring the pain of
                    duplicate data entry - to make the transition.
                  </p>
                </div>
                <div className="c-hero__buttons">
                  <button className="c-button c-button--hot-pink hero-trial-flow-button">
                    Try Free
                  </button>
                  <button className="c-button c-button--outline hero-marketo-flow-button">
                    Request Demo
                  </button>
                </div>
              </div>
              <div
                id="signup-aconditioner-container"
                className="col-md-6 c-valign--middle signup-aconditioner "
              >
                <div style={{ color: "#000000", marginTop: "60px" }}>
                  <div className="form_container">
                    <form
                      className="signup_form"
                      id="signup_form"
                      action="https://app.copper.com/users"
                      acceptCharset="UTF-8"
                      method="post"
                    >
                      <input name="utf8" type="hidden" value="✓" />
                      <input
                        type="hidden"
                        name="authenticity_token"
                        value="lAAB/AYz9RxQR4RN74ZQgCErmru66/VW8Kzw3EeKrJrJC4AjlOsOIwvmktA9F0k1HVJQkSEber78cUBqUaYwhw=="
                      />
                      <a
                        className="google_light_btn"
                        href="https://app.copper.com/auth/auto_login?continue_with_google=true&amp;failure_url=https%3A%2F%2Fapp.copper.com%2Fusers%2Fsign_up%3Fauth_error%3DAuthentication%2Bfailed.%2BPlease%2Benter%2Byour%2Bemail%2Bbelow%2Bto%2Bcontinue.&amp;prompt=consent&amp;provider=google_oauth2_extended"
                      >
                        <img
                          className="google_icon"
                          alt="Google Icon"
                          src="//d3jas8421cca9z.cloudfront.net/assets/google-g-0cf576a5dab9315daac7ffe29d29ed585e0ff9850e59408d0f25f38dc1da037b.svg"
                        />
                        <span className="google_light_btn_label">
                          Continue with Google
                        </span>
                      </a>
                      <div className="signup_form_subtext">
                        or use your email to sign up:
                      </div>
                      <div className="field">
                        <div className="form_text_field_container">
                          <label htmlFor="user[full_name]">Full Name</label>
                          <input
                            className="text_field"
                            size="30"
                            placeholder="Jane Doe"
                            type="text"
                            name="user[full_name]"
                            id="user_full_name"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <div className="form_text_field_container">
                          <label htmlFor="user[email]">Work Email</label>
                          <input
                            size="30"
                            className="text_field"
                            placeholder="janedoe@example.com"
                            type="email"
                            name="user[email]"
                            id="user_email"
                          />
                        </div>
                      </div>
                      <input type="hidden" name="ampDeviceID" value="" />
                      <div className="submit-button-row">
                        <input
                          type="submit"
                          name="commit"
                          value="Try Free"
                          className="submit_button is-pink with-no-border"
                        />
                      </div>
                    </form>
                    <p className="disclaimer">
                      By signing up, I agree to Copper’s{" "}
                      <a href="/privacy">privacy policy</a> &amp;{" "}
                      <a href="/terms">terms of service.</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PmCRM;
