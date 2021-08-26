
import Image from 'next/image';
const FinalPleaHero = () => {
    return (
        <section className="c-hero--split background--putty background--final-plea fifty-fifty--no-mobile">
            <div className="c-image">
                <Image src='/imgs/industry/industry-agency-final-plea.jpg' width='1140' height='1200'></Image>
            </div>
            <div className="container">
            <div className="row">
                <div className="col-md-6 c-valign--middle">
                <h2 className="t-white">Retain more<br/>clients today</h2>
                <p style={{maxWidth: '420px'}}>No credit card required. Start your 14-day free trial today.</p>
                <div className="c-hero__buttons">
                    <a className="c-button"  href="/demos">Request Demo</a>
                    <a className="c-button c-button--outline sendUTMsToAmplitude" href="{{ craft.app.config.general.signUpUrl }}">Try Free</a>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default FinalPleaHero