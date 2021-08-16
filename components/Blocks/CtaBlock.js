import Pills from "../CTAS/Pills";
const CtaBlock = (props) => {
    return(
        <section className='cta-block max-w-7xl m-auto pt-32 pb-32'>
            <div className='cta-block__header max-w-lg text-center m-auto'>
                <h1>{props.header}</h1>
            </div>
            <div className='cta-block__subheader text-center m-auto max-w-lg'>
                <div dangerouslySetInnerHTML={{__html: props.subHeader }}></div>
            </div>
            <div className='cta-block__ctas max-w-5xl m-auto flex flex-wrap justify-center'>
                { props.ctas.map((item)=>{
                    const ctaUrl= item.button.substring(
                        item.button.lastIndexOf('=') + 2, 
                        item.button.lastIndexOf('"') 
                    );
                    const ctaText = item.button.replace(/(<([^>]+)>)/gi, "");
                    return(
                        <div className=' mx-2 mt-3'> 
                            <Pills buttonColor={item.buttonColor} url={ctaUrl} name={ctaText} />
                        </div>
                    )
                }) }
            </div>
        </section>
    )
}

export default CtaBlock;