import Image from "next/image";
import Script from "next/script"
import LoadingComponent from "../Loading/Loading"

const SyncedHero = ( { backgroundColor, heroType, displayVideo, copyRatioVariation, defaultEyebrow, eyebrowSettings, defaultCopy, defaultImage, defaultImageContain, defaultVideoEmbedCode, formId, marketoFormCopy, displayVideoOnSuccess, successMessage, successMessageSpecializations, successImage, successVideoEmbedCode } ) => {
  const successVariation = [];
  
  //newSuccessVariationInfo|json_encode|replace("&#39;","\'")|replace("\u003C","")|replace("\u003Ch2","")|replace("\u003E","")|raw 
  let rawScripts = `
  <script>
  var syncedFormId = '${ matrixBlock.formId ? matrixBlock.formId : '2157' }';
   LazyLoad.js(['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'],function(){
  // Base appeareance
  $('#main-form').css('height','0px');
  $('#main-form').css('min-height','0px');
  $('#main-form').css('margin-top','0px');
  $('#main-form').css('overflow','hidden');
  $('#main-form').css('display','flex');

  var compSize = undefined;
  
  // var tyMsgSelect = JSON.parse('{}'); // HERE

  function shDisplayVariationMessage(formValues){
    $('#defaultVariation').css('display', 'none');

    // Get the number to evaluate from
    var messageNotFound = true;
    var messageDisplayed = true;
    tyMsgSelect.forEach( function (tyVariation){
      var companySize = formValues['companySize'] || formValues.cBcompanymetricsemployees;
      var sizes = companySize.replace('+', '').split('-');
      var maxValue = Math.max(...sizes);
      var minValue = Math.min(...sizes);
      if(tyVariation.variationLogic === 'companySize'){
        if(messageNotFound && tyVariation.variationLogicValue <= maxValue && tyVariation.variationLogicValue >= minValue){ // When we just want to affect the 
          $('#synced-${tyVariation.variationLogic}${tyVariation.variationLogicValue}').first().removeClass('invisible-start');
          messageNotFound = false;
        }else if(messageNotFound && tyVariation.variationLogicComparison.value === 'lessThan' && tyVariation.variationLogicValue >= maxValue){
          $('#synced-${tyVariation.variationLogic}${tyVariation.variationLogicValue}').first().removeClass('invisible-start');
          messageNotFound = false;
        }
      }
    });
    if(messageNotFound){
      $('#synced-default-thank-you').first().removeClass('invisible-start');
    }
    $('#successVariation').css('display', 'block');
    document.getElementById('successVariation').scrollIntoView( {behavior: 'smooth'} );
  }

  function intercomCallUpdate(email, name){

    window.intercomSettings.email = email;
    window.intercomSettings.name = name;

   $.ajax({
        type: "POST",
        url: "/proxy/intercom-calendly.php",
        data: JSON.stringify(window.intercomSettings),
        contentType: "text/json; charset=utf-8",
        dataType: "text",
        success: function (hash) {
            
            window.intercomSettings['user_hash'] = hash;
            //intercomSettings.last_visited_url = "crm-for-real-estate-agents-and-brokers";
            //intercomSettings.last_request_at = parseInt((new Date()).getTime()/1000);

            //Logic for the upate event
            Intercom('update', intercomSettings);
        }
    });

  }
  if(false || typeof MktoForms2 === "undefined"){
  } else {
    MktoForms2.loadForm("https://app-sj17.marketo.com", "763-DVL-293", '${ matrixBlock.formId ? matrixBlock.formId : '2157' }' , function (form){
      //Add an onSuccess handler
      form.onSuccess(function(values, followUpUrl){

        // Preparing intercom fields
        var heroForm = MktoForms2.getForm('${ matrixBlock.formId ? matrixBlock.formId : '2157' }');
        var formSubmitted = heroForm.getValues();
        
        compSize = formSubmitted['companySize'];

        var name = '${formSubmitted['FirstName']} ${formSubmitted['LastName']}';
        //window.location.hash = '#thank-you';
        
        intercomCallUpdate(formSubmitted.Email, name);
        ga('send', 'event', 'Get Demo', 'FormFill', '${ matrixBlock.formId ? matrixBlock.formId : '2164' }');
        //return false to prevent the submission handler from taking the lead to the follow up url.

        shDisplayVariationMessage(formSubmitted);
        return false;
      });
    });

    var syncedFormId = '${ matrixBlock.formId ? matrixBlock.formId : '2157' }';


    MktoForms2.whenReady(function (form){
      $( ".loading-cover" ).each( function () {
        var star = $(this);
        star.css('display', 'none');
      });

      //Test initial manual boot
      // Intercom('boot');

      $("#email-finder-submit").attr("disabled", false);
    });
  }
})

</script>

<script>
  function formUpdater(emailValue){
    $('#Email').each(function () {
      var star = $(this);
      star.val(emailValue).change();
      document.getElementById('Email').dispatchEvent(new Event('input', { bubbles: true }));
    });
  }
  
  function evalExistance(cent){
    var data = {};
    var dataValidate = false;
    if(0 || typeof MktoForms2 === "undefined"){
      data = {FirstName: $('input#fromEmail').val(), FirstName: $('input#FirstName').val(), LastName: $('input#LastName').val(), Phone: $('input#Phone').val(), Email: $('input#email').val(), Company: $('input#Company').val(), CompanySize: $('select#companySize').val() };
    } else {
      var heroForm = MktoForms2.getForm('${ matrixBlock.formId ? matrixBlock.formId : '2157' }');
      data = heroForm.getValues();
      dataValidate = heroForm.validate();
    }
    // console.log(dataValidate);
    // console.log(JSON.stringify(data));
    if(data['FirstName'] !== undefined){
      
      $('#initial-control').css('display', 'none');

      //Check for the validation result of the form
      if(false || typeof MktoForms2 === "undefined"){
        document.querySelector('.mktoButtonWrap > .mktoButton').dispatchEvent(new Event('click', { bubbles: true }));
        Intercom('boot');
        heroForm.submit();
      }else{
        heroPropertyReseter();
        $('#default-asset-container').fadeOut(500, function (){
          $('#main-form').fadeIn(300);
        });
      }
    }else if(data['Email'] !== undefined && !cent){
      // Run common procedure to update email
      var email = document.getElementById('emailFinder').value;
      formUpdater(email);
      evalExistance(true);
    }
    
  }
  function scrollToElements(hash){
    document.getElementById(hash).scrollIntoView({ behavior: "smooth" });
  }
   LazyLoad.js(['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'],function(){
  $("#email-finder-submit").attr("disabled", true);
  $('#successVariation').css('display', 'none');

  function heroPropertyReseter(){
    $('#main-form').css('height','fit-content');
    $('#main-form').css('min-height','1px');
    $('#main-form').css('margin-top','30px');
    $('#main-form').css('overflow','visible');
    $('#main-form').css('display','flex');
  }

  //Form handling
  $('#finder-form').submit(function (e) {
    e.preventDefault();
    evalExistance(false);
  });

})
</script>
  `

  let formId  = `"mktoForm_${formId ? formId : 2157}"`

  for(let i = 0; i < successMessageSpecializations.length ; i++){
    success.push({ variationLogic: i.variationLogic.value, variationLogicComparison: i.variationLogicComparison, variationLogicValue: i.variationLogicValue, vSuccessMessage: i.vSuccessMessage} )
  }
  const contentRatios = {
    normal: {
      copy: " col-md-5 ",
      form: " col-md-6 offset-md-1 "
    },
    copyExtended: {
      copy: " col-md-6 ",
      form: " col-md-5 offset-md-1 "
    }
   };

   let ratioSelectedOnBackend = copyRatioVariation ? copyRatioVariation.value : undefined;

   const specificBackground = backgroundColor?.length ? backgroundColor[0] : 'hot-pink';

   const hardCodedVideo = () => {
     return (
      <div className="wistia_responsive_padding" style="padding:0 0 0 0;position:relative;">
        <script src="https://fast.wistia.com/embed/medias/pmc7iaf2o2.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
        <div className="wistia_responsive_padding" style="padding:0 0 0 0;position:relative;">
          <div className="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
            <div className="wistia_embed wistia_async_pmc7iaf2o2 videoFoam=true" style="height:100%;position:relative;width:100%">
              <div className="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;">
                <img src="https://fast.wistia.com/embed/medias/pmc7iaf2o2/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="Wistia thumbnail" aria-hidden="true" onload="this.parentNode.style.opacity=1;" />
              </div>
            </div>
          </div>
        </div>
      </div>
     );
   }

   const defaultHeroSelector = () => {
     switch (heroType) {
       case "fullImageHero":
         
         break;
       case "halfFullImageHero":
          return (
            <>
            <section id="defaultVariation" className={`c-hero--split landing-hero ${ specificBackground } no-transition synced-variation`}>
            {
              defaultImage?.length > 0 ?
              <>
                <div id="default-asset-container" className="c-image">
                  {
                    defaultImage[0].optimizedLandingImages?.length > 0 ?
                      <Image
                        src={`https:${defaultImage[0].optimizedLandingImages.src}`}
                        // srcSet={props.image[0].optimizedLandingImages.srcset}
                        width={defaultImage[0].optimizedLandingImages.originalImageWidth}
                        height={defaultImage[0].optimizedLandingImages.originalImageHeight}
                      />
                    :
                    <img src={defaultImage[0].url} alt={ defaultImage[0].altText?.length ? defaultImage[0].altText : defaultImage[0].title } />
                  }
                </div>
              </>
              :
              null
            }
            <div className="container">
              <div className="row row--no-reverse">
                <div className={`${ ratioSelectedOnBackend && contentRatios[ratioSelectedOnBackend] ? contentRatios[ratioSelectedOnBackend].copy : contentRatios["normal"].copy  } c-valign--middle synced-hero-copy`} >
                  <div className="hero-text">
                    {
                      defaultEyebrow?.length ?
                      <pre className={`c-eyebrow c-eyebrow--${ eyebrowSettings[0].eyebrowColor && eyebrowSettings[0].eyebrowColor[0] ? eyebrowSettings[0].eyebrowColor[0].slug : 'light' } extra-top-margin--small`}>{ defaultEyebrow }</pre>
                      :
                      null
                    }
                    {
                      defaultCopy ?
                        <div dangerouslySetInnerHTML={{ __html: defaultCopy }}></div>
                      :
                        <>
                          <h2>The real estate CRM that’s move-in ready.</h2>
                          <p>Copper is the CRM of choice for real estate agents and brokers.</p>
                        </>
                    }
                  </div>
                  <div id="initial-control" className="c-hero__buttons c-finder">
                    <form id="finder-form">
                      <input id='emailFinder' className="finder-input" onkeyup="formUpdater(this.value)" type="email" placeholder="Add your email" required />
                      <button id="email-finder-submit" className="c-button c-button--white" type="submit">{ differentTryFreeCtaCopy?.length ? entry.differentTryFreeCtaCopy : 'Get a Demo' }</button>
                    </form>
                  </div>
                </div>

                <div id="main-form"
                      className={`${ ratioSelectedOnBackend && contentRatios[ratioSelectedOnBackend] ? contentRatios[ratioSelectedOnBackend].copy : contentRatios["normal"].copy  } c-valign--middle synced-hero-copy`}
                      style={{position: 'relative', left: '0px', height: 'fit-content', maxHeight: 'none'}}>
                  <Script src="//app-sj17.marketo.com/js/forms2/js/forms2.min.js" strategy="beforeInteractive"></Script>
                              
                  <div className="c-form ">
                    <div className="offline-marketo">
                      {/* localLeadReplacements.htmlReplacement(formId, 'Lead', entry.slug) */}
                    </div>
                    <div className="online-marketo">
                      <LoadingComponent />
                      <form id={`mktoForm_${ formId }`} data-formId={formId} data-formInstance="one" >
                        {
                          marketoFormCopy?.length ?
                            <div dangerouslySetInnerHTML={{ __html: marketoFormCopy }}></div>
                          :
                            <h4>Watch Demo<span className="t-hot-pink">.</span></h4>
                        }
                      </form>
                    </div>
                    
                    <div id="c-thank-you-message" className="invisible-start">
                      {
                        marketoThankYouMessage?.length ?
                          <div dangerouslySetInnerHTML={{ __html: marketoThankYouMessage }}></div> 
                        :
                          <>
                            <h3>Thank <span className="hot-pink t-hot-pink">you</span>.</h3>
                            <p className="p-sm">Someone from our team will be with you shortly</p>  
                          </>
                      }
                    </div>
                  </div>
          
                </div>
              </div>
            </div>
          </section>
            </>
          )
         break;
       default:
         return (
           <>
            <section id="defaultVariation" className={`c-hero--split landing-hero ${ specificBackground } no-transition synced-variation`}>
              <div className="container">
                <div className="row row--no-reverse">
                  <div className={`${ ratioSelectedOnBackend && contentRatios[ratioSelectedOnBackend] ? contentRatios[ratioSelectedOnBackend].copy : contentRatios["normal"].copy  } c-valign--middle synced-hero-copy`} >
                    <div className="hero-text">
                      {
                        defaultEyebrow?.length ?
                        <pre className={`c-eyebrow c-eyebrow--${ eyebrowSettings[0].eyebrowColor && eyebrowSettings[0].eyebrowColor[0] ? eyebrowSettings[0].eyebrowColor[0].slug : 'light' } extra-top-margin--small`}>{ defaultEyebrow }</pre>
                        :
                        null
                      }
                      {
                        defaultCopy ?
                          <div dangerouslySetInnerHTML={{ __html: defaultCopy }}></div>
                        :
                          <>
                            <h2>The real estate CRM that’s move-in ready.</h2>
                            <p>Copper is the CRM of choice for real estate agents and brokers.</p>
                          </>
                      }
                    </div>
                    <div id="initial-control" className="c-hero__buttons c-finder">
                      <form id="finder-form">
                        <input id='emailFinder' className="finder-input" onkeyup="formUpdater(this.value)" type="email" placeholder="Add your email" required />
                        <button id="email-finder-submit" className="c-button c-button--white" type="submit">{ differentTryFreeCtaCopy?.length ? entry.differentTryFreeCtaCopy : 'Get a Demo' }</button>
                      </form>
                    </div>
                  </div>
                  {
                    displayVideo ?
                      <div id="default-asset-container" className={`${ ratioSelectedOnBackend && contentRatios[ratioSelectedOnBackend] ? contentRatios[ratioSelectedOnBackend].copy : contentRatios["normal"].copy } c-valign--middle`}>
                        <div className="c-video ">
                          <div dangerouslySetInnerHTML={{ __html: defaultVideoEmbedCode }}></div>
                        </div>
                      </div>
                    :
                    <div id="default-asset-container" className={`${ ratioSelectedOnBackend && contentRatios[ratioSelectedOnBackend] ? contentRatios[ratioSelectedOnBackend].copy : contentRatios["normal"].copy } c-valign--middle`}>
                      <div className="c-video ">
                        {hardCodedVideo()}
                        </div>
                      </div>
                  }
                  {
                    !displayVideo && defaultImage?.length ?
                      <div id="default-asset-container" className={`${ ratioSelectedOnBackend && contentRatios[ratioSelectedOnBackend] ? contentRatios[ratioSelectedOnBackend].copy : contentRatios["normal"].copy } c-valign--middle c-image invert-sm-spacing c-valign--middle"`} style={{position: "relative", left: "0px"}}>
                        <img style="object-fit: initial; height: auto;" className={`${ imageContain ? 'h-image-contain' : '' }`} src={`${ defaultImage[0].url }`} alt={`${ defaultImage[0].title }`} />
                      </div>
                    :
                    <div id="default-asset-container" className={`${ ratioSelectedOnBackend && contentRatios[ratioSelectedOnBackend] ? contentRatios[ratioSelectedOnBackend].copy : contentRatios["normal"].copy }`}></div>
                  }
                  <div id="main-form"
                        className={`${ ratioSelectedOnBackend && contentRatios[ratioSelectedOnBackend] ? contentRatios[ratioSelectedOnBackend].copy : contentRatios["normal"].copy } c-valign--middle c-image invert-sm-spacing c-valign--middle`}
                        style={{position: 'relative', left: '0px', height: 'fit-content', maxHeight: 'none'}}>
                    <Script src="//app-sj17.marketo.com/js/forms2/js/forms2.min.js" strategy="beforeInteractive" />
                                
                    <div className="c-form ">
                      <div className="offline-marketo">
                        {/* WORK TO DO FORM REPLACEMENT */}
                      </div>
                      <div className="online-marketo">
                        <LoadingComponent />
                        <form id={`mktoForm_${ formId }`} data-formId={`${ formId }`} data-formInstance="one" >
                          {
                            marketoFormCopy?.length ?
                              <div dangerouslySetInnerHTML={{ __html: marketoFormCopy }}></div>
                            :
                              <>
                                <h4>Watch Demo<span className="t-hot-pink">.</span></h4>
                              </>
                          }
                        </form>
                      </div>
                      
                      <div id="c-thank-you-message" className="invisible-start">
                        {
                          marketoThankYouMessage?.length ?
                            <div dangerouslySetInnerHTML={{ __html: marketoThankYouMessage }}></div> 
                          :
                            <>
                              <h3>Thank <span className="hot-pink t-hot-pink">you</span>.</h3>
                              <p className="p-sm">Someone from our team will be with you shortly</p> 
                            </>
                        }
                      </div>
                    </div>
            
                  </div>
                </div>
              </div>
            </section>
           </>
         )
         break;
     }
   }
  return (
    <>

<div id="synced-hero">
  {defaultHeroSelector()}

<section id="successVariation" className={`c-hero--split landing-hero ${ backgroundColor ? backgroundColor.slug : 'hot-pink' } no-transition`}>
  <div className="container">
    <div className="row row--no-reverse">
      <div className="col-md-5 c-valign--middle">

        <div className="hero-text">
          <div id="synced-default-thank-you" className="invisible-start">
            {
              successMessage?.length ?
                <div dangerouslySetInnerHTML={{ __html: marketoFormCopy }}></div>
              :
                <>
                  <h2>Thanks! <br />Watch and see real estate in action. </h2>
                  <p>TBD copy here</p>
                </>
            }
          </div>
          {/** WORK TO DO ALTERNATIVE MESSAGES PERSONALIZATION*/}
        </div>
      </div>
      {
        displayVideoOnSuccess ?
          <div id="final-asset-container" className="col-md-6 offset-md-1 c-valign--middle">
            <div className="c-video ">
              {
                successVideoEmbedCode?.length ?
                  <div dangerouslySetInnerHTML={{ __html: successVideoEmbedCode }}></div>
                :
                  {hardCodedVideo()}
              }
            </div>
          </div>
        :
          defaultImage.length ?
            <div id="final-asset-container" className="col-md-6 offset-md-1 c-valign--middle c-image invert-sm-spacing c-valign--middle" style="position: relative; left: 0px;">
              <img style="object-fit: initial; height: auto;" className={`${ imageContain ? 'h-image-contain' : '' }`} src={`${ defaultImage[0].url }`} alt={`${ defaultImage[0].altText?.length ? defaultImage[0].altText : defaultImage[0].title }`} />
            </div>
          :
            <div id="final-asset-container" className="col-md-6 offset-md-1"></div>
      }
    </div>
  </div>
</section>
</div>
{}
    </>
  )
}

export default SyncedHero;