import { React } from "React";

const DefaultMSFormBox = () => {
	let code = ``` {/* Pass this to tailwind */}
  <style>
    .c-form .msf-paragraph-form{
      font-size: 20px;
      line-height: 24px;
      font-weight: bold;
      color: #3B3E3F;
    }
  </style>

  {/* HTML component */}
  <fieldset className="c-form step step-3" style="box-shadow: none; padding-bottom: 0px;padding-top: 0px;">

<div className="container">
<div className="row">
  <div className="col-md-11 ">
    <pre className="c-eyebrow" style="text-align: start;">{{ eyebrow }}</pre>
    {% if copyHeader|length %}
      <h2 style="font-size: 52px; line-height: 64px;">{{ copyHeader }}</h2>
    {% endif %}
    {% if copy|length %}
      <p className="msf-paragraph-form">{{copy}}<span className="variation-one"  style="display: none;"> Tell us how best to reach you.</span></p>
    {% endif %}
  </div>
</div>
</div>

{% import "/components/replacements/_marketo-replacements.html" as localLeadReplacements %}
{% from "/components/replacements/_marketo-replacements.html" import errorList %}
<div className="online-marketo">
  <form id="mktoForm_{{ marketoId|length ? marketoId : 2195 }}" data-formId="{{ marketoId|length ? marketoId : 2195 }}" data-formInstance="one" className="mktoForm" style="padding: 0px;"></form>

  <script src="//app-sj17.marketo.com/js/forms2/js/forms2.min.js"></script>
  <script src="https://marketo.clearbit.com/assets/v1/marketo/forms.js"
    data-clearbit-publishable-key="pk_297de2bd498f18ecd1cabfdd7ad4fea9"></script>
</div>
<div className="offline-marketo">
<style>
  @media (min-width: 990px){
    #{{ marketoId|length ? marketoId : 2195 }} .mktoLabel{
      top: 17px;
    }
  }
</style>
  <form method="post" accept-charset="UTF-8" id="mktoForm_{{ marketoId|length ? marketoId : 2195 }}" className="mktoForm" style="padding: 0px;">

    {{ csrfInput() }}
    {# Default send to plugin action #}
    <input type="hidden" name="action" value="contact-form/send" />

    <input id="subject" type="hidden" name="subject" value="New lead captured while marketo was offline" />
    {{ message is defined and message ? errorList(message.getErrors('subject')) }}

    {# Page saving saving #}
    <input id="page-origin-field" type="hidden" name="message[PageOrigin]" value="Copper.com/demos" />

    {# Utm hidden fields #}
    <input id="utm-source-field" type="hidden" name="message[UtmSource]" value="Not defined" />
    <input id="utm-term-field" type="hidden" name="message[UtmTerm]" value="Not defined" />
    <input id="utm-adgroup-field" type="hidden" name="message[UtmAdgroup]" value="Not defined" />
    <input id="utm-medium-field" type="hidden" name="message[UtmMedium]" value="Not defined" />
    <input id="utm-campaign-field" type="hidden" name="message[UtmCampaign]" value="Not defined" />
    <input type="hidden" name="numberofSeats" id="numberofSeats" />
    
    <div className="mktoFormRow"><div className="mktoFieldDescriptor mktoFormCol" style="margin-bottom: 10px;">
      <div className="mktoOffset" style="width: 10px;"></div>
      <div className="mktoFieldWrap mktoRequiredField">
        <label for="BusinessEmail" id="LblLastName" className="mktoLabel mktoHasWidth" style="width: 250px;">
          <div className="mktoAsterix">*</div>Business email</label><div className="mktoGutter mktoHasWidth" style="width: 10px;"></div>
          <input id="BusinessEmail" name="message[BusinessEmail]" placeholder="example@gmail.com" maxlength="255" aria-labelledby="LblBusinessEmail InstructBusinessEmail" type="email" className="mktoField mktoTextField mktoHasWidth mktoRequired mktoInvalid" aria-required="true" style="width: 250px;" aria-invalid="true"><span id="InstructLastName" tabindex="-1" className="mktoInstruction"></span><div className="mktoClear"></div></div><div className="mktoClear"></div></div><div className="mktoClear"></div>
    </div>
    <div className="mktoFormRow"><div className="mktoFieldDescriptor mktoFormCol" style="margin-bottom: 10px;">
      <div className="mktoOffset" style="width: 10px;"></div>
      <div className="mktoFieldWrap mktoRequiredField">
        <label for="FullName" id="LblFullName" className="mktoLabel mktoHasWidth" style="width: 250px;">
          <div className="mktoAsterix">*</div>Full Name</label><div className="mktoGutter mktoHasWidth" style="width: 10px;"></div>
          <input pattern="^[a-zA-ZáéíóúñÁÉÍÓÚÑ]{2,40} [a-zA-ZáéíóúñÁÉÍÓÚÑ]{3,40}$" id="FullName" name="message[FullName]" placeholder="John Doe" maxlength="255" aria-labelledby="LblFullName InstructFullName" type="text" className="mktoField mktoTextField mktoHasWidth mktoRequired mktoInvalid" aria-required="true" style="width: 250px;" aria-invalid="true"><span id="InstructLastName" tabindex="-1" className="mktoInstruction"></span><div className="mktoClear"></div></div><div className="mktoClear"></div></div><div className="mktoClear"></div>
    </div>
    <div className="mktoFormRow"><div className="mktoFieldDescriptor mktoFormCol" style="margin-bottom: 10px;">
      <div className="mktoOffset" style="width: 10px;"></div>
      <div className="mktoFieldWrap mktoRequiredField">
        <label for="PhoneNumber" id="LblLastName" className="mktoLabel mktoHasWidth" style="width: 250px;">
          <div className="mktoAsterix">*</div>Phone Number</label><div className="mktoGutter mktoHasWidth" style="width: 10px;"></div>
          <input id="PhoneNumber" name="message[PhoneNumber]" placeholder="(XXX) XXX–XXXX" maxlength="255" aria-labelledby="LblPhoneNumber InstructPhoneNumber" type="number" min="999999999" className="mktoField mktoTextField mktoHasWidth mktoRequired mktoInvalid" aria-required="true" style="width: 250px;" aria-invalid="true"><span id="InstructLastName" tabindex="-1" className="mktoInstruction"></span><div className="mktoClear"></div></div><div className="mktoClear"></div></div><div className="mktoClear"></div>
    </div>
    <div className="mktoButtonRow"><span className="mktoButtonWrap mktoSimple" style="margin-left: 120px; text-align: left;">
      <button type="submit" className="c-button mktoButton">Get a demo</button>
    </span></div>
    </div>
    </div>
    </div>
  </form>
  <p className="p-sm no-bottom-margin" style="font-size: 11px; line-height: 18px;">By signing up, I agree to Copper’s <a href="/privacy">privacy policy</a> & <a href="/terms">terms of service</a></p>
</div>
</fieldset> ```;

	return <div></div>;
};
export default DefaultMSFormBox;
