const ButtonBox = ({ eyebrow, copyHeader, copy, step, buttonGroupSchema }) => {
	return (
		<fieldset class={`c-form step step-${step}`} style={{ boxShadow: "none" }}>
			<div className="container">
				<div className="row">
					<div className="col-md-12 extra-bottom-margin--x-small">
						<pre className="c-eyebrow" style={{ textAlign: "start" }}>
							{eyebrow}
						</pre>
						{copyHeader?.length ? (
							<h2 style={{ fontSize: "51px", lineHeight: "64px" }}>
								{copyHeader}
							</h2>
						) : (
							""
						)}
						{copy?.length ? <p>{copy}</p> : ""}
					</div>
				</div>
				{buttonGroupSchema?.length ? (
					<>
						{buttonGroupSchema.map((button) => {
							return (
								<div className="row">
									<div className="col-md-10 extra-bottom-margin--xx-medium-small">
										{() => {
											if (button.function?.length) {
												return (
													<button
														className="c-button c-button--outline no-bottom-margin"
														style={{
															width: "100%",
															justifyContent: "center",
															outline: "none",
														}}
														onclick={buttonElement.function}
													>
														{buttonElement.text}
													</button>
												);
											} else if (buttonElement.href?.length) {
												return (
													<a
														className="c-button c-button--outline no-bottom-margin"
														style={{
															width: "100%",
															justifyContent: "center",
															outline: "none",
														}}
														href={buttonElement.href}
													>
														{buttonElement.text}
													</a>
												);
											}
											return "";
										}}
									</div>
								</div>
							);
						})}
					</>
				) : (
					""
				)}
			</div>
		</fieldset>
	);
};
export default ButtonBox;
