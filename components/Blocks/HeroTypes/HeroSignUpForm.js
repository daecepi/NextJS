import Image from 'next/image';
import Link from 'next/link';

const HeroSignUpForm = (props) => {
    return(
        <section className='hero-signup-form -mt-28 pt-36 pb-10 relative w-full min-h-screen flex align-middle'>
            <div className="hero-signup-form-container max-w-7xl m-auto flex flex-wrap z-10">
                <div className={`hero-signup-form__form w-full md:w-1/2 ${props.signupSide == 'left' ? ' order-1' : ' order-2'}`}>
                    <form className="signup_form" id="signup_form" action="https://app.copper.com/users" accept-charset="UTF-8" method="post">
                        <input name="utf8" type="hidden" value="✓" />
                        <input type="hidden" name="authenticity_token" value="lAAB/AYz9RxQR4RN74ZQgCErmru66/VW8Kzw3EeKrJrJC4AjlOsOIwvmktA9F0k1HVJQkSEber78cUBqUaYwhw==" />
                        <Link href='https://app.copper.com/auth/auto_login?continue_with_google=true&amp;failure_url=https%3A%2F%2Fapp.copper.com%2Fusers%2Fsign_up%3Fauth_error%3DAuthentication%2Bfailed.%2BPlease%2Benter%2Byour%2Bemail%2Bbelow%2Bto%2Bcontinue.&amp;prompt=consent&amp;provider=google_oauth2_extended'>
                            <a className="google_light_btn" >
                                <Image alt="Google Icon" src='https://d3jas8421cca9z.cloudfront.net/assets/google-g-0cf576a5dab9315daac7ffe29d29ed585e0ff9850e59408d0f25f38dc1da037b.svg' width='24' height='24'></Image>
                                {/* <img className="google_icon" alt="Google Icon" src="//d3jas8421cca9z.cloudfront.net/assets/google-g-0cf576a5dab9315daac7ffe29d29ed585e0ff9850e59408d0f25f38dc1da037b.svg" alt="Google g" /> */}
                                <span className="google_light_btn_label">
                                    Continue with Google
                                </span>
                            </a>
                        </Link>
                        
                        <div className="signup_form_subtext">
                            or use your email to sign up:
                        </div>
                        <div className="field">
                            <div className="form_text_field_container">
                                <label for="user[full_name]">Full Name</label>
                                <input className="text_field" size="30" title='Only alphabet characters admitted' pattern='[A-Za-z ]{1,32}' maxlength="32" placeholder="Jane Doe" type="text" name="user[full_name]" id="user_full_name" />
                            </div>
                        </div>
                        <div className="field">
                            <div className="form_text_field_container">
                                <label for="user[email]">Work Email</label>
                                <input size="30" className="text_field" placeholder="janedoe@example.com" type="email" name="user[email]" id="user_email" />
                            </div>
                        </div>
                        <input type="hidden" name="ampDeviceID" value="" />
                        <input type="hidden" name="amp_device_id" value="" />
                        <input type="hidden" name="utm_source" value="" />
                        <input type="hidden" name="utm_campaign" value="" />
                        <input type="hidden" name="utm_medium" value="" />
                        <input type="hidden" name="utm_adgroup" value="" />
                        <input type="hidden" name="utm_content" value="" />
                        <input type="hidden" name="utm_term" value="" />
                        <input type="hidden" name="gclid" value="" />
                        <input type="hidden" name="visitor_token" value="" />
                        <input type="hidden" name="fireb_device_id" value="" />
                        <div className="submit-button-row">
                        <input type="submit" name="commit" value="Try Free" className="submit_button is-pink with-no-border" />
                        </div>
                    </form>
                    
                </div>
                <div className={`hero-signup-form__text-container w-full md:w-1/2 flex flex-col z-10 justify-center ${props.signupSide == 'left' ? ' order-2' : ' order-1'}`}>
                    <div className=' text-white pr-20' dangerouslySetInnerHTML={{__html: props.text }} ></div>
                </div>
            </div>
            <div className={`hero-signup-form__background absolute top-0 w-1/2 h-full z-0 bg-${props.containerBg[0].slug}-default ${props.signupSide == 'left' ? ' right-0' : ' left-0'}`} ></div>
        </section>
        
    )
}

export default HeroSignUpForm;