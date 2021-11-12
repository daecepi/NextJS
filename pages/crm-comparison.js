import CtaGroup from "../components/Blocks/Simples/CtaGroup";
import DefaultPageBase from "../components/PageBase/DefaultPageBase";
import { filterStripTags } from "../helpers";

export default function CrmComparisonPage({ res }) {
	const entry = res.entry;
	return (
		<DefaultPageBase entry={entry} globals={res.globals}>
			<section class="crm-comparison-hero c-hero--split c-hero--split--animation background--mint">
				<div class="c-image c-image--left">
					{entry?.crmHeroImage?.length ? (
						<ImageSimple
							image={entry.crmHeroImage[0]}
							stylesAtr={imageStyles}
						/>
					) : (
						<picture>
							<source
								type="image/webp"
								srcset="/local/DSC00046-2-small.jpg-min.webp"
								alt="Special image"
							/>
							<source
								type="image/png"
								srcset="/local/DSC00046-2-small.jpg-min.jpg"
								alt="Special image"
							/>
							<img
								src="/local/DSC00046-2-small.jpg-min.jpg"
								alt="Special image"
							/>
						</picture>
					)}
				</div>

				<div class="container">
					<div class="row">
						<div class="col-md-6 c-valign--middle">
							<pre class="c-eyebrow c-eyebrow--light">{entry.eyebrow}</pre>
							<h1 class="t-white">{entry.header}</h1>
							<p>{filterStripTags(entry.heroText)}</p>
							{entry?.ctas?.length ? (
								<CtaGroup ctas={entry.ctas} />
							) : (
								<div class="c-hero__buttons">
									<a class="c-button c-button--white" href="/signup">
										Free Trial
									</a>
									<a class="c-button c-button--white-outline" href="/demos">
										Request Demo
									</a>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>

			{/* Simplify your workday */}
			<section class="c-list-card crm-comparison-cards">
				<div class="container">
					<div class="c-list-card__header c-align--center">
						<h2 class="col-sm-10 t-center">Compare the most popular CRMs.</h2>
						<p class="col-sm-8 t-center">
							Get an idea of what other CRMs can and can't do to narrow down
							your options with a CRM feature comparison.
						</p>
					</div>
					<div class="row">
						{/* Cards */}
						{entry?.crmCards
							? entry.crmCards.map((card) => {
									return (
										<a
											href="{{crm.crmCardLink.url}}"
											target="_blank"
											class="col-md-4 card__mobile-top-margin"
										>
											<div class="c-list-card__card c-list-card__card--centered no-margin">
												<div class="c-list-card__image c-list-card__image--text c-valign--middle">
													{card.crmLogo?.length ? (
														<ImageSimple
															image={crm.crmLogo[0]}
															stylesAtr={{ maxWidth: "150px" }}
														/>
													) : (
														<picture>
															<source
																type="image/webp"
																srcset="/imgs/integrations/docusign-logo.webp"
																alt="{{crm.crmName}}"
																style="max-width: 150px;"
															/>
															<source
																type="image/png"
																srcset="/imgs/integrations/docusign-logo.png"
																alt="{{crm.crmName}}"
																style="max-width: 150px;"
															/>
															<img
																alt="{{crm.crmName}}"
																src="/imgs/integrations/docusign-logo.png"
																style="max-width: 150px;"
															/>
														</picture>
													)}
												</div>
												{card.crmCopy?.length ? (
													<p class="p-sm">{crm.crmCopy}</p>
												) : (
													""
												)}
												<div class="c-card__meta c-card__meta--noline c-card__meta--nopadding ">
													<p class="t-link">Learn More</p>
												</div>
											</div>
										</a>
									);
							  })
							: ""}
					</div>
				</div>
			</section>

			{/* Quote Carousel */}
			{/*<section class="crm-comparison-quotes c-quote-carousel js-quote-carousel">
<div class="container-fluid">

    <div class="c-quote-carousel__container col-md-11 col-lg-11 colorblock--light-gray colorblock--bottom--right">
        <div class="c-quote-carousel__content row">

            <div class="container">
                <div class="col-md-11 offset-md-1">
                    <pre class="c-eyebrow c-eyebrow--light">Customer Story</pre>
                </div>

                <div class="c-quote-carousel__group">
                    {% for quote in entry.customerStories %}
                    <div class="row c-quote-carousel__group--item">
                        <div class="c-quote-carousel__group--item-image col-md-4 ">
                            {% if quote.customerImage.one().url is defined %}
                                {% set customerImage = quote.customerImage.one() %}
                                <img alt="{{ customerImage.altText is defined and customerImage.altText|length ? customerImage.altText : customerImage.title }}" src="{{customerImage.url}}">
                            {% endif %}
                        </div>
                        <div class="c-quote-carousel__blockquote col-md-7 c-valign--middle">
                            <div class="c-quote-carousel__blockquote--item">
                                <blockquote>{{quote.customerQuote | raw | striptags}}</blockquote>
                                <cite>{{quote.customerName}} <span class="c-quote-carousel__blockquote--position">{{quote.customerPosition}}</span></cite>
                                <div class="c-quote-carousel__blockquote--logo">
                                    {% if quote.customerCompanyLogo.one().url is defined %}
                                        {% set customerCompanyLogo = quote.customerCompanyLogo.one() %}
                                        <img alt="{{ customerCompanyLogo.altText is defined and customerCompanyLogo.altText|length ? customerCompanyLogo.altText : customerCompanyLogo.title }}" src="{{customerCompanyLogo.url}}">
                                    {% endif %}
                                </div>
                            </div>
                        </div>
                    </div>
                    {% endfor %}
                </div>

            </div>

        </div>
    </div>

</div>
</section>

<!-- Simplify your workday-->
<section class="crm-comparison-features c-list-card">
<div class="container">
    <div class="c-list-card__header">
        <h2 class="t-center">Copper features</h2>
        <p class="t-center">All of the CRM Features and CRM Capabilities are included with your free trial.</p>
    </div>
    <div class="row">
        <!--Sales Productivity-->
        {% for features in entry.copperFeatures %}
        <div class="col-md-4">
            <div class="c-list-card__card">
                <div class="c-list-card__border mint"></div>
                <span class="t-eyebrow">{{features.featureCategory}}</span>
                <div class="c-list-card__icon">
                </div>
                {% for item in features.featureList%}
                <div class="c-list-card__copy">
                    <h4>{{item.title}}</h4>
                    <p class="p-sm">{{item.paragraph}}</p>
                </div>
                {% endfor %}
            </div>
        </div>
        {% endfor %}
        <div class="row c-align--center extra-top-margin--small">
            <a class="t-link" href="/features">See all features </a>
        </div>
    </div>
</div>
</section>

<!-- LAST MODULE -->
<section class="crm-comparison-last-module c-cols">
<div class="container">
    <div class="row">
        <div class="col-md order-2">
            <div class="c-image c-image--center sl_swap" id="home-customer-logos">
                {% if entry.lastModuleImage.one().url is defined %}
                <img src="{{entry.lastModuleImage.one().url}}" alt="Customer logos">
                {% else %}
                <picture>
      <source type="image/webp" srcset="/imgs/home-logos.webp"    alt="Customer logos">
      <source type="image/png" srcset="/imgs/home-logos.png"    alt="Customer logos">
      <img     src="/imgs/home-logos.png"   alt="Customer logos" >
</picture>
                {% endif %}
            </div>
        </div>
        <div class="col-md order-1">
            <h2>So happy</h2>
            <h2>with Copper</h2>
            <p>12,000 + of the most innovative companies</p>
            <div class="c-hero__buttons">
                <a class="c-button" href="/customers">See customer stories</a>
            </div>
        </div>
    </div>
</div>
      </section>*/}
		</DefaultPageBase>
	);
}

export async function getStaticProps(context) {
	const res = await getEntryByType(
		"crmComparisonIndex",
		"crm-comparison-index"
	);
	return {
		props: {
			res,
		}, // will be passed to the page component as props
	};
}
