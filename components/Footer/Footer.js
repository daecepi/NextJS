import Image from 'next/image'
const Footer = () => {
    return(
<footer className="c-footer footer-about">
  <div 
    className="container 
//   {% if 'copper.com/blog' in craft.app.request.absoluteUrl or 
//   'copper.lndo.site/blog' in craft.app.request.absoluteUrl or 
//   'copper-staging.frb.io/blog' in craft.app.request.absoluteUrl %}

//   c-blog__footer

//   {% endif %}"
  >
      <div className="footer-and-social-div">
          <div className="footer__links__container">
            <div className="footer__links">
                <ul>
                    <Image src='/imgs/copper_logo-white-sharp.svg' width='143' height='28s' ></Image>
                    <li><a href="/about">Company</a></li>
                    <li><a href="/about#leadership">Team</a></li>
                    <li><a href="/about#careers">Careers</a></li>
                    <li><a href="/press">Press Kit</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="https://support.copper.com/hc/en-us/requests/new" target="_blank">Support Request</a></li>
                    <li><a href="/demos">Talk to Sales</a></li>
                    <li><a href="/partners">Become a Partner!</a></li>
                </ul>
            </div>
              <div className="footer__links">
                  <ul>
                      <span className="footer__title">Why Copper</span>
                      <li><a href="/contact-management-software">Organize Contacts</a></li>
                      <li><a href="/features/lead-tracking">Track Leads & Deals</a></li>
                      <li><a href="/project-management-crm">Manage Projects</a></li>
                      <li><a href="/features/pipeline-management">Build Pipelines</a></li>
                      <li><a href="/features/email-tracking">Track Emails & Tasks</a></li>
                      <li><a href="/sales-reporting">Reporting & Insights</a></li>
                      <li><a href="/mobile-crm">Mobile CRM</a></li>
                      <li><a href="/features">See All Features</a></li>
                      <li><a href="/pricing">Pricing</a></li>
                  </ul>
              </div>
              <div className="footer__links">
                  <ul>
                      <span className="footer__title">Solutions</span>
                      <li><a href="/industries/agency-crm">Agency CRM</a></li>
                      <li><a href="/industries/software-technology-crm">Technology CRM</a></li>
                      <li><a href="/industries/consulting-crm">Consulting CRM </a></li>
                      <li><a href="/industries/real-estate-crm">Real Estate CRM</a></li>
                      <li><a href="/small-business-crm">Small Businesses</a></li>
                      <li><a href="/mid-market-crm">Mid-Market</a></li>
                      <li><a href="/enterprise-crm">Enterprise</a></li>
                  </ul>
              </div>
              <div className="footer__links">
                  <ul>
                      <span style={{minWidth:'155px'}} className="footer__title">CRM for Google Workspace</span>
                      <li><a href="/g-suite-crm">Google Workspace CRM </a></li>
                      <li><a href="/gmail-crm">Gmail CRM</a></li>
                      <li><a href="/google-sheets-crm">Google Sheets CRM</a></li>
                      <li><a href="https://workspace.google.com/partner/recommended/">Official Google Workspace Partner</a></li>
                      <li><a href="https://chrome.google.com/webstore/detail/copper-crm-for-gmail/hpfmedbkgaakgagknibnonpkimkibkla?hl=en">Chrome Store App</a></li>
                      <li><a href="https://play.google.com/store/apps/details?id=com.prosperworks.android&hl=en_US">Android Mobile App</a></li>
                  </ul>
              </div>
              <div className="footer__links">
                  <ul>
                      <span className="footer__title">Integrations</span>
                      <li><a href="/integrations/slack-crm">Slack</a></li>
                      <li><a href="/integrations/zendesk-crm">Zendesk</a></li>
                      <li><a href="/integrations/hubspot-crm">HubSpot</a></li>
                      <li><a href="/integrations/quickbooks-crm">QuickBooks</a></li>
                      <li><a href="/integrations/xero-crm">Xero</a></li>
                      <li><a href="/integrations/docusign-crm">Docusign</a></li>
                      <li><a href="/integrations">See all integrations</a></li>
                  </ul>
              </div>
              <div className="footer__links">
                  <ul>
                      <span className="footer__title">Learn</span>
                      <li><a href="/blog">Blog</a></li>
                      <li><a href="/webinars">Webinars</a></li>
                      <li><a href="https://support.copper.com">Help Center</a></li>
                      <li><a href="/resources">Business Tools</a></li>
                      <li><a href="https://support.copper.com/hc/en-us/community/topics">Community</a></li>
                  </ul>
              </div>
          </div>
          <div className="c-footer__legal">
              <div className="c-footer__container">
                  <div className="legal-info disappear-mobile">
                        <address style={{fontSize: '20px',lineHeight: '30px', marginRight:'auto'}}>301 Howard St. #600 <br/>
                            San Francisco, CA 94105</address>
                        <span style={{flexBasis: 'unset', marginRight: '51px',marginTop: 'auto'}} className="copyright">Copper CRM, Inc. © 2021</span>
                        <a style={{flexbBsis: 'unset', marginRight: '51px',marginTop: 'auto' ,marginBottom: '20px'}} href="/privacy">Privacy</a>
                        <a style={{flexBasis: 'unset' ,marginRight: '51px',marginTop: 'auto',marginBottom: '20px'}} href="/terms">Terms</a>
                        <div style={{marginTop: 'auto',marginBottom: '3px'}} className="show-social d-none d-sm-none d-md-block">
                            {/* {% include "/sections/footer/_section-social-footer.html" %} */}
                        </div>
                    </div>
                    <div className="legal-info appear-mobile">
                        <span className="copyright">Copper CRM, Inc. © 2021</span>
                        <a  href="/privacy">Privacy</a>
                        <a href="/terms">Terms</a>
                    </div>
                    <div className="show-social d-md-none appear-mobile extra-bottom-margin--small">
                        {/* {% include "/sections/footer/_section-social-footer.html" %} */}
                    </div>
                </div>
              </div>
          </div>
          </div>
</footer>
    )
}

export default Footer;