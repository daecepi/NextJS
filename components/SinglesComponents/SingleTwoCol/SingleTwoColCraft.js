import Link from "next/dist/client/link";
import ImageSimple from "../../Blocks/Simples/ImageSimple";
const SingleTwoColCraft = ({
	forcedImage,
	image,
	webpSource,
	eyebrow,
	title,
	description,
	linkUrl,
	linkText,
}) => {
	return (
		<>
			{/* Customers block */}
			<section class="c-cols no-bottom-padding">
				<div class="container">
					<div class="row">
						<div class="col-md order-2">
							<div class="c-image c-image--center no-embelleshment">
								{forcedImage ? (
									forcedImage
								) : (
									<ImageSimple image={image} webpSource={webpSource} />
								)}
							</div>
						</div>
						<div class="col-md order-1">
							{eyebrow?.length ? <pre className="c-eyebrow">{}</pre> : ""}
							<h2>{title}</h2>
							<p>{description}</p>
							{linkUrl?.length && linkText?.length ? (
								<Link href={linkUrl}>
									<a className="t-link" target="_blank">
										{linkText}
									</a>
								</Link>
							) : (
								""
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default SingleTwoColCraft;
