import ModalBase from "./ModalBase/ModalBase";

const ToolsModal = () => {
	return (
		<ModalBase template="about-bio">
			<div className="title row">
				<div className="col-md-12">
					<h3 id="tool-name"></h3>
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-md-6">
					<p id="tool-description" className="p-sm"></p>
				</div>
				<div className="col-12 col-md-5 offset-md-1 tool-data">
					<pre
						className="t-eyebrow t-eyebrow--lightblue"
						id="tool-category"
					></pre>
					<div className="tool-price">
						<h5>Pricing:</h5>
						<p id="tool-price-text" className="p-sm"></p>
					</div>
					<div className="tool-recomendation">
						<h5>Recommended for:</h5>
						<p id="tool-recomendation-text" className="p-sm"></p>
					</div>
				</div>
				<div className="col-12 tool--app-image">
					<img src="" alt="Empty image" width="100%" />
				</div>
			</div>
		</ModalBase>
	);
};

export default ToolsModal;
