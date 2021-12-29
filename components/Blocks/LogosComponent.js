const LogoComponent = (props) => {
	return (
		<section
			id=""
			className="c-single-column  bottom-padding-mobile home-proof background--cemento home-logo-module"
		>
			<div
				className="container"
				style={{ paddingLeft: "15px", paddingRight: "15px" }}
			>
				<div
					className="col-md-12"
					style={{ paddingLeft: "15px", paddingRight: "15px" }}
				>
					<div className="text-center extra-bottom-margin--small">
						<p style={{ fontFamily: "Graphik-Regular" }}>{props.title}</p>
					</div>
					<div className="smb-logo-icons ">
						<ul className="logo-section--one-column">{props.children}</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LogoComponent;
