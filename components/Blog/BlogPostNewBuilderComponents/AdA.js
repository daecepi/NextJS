import CtaGroup from "../../Blocks/Simples/CtaGroup";

const AdA = ({ eyebrow, header, paragraph, cta, ad }) => {
	return (
		<div className="c-resources-media--cta d-flex">
			<div className="c-resources-media__copy">
				{eyebrow?.length && (
					<pre className="c-eyebrow c-eyebrow--dark">{eyebrow}</pre>
				)}
				<h2>{header}</h2>
				<p>{paragraph}</p>
				{cta?.length && <CtaGroup ctas={cta} />}
			</div>
			{ad?.length && (
				<div
					className="c-resources-media__ad"
					style={{ backgroundImage: `url('${ad[0].url}')` }}
				></div>
			)}
		</div>
	);
};

export default AdA;
