import Image from "next/image";

const TwoUp = (props) => {
	return (
		<>
			<div
				className={`row ${
					props.reverse ? "column-reverse" : "extra-padding--bottom"
				}`}
			>
				<div className={`${props.reverse ? "col-md-6" : "col-md-7 order-2"} `}>
					<div
						className={`${
							props.reverse
								? "c-image c-image--left"
								: "c-image c-image--drop-right"
						} `}
					>
						<Image
							src={props.imageUrl}
							width={props.imageWidth}
							height={props.imageHeight}
						></Image>
						{/* <picture>
                    <source type="image/webp" srcset="/imgs/product/200309_Automate_UI02.webp"  className="drop-right__img img-no-shadow"   alt="Automation image" />
                    <source type="image/png" srcset="/imgs/product/200309_Automate_UI02.png"  className="drop-right__img img-no-shadow"   alt="Automation image" />
                    <img   className="drop-right__img img-no-shadow"   src="/imgs/product/200309_Automate_UI02.png"   alt="Automation image" />
                </picture> */}
					</div>
				</div>
				<div
					className={` ${
						props.reverse
							? "col-md-5 offset-md-1 c-valign--middle"
							: "col-md-5 c-valign--middle order-1"
					} `}
				>
					<pre className="c-eyebrow c-eyebrow--dark">{props.eyebrow}</pre>
					<h2>{props.title}</h2>
					<p>{props.copy}</p>
					{/* <p>{props.bulletList}</p> */}
					{props.bulletLists ? (
						<ul className="bullets--hot-pink">
							{props.bulletLists.map((item, index) => {
								return <li key={index}>{item}</li>;
							})}
						</ul>
					) : null}
				</div>
			</div>
		</>
	);
};

export default TwoUp;
