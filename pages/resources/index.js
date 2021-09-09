import NavigationBlog from "../../components/Navigation/NavigationBlog"
import Head from 'next/head'
import Script from 'next/script'
import { getBlogCategoriesMenu, getBlogFormats } from "../../lib/api"

const resources = (props) => {
  console.log(props.blogFormats)
  return(
    <div className='ltr resources blog-body'>
      <Head>
        <title>Copper CRM</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://assets.sitescdn.net/answers/v1.5/answers.css" />
      </Head>
      <NavigationBlog 
        menuCategories={props.menuCategory}
        menuBlogFormats={props.blogFormats}
      ></NavigationBlog>
      <Script src='https://assets.sitescdn.net/answers/v1.5/answers.min.js'></Script>
      <Script src='https://cdn.jsdelivr.net/npm/typed.js@2.0.11'></Script>
      <Script src='https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js'></Script>
      <Script 
        src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'
        onLoad={() => {
          $('.blogCTA').on('click', function(e){
            // Setting UTM for this experiment
            // Cookies.set('utm_content', 'blog_header', { domain:  sndleveldomain });
            return 1;
          });

          var apiKey = "adf8d85d3ee2b2a9c35ed2695353d2d6";
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
      $('.yxt-SearchBar-input').attr('placeholder', 'Search...');
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
        $('.Icon--yext_animated_forward').empty();
        $('.Icon--yext_animated_reverse').empty();
      });
      
    },
  })
    $('.search-free-open').on('click', function(){
      $('.search-bar-menu-delimiter').addClass('show-delimiter');
    });
    $('.search-free-close').on('click', function(){
      $('.search-bar-menu-delimiter').removeClass('show-delimiter');
    })
        }}
      ></Script>

      <main id="content" className="c-blog-content no-banner" role="main">
        <div className="c-blog-content__search">
          <div className="yext-searchbar-container blog-style">
            <div className="search-bar-menu-delimiter" data-cy="resources-search-bar-menu-delimiter-desktop" >
              <div className="search-bar-container-desktop"></div>
              <span className="search-free-close"></span>
            </div>
            <span className="search-free-open white-search-start" style={{position: "relative", right: "0px"}} data-cy="resources-search-free-open-desktop"></span>
            <a className="c-button sendUTMsToAmplitude blogCTA" target="_blank" href="/signup" style={{marginLeft: "17px", marginRight: "15px"}}>Try Copper free</a>
          </div>
        </div>
      </main>
    </div>
  )
} 

export default resources

export async function getServerSideProps({ params }) {
  const menuCategory = await getBlogCategoriesMenu();
  const blogFormats = await getBlogFormats();
  return {
    props: {
      menuCategory,
      blogFormats
    }, // will be passed to the page component as props
  };
}