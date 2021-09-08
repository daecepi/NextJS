const CallOut = (props) => {
    return(
        <section className="c-single-column">
            <div className="container">
        
            <div className="col-md-10 offset-md-1 c-single-column__container h-hairline">
                {/* <h2>Create something awesome, together.</h2> */}
                <h2>{props.title}</h2>
                <div className="c-single-column__buttons">
                <a className="c-button sendUTMsToAmplitude" href="https://www.copper.com/signup">Try Free</a>
                <a className="c-button c-button--outline" href="/demos">Request Demo</a>
                </div>
            </div>
        
            </div>
        </section>
    )
}

export default CallOut