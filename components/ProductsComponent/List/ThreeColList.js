import Link from "next/link";
const ThreeColList = ({ title, copy, children, linkUrl, linkText }) => {
	return (
		<section className="c-list">
			<div className="container">
				<div className="c-list__header c-align--center">
					<h2 className="col-md-8">{title}</h2>
					{copy ? <p className="col-md-8">{copy}</p> : null}
				</div>
				<div className="row">{children}</div>
				{linkUrl ? (
					<div className="row c-align--center extra-top-margin--small">
						<Link href={linkUrl}>
							<a className="t-link">{linkText}</a>
						</Link>
					</div>
				) : null}
			</div>
		</section>
	);
};

export default ThreeColList;
