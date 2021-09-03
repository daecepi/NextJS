
const ProductTwoUp = (props) => {
    return(
        <section className="c-cols c-cols-alternate product-page">
            <div className="container">
                {props.children}
            </div>
        </section>
    )
}

export default ProductTwoUp