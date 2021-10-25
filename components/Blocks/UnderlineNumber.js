const UnderlineNumbers = ({ image, eyebrow, copy, numbersTable }) => {
	const numberTablePrinter = () => {
		return numbersTable?.length > 0 ? (
			<>
				{numbersTable.map((tableElement, index) => {
					return (
						<>
							(index%2) ?
							<div className="row">
								<div className="c-number col-md-5">
									<span className="t-numbers">{tableElement.number}</span>
									<p>{tableElement.description}</p>
								</div>
								:
								<div className="c-number col-md-5 offset-md-1">
									<span className="t-numbers">{tableElement.number}</span>
									<p>{tableElement.description}</p>
								</div>
							</div>
						</>
					);
				})}
			</>
		) : (
			""
		);
	};

	return (
		<>
			{image && image[0] ? (
				<div className="c-numbers--full">
					<img
						src={contentImage.url}
						className="c-numbers__background-image"
						alt={image[0].altText?.length ? image[0].altText : image[0].title}
					/>
					<div className="c-numbers__container">
						<div className="container">
							<div className="row">
								<div className="col-md-4">
									<pre className="c-eyebrow" style="top:0; margin-left:0;">
										{eyebrow}
									</pre>
									<div dangerouslySetInnerHTML={{ __html: copy }}></div>
								</div>
								<div className="col-md-8">{numberTablePrinter()}</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="c-numbers--full">
					<div
						className="c-numbers__container extra-top-margin--medium"
						style="top: 0px;"
					>
						<div className="container">
							<div className="row">
								<div className="col-md-4">
									<pre className="c-eyebrow" style="top:0; margin-left:0;">
										{eyebrow}
									</pre>
									<div dangerouslySetInnerHTML={{ __html: copy }}></div>
								</div>
								<div className="col-md-8">{numberTablePrinter()}</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default UnderlineNumbers;
