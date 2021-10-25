import Script from "next/script";

// Importants make pageherosynced available
import { useSyncContext } from "../../../../contexts/SyncContext";

const FormBase = ({
	heroMarketoId,
	marketoFormCopy,
	marketoThankYouMessage,
	successVideoEmbedCode,
}) => {
	const syncedContext = useSyncContext();

	const pageHeroSynced = syncedContext.pageHeroSynced;

	return (
		<>
			<Script
				async
				src="//app-sj17.marketo.com/js/forms2/js/forms2.min.js"
			></Script>

			<div
				id="c-form--default-hero"
				class={`c-form c-form-mkto${heroMarketoId ? heroMarketoId : "2157"}`}
			>
				<div class="offline-marketo">
					{/*{% set formId = `mktoForm_#${ heroMarketoId ? heroMarketoId : '2157' }` %}
    {{ localLeadReplacements.htmlReplacement(formId, 'Lead', entry.slug) }}*/}
				</div>
				<div class="online-marketo">
					<LoadingComponent />
					<form
						id={`mktoForm_${heroMarketoId ? heroMarketoId : "2157"}`}
						data-formId={`${heroMarketoId ? heroMarketoId : "2157"}`}
						data-formInstance="two"
					>
						{() => {
							if (pageHeroSynced && pageHeroSynced == 1) {
								return (
									<h4>
										Watch Demo<span class="t-hot-pink">.</span>
									</h4>
								);
							} else if (marketoFormCopy?.length) {
								return (
									<div
										style={{ fontFamily: "Graphik-Medium", padding: "15px" }}
										dangerouslySetInnerHTML={{ __html: marketoFormCopy }}
									></div>
								);
							}
							return "";
						}}
					</form>
				</div>
				<div
					id="c-thank-you-message--default-hero"
					class="c-thank-you-message--default-hero invisible-start"
				>
					{marketoThankYouMessage?.length ? (
						<>
							<div dangerouslySetInnerHTML={{ marketoThankYouMessage }}></div>
							<div
								dangerouslySetInnerHTML={{ __html: successVideoEmbedCode }}
							></div>
						</>
					) : (
						<>
							<h3>
								Thank you<span class="hot-pink t-hot-pink">.</span>
							</h3>
							<p class="p-sm">Someone from our team will be with you shortly</p>
							<div
								dangerouslySetInnerHTML={{ __html: successVideoEmbedCode }}
							></div>
						</>
					)}
				</div>
			</div>

			<Script
				strategy="lazyOnLoad"
				onLoad={() => {
					MktoForms2.loadForm(
						"https://app-sj17.marketo.com",
						"763-DVL-293",
						`${heroMarketoId ? heroMarketoId : "2157"}`,
						function (form) {
							//Add an onSuccess handler
							form.onSuccess(function (values, followUpUrl) {
								//get the form's jQuery element and hide it
								form.getFormElem().hide();
								$(".c-thank-you-message--default-hero").each(function () {
									var element = $(this);

									element.toggleClass("m-fade-in");
									element.removeClass("invisible-start");

									if (pageHeroSynced && pageHeroSynced == "1") {
										$("#c-form--default-hero")
											.css("background", "transparent")
											.css("box-shadow", "none");
										$(".c-thank-you-message--default-hero").css(
											"color",
											"white"
										);
										$(
											".c-thank-you-message--default-hero>h3, #c-thank-you-message--default-hero>h4, #c-thank-you-message--default-hero>p"
										).css("color", "white");
									}
								});

								if (ga) {
									ga(
										"send",
										"event",
										"Get Demo",
										"FormFill",
										`${heroMarketoId ? heroMarketoId : 2157}`
									);
								}

								//return false to prevent the submission handler from taking the lead to the follow up url.
								return false;
							});
						}
					);

					MktoForms2.whenReady(function (form) {
						$(".loading-cover").each(function () {
							var loadingElement = $(this);
							loadingElement.css("display", "none");

							if (pageHeroSynced && pageHeroSynced == "1") {
								$(`.c-form-mkto${heroMarketoId ? heroMarketoId : 2157}`).css(
									"display",
									"block"
								);
							}
						});
					});
				}}
			/>
		</>
	);
};

export default FormBase;
