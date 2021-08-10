import Link from 'next/link';
import Image from 'next/dist/client/image';
const TextLink = (props) => {
    return(
        <Link href={props.url}>
            <a className="text-link border-lime-default border-b-4" >{props.text} <Image className='text-link-arrow' src="/right-arrow-white.svg" height={17} width={18} /></a>
        </Link>
    )
}

export default TextLink;