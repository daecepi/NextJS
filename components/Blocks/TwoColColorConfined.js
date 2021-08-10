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
                        <a class="t-link h-white" href="#">test</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwoColColorConfined;