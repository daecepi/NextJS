import Image from "next/image";
import Link from "next/link";
export default function Customers({ title, companiesLogos }) {
	return (
		<section className="c-single-column text-center">
			<div className="container">
				<div className="c-single-column__container no-bottom-padding">
					<h2 className="col-md-10 offset-md-1 text-md-center">{title}</h2>
					<div className="c-single-column__logo-container">
						{companiesLogos.map((logo) => (
							<Image
								src={logo.imageUrl}
								width={logo.width}
								height={logo.height}
							/>
						))}
					</div>
					<Link href="/customers">
						<a className="t-link">See all customers</a>
					</Link>
				</div>
			</div>
		</section>
	);
}
