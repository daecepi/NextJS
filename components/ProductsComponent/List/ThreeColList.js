import Link from "next/link";
const ThreeColList = (props) => {
	return (
		<section className="c-list">
			<div className="container">
				<div className="c-list__header c-align--center">
					<h2 className="t-center col-md-8">{props.title}</h2>
					{props.copy ? (
						<p className="t-center col-md-8">{props.copy}</p>
					) : null}
				</div>
				<div className="row">{props.children}</div>
				{props.linkUrl ? (
					<div className="row c-align--center extra-top-margin--small">
						<Link href={props.linkUrl}>
							<a className="t-link">{props.linkText}</a>
						</Link>
					</div>
				) : null}
			</div>
		</section>
	);
};

export default ThreeColList;
