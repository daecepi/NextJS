const ButtonBox = ({ eyebrow, copyHeader, copy, step, buttonGroupSchema }) => {
	return (
		<fieldset class={`c-form step step-${step}`} style={{ boxShadow: "none" }}>
			<div class="container">
				<div class="row">
					<div class="col-md-12 extra-bottom-margin--x-small">
						<pre class="c-eyebrow" style={{ textAlign: "start" }}>
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
								<div class="row">
									<div class="col-md-10 extra-bottom-margin--xx-medium-small">
										{() => {
											if (button.function?.length) {
												return (
													<button
														class="c-button c-button--outline no-bottom-margin"
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
														class="c-button c-button--outline no-bottom-margin"
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
