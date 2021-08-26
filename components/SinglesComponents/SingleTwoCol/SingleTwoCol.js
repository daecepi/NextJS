import Image from "next/image";
import Link from 'next/link';

const SingleTwoCol = (props) => {
    return (
      <section className="c-cols no-bottom-padding pt-32">
        <div className="container">
          <div className="row flex flex-wrap align-middle">
            <div className={`w-full  ${props.imagePosition == 'left' ? ' order-md-2 ' : 'order-md-1' } md:w-1/2 order-1`}>
              {props.eyebrow ? <pre className="c-eyebrow c-eyebrow--dark">{props.eyebrow}</pre> : null}
              <h2 className=' mb-2'>
                {props.title}
              </h2>
              { props.description ? <p>{ props.rescription }</p> : null}
              <p>{props.description}</p>
              <Link href={props.linkUrl}>
                <a className="t-link" target="_blank">
                    {props.linkText}
                </a>
              </Link>
              
            </div>
            <div className={`w-full md:w-1/2  ${props.imagePosition == 'left' ? ' order-md-1 ' : 'order-md-2' } order-2`}>
              <div className="c-image c-image--center no-embelleshment flex align-middle justify-center mt-16 md:mt-0">
                  <div className=' max-w-none w-full'>
                    <Image className=' w-full max-w-none' layout='responsive' src={props.imageUrl} width={props.imageWidth} height={props.imageHeigh}></Image>           
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    );
}

export default SingleTwoCol