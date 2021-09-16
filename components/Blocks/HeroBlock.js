import { useRouter } from "next/router";
import FullImageHero from "./HeroTypes/FullImageHero";
import HeroSignUpForm from "./HeroTypes/HeroSignUpForm";

const HeroBlock = ({slug, loopIndex, fullImageHero, halfFullImage, backgroundColor, specialClass, imageContain, linkToNav, imageOverlay, eyebrow, copyLogo, richText, bulletItemsInHero, bulletPointsMode, specialBulletsText, cta, assetText, image, displayVideo, heroVideoUrl, displaySignupForm, signupFormType, heroSignupTitle, heroSignupDescription, signupSide, displayMarketoForm, marketoFormCopy, heroMarketoId, ctasOnMarketo, marketoThankYouMessage, successVideoEmbedCode, marketoSide, marketoConnect }) => {
    const commonParams = {slug, loopIndex, imageContain, imageOverlay, eyebrow, eyebrowSettings, copyLogo, richText,  }
    const { query } = useRouter();

    if(fullImageHero){
        return  <FullImageHero />
    }

    if(hero.displaySignupForm == true){
        return(
            <HeroSignUpForm 
                signupSide = {hero.signupSide}
                text = {hero.richText}
                containerBg={hero.backgroundColor} 
            />
        )
    }
    return null;

    return (

        {% if heroValues.fullImageHero|length %}, 
            
            {% include 'sections/landing/hero-sticky-nav.html' %}


            {% elseif heroValues.halfFullImage|length %}
                {% set image = heroValues.image.one() %}
                <section class="c-hero--split {{ backgroundColor ? backgroundColor.slug : 'hot-pink' }} product-page">
                    <div class="c-image">
                    {% set optimizedImages = image.optimizedLandingImages %}
                    {% if optimizedImages.optimizedImageUrls |length > 0 %}
                        <picture>
                        {% if optimizedImages.srcsetWebP() %}
                        <source srcset="{{ optimizedImages.srcsetWebP() }}" 
                                sizes="100vw"
                                type="image/webp" />
                        {% endif %}
                        <img src="{{ optimizedImages.src() }}"
                            srcset="{{ optimizedImages.srcset() }}"
                            sizes="100vw"
                            alt="{{ image.altText is defined and image.altText|length ? image.altText : image.title }}"/>
                        </picture>
                    {% else %}
                        <img src="{{image.url}}" alt="{{ image.altText is defined and image.altText|length ? image.altText : image.title }}">
                    {% endif %}
                    </div>
                    <div class="container">
                    <div class="row">
                        <div class="col-md-6 c-valign--middle">
                        {% include 'sections/landing/dynamic-hero-elements/hero-copy.html' %}
                        </div>
                    </div>
                    </div>
                </section>
                {% include 'sections/landing/hero-sticky-nav.html' %}

            {% else %}
            <!--Signup form-->
            {# {% if ( heroValues.displaySignupForm == "1" ) and (craft.request.getQuery('widget') == 'signup') %} #}
            {% if heroValues.displaySignupForm == "1" %}
                {% if heroValues.signupSide == "left" %}
                <section id="starting-hero" class="c-hero--split
                                landing-hero
                                {{ entry.removeNavigation ? 'h-no-nav' : '' }}
                                c-hero--general-signup-form
                                {% if heroValues.signupFormType == 'enclosed' %} enclosed-form {% endif %} 
                                {{ backgroundColor ? backgroundColor.slug : 'hot-pink' }}
                                {{ heroValues.specialClass|length ? heroValues.specialClass : "" }}
                                "
                                style="
                                {{ notFirstHero is defined and notFirstHero is not null and notFirstHero == 1 ? 'padding-top: 100px; padding-bottom: 100px; min-height: 0;' : '' }} ">
                    <div class="container">
                    <div class="row">
                        <div class="col-md-6 c-valign--middle signup-aconditioner {% if heroValues.signupFormType == 'enclosed' %} enclosed-container {% endif %}">
                            <div style="color: #000000; margin-top: 60px;">
                                {% if heroValues.heroSignupTitle is not null and heroValues.heroSignupTitle|length %}
                                <h1 class="more-space">{{ heroValues.heroSignupTitle }}</h1>
                                {% endif %}
                                {% if heroValues.heroSignupDescription is not null and heroValues.heroSignupDescription|length %}
                                <p class="form-subtitle">{{ heroValues.heroSignupDescription }}</p>
                                {% endif %}
                                <div class="form_container">
                                <form class="signup_form" id="signup_form" action="https://app.copper.com/users" accept-charset="UTF-8" method="post">
                                    <input name="utf8" type="hidden" value="✓">
                                    <input type="hidden" name="authenticity_token" value="lAAB/AYz9RxQR4RN74ZQgCErmru66/VW8Kzw3EeKrJrJC4AjlOsOIwvmktA9F0k1HVJQkSEber78cUBqUaYwhw==">
                                    <a class="google_light_btn" href="https://app.copper.com/auth/auto_login?continue_with_google=true&amp;failure_url=https%3A%2F%2Fapp.copper.com%2Fusers%2Fsign_up%3Fauth_error%3DAuthentication%2Bfailed.%2BPlease%2Benter%2Byour%2Bemail%2Bbelow%2Bto%2Bcontinue.&amp;prompt=consent&amp;provider=google_oauth2_extended">
                                        <img class="google_icon" src="//d3jas8421cca9z.cloudfront.net/assets/google-g-0cf576a5dab9315daac7ffe29d29ed585e0ff9850e59408d0f25f38dc1da037b.svg" alt="Google g">
                                        <span class="google_light_btn_label">
                                            Continue with Google
                                        </span>
                                    </a>
                                    <div class="signup_form_subtext">
                                        or use your email to sign up:
                                    </div>
                                    <div class="field">
                                        <div class="form_text_field_container">
                                            <label for="user[full_name]">Full Name</label>
                                            <input class="text_field" size="30" placeholder="Jane Doe" type="text" name="user[full_name]" id="user_full_name">
                                        </div>
                                    </div>
                                    <div class="field">
                                        <div class="form_text_field_container">
                                            <label for="user[email]">Work Email</label>
                                            <input size="30" class="text_field" placeholder="janedoe@example.com" type="email" name="user[email]" id="user_email">
                                        </div>
                                    </div>          
                                    <input type="hidden" name="amp_device_id" value="" >
                                    <input type="hidden" name="utm_source" value="" >
                                    <input type="hidden" name="utm_campaign" value="" >
                                    <input type="hidden" name="utm_medium" value="" >
                                    <input type="hidden" name="utm_adgroup" value="" >
                                    <input type="hidden" name="utm_content" value="" >
                                    <input type="hidden" name="utm_term" value="" >
                                    <input type="hidden" name="gclid" value="" >
                                    <input type="hidden" name="visitor_token" value="" >
                                    <input type="hidden" name="fireb_device_id" value="" >
                                <input type="hidden" name="ampDeviceID" value="">
                                    <div class="submit-button-row">
                                    <input type="submit" name="commit" value="Try Free" class="submit_button is-pink with-no-border">
                                    </div>
                                </form>
                                <p class="disclaimer">By signing up, I agree to Copper’s <a href="/privacy">privacy policy</a> & <a href="/terms">terms of service.</a></p>
                                </div>

                            </div>
                        </div>
                        {% if ( heroValues.displayVideo == "1" ) and (heroValues.heroVideoUrl is not null) %}
                            <div class="col-md-6 c-valign--middle">
                            <div class="c-video ">
                                <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
                                <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
                                    <iframe src="{{ heroValues.heroVideoUrl }}" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="100%">
                                    </iframe>
                                </div>
                                </div>
                                <script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>
                            </div>
                            </div>
                        {% elseif heroValues.image|length %}
                        <div class="col-md-6 c-valign--middle c-image invert-sm-spacing c-valign--middle" style="position: relative; left: 0px;">
                        {% set image = heroValues.image.one() %}
                        {% set optimizedImages = image.optimizedLandingImages %}
                        {% if optimizedImages.optimizedImageUrls |length > 0 %}
                            <picture>
                            {% if optimizedImages.srcsetWebP() %}
                            <source srcset="{{ optimizedImages.srcsetWebP() }}" 
                                    sizes="100vw"
                                    type="image/webp" />
                            {% endif %}
                            <img src="{{ optimizedImages.src() }}"
                                srcset="{{ optimizedImages.srcset() }}"
                                sizes="100vw"
                                class="{{ heroValues.imageContain ? 'h-image-contain' : '' }}"
                                style="object-fit: initial; height: auto;"
                                alt="{{ image.altText is defined and image.altText|length ? image.altText : image.title }}"/>
                            </picture>
                        {% else %}
                            <img style="object-fit: initial; height: auto;" class="{{ heroValues.imageContain ? 'h-image-contain' : '' }}" src="{{ image.url }}" alt="{{ image.altText is defined and image.altText|length ? image.altText : image.title }}">
                        {% endif %}
                        
                        </div>
                        {% else %}
                        <div class="col-md-6"></div>
                        {% endif %}
                    </div>
                    </div>
                </section>
                {% include 'sections/landing/hero-sticky-nav.html' %}

                {% elseif heroValues.signupSide == "right" %}
                <section id="starting-hero" class="c-hero--split
                                landing-hero
                                {{ entry.removeNavigation ? 'h-no-nav' : '' }}
                                c-hero--general-signup-form
                                split-background--inverted
                                {% if heroValues.signupFormType == 'enclosed' %} enclosed-form {% endif %}
                                {{ backgroundColor ? backgroundColor.slug : 'hot-pink' }}
                                {{ heroValues.specialClass|length ? heroValues.specialClass : "" }}
                                "
                                style="{{ notFirstHero is defined and notFirstHero is not null and notFirstHero == 1 ? 'padding-top: 100px; padding-bottom: 100px; min-height: 0;' : '' }}">
                <div class="container">
                <div class="row row--no-reverse">
                    <div class="col-md-6 col-margin-inverted c-valign--middle copy-aconditioner {{ backgroundColor ? backgroundColor.slug : 'hot-pink' }}">
                    {% include 'sections/landing/dynamic-hero-elements/hero-copy.html' %}
                    </div>
                    <div class="col-md-6 c-valign--middle signup-aconditioner {% if heroValues.signupFormType == 'enclosed' %} enclosed-container {% endif %}" >
                        <div style="color: #000000; margin-top: 60px;">
                            {% if heroValues.heroSignupTitle is not null and heroValues.heroSignupTitle|length %}
                            <h1 class="more-space">{{ heroValues.heroSignupTitle }}</h1>
                            {% endif %}
                            {% if heroValues.heroSignupDescription is not null and heroValues.heroSignupDescription|length %}
                            <p class="form-subtitle">{{ heroValues.heroSignupDescription }}</p>
                            {% endif %}
                            <div class="form_container">
                            <form class="signup_form" id="signup_form" action="https://app.copper.com/users" accept-charset="UTF-8" method="post">
                                <input name="utf8" type="hidden" value="✓">
                                <input type="hidden" name="authenticity_token" value="lAAB/AYz9RxQR4RN74ZQgCErmru66/VW8Kzw3EeKrJrJC4AjlOsOIwvmktA9F0k1HVJQkSEber78cUBqUaYwhw==">
                                <a class="google_light_btn" href="https://app.copper.com/auth/auto_login?continue_with_google=true&amp;failure_url=https%3A%2F%2Fapp.copper.com%2Fusers%2Fsign_up%3Fauth_error%3DAuthentication%2Bfailed.%2BPlease%2Benter%2Byour%2Bemail%2Bbelow%2Bto%2Bcontinue.&amp;prompt=consent&amp;provider=google_oauth2_extended">
                                    <img class="google_icon" alt="{{image is defined ? image.title : 'Google Icon'}}" src="//d3jas8421cca9z.cloudfront.net/assets/google-g-0cf576a5dab9315daac7ffe29d29ed585e0ff9850e59408d0f25f38dc1da037b.svg" alt="Google g">
                                    <span class="google_light_btn_label">
                                        Continue with Google
                                    </span>
                                </a>
                                <div class="signup_form_subtext">
                                    or use your email to sign up:
                                </div>
                                <div class="field">
                                    <div class="form_text_field_container">
                                        <label for="user[full_name]">Full Name</label>
                                        <input class="text_field" size="30" placeholder="Jane Doe" type="text" name="user[full_name]" id="user_full_name">
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="form_text_field_container">
                                        <label for="user[email]">Work Email</label>
                                        <input size="30" class="text_field" placeholder="janedoe@example.com" type="email" name="user[email]" id="user_email">
                                    </div>
                                </div>
                                <input type="hidden" name="ampDeviceID" value="" >
                                <input type="hidden" name="amp_device_id" value="" >
                                <input type="hidden" name="utm_source" value="" >
                                <input type="hidden" name="utm_campaign" value="" >
                                <input type="hidden" name="utm_medium" value="" >
                                <input type="hidden" name="utm_adgroup" value="" >
                                <input type="hidden" name="utm_content" value="" >
                                <input type="hidden" name="utm_term" value="" >
                                <input type="hidden" name="gclid" value="" >
                                <input type="hidden" name="visitor_token" value="" >
                                <input type="hidden" name="fireb_device_id" value="" >
                                <div class="submit-button-row">
                                <input type="submit" name="commit" value="Try Free" class="submit_button is-pink with-no-border">
                                </div>
                            </form>
                            <p class="disclaimer">By signing up, I agree to Copper’s <a href="/privacy">privacy policy</a> & <a href="/terms">terms of service.</a></p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            {% include 'sections/landing/hero-sticky-nav.html' %}

                {% endif %}

            <!--Marketo forms section-->
            {% elseif heroValues.displayMarketoForm == "1" %}

                {% if heroValues.marketoSide.value == "left" %}
                <section id="starting-hero" class="c-hero--split
                                landing-hero 
                                {{ notFirstHero is defined and notFirstHero is not null and notFirstHero == 1 ? 'not-first' : '' }}
                                {{ backgroundColor ? backgroundColor.slug : 'hot-pink' }}
                                {{ entry.removeNavigation ? 'h-no-nav' : '' }} {{ heroValues.specialClass|length ? heroValues.specialClass : "" }}"
                                style="{{ notFirstHero is defined and notFirstHero is not null and notFirstHero == 1 ? 'padding-top: 100px; padding-bottom: 100px; min-height: 0;' : '' }}">
                <div class="container">
                    <div class="row">
                    <div class="col-md-6 c-valign--middle">
                        {% include 'sections/landing/dynamic-hero-elements/hero-marketo-form.html' %}
                    </div>
                    {% if ( heroValues.displayVideo == "1" ) and (heroValues.heroVideoUrl is not null) %}
                        <div class="col-md-6 c-valign--middle">
                            <div class="c-video ">
                            <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
                                <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
                                <iframe src="{{ heroValues.heroVideoUrl }}" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="100%">
                                </iframe>
                                </div>
                            </div>
                            <script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>
                            </div>
                        </div>
                    {% elseif heroValues.image|length %}
                        <div class="col-md-6 c-valign--middle c-image invert-sm-spacing c-valign--middle" style="position: relative; left: 0px;">
                        {% set image = heroValues.image.one() %}
                        
                        <img style="object-fit: initial; height: auto;" class="{{ heroValues.imageContain ? 'h-image-contain' : '' }}" src="{{ image.url }}" alt="{{ image.altText is defined and image.altText|length ? image.altText : image.title }}">
                        
                        </div>
                    {% else %}
                        <div class="col-md-6"></div>
                    {% endif %}
                    </div>
                </div>
                </section>
            {% include 'sections/landing/hero-sticky-nav.html' %}

                {% elseif heroValues.marketoSide == "right" %}
                <section id="starting-hero" class="c-hero--split landing-hero {{ backgroundColor ? backgroundColor.slug : 'hot-pink' }} {{ entry.removeNavigation ? 'h-no-nav' : '' }} {{ heroValues.specialClass|length ? heroValues.specialClass : "" }}"
                            style="{{ notFirstHero is defined and notFirstHero is not null and notFirstHero == 1 ? 'padding-top: 100px; padding-bottom: 100px; min-height: 0;' : '' }}" >
                    <div class="container">
                    <div class="row  row--no-reverse">
                        <div class="col-md-6 c-valign--middle">
                        {% include 'sections/landing/dynamic-hero-elements/hero-copy.html' %}
                        </div>
                        <div class="col-md-6 c-valign--middle">
                        {% include 'sections/landing/dynamic-hero-elements/hero-marketo-form.html' %}
                        </div>
                    </div>
                    </div>
                </section>
                {% include 'sections/landing/hero-sticky-nav.html' %}

                {% endif %}

            {% else %}
                <section id="starting-hero" class="c-hero--split landing-hero {{ backgroundColor ? backgroundColor.slug : 'hot-pink' }} {{ entry.removeNavigation ? 'h-no-nav' : '' }} {{ heroValues.specialClass|length ? heroValues.specialClass : "" }}"
                        style="{{ notFirstHero is defined and notFirstHero is not null and notFirstHero == 1 ? 'padding-top: 100px; padding-bottom: 100px; min-height: 0;' : '' }}">
                    <div class="container">
                    <div class="row row--no-reverse">
                        <!--Content side-->
                        <div class="col-md-6 c-valign--middle">
                        {% include 'sections/landing/dynamic-hero-elements/hero-copy.html' %}
                        </div>
                        {% if ( heroValues.displayVideo == "1" ) and (heroValues.heroVideoUrl is not null) %}
                            <div class="col-md-6 c-valign--middle">
                                <div class="hero-text video-header">{{ heroValues.assetText }}</div>
                                <div class="c-video ">
                                <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
                                    <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
                                    <iframe src="{{ heroValues.heroVideoUrl }}" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="100%">
                                    </iframe>
                                    </div>
                                </div>
                                <script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>
                                </div>
                            </div>
                        {% elseif heroValues.image|length %}
                            <div class="col-md-6 c-valign--middle c-image invert-sm-spacing c-valign--middle" style="position: relative; left: 0px; height: fit-content; max-height: none;">
                            {% if heroValues.assetText is defined and heroValues.assetText|length %}
                            <div class="hero-text image-header">{{ heroValues.assetText }}</div>  
                            {% endif %}
                            {% set image = heroValues.image.one() %}
                            {% set optimizedImages = image.optimizedLandingImages %}
                            <picture>
                            {% if optimizedImages.srcsetWebP() %}
                            <source srcset="{{ optimizedImages.srcsetWebP() }}" 
                                    sizes="100vw"
                                    type="image/webp" />
                            {% endif %}
                            <img src="{{ optimizedImages.src() }}"
                                srcset="{{ optimizedImages.srcset() }}"
                                sizes="100vw"
                                class="{{ heroValues.imageContain ? 'h-image-contain' : '' }}"
                                style="object-fit: initial; height: auto;width: 100%; {{ entry.slug == "email-tracking-lp" ? "max-width: unset;" : "" }} "
                                alt="{{ image.altText is defined and image.altText|length ? image.altText :  image.title }}"/>
                            </picture>
                            <!-- <img style="object-fit: initial; height: auto;width: 100%; {{ entry.slug == "email-tracking-lp" ? "max-width: unset;" : "" }} " class="{{ heroValues.imageContain ? 'h-image-contain' : '' }}" src="{{ image.url }}" alt="{{ image.altText is defined and image.altText|length ? image.altText :  image.title }}"> -->
                            </div>
                        {% else %}
                            <div class="col-md-6"></div>
                        {% endif %}
                    </div>
                    </div>
                </section>
                {% include 'sections/landing/hero-sticky-nav.html' %}
            {% endif %}
            {% endif %}

    )
        

}

export default HeroBlock;