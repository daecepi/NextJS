const EmbeddedVideo = ({ slug, embeddedVideoSnippet, stickyNavName }) => {

  return (
    <section id={`${ stickyNavName ? stickyNavName.toLowerCase() : '' }`} class="c-webinar-video">
    <div class="container my-5">
      {
        slug === 'crm-for-real-estate-agents-and-brokers'?
          <div class="c-video col-md-10 offset-md-1 p-0" dangerouslySetInnerHTML={{ __html: embeddedVideoSnippet }}></div>
        :
          <div class="c-video" dangerouslySetInnerHTML={{ __html: embeddedVideoSnippet }}></div>
      }
    </div>
  </section>
  )
}

export default EmbeddedVideo