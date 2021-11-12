import NavigationDefault from "../components/Navigation/NavigationDefault";

import Script from "next/script";
import Head from "next/head";

const PricingPage = ({ res }) => {
	let priceValidity = new Date(
		new Date().getTime() + 12 * 30 * 24 * 60 * 60 * 1000
	);

	let rawHtml = `
  <body class="ltr pricing">
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

<nav class="c-nav--mobile
 " style="height:fit-content">
 
 <div style="position:relative;height:60px;z-index:99999">
  <a class="c-nav__logo" href="/">
    <svg width="137px" height="27px" viewBox="0 0 137 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs></defs>
      <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Nav" transform="translate(-70.000000, -37.000000)">
          <g id="nav">
            <g id="logo" transform="translate(70.000000, 37.000000)">
              <path d="M22.5269072,20.0350286 C21.1427093,20.0350286 19.8715175,19.7987143 18.7125649,19.3268571 C17.553868,18.8547429 16.5493402,18.1959429 15.7000041,17.3509714 C14.8496454,16.506 14.1874598,15.5052 13.7124247,14.3493429 C13.2376454,13.1934857 13.0001278,11.9201143 13.0001278,10.5279429 C13.0001278,9.11134286 13.2655134,7.78757143 13.7970515,6.5574 C14.328334,5.32697143 15.0633856,4.25854286 16.0027175,3.35108571 C16.9415381,2.44414286 18.0416866,1.72954286 19.3018845,1.20728571 C20.5623381,0.685285714 21.9209691,0.424542857 23.379567,0.424542857 C24.4666763,0.424542857 25.4862887,0.579857143 26.4378928,0.890228571 C27.3887299,1.20137143 28.217101,1.63028571 28.9212165,2.17671429 C29.6255876,2.7234 30.1819258,3.37602857 30.5894639,4.13382857 C30.9972577,4.89265714 31.2010268,5.69391429 31.2010268,6.53862857 C31.2010268,7.48362857 30.9047052,8.27228571 30.3118062,8.90614286 C29.7183959,9.54025714 28.9892247,9.8568 28.1245485,9.8568 C27.2345608,9.8568 26.4933732,9.54642857 25.9004742,8.92491429 C25.3070639,8.30365714 25.0107423,7.52091429 25.0107423,6.57591429 C25.0107423,6.30308571 25.041167,6.04182857 25.1032948,5.79317143 C25.1646557,5.54477143 25.2574639,5.18425714 25.3809526,4.71162857 C25.5046969,4.28965714 25.585233,3.9726 25.6223052,3.76122857 C25.6591216,3.55037143 25.6777856,3.32022857 25.6777856,3.07131429 C25.6777856,2.42537143 25.4686474,1.89694286 25.0519052,1.48705714 C24.6343959,1.07691429 24.1082268,0.871714286 23.4744206,0.871714286 C22.9132247,0.871714286 22.3947258,1.053 21.9199464,1.41428571 C21.4444,1.77531429 21.0297031,2.26774286 20.676367,2.89028571 C20.3225196,3.51385714 20.0420495,4.25442857 19.834701,5.11457143 C19.6276082,5.97445714 19.5240619,6.89014286 19.5240619,7.86162857 C19.5240619,10.1296286 20.0924165,11.9301429 21.2293814,13.2631714 C22.3658351,14.5964571 23.8985773,15.2627143 25.8260742,15.2627143 C26.9134392,15.2627143 27.9018598,15.0577714 28.7918474,14.6478857 C29.681068,14.2377429 30.546,13.5979714 31.3866433,12.7278 L31.8312536,12.9512571 C29.7304124,17.6742 26.6288784,20.0350286 22.5269072,20.0350286" id="Fill-1" fill="#3C3F40"></path>
              <path d="M45.9856874,6.03768857 C45.8734482,4.81497429 45.7172338,3.82934571 45.5170441,3.08028857 C45.3168544,2.38163143 45.0046812,1.83906 44.5795019,1.45206 C44.1540668,1.06531714 43.6409369,0.871945714 43.0411348,0.871945714 C42.4152544,0.871945714 41.8842276,1.06531714 41.4465204,1.45206 C41.0088132,1.83906 40.7022647,2.38163143 40.5271307,3.08028857 C40.3266854,3.87897429 40.1771184,4.88311714 40.077407,6.09348857 C39.9771843,7.30411714 39.9273287,8.68266 39.9273287,10.2298886 C39.9273287,11.7771171 39.9771843,13.1620886 40.077407,14.3848029 C40.1771184,15.6075171 40.3266854,16.6057457 40.5271307,17.3794886 C40.7022647,18.0781457 41.0088132,18.6207171 41.4465204,19.0077171 C41.8842276,19.3942029 42.4152544,19.5878314 43.0411348,19.5878314 C43.6409369,19.5878314 44.1599472,19.3942029 44.5981658,19.0077171 C45.035106,18.6207171 45.3416544,18.0781457 45.5170441,17.3794886 C45.9422235,15.7574314 46.154941,13.3744886 46.154941,10.2298886 C46.154941,8.65823143 46.0981823,7.26040286 45.9856874,6.03768857 M52.4763843,14.1070886 C51.9458689,15.3002314 51.2246235,16.3383171 50.3118812,17.2203171 C49.3988833,18.1025743 48.3199555,18.7927457 47.0740751,19.2895457 C45.8281946,19.7863457 44.4900173,20.0350029 43.0597988,20.0350029 C41.6037575,20.0350029 40.2530524,19.7863457 39.0076833,19.2895457 C37.7618029,18.7927457 36.6823637,18.1025743 35.7698771,17.2203171 C34.8568792,16.3383171 34.1358895,15.3002314 33.605374,14.1070886 C33.0746029,12.9142029 32.8099843,11.62206 32.8099843,10.2298886 C32.8099843,8.83797429 33.0746029,7.54531714 33.605374,6.35243143 C34.1358895,5.15928857 34.8568792,4.12171714 35.7698771,3.23920286 C36.6823637,2.35720286 37.7618029,1.66754571 39.0076833,1.16997429 C40.2530524,0.673174286 41.6037575,0.424517143 43.0597988,0.424517143 C44.4900173,0.424517143 45.8281946,0.673174286 47.0740751,1.16997429 C48.3199555,1.66754571 49.3988833,2.35720286 50.3118812,3.23920286 C51.2246235,4.12171714 51.9458689,5.15928857 52.4763843,6.35243143 C53.0068998,7.54531714 53.2720297,8.83797429 53.2720297,10.2298886 C53.2720297,11.62206 53.0068998,12.9142029 52.4763843,14.1070886" id="Fill-3" fill="#3C3F40"></path>
              <path d="M130.343833,3.28065429 C130.343833,5.09248286 131.804221,6.56128286 133.605673,6.56128286 C135.407124,6.56128286 136.867512,5.09248286 136.867512,3.28065429 C136.867512,1.46882571 135.407124,2.57142856e-05 133.605673,2.57142856e-05 C131.804221,2.57142856e-05 130.343833,1.46882571 130.343833,3.28065429" id="Fill-5" fill="#3C3F40"></path>
              <path d="M0.343833402,5.28065429 C0.343833402,7.09248286 1.80422103,8.56128286 3.60567258,8.56128286 C5.40712412,8.56128286 6.86751175,7.09248286 6.86751175,5.28065429 C6.86751175,3.46882571 5.40712412,2.00002571 3.60567258,2.00002571 C1.80422103,2.00002571 0.343833402,3.46882571 0.343833402,5.28065429" id="Fill-5-Copy" fill="#FF3465"></path>
              <path d="M0.343833402,15.2806543 C0.343833402,17.0924829 1.80422103,18.5612829 3.60567258,18.5612829 C5.40712412,18.5612829 6.86751175,17.0924829 6.86751175,15.2806543 C6.86751175,13.4688257 5.40712412,12.0000257 3.60567258,12.0000257 C1.80422103,12.0000257 0.343833402,13.4688257 0.343833402,15.2806543" id="Fill-5-Copy-2" fill="#FF3465"></path>
              <path d="M67.3655629,16.7168057 C66.7184619,18.1838057 65.8103216,18.9166629 64.6408866,18.9166629 C63.9692412,18.9166629 63.3597237,18.6435771 62.812334,18.0963771 L62.812334,3.40683429 C63.3597237,3.05917714 63.7826021,2.82337714 64.0814804,2.69866286 C64.3798474,2.57446286 64.6779588,2.51223429 64.9770928,2.51223429 C66.0217608,2.51223429 66.8424619,3.22709143 67.4394515,4.65577714 C68.0369526,6.08549143 68.3355753,8.05520571 68.3355753,10.5654343 C68.3355753,13.2003771 68.0118969,15.2505771 67.3655629,16.7168057 M74.7656784,5.70003429 C74.4307505,4.61900571 73.9600619,3.68660571 73.353101,2.90360571 C72.7453732,2.12086286 72.0200371,1.51194857 71.1776041,1.07686286 C70.3344041,0.642034286 69.4055546,0.424491429 68.3897773,0.424491429 C67.4471216,0.424491429 66.5361691,0.610662857 65.6561526,0.98352 C64.7766474,1.35663429 63.828367,1.97814857 62.812334,2.84780571 L62.812334,1.27100571 L62.812334,0.424491429 L53.6636907,3.16460571 L53.6636907,3.33612 L53.6636907,3.71874857 C54.0581897,3.77712 54.3857031,3.86146286 54.6388165,3.97512 C54.9967546,4.13557714 55.3114845,4.38989143 55.5837732,4.73677714 C55.7323175,4.93529143 55.8494144,5.14614857 55.9360866,5.36909143 C56.0222474,5.59229143 56.0902557,5.85277714 56.1398557,6.14977714 C56.1892,6.44729143 56.2262722,6.80009143 56.2510722,7.20946286 C56.2753608,7.61832 56.2881443,8.09557714 56.2881443,8.64046286 L56.2881443,20.42532 L56.2881443,21.9491486 C56.2881443,22.3706057 56.2820082,22.7177486 56.2697361,22.99032 C56.2569526,23.2628914 56.2385443,23.4981771 56.2142557,23.6969486 C56.1892,23.8944343 56.1521278,24.0932057 56.1027835,24.2919771 C56.0288948,24.7625486 55.8678227,25.1343771 55.6208454,25.4069486 C55.3488124,25.7540914 55.0279464,25.9955486 54.6572247,26.1320914 C54.4859258,26.1950914 54.2619588,26.2508914 53.9904371,26.3007771 L53.9904371,26.8952914 L65.1062062,26.8952914 L65.1062062,26.3619771 C64.7740907,26.3195486 64.499501,26.2691486 64.2952206,26.2082057 C63.9242433,26.0968629 63.6279216,25.9070914 63.4057443,25.6368343 C63.2817443,25.4894914 63.1830557,25.3300629 63.109167,25.1580343 C63.034767,24.9854914 62.9731505,24.7646057 62.9238062,24.4946057 C62.8736948,24.2240914 62.8432701,23.8985486 62.8309979,23.5182343 C62.8182144,23.1363771 62.812334,22.6640057 62.812334,22.0990629 L62.812334,18.6926914 C63.456367,19.19052 64.0456866,19.5381771 64.5782474,19.7369486 C65.1113196,19.9354629 65.7366887,20.0349771 66.4561443,20.0349771 C67.6951216,20.0349771 68.8476825,19.7613771 69.9135711,19.2149486 C70.9792041,18.6682629 71.9088206,17.9099486 72.7024206,16.94052 C73.4955093,15.9713486 74.121134,14.8340057 74.5795505,13.5292629 C75.0384784,12.2242629 75.2675588,10.8140914 75.2675588,9.29797714 C75.2675588,7.98037714 75.1003505,6.78106286 74.7656784,5.70003429" id="Fill-8" fill="#3C3F40"></path>
              <path d="M90.3593814,16.7168057 C89.7122804,18.1838057 88.8041402,18.9166629 87.6347052,18.9166629 C86.9630598,18.9166629 86.3535423,18.6435771 85.8061526,18.0963771 L85.8061526,3.40683429 C86.3535423,3.05917714 86.7764206,2.82337714 87.075299,2.69866286 C87.373666,2.57446286 87.6717773,2.51223429 87.9709113,2.51223429 C89.0155794,2.51223429 89.8362804,3.22709143 90.4332701,4.65577714 C91.0307711,6.08549143 91.3293938,8.05520571 91.3293938,10.5654343 C91.3293938,13.2003771 91.0057155,15.2505771 90.3593814,16.7168057 M97.7594969,5.70003429 C97.4245691,4.61900571 96.9538804,3.68660571 96.3469196,2.90360571 C95.7391918,2.12086286 95.0138557,1.51194857 94.1714227,1.07686286 C93.3282227,0.642034286 92.3993732,0.424491429 91.3833402,0.424491429 C90.4409402,0.424491429 89.5299876,0.610662857 88.6499711,0.98352 C87.770466,1.35663429 86.8221856,1.97814857 85.8061526,2.84780571 L85.8061526,1.27100571 L85.8061526,0.424491429 L76.6575093,3.16460571 L76.6575093,3.33612 L76.6575093,3.71874857 C77.0520082,3.77712 77.3795216,3.86146286 77.6326351,3.97512 C77.9905732,4.13557714 78.3053031,4.38989143 78.5775918,4.73677714 C78.7261361,4.93529143 78.843233,5.14614857 78.9299052,5.36909143 C79.016066,5.59229143 79.0840742,5.85277714 79.1336742,6.14977714 C79.1830186,6.44729143 79.2200907,6.80009143 79.2448907,7.20946286 C79.2691794,7.61832 79.2819629,8.09557714 79.2819629,8.64046286 L79.2819629,20.42532 L79.2819629,21.9491486 C79.2819629,22.3706057 79.2758268,22.7177486 79.2635546,22.99032 C79.2507711,23.2628914 79.2323629,23.4981771 79.2080742,23.6969486 C79.1830186,23.8944343 79.1459464,24.0932057 79.0966021,24.2919771 C79.0227134,24.7625486 78.8616412,25.1343771 78.6146639,25.4069486 C78.3426309,25.7540914 78.0217649,25.9955486 77.6510433,26.1320914 C77.4797443,26.1950914 77.2557773,26.2508914 76.9842557,26.3007771 L76.9842557,26.8952914 L88.1000247,26.8952914 L88.1000247,26.3619771 C87.7679093,26.3195486 87.4933196,26.2691486 87.2890392,26.2082057 C86.9180619,26.0968629 86.6217402,25.9070914 86.3995629,25.6368343 C86.2755629,25.4894914 86.1768742,25.3300629 86.1029856,25.1580343 C86.0285856,24.9854914 85.9669691,24.7646057 85.9176247,24.4946057 C85.8675134,24.2240914 85.8370887,23.8985486 85.8248165,23.5182343 C85.812033,23.1363771 85.8061526,22.6640057 85.8061526,22.0990629 L85.8061526,18.6926914 C86.4501856,19.19052 87.0395052,19.5381771 87.5723216,19.7369486 C88.1051381,19.9354629 88.7305072,20.0349771 89.4499629,20.0349771 C90.6889402,20.0349771 91.841501,19.7613771 92.9073897,19.2149486 C93.9730227,18.6682629 94.9026392,17.9099486 95.6962392,16.94052 C96.4890722,15.9713486 97.1149526,14.8340057 97.5733691,13.5292629 C98.0322969,12.2242629 98.2613773,10.8140914 98.2613773,9.29797714 C98.2613773,7.98037714 98.0941691,6.78106286 97.7594969,5.70003429" id="Fill-10" fill="#3C3F40"></path>
              <path d="M130.351836,18.8626114 C130.005659,18.7512686 129.733881,18.5596971 129.536248,18.28764 C129.412248,18.1397829 129.319951,17.9795829 129.258335,17.8062686 C129.196463,17.6332114 129.140982,17.4172114 129.091638,17.1574971 C129.042038,16.89804 129.011102,16.5706971 128.99883,16.1759829 C128.986046,15.7807543 128.980421,15.2983543 128.980421,14.7300686 L128.980421,12.3316971 L128.980421,10.0981543 L128.980421,0.367868571 L119.725675,3.14038286 L119.725675,3.69915429 C120.169263,3.75701143 120.531036,3.84726857 120.806648,3.97095429 C121.164331,4.13166857 121.479828,4.38572571 121.751861,4.73184 C121.900149,4.92958286 122.017246,5.14044 122.103918,5.36312571 C122.190335,5.58632571 122.258087,5.84604 122.308199,6.14304 C122.357032,6.44029714 122.394104,6.79309714 122.41916,7.20169714 C122.443448,7.61004 122.455976,8.08652571 122.455976,8.63115429 L122.455976,14.7213257 C122.455976,15.8851543 122.41916,16.7082686 122.34476,17.1906686 C122.270871,17.6735829 122.134854,18.0387257 121.937221,18.2860971 C121.714788,18.5589257 121.430483,18.7504971 121.084562,18.86184 C120.835028,18.9423257 120.486038,19.0060971 120.044751,19.0539257 L120.044751,19.5504686 L131.265601,19.5504686 L131.265601,19.03824 C130.885931,18.9922114 130.575803,18.9346114 130.351836,18.8626114" id="Fill-12" fill="#3C3F40"></path>
              <path d="M109.66002,0.871842857 C110.401719,0.871842857 110.969562,1.1799 111.365339,1.79524286 C111.76035,2.41007143 112.007583,3.39647143 112.106527,4.7529 C112.130816,5.00438571 112.149735,5.23041429 112.162007,5.43098571 C112.174535,5.63181429 112.186296,5.85115714 112.199335,6.0903 C112.211352,6.32918571 112.217999,6.59892857 112.217999,6.90004286 L112.217999,7.61001429 L106.514766,7.61001429 C106.543146,5.48987143 106.804952,3.84852857 107.306065,2.6991 C107.837348,1.48127143 108.621999,0.871842857 109.66002,0.871842857 Z M118.593645,12.1311 C118.223179,12.7035 117.913818,13.1319 117.667096,13.4173286 C117.419863,13.7035286 117.086214,13.9830429 116.666148,14.2561286 C115.578271,15.0270429 114.256713,15.4119857 112.699937,15.4119857 C108.597966,15.4119857 106.533941,13.0887 106.509141,8.44238571 L118.158238,8.44238571 L118.158238,8.44032857 L118.779005,8.44032857 C118.630717,7.22275714 118.302948,6.11652857 117.796721,5.1219 C117.289983,4.1283 116.641092,3.28281429 115.85056,2.58672857 C115.059261,1.89115714 114.145496,1.35655714 113.107475,0.9837 C112.069455,0.610585714 110.932746,0.424671429 109.697092,0.424671429 C108.288605,0.424671429 106.972416,0.685414286 105.749034,1.20741429 C104.525908,1.72941429 103.456696,2.44427143 102.542931,3.35095714 C101.628399,4.25841429 100.911756,5.32118571 100.392746,6.53875714 C99.8737353,7.75684286 99.6139744,9.06184286 99.6139744,10.4535 C99.6139744,11.8207286 99.8609518,13.0881857 100.355673,14.2561286 C100.849628,15.4248429 101.535847,16.4374714 102.413051,17.2947857 C103.289999,18.1523571 104.327764,18.8235 105.526857,19.3079571 C106.725438,19.7926714 108.016572,20.0351571 109.40077,20.0351571 C110.858346,20.0351571 112.192944,19.7556429 113.404053,19.1963571 C114.614651,18.6368143 115.652671,17.8355571 116.517859,16.7915571 C116.789636,16.4436429 117.030478,16.1204143 117.240638,15.8221286 C117.450288,15.5241 117.642296,15.2132143 117.815129,14.8902429 C117.988218,14.5672714 118.161051,14.2003286 118.334139,13.7904429 C118.506717,13.3800429 118.705117,12.8768143 118.92755,12.2802429 L118.593645,12.1311 Z" id="Fill-14" fill="#3C3F40"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>  </a>
  <div class="c-back js-sub-back">
      <svg width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs></defs>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="baseline-arrow_right_alt-24px" transform="translate(-4.000000, -8.000000)">
                  <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                  <polygon id="Shape" fill="#FFFFFF" fill-rule="nonzero" transform="translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) " points="16.01 11 4 11 4 13 16.01 13 16.01 16 20 12 16.01 8"></polygon>
              </g>
          </g>
      </svg>
  </div>
  <div class="search-bar-menu-delimiter" style="right: 55px;">
      <div class="search-bar-container"></div>
      <span class="search-free-close"></span>
  </div>
    <div class="c-nav--mobile__burger">
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
  <div class="c-nav--mobile__overlay
" style="overflow:hidden;top:0px">

    <div class="c-nav--mobile__links" style="padding-top:160px;">
      <ul>
                                                        <li class="js-dropdown-nav" dropdown-type="product-nav-mobile">Why Copper
                    <svg width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs></defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="baseline-arrow_right_alt-24px" transform="translate(-4.000000, -8.000000)">
                                <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                                <polygon id="Shape" fill="#FF3465" fill-rule="nonzero" transform="translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) " points="16.01 11 4 11 4 13 16.01 13 16.01 16 20 12 16.01 8"></polygon>
                            </g>
                        </g>
                    </svg>
                    </li>
                                    
                                                        <li class="js-dropdown-nav" dropdown-type="industries-nav-mobile">Industry
                    <svg width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs></defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="baseline-arrow_right_alt-24px" transform="translate(-4.000000, -8.000000)">
                                <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                                <polygon id="Shape" fill="#FF3465" fill-rule="nonzero" transform="translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) " points="16.01 11 4 11 4 13 16.01 13 16.01 16 20 12 16.01 8"></polygon>
                            </g>
                        </g>
                    </svg>
                    </li>
                                    
                                                        <li><a href="/pricing">Pricing</a></li>
                                    
                                                        <li><a href="/demos">Demos</a></li>
                                    
                                                        <li class="js-dropdown-nav" dropdown-type="resources-nav-mobile">Resources<!--?xml version="1.0" encoding="UTF-8"?-->
                    <svg width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs></defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="baseline-arrow_right_alt-24px" transform="translate(-4.000000, -8.000000)">
                                <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                                <polygon id="Shape" fill="#FF3465" fill-rule="nonzero" transform="translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) " points="16.01 11 4 11 4 13 16.01 13 16.01 16 20 12 16.01 8"></polygon>
                            </g>
                        </g>
                    </svg>
                    </li>
                                    
                            
                <li>
                    <a class="c-button " style="color: white; margin-top: 32px;" href="https://www.copper.com/signup" data-cy="general-menu-CTA--mobile">Try Free</a>
                    <a class="c-button c-button--outline " style="color: #FF3465; margin-top: 32px;" href="https://app.copper.com/users/sign_in" data-cy="general-menu-CTA--mobile">Login</a>
                </li>
      </ul>
    </div>
    <div class="c-nav--mobile__sub">
                                                        <div class="c-nav__dropdown" id="product-nav-mobile" style="padding-top:160px;">
                        <ul>
                        <span class="c-nav__dropdown__title">Why Copper</span>
                                                            <a class="c-nav__dropdown__item" href="/manage-contacts">
                                    <li>Organize Contacts</li>
                                </a>
                                                            <a class="c-nav__dropdown__item" href="/automate-sales">
                                    <li>Automate Tasks</li>
                                </a>
                                                            <a class="c-nav__dropdown__item" href="/security">
                                    <li>Security and Privacy</li>
                                </a>
                                                            <a class="c-nav__dropdown__item" href="/track-leads">
                                    <li>Track Deals</li>
                                </a>
                                                            <a class="c-nav__dropdown__item" href="/sales-reporting">
                                    <li>Get Reports</li>
                                </a>
                                                            <a class="c-nav__dropdown__item" href="/google-workspace-crm">
                                    <li>Google Workspace CRM</li>
                                </a>
                                                            <a class="c-nav__dropdown__item" href="/project-management-crm">
                                    <li>Manage Projects</li>
                                </a>
                                                            <a class="c-nav__dropdown__item" href="/integrations">
                                    <li>Integrations</li>
                                </a>
                                                    </ul>
                    </div>
                                                                                    <div class="c-nav__dropdown" id="industries-nav-mobile" style="padding-top:160px;">
                        <ul>
                        <span class="c-nav__dropdown__title">Industry</span>
                                                            <a class="c-nav__dropdown__item" href="/industries/agency-crm">
                                    <li>Agencies</li>
                                </a>
                                                            <a class="c-nav__dropdown__item" href="/industries/consulting-crm">
                                    <li>Consulting</li>
                                </a>
                                                            <a class="c-nav__dropdown__item" href="/industries/software-technology-crm">
                                    <li>Technology</li>
                                </a>
                                                            <a class="c-nav__dropdown__item" href="/industries/real-estate-crm">
                                    <li>Real Estate</li>
                                </a>
                                                            <a class="c-nav__dropdown__item" href="/industries/corporate-development-crm">
                                    <li>Corporate Development</li>
                                </a>
                                                    </ul>
                    </div>
                                                                                                                                                                                    <div class="c-nav__dropdown" id="resources-nav-mobile" style="padding-top:160px;">
                        <ul>
                        <span class="c-nav__dropdown__title">Resources</span>
                                                            <a class="c-nav__dropdown__item" href="/library">
                                    <li>Library</li>
                                </a>
                                                            <a class="c-nav__dropdown__item" href="https://community.copper.com/product-updates">
                                    <li>Product Updates</li>
                                </a>
                                                            <a class="c-nav__dropdown__item" target="_blank" href="https://community.copper.com">
                                    <li>Community</li>
                                </a>
                                                            <a class="c-nav__dropdown__item" href="/resources">
                                    <li>Blog</li>
                                </a>
                                                            <a class="c-nav__dropdown__item" href="https://developer.copper.com/">
                                    <li>Developers</li>
                                </a>
                                                            <a class="c-nav__dropdown__item" href="https://support.copper.com">
                                    <li>Help Center</li>
                                </a>
                                                            <a class="c-nav__dropdown__item" href="/webinars">
                                    <li>Webinars</li>
                                </a>
                                                    </ul>
                    </div>
                                                                
    </div>
</div>

</nav>



<nav class="c-nav c-new-nav" style="flex-wrap:wrap;height:fit-content">
   <div class="c-nav__container">
    <div class="container" style="flex-wrap:wrap">
    <div style="width:100%;display:flex;position:relative;">
      <div class="c-nav__logo">
        <a href="/" style="height: 27px;">
          <svg width="137px" height="27px" viewBox="0 0 137 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs></defs>
      <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Nav" transform="translate(-70.000000, -37.000000)">
          <g id="nav">
            <g id="logo" transform="translate(70.000000, 37.000000)">
              <path d="M22.5269072,20.0350286 C21.1427093,20.0350286 19.8715175,19.7987143 18.7125649,19.3268571 C17.553868,18.8547429 16.5493402,18.1959429 15.7000041,17.3509714 C14.8496454,16.506 14.1874598,15.5052 13.7124247,14.3493429 C13.2376454,13.1934857 13.0001278,11.9201143 13.0001278,10.5279429 C13.0001278,9.11134286 13.2655134,7.78757143 13.7970515,6.5574 C14.328334,5.32697143 15.0633856,4.25854286 16.0027175,3.35108571 C16.9415381,2.44414286 18.0416866,1.72954286 19.3018845,1.20728571 C20.5623381,0.685285714 21.9209691,0.424542857 23.379567,0.424542857 C24.4666763,0.424542857 25.4862887,0.579857143 26.4378928,0.890228571 C27.3887299,1.20137143 28.217101,1.63028571 28.9212165,2.17671429 C29.6255876,2.7234 30.1819258,3.37602857 30.5894639,4.13382857 C30.9972577,4.89265714 31.2010268,5.69391429 31.2010268,6.53862857 C31.2010268,7.48362857 30.9047052,8.27228571 30.3118062,8.90614286 C29.7183959,9.54025714 28.9892247,9.8568 28.1245485,9.8568 C27.2345608,9.8568 26.4933732,9.54642857 25.9004742,8.92491429 C25.3070639,8.30365714 25.0107423,7.52091429 25.0107423,6.57591429 C25.0107423,6.30308571 25.041167,6.04182857 25.1032948,5.79317143 C25.1646557,5.54477143 25.2574639,5.18425714 25.3809526,4.71162857 C25.5046969,4.28965714 25.585233,3.9726 25.6223052,3.76122857 C25.6591216,3.55037143 25.6777856,3.32022857 25.6777856,3.07131429 C25.6777856,2.42537143 25.4686474,1.89694286 25.0519052,1.48705714 C24.6343959,1.07691429 24.1082268,0.871714286 23.4744206,0.871714286 C22.9132247,0.871714286 22.3947258,1.053 21.9199464,1.41428571 C21.4444,1.77531429 21.0297031,2.26774286 20.676367,2.89028571 C20.3225196,3.51385714 20.0420495,4.25442857 19.834701,5.11457143 C19.6276082,5.97445714 19.5240619,6.89014286 19.5240619,7.86162857 C19.5240619,10.1296286 20.0924165,11.9301429 21.2293814,13.2631714 C22.3658351,14.5964571 23.8985773,15.2627143 25.8260742,15.2627143 C26.9134392,15.2627143 27.9018598,15.0577714 28.7918474,14.6478857 C29.681068,14.2377429 30.546,13.5979714 31.3866433,12.7278 L31.8312536,12.9512571 C29.7304124,17.6742 26.6288784,20.0350286 22.5269072,20.0350286" id="Fill-1" fill="#3C3F40"></path>
              <path d="M45.9856874,6.03768857 C45.8734482,4.81497429 45.7172338,3.82934571 45.5170441,3.08028857 C45.3168544,2.38163143 45.0046812,1.83906 44.5795019,1.45206 C44.1540668,1.06531714 43.6409369,0.871945714 43.0411348,0.871945714 C42.4152544,0.871945714 41.8842276,1.06531714 41.4465204,1.45206 C41.0088132,1.83906 40.7022647,2.38163143 40.5271307,3.08028857 C40.3266854,3.87897429 40.1771184,4.88311714 40.077407,6.09348857 C39.9771843,7.30411714 39.9273287,8.68266 39.9273287,10.2298886 C39.9273287,11.7771171 39.9771843,13.1620886 40.077407,14.3848029 C40.1771184,15.6075171 40.3266854,16.6057457 40.5271307,17.3794886 C40.7022647,18.0781457 41.0088132,18.6207171 41.4465204,19.0077171 C41.8842276,19.3942029 42.4152544,19.5878314 43.0411348,19.5878314 C43.6409369,19.5878314 44.1599472,19.3942029 44.5981658,19.0077171 C45.035106,18.6207171 45.3416544,18.0781457 45.5170441,17.3794886 C45.9422235,15.7574314 46.154941,13.3744886 46.154941,10.2298886 C46.154941,8.65823143 46.0981823,7.26040286 45.9856874,6.03768857 M52.4763843,14.1070886 C51.9458689,15.3002314 51.2246235,16.3383171 50.3118812,17.2203171 C49.3988833,18.1025743 48.3199555,18.7927457 47.0740751,19.2895457 C45.8281946,19.7863457 44.4900173,20.0350029 43.0597988,20.0350029 C41.6037575,20.0350029 40.2530524,19.7863457 39.0076833,19.2895457 C37.7618029,18.7927457 36.6823637,18.1025743 35.7698771,17.2203171 C34.8568792,16.3383171 34.1358895,15.3002314 33.605374,14.1070886 C33.0746029,12.9142029 32.8099843,11.62206 32.8099843,10.2298886 C32.8099843,8.83797429 33.0746029,7.54531714 33.605374,6.35243143 C34.1358895,5.15928857 34.8568792,4.12171714 35.7698771,3.23920286 C36.6823637,2.35720286 37.7618029,1.66754571 39.0076833,1.16997429 C40.2530524,0.673174286 41.6037575,0.424517143 43.0597988,0.424517143 C44.4900173,0.424517143 45.8281946,0.673174286 47.0740751,1.16997429 C48.3199555,1.66754571 49.3988833,2.35720286 50.3118812,3.23920286 C51.2246235,4.12171714 51.9458689,5.15928857 52.4763843,6.35243143 C53.0068998,7.54531714 53.2720297,8.83797429 53.2720297,10.2298886 C53.2720297,11.62206 53.0068998,12.9142029 52.4763843,14.1070886" id="Fill-3" fill="#3C3F40"></path>
              <path d="M130.343833,3.28065429 C130.343833,5.09248286 131.804221,6.56128286 133.605673,6.56128286 C135.407124,6.56128286 136.867512,5.09248286 136.867512,3.28065429 C136.867512,1.46882571 135.407124,2.57142856e-05 133.605673,2.57142856e-05 C131.804221,2.57142856e-05 130.343833,1.46882571 130.343833,3.28065429" id="Fill-5" fill="#3C3F40"></path>
              <path d="M0.343833402,5.28065429 C0.343833402,7.09248286 1.80422103,8.56128286 3.60567258,8.56128286 C5.40712412,8.56128286 6.86751175,7.09248286 6.86751175,5.28065429 C6.86751175,3.46882571 5.40712412,2.00002571 3.60567258,2.00002571 C1.80422103,2.00002571 0.343833402,3.46882571 0.343833402,5.28065429" id="Fill-5-Copy" fill="#FF3465"></path>
              <path d="M0.343833402,15.2806543 C0.343833402,17.0924829 1.80422103,18.5612829 3.60567258,18.5612829 C5.40712412,18.5612829 6.86751175,17.0924829 6.86751175,15.2806543 C6.86751175,13.4688257 5.40712412,12.0000257 3.60567258,12.0000257 C1.80422103,12.0000257 0.343833402,13.4688257 0.343833402,15.2806543" id="Fill-5-Copy-2" fill="#FF3465"></path>
              <path d="M67.3655629,16.7168057 C66.7184619,18.1838057 65.8103216,18.9166629 64.6408866,18.9166629 C63.9692412,18.9166629 63.3597237,18.6435771 62.812334,18.0963771 L62.812334,3.40683429 C63.3597237,3.05917714 63.7826021,2.82337714 64.0814804,2.69866286 C64.3798474,2.57446286 64.6779588,2.51223429 64.9770928,2.51223429 C66.0217608,2.51223429 66.8424619,3.22709143 67.4394515,4.65577714 C68.0369526,6.08549143 68.3355753,8.05520571 68.3355753,10.5654343 C68.3355753,13.2003771 68.0118969,15.2505771 67.3655629,16.7168057 M74.7656784,5.70003429 C74.4307505,4.61900571 73.9600619,3.68660571 73.353101,2.90360571 C72.7453732,2.12086286 72.0200371,1.51194857 71.1776041,1.07686286 C70.3344041,0.642034286 69.4055546,0.424491429 68.3897773,0.424491429 C67.4471216,0.424491429 66.5361691,0.610662857 65.6561526,0.98352 C64.7766474,1.35663429 63.828367,1.97814857 62.812334,2.84780571 L62.812334,1.27100571 L62.812334,0.424491429 L53.6636907,3.16460571 L53.6636907,3.33612 L53.6636907,3.71874857 C54.0581897,3.77712 54.3857031,3.86146286 54.6388165,3.97512 C54.9967546,4.13557714 55.3114845,4.38989143 55.5837732,4.73677714 C55.7323175,4.93529143 55.8494144,5.14614857 55.9360866,5.36909143 C56.0222474,5.59229143 56.0902557,5.85277714 56.1398557,6.14977714 C56.1892,6.44729143 56.2262722,6.80009143 56.2510722,7.20946286 C56.2753608,7.61832 56.2881443,8.09557714 56.2881443,8.64046286 L56.2881443,20.42532 L56.2881443,21.9491486 C56.2881443,22.3706057 56.2820082,22.7177486 56.2697361,22.99032 C56.2569526,23.2628914 56.2385443,23.4981771 56.2142557,23.6969486 C56.1892,23.8944343 56.1521278,24.0932057 56.1027835,24.2919771 C56.0288948,24.7625486 55.8678227,25.1343771 55.6208454,25.4069486 C55.3488124,25.7540914 55.0279464,25.9955486 54.6572247,26.1320914 C54.4859258,26.1950914 54.2619588,26.2508914 53.9904371,26.3007771 L53.9904371,26.8952914 L65.1062062,26.8952914 L65.1062062,26.3619771 C64.7740907,26.3195486 64.499501,26.2691486 64.2952206,26.2082057 C63.9242433,26.0968629 63.6279216,25.9070914 63.4057443,25.6368343 C63.2817443,25.4894914 63.1830557,25.3300629 63.109167,25.1580343 C63.034767,24.9854914 62.9731505,24.7646057 62.9238062,24.4946057 C62.8736948,24.2240914 62.8432701,23.8985486 62.8309979,23.5182343 C62.8182144,23.1363771 62.812334,22.6640057 62.812334,22.0990629 L62.812334,18.6926914 C63.456367,19.19052 64.0456866,19.5381771 64.5782474,19.7369486 C65.1113196,19.9354629 65.7366887,20.0349771 66.4561443,20.0349771 C67.6951216,20.0349771 68.8476825,19.7613771 69.9135711,19.2149486 C70.9792041,18.6682629 71.9088206,17.9099486 72.7024206,16.94052 C73.4955093,15.9713486 74.121134,14.8340057 74.5795505,13.5292629 C75.0384784,12.2242629 75.2675588,10.8140914 75.2675588,9.29797714 C75.2675588,7.98037714 75.1003505,6.78106286 74.7656784,5.70003429" id="Fill-8" fill="#3C3F40"></path>
              <path d="M90.3593814,16.7168057 C89.7122804,18.1838057 88.8041402,18.9166629 87.6347052,18.9166629 C86.9630598,18.9166629 86.3535423,18.6435771 85.8061526,18.0963771 L85.8061526,3.40683429 C86.3535423,3.05917714 86.7764206,2.82337714 87.075299,2.69866286 C87.373666,2.57446286 87.6717773,2.51223429 87.9709113,2.51223429 C89.0155794,2.51223429 89.8362804,3.22709143 90.4332701,4.65577714 C91.0307711,6.08549143 91.3293938,8.05520571 91.3293938,10.5654343 C91.3293938,13.2003771 91.0057155,15.2505771 90.3593814,16.7168057 M97.7594969,5.70003429 C97.4245691,4.61900571 96.9538804,3.68660571 96.3469196,2.90360571 C95.7391918,2.12086286 95.0138557,1.51194857 94.1714227,1.07686286 C93.3282227,0.642034286 92.3993732,0.424491429 91.3833402,0.424491429 C90.4409402,0.424491429 89.5299876,0.610662857 88.6499711,0.98352 C87.770466,1.35663429 86.8221856,1.97814857 85.8061526,2.84780571 L85.8061526,1.27100571 L85.8061526,0.424491429 L76.6575093,3.16460571 L76.6575093,3.33612 L76.6575093,3.71874857 C77.0520082,3.77712 77.3795216,3.86146286 77.6326351,3.97512 C77.9905732,4.13557714 78.3053031,4.38989143 78.5775918,4.73677714 C78.7261361,4.93529143 78.843233,5.14614857 78.9299052,5.36909143 C79.016066,5.59229143 79.0840742,5.85277714 79.1336742,6.14977714 C79.1830186,6.44729143 79.2200907,6.80009143 79.2448907,7.20946286 C79.2691794,7.61832 79.2819629,8.09557714 79.2819629,8.64046286 L79.2819629,20.42532 L79.2819629,21.9491486 C79.2819629,22.3706057 79.2758268,22.7177486 79.2635546,22.99032 C79.2507711,23.2628914 79.2323629,23.4981771 79.2080742,23.6969486 C79.1830186,23.8944343 79.1459464,24.0932057 79.0966021,24.2919771 C79.0227134,24.7625486 78.8616412,25.1343771 78.6146639,25.4069486 C78.3426309,25.7540914 78.0217649,25.9955486 77.6510433,26.1320914 C77.4797443,26.1950914 77.2557773,26.2508914 76.9842557,26.3007771 L76.9842557,26.8952914 L88.1000247,26.8952914 L88.1000247,26.3619771 C87.7679093,26.3195486 87.4933196,26.2691486 87.2890392,26.2082057 C86.9180619,26.0968629 86.6217402,25.9070914 86.3995629,25.6368343 C86.2755629,25.4894914 86.1768742,25.3300629 86.1029856,25.1580343 C86.0285856,24.9854914 85.9669691,24.7646057 85.9176247,24.4946057 C85.8675134,24.2240914 85.8370887,23.8985486 85.8248165,23.5182343 C85.812033,23.1363771 85.8061526,22.6640057 85.8061526,22.0990629 L85.8061526,18.6926914 C86.4501856,19.19052 87.0395052,19.5381771 87.5723216,19.7369486 C88.1051381,19.9354629 88.7305072,20.0349771 89.4499629,20.0349771 C90.6889402,20.0349771 91.841501,19.7613771 92.9073897,19.2149486 C93.9730227,18.6682629 94.9026392,17.9099486 95.6962392,16.94052 C96.4890722,15.9713486 97.1149526,14.8340057 97.5733691,13.5292629 C98.0322969,12.2242629 98.2613773,10.8140914 98.2613773,9.29797714 C98.2613773,7.98037714 98.0941691,6.78106286 97.7594969,5.70003429" id="Fill-10" fill="#3C3F40"></path>
              <path d="M130.351836,18.8626114 C130.005659,18.7512686 129.733881,18.5596971 129.536248,18.28764 C129.412248,18.1397829 129.319951,17.9795829 129.258335,17.8062686 C129.196463,17.6332114 129.140982,17.4172114 129.091638,17.1574971 C129.042038,16.89804 129.011102,16.5706971 128.99883,16.1759829 C128.986046,15.7807543 128.980421,15.2983543 128.980421,14.7300686 L128.980421,12.3316971 L128.980421,10.0981543 L128.980421,0.367868571 L119.725675,3.14038286 L119.725675,3.69915429 C120.169263,3.75701143 120.531036,3.84726857 120.806648,3.97095429 C121.164331,4.13166857 121.479828,4.38572571 121.751861,4.73184 C121.900149,4.92958286 122.017246,5.14044 122.103918,5.36312571 C122.190335,5.58632571 122.258087,5.84604 122.308199,6.14304 C122.357032,6.44029714 122.394104,6.79309714 122.41916,7.20169714 C122.443448,7.61004 122.455976,8.08652571 122.455976,8.63115429 L122.455976,14.7213257 C122.455976,15.8851543 122.41916,16.7082686 122.34476,17.1906686 C122.270871,17.6735829 122.134854,18.0387257 121.937221,18.2860971 C121.714788,18.5589257 121.430483,18.7504971 121.084562,18.86184 C120.835028,18.9423257 120.486038,19.0060971 120.044751,19.0539257 L120.044751,19.5504686 L131.265601,19.5504686 L131.265601,19.03824 C130.885931,18.9922114 130.575803,18.9346114 130.351836,18.8626114" id="Fill-12" fill="#3C3F40"></path>
              <path d="M109.66002,0.871842857 C110.401719,0.871842857 110.969562,1.1799 111.365339,1.79524286 C111.76035,2.41007143 112.007583,3.39647143 112.106527,4.7529 C112.130816,5.00438571 112.149735,5.23041429 112.162007,5.43098571 C112.174535,5.63181429 112.186296,5.85115714 112.199335,6.0903 C112.211352,6.32918571 112.217999,6.59892857 112.217999,6.90004286 L112.217999,7.61001429 L106.514766,7.61001429 C106.543146,5.48987143 106.804952,3.84852857 107.306065,2.6991 C107.837348,1.48127143 108.621999,0.871842857 109.66002,0.871842857 Z M118.593645,12.1311 C118.223179,12.7035 117.913818,13.1319 117.667096,13.4173286 C117.419863,13.7035286 117.086214,13.9830429 116.666148,14.2561286 C115.578271,15.0270429 114.256713,15.4119857 112.699937,15.4119857 C108.597966,15.4119857 106.533941,13.0887 106.509141,8.44238571 L118.158238,8.44238571 L118.158238,8.44032857 L118.779005,8.44032857 C118.630717,7.22275714 118.302948,6.11652857 117.796721,5.1219 C117.289983,4.1283 116.641092,3.28281429 115.85056,2.58672857 C115.059261,1.89115714 114.145496,1.35655714 113.107475,0.9837 C112.069455,0.610585714 110.932746,0.424671429 109.697092,0.424671429 C108.288605,0.424671429 106.972416,0.685414286 105.749034,1.20741429 C104.525908,1.72941429 103.456696,2.44427143 102.542931,3.35095714 C101.628399,4.25841429 100.911756,5.32118571 100.392746,6.53875714 C99.8737353,7.75684286 99.6139744,9.06184286 99.6139744,10.4535 C99.6139744,11.8207286 99.8609518,13.0881857 100.355673,14.2561286 C100.849628,15.4248429 101.535847,16.4374714 102.413051,17.2947857 C103.289999,18.1523571 104.327764,18.8235 105.526857,19.3079571 C106.725438,19.7926714 108.016572,20.0351571 109.40077,20.0351571 C110.858346,20.0351571 112.192944,19.7556429 113.404053,19.1963571 C114.614651,18.6368143 115.652671,17.8355571 116.517859,16.7915571 C116.789636,16.4436429 117.030478,16.1204143 117.240638,15.8221286 C117.450288,15.5241 117.642296,15.2132143 117.815129,14.8902429 C117.988218,14.5672714 118.161051,14.2003286 118.334139,13.7904429 C118.506717,13.3800429 118.705117,12.8768143 118.92755,12.2802429 L118.593645,12.1311 Z" id="Fill-14" fill="#3C3F40"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>        </a>
      </div>

      <ul class="c-nav__links">
                                                    <li class="h-dropdown js-dropdown-nav" data-cy="why-copper-menu-element" dropdown-type="product-nav">
                    Why Copper
                    <span class="carrot">
                        <svg width="6px" height="4px" viewBox="0 0 6 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs></defs>
                        <g id="Website" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Dropdown-Nav" transform="translate(-514.000000, -812.000000)" fill="#FF3465">
                            <g id="::-Industries-v1" transform="translate(0.000000, 764.000000)">
                                <g id="dropdown-nav" transform="translate(113.000000, 0.000000)">
                                <g id="pages" transform="translate(345.000000, 37.000000)">
                                    <g id="product">
                                    <polygon id="dropdown" transform="translate(59.000000, 13.000000) rotate(-270.000000) translate(-59.000000, -13.000000) " points="57 10 61 13 57 16"></polygon>
                                    </g>
                                </g>
                                </g>
                            </g>
                            </g>
                        </g>
                        </svg>
                    </span>
                </li>
                                                                                <li class="h-dropdown js-dropdown-nav" dropdown-type="industries-nav">
                    Industry
                    <span class="carrot">
                        <svg width="6px" height="4px" viewBox="0 0 6 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs></defs>
                        <g id="Website" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Dropdown-Nav" transform="translate(-514.000000, -812.000000)" fill="#FF3465">
                            <g id="::-Industries-v1" transform="translate(0.000000, 764.000000)">
                                <g id="dropdown-nav" transform="translate(113.000000, 0.000000)">
                                <g id="pages" transform="translate(345.000000, 37.000000)">
                                    <g id="product">
                                    <polygon id="dropdown" transform="translate(59.000000, 13.000000) rotate(-270.000000) translate(-59.000000, -13.000000) " points="57 10 61 13 57 16"></polygon>
                                    </g>
                                </g>
                                </g>
                            </g>
                            </g>
                        </g>
                        </svg>
                    </span>
                </li>
                                                                                    <a href="/pricing">
                        <li>
                            Pricing
                        </li>
                    </a>
                                                                                    <a href="/demos">
                        <li>
                            Demos
                        </li>
                    </a>
                                                                                <li class="h-dropdown js-dropdown-nav" dropdown-type="resources-nav">
                    Resources
                    <span class="carrot">
                        <svg width="6px" height="4px" viewBox="0 0 6 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs></defs>
                        <g id="Website" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Dropdown-Nav" transform="translate(-514.000000, -812.000000)" fill="#FF3465">
                            <g id="::-Industries-v1" transform="translate(0.000000, 764.000000)">
                                <g id="dropdown-nav" transform="translate(113.000000, 0.000000)">
                                <g id="pages" transform="translate(345.000000, 37.000000)">
                                    <g id="product">
                                    <polygon id="dropdown" transform="translate(59.000000, 13.000000) rotate(-270.000000) translate(-59.000000, -13.000000) " points="57 10 61 13 57 16"></polygon>
                                    </g>
                                </g>
                                </g>
                            </g>
                            </g>
                        </g>
                        </svg>
                    </span>
                </li>
                                                              </ul>

      <div class="search-bar-menu-delimiter">
          <div class="search-bar-container-desktop" data-cy="search-bar-container-desktop-resources"></div>
          <span class="search-free-close"></span>
      </div>
      <ul class="c-nav__utility">
                        <script>
            /*LazyLoad.js([
            'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js',
            ],function(){
                $('.search-free-open').on('click', function(){
                    $('.search-bar-menu-delimiter').toggleClass('show-delimiter');
                });
                $('.search-free-close').on('click', function(){
                    $('.search-bar-menu-delimiter').removeClass('show-delimiter');
                })
            })*/
        </script>
                    <a id="desktop-nav-main-CTA" class="c-button " href="https://www.copper.com/signup" data-cy="general-menu-CTA">
                <li>
                    Try Free
                </li>
            </a>
                    <a id="desktop-nav-main-CTA" class="c-nav__login " href="https://app.copper.com/users/sign_in" data-cy="general-menu-CTA">
                <li>
                    Login
                </li>
            </a>
              </ul>
      </div>
      <div style="position:relative;width:100%">
                                                          <div class="c-nav__dropdown" data-cy="general-nav-dropdown" id="product-nav" style="top:0px;width:100vw">
                                            <ul>
                                                                                            <a class="c-nav__dropdown__item" href="/manage-contacts">
                                    <img class="c-nav__icon" alt="Icon" src="/imgs/icons/Productivity-2x.png">
                                    <div>
                                        <li>Organize Contacts </li>
                                        <span class="c-nav__dropdown__detail">Keep all your relationships in one central place</span>
                                    </div>
                                </a>
                                                                                                                            <a class="c-nav__dropdown__item" href="/automate-sales">
                                    <img class="c-nav__icon" alt="Icon" src="/imgs/icons/icon-product-implementation@2x.png">
                                    <div>
                                        <li>Automate Tasks </li>
                                        <span class="c-nav__dropdown__detail">Create recurring tasks and notifications</span>
                                    </div>
                                </a>
                                                                                                                            <a class="c-nav__dropdown__item" href="/security">
                                    <img class="c-nav__icon" alt="Icon" src="/imgs/icons/icon-product-security@2x.png">
                                    <div>
                                        <li>Security and Privacy </li>
                                        <span class="c-nav__dropdown__detail">Learn how Copper keeps your data safe</span>
                                    </div>
                                </a>
                                                                                                                                                                                                                                                                                                                                                                                                </ul>
                                            <ul>
                                                                                                                                                                                                                                                                                <a class="c-nav__dropdown__item" href="/track-leads">
                                    <img class="c-nav__icon" alt="Icon" src="/imgs/icons/Insights-2x.png">
                                    <div>
                                        <li>Track Deals </li>
                                        <span class="c-nav__dropdown__detail">Set up the pipeline that works for you</span>
                                    </div>
                                </a>
                                                                                                                            <a class="c-nav__dropdown__item" href="/sales-reporting">
                                    <img class="c-nav__icon" alt="Icon" src="/imgs/icons/Collaboration-2x.png">
                                    <div>
                                        <li>Get Reports <span class="tag--new">UPDATED</span></li>
                                        <span class="c-nav__dropdown__detail">See how your business is doing with custom reports</span>
                                    </div>
                                </a>
                                                                                                                            <a class="c-nav__dropdown__item" href="/google-workspace-crm">
                                    <img class="c-nav__icon" alt="Icon" src="https://copper.objects.frb.io/imgs/icons/icon_Google Workspace.png">
                                    <div>
                                        <li>Google Workspace CRM </li>
                                        <span class="c-nav__dropdown__detail">Manage your contacts, deals, emails and more in one place</span>
                                    </div>
                                </a>
                                                                                                                                                                                                            </ul>
                                            <ul>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <a class="c-nav__dropdown__item" href="/project-management-crm">
                                    <img class="c-nav__icon" alt="Icon" src="/imgs/icons/menu-icon_projects@2x.png">
                                    <div>
                                        <li>Manage Projects </li>
                                        <span class="c-nav__dropdown__detail">Manage your team’s work after the deal is closed</span>
                                    </div>
                                </a>
                                                                                                                            <a class="c-nav__dropdown__item" href="/integrations">
                                    <img class="c-nav__icon" alt="Icon" src="/imgs/icons/Integration-2x.png">
                                    <div>
                                        <li>Integrations </li>
                                        <span class="c-nav__dropdown__detail">Save time by connecting Copper to popular apps and tools</span>
                                    </div>
                                </a>
                                                                                    </ul>
                                        
                                                                                    
    
   
                </div>
                                                                              <div class="c-nav__dropdown" data-cy="general-nav-dropdown" id="industries-nav" style="top:0px;width:100vw">
                                            <ul>
                                                                                            <a class="c-nav__dropdown__item" href="/industries/agency-crm">
                                    <img class="c-nav__icon" alt="Icon" src="/imgs/icons/Media-2x.png">
                                    <div>
                                        <li>Agencies </li>
                                        <span class="c-nav__dropdown__detail">Better client relations for advertising and media agencies.</span>
                                    </div>
                                </a>
                                                                                                                            <a class="c-nav__dropdown__item" href="/industries/consulting-crm">
                                    <img class="c-nav__icon" alt="Icon" src="/imgs/icons/Business-2x.png">
                                    <div>
                                        <li>Consulting </li>
                                        <span class="c-nav__dropdown__detail">Manage clients and deals from one central place.</span>
                                    </div>
                                </a>
                                                                                                                                                                                                                                                                        </ul>
                                            <ul>
                                                                                                                                                                                                                                                                                <a class="c-nav__dropdown__item" href="/industries/real-estate-crm">
                                    <img class="c-nav__icon" alt="Icon" src="/imgs/icons/RealState-2x.png">
                                    <div>
                                        <li>Real Estate </li>
                                        <span class="c-nav__dropdown__detail">Real estate professionals manage more listings with Copper.</span>
                                    </div>
                                </a>
                                                                                                                            <a class="c-nav__dropdown__item" href="/industries/corporate-development-crm">
                                    <img class="c-nav__icon" alt="Icon" src="/imgs/icons/Corp-2x.png">
                                    <div>
                                        <li>Corporate Development </li>
                                        <span class="c-nav__dropdown__detail">Track and manage deals in one place with Copper.</span>
                                    </div>
                                </a>
                                                                                    </ul>
                                            <ul>
                                                                                                                                                                                                                    <a class="c-nav__dropdown__item" href="/industries/software-technology-crm">
                                    <img class="c-nav__icon" alt="Icon" src="/imgs/icons/Software-2x.png">
                                    <div>
                                        <li>Technology </li>
                                        <span class="c-nav__dropdown__detail">Innovate and scale faster with less crm busy work.</span>
                                    </div>
                                </a>
                                                                                                                                                                                                            </ul>
                                        
                                                                                    
    
   
                </div>
                                                                                                                                                  <div class="c-nav__dropdown" data-cy="general-nav-dropdown" id="resources-nav" style="top:0px;width:100vw">
                                            <ul>
                                                                                            <a class="c-nav__dropdown__item" href="/library">
                                    <img class="c-nav__icon" alt="Icon" src="/imgs/icons/icon-resources-events.png">
                                    <div>
                                        <li>Library </li>
                                        <span class="c-nav__dropdown__detail">Books, guides, videos and tools for growing your small business.</span>
                                    </div>
                                </a>
                                                                                                                            <a class="c-nav__dropdown__item" href="https://community.copper.com/product-updates">
                                    <img class="c-nav__icon" alt="Icon" src="/imgs/icons/icon-resources-updates.png">
                                    <div>
                                        <li>Product Updates </li>
                                        <span class="c-nav__dropdown__detail">Get updates on our product, best practices and tips.</span>
                                    </div>
                                </a>
                                                                                                                            <a class="c-nav__dropdown__item" target="_blank" href="https://community.copper.com">
                                    <img class="c-nav__icon" alt="Icon" src="https://copper.objects.frb.io/imgs/icons/icon-resources-community.png">
                                    <div>
                                        <li>Community <span class="tag--new">NEW</span></li>
                                        <span class="c-nav__dropdown__detail">Share product ideas, get answers, and learn from other customers.</span>
                                    </div>
                                </a>
                                                                                                                                                                                                                                                                                                                                    </ul>
                                            <ul>
                                                                                                                                                                                                                                                                                                                                            <a class="c-nav__dropdown__item" href="https://developer.copper.com/">
                                    <img class="c-nav__icon" alt="Icon" src="/imgs/icons/icon-resources-developers.png">
                                    <div>
                                        <li>Developers </li>
                                        <span class="c-nav__dropdown__detail">Use our API to integrate Copper with other apps.</span>
                                    </div>
                                </a>
                                                                                                                            <a class="c-nav__dropdown__item" href="https://support.copper.com">
                                    <img class="c-nav__icon" alt="Icon" src="/imgs/icons/icon-resources-help.png">
                                    <div>
                                        <li>Help Center </li>
                                        <span class="c-nav__dropdown__detail">Browse our knowledge base to find answers.</span>
                                    </div>
                                </a>
                                                                                                                                                </ul>
                                            <ul>
                                                                                                                                                                                                                                                                                <a class="c-nav__dropdown__item" href="/resources">
                                    <img class="c-nav__icon" alt="Icon" src="/imgs/icons/icon-resources-blog.png">
                                    <div>
                                        <li>Blog </li>
                                        <span class="c-nav__dropdown__detail">News, stories and latest thinking on sales, marketing and more.</span>
                                    </div>
                                </a>
                                                                                                                                                                                                                                                    <a class="c-nav__dropdown__item" href="/webinars">
                                    <img class="c-nav__icon" alt="Icon" src="/imgs/icons/icon-resources-webinars.png">
                                    <div>
                                        <li>Webinars </li>
                                        <span class="c-nav__dropdown__detail">Check our schedule and sign up for our online events.</span>
                                    </div>
                                </a>
                                                                                    </ul>
                                        
                                                                                    
    
   
                </div>
                                          
      </div>       
    </div>
  </div>

</nav>        
    

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

                        </div></body>
        `;

	return (
		<>
			<NavigationDefault />

			<Head>
				<title>Copper CRM</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Script src="/js/lazyload.min.js" strategy="beforeInteractive"></Script>
			<div dangerouslySetInnerHTML={{ __html: rawHtml }}></div>
		</>
	);
};

export default PricingPage;
