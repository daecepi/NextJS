import CtaGroup from "../components/Blocks/Simples/CtaGroup";
import DefaultPageBase from "../components/PageBase/DefaultPageBase";
import { filterStripTags } from "../helpers";

export default function CrmComparisonPage({ res }) {
	return (
		<>
			<h1>Next one</h1>
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
		</>
	);
}
