import TextLink from "../CTAS/TextLink";

const TwoColColorConfined = (props) => {
    return(
        <div className="two-col-color-confined">
            <div className="two-col-color-confined__container max-w-7xl bg-eggplant-default">
                <div className="two-col-color-confined__image-container">
                    <picture>
                        <source srcSet={props.image}></source>
                        <img src={props.image} alt={props.image} srcSet={props.image} />
                    </picture>
                </div>
                <div className="two-col-color-confined__text-container">
                    <div className="eyebrow">
                        <p>{props.eyebrow}</p>
                        <p>{props.title}</p>
                        <TextLink url={props.ctaUrl} text={ctaText} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwoColColorConfined;