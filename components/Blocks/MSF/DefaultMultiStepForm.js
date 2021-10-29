import Script from "next/script";
import ButtonBox from "./ButtonBox";
import FormBox from "./FormBox";

const DefaultMultiStepForm = ({ specialClass, id }) => {
	const idToUse = id ? id : "2195";

	// Form information
	const firstStepButtons = [
		{
			text: "I use Gmail",
			function: "stepMoveWithRegister('UseGmail', 'step-1', 'step-2-opt1')",
		},
		{
			text: "I use another service",
			function: "stepMoveWithRegister('NoGmail','step-1', 'step-2-opt2')",
		},
	];

	let secondFirstStepButtons = [
		{
			text: "More than 6",
			function: "stepWithUserNumber(6,'step-2-opt1', 'step-3')",
		},
		{
			text: "Fewer than 6",
			function: "stepWithUserNumber(1,'step-2-opt1', 'step-3')",
		},
	];

	const thirdFirstStepButtons = [
		{
			text: "Get a Google Workspace account",
			function:
				"redirectLink('WorkspaceRedirect','https://workspace.google.com/')",
		},
	];

	return (
		<>
			<style jsx>
				{`
					.c-form.step {
						padding: 54px;
					}

					.c-form.step h2,
					.c-form.step p {
						text-align: left;
					}

					.c-form.step .container {
						padding: 0px;
					}

					.pink .hero-step-form .c-form.step pre {
						color: #3c3f40;
					}

					.pink .hero-step-form .c-form.step .c-button.c-button--outline {
						border-color: #3c3f40 !important;
						color: #3c3f40 !important;
					}

					@media (max-width: 990px) {
						.c-form.step {
							padding-right: 0px;
							padding-left: 0px;
						}
					}

					.mktoForm .mktoButtonWrap.mktoSimple .mktoButton {
						color: #fff;
						border: 1px solid #75ae4c;
						padding: 0.4em 1em;
						font-size: 1em;
						background-color: #99c47c;
						background-image: -webkit-gradient(
							linear,
							left top,
							left bottom,
							from(#99c47c),
							to(#75ae4c)
						);
						background-image: -webkit-linear-gradient(top, #99c47c, #75ae4c);
						background-image: -moz-linear-gradient(top, #99c47c, #75ae4c);
						background-image: linear-gradient(to bottom, #99c47c, #75ae4c);
					}
					.mktoForm .mktoButtonWrap.mktoSimple .mktoButton:hover {
						border: 1px solid #447f19;
					}
					.mktoForm .mktoButtonWrap.mktoSimple .mktoButton:focus {
						outline: none;
						border: 1px solid #447f19;
					}
					.mktoForm .mktoButtonWrap.mktoSimple .mktoButton:active {
						background-color: #75ae4c;
						background-image: -webkit-gradient(
							linear,
							left top,
							left bottom,
							from(#75ae4c),
							to(#99c47c)
						);
						background-image: -webkit-linear-gradient(top, #75ae4c, #99c47c);
						background-image: -moz-linear-gradient(top, #75ae4c, #99c47c);
						background-image: linear-gradient(to bottom, #75ae4c, #99c47c);
					}
					.step {
						display: none;
					}
					.show-step {
						display: block;
					}
				`}
			</style>

			<div
				className={`multistep-form ${specialClass} multistep-form-${idToUse}`}
			>
				<ButtonBox
					eyebrow={"STEP 1 of 3"}
					copyHeader={"Do you use Gmail for your business?"}
					copy={""}
					step={"1"}
					buttonGroupSchema={firstStepButtons}
				/>

				<ButtonBox
					eyebrow={"STEP 2 of 3"}
					copyHeader={"How many people are in your company?"}
					copy={""}
					step={"2-opt1"}
					buttonGroupSchema={secondFirstStepButtons}
				/>

				<Script
					src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
					onLoad={() => {
						var generalNumberOfSeats = undefined;
						// Step that advances to final form
						function stepWithUserNumber(userCount, origin, objective) {
							Cookies.set("UserCount", userCount, { domain: sndleveldomain });

							// number of seats value for this page
							generalNumberOfSeats = userCount;

							// Preparing the number of seats field
							var numberofSeatsField =
								document.getElementsByName("numberofSeats")[0];

							if (userCount !== undefined && numberofSeatsField !== undefined) {
								numberofSeatsField.value = userCount;
							}

							// Display all of the dependant content on on variation 6+
							document
								.querySelectorAll(".variation-one")
								.forEach(function (element) {
									element.style.display = "inline";
								});
							// console.log(userCount)

							// Modifyng form button text
							if (userCount === 6 && typeof ga !== undefined) {
								// console.log('yes')
								// document.querySelectorAll('form[data-formid="2195"] button[type="submit"]').textContent = "Let's talk!";
								$('form[data-formid="2195"] button[type="submit"]').text(
									"Let's talk!"
								);
								$('form[data-formid="2213"] button[type="submit"]').text(
									"Let's talk!"
								);
								ga("send", "event", "new_flow", "btn_clicked", "more_than_6");
							} else if (userCount === 1 && typeof ga !== undefined) {
								ga("send", "event", "new_flow", "btn_clicked", "less_than_6");
							}

							// Removing disabled property
							$('form[data-formid="2195"] button[type="submit"]').attr(
								"disabled",
								false
							);
							$('form[data-formid="2213"] button[type="submit"]').attr(
								"disabled",
								false
							);

							stepMove(origin, objective);
						}
					}}
				></Script>

				<ButtonBox
					eyebrow={"Copper is a Google CRM"}
					copyHeader={"Copper only works with Google Workspace"}
					copy={
						"Unfortunately Copper is only available to Google Workspace users at this time."
					}
					step={"2-opt2"}
					buttonGroupSchema={thirdFirstStepButtons}
				/>

				<Script
					onLoad={() => {
						async function callbackFunction() {
							if (typeof ga !== undefined) {
								await ga("send", "event", "demos", "demo_request", "new_flow");
							}

							window.location = "/general-success";
						}
					}}
				></Script>
				<FormBox
					eyebrow={"STEP 3 of 3"}
					copyHeader={""}
					copy={"Looks like Copper could be a good fit for your business!"}
					marketoId={marketoFormIdToUse}
					executionFunction={"callbackFunction"}
					staticAssetsVersion={
						craft.config.environmentVariables.staticAssetsVersion
					}
					id={idToUse}
				/>
			</div>

			<Script
				src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
				onLoad={() => {
					// Initializacion step
					$(`.step-1`).fadeIn();

					async function redirectLink(tEvent, url) {
						if (tEvent == "WorkspaceRedirect" && typeof ga !== undefined) {
							await ga(
								"send",
								"event",
								"new_flow",
								"btn_clicked",
								"get_google_account"
							);
						}

						window.location.href = url;
					}

					function stepMoveWithRegister(tEvent, current, nextStep) {
						if (tEvent === "UseGmail" && typeof ga !== undefined) {
							ga("send", "event", "new_flow", "btn_clicked", "uses_gmail");
						} else if (tEvent === "NoGmail" && typeof ga !== undefined) {
							ga("send", "event", "new_flow", "btn_clicked", "uses_other");
						}

						stepMove(current, nextStep);
					}

					function stepMove(current, nextStep) {
						var target = event.currentTarget;
						$(target).parents(".hero-step-form").find(`.${current}`).hide();
						$(target).parents(".hero-step-form").find(`.${nextStep}`).fadeIn();
					}
				}}
			></Script>
		</>
	);
};

export default DefaultMultiStepForm;
