const Card = ({ eyebrow, header, copy }) => {
	return (
		<div className="c-resource-card">
			<div className="c-list-card__card">
				<div className="c-resource-card__content">
					<pre className="c-eyebrow">{eyebrow}</pre>
					<div className="c-resource-card__title">
						<div className="c-resource-card__title-container">
							<h3>{header}</h3>
							<div className="strick-through-title"></div>
						</div>
					</div>
					<div>{copy}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
