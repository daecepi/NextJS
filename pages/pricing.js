import NavigationDefault from "../components/Navigation/NavigationDefault";

import Script from "next/script";
import Head from "next/head";
import DefaultPageBase from "../components/PageBase/DefaultPageBase";
import { getEntryBySectionHandle } from "../lib/api";

const PricingPage = ({ entry, globals }) => {
	let priceValidity = new Date(
		new Date().getTime() + 12 * 30 * 24 * 60 * 60 * 1000
	);

	let rawHtml = `
  <script src="https://cdn.jsdelivr.net/npm/vanilla-lazyload@17.4.0/dist/lazyload.min.js"></script>

    <script>
      //  // Cookie Message For EU Cookie Law
(function() {

  /**
   * Set cookie
   *
   * @param string name
   * @param string value
   * @param int days
   * @param string path
   * @see http://www.quirksmode.org/js/cookies.html
   */
  
  function createCookie(name,value,days,path) {
      if (days) {
          var date = new Date();
          date.setTime(date.getTime()+(days*24*60*60*1000));
          var expires = "; expires="+date.toGMTString();
      }
      else var expires = "";
      document.cookie = name+"="+value+expires+"; path="+path;
  }

  /**
   * Read cookie
   * @param string name
   * @returns {*}
   * @see http://www.quirksmode.org/js/cookies.html
   */
  function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
  }

  var cookieMessage = document.getElementById('cookie-message');
  if (cookieMessage == null) {
      return;
  }
  var cookie = readCookie('seen-cookie-message');
  if (cookie != null && cookie == 'yes') {
      cookieMessage.style.display = 'none';
  } else {
      cookieMessage.style.display = 'block';
  }
  
  // Set/update cookie
  var cookieExpiry = cookieMessage.getAttribute('data-cookie-expiry');
  if (cookieExpiry == null) {
      cookieExpiry = 30;
  }
  var cookiePath = cookieMessage.getAttribute('data-cookie-path');
  if (cookiePath == null) {
      cookiePath = "/";
  }
  createCookie('seen-cookie-message','yes',cookieExpiry,cookiePath);

})();

// Close EU Cookie Law
LazyLoad.js(['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'],function(){
  $('.js-kill-cookie').click(function(e) {
    e.preventDefault();
    $('#cookie-message').css('display','none');
  });
})
    </script>


        
        
            
        
            
                
    
                                

<style>
    .search-bar-container-desktop{
        height: 100%;
        display: flex;
        align-items: center;
    }
    .yxt-SearchBar{
        height: 100%;
    }

    .yxt-SearchBar-button{
         
    }
    .yxt-SearchBar-container{
        transform: translateY(23px);
    }
</style>

<script>
    /*LazyLoad.css(['https://assets.sitescdn.net/answers/v1.5/answers.css']);
    LazyLoad.js([
    'https://assets.sitescdn.net/answers/v1.5/answers.min.js',
    'https://cdn.jsdelivr.net/npm/typed.js@2.0.11',
    'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js',
    ],function(){var apiKey = "adf8d85d3ee2b2a9c35ed2695353d2d6";
    var experienceKey= "answers";
    var experienceVersion = "PRODUCTION";
    var businessId= "3335022";
    var locale = "en";
    var redirectUrl = "/search";
    var javascriptVersion = "1.7";
    var yextProductionUrl = "https://answers-embed.copper.com.pagescdn.com/";
    ANSWERS.init({
      apiKey: apiKey,
      experienceKey: experienceKey,
      businessId: businessId,
      experienceVersion: experienceVersion,
      locale: locale,
      redirectUrl: redirectUrl,
      javascriptVersion: javascriptVersion,
      production_url: yextProductionUrl,
      onReady: function() {
        this.addComponent("SearchBar", {
          container: ".search-bar-container",
          name: "faq-search",
          redirectUrl: redirectUrl,
          placeholdertext: "Search..."
        });
        this.addComponent("SearchBar", {
            container: ".search-bar-container-desktop",
            name: "faq-search-desktop",
            redirectUrl: redirectUrl,
            placeholdertext: "Search..."
          });
        // Make API Call to Options
        var url = 'https://liveapi-cached.yext.com/v2/accounts/me/answers/autocomplete';
        url += '?v=20190101';
        url += '&api_key=' + apiKey;
        url += '&sessionTrackingEnabled=false';
        url += '&experienceKey=' + experienceKey;
        url += '&input=';
        url += '&version=' + experienceVersion;
        url += '&locale=' + locale;
        axios.get(url).then(function(response) {
          // Get strings from response
          const strings = response.data.response.results.map(function(r) {
            return r.value;
          });
          // console.log("Response object", response)
          // Set up Typed
          var options = {
            strings: strings,
            showCursor: true,
            cursorChar: "|",
            typeSpeed: 45,
            backSpeed: 20,
            smartBackspace: true,
            loop: true,
            startDelay: 500,
            backDelay: 2000,
            attr: "placeholder",
          };
          var typed = new Typed(".js-yext-query", options);

          // Remove yext logo
          $('.Icon--yext_animated_forward').empty();
          $('.Icon--yext_animated_forward').append('<?xml version="1.0" encoding="UTF-8" standalone="no"?>
          <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="88px" height="88px" viewBox="0 0 88 88" enable-background="new 0 0 88 88" xml:space="preserve">  <image id="image0" width="88" height="88" x="0" y="0"
              href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
          AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAolBMVEUAAAD/NWX/MmL/M2X/
          NWf/NGX/M2X/M2T/NGX/NGb/NGT/M2P/NGT/NGb/M2X/M2X/MHD/M2b/NWX/MGj/NGb/Nmb/NGX/
          NGb/NGT/NWX/NGT/NGT/NGT/MGD/OGj/M2P/MmX/NGT/M2T/MmT/NGb/NGf/MGX/M2T/NGX/NGT/
          NGX/M2X/M2T/M2X/M2T/NGX/NWX/NGT/NGT/NWX/NGX///9ELvu0AAAANHRSTlMAMGCQn8/f77+v
          gFBAf2+fEF9vII9f73B/n8+vvxAgkGBwoHCATzCvsI/O3u6Pn/5gvs6espih8gAAAAFiS0dENd62
          2WsAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfkDBIQKBVSR2gQAAADjUlEQVRYw7WZ63qi
          MBCGUcrBQIUtlq5WqrbWPajrdjf3f20rPKgk+SYH2M5PmLxMZiYzSfA8s4zG/l0QRvwsURhPWDKy
          GGSS9D5uiKJE8XQQPPUB9CJh1pOdT2NukOBLD+x9ZMI2ZruiH6ywzujU6AQBXdh6YeaCreXeiluE
          rlw7ox+tvduV8snE/doHa+GOrC+X89kncTmffxJXQ54N45Lk3nG7CYzgw3Au549gXfTKX1lKdaUY
          11u0eJ7XslzotMLKycHRfPxSa72kaX4uJul0SapK6VzosMua5l1qadbMtlhRU0xtHZG1mvmlll4q
          DsOD4i53rbG2VckDZWgxgUOeLAyONleVVzRbhgaVldHgTpkVVG6fe0PDtiaDg4KYE7s9RzZfTSYM
          DnIqCB2w4CJ5RgsjV1J577ypSnVoG92dyb9KmgvrFjkjJScjDd6IcxEXFzDZp0O3FcbGYNhVViB8
          pCdCcSya6FUSwhcbBBb3TdK3RS6sM1tlmtBg0SbJxfJ8Gomx7yWDpcDHFuASu1gyWALbWMxH0PWZ
          NFJMyFJ6C6O/1uQ3BZZfw4rge9/AU08PliYE18EcJUVsAIsm424ZoO/5Mlh2V7eO4Epzjj/Ito0M
          VtbQjUwdVkqUK2sZDDIna/YBCX1YQWA5KbyKu4sV2LxN6gteOXM5Cp4KTp25JZqlErwevghRJ2Uq
          eO0KjlHHQzt+V5O/o7gEAKzz8hJ8lXljoFkBMiO5W++H+vAdrvV3AKZS7rxvRKfvEWxN+FgFyeEO
          1re6GYDlXlaQnCiWRSzH1wUx4byth0U8HzRYeluI4k2YfJYRWzQ3cNHCb08m8PjSXHCh/k+Z3MqL
          IcNDMiil7T0P7kwZnfuxJRcvnPaqD7aBIRdIP9u3cFvIjbc8JPe6Q0O7fQ5P8pJ0zn5d2V8ViDpg
          8gZ1kXbbUhIm6++PvB3B3Xd03rAKD1OaS16cCHtgcn+QEQmdBtSIvajHScmA1bpbVckSXYMPs6Sj
          nSe6e3ClGFSGphbFkzvG/LuJQW+vzK4o+X+QAwiJc4dHsvGAsOFcotq+DuUeqZwfSP5Fr6ZBZA23
          137Vits/gidDlzzXo175fPht4vb7XbG3672u7jgdcyuuo9Gnj9QSW8vaGn3YOGCt0acDs/VCF70w
          YT+mPbC1jF5DjbFHF9+q7OlS6Ren0+GDDaJe4Al7Xl5+H//5exzb/IX9B8n9tSU7s8AnAAAAJXRF
          WHRkYXRlOmNyZWF0ZQAyMDIwLTEyLTE4VDE2OjQwOjIxKzAwOjAwgJtOqQAAACV0RVh0ZGF0ZTpt
          b2RpZnkAMjAyMC0xMi0xOFQxNjo0MDoyMSswMDowMPHG9hUAAAAASUVORK5CYII=" />
          </svg>
          '');

          $('.Icon--yext_animated_reverse').empty();
          $('.Icon--yext_animated_reverse').append('<?xml version="1.0" encoding="UTF-8" standalone="no"?>
          <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="88px" height="88px" viewBox="0 0 88 88" enable-background="new 0 0 88 88" xml:space="preserve">  <image id="image0" width="88" height="88" x="0" y="0"
              href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
          AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAolBMVEUAAAD/NWX/MmL/M2X/
          NWf/NGX/M2X/M2T/NGX/NGb/NGT/M2P/NGT/NGb/M2X/M2X/MHD/M2b/NWX/MGj/NGb/Nmb/NGX/
          NGb/NGT/NWX/NGT/NGT/NGT/MGD/OGj/M2P/MmX/NGT/M2T/MmT/NGb/NGf/MGX/M2T/NGX/NGT/
          NGX/M2X/M2T/M2X/M2T/NGX/NWX/NGT/NGT/NWX/NGX///9ELvu0AAAANHRSTlMAMGCQn8/f77+v
          gFBAf2+fEF9vII9f73B/n8+vvxAgkGBwoHCATzCvsI/O3u6Pn/5gvs6espih8gAAAAFiS0dENd62
          2WsAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfkDBIQKBVSR2gQAAADjUlEQVRYw7WZ63qi
          MBCGUcrBQIUtlq5WqrbWPajrdjf3f20rPKgk+SYH2M5PmLxMZiYzSfA8s4zG/l0QRvwsURhPWDKy
          GGSS9D5uiKJE8XQQPPUB9CJh1pOdT2NukOBLD+x9ZMI2ZruiH6ywzujU6AQBXdh6YeaCreXeiluE
          rlw7ox+tvduV8snE/doHa+GOrC+X89kncTmffxJXQ54N45Lk3nG7CYzgw3Au549gXfTKX1lKdaUY
          11u0eJ7XslzotMLKycHRfPxSa72kaX4uJul0SapK6VzosMua5l1qadbMtlhRU0xtHZG1mvmlll4q
          DsOD4i53rbG2VckDZWgxgUOeLAyONleVVzRbhgaVldHgTpkVVG6fe0PDtiaDg4KYE7s9RzZfTSYM
          DnIqCB2w4CJ5RgsjV1J577ypSnVoG92dyb9KmgvrFjkjJScjDd6IcxEXFzDZp0O3FcbGYNhVViB8
          pCdCcSya6FUSwhcbBBb3TdK3RS6sM1tlmtBg0SbJxfJ8Gomx7yWDpcDHFuASu1gyWALbWMxH0PWZ
          NFJMyFJ6C6O/1uQ3BZZfw4rge9/AU08PliYE18EcJUVsAIsm424ZoO/5Mlh2V7eO4Epzjj/Ito0M
          VtbQjUwdVkqUK2sZDDIna/YBCX1YQWA5KbyKu4sV2LxN6gteOXM5Cp4KTp25JZqlErwevghRJ2Uq
          eO0KjlHHQzt+V5O/o7gEAKzz8hJ8lXljoFkBMiO5W++H+vAdrvV3AKZS7rxvRKfvEWxN+FgFyeEO
          1re6GYDlXlaQnCiWRSzH1wUx4byth0U8HzRYeluI4k2YfJYRWzQ3cNHCb08m8PjSXHCh/k+Z3MqL
          IcNDMiil7T0P7kwZnfuxJRcvnPaqD7aBIRdIP9u3cFvIjbc8JPe6Q0O7fQ5P8pJ0zn5d2V8ViDpg
          8gZ1kXbbUhIm6++PvB3B3Xd03rAKD1OaS16cCHtgcn+QEQmdBtSIvajHScmA1bpbVckSXYMPs6Sj
          nSe6e3ClGFSGphbFkzvG/LuJQW+vzK4o+X+QAwiJc4dHsvGAsOFcotq+DuUeqZwfSP5Fr6ZBZA23
          137Vits/gidDlzzXo175fPht4vb7XbG3672u7jgdcyuuo9Gnj9QSW8vaGn3YOGCt0acDs/VCF70w
          YT+mPbC1jF5DjbFHF9+q7OlS6Ren0+GDDaJe4Al7Xl5+H//5exzb/IX9B8n9tSU7s8AnAAAAJXRF
          WHRkYXRlOmNyZWF0ZQAyMDIwLTEyLTE4VDE2OjQwOjIxKzAwOjAwgJtOqQAAACV0RVh0ZGF0ZTpt
          b2RpZnkAMjAyMC0xMi0xOFQxNjo0MDoyMSswMDowMPHG9hUAAAAASUVORK5CYII=" />
          </svg>
          '');

        });
        
      },
    });
    })*/
</script>     
    

                <main id="content" role="main">
      
  

<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "prices",
    "itemListElement":[
      {
        "@type": "ListItem",
        "position": "1",
        "item": {
          "@type": "Product",
          "url": "https://www.copper.com/pricing#basic-plan",
          "name": "Copper Basic plan",
          "image": [
            "https://d2ydtwisqcxv72.cloudfront.net/landing/copper-logo.png"
          ],
          "description": "The recommended CRM for Google Workspace. Everything you need to manage people, companies, and opportunities, right inside your inbox.",
          "sku":"copper-basic-plan",
          "offers":{
            "@type":"Offer",
            "price":"19.00",
            "priceCurrency":"USD",
            "priceValidUntil": "2022-08-31T21:08:15-0700",
            "availability": "https://schema.org/OnlineOnly"
          }
        }
      }, 
      {
        "@type": "ListItem",
        "position": "2",
        "item": {
          "@type": "Product",
          "url": "https://www.copper.com/pricing#professional-plan",
          "name": "Copper Professional plan",
          "image": [
            "https://d2ydtwisqcxv72.cloudfront.net/landing/copper-logo.png"
          ],
          "description": "The all-in-one recommended CRM for Google Workspace. Smooth collaboration and delivery at every customer touch point.",
          "offers":{
            "@type":"Offer",
            "price":"49.00",
            "priceCurrency":"USD",
            "priceValidUntil": "2022-08-31T21:08:15-0700",
            "availability": "https://schema.org/OnlineOnly"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": "3",
        "item": {
          "@type": "Product",
          "url": "https://www.copper.com/pricing#business-plan",
          "name": "Copper Business plan",
          "image": [
            "https://d2ydtwisqcxv72.cloudfront.net/landing/copper-logo.png"
          ],
          "description": "The all-in-one recommended CRM for Google Workspace with more integrations, larger storage, and extra customization to suit the needs of larger revenue teams.",
          "offers":{
            "@type":"Offer",
            "price":"119.00",
            "priceCurrency":"USD",
            "priceValidUntil": "2022-08-31T21:08:15-0700",
            "availability": "https://schema.org/OnlineOnly"
          }
        }
      } 
    ]
  }
</script>


    

<section class="c-pricing-hero--cornflower price-hero ">
    <div class="fb-data-fetched hot-pink banner container extra-bottom-margin--x-small" style="display: none;">
      <div class="row">
        <div class="col-md-10 offset-md-1">
          <p class="content"></p>
        </div>
      </div>
    </div>
  <div id="pricing-hero-copy-headers" class="container">
              <h2>Ready to win customers for life?</h2>
            <p>Start your 14-day free trial today. No credit card required.</p>
  </div>
  <!-- <div class="c-pricing-hero__toggle">
    <div class="c-pricing-hero__checkbox">
      <span>Monthly</span>
      <label class="switch">
        <input name='pricingCheckToggle' type="checkbox" checked="checked">
        <span class="toggle-slider round"></span>
      </label>
      <span>Annual</span><span class="special pricing-special d-none d-sm-inline-block">Save up to 29%</span>
      <p class="p-xtra-sm pink-special thin d-sm-none" style="font-size:13px;">Save up to 29% with Annual</p>
    </div> -->
    <!--
      <div class="c-pricing-hero__radio">
        <label>
          <input type="radio" name="pricingToggle" checked="checked" value="annual"  />
          Billed Annually (Save 29%)
        </label>
      </div>
  
      <div class="c-pricing-hero__radio">  
        <label>
          <input type="radio" name="pricingToggle" value="monthly" />
          Billed Monthly
        </label>
      </div>
    -->
    <!-- </div> -->
    <div class="container">
      <div class="c-pricing-hero__plans-container square--top--left square--hot-pink circle--bottom--right">
                  <div class="c-pricing-hero__plans ">
            <div class="c-pricing-hero__plans__title ">
                            <h3 id="basic-plan">Basic</h3>
            </div>
            <div class="c-pricing-hero__plans__content justify-content-between">
              <div class="c-pricing-hero__billing no-top-margin">
                <p class="p-sm">Our basic plan with full Google Workspace integration is the perfect lightweight solution for you. 3-seat limit.</p>
                <div class="c-pricing-hero__annual desc js-pricingannual">
                                      <span class="strikethru-text"></span>
                                    <span>
                    $25
                                      </span>
                </div>
                <div class="c-pricing-hero__monthly desc js-pricingmonthly" style="display: none;">
                                    <span></span>
                </div>
                <div class="sub-description">
                                      <p class="c-pricing-hero__sub mb-0 mt-4">Per user, per month. Billed annually.</p> <span style="display: none;" class="c-pricing-hero__sub billed-monthly">Billed&nbsp;monthly.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <p class="c-pricing-hero__sub mt-0 no-bottom-margin">Or $29/user when billed monthly.</p> <span style="display: none;" class="c-pricing-hero__sub billed-monthly">Billed&nbsp;monthly.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <!-- <span class="special desc js-pricingannual">Or $24 per user per month up to 3 users. Billed monthly.</span> -->
                                  </div>
              </div>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
              <script>
                function heroPropertyReseter(){
                  $('#main-form').css('height','fit-content');
                  $('#main-form').css('min-height','1px');
                  $('#main-form').css('margin-top','30px');
                  $('#main-form').css('overflow','visible');
                  $('#main-form').css('display','none');
                }
                 function scrollToElements(hash){
                  document.getElementById(hash).scrollIntoView({ behavior: "smooth" });
                }
                function showSyncedHeroForm(e) {

                
               }
                LazyLoad.js(['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'],function(){
               
             })
             </script>
              <div class="c-pricing-plans__footer">
                                    <div class="c-pricing-plans__ctas">
                                                                                                                                              <a class="c-button c-button--outline  pricing-cta" target="" href="https://www.copper.com/signup" data-plan-type="Basic">Try Free</a>
                                                                                    </div>
                                
               
              </div>
            </div>
          </div>
                  <div class="c-pricing-hero__plans featured">
            <div class="c-pricing-hero__plans__title featured">
              <p class="p-sm">MOST POPULAR</p>              <h3 id="professional-plan">Professional</h3>
            </div>
            <div class="c-pricing-hero__plans__content justify-content-between">
              <div class="c-pricing-hero__billing no-top-margin">
                <p class="p-sm">This plan is ideal for growing teams looking to harness the power of CRM without the complexity.</p>
                <div class="c-pricing-hero__annual desc js-pricingannual">
                                      <span class="strikethru-text"></span>
                                    <span>
                    $59
                                      </span>
                </div>
                <div class="c-pricing-hero__monthly desc js-pricingmonthly" style="display: none;">
                                    <span></span>
                </div>
                <div class="sub-description">
                                  
                    <p class="c-pricing-hero__sub mb-0 mt-4 no-bottom-margin">Per user, per month. Billed annually.</p><span style="display: none;" class="c-pricing-hero__sub billed-monthly">Billed&nbsp;monthly.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <!-- <span class="special desc js-pricingannual">Save $240/user. Billed annually.</span> -->
                                  </div>
              </div>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
              <script>
                function heroPropertyReseter(){
                  $('#main-form').css('height','fit-content');
                  $('#main-form').css('min-height','1px');
                  $('#main-form').css('margin-top','30px');
                  $('#main-form').css('overflow','visible');
                  $('#main-form').css('display','none');
                }
                 function scrollToElements(hash){
                  document.getElementById(hash).scrollIntoView({ behavior: "smooth" });
                }
                function showSyncedHeroForm(e) {

                
               }
                LazyLoad.js(['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'],function(){
               
             })
             </script>
              <div class="c-pricing-plans__footer">
                                    <div class="c-pricing-plans__ctas">
                                                                                                                                              <a class="c-button c-button--hot-pink featured-button pricing-cta" target="" href="https://www.copper.com/signup" data-plan-type="Professional">Try Free</a>
                                                                                    </div>
                                
               
              </div>
            </div>
          </div>
                  <div class="c-pricing-hero__plans ">
            <div class="c-pricing-hero__plans__title background--indigo">
                            <h3 id="business-plan">Business</h3>
            </div>
            <div class="c-pricing-hero__plans__content  justify-content-between">
              <div class="c-pricing-hero__billing no-top-margin">
                <p class="p-sm">Already scaling? Take CRM one step further with unlimited contacts and full customization of the platform.</p>
                <div class="c-pricing-hero__annual desc js-pricingannual">
                                    <span>
                    $119
                                                                                                                            </span>
                </div>
                <div class="c-pricing-hero__monthly desc js-pricingmonthly" style="display: none;">
                                                                        <span>$119</span>
                </div>
                <div class="sub-description">
                                      <p class="c-pricing-hero__sub mb-0 mt-4">Per user, per month. Billed annually.</p>
                    <span class="special"></span>
                                  </div>
              </div>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
              <script>
                function heroPropertyReseter(){
                  $('#main-form').css('height','fit-content');
                  $('#main-form').css('min-height','1px');
                  $('#main-form').css('margin-top','30px');
                  $('#main-form').css('overflow','visible');
                  $('#main-form').css('display','none');
                }
                 function scrollToElements(hash){
                  document.getElementById(hash).scrollIntoView({ behavior: "smooth" });
                }
                function showSyncedHeroForm(e) {

                
               }
                LazyLoad.js(['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'],function(){
               
             })
             </script>
              <div class="c-pricing-plans__footer">
                                    <div class="c-pricing-plans__ctas">
                                                                                                                                              <a class="c-button c-button--outline  pricing-cta" target="" href="https://www.copper.com/signup" data-plan-type="Business">Try Free</a>
                                                                                    </div>
                                
               
              </div>
            </div>
          </div>
              </div>
    </div>
    <p class="p-xtra-sm">Prices are in USD and don't include taxes and fees where applicable.</p>
              </section>            <!-- Add the slick-theme.css if you want default styling -->
<!-- <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"/> -->
<!-- Add the slick-theme.css if you want default styling -->
<!-- <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css"/> -->
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js"></script> -->
<!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script> -->


<style>
.price-table-mobile .c-pricing-table__row--cornflower{
  position:relative;
}
.price-table-mobile .c-pricing-table__tier--cornflower.pricing-table-cat-content {
    position: absolute;
    right: 0;
    width: 50%;
    text-align: center;
}
.price-table-mobile .pricing-table-description{
  max-width:50%;
}
.price-table-mobile .slick-prev{
left  :0px;
color:gray;
z-index:99;
}
.price-table-mobile .slick-next{
right:0px;
color:gray;
}
.price-table-mobile .slick-prev:before{
  color:gray
}
.price-table-mobile .slick-next:before{
  color:gray
}


.pricing-arrow{
  position: absolute;
  top: 24%;
  bottom: unset;
  z-index: 2;
  cursor: pointer;
  opacity: 1;
}

.pricing-arrow.pricing-prev-arrow{
  left: 13px;
}
.pricing-arrow.slick-disabled{
  opacity: 0.2;
}

.pricing-arrow.pricing-forward-arrow{
  right: 13px;
}

.container.no-side-space{
  margin-right: 0px;
  margin-left: 0px;
  padding-left: 0px;
  padding-right: 0px;
}
</style>


<section class="d-none d-sm-none d-md-block c-pricing-table--cornflower  nav-added">
        <div class="c-pricing-table--cornflower__navigation js-pricing-nav" style="padding-bottom: 10px;">
      <div class="c-pricing-table__row--cornflower">
        <div class="container c-pricing-table--cornflower__navigation--container">
          <div class="c-pricing-table__info--cornflower" style="margin-right: 15px;"><p>Compare Features</p></div>
          <div class="c-pricing-table__tier--cornflower"><p>Basic</p></div>
          <div class="c-pricing-table__tier--cornflower js-truncate-string"><p>Professional</p></div>
          <div class="c-pricing-table__tier--cornflower"><p>Business</p></div>
        </div>
      </div>
    </div>
    <div class="container">
      <h4 class="include-nav"></h4>
      <div class="c-pricing-table__table--cornflower">
        <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">Users</div>
          <div class="c-pricing-table__tier--cornflower">
              <p class="p-sm" style="text-align:center;">Maximum of 3 seats</p>
          </div>
          <div class="c-pricing-table__tier--cornflower">
              <p class="p-sm" style="text-align:center;">No seat maximum</p>
          </div>
          <div class="c-pricing-table__tier--cornflower">
              <p class="p-sm" style="text-align:center;">No seat maximum</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h4 class="include-nav"></h4>
      <div class="c-pricing-table__table--cornflower">
        <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">Contacts (Leads + People)</div>
          <div class="c-pricing-table__tier--cornflower">
              <p class="p-sm" style="text-align:center;">2,500</p>
          </div>
          <div class="c-pricing-table__tier--cornflower">
              <p class="p-sm" style="text-align:center;">15,000</p>
          </div>
          <div class="c-pricing-table__tier--cornflower">
              <p class="p-sm" style="text-align:center;">Unlimited</p>
          </div>
        </div>
      </div>
    </div>
    <br>
        <div class="container">
      <h4 class="include-nav">Google Workspace Integration</h4>
      <div class="c-pricing-table__table--cornflower">
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Chrome Extension and Google Workspace Add-on
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Calendar Sync + Meeting Scheduler
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Gmail Sync
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Google Contact Sync
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Google Data Studio Integration
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                      </div>
          </div>
</section>


<section class="price-table-mobile d-block d-sm-block d-md-none c-pricing-table--cornflower  nav-added">
        <div class="floating-starting-point--pricing"></div>
    <div class="c-pricing-table--cornflower__navigation js-pricing-nav" style="padding-bottom: 0px;">
      <div class="c-pricing-table__row--cornflower united-bottom  floating-container--pricing">
        <div class="container c-pricing-table--cornflower__navigation--container" style="align-items:center">
          <div class="c-pricing-table__info--cornflower" style="max-width:50%; margin-right: 11px;"><p>Compare Features</p></div>
          <div style="display:block;max-width:50%;width:50%">
            <div class="pricing-table-nav-slider slick-initialized slick-slider"><img class="pricing-arrow pricing-prev-arrow slick-arrow slick-disabled" src="/imgs/pricing/ArrowPrev-24px.svg" alt="Prev arrow" aria-disabled="true" style=""><div class="slick-list draggable"><div class="slick-track" style="opacity: 1; width: 0px; transform: translate3d(0px, 0px, 0px);"><div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 0px;"><div><div class="c-pricing-table__tier--cornflower" style="width: 100%; display: inline-block;"><p class="text-center pricing-cat-Basic">Basic</p></div></div></div><div class="slick-slide" data-slick-index="1" aria-hidden="true" style="width: 0px;" tabindex="-1"><div><div class="c-pricing-table__tier--cornflower js-truncate-string" style="width: 100%; display: inline-block;"><p class="text-center pricing-cat-Professional">Professional</p></div></div></div><div class="slick-slide" data-slick-index="2" aria-hidden="true" style="width: 0px;" tabindex="-1"><div><div class="c-pricing-table__tier--cornflower" style="width: 100%; display: inline-block;"><p class="text-center pricing-cat-Business">Business</p></div></div></div></div></div><img class="pricing-arrow pricing-forward-arrow slick-arrow" src="/imgs/pricing/arrowForward-24px.svg" alt="Forward arrow" style="" aria-disabled="false"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container no-side-space" style="max-width: none;">
      <div class="c-pricing-table__table--cornflower">
        <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">Users</div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
              <p class="p-sm" style="text-align:center;">Maximum of 3 seats</p>
          </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
              <p class="p-sm" style="text-align:center;">No seat maximum</p>
          </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
              <p class="p-sm" style="text-align:center;">No seat maximum</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container no-side-space" style="max-width: none;">
      <div class="c-pricing-table__table--cornflower">
        <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">Contacts (Leads + People)</div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
              <p class="p-sm" style="text-align:center;">2,500</p>
          </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
              <p class="p-sm" style="text-align:center;">15,000</p>
          </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
              <p class="p-sm" style="text-align:center;">Unlimited</p>
          </div>
        </div>
      </div>
    </div>
    <br>
        <div class="container no-side-space" style="max-width: none;">
      <h4 class="include-nav">Google Workspace Integration</h4>
      <div class="c-pricing-table__table--cornflower">
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Chrome Extension and Google Workspace Add-on
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Calendar Sync + Meeting Scheduler
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Gmail Sync
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Google Contact Sync
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Google Data Studio Integration
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                      </div>
          </div>
</section>

<script>
  LazyLoad.js([
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js','https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js'],function(){
      LazyLoad.css(['https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css','https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css'])
    
    
    $('.pricing-table-nav-slider').not('.slick-initialized').slick({
      arrows:true,
      infinite:false,
      prevArrow: '<img class="pricing-arrow pricing-prev-arrow" src="/imgs/pricing/ArrowPrev-24px.svg" alt="Prev arrow">',
      nextArrow: '<img class="pricing-arrow pricing-forward-arrow" src="/imgs/pricing/arrowForward-24px.svg" alt="Forward arrow">'
    });

    $('.pricing-table-nav-slider').on('swipe', function(event, slick, direction){
      // console.log(direction);
      // left
    });
    

    $('.pricing-table-nav-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".price-table-mobile .pricing-table-cat-content").css({"transform":"scale(0)","opacity":"0","transition":"0.25s"})
    });

    $('.pricing-table-nav-slider').on('afterChange', function(event, slick, currentSlide){
      if($(".price-table-mobile .slick-active p").hasClass("pricing-cat-Basic")){
        $(".price-table-mobile .c-pricing-table__row--cornflower .basic-mobile").css("display","block");
        
        $(".price-table-mobile .basic-mobile").css({"transform":"scale(1)","opacity":"1","transition":"0.25s"})
        
      }
      if($(".price-table-mobile .slick-active p").hasClass("pricing-cat-Professional")){
        $(".professional-mobile").css("display","block");
        $(".price-table-mobile .professional-mobile").css({"transform":"scale(1)","opacity":"1","transition":"0.25s"})
        
      }
      if($(".price-table-mobile .slick-active p").hasClass("pricing-cat-Business")){
        $(".business-mobile").css("display","block");
        $(".price-table-mobile .business-mobile").css({"transform":"scale(1)","opacity":"1","transition":"0.25s"})
        
      }
      
    });  
  });
  
</script>                <!-- Add the slick-theme.css if you want default styling -->
<!-- <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"/> -->
<!-- Add the slick-theme.css if you want default styling -->
<!-- <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css"/> -->
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js"></script> -->
<!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script> -->


<style>
.price-table-mobile .c-pricing-table__row--cornflower{
  position:relative;
}
.price-table-mobile .c-pricing-table__tier--cornflower.pricing-table-cat-content {
    position: absolute;
    right: 0;
    width: 50%;
    text-align: center;
}
.price-table-mobile .pricing-table-description{
  max-width:50%;
}
.price-table-mobile .slick-prev{
left  :0px;
color:gray;
z-index:99;
}
.price-table-mobile .slick-next{
right:0px;
color:gray;
}
.price-table-mobile .slick-prev:before{
  color:gray
}
.price-table-mobile .slick-next:before{
  color:gray
}


.pricing-arrow{
  position: absolute;
  top: 24%;
  bottom: unset;
  z-index: 2;
  cursor: pointer;
  opacity: 1;
}

.pricing-arrow.pricing-prev-arrow{
  left: 13px;
}
.pricing-arrow.slick-disabled{
  opacity: 0.2;
}

.pricing-arrow.pricing-forward-arrow{
  right: 13px;
}

.container.no-side-space{
  margin-right: 0px;
  margin-left: 0px;
  padding-left: 0px;
  padding-right: 0px;
}
</style>


<section class="d-none d-sm-none d-md-block c-pricing-table--cornflower  ">
        <div class="container">
      <h4 class="no-nav">Productivity + Automation</h4>
      <div class="c-pricing-table__table--cornflower">
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Contact Enrichment
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Project Management
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Multiple Pipelines
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Team Collaboration
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Workflow Automation
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Email Sequences
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Bulk Email + Templates
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                          <p class="p-sm" style="text-align:center;">Unlimited Templates + Sends</p>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                            <p class="p-sm" style="text-align:center;">Unlimited Templates + Sends</p>
                      </div>
        </div>
                      </div>
          </div>
</section>


<section class="price-table-mobile d-block d-sm-block d-md-none c-pricing-table--cornflower  ">
        <div class="container no-side-space" style="max-width: none;">
      <h4 class="no-nav">Productivity + Automation</h4>
      <div class="c-pricing-table__table--cornflower">
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Contact Enrichment
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Project Management
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Multiple Pipelines
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Team Collaboration
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Workflow Automation
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Email Sequences
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Bulk Email + Templates
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <p class="p-sm" style="text-align:center;">Unlimited Templates + Sends</p>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <p class="p-sm" style="text-align:center;">Unlimited Templates + Sends</p>
                      </div>
        </div>
                      </div>
          </div>
</section>

<script>
  LazyLoad.js([
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js','https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js'],function(){
      LazyLoad.css(['https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css','https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css'])
    
    
    $('.pricing-table-nav-slider').not('.slick-initialized').slick({
      arrows:true,
      infinite:false,
      prevArrow: '<img class="pricing-arrow pricing-prev-arrow" src="/imgs/pricing/ArrowPrev-24px.svg" alt="Prev arrow">',
      nextArrow: '<img class="pricing-arrow pricing-forward-arrow" src="/imgs/pricing/arrowForward-24px.svg" alt="Forward arrow">'
    });

    $('.pricing-table-nav-slider').on('swipe', function(event, slick, direction){
      // console.log(direction);
      // left
    });
    

    $('.pricing-table-nav-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".price-table-mobile .pricing-table-cat-content").css({"transform":"scale(0)","opacity":"0","transition":"0.25s"})
    });

    $('.pricing-table-nav-slider').on('afterChange', function(event, slick, currentSlide){
      if($(".price-table-mobile .slick-active p").hasClass("pricing-cat-Basic")){
        $(".price-table-mobile .c-pricing-table__row--cornflower .basic-mobile").css("display","block");
        
        $(".price-table-mobile .basic-mobile").css({"transform":"scale(1)","opacity":"1","transition":"0.25s"})
        
      }
      if($(".price-table-mobile .slick-active p").hasClass("pricing-cat-Professional")){
        $(".professional-mobile").css("display","block");
        $(".price-table-mobile .professional-mobile").css({"transform":"scale(1)","opacity":"1","transition":"0.25s"})
        
      }
      if($(".price-table-mobile .slick-active p").hasClass("pricing-cat-Business")){
        $(".business-mobile").css("display","block");
        $(".price-table-mobile .business-mobile").css({"transform":"scale(1)","opacity":"1","transition":"0.25s"})
        
      }
      
    });  
  });
  
</script>                <!-- Add the slick-theme.css if you want default styling -->
<!-- <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"/> -->
<!-- Add the slick-theme.css if you want default styling -->
<!-- <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css"/> -->
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js"></script> -->
<!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script> -->


<style>
.price-table-mobile .c-pricing-table__row--cornflower{
  position:relative;
}
.price-table-mobile .c-pricing-table__tier--cornflower.pricing-table-cat-content {
    position: absolute;
    right: 0;
    width: 50%;
    text-align: center;
}
.price-table-mobile .pricing-table-description{
  max-width:50%;
}
.price-table-mobile .slick-prev{
left  :0px;
color:gray;
z-index:99;
}
.price-table-mobile .slick-next{
right:0px;
color:gray;
}
.price-table-mobile .slick-prev:before{
  color:gray
}
.price-table-mobile .slick-next:before{
  color:gray
}


.pricing-arrow{
  position: absolute;
  top: 24%;
  bottom: unset;
  z-index: 2;
  cursor: pointer;
  opacity: 1;
}

.pricing-arrow.pricing-prev-arrow{
  left: 13px;
}
.pricing-arrow.slick-disabled{
  opacity: 0.2;
}

.pricing-arrow.pricing-forward-arrow{
  right: 13px;
}

.container.no-side-space{
  margin-right: 0px;
  margin-left: 0px;
  padding-left: 0px;
  padding-right: 0px;
}
</style>


<section class="d-none d-sm-none d-md-block c-pricing-table--cornflower  ">
        <div class="container">
      <h4 class="no-nav">Integrations</h4>
      <div class="c-pricing-table__table--cornflower">
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          User Provisioning / Single Sign-On
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          DocuSign Integration
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          HubSpot Integration
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          MailChimp Integration
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          QuickBooks Integration
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Slack Integration
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Zendesk Integration
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          LinkedIn Integration*
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Wix Forms Integrations
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          WordPress Forms Integrations
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Zapier Integration
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Developer API
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Build Your Own Embedded Integrations
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                      </div>
                  <div><a target="_blank" style="display:block;padding:13px;font-size:16px" href="/integrations">Read more about our integrations</a></div>
            <p style="font-size:small;color:gray;margin-top: 0px;padding-left: 13px;">*For Professional plans, LinkedIn integration is available via <a href="http://leadjet.io">leadjet.io</a> at discounted rate.</p>
          </div>
</section>


<section class="price-table-mobile d-block d-sm-block d-md-none c-pricing-table--cornflower  ">
        <div class="container no-side-space" style="max-width: none;">
      <h4 class="no-nav">Integrations</h4>
      <div class="c-pricing-table__table--cornflower">
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          User Provisioning / Single Sign-On
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          DocuSign Integration
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          HubSpot Integration
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          MailChimp Integration
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          QuickBooks Integration
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Slack Integration
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Zendesk Integration
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          LinkedIn Integration*
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Wix Forms Integrations
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          WordPress Forms Integrations
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Zapier Integration
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Developer API
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Build Your Own Embedded Integrations
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                      </div>
                  <div><a target="_blank" style="display:block;padding:13px;font-size:16px" href="/integrations">Read more about our integrations</a></div>
            <p style="font-size:small;color:gray;margin-top: 0px;padding-left: 13px;">*For Professional plans, LinkedIn integration is available via <a href="http://leadjet.io">leadjet.io</a> at discounted rate.</p>
          </div>
</section>

<script>
  LazyLoad.js([
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js','https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js'],function(){
      LazyLoad.css(['https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css','https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css'])
    
    
    $('.pricing-table-nav-slider').not('.slick-initialized').slick({
      arrows:true,
      infinite:false,
      prevArrow: '<img class="pricing-arrow pricing-prev-arrow" src="/imgs/pricing/ArrowPrev-24px.svg" alt="Prev arrow">',
      nextArrow: '<img class="pricing-arrow pricing-forward-arrow" src="/imgs/pricing/arrowForward-24px.svg" alt="Forward arrow">'
    });

    $('.pricing-table-nav-slider').on('swipe', function(event, slick, direction){
      // console.log(direction);
      // left
    });
    

    $('.pricing-table-nav-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".price-table-mobile .pricing-table-cat-content").css({"transform":"scale(0)","opacity":"0","transition":"0.25s"})
    });

    $('.pricing-table-nav-slider').on('afterChange', function(event, slick, currentSlide){
      if($(".price-table-mobile .slick-active p").hasClass("pricing-cat-Basic")){
        $(".price-table-mobile .c-pricing-table__row--cornflower .basic-mobile").css("display","block");
        
        $(".price-table-mobile .basic-mobile").css({"transform":"scale(1)","opacity":"1","transition":"0.25s"})
        
      }
      if($(".price-table-mobile .slick-active p").hasClass("pricing-cat-Professional")){
        $(".professional-mobile").css("display","block");
        $(".price-table-mobile .professional-mobile").css({"transform":"scale(1)","opacity":"1","transition":"0.25s"})
        
      }
      if($(".price-table-mobile .slick-active p").hasClass("pricing-cat-Business")){
        $(".business-mobile").css("display","block");
        $(".price-table-mobile .business-mobile").css({"transform":"scale(1)","opacity":"1","transition":"0.25s"})
        
      }
      
    });  
  });
  
</script>                <!-- Add the slick-theme.css if you want default styling -->
<!-- <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"/> -->
<!-- Add the slick-theme.css if you want default styling -->
<!-- <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css"/> -->
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js"></script> -->
<!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script> -->


<style>
.price-table-mobile .c-pricing-table__row--cornflower{
  position:relative;
}
.price-table-mobile .c-pricing-table__tier--cornflower.pricing-table-cat-content {
    position: absolute;
    right: 0;
    width: 50%;
    text-align: center;
}
.price-table-mobile .pricing-table-description{
  max-width:50%;
}
.price-table-mobile .slick-prev{
left  :0px;
color:gray;
z-index:99;
}
.price-table-mobile .slick-next{
right:0px;
color:gray;
}
.price-table-mobile .slick-prev:before{
  color:gray
}
.price-table-mobile .slick-next:before{
  color:gray
}


.pricing-arrow{
  position: absolute;
  top: 24%;
  bottom: unset;
  z-index: 2;
  cursor: pointer;
  opacity: 1;
}

.pricing-arrow.pricing-prev-arrow{
  left: 13px;
}
.pricing-arrow.slick-disabled{
  opacity: 0.2;
}

.pricing-arrow.pricing-forward-arrow{
  right: 13px;
}

.container.no-side-space{
  margin-right: 0px;
  margin-left: 0px;
  padding-left: 0px;
  padding-right: 0px;
}
</style>


<section class="d-none d-sm-none d-md-block c-pricing-table--cornflower  ">
        <div class="container">
      <h4 class="no-nav">Reporting</h4>
      <div class="c-pricing-table__table--cornflower">
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Legacy Reports
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Report Templates
                         <span class="tag--new page-content-context">New</span>           </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Custom Dashboards &amp; Reports
                         <span class="tag--new page-content-context">New</span>           </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Cross-Record Reporting
                         <span class="tag--new page-content-context">New</span>           </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Report Sharing
                         <span class="tag--new page-content-context">New</span>           </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Activity Reporting
                         <span class="tag--new page-content-context">New</span>           </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Lead &amp; Sales Insights
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Leaderboard
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Goal Tracking
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                      </div>
          </div>
</section>


<section class="price-table-mobile d-block d-sm-block d-md-none c-pricing-table--cornflower  ">
        <div class="container no-side-space" style="max-width: none;">
      <h4 class="no-nav">Reporting</h4>
      <div class="c-pricing-table__table--cornflower">
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Legacy Reports
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Report Templates
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Custom Dashboards &amp; Reports
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Cross-Record Reporting
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Report Sharing
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Activity Reporting
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Lead &amp; Sales Insights
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Leaderboard
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Goal Tracking
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                      </div>
          </div>
</section>

<script>
  LazyLoad.js([
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js','https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js'],function(){
      LazyLoad.css(['https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css','https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css'])
    
    
    $('.pricing-table-nav-slider').not('.slick-initialized').slick({
      arrows:true,
      infinite:false,
      prevArrow: '<img class="pricing-arrow pricing-prev-arrow" src="/imgs/pricing/ArrowPrev-24px.svg" alt="Prev arrow">',
      nextArrow: '<img class="pricing-arrow pricing-forward-arrow" src="/imgs/pricing/arrowForward-24px.svg" alt="Forward arrow">'
    });

    $('.pricing-table-nav-slider').on('swipe', function(event, slick, direction){
      // console.log(direction);
      // left
    });
    

    $('.pricing-table-nav-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".price-table-mobile .pricing-table-cat-content").css({"transform":"scale(0)","opacity":"0","transition":"0.25s"})
    });

    $('.pricing-table-nav-slider').on('afterChange', function(event, slick, currentSlide){
      if($(".price-table-mobile .slick-active p").hasClass("pricing-cat-Basic")){
        $(".price-table-mobile .c-pricing-table__row--cornflower .basic-mobile").css("display","block");
        
        $(".price-table-mobile .basic-mobile").css({"transform":"scale(1)","opacity":"1","transition":"0.25s"})
        
      }
      if($(".price-table-mobile .slick-active p").hasClass("pricing-cat-Professional")){
        $(".professional-mobile").css("display","block");
        $(".price-table-mobile .professional-mobile").css({"transform":"scale(1)","opacity":"1","transition":"0.25s"})
        
      }
      if($(".price-table-mobile .slick-active p").hasClass("pricing-cat-Business")){
        $(".business-mobile").css("display","block");
        $(".price-table-mobile .business-mobile").css({"transform":"scale(1)","opacity":"1","transition":"0.25s"})
        
      }
      
    });  
  });
  
</script>             
    <!-- Add the slick-theme.css if you want default styling -->
<!-- <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"/> -->
<!-- Add the slick-theme.css if you want default styling -->
<!-- <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css"/> -->
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js"></script> -->
<!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script> -->


<style>
.price-table-mobile .c-pricing-table__row--cornflower{
  position:relative;
}
.price-table-mobile .c-pricing-table__tier--cornflower.pricing-table-cat-content {
    position: absolute;
    right: 0;
    width: 50%;
    text-align: center;
}
.price-table-mobile .pricing-table-description{
  max-width:50%;
}
.price-table-mobile .slick-prev{
left  :0px;
color:gray;
z-index:99;
}
.price-table-mobile .slick-next{
right:0px;
color:gray;
}
.price-table-mobile .slick-prev:before{
  color:gray
}
.price-table-mobile .slick-next:before{
  color:gray
}


.pricing-arrow{
  position: absolute;
  top: 24%;
  bottom: unset;
  z-index: 2;
  cursor: pointer;
  opacity: 1;
}

.pricing-arrow.pricing-prev-arrow{
  left: 13px;
}
.pricing-arrow.slick-disabled{
  opacity: 0.2;
}

.pricing-arrow.pricing-forward-arrow{
  right: 13px;
}

.container.no-side-space{
  margin-right: 0px;
  margin-left: 0px;
  padding-left: 0px;
  padding-right: 0px;
}
</style>


<section class="d-none d-sm-none d-md-block c-pricing-table--cornflower last-instance ">
        <div class="container">
      <h4 class="no-nav">Account Configuration</h4>
      <div class="c-pricing-table__table--cornflower">
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Custom Fields
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <p class="p-sm" style="text-align:center;">10</p>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                          <p class="p-sm" style="text-align:center;">Unlimited</p>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                            <p class="p-sm" style="text-align:center;">Unlimited</p>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Field Configuration
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Multi-Currency
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower sm">
                          Team Permissions
                                  </div>
          <div class="c-pricing-table__tier--cornflower">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower">
                                          <i class="notranslate material-icons done">done</i>
                                    </div>
          <div class="c-pricing-table__tier--cornflower">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                      </div>
          </div>
</section>


<section class="price-table-mobile d-block d-sm-block d-md-none c-pricing-table--cornflower last-instance ">
        <div class="container no-side-space" style="max-width: none;">
      <h4 class="no-nav">Account Configuration</h4>
      <div class="c-pricing-table__table--cornflower">
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Custom Fields
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <p class="p-sm" style="text-align:center;">10</p>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <p class="p-sm" style="text-align:center;">Unlimited</p>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <p class="p-sm" style="text-align:center;">Unlimited</p>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Field Configuration
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Multi-Currency
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                <div class="c-pricing-table__row--cornflower">
          <div class="c-pricing-table__info--cornflower pricing-table-description sm">
                          Team Permissions
                      </div>
          <p>*</p>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content basic-mobile" style="flex:3">
                          <i class="notranslate material-icons close">close</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content professional-mobile" style="flex:3;transform:scale(0);opacity:0">
                          <i class="notranslate material-icons done">done</i>
                      </div>
          <div class="c-pricing-table__tier--cornflower pricing-table-cat-content business-mobile " style="flex:3;transform:scale(0);opacity:0">
                            <i class="notranslate material-icons done">done</i>
                      </div>
        </div>
                      </div>
          </div>
</section>

<script>
  LazyLoad.js([
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js','https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js'],function(){
      LazyLoad.css(['https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css','https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css'])
    
    
    $('.pricing-table-nav-slider').not('.slick-initialized').slick({
      arrows:true,
      infinite:false,
      prevArrow: '<img class="pricing-arrow pricing-prev-arrow" src="/imgs/pricing/ArrowPrev-24px.svg" alt="Prev arrow">',
      nextArrow: '<img class="pricing-arrow pricing-forward-arrow" src="/imgs/pricing/arrowForward-24px.svg" alt="Forward arrow">'
    });

    $('.pricing-table-nav-slider').on('swipe', function(event, slick, direction){
      // console.log(direction);
      // left
    });
    

    $('.pricing-table-nav-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".price-table-mobile .pricing-table-cat-content").css({"transform":"scale(0)","opacity":"0","transition":"0.25s"})
    });

    $('.pricing-table-nav-slider').on('afterChange', function(event, slick, currentSlide){
      if($(".price-table-mobile .slick-active p").hasClass("pricing-cat-Basic")){
        $(".price-table-mobile .c-pricing-table__row--cornflower .basic-mobile").css("display","block");
        
        $(".price-table-mobile .basic-mobile").css({"transform":"scale(1)","opacity":"1","transition":"0.25s"})
        
      }
      if($(".price-table-mobile .slick-active p").hasClass("pricing-cat-Professional")){
        $(".professional-mobile").css("display","block");
        $(".price-table-mobile .professional-mobile").css({"transform":"scale(1)","opacity":"1","transition":"0.25s"})
        
      }
      if($(".price-table-mobile .slick-active p").hasClass("pricing-cat-Business")){
        $(".business-mobile").css("display","block");
        $(".price-table-mobile .business-mobile").css({"transform":"scale(1)","opacity":"1","transition":"0.25s"})
        
      }
      
    });  
  });
  
</script>    <div class="floating-ending-point--pricing"></div>

    <script>
      // Scrolling logic
      window.addEventListener('scroll', function (e){
        // Positions
        var startingFloatingEl = $('.floating-starting-point--pricing').first().offset().top;
        var endingFloatingEl = $('.floating-ending-point--pricing').first().offset().top;
        var scrollTop = $(window).scrollTop();
        
        if( endingFloatingEl < scrollTop + 90 ){
          $('.floating-container--pricing').removeClass('floating-active');
        }else if( startingFloatingEl < scrollTop ){
          $('.floating-container--pricing').addClass('floating-active');
        }else{
          $('.floating-container--pricing').removeClass('floating-active');
        }
      });
    </script>
              
<section class="c-press-articles">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div class="col-md-7 offset-md-1">

                <div class="extra-bottom-margin--x-small">
          <h3>Can I try different plans on my trial?</h3>
          <p>During your free trial you will be on the Business plan so you can experience the full capabilities of Copper.</p>
        </div>
                <div class="extra-bottom-margin--x-small">
          <h3>How many seats can I add during my trial?</h3>
          <p>There is no limit to the number of seats you can add during your trial. Once you purchase Copper the seats will be limited based on the plan you choose.</p>
        </div>
                <div class="extra-bottom-margin--x-small">
          <h3>What tools integrate with Copper?</h3>
          <p>Copper has native integrations with a variety of common business apps and offers a way to integrate with thousands more via Zapier, Tray.io and an Open API. To learn more about our integrations <a href="https://www.copper.com/integrations">visit this page.</a></p>
        </div>
                <div class="extra-bottom-margin--x-small">
          <h3>How many seats can I add if I use the Basic plan?</h3>
          <p>The Basic plan is limited to three seats. If you need more seats, you need to purchase the Professional plan. The basic plan was built for businesses who are moving off of spreadsheets or trying their first CRM.</p>
        </div>
        
      </div>
    </div>

  </div>
</section>  
<section id="" class="c-cols c-cols pricing-style hot-pink">
  <div style="
    position: absolute;
    top: 0px;
    left: 0px;
    width: 50%;
    height: 100%;
"><div class="disappear-mobile" style="
    width: 100%;
    position: relative;
    height: 100%;
">
    <picture>
      <source type="image/webp" srcSet="/imgs/pricing/Pricing_CTA-image-dots@2x.webp" alt="Bubbles graphic">
      <source type="image/png" srcSet="/imgs/pricing/Pricing_CTA-image-dots@2x.png" alt="Bubbles graphic">
      <img class="drop-right__img h-remove-shadow bubbles-raw" style="
      max-width: auto;
      height: 135%;
      position: absolute;
      z-index: 2;
      left: 50%;
      top: 50%;
      width: auto;
      right: 0px;
      transform: translateX(-50%) translateY(-50%);
      " src="/imgs/pricing/Pricing_CTA-image-dots@2x.png" alt="Bubbles graphic">
    </picture>
    <picture>
      <source type="image/webp" srcSet="https://copper.objects.frb.io/imgs/pricing/Pricing_CTA-image-bubbles@2x-migration-2.webp" alt="Bubbles graphic">
      <source type="image/png" srcSet="https://copper.objects.frb.io/imgs/pricing/Pricing_CTA-image-bubbles@2x-migration-2.png" alt="Bubbles graphic">
      <img class="drop-right__img h-remove-shadow bubbles-user" style="
      max-width: 650px;
      height: auto;
      position: absolute;
      z-index: 2;
      left: 50%;
      top: 50%;
      width: 100%;
      transform: translateX(-50%) translateY(-50%);
      min-width: 200px;
      " src="https://copper.objects.frb.io/imgs/pricing/Pricing_CTA-image-bubbles@2x-migration-2.png" alt="Bubbles graphic">
    </picture>
    </div></div>
  <div class="container c-animation-container" style="position: static;">
    <h2 class="extra-bottom-margin--x-small" style="text-align: center;"></h2>
    <div class="row column-reverse" style="position: static;">
    <div class="col-md-6 d-flex align-items-center order-1 " style="position: static;">
      <div class="c-image c-image--extended-left c-image--shadow h-remove-shadow" style="position: static;">
        <div class="appear-mobile" style="
        width: 100%;
        height: auto;
        position: relative;
        z-index: 2;
        bottom: unset;
        left: 0px;
        right: 0px;
        margin-left: 0px;">
          <picture>
            <source type="image/webp" srcSet="https://copper.objects.frb.io/imgs/pricing/pricing_cta-image-mobile@2x-migration-2.webp" alt="Bubbles graphic">
            <source type="image/png" srcSet="https://copper.objects.frb.io/imgs/pricing/pricing_cta-image-mobile@2x-migration-2.png" alt="Bubbles graphic">
            <img class="drop-right__img h-remove-shadow" src="https://copper.objects.frb.io/imgs/pricing/pricing_cta-image-mobile@2x-migration-2.png" alt="Bubbles graphic">
          </picture>
        </div>
      </div>
    </div>
    <div class="col-md-6 c-valign--middle order-2">
      <h2>Try Copper for free</h2>
      <p>14-day trial. Instant activation, no credit card required. Give the Copper software solution a try today.<br></p>
      <div class="c-hero__buttons">
          <a class="c-button sendUTMsToAmplitude c-button--white  section-background-flavor" style="color: black; justify-content: center;" href="https://www.copper.com/signup">Try free</a>
          <a class="c-button c-button--outline  section-background-flavor " href="/demos" style="justify-content: center;">Request demo</a>
      </div>                     
    </div>
    </div>
  </div>
</section>
    
    </main>

                    <footer class="c-footer footer-about">
    <div class="container 
    ">
        <div class="footer-and-social-div">
            <div class="footer__links__container">
              <div class="footer__links">
                  <ul>
                      <img src="/imgs/copper_logo-white-sharp.svg" alt="Copper logo white sharp" style="margin-top: 19px; margin-bottom: 10px;">
                      <li><a href="/about">Company</a></li>
                      <li><a href="/about#leadership">Team</a></li>
                      <li><a href="/about#careers">Careers</a></li>
                      <li><a href="/press">Press Kit</a></li>
                      <li><a href="/contact">Contact Us</a></li>
                      <li><a href="https://support.copper.com/hc/en-us/requests/new" target="_blank">Support Request</a></li>
                      <li><a href="/demos">Talk to Sales</a></li>
                      <li><a href="/partners">Become a Partner!</a></li>
                  </ul>
              </div>
                <div class="footer__links">
                    <ul>
                        <span class="footer__title">Why Copper</span>
                        <li><a href="/contact-management-software">Organize Contacts</a></li>
                        <li><a href="/features/lead-tracking">Track Leads &amp; Deals</a></li>
                        <li><a href="/project-management-crm">Manage Projects</a></li>
                        <li><a href="/features/pipeline-management">Build Pipelines</a></li>
                        <li><a href="/features/email-tracking">Track Emails &amp; Tasks</a></li>
                        <li><a href="/sales-reporting">Reporting &amp; Insights</a></li>
                        <li><a href="/mobile-crm">Mobile CRM</a></li>
                        <li><a href="/features">See All Features</a></li>
                        <li><a href="/pricing">Pricing</a></li>
                    </ul>
                </div>
                <div class="footer__links">
                    <ul>
                        <span class="footer__title">Solutions</span>
                        <li><a href="/industries/agency-crm">Agency CRM</a></li>
                        <li><a href="/industries/software-technology-crm">Technology CRM</a></li>
                        <li><a href="/industries/consulting-crm">Consulting CRM </a></li>
                        <li><a href="/industries/real-estate-crm">Real Estate CRM</a></li>
                        <li><a href="/small-business-crm">Small Businesses</a></li>
                        <li><a href="/mid-market-crm">Mid-Market</a></li>
                        <li><a href="/enterprise-crm">Enterprise</a></li>
                    </ul>
                </div>
                <div class="footer__links">
                    <ul>
                        <span style="min-width:155px" class="footer__title">CRM for Google Workspace</span>
                        <li><a href="/g-suite-crm">Google Workspace CRM </a></li>
                        <li><a href="/gmail-crm">Gmail CRM</a></li>
                        <li><a href="/google-sheets-crm">Google Sheets CRM</a></li>
                        <li><a href="https://workspace.google.com/partner/recommended/">Official Google Workspace Partner</a></li>
                        <li><a href="https://chrome.google.com/webstore/detail/copper-crm-for-gmail/hpfmedbkgaakgagknibnonpkimkibkla?hl=en">Chrome Store App</a></li>
                        <li><a href="https://play.google.com/store/apps/details?id=com.prosperworks.android&amp;hl=en_US">Android Mobile App</a></li>
                    </ul>
                </div>
                <div class="footer__links">
                    <ul>
                        <span class="footer__title">Integrations</span>
                        <li><a href="/integrations/slack-crm">Slack</a></li>
                        <li><a href="/integrations/zendesk-crm">Zendesk</a></li>
                        <li><a href="/integrations/hubspot-crm">HubSpot</a></li>
                        <li><a href="/integrations/quickbooks-crm">QuickBooks</a></li>
                        <li><a href="/integrations/xero-crm">Xero</a></li>
                        <li><a href="/integrations/docusign-crm">Docusign</a></li>
                        <li><a href="/integrations">See all integrations</a></li>
                    </ul>
                </div>
                <div class="footer__links">
                    <ul>
                        <span class="footer__title">Learn</span>
                        <li><a href="/resources">Blog</a></li>
                        <li><a href="/webinars">Webinars</a></li>
                        <li><a href="https://support.copper.com">Help Center</a></li>
                        <li><a href="/resources">Business Tools</a></li>
                        <li><a href="https://support.copper.com/hc/en-us/community/topics">Community</a></li>
                    </ul>
                </div>
            </div>
            <div class="c-footer__legal">
                <div class="c-footer__container">
                    <div class="legal-info disappear-mobile">
                          <address style="font-size: 20px;line-height: 30px; margin-right:auto;">301 Howard St. #600 <br>
                              San Francisco, CA 94105</address>
                          <span style="flex-basis: unset; margin-right: 51px;margin-top: auto;" class="copyright">Copper CRM, Inc. © 2021</span>
                          <a style="flex-basis: unset; margin-right: 51px;margin-top: auto;margin-bottom: 20px;" href="/privacy">Privacy</a>
                          <a style="flex-basis: unset; margin-right: 51px;margin-top: auto;margin-bottom: 20px;" href="/terms">Terms</a>
                          <div style="margin-top: auto;margin-bottom: 3px;" class="show-social d-none d-sm-none d-md-block">
                              <div class="footer__social">
    <a href="https://www.facebook.com/CopperInc/" class="fb">
        <!--?xml version="1.0" encoding="UTF-8"?-->
        <svg width="8px" height="15px" viewBox="0 0 8 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 57.1 (83088) - https://sketch.com -->
            <title>social_facebook</title>
            <desc>Created with Sketch.</desc>
            <g id="design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="190813_footer-desktop" transform="translate(-980.000000, -710.000000)" fill="">
                    <path d="M985.041615,725 L985.041615,718.167165 L987.347659,718.167165 L987.69189,715.49252 L985.041615,715.49252 L985.041615,713.789642 C985.041615,713.015883 985.257902,712.491921 986.366752,712.491921 L987.783279,712.491921 L987.783279,710.103627 C987.100157,710.033023 986.41379,709.998451 985.727031,710 C983.689061,710 982.299951,711.242941 982.299951,713.524614 L982.299951,715.49252 L980,715.49252 L980,718.167165 L982.299951,718.167165 L982.299951,725 L985.041615,725 Z" id="social_facebook"></path>
                </g>
            </g>
        </svg>
    </a>
    <a href="https://twitter.com/CopperInc" class="tw">
        <!--?xml version="1.0" encoding="UTF-8"?-->
        <svg width="18px" height="15px" viewBox="0 0 18 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="190813_footer-desktop" transform="translate(-1003.000000, -710.000000)" fill="">
                    <path d="M1008.66064,724.626058 C1015.45312,724.626058 1019.16832,718.998538 1019.16832,714.118378 C1019.16832,713.958538 1019.16832,713.799418 1019.15752,713.641018 C1019.88028,713.118234 1020.50418,712.470931 1021,711.729418 C1020.32599,712.028075 1019.611,712.223934 1018.87888,712.310458 C1019.64982,711.848925 1020.22681,711.123014 1020.50248,710.267818 C1019.77755,710.697986 1018.98447,711.001146 1018.15744,711.164218 C1017.0127,709.946982 1015.19372,709.649059 1013.72048,710.437507 C1012.24723,711.225956 1011.48612,712.904692 1011.86392,714.532378 C1008.89456,714.383517 1006.12802,712.98101 1004.2528,710.673898 C1003.27261,712.361322 1003.77327,714.520037 1005.39616,715.603738 C1004.80845,715.586319 1004.23356,715.427779 1003.72,715.141498 C1003.72,715.156618 1003.72,715.172458 1003.72,715.188298 C1003.72048,716.946245 1004.95966,718.460363 1006.6828,718.808458 C1006.13911,718.956735 1005.56866,718.97841 1005.01528,718.871818 C1005.49908,720.376202 1006.88553,721.406782 1008.46552,721.436458 C1007.15781,722.464209 1005.54236,723.022134 1003.87912,723.020458 C1003.58529,723.019894 1003.29175,723.002103 1003,722.967178 C1004.68886,724.050977 1006.65394,724.625854 1008.66064,724.623178" id="social_twitter"></path>
                </g>
            </g>
        </svg>
    </a>
    <a href="https://www.linkedin.com/company/copper-inc/" class="li">
        <!--?xml version="1.0" encoding="UTF-8"?-->
        <svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 57.1 (83088) - https://sketch.com -->
            <title>social_linkedin</title>
            <desc>Created with Sketch.</desc>
            <g id="design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="190813_footer-desktop" transform="translate(-1034.000000, -710.000000)" fill="">
                    <path d="M1046.78244,722.782022 L1044.55779,722.782022 L1044.55779,719.300675 C1044.55779,718.470652 1044.54363,717.402706 1043.40193,717.402706 C1042.24398,717.402706 1042.06731,718.307314 1042.06731,719.241507 L1042.06731,722.782022 L1039.84516,722.782022 L1039.84516,715.62349 L1041.97772,715.62349 L1041.97772,716.602267 L1042.00856,716.602267 C1042.30523,716.039334 1043.03108,715.445985 1044.1132,715.445985 C1046.36618,715.445985 1046.78244,716.928109 1046.78244,718.856079 L1046.78244,722.782022 Z M1037.33676,714.645546 C1036.62216,714.645546 1036.04589,714.067613 1036.04589,713.355093 C1036.04589,712.64299 1036.62216,712.065057 1037.33676,712.065057 C1038.04845,712.065057 1038.62596,712.64299 1038.62596,713.355093 C1038.62596,714.067613 1038.04845,714.645546 1037.33676,714.645546 Z M1036.22256,722.782022 L1038.44971,722.782022 L1038.44971,715.62349 L1036.22256,715.62349 L1036.22256,722.782022 Z M1047.89039,710 L1035.10628,710 C1034.49585,710 1034,710.48418 1034,711.081697 L1034,723.917887 C1034,724.515403 1034.49585,725.000417 1035.10628,725.000417 L1047.89039,725.000417 C1048.50207,725.000417 1049,724.515403 1049,723.917887 L1049,711.081697 C1049,710.48418 1048.50207,710 1047.89039,710 L1047.89039,710 Z" id="social_linkedin"></path>
                </g>
            </g>
        </svg>
    </a>
    <a href="https://www.instagram.com/copperinc" class="ig">
        <!--?xml version="1.0" encoding="UTF-8"?-->
        <svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 57.1 (83088) - https://sketch.com -->
            <title>social_instagram</title>
            <desc>Created with Sketch.</desc>
            <g id="design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="190813_footer-desktop" transform="translate(-950.000000, -710.000000)" fill="#FFFFFF">
                    <path d="M956.5867,710.000885 L958.413317,710.000885 C959.642185,710.003846 959.931408,710.014981 960.59224,710.045133 C961.390528,710.081544 961.93573,710.20834 962.412785,710.393755 C962.905976,710.585393 963.324233,710.841843 963.74121,711.25879 C964.158157,711.675767 964.414607,712.094024 964.606275,712.587215 C964.79166,713.06427 964.918456,713.609472 964.954867,714.40776 C964.991366,715.207714 965,715.463122 965,717.500015 C965,719.536878 964.991366,719.792286 964.954867,720.59224 C964.918456,721.390528 964.79166,721.93573 964.606275,722.412785 C964.414607,722.905976 964.158157,723.324233 963.74121,723.74121 C963.324233,724.158157 962.905976,724.414607 962.412785,724.606275 C961.93573,724.79166 961.390528,724.918456 960.59224,724.954867 C959.792286,724.991366 959.536878,725 957.500015,725 C955.463122,725 955.207714,724.991366 954.40776,724.954867 C953.609472,724.918456 953.06427,724.79166 952.587215,724.606275 C952.094024,724.414607 951.675767,724.158157 951.25879,723.74121 C950.841843,723.324233 950.585393,722.905976 950.393755,722.412785 C950.20834,721.93573 950.081544,721.390528 950.045133,720.59224 C950.014981,719.931408 950.003846,719.642185 950.000885,718.413317 L950.000885,716.5867 C950.003846,715.357815 950.014981,715.068592 950.045133,714.40776 C950.081544,713.609472 950.20834,713.06427 950.393755,712.587215 C950.585393,712.094024 950.841843,711.675767 951.25879,711.25879 C951.675767,710.841843 952.094024,710.585393 952.587215,710.393755 C953.06427,710.20834 953.609472,710.081544 954.40776,710.045133 C955.068592,710.014981 955.357815,710.003846 956.5867,710.000885 L958.413317,710.000885 Z M958.198671,711.351786 L956.801349,711.351786 C955.426117,711.353829 955.157047,711.363707 954.469356,711.395083 C953.738114,711.428427 953.340994,711.550608 953.076715,711.653319 C952.726634,711.789374 952.476793,711.951896 952.214359,712.214359 C951.951896,712.476793 951.789374,712.726634 951.653319,713.076715 C951.550608,713.340994 951.428427,713.738114 951.395083,714.469356 C951.363707,715.157047 951.353829,715.426117 951.351786,716.801349 L951.351786,718.198671 C951.353829,719.573883 951.363707,719.842953 951.395083,720.530644 C951.428427,721.261886 951.550608,721.659006 951.653319,721.923285 C951.789374,722.273366 951.951925,722.523207 952.214359,722.785641 C952.476793,723.048104 952.726634,723.210626 953.076715,723.346681 C953.340994,723.449392 953.738114,723.571573 954.469356,723.604917 C955.15697,723.636293 955.425984,723.646171 956.801301,723.648214 L958.19872,723.648214 C959.574023,723.646171 959.843056,723.636293 960.530644,723.604917 C961.261886,723.571573 961.659006,723.449392 961.923285,723.346681 C962.273366,723.210626 962.523207,723.048104 962.785641,722.785641 C963.048104,722.523207 963.210626,722.273366 963.346681,721.923285 C963.449392,721.659006 963.571573,721.261886 963.604917,720.530644 C963.636293,719.842953 963.646171,719.573883 963.648214,718.198671 L963.648214,716.801349 C963.646171,715.426117 963.636293,715.157047 963.604917,714.469356 C963.571573,713.738114 963.449392,713.340994 963.346681,713.076715 C963.210626,712.726634 963.048104,712.476793 962.785641,712.214359 C962.523207,711.951896 962.273366,711.789374 961.923285,711.653319 C961.659006,711.550608 961.261886,711.428427 960.530644,711.395083 C959.842953,711.363707 959.573883,711.353829 958.198671,711.351786 Z M957.500015,713.648651 C959.627055,713.648651 961.351349,715.372945 961.351349,717.500015 C961.351349,719.627055 959.627055,721.351349 957.500015,721.351349 C955.372945,721.351349 953.648651,719.627055 953.648651,717.500015 C953.648651,715.372945 955.372945,713.648651 957.500015,713.648651 Z M957.500015,715 C956.119282,715 955,716.119282 955,717.500015 C955,718.880718 956.119282,720 957.500015,720 C958.880718,720 960,718.880718 960,717.500015 C960,716.119282 958.880718,715 957.500015,715 Z M961.50351,712.596474 C962.000572,712.596474 962.403526,712.999428 962.403526,713.49649 C962.403526,713.993552 962.000572,714.396476 961.50351,714.396476 C961.006478,714.396476 960.603524,713.993552 960.603524,713.49649 C960.603524,712.999428 961.006478,712.596474 961.50351,712.596474 Z" id="social_instagram"></path>
                </g>
            </g>
        </svg>
    </a>
    <a href="https://www.youtube.com/c/CopperInc" class="yt">
        <!--?xml version="1.0" encoding="UTF-8"?-->
        <svg width="21px" height="15px" viewBox="0 0 21 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 57.1 (83088) - https://sketch.com -->
            <title>social_youtube</title>
            <desc>Created with Sketch.</desc>
            <g id="design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="190813_footer-desktop" transform="translate(-915.000000, -710.000000)" fill="#FFFFFF" fill-rule="nonzero">
                    <path d="M933.625623,710.442849 C934.525352,710.686512 935.233844,711.404593 935.474484,712.316105 C935.883167,713.861937 935.909534,716.978883 935.911235,717.374635 L935.911235,717.457923 C935.909534,717.853675 935.883167,720.970621 935.474484,722.516454 C935.233844,723.427965 934.525352,724.146047 933.625623,724.389709 C932.146552,724.791363 926.629722,724.828726 925.616134,724.832202 L925.29505,724.832202 C924.281489,724.828726 918.7648,724.791363 917.28573,724.389709 C916.386,724.146047 915.677508,723.427965 915.437041,722.516454 C915.056392,721.07723 915.007276,718.276126 915.000939,717.577223 L915.000939,717.255335 C915.007276,716.556432 915.056392,713.755328 915.437041,712.316105 C915.677508,711.404593 916.386,710.686512 917.28573,710.442849 C918.726876,710.051494 924.001236,710.005988 925.208346,710.000696 L925.702841,710.000696 C926.909982,710.005988 932.184477,710.051494 933.625623,710.442849 Z M923.262295,714.360465 L923.262295,720.717326 L928.695098,717.538895 L923.262295,714.360465 Z" id="social_youtube"></path>
                </g>
            </g>
        </svg>
    </a>
</div>
                          </div>
                      </div>
                      <div class="legal-info appear-mobile">
                          <span class="copyright">Copper CRM, Inc. © 2021</span>
                          <a href="/privacy">Privacy</a>
                          <a href="/terms">Terms</a>
                      </div>
                      <div class="show-social d-md-none appear-mobile extra-bottom-margin--small">
                          <div class="footer__social">
    <a href="https://www.facebook.com/CopperInc/" class="fb">
        <!--?xml version="1.0" encoding="UTF-8"?-->
        <svg width="8px" height="15px" viewBox="0 0 8 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 57.1 (83088) - https://sketch.com -->
            <title>social_facebook</title>
            <desc>Created with Sketch.</desc>
            <g id="design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="190813_footer-desktop" transform="translate(-980.000000, -710.000000)" fill="">
                    <path d="M985.041615,725 L985.041615,718.167165 L987.347659,718.167165 L987.69189,715.49252 L985.041615,715.49252 L985.041615,713.789642 C985.041615,713.015883 985.257902,712.491921 986.366752,712.491921 L987.783279,712.491921 L987.783279,710.103627 C987.100157,710.033023 986.41379,709.998451 985.727031,710 C983.689061,710 982.299951,711.242941 982.299951,713.524614 L982.299951,715.49252 L980,715.49252 L980,718.167165 L982.299951,718.167165 L982.299951,725 L985.041615,725 Z" id="social_facebook"></path>
                </g>
            </g>
        </svg>
    </a>
    <a href="https://twitter.com/CopperInc" class="tw">
        <!--?xml version="1.0" encoding="UTF-8"?-->
        <svg width="18px" height="15px" viewBox="0 0 18 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="190813_footer-desktop" transform="translate(-1003.000000, -710.000000)" fill="">
                    <path d="M1008.66064,724.626058 C1015.45312,724.626058 1019.16832,718.998538 1019.16832,714.118378 C1019.16832,713.958538 1019.16832,713.799418 1019.15752,713.641018 C1019.88028,713.118234 1020.50418,712.470931 1021,711.729418 C1020.32599,712.028075 1019.611,712.223934 1018.87888,712.310458 C1019.64982,711.848925 1020.22681,711.123014 1020.50248,710.267818 C1019.77755,710.697986 1018.98447,711.001146 1018.15744,711.164218 C1017.0127,709.946982 1015.19372,709.649059 1013.72048,710.437507 C1012.24723,711.225956 1011.48612,712.904692 1011.86392,714.532378 C1008.89456,714.383517 1006.12802,712.98101 1004.2528,710.673898 C1003.27261,712.361322 1003.77327,714.520037 1005.39616,715.603738 C1004.80845,715.586319 1004.23356,715.427779 1003.72,715.141498 C1003.72,715.156618 1003.72,715.172458 1003.72,715.188298 C1003.72048,716.946245 1004.95966,718.460363 1006.6828,718.808458 C1006.13911,718.956735 1005.56866,718.97841 1005.01528,718.871818 C1005.49908,720.376202 1006.88553,721.406782 1008.46552,721.436458 C1007.15781,722.464209 1005.54236,723.022134 1003.87912,723.020458 C1003.58529,723.019894 1003.29175,723.002103 1003,722.967178 C1004.68886,724.050977 1006.65394,724.625854 1008.66064,724.623178" id="social_twitter"></path>
                </g>
            </g>
        </svg>
    </a>
    <a href="https://www.linkedin.com/company/copper-inc/" class="li">
        <!--?xml version="1.0" encoding="UTF-8"?-->
        <svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 57.1 (83088) - https://sketch.com -->
            <title>social_linkedin</title>
            <desc>Created with Sketch.</desc>
            <g id="design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="190813_footer-desktop" transform="translate(-1034.000000, -710.000000)" fill="">
                    <path d="M1046.78244,722.782022 L1044.55779,722.782022 L1044.55779,719.300675 C1044.55779,718.470652 1044.54363,717.402706 1043.40193,717.402706 C1042.24398,717.402706 1042.06731,718.307314 1042.06731,719.241507 L1042.06731,722.782022 L1039.84516,722.782022 L1039.84516,715.62349 L1041.97772,715.62349 L1041.97772,716.602267 L1042.00856,716.602267 C1042.30523,716.039334 1043.03108,715.445985 1044.1132,715.445985 C1046.36618,715.445985 1046.78244,716.928109 1046.78244,718.856079 L1046.78244,722.782022 Z M1037.33676,714.645546 C1036.62216,714.645546 1036.04589,714.067613 1036.04589,713.355093 C1036.04589,712.64299 1036.62216,712.065057 1037.33676,712.065057 C1038.04845,712.065057 1038.62596,712.64299 1038.62596,713.355093 C1038.62596,714.067613 1038.04845,714.645546 1037.33676,714.645546 Z M1036.22256,722.782022 L1038.44971,722.782022 L1038.44971,715.62349 L1036.22256,715.62349 L1036.22256,722.782022 Z M1047.89039,710 L1035.10628,710 C1034.49585,710 1034,710.48418 1034,711.081697 L1034,723.917887 C1034,724.515403 1034.49585,725.000417 1035.10628,725.000417 L1047.89039,725.000417 C1048.50207,725.000417 1049,724.515403 1049,723.917887 L1049,711.081697 C1049,710.48418 1048.50207,710 1047.89039,710 L1047.89039,710 Z" id="social_linkedin"></path>
                </g>
            </g>
        </svg>
    </a>
    <a href="https://www.instagram.com/copperinc" class="ig">
        <!--?xml version="1.0" encoding="UTF-8"?-->
        <svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 57.1 (83088) - https://sketch.com -->
            <title>social_instagram</title>
            <desc>Created with Sketch.</desc>
            <g id="design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="190813_footer-desktop" transform="translate(-950.000000, -710.000000)" fill="#FFFFFF">
                    <path d="M956.5867,710.000885 L958.413317,710.000885 C959.642185,710.003846 959.931408,710.014981 960.59224,710.045133 C961.390528,710.081544 961.93573,710.20834 962.412785,710.393755 C962.905976,710.585393 963.324233,710.841843 963.74121,711.25879 C964.158157,711.675767 964.414607,712.094024 964.606275,712.587215 C964.79166,713.06427 964.918456,713.609472 964.954867,714.40776 C964.991366,715.207714 965,715.463122 965,717.500015 C965,719.536878 964.991366,719.792286 964.954867,720.59224 C964.918456,721.390528 964.79166,721.93573 964.606275,722.412785 C964.414607,722.905976 964.158157,723.324233 963.74121,723.74121 C963.324233,724.158157 962.905976,724.414607 962.412785,724.606275 C961.93573,724.79166 961.390528,724.918456 960.59224,724.954867 C959.792286,724.991366 959.536878,725 957.500015,725 C955.463122,725 955.207714,724.991366 954.40776,724.954867 C953.609472,724.918456 953.06427,724.79166 952.587215,724.606275 C952.094024,724.414607 951.675767,724.158157 951.25879,723.74121 C950.841843,723.324233 950.585393,722.905976 950.393755,722.412785 C950.20834,721.93573 950.081544,721.390528 950.045133,720.59224 C950.014981,719.931408 950.003846,719.642185 950.000885,718.413317 L950.000885,716.5867 C950.003846,715.357815 950.014981,715.068592 950.045133,714.40776 C950.081544,713.609472 950.20834,713.06427 950.393755,712.587215 C950.585393,712.094024 950.841843,711.675767 951.25879,711.25879 C951.675767,710.841843 952.094024,710.585393 952.587215,710.393755 C953.06427,710.20834 953.609472,710.081544 954.40776,710.045133 C955.068592,710.014981 955.357815,710.003846 956.5867,710.000885 L958.413317,710.000885 Z M958.198671,711.351786 L956.801349,711.351786 C955.426117,711.353829 955.157047,711.363707 954.469356,711.395083 C953.738114,711.428427 953.340994,711.550608 953.076715,711.653319 C952.726634,711.789374 952.476793,711.951896 952.214359,712.214359 C951.951896,712.476793 951.789374,712.726634 951.653319,713.076715 C951.550608,713.340994 951.428427,713.738114 951.395083,714.469356 C951.363707,715.157047 951.353829,715.426117 951.351786,716.801349 L951.351786,718.198671 C951.353829,719.573883 951.363707,719.842953 951.395083,720.530644 C951.428427,721.261886 951.550608,721.659006 951.653319,721.923285 C951.789374,722.273366 951.951925,722.523207 952.214359,722.785641 C952.476793,723.048104 952.726634,723.210626 953.076715,723.346681 C953.340994,723.449392 953.738114,723.571573 954.469356,723.604917 C955.15697,723.636293 955.425984,723.646171 956.801301,723.648214 L958.19872,723.648214 C959.574023,723.646171 959.843056,723.636293 960.530644,723.604917 C961.261886,723.571573 961.659006,723.449392 961.923285,723.346681 C962.273366,723.210626 962.523207,723.048104 962.785641,722.785641 C963.048104,722.523207 963.210626,722.273366 963.346681,721.923285 C963.449392,721.659006 963.571573,721.261886 963.604917,720.530644 C963.636293,719.842953 963.646171,719.573883 963.648214,718.198671 L963.648214,716.801349 C963.646171,715.426117 963.636293,715.157047 963.604917,714.469356 C963.571573,713.738114 963.449392,713.340994 963.346681,713.076715 C963.210626,712.726634 963.048104,712.476793 962.785641,712.214359 C962.523207,711.951896 962.273366,711.789374 961.923285,711.653319 C961.659006,711.550608 961.261886,711.428427 960.530644,711.395083 C959.842953,711.363707 959.573883,711.353829 958.198671,711.351786 Z M957.500015,713.648651 C959.627055,713.648651 961.351349,715.372945 961.351349,717.500015 C961.351349,719.627055 959.627055,721.351349 957.500015,721.351349 C955.372945,721.351349 953.648651,719.627055 953.648651,717.500015 C953.648651,715.372945 955.372945,713.648651 957.500015,713.648651 Z M957.500015,715 C956.119282,715 955,716.119282 955,717.500015 C955,718.880718 956.119282,720 957.500015,720 C958.880718,720 960,718.880718 960,717.500015 C960,716.119282 958.880718,715 957.500015,715 Z M961.50351,712.596474 C962.000572,712.596474 962.403526,712.999428 962.403526,713.49649 C962.403526,713.993552 962.000572,714.396476 961.50351,714.396476 C961.006478,714.396476 960.603524,713.993552 960.603524,713.49649 C960.603524,712.999428 961.006478,712.596474 961.50351,712.596474 Z" id="social_instagram"></path>
                </g>
            </g>
        </svg>
    </a>
    <a href="https://www.youtube.com/c/CopperInc" class="yt">
        <!--?xml version="1.0" encoding="UTF-8"?-->
        <svg width="21px" height="15px" viewBox="0 0 21 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 57.1 (83088) - https://sketch.com -->
            <title>social_youtube</title>
            <desc>Created with Sketch.</desc>
            <g id="design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="190813_footer-desktop" transform="translate(-915.000000, -710.000000)" fill="#FFFFFF" fill-rule="nonzero">
                    <path d="M933.625623,710.442849 C934.525352,710.686512 935.233844,711.404593 935.474484,712.316105 C935.883167,713.861937 935.909534,716.978883 935.911235,717.374635 L935.911235,717.457923 C935.909534,717.853675 935.883167,720.970621 935.474484,722.516454 C935.233844,723.427965 934.525352,724.146047 933.625623,724.389709 C932.146552,724.791363 926.629722,724.828726 925.616134,724.832202 L925.29505,724.832202 C924.281489,724.828726 918.7648,724.791363 917.28573,724.389709 C916.386,724.146047 915.677508,723.427965 915.437041,722.516454 C915.056392,721.07723 915.007276,718.276126 915.000939,717.577223 L915.000939,717.255335 C915.007276,716.556432 915.056392,713.755328 915.437041,712.316105 C915.677508,711.404593 916.386,710.686512 917.28573,710.442849 C918.726876,710.051494 924.001236,710.005988 925.208346,710.000696 L925.702841,710.000696 C926.909982,710.005988 932.184477,710.051494 933.625623,710.442849 Z M923.262295,714.360465 L923.262295,720.717326 L928.695098,717.538895 L923.262295,714.360465 Z" id="social_youtube"></path>
                </g>
            </g>
        </svg>
    </a>
</div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    
  </footer>          
        
          <div class="modal hide fade" id="formModal" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="c-form demo-form demo-form--image">
      <a class="modal-close" data-dismiss="modal" aria-label="Close">
          <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Request-a-demo-modal---no-logo" transform="translate(-233.000000, -225.000000)">
                    <g id="baseline-close-24px-copy" transform="translate(228.000000, 220.000000)">
                        <polygon id="Shape" fill="#FF3465" fill-rule="nonzero" points="19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12"></polygon>
                        <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                    </g>
                </g>
            </g>
        </svg>
      </a>
      <div class="form_inside">
        <div class="c-form__text">
          <h2>Request a Demo</h2>
          <p>Are you interested in learning more about our product? Enter your information in the form and a product expert will contact you shortly.</p>
          <div class="c-form__text__img"></div>
        </div>
        
        <div id="demo-form-snip" class="sl_swap h-smartling-form">
                    
            <div class="online-marketo">
              <form id="mktoForm_1234" novalidate="novalidate" class="mktoForm mktoHasWidth mktoLayoutLeft" style="font-family: Helvetica, Arial, sans-serif; font-size: 13px; color: rgb(51, 51, 51); width: 271px;">
                <div class="h-gdpr d-flex" style="display: block;">
                  <div class="h-gdpr__container">
                      <input type="checkbox" name="consent" id="consentBox" value="false">
                  </div>
                  
                  <i>I consent to receiving emails about Copper products and  special offers. By submitting this form you agree to our terms. See our <a href="/privacy">privacy policy</a> to learn about how we use your information.</i>
                </div>  
              <style type="text/css">.mktoForm .mktoButtonWrap.mktoSimple .mktoButton {
color:#fff;
border:1px solid #75ae4c;
padding:0.4em 1em;
font-size:1em;
background-color:#99c47c;
background-image: -webkit-gradient(linear, left top, left bottom, from(#99c47c), to(#75ae4c));
background-image: -webkit-linear-gradient(top, #99c47c, #75ae4c);
background-image: -moz-linear-gradient(top, #99c47c, #75ae4c);
background-image: linear-gradient(to bottom, #99c47c, #75ae4c);
}
.mktoForm .mktoButtonWrap.mktoSimple .mktoButton:hover {
border:1px solid #447f19;
}
.mktoForm .mktoButtonWrap.mktoSimple .mktoButton:focus {
outline:none;
border:1px solid #447f19;
}
.mktoForm .mktoButtonWrap.mktoSimple .mktoButton:active{
background-color:#75ae4c;
background-image: -webkit-gradient(linear, left top, left bottom, from(#75ae4c), to(#99c47c));
background-image: -webkit-linear-gradient(top, #75ae4c, #99c47c);
background-image: -moz-linear-gradient(top, #75ae4c, #99c47c);
background-image: linear-gradient(to bottom, #75ae4c, #99c47c);
}
</style><div class="mktoFormRow"><div class="mktoFieldDescriptor mktoFormCol" style="margin-bottom: 10px;"><div class="mktoOffset" style="width: 10px;"></div><div class="mktoFieldWrap mktoRequiredField"><label for="FirstName" id="LblFirstName" class="mktoLabel mktoHasWidth" style="width: 100px;"><div class="mktoAsterix">*</div>First Name</label><div class="mktoGutter mktoHasWidth" style="width: 10px;"></div><input id="FirstName" name="FirstName" placeholder="John" maxlength="241" aria-labelledby="LblFirstName InstructFirstName" type="text" class="mktoField mktoTextField mktoHasWidth mktoRequired" aria-required="true" style="width: 100px;"><span id="InstructFirstName" tabindex="-1" class="mktoInstruction"></span><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoFormRow"><div class="mktoFieldDescriptor mktoFormCol" style="margin-bottom: 10px;"><div class="mktoOffset" style="width: 10px;"></div><div class="mktoFieldWrap mktoRequiredField"><label for="LastName" id="LblLastName" class="mktoLabel mktoHasWidth" style="width: 100px;"><div class="mktoAsterix">*</div>Last Name</label><div class="mktoGutter mktoHasWidth" style="width: 10px;"></div><input id="LastName" name="LastName" placeholder="Doe" maxlength="255" aria-labelledby="LblLastName InstructLastName" type="text" class="mktoField mktoTextField mktoHasWidth mktoRequired" aria-required="true" style="width: 150px;"><span id="InstructLastName" tabindex="-1" class="mktoInstruction"></span><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoFormRow"><div class="mktoFieldDescriptor mktoFormCol" style="margin-bottom: 10px;"><div class="mktoOffset" style="width: 10px;"></div><div class="mktoFieldWrap mktoRequiredField"><label for="Email" id="LblEmail" class="mktoLabel mktoHasWidth" style="width: 100px;"><div class="mktoAsterix">*</div>Work Email</label><div class="mktoGutter mktoHasWidth" style="width: 10px;"></div><input id="Email" name="Email" placeholder="example@email.com" maxlength="255" aria-labelledby="LblEmail InstructEmail" type="email" class="mktoField mktoEmailField mktoHasWidth mktoRequired" aria-required="true" style="width: 150px;"><span id="InstructEmail" tabindex="-1" class="mktoInstruction"></span><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoFormRow"><div class="mktoFieldDescriptor mktoFormCol" style="margin-bottom: 10px;"><div class="mktoOffset" style="width: 10px;"></div><div class="mktoFieldWrap mktoRequiredField"><label for="Company" id="LblCompany" class="mktoLabel mktoHasWidth" style="width: 100px;"><div class="mktoAsterix">*</div>Company Name</label><div class="mktoGutter mktoHasWidth" style="width: 10px;"></div><input id="Company" name="Company" placeholder="Your Company Name" maxlength="255" aria-labelledby="LblCompany InstructCompany" type="text" class="mktoField mktoTextField mktoHasWidth mktoRequired" aria-required="true" style="width: 150px;"><span id="InstructCompany" tabindex="-1" class="mktoInstruction"></span><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoFormRow"><div class="mktoFieldDescriptor mktoFormCol" style="margin-bottom: 10px;"><div class="mktoOffset" style="width: 10px;"></div><div class="mktoFieldWrap mktoRequiredField"><label for="Phone" id="LblPhone" class="mktoLabel mktoHasWidth" style="width: 100px;"><div class="mktoAsterix">*</div>Phone Number</label><div class="mktoGutter mktoHasWidth" style="width: 10px;"></div><input id="Phone" name="Phone" placeholder="(555) 555-5555" maxlength="255" aria-labelledby="LblPhone InstructPhone" type="tel" class="mktoField mktoTelField mktoHasWidth mktoRequired" aria-required="true" style="width: 150px;"><span id="InstructPhone" tabindex="-1" class="mktoInstruction"></span><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoFormRow"><div class="mktoFieldDescriptor mktoFormCol" style="margin-bottom: 10px;"><div class="mktoOffset" style="width: 10px;"></div><div class="mktoFieldWrap mktoRequiredField"><label for="companySize" id="LblcompanySize" class="mktoLabel mktoHasWidth" style="width: 100px;"><div class="mktoAsterix">*</div>Company Size</label><div class="mktoGutter mktoHasWidth" style="width: 10px;"></div><select id="companySize" name="companySize" aria-labelledby="LblcompanySize InstructcompanySize" class="mktoField mktoHasWidth mktoRequired" aria-required="true" style="width: 138px;"><option value="">Select Your Company Size</option><option value="1">1</option><option value="2-5">2-5</option><option value="6-20">6-20</option><option value="21-50">21-50</option><option value="51-100">51-100</option><option value="101-500">101-500</option><option value="500+">500+</option></select><span id="InstructcompanySize" tabindex="-1" class="mktoInstruction"></span><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="utmsource" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="medium" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="utmadgroup" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="content" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="campaign" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="adgroupid" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="feeditemid" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="targetid" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="locinterestms" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="locphysicalms" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="matchtype" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="network" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="device" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="devicemodel" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="placement" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="target" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="adposition" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="gCLID" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="expressConsentGivenc" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="utmlastpage" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoButtonRow"><span class="mktoButtonWrap mktoSimple" style="margin-left: 120px;"><button type="submit" class="mktoButton">Submit</button></span></div><input type="hidden" name="formid" class="mktoField mktoFieldDescriptor" value="1234"><input type="hidden" name="munchkinId" class="mktoField mktoFieldDescriptor" value="763-DVL-293"></form>
            </div> 
          <div class="js-form-success">
            <h3 class="h3">Thanks for your interest.</h3>
            <p>A product specialist will contact you soon.</p>
            <a href="#" class="c-button" data-dismiss="modal" aria-label="Close">Return to site</a>
          </div>          
        </div>


        <script id="demo-form-embed" class="sl_swap">
LazyLoad.js(['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'],function(){
        if(0 || typeof MktoForms2 === "undefined"){
                LazyLoad.js([
      'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js',
      '/js/vendor/js-cookie.js',
      '/js/functions.min.434.js'
      ],function(){

        if($(".loading-cover").length){
          $(".loading-cover").each(function () {
            var loadingElement = $(this);
            loadingElement.css('display', 'none');
          });
        }

        if($("#email-finder-submit").length){
          $("#email-finder-submit").attr("disabled", false);
        }

        var localSndDomain = '.copper.com';

        if(Cookies.get('utm_source', { domain:  localSndDomain }) !== undefined) $('#utm-source-field').val(Cookies.get('utm_source', { domain:  localSndDomain }));
        if(Cookies.get('utm_term', { domain:  localSndDomain }) !== undefined) $('#utm-term-field').val(Cookies.get('utm_term', { domain:  localSndDomain }));
        if(Cookies.get('utm_adgroup', { domain:  localSndDomain }) !== undefined) $('#utm-adgroup-field').val(Cookies.get('utm_adgroup', { domain:  localSndDomain }));
        if(Cookies.get('utm_medium', { domain:  localSndDomain }) !== undefined) $('#utm-medium-field').val(Cookies.get('utm_medium', { domain:  localSndDomain }));
        if(Cookies.get('utm_campaign', { domain:  localSndDomain }) !== undefined) $('#utm-campaign-field').val(Cookies.get('utm_campaign', { domain:  localSndDomain }));
        if(Cookies.get('fireb_device_id', { domain:  localSndDomain }) !== undefined) $('#fb-user-info-field').val(Cookies.get('fireb_device_id', { domain:  localSndDomain }));
      });
      
      $('#mktoForm_1234').on('submit', function(e){
        e.preventDefault();

        // Send it to the server
        $.post({
            url: '/',
            dataType: 'json',
            data: $(this).serialize(),
            success: function(response) {
                if (response.success) {
                    $('#thanks').fadeIn();
                } else {
                    // response.error will be an object containing any validation errors that occurred, indexed by field name
                    // e.g. response.error.fromName => ['From Name is required']
                    alert('An error occurred. Please try again.');
                }
            }
        });

        $('#mktoForm_1234').css('display', 'none');
        
        var formSubmitted = {FirstName: $('input#fromEmail').val(), LastName: $('input#LastName').val(), Phone: $('input#Phone').val(), Email: $('input#email').val(), Company: $('input#Company').val(), CompanySize: $('select#companySize').val() };
        
                  $(".js-form-success").css({
            "display": "block"
          });
          $(".js-form-success").addClass('h-demo-success');
                return false;
      });

        } else {
            MktoForms2.loadForm("//app-sj17.marketo.com", "763-DVL-293", 1234, function(form) {

              form.onSubmit(function(){
                  // Get the form field values
                  var consentValue =  $('#consentBox').val();
                  var vals = form.vals({"expressConsentGivenc": consentValue});
                  // You may wish to call other function calls here, for example to fire google analytics tracking or the like
                  // callSomeFunction(vals);
                  // We'll just alert them to show the principle
                  // alert("Submitted values: " + JSON.stringify(vals));
                  form.onSuccess(function(x, y) {
                    form.getFormElem().css({
                      "display": "none"
                    });
                    $(".js-form-success").css({
                      "display": "block"
                    });
                    $(".js-form-success").addClass('h-demo-success');
                    return false;
                  });              
              });

            });
            MktoForms2.whenReady(function (form) {
              $('.h-gdpr').css({
                "display": "block"
              });
              $("input").focus(function(){
                $(this).prevAll("label").addClass("label-focused")
                $(this).addClass("input-focused");
              });
              $("input").focusout(function(){
                $(this).prevAll("label").removeClass("label-focused")
                $(this).removeClass("input-focused");
              });
              $("select").focus(function(){
                $(this).prevAll("label").addClass("label-focused")
                $(this).addClass("input-focused");
              });
              $("select").focusout(function(){
                $(this).prevAll("label").removeClass("label-focused")
                $(this).removeClass("input-focused");
              });
              $("select").change(function(){
                if($(this).val().length > 1) {
                  $("select").addClass("select-selected");
                } else {
                  $("select").removeClass("select-selected");
                } 
              });
            });    
          }
      })    
        </script>
      </div>

    </div>
  </div>
</div>
      <div class="modal hide fade" id="contactModal" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="c-form demo-form">
      <a class="modal-close" data-dismiss="modal" aria-label="Close">
          <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Request-a-demo-modal---no-logo" transform="translate(-233.000000, -225.000000)">
                    <g id="baseline-close-24px-copy" transform="translate(228.000000, 220.000000)">
                        <polygon id="Shape" fill="#646567" fill-rule="nonzero" points="19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12"></polygon>
                        <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                    </g>
                </g>
            </g>
        </svg>
      </a>
      <div class="form_inside">
        <div class="c-form__text">
          <h2>Contact Us<span class="highligthed-sign"> . </span></h2>
          <p>Are you interested in learning more about Copper? Enter your information in the form and a representative will contact you shortly.</p>
        </div>
        <div id="contact-form-snip" class="sl_swap h-smartling-form">
                          
                <div class="online-marketo">
                  <form id="mktoForm_1671" novalidate="novalidate" class="mktoForm mktoHasWidth mktoLayoutLeft" style="font-family: Helvetica, Arial, sans-serif; font-size: 13px; color: rgb(51, 51, 51); width: 271px;">
                    <div class="h-gdpr d-flex" style="display: block;">
                        <!-- <div class="h-gdpr__container">
                            <input type="checkbox" name="consent" id="consentBox" value="false"/>
                        </div> -->
                        <i>By submitting this form you agree our terms. See our <a href="/privacy">privacy policy</a> to learn about how we use your information.</i>
                        <!-- <i>I consent to receiving emails about Copper products and  special offers. By submitting this form you agree to our terms. See our <a href="/privacy">privacy policy</a> to learn about how we use your information.</i> -->
                    </div>          
                  <style type="text/css">.mktoForm .mktoButtonWrap.mktoSimple .mktoButton {
color:#fff;
border:1px solid #75ae4c;
padding:0.4em 1em;
font-size:1em;
background-color:#99c47c;
background-image: -webkit-gradient(linear, left top, left bottom, from(#99c47c), to(#75ae4c));
background-image: -webkit-linear-gradient(top, #99c47c, #75ae4c);
background-image: -moz-linear-gradient(top, #99c47c, #75ae4c);
background-image: linear-gradient(to bottom, #99c47c, #75ae4c);
}
.mktoForm .mktoButtonWrap.mktoSimple .mktoButton:hover {
border:1px solid #447f19;
}
.mktoForm .mktoButtonWrap.mktoSimple .mktoButton:focus {
outline:none;
border:1px solid #447f19;
}
.mktoForm .mktoButtonWrap.mktoSimple .mktoButton:active{
background-color:#75ae4c;
background-image: -webkit-gradient(linear, left top, left bottom, from(#75ae4c), to(#99c47c));
background-image: -webkit-linear-gradient(top, #75ae4c, #99c47c);
background-image: -moz-linear-gradient(top, #75ae4c, #99c47c);
background-image: linear-gradient(to bottom, #75ae4c, #99c47c);
}
</style><div class="mktoFormRow"><div class="mktoFieldDescriptor mktoFormCol" style="margin-bottom: 10px;"><div class="mktoOffset" style="width: 10px;"></div><div class="mktoFieldWrap mktoRequiredField"><label for="FirstName" id="LblFirstName" class="mktoLabel mktoHasWidth" style="width: 100px;"><div class="mktoAsterix">*</div>First Name</label><div class="mktoGutter mktoHasWidth" style="width: 10px;"></div><input id="FirstName" name="FirstName" placeholder="John" maxlength="241" aria-labelledby="LblFirstName InstructFirstName" type="text" class="mktoField mktoTextField mktoHasWidth mktoRequired" aria-required="true" style="width: 100px;"><span id="InstructFirstName" tabindex="-1" class="mktoInstruction"></span><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoFormRow"><div class="mktoFieldDescriptor mktoFormCol" style="margin-bottom: 10px;"><div class="mktoOffset" style="width: 10px;"></div><div class="mktoFieldWrap mktoRequiredField"><label for="LastName" id="LblLastName" class="mktoLabel mktoHasWidth" style="width: 100px;"><div class="mktoAsterix">*</div>Last Name</label><div class="mktoGutter mktoHasWidth" style="width: 10px;"></div><input id="LastName" name="LastName" placeholder="Doe" maxlength="255" aria-labelledby="LblLastName InstructLastName" type="text" class="mktoField mktoTextField mktoHasWidth mktoRequired" aria-required="true" style="width: 150px;"><span id="InstructLastName" tabindex="-1" class="mktoInstruction"></span><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoFormRow"><div class="mktoFieldDescriptor mktoFormCol" style="margin-bottom: 10px;"><div class="mktoOffset" style="width: 10px;"></div><div class="mktoFieldWrap mktoRequiredField"><label for="Email" id="LblEmail" class="mktoLabel mktoHasWidth" style="width: 100px;"><div class="mktoAsterix">*</div>Email Address</label><div class="mktoGutter mktoHasWidth" style="width: 10px;"></div><input id="Email" name="Email" placeholder="example@email.com" maxlength="255" aria-labelledby="LblEmail InstructEmail" type="email" class="mktoField mktoEmailField mktoHasWidth mktoRequired" aria-required="true" style="width: 150px;"><span id="InstructEmail" tabindex="-1" class="mktoInstruction"></span><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoFormRow"><div class="mktoFieldDescriptor mktoFormCol" style="margin-bottom: 10px;"><div class="mktoOffset" style="width: 10px;"></div><div class="mktoFieldWrap mktoRequiredField"><label for="Company" id="LblCompany" class="mktoLabel mktoHasWidth" style="width: 100px;"><div class="mktoAsterix">*</div>Company Name</label><div class="mktoGutter mktoHasWidth" style="width: 10px;"></div><input id="Company" name="Company" placeholder="Your Company Name" maxlength="255" aria-labelledby="LblCompany InstructCompany" type="text" class="mktoField mktoTextField mktoHasWidth mktoRequired" aria-required="true" style="width: 150px;"><span id="InstructCompany" tabindex="-1" class="mktoInstruction"></span><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoFormRow"><div class="mktoFieldDescriptor mktoFormCol" style="margin-bottom: 10px;"><div class="mktoOffset" style="width: 10px;"></div><div class="mktoFieldWrap mktoRequiredField"><label for="Phone" id="LblPhone" class="mktoLabel mktoHasWidth" style="width: 100px;"><div class="mktoAsterix">*</div>Phone Number</label><div class="mktoGutter mktoHasWidth" style="width: 10px;"></div><input id="Phone" name="Phone" placeholder="(555) 555-5555" maxlength="255" aria-labelledby="LblPhone InstructPhone" type="tel" class="mktoField mktoTelField mktoHasWidth mktoRequired" aria-required="true" style="width: 150px;"><span id="InstructPhone" tabindex="-1" class="mktoInstruction"></span><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoFormRow"><div class="mktoFieldDescriptor mktoFormCol" style="margin-bottom: 10px;"><div class="mktoOffset" style="width: 10px;"></div><div class="mktoFieldWrap mktoRequiredField"><label for="companySize" id="LblcompanySize" class="mktoLabel mktoHasWidth" style="width: 100px;"><div class="mktoAsterix">*</div>Company Size:</label><div class="mktoGutter mktoHasWidth" style="width: 10px;"></div><select id="companySize" name="companySize" aria-labelledby="LblcompanySize InstructcompanySize" class="mktoField mktoHasWidth mktoRequired" aria-required="true" style="width: 150px;"><option value="">Select Your Company Size</option><option value="1">1</option><option value="2-5">2-5</option><option value="6-20">6-20</option><option value="21-50">21-50</option><option value="51-100">51-100</option><option value="101-500">101-500</option><option value="500+">500+</option></select><span id="InstructcompanySize" tabindex="-1" class="mktoInstruction"></span><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoFormRow"><div class="mktoFieldDescriptor mktoFormCol" style="margin-bottom: 10px;"><div class="mktoOffset" style="width: 10px;"></div><div class="mktoFieldWrap mktoRequiredField"><label for="MktoPersonNotes" id="LblMktoPersonNotes" class="mktoLabel mktoHasWidth" style="width: 100px;"><div class="mktoAsterix">*</div>Reason for Contacting</label><div class="mktoGutter mktoHasWidth" style="width: 10px;"></div><input id="MktoPersonNotes" name="MktoPersonNotes" placeholder="I’m interested in learning more about…" maxlength="32000" aria-labelledby="LblMktoPersonNotes InstructMktoPersonNotes" type="text" class="mktoField mktoTextField mktoHasWidth mktoRequired" aria-required="true" style="width: 150px; display: none;"><textarea id="MktoPersonNotesTextArea" name="MktoPersonNotes" placeholder="I’m interested in learning more about…" maxlength="32000" type="text" class="mktoField mktoTextField mktoHasWidth mktoRequired" style="width: 150px;"></textarea><span id="InstructMktoPersonNotes" tabindex="-1" class="mktoInstruction"></span><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="utmsource" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="medium" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="utmadgroup" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="content" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="campaign" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="adgroupid" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="feeditemid" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="targetid" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="locinterestms" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="locphysicalms" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="matchtype" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="network" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="device" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="devicemodel" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="placement" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="target" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="adposition" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="gCLID" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoFormRow" style="display: none;"><input type="hidden" name="expressConsentGivenc" class="mktoField mktoFieldDescriptor mktoFormCol" value="" style="margin-bottom: 10px;"><div class="mktoClear"></div></div><div class="mktoButtonRow"><span class="mktoButtonWrap mktoSimple" style="margin-left: 120px;"><button type="submit" class="mktoButton">Submit</button></span></div><input type="hidden" name="formid" class="mktoField mktoFieldDescriptor" value="1671"><input type="hidden" name="munchkinId" class="mktoField mktoFieldDescriptor" value="763-DVL-293"></form>
                </div>
        </div>

        <script id="contact-form-embed" class="sl_swap">
        if(0 || typeof MktoForms2 === "undefined"){
                LazyLoad.js([
      'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js',
      '/js/vendor/js-cookie.js',
      '/js/functions.min.434.js'
      ],function(){

        if($(".loading-cover").length){
          $(".loading-cover").each(function () {
            var loadingElement = $(this);
            loadingElement.css('display', 'none');
          });
        }

        if($("#email-finder-submit").length){
          $("#email-finder-submit").attr("disabled", false);
        }

        var localSndDomain = '.copper.com';

        if(Cookies.get('utm_source', { domain:  localSndDomain }) !== undefined) $('#utm-source-field').val(Cookies.get('utm_source', { domain:  localSndDomain }));
        if(Cookies.get('utm_term', { domain:  localSndDomain }) !== undefined) $('#utm-term-field').val(Cookies.get('utm_term', { domain:  localSndDomain }));
        if(Cookies.get('utm_adgroup', { domain:  localSndDomain }) !== undefined) $('#utm-adgroup-field').val(Cookies.get('utm_adgroup', { domain:  localSndDomain }));
        if(Cookies.get('utm_medium', { domain:  localSndDomain }) !== undefined) $('#utm-medium-field').val(Cookies.get('utm_medium', { domain:  localSndDomain }));
        if(Cookies.get('utm_campaign', { domain:  localSndDomain }) !== undefined) $('#utm-campaign-field').val(Cookies.get('utm_campaign', { domain:  localSndDomain }));
        if(Cookies.get('fireb_device_id', { domain:  localSndDomain }) !== undefined) $('#fb-user-info-field').val(Cookies.get('fireb_device_id', { domain:  localSndDomain }));
      });
      
      $('#mktoForm_1671').on('submit', function(e){
        e.preventDefault();

        // Send it to the server
        $.post({
            url: '/',
            dataType: 'json',
            data: $(this).serialize(),
            success: function(response) {
                if (response.success) {
                    $('#thanks').fadeIn();
                } else {
                    // response.error will be an object containing any validation errors that occurred, indexed by field name
                    // e.g. response.error.fromName => ['From Name is required']
                    alert('An error occurred. Please try again.');
                }
            }
        });

        $('#mktoForm_1671').css('display', 'none');
        
        var formSubmitted = {FirstName: $('input#fromEmail').val(), LastName: $('input#LastName').val(), Phone: $('input#Phone').val(), Email: $('input#email').val(), Company: $('input#Company').val(), CompanySize: $('select#companySize').val() };
        
                  $(".js-form-success").css({
            "display": "block"
          });
          $(".js-form-success").addClass('h-demo-success');
                return false;
      });

        }else{
          LazyLoad.js(['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'],function(){
            MktoForms2.loadForm("//app-sj17.marketo.com", "763-DVL-293", 1671, function(form) {
          $("#MktoPersonNotes").hide();
          $("#MktoPersonNotes").after('<textarea id="MktoPersonNotesTextArea" name="MktoPersonNotes" placeholder="I’m interested in learning more about…" maxlength="32000" type="text" class="mktoField mktoTextField mktoHasWidth mktoRequired" style="width: 150px;" />');
          $("#MktoPersonNotesTextArea").keyup(function(){
            $text = $(this).val();
            $("#MktoPersonNotes").val($text);
          });

          form.onSubmit(function(){
            // Get the form field values
            var consentValue =  $('#consentBox').val();
            var vals = form.vals({"expressConsentGivenc": consentValue});
            // You may wish to call other function calls here, for example to fire google analytics tracking or the like
            // callSomeFunction(vals);
            // We'll just alert them to show the principle
            // alert("Submitted values: " + JSON.stringify(vals));
            form.onSuccess(function(x, y) {
              form.getFormElem().css({
                "display": "none"
              });
              $(".js-form-success").css({
                "display": "block"
              });
              $(".js-form-success").addClass('h-demo-success');
              return false;
            });              
          });
        });

        MktoForms2.whenReady(function (form) {
          $(".mktoFormRow").each(function(){
            $type = $(this).find("input").attr("type");
            if($type == "hidden"){
              $(this).css("display","none");
            }
          });

          $('.h-gdpr').css({
              "display": "block"
          });

        });   
          })
        }
      </script>
      </div>
      <div class="js-form-success">
        <h3 class="h3">Thanks for your interest.</h3>
        <p>A representative will contact you soon.</p>
        <a class="c-button" data-dismiss="modal" aria-label="Close">Return to site</a>
      </div>
    </div>
  </div>
</div>
        <style>
      .role-users-edit-button {
          position: fixed;
          top: 5%;
          right: -105px;
          background: white;
          padding: 10px 15px;
          border-radius: 30px;
          z-index: 99999999;
          transition:0.5s;
          border: 1px solid #ff3565;
      }
      .role-users-edit-button:hover{
        right:0px;
        transition:0.5s;
        z-index: 99999999;
      }
      .role-users-edit-button:hover a span {
        transform: rotateY(180deg);
        display: inline-block;
      }
      </style>
      

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-firestore.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-analytics.js"></script>

<script>
  // Start the hash reading
  function locationHashChanged(){
    console.log("Hash change", location.hash)
    if (location.hash.includes('#success-contact') && location.hash.indexOf('#success-contact') === 0) {
      LazyLoad.js([
      'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'],
      function(){
        $("#l-modal--overlay")
          .css("display", "flex")
          .hide()
          .fadeIn("fast");
      })
    }else if(location.hash.indexOf('#set-up-calend') === 0){
      windowObjectReference = window.open(deviceId.status['aeCalendarLink'],'targetWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=500,height=1000');
      }
      window.location.hash = "";
  }
  window.addEventListener('hashchange', locationHashChanged, false);

      const exitIntent = e => {
        if (!e.toElement && !e.relatedTarget) {
          document.removeEventListener('mouseout', exitIntent);
          
          LazyLoad.js([
            'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'],
            function(){
              // Displays the popup
              $("#l-modal--overlay")
                .css("display", "flex")
                .hide()
                .fadeIn("fast");
            }
          )
        }
    };
    
    document.addEventListener('mouseout', exitIntent);
  

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAm30whtTlibe4H3Odid4xh2QWnyHwdR54",
    authDomain: "user-monitor-copper.firebaseapp.com",
    projectId: "user-monitor-copper",
    storageBucket: "user-monitor-copper.appspot.com",
    messagingSenderId: "662672173976",
    appId: "1:662672173976:web:c11aada8620dcbfc1e59ed",
    measurementId: "G-0E20R6Z5M0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth();
</script>

                        </div>
        `;

	return (
		<DefaultPageBase entry={entry} globals={globals}>
			<Head>
				<title>Copper CRM</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Script src="/js/lazyload.min.js" strategy="beforeInteractive"></Script>
			<div dangerouslySetInnerHTML={{ __html: rawHtml }}></div>
		</DefaultPageBase>
	);
};

export default PricingPage;

export async function getStaticProps({ context }) {
	const res = await getEntryBySectionHandle("pricing", "pricing");
	return {
		props: {
			entry: res?.entry || {},
			globals: res?.globalSets || [],
		},
		revalidate: 120, // In seconds
	};
}
