import Script from "next/script";

const FormBox = (
	eyebrow,
	copyHeader,
	copy,
	marketoId,
	executionFunction,
	staticAssetsVersion,
	id
) => {
	return (
		<>
			<style jsx>
				{`
					.c-form .msf-paragraph-form {
						font-size: 20px;
						line-height: 24px;
						font-weight: bold;
						color: #3b3e3f;
					}
				`}
			</style>

			<fieldset
				className="c-form step step-3"
				style="box-shadow: none; padding-bottom: 0px;padding-top: 0px;"
			>
				<div className="container">
					<div className="row">
						<div className="col-md-11 ">
							<pre className="c-eyebrow" style="text-align: start;">
								{eyebrow}
							</pre>
							{copyHeader?.length ? (
								<h2 style={{ fontSize: "52px", lineHeight: "64px" }}>
									{copyHeader}
								</h2>
							) : (
								""
							)}
							{copy?.length ? (
								<p className="msf-paragraph-form">
									{copy}
									<span className="variation-one" style={{ display: "none" }}>
										{" "}
										Tell us how best to reach you.
									</span>
								</p>
							) : (
								""
							)}
						</div>
					</div>
				</div>

				<div className="online-marketo">
					<form
						data-formId={marketoId | length ? marketoId : 2195}
						data-formInstance={id == 1 ? "one" : "two"}
						className="mktoForm yupiii"
						style={{ padding: "0px" }}
					></form>

					<Script src="//app-sj17.marketo.com/js/forms2/js/forms2.min.js"></Script>
				</div>
			</fieldset>

			<Script
				src="https://marketo.clearbit.com/assets/v1/marketo/forms.js"
				data-clearbit-publishable-key="pk_297de2bd498f18ecd1cabfdd7ad4fea9"
				onLoad={() => {
					if (false || typeof MktoForms2 === "undefined") {
					} else {
						/* config area - replace with your instance values */
						var mktoFormConfig = {
							podId: "https://app-sj17.marketo.com",
							munchkinId: "763-DVL-293",
							formIds: [idToUse],
						};

						/* ---- NO NEED TO TOUCH ANYTHING BELOW THIS LINE! ---- */

						function mktoFormChain(config) {
							/* util */
							var arrayify = getSelection.call.bind([].slice);

							/* const */
							var MKTOFORM_ID_ATTRNAME = "data-formId";

							/* fix inter-form label bug! */
							MktoForms2.whenRendered(function (form) {
								var formEl = form.getFormElem()[0],
									rando = "_" + new Date().getTime() + Math.random();

								arrayify(formEl.querySelectorAll("label[for]")).forEach(
									function (labelEl) {
										var forEl = formEl.querySelector(
											'[id="' + labelEl.htmlFor + '"]'
										);
										if (forEl) {
											labelEl.htmlFor = forEl.id = forEl.id + rando;
										}
									}
								);
							});

							/* chain, ensuring only one #mktoForm_nnn exists at a time */
							arrayify(config.formIds).forEach(function (formId) {
								var loadForm = MktoForms2.loadForm.bind(
										MktoForms2,
										config.podId,
										config.munchkinId,
										formId
									),
									formEls = arrayify(
										document.querySelectorAll(
											"[" + MKTOFORM_ID_ATTRNAME + '="' + formId + '"]'
										)
									);

								(function loadFormCb(formEls) {
									var formEl = formEls.shift();
									formEl.id = "mktoForm_" + formId;

									loadForm(function (form) {
										document.querySelectorAll(
											`form[data-formid="${idToUse}"] button[type="submit"]`
										).disabled = true;
										if (
											document.getElementsByName("leadFullName")[0] !==
											undefined
										) {
											document.getElementsByName("leadFullName")[0].pattern =
												"^[a-zA-ZáéíóúñÁÉÍÓÚÑ]{2,40} [a-zA-ZáéíóúñÁÉÍÓÚÑ]{3,40}$";
											document.getElementsByName(
												"leadFullName"
											)[0].required = true;
											document.getElementsByName(
												"leadFullName"
											)[0].autocomplete = "noup";
										}
										function splitFullName(a, b, c) {
											String.prototype.capitalize = function () {
												return this.replace(
													/(^|s)([a-z])/g,
													function (m, p1, p2) {
														return p1 + p2.toUpperCase();
													}
												);
											};
											document.getElementsByName(c)[0].oninput = function () {
												var fullName = document.getElementsByName(c)[0].value;
												if (
													(fullName.match(/ /g) || []).length === 0 ||
													fullName.substring(
														fullName.indexOf(" ") + 1,
														fullName.length
													) === ""
												) {
													var first = fullName.capitalize();
													var last = "null";
												} else if (
													fullName
														.substring(0, fullName.indexOf(" "))
														.indexOf(".") > -1
												) {
													var first =
														fullName
															.substring(0, fullName.indexOf(" "))
															.capitalize() +
														" " +
														fullName
															.substring(
																fullName.indexOf(" ") + 1,
																fullName.length
															)
															.substring(
																0,
																fullName
																	.substring(
																		fullName.indexOf(" ") + 1,
																		fullName.length
																	)
																	.indexOf(" ")
															)
															.capitalize();
													var last = fullName
														.substring(first.length + 1, fullName.length)
														.capitalize();
												} else {
													var first = fullName
														.substring(0, fullName.indexOf(" "))
														.capitalize();
													var last = fullName
														.substring(
															fullName.indexOf(" ") + 1,
															fullName.length
														)
														.capitalize();
												}
												document.getElementsByName(a)[0].value = first;
												document.getElementsByName(b)[0].value = last;
											};
											//Initial Values
											if (
												document.getElementsByName(c)[0].value.length < 2 &&
												document.getElementsByName(b)[0].value.length.length >
													2 &&
												document.getElementsByName(a)[0].value.length.length > 2
											) {
												var first = document
													.getElementsByName(a)[0]
													.value.capitalize();
												var last = document
													.getElementsByName(b)[0]
													.value.capitalize();
												var fullName = first + " " + last;
												document.getElementsByName(c)[0].value = fullName;
											}
										}

										if (
											document.getElementsByName("leadFullName")[0] !==
											undefined
										) {
											document
												.getElementsByName("leadFullName")[0]
												.addEventListener("input", function () {
													splitFullName(
														"FirstName",
														"LastName",
														"leadFullName"
													);
												});
											document
												.getElementsByName("leadFullName")[0]
												.addEventListener("change", function () {
													splitFullName(
														"FirstName",
														"LastName",
														"leadFullName"
													);
												});
										}

										$("#leadFullName").on(
											"autocompleteSelect",
											function (event, node) {
												if (
													document.getElementsByName("leadFullName")[0] !==
													undefined
												) {
													splitFullName(
														"FirstName",
														"LastName",
														"leadFullName"
													);
												}
											}
										);
										form.onSubmit(function () {
											if (
												document.getElementsByName("leadFullName")[0] !==
												undefined
											) {
												splitFullName("FirstName", "LastName", "leadFullName");
											}
										});

										form.onSuccess(function (values, followUpUrl) {
											const regex = new RegExp(
												"^[a-zA-ZáéíóúñÁÉÍÓÚÑ]{2,40} [a-zA-ZáéíóúñÁÉÍÓÚÑ]{3,40}$"
											);

											if (executionFunction.length) {
												window[executionFunction]();
											}

											return false;
										});
										formEl.id = "";
										if (formEls.length) {
											loadFormCb(formEls);
										}
									});
								})(formEls);
							});
						}

						mktoFormChain(mktoFormConfig);
					}
				}}
			></Script>
		</>
	);
};
export default FormBox;
