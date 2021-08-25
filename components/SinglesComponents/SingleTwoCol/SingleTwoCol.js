import Image from "next/image";
import Link from 'next/link';

const SingleTwoCol = (props) => {
    return (
      <section className="c-cols no-bottom-padding pt-32">
        <div className="container">
          <div className="row flex flex-wrap align-middle">
            <div className="w-full md:w-1/2 order-1">
              <h2 className=' mb-2'>
                {props.title}
              </h2>
              <Link href={props.linkUrl}>
                <a className="t-link" target="_blank">
                    {props.linkText}
                </a>
              </Link>
              
            </div>
            <div className="w-full md:w-1/2 order-2">
              <div className="c-image c-image--center no-embelleshment flex align-middle justify-center mt-16 md:mt-0">
                  <div className=' max-w-none md:max-w-xs w-full'>
                    <Image className=' w-full max-w-none md:max-w-xs' layout='responsive' src={props.imageUrl} width='350' height='298'></Image>           
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default SingleTwoCol