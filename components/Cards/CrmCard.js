import Image from "next/image";
import { linkitButtonPropertyGetter } from "../../helpers/propertyResolver";
const CrmCard = ({ name, copy, link, logo }) => {
	const linkObject = linkitButtonPropertyGetter(link);
	return (
		<>
			<a href={linkObject.href} target="_blank" className="col-md-4 card__mobile-top-margin">
				<div className="c-list-card__card c-list-card__card--centered no-margin">
					<div className="c-list-card__image c-list-card__image--text c-valign--middle justify-content-center">
						{logo ? (
							<picture style={{ margin: "0 auto" }}>
								<Image src={`https:${logo.url}`} width="806" height="734" alt={logo.title} />
							</picture>
						) : (
							<picture>
								<source type="image/webp" srcset="/local/DSC00046-2-small.jpg-min.webp" alt="Special image" />
								<source type="image/png" srcset="/local/DSC00046-2-small.jpg-min.jpg" alt="Special image" />
								<img src="/local/DSC00046-2-small.jpg-min.jpg" alt="Special image" />
							</picture>
						)}
					</div>
					{copy && <p className="p-sm">{copy}</p>}
					<div className="c-card__meta c-card__meta--noline c-card__meta--nopadding ">
						<p className="t-link">Learn More</p>
					</div>
				</div>
			</a>
		</>
	);
};

export default CrmCard;
