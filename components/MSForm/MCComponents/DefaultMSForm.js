import { React } from 'React'

const DefaultMSFormBox = () => {


  return (
    <div>
      {/* Pass this to tailwind */}
      <style>
        .c-form .msf-paragraph-form{
          font-size: 20px;
          line-height: 24px;
          font-weight: bold;
          color: #3B3E3F;
        }
      </style>

      {/* HTML component */}
      <fieldset class="c-form step step-3" style="box-shadow: none; padding-bottom: 0px;padding-top: 0px;">

  <div class="container">
    <div class="row">
      <div class="col-md-11 ">
        <pre class="c-eyebrow" style="text-align: start;">{{ eyebrow }}</pre>
        {% if copyHeader|length %}
          <h2 style="font-size: 52px; line-height: 64px;">{{ copyHeader }}</h2>
        {% endif %}
        {% if copy|length %}
          <p class="msf-paragraph-form">{{copy}}<span class="variation-one"  style="display: none;"> Tell us how best to reach you.</span></p>
        {% endif %}
      </div>
    </div>
  </div>

  {% import "/components/replacements/_marketo-replacements.html" as localLeadReplacements %}
  {% from "/components/replacements/_marketo-replacements.html" import errorList %}
  <div class="online-marketo">
      <form id="mktoForm_{{ marketoId|length ? marketoId : 2195 }}" data-formId="{{ marketoId|length ? marketoId : 2195 }}" data-formInstance="one" class="mktoForm" style="padding: 0px;"></form>

      <script src="//app-sj17.marketo.com/js/forms2/js/forms2.min.js"></script>
      <script src="https://marketo.clearbit.com/assets/v1/marketo/forms.js"
        data-clearbit-publishable-key="pk_297de2bd498f18ecd1cabfdd7ad4fea9"></script>
  </div>
  <div class="offline-marketo">
    <style>
      @media (min-width: 990px){
        #{{ marketoId|length ? marketoId : 2195 }} .mktoLabel{
          top: 17px;
        }
      }
    </style>
      <form method="post" accept-charset="UTF-8" id="mktoForm_{{ marketoId|length ? marketoId : 2195 }}" class="mktoForm" style="padding: 0px;">

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
        
        <div class="mktoFormRow"><div class="mktoFieldDescriptor mktoFormCol" style="margin-bottom: 10px;">
          <div class="mktoOffset" style="width: 10px;"></div>
          <div class="mktoFieldWrap mktoRequiredField">
            <label for="BusinessEmail" id="LblLastName" class="mktoLabel mktoHasWidth" style="width: 250px;">
              <div class="mktoAsterix">*</div>Business email</label><div class="mktoGutter mktoHasWidth" style="width: 10px;"></div>
              <input id="BusinessEmail" name="message[BusinessEmail]" placeholder="example@gmail.com" maxlength="255" aria-labelledby="LblBusinessEmail InstructBusinessEmail" type="email" class="mktoField mktoTextField mktoHasWidth mktoRequired mktoInvalid" aria-required="true" style="width: 250px;" aria-invalid="true"><span id="InstructLastName" tabindex="-1" class="mktoInstruction"></span><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoClear"></div>
        </div>
        <div class="mktoFormRow"><div class="mktoFieldDescriptor mktoFormCol" style="margin-bottom: 10px;">
          <div class="mktoOffset" style="width: 10px;"></div>
          <div class="mktoFieldWrap mktoRequiredField">
            <label for="FullName" id="LblFullName" class="mktoLabel mktoHasWidth" style="width: 250px;">
              <div class="mktoAsterix">*</div>Full Name</label><div class="mktoGutter mktoHasWidth" style="width: 10px;"></div>
              <input pattern="^[a-zA-ZáéíóúñÁÉÍÓÚÑ]{2,40} [a-zA-ZáéíóúñÁÉÍÓÚÑ]{3,40}$" id="FullName" name="message[FullName]" placeholder="John Doe" maxlength="255" aria-labelledby="LblFullName InstructFullName" type="text" class="mktoField mktoTextField mktoHasWidth mktoRequired mktoInvalid" aria-required="true" style="width: 250px;" aria-invalid="true"><span id="InstructLastName" tabindex="-1" class="mktoInstruction"></span><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoClear"></div>
        </div>
        <div class="mktoFormRow"><div class="mktoFieldDescriptor mktoFormCol" style="margin-bottom: 10px;">
          <div class="mktoOffset" style="width: 10px;"></div>
          <div class="mktoFieldWrap mktoRequiredField">
            <label for="PhoneNumber" id="LblLastName" class="mktoLabel mktoHasWidth" style="width: 250px;">
              <div class="mktoAsterix">*</div>Phone Number</label><div class="mktoGutter mktoHasWidth" style="width: 10px;"></div>
              <input id="PhoneNumber" name="message[PhoneNumber]" placeholder="(XXX) XXX–XXXX" maxlength="255" aria-labelledby="LblPhoneNumber InstructPhoneNumber" type="number" min="999999999" class="mktoField mktoTextField mktoHasWidth mktoRequired mktoInvalid" aria-required="true" style="width: 250px;" aria-invalid="true"><span id="InstructLastName" tabindex="-1" class="mktoInstruction"></span><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoClear"></div>
        </div>
        <div class="mktoButtonRow"><span class="mktoButtonWrap mktoSimple" style="margin-left: 120px; text-align: left;">
          <button type="submit" class="c-button mktoButton">Get a demo</button>
        </span></div>
        </div>
        </div>
        </div>
      </form>
      <p class="p-sm no-bottom-margin" style="font-size: 11px; line-height: 18px;">By signing up, I agree to Copper’s <a href="/privacy">privacy policy</a> & <a href="/terms">terms of service</a></p>
    </div>
</fieldset>
    </div>
  );
};
export default DefaultMSFormBox;