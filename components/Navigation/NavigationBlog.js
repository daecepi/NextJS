import Script from 'next/script';
const NavigationBlog = (props) => {
  return(
    <>
    <div className="c-side-nav__burger">
      <a className="c-side-nav__logo" href="/resources" >
        <img alt="Side nav logo" src="/imgs/blog/side-nav-logo.svg" />
        <a href="/" className="round-logo-cover" style={{
        position: "absolute",
        left: "10px",
        height:"100%"}}></a>
      </a>  
      <a className="c-button blog-nav-style sendUTMsToAmplitude blogCTA" target="_blank" href="/signup" style={{position: "absolute",right: "50px",top: "15px"}}>Try Copper free</a>
      <div className="c-nav--mobile__burger">
        <div id="nav-icon2">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>  
    </div>
    <nav className="c-side-nav">
  <div className="container">
    <a className="c-side-nav__logo" href="/resources" >
      <img alt="Side nav logo" src="/imgs/blog/side-nav-logo.svg" />
      <a href="/" className="round-logo-cover" style={{
      position: "absolute",
      left: "38px",
      top: "24px"}}></a>
    </a>

    <div className="c-side-nav__search__container yext-searchbar-container blog-style">
      <div className="search-bar-menu-delimiter show-delimiter" style={{position:"relative",visibility: "visible",zIndex: "100000"}}>
        <div className="search-bar-container"></div>
        <span className="search-free-open" style={{
        top: "16px",
        right: "10px",
        position: "absolute",
        zIndex: "7"}}></span>
      </div>

    </div>
    <div className="c-side-nav__categories">
        <ul className="c-side-nav__categories__container">
            <li><a className="c-side-nav__link" href="/blog-featured">Featured</a></li>
        </ul>                     
      </div>    
    <div className="c-side-nav__categories">
      <ul className="c-side-nav__categories__container" style={{paddingTop: "0"}}>
        {props.menuCategories.map((item)=>{
          return(
            <li key={item.id}><a className="c-side-nav__link" href={`/${item.uri}`}>{item.title}</a></li>
          )
        })}
      </ul>                     
    </div>

    <div className="c-side-nav__categories">
      <ul className="c-side-nav__categories__container" style={{paddingTop: "0"}}>
        {props.menuBlogFormats.map((item)=>{
          return(
            <li key={item.id}><a className="c-side-nav__link" href={`/${item.uri}`}>{item.title}</a></li>
          )
        })}
      </ul>                     
    </div>



    <div className="c-blog-nav__form">

      <p>Get the latest from Copper Chronicles delivered to your inbox</p>
      <div className="c-form-blog">
        {/* {% import "/components/replacements/_marketo-replacements.html" as localLeadReplacements %}
        <div className="offline-marketo">
          {{ localLeadReplacements.htmlReplacement("mktoForm_1942", 'Lead', entry.slug) }}
        </div> */}
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
          MktoForms2.loadForm("//app-sj17.marketo.com", "763-DVL-293", 1942, function(form) {

            $("#mktoForm_1942 #Email").after('<button type="submit" id="newsletter-submit" className="c-form-blog__submit">'+
            '<i className="material-icons" style="font-family:Material Icons">'+
                'arrow_forward'+
            '</i>'+
          '</button>');
      
            $("#mktoForm_1942 .mktoEmailField").keyup(function() {
              if ($(this).val() != "") {
                $(".material-icons").css({"color":"#3C3F40","transition":"0.5s"});
              } else {
                $(".material-icons").css({"color":"#D9D9D9","transition":"0.5s"});
              }
            });
          
          // Find the button element that you want to attach the event to
          var btn = document.getElementById("newsletter-submit");
          btn.onclick = function() {
              // When the button is clicked, get the form object and submit it
              MktoForms2.whenReady(function (form) {
                  form.submit();
              });
          };
          form.onSuccess(function(x, y) {
            $(".c-form-blog").addClass('h-form-success');
            return false;
          });
          $('.js-form-close').click(function(){
            $('input[name=Email]').val('');
            $(".c-form-blog").removeClass('h-form-success');
          });
        });
        }}>
        
      </Script>
        <div className="online-marketo">
          <form id="mktoForm_1942"></form>
        </div>
        <div className="c-blog__form-success">
          <div className="c-blog__form-success-container">
            <p>Thanks for signing up!</p>
            <i className="material-icons js-form-close">
                close
            </i> 
          </div>     
        </div>  
      </div>
      {/* {% include "blog/newsletter-form.html" %} */}
    </div>

    <div className="c-side-nav__utility">
      <div className="c-side-nav__social">
        {/* <a href="https://www.youtube.com/c/CopperInc" target="_blank">{% include '/icons/social-yt.svg' %}</a>
        <a href="https://www.instagram.com/copperinc/" target="_blank">{% include '/icons/social-ig.svg' %}</a>
        <a href="https://www.facebook.com/CopperInc/" target="_blank">{% include '/icons/social-fb.svg' %}</a>
        <a href="https://twitter.com/copperinc" target="_blank">{% include '/icons/social-tw.svg' %}</a>
        <a href="https://www.linkedin.com/company/copper-inc/" target="_blank">{% include '/icons/social-li.svg' %}</a> */}
    </div>
    <a className="t-link__gray" href="/">copper.com</a>
    </div>

  </div>
</nav>
    </>
  )
}

export default NavigationBlog