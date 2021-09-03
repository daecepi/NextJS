
import NavigationDefault from '../components/Navigation/NavigationDefault';
import Head from 'next/head';

const PricingPage = ({ res }) => {
  let priceValidity = new Date((new Date().getTime())+ (12*30*24*60*60*1000));

  let rawHtml = `
  <main id="content" role="main">
    
    
        
    
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
                                                                                                                                                  <a class="c-button c-button--outline  pricing-cta" target="" href="/signup" data-plan-type="Basic">Try Free</a>
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
                                                                                                                                                  <a class="c-button c-button--hot-pink featured-button pricing-cta" target="" href="/signup" data-plan-type="Professional">Try Free</a>
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
                                                                                                                                                  <a class="c-button c-button--outline  pricing-cta" target="" href="/signup" data-plan-type="Business">Try Free</a>
                                                                                        </div>
                                    
                   
                  </div>
                </div>
              </div>
                  </div>
        </div>
        <p class="p-xtra-sm">Prices are in USD and don't include taxes and fees where applicable.</p>
    
    
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
          <div class="c-pricing-table__row--cornflower united-bottom floating-container--pricing">
            <div class="container c-pricing-table--cornflower__navigation--container" style="align-items:center">
              <div class="c-pricing-table__info--cornflower" style="max-width:50%; margin-right: 11px;"><p>Compare Features</p></div>
              <div style="display:block;max-width:50%;width:50%">
                <div class="pricing-table-nav-slider slick-initialized slick-slider"><img class="pricing-arrow pricing-prev-arrow slick-arrow slick-disabled" src="/imgs/pricing/ArrowPrev-24px.svg" alt="Prev arrow" aria-disabled="true" style=""><div class="slick-list draggable"><div class="slick-track" style="opacity: 1; width: 0px; transform: translate3d(0px, 0px, 0px);"><div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 0px;"><div><div class="c-pricing-table__tier--cornflower" style="width: 100%; display: inline-block;"><p class="text-center pricing-cat-Basic">Basic</p></div></div></div><div class="slick-slide" data-slick-index="1" aria-hidden="true" style="width: 0px;" tabindex="-1"><div><div class="c-pricing-table__tier--cornflower js-truncate-string" style="width: 100%; display: inline-block;"><p class="text-center pricing-cat-Professional">Professional</p></div></div></div><div class="slick-slide" data-slick-index="2" aria-hidden="true" style="width: 0px;" tabindex="-1"><div><div class="c-pricing-table__tier--cornflower" style="width: 100%; display: inline-block;"><p class="text-center pricing-cat-Business">Business</p></div></div></div></div></div><img class="pricing-arrow pricing-forward-arrow slick-arrow" src="/imgs/pricing/arrowForward-24px.svg" alt="Forward arrow" style={{}} aria-disabled="false" /></div>
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
          prevArrow: '<img class="pricing-arrow pricing-prev-arrow" src="/imgs/pricing/ArrowPrev-24px.svg" alt="Prev arrow" />',
          nextArrow: '<img class="pricing-arrow pricing-forward-arrow" src="/imgs/pricing/arrowForward-24px.svg" alt="Forward arrow" />'
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
          prevArrow: '<img class="pricing-arrow pricing-prev-arrow" src="/imgs/pricing/ArrowPrev-24px.svg" alt="Prev arrow" />',
          nextArrow: '<img class="pricing-arrow pricing-forward-arrow" src="/imgs/pricing/arrowForward-24px.svg" alt="Forward arrow" />'
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
          prevArrow: '<img class="pricing-arrow pricing-prev-arrow" src="/imgs/pricing/ArrowPrev-24px.svg" alt="Prev arrow" />',
          nextArrow: '<img class="pricing-arrow pricing-forward-arrow" src="/imgs/pricing/arrowForward-24px.svg" alt="Forward arrow" />'
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
          prevArrow: '<img class="pricing-arrow pricing-prev-arrow" src="/imgs/pricing/ArrowPrev-24px.svg" alt="Prev arrow" />',
          nextArrow: '<img class="pricing-arrow pricing-forward-arrow" src="/imgs/pricing/arrowForward-24px.svg" alt="Forward arrow" />'
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
          prevArrow: '<img class="pricing-arrow pricing-prev-arrow" src="/imgs/pricing/ArrowPrev-24px.svg" alt="Prev arrow" />',
          nextArrow: '<img class="pricing-arrow pricing-forward-arrow" src="/imgs/pricing/arrowForward-24px.svg" alt="Forward arrow" />'
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
          <source type="image/webp" srcset="/imgs/pricing/Pricing_CTA-image-dots@2x.webp" alt="Bubbles graphic">
          <source type="image/png" srcset="/imgs/pricing/Pricing_CTA-image-dots@2x.png" alt="Bubbles graphic">
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
          " src="/imgs/pricing/Pricing_CTA-image-dots@2x.png" alt="Bubbles graphic" />
        </picture>
        <picture>
          <source type="image/webp" srcset="https://copper.objects.frb.io/imgs/pricing/Pricing_CTA-image-bubbles@2x-migration-2.webp" alt="Bubbles graphic" />
          <source type="image/png" srcset="https://copper.objects.frb.io/imgs/pricing/Pricing_CTA-image-bubbles@2x-migration-2.png" alt="Bubbles graphic" />
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
          " src="https://copper.objects.frb.io/imgs/pricing/Pricing_CTA-image-bubbles@2x-migration-2.png" alt="Bubbles graphic" />
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
                <source type="image/webp" srcset="https://copper.objects.frb.io/imgs/pricing/pricing_cta-image-mobile@2x-migration-2.webp" alt="Bubbles graphic" />
                <source type="image/png" srcset="https://copper.objects.frb.io/imgs/pricing/pricing_cta-image-mobile@2x-migration-2.png" alt="Bubbles graphic" />
                <img class="drop-right__img h-remove-shadow" src="https://copper.objects.frb.io/imgs/pricing/pricing_cta-image-mobile@2x-migration-2.png" alt="Bubbles graphic" />
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
        
    <div class="row">
        <div data-cy="l-modal-overlay" id="l-modal--overlay" style="display: none;">
          <div class="l-modal--content " id="personalization-base-Modal">
            <div data-cy="l-modal-content" class="modal-content" style="max-width:513px;">
              <a class="modal-close" data-dismiss="modal" aria-label="Close" onclick="closeModal(true)">
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
              <div class="container">
    
                                    <style>
      .l-modal--content .modal-content .container {
        padding: 60px !important;
        max-height: 100vh !important;
        overflow-y: auto !important;
      }
    </style>
    <div id="base-personalization-popup-template">
      <div class="initial-state">
        <div class="row extra-bottom-margin--x-small">
          <div class="col-md-12" style="text-align: center;">
            <div id="main-image-container" class="c-image">
              <img src="https://copper.objects.frb.io/imgs/personalization/copper-spin.gif" alt="Image on pop up" style="max-width: 277.75px;max-height:245.52px;box-shadow: 5px 6px 5px #b9b8b8;" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 leader-titles" style="text-align: center;">
            <h4 id="main-title" class="extra-bottom-margin--xx-medium-small">See how Copper can work for you</h4>
            <p id="main-paragraph" class="p-sm">Try Copper free for 14 days. No credit card needed.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 leader-titles" style="text-align: center;">
            <a id="do-success" class="c-button c-button--hot-pink" href="/signup">Try Free</a>
            <a id="do-close" class="c-button c-button--outline" href="#">No thanks</a>
          </div>
        </div>
      </div>
      <script>
        LazyLoad.js([
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'],
        function(){
          $("#do-success").on("click", function(){
            ga( 'send', 'event', 'FOSP-PopupCTA', 'success-action', deviceId.status.status);
            // Since calendly is not available this will force an event on the marketo API
            if(Munchkin){
              Munchkin.munchkinFunction('clickLink', {
                'href': '/pricing/requested/1on1'
              }
            );
            }
    
            // UI changes
            $(".initial-state").hide()
            $(".success-state").fadeIn("fast")
          })
          $("#do-close").on("click", function(){
            window.location.hash = "";
            $("#l-modal--overlay").fadeOut("fast");
          })
        })
      </script>
      <div class="success-state">
        <div class="row">
          <div class="col-md-12" style="text-align: center;">
            <div class="c-image">
              <img src="https://d2ydtwisqcxv72.cloudfront.net/landing/copper-logo.png" alt="Copper logo" style="max-width: 100%;" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 leader-titles" style="text-align: center;">
            <h3>Thanks &amp; hang tight!</h3>
            <p class="p-sm">One of our reps will get in touch with you shortly for a one-on-one demo</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 leader-titles" style="text-align: center;">
            <a id="success-close" class="c-button c-button--hot-pink" href="#">Back to Copper</a>
          </div>
        </div>
      </div>
      <script>
        $("#success-close").on("click", function(){
          window.location.hash = "";
          $("#l-modal--overlay").fadeOut("fast");
        })
      </script>
    </div>            
              </div>
            </div>          
          </div>
        </div>
      </div>
    
    
        </main>
        `

  return (
    <div className='mt-24 '>
      <NavigationDefault/>

      <Head>
        <title>Copper CRM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
         
      <div dangerouslySetInnerHTML={{ __html: rawHtml }}></div>

    </div>
    
  );
}



export default PricingPage