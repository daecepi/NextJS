import Link from "next/link";
import { linkitButtonPropertyGetter } from "../../../helpers/propertyResolver";

const AdB = ({ eyebrow, pinkPeriodAfterHeader, header, paragraph }) => {
	return (
		<div className="col-12 c-resource-ad1 c-single-column__container c-align--center h-hairline">
			<span className="t-eyebrow">{eyebrow}</span>
			<h2
				className={`${pinkPeriodAfterHeader && "t-resource-period--hot-pink"}`}
			>
				{header}
			</h2>
			<p className="">{paragraph}</p>
			<div className="c-single-column__buttons c-resource-ad1__button">
				{ctas?.length &&
					ctas.map((cta) => {
						console.log("OBTAINED CTA", cta);
						const buttonColor =
							(cta.buttonColor?.length && cta.buttonColor[0]) || undefined;
						if (cta.modalTrigger) {
							const buttonResolved = linkitButtonPropertyGetter(cta.button);
							<Link href="/demos">
								<a
									className={`c-button c-button--${
										buttonColor ? buttonColor.slug : "white"
									}`}
								>
									{buttonResolved?.text || ""}
								</a>
							</Link>;
						}
						return (
							<Link href={buttonResolved.url}>
								<a
									className={`c-button c-button--${
										buttonColor ? buttonColor.slug : "white"
									}`}
									target={buttonResolved.target == 1 ? "_blank" : undefined}
								>
									{cta.button.text}
								</a>
							</Link>
						);
					})}
			</div>
		</div>
	);
};
export default AdB;
