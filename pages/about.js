import { getHomepage } from '../lib/api'
import ImageWebpElement from '../components/Singles/ImageWebp'

function About(){
  return (
    <>
      <ImageWebpElement baseUrl="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_IDEO@2x.png" optimizationUrl="https://copper.objects.frb.io/imgs/homepage/logos-module/customer_logo_IDEO@2x.webp" altText="Text image" />
    </>
  );
}


export default About