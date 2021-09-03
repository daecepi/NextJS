import Image from 'next/image';

const HeroProduct = (props) => {
    return(
        <section className={`c-hero--split background--${props.backgroundColor} product-page`}>
            <div className="c-image">
                <Image layout='fill' className=' object-cover' src={props.imageUrl} ></Image>
                {/* <picture>
                    <img src='/imgs/product/191223_Automate_Hero.png'></img>
                </picture> */}
            {/* <picture>
                <source type="image/webp" srcset="/imgs/product/191223_Automate_Hero.webp"    alt="Automation hero image" />
                <source type="image/png" srcset="/imgs/product/191223_Automate_Hero.png"    alt="Automation hero image" />
                <img     src="/imgs/product/191223_Automate_Hero.png"   alt="Automation hero image" />
            </picture> */}
            </div>
        <div className="container">
            <div className="row">
            <div className="col-md-6 c-valign--middle">
                <pre className="c-eyebrow c-eyebrow--light">{props.eyebrow}</pre>
                <h1 className="t-white">{props.title}</h1>
                <p>{props.copy}</p>
                <div className="c-hero__buttons">
                    <a className="c-button sendUTMsToAmplitude" href={props.ctaOneUrl}>{props.ctaOneText}</a>
                    <a className="c-button c-button--outline"  href={props.ctaTwoUrl}>{props.ctaTwoText}</a>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}

export default HeroProduct