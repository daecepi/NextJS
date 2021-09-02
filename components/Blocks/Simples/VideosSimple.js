const VideoSimple = ({ embeddedVideo }) => {


  return (<>
    <div class="c-video">
      {
        embeddedVideo ?
          <div dangerouslySetInnerHTML={{ __html: embeddedVideo }}></div>
        : ''
      }
      
    </div>
  </>);
}

export default VideoSimple