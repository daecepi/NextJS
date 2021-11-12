import Image from "next/image";
import NumbersTable from "./NumberDescription";

const NumbersSection = (props) => {
	return (
		<div className="c-numbers--full">
			{props.image?.length ? (
				<Image
					src={props.image[0].url}
					width="2880"
					height="1280"
					alt={props.image[0].title}
				></Image>
			) : (
				<Image
					src="/imgs/industry/industry-agency-IMG-04@2x.jpg"
					width="2880"
					height="1280"
					alt="Some alt"
				></Image>
			)}
			{/* <picture>
          <source
            type="image/webp"
            srcSet="/imgs/industry/industry-agency-IMG-04@2x.webp"
            alt="Industry agency image 2"
            className="c-numbers__background-image"
          />
          <source
            type="image/png"
            srcSet="/imgs/industry/industry-agency-IMG-04@2x.jpg"
            alt="Industry agency image 2"
            className="c-numbers__background-image"
          />
          <img
            src="/imgs/industry/industry-agency-IMG-04@2x.jpg"
            alt="Industry agency image 2"
            className="c-numbers__background-image"
          />
        </picture> */}
			<div className="c-numbers__container">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<pre className="c-eyebrow" style={{ top: 0, marginLeft: 0 }}>
								{props.eyebrow}
							</pre>
							<h2 dangerouslySetInnerHTML={{ __html: props.title }}></h2>
						</div>
						<div className="col-md-8">
							<NumbersTable numberBoxes={props.numbersTable} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NumbersSection;
