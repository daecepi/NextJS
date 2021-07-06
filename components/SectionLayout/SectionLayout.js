const SectionLayout = (props) => {
    return (
        <section className={`w-full ${props.className}`}>
            {props.children}
        </section>
    )
}

export default SectionLayout ;

