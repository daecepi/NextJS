import Image from 'next/image';
import Link from 'next/link';

const HeroSinglePages = (props) => {
    return(
        <section className={`hero-split relative background-${props.pageColorcClass}`}>
            <div className='hero-split__background pointer-events-none relative md:absolute md:top-0 md:left-0 w-full h-full '>
                <Image src={props.imageUrl} layout='fill'  className='object-cover' ></Image>
            </div>
            <div className="container z-10 relative m-auto pt-8 md:pt-0">
                <div className="row">
                <div className="w-full md:w-5/12 align-middle c-valign--middle">
                    <pre className="c-eyebrow">{props.eyebrow}</pre>
                    <h1 className="t-white">{props.title}</h1>
                    <p>{props.copy}</p>
                    <div className="c-hero__buttons flex flex-wrap justify-start">
                        <Link href="https://www.copper.com/signup">
                            <a className="c-button sendUTMsToAmplitude mr-4" >Try Free</a>
                        </Link>
                        <Link href="/demos">
                            <a className="c-button c-button--outline" href="/demos">Request Demo</a>
                        </Link>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSinglePages;