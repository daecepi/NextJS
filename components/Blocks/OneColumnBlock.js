import { entries } from "cypress/types/lodash";
import ImageSimple from "./Simples/ImageSimple";
import VideoSimple from "./Simples/VideosSimple";

const OneColumnBlock = ({}) => {

  // Scalable copy ratio selector
  let  copyVariationRatios = {
    normal: {
      ratio: "col-md-8 offset-md-2"
    },
    bigger: {
      ratio: "col-md-10 offset-md-1"
    }
  }

  let backgroundColor = matrixBlock.backgroundColor[0].slug || 'white';
  return (
<>
<section id={ stickyNavName.toLowerCase() || '' } class={`c-single-column ${ addBottomPadding ? 'h-padding-bottom' : '' } ${ backgroundColor }`}>
  <div class="container">
    {
      header?.length || subText?.length ?
        <>

    <div class={`${ textRatio?.value?.length && copyVariationRatios[textRatio.value] ? copyVariationRatios[textRatio.value].ratio : 'col-md-8 offset-md-2' }  c-single-column__container ${ configurations?.length > 0 && configurations[0]?.removeSpacingBottom ? 'no-bottom-padding' : '' }`}>
      {
        header?.length ?
        <h2>{ matrixBlock.header }</h2>
        : ''
      }
      {
        subText?.length ?
        <p>{ matrixBlock.subText }</p>
        : ''
      }
    </div>
        </>
      : ''
    }
    {
      copy ?
      <div dangerouslySetInnerHTML={{ __html: copy }}></div>
      : ''
    }
    {
      entries.map(entry => {
        console.log("Entry received ",entry)
        return entry.type === 'Video' ? <VideoSimple {...entry} /> : <ImageSimple {...entry} />
      })
    }
  </div>
</section>
</>
  )
}

export default OneColumnBlock