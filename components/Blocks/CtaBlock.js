import Pills from "../CTAS/Pills";
const CtaBlock = (props) => {
    return(
        <div className='cta-block max-w-7xl m-auto pt-32 pb-32'>
            <h1 className='cta-block__header'>{props.header}</h1>
            <p className='cta-block__subheader'>{props.subHeader}</p>
            <div className='cta-block__ctas'>
                { props.ctas.map((item)=>{
                    return(
                        <div>
                            <Pills url={item.url} name={item.title} />
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}

export default CtaBlock;