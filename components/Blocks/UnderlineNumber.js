const UnderlineNumbers = ({ image, eyebrow, copy, numbersTable }) => {
	const numberTablePrinter = () => {
		return numbersTable?.length > 0 ? (
			<>
				{numbersTable.map((tableElement, index) => {
					return (
						<>
							(index%2) ?
							<div class="row">
								<div class="c-number col-md-5">
									<span class="t-numbers">{tableElement.number}</span>
									<p>{tableElement.description}</p>
								</div>
								:
								<div class="c-number col-md-5 offset-md-1">
									<span class="t-numbers">{tableElement.number}</span>
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
				<div class="c-numbers--full">
					<img
						src={contentImage.url}
						class="c-numbers__background-image"
						alt={image[0].altText?.length ? image[0].altText : image[0].title}
					/>
					<div class="c-numbers__container">
						<div class="container">
							<div class="row">
								<div class="col-md-4">
									<pre class="c-eyebrow" style="top:0; margin-left:0;">
										{eyebrow}
									</pre>
									<div dangerouslySetInnerHTML={{ __html: copy }}></div>
								</div>
								<div class="col-md-8">{numberTablePrinter()}</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div class="c-numbers--full">
					<div
						class="c-numbers__container extra-top-margin--medium"
						style="top: 0px;"
					>
						<div class="container">
							<div class="row">
								<div class="col-md-4">
									<pre class="c-eyebrow" style="top:0; margin-left:0;">
										{eyebrow}
									</pre>
									<div dangerouslySetInnerHTML={{ __html: copy }}></div>
								</div>
								<div class="col-md-8">{numberTablePrinter()}</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default UnderlineNumbers;
