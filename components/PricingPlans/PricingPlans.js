import PricingCardLarge from "../PricingPlans/PricingCardLarge";
import PricingCardSmall from "../PricingPlans/PricingCardSmall";

import { ReactDOM } from "react";

import {useSyncContext} from "../../contexts/SyncContext"

const PricingPlans = ({header, subHeader, pricingPlans, reducePadding, linkToNav, stickyNavName, removeCtas}) => {
  const syncedContext = useSyncContext();

  const displayPlanCards = () => {
    const items =  "";
    console.log("items ", items)
    return items
  }

  console.log("Synced context ", syncedContext)

  const styleVariations = {

  }

  const heroPropertyresetter = () => {

    syncedContext.mainFormReference.style = {
      height: 'fit-content',
      minHeight: '1px',
      marginTop: '30px',
      overflow: 'visible',
      display: 'none'
    }
  }
  const showSyncedHeroForm = () => {
    if(syncedContext.pageHeroSynced === 1 ){
      heroPropertyReseter();

      
        if(false || typeof MktoForms2 === "undefined"){
          if($("input#email").val() == 'example.example.example@example.com') $("input#email").val("");
        } else {
          var generalForm = MktoForms2.getForm(syncedFormId);
          if(generalForm.getValues()['Email'] == 'example.example.example@example.com') generalForm.setValues({ Email: ''});
        }
      document.querySelector('#initial-control').setAttribute('display', 'none');

      
      document.querySelector('#default-asset-container').setAttribute('display', 'none').fadeOut(500, function (){
        document.querySelector('#main-form').setAttribute('display', 'block');
      });

      window.location.hash = 'synced-hero';
      scrollToElements();

    }else if( syncedContext.pageHeroSynced === 2 ){
      // WORK TO DO MARKETO POINTER
      window.location.hash = 'hero';
      scrollToElements();
    }



  }

  const scrollToElements = () => {
    syncedContext.mainFormReference.scrollIntoView({ behavior: "smooth" })
  }

  if(syncedContext.pageHeroSynced){
    heroPropertyresetter();
  }

  const subDescriptionSelector = (plan) => {

    if(plan.title == "Plan - Business"){
      return (
        <>
          <p class="c-pricing-hero__sub mb-0 mt-4">Per user, per month. Billed annually.</p>
          <span class="special"></span>
        </>
      )
    }else if(plan.title == "Plan - Basic"){
      return (
        <>
         <p class="c-pricing-hero__sub mb-0 mt-4">Per user, per month. Billed annually.</p> <span style={{display: 'none'}} class="c-pricing-hero__sub billed-monthly">Billed&nbsp;monthly.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <p class="c-pricing-hero__sub mt-0 no-bottom-margin">Or $29/user when billed monthly.</p> <span style={{display: 'none'}} class="c-pricing-hero__sub billed-monthly">Billed&nbsp;monthly.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          {/* <span class="special desc js-pricingannual">Or $24 per user per month up to 3 users. Billed monthly.</span> */}
        </>
      )
    }

    return (
      <>
      <p class="c-pricing-hero__sub mb-0 mt-4 no-bottom-margin">Per user, per month. Billed annually.</p><span style={{display: 'none'}} class="c-pricing-hero__sub billed-monthly">Billed&nbsp;monthly.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      {/*<span class="special desc js-pricingannual">Save $240/user. Billed annually.</span> */}
      </>
    )
  }

  return (
    <section class="c-pricing-hero--cornflower price-hero {{ matrixBlock.reducePadding ? 'h-reduce-padding' : '' }}">
    <div class="fb-data-fetched hot-pink banner container extra-bottom-margin--x-small" style={{display: 'none'}}>
      <div class="row">
        <div class="col-md-10 offset-md-1">
          <p class="content"></p>
        </div>
      </div>
    </div>
  <div id="pricing-hero-copy-headers" class="container" >
      <h2>{ header ? header : "" }</h2>
      <p>{ subHeader ? subHeader : "" }</p>
  </div>
    <div class="container">
      <div class="c-pricing-hero__plans-container square--top--left square--hot-pink circle--bottom--right">
      { pricingPlans.map( plan => {
        console.log('plan', plan)
        return ( 
        <>
          <div class={`c-pricing-hero__plans ${ plan.featured ? 'featured' : '' }`}>
            <div class={`c-pricing-hero__plans__title ${ plan.featured ? 'featured' : plan.planType == 'Business' ? 'background--indigo' : '' }`}>
              {
                plan.featured ?
                  <p class="p-sm">MOST POPULAR</p>
                :
                  ''
              }
              <h3 id={`${ plan.planType }-plan`}>{ plan.planType }</h3>
            </div>
            <div class="c-pricing-hero__plans__content justify-content-between">
              <div class="c-pricing-hero__billing no-top-margin">
                <p class="p-sm">{ plan.paragraph }</p>
                <div class="c-pricing-hero__annual desc js-pricingannual">
                  {
                    plan.planType == 'Basic' ?
                      <span class="strikethru-text">{ plan.billedMonthly }</span>
                    :
                      plan.planType == 'Professional' ?
                        <span class="strikethru-text">{ plan.billedMonthly }</span>
                      :
                        ''
                  }
                  <span>
                    { plan.billedAnnually }
                  </span>
                </div>
                <div class="c-pricing-hero__monthly desc js-pricingmonthly" style={{display: 'none'}}>
                  {
                    plan.planType == "Business" && syncedContext.pageHeroSynced !== undefined && !(syncedContext.pageHeroSynced) ?
                      <>
                        {/** {# <span class="strikethru-text">$119</span> #} */}
                      </>
                    :
                      ''  
                  }
                  <span>{ plan.billedMonthly }</span>
                </div>
                <div class="sub-description">
                  {subDescriptionSelector(plan)}
                </div>
              </div>
              <div class="c-pricing-plans__footer">
                  {
                    plan.cta?.length && removeCtas !== undefined && !removeCtas ?
                    <div class="c-pricing-plans__ctas">
                      {
                        ctas.map( cta => {
                          const buttonColor = cta.buttonColor[0];
                          if( syncedContext.pageHeroSynced !== undefined && syncedContext.pageHeroSynced ){
                            <a class="t-link underline-hot-pink" onclick={ (e) => {showSyncedHeroForm(e)} } >Get Demo</a>
                          }else if(cta.modalTrigger){
                            <a class={`c-button c-button--${ buttonColor ? buttonColor.slug : 'outline' }`} href="/demos" >{ cta.button.text }</a>
                          }else{
                            <a class={`c-button c-button--${ buttonColor ? buttonColor.slug : 'outline' } ${ plan.featured ? 'featured-button' : '' } pricing-cta`} target={ cta.button.target }  href={ cta.button.url } data-plan-type={ plan.planType }>{ cta.button.text }</a>
                          }
                        } )
                      }
                    </div>
                    :
                    ""
                  }                
               
              </div>
            </div>
          </div>
          </>
        )})}
      </div>
    </div>
    <p class="p-xtra-sm">Prices are in USD and don't include taxes and fees where applicable.</p>
</section>
  );
}

export default PricingPlans;