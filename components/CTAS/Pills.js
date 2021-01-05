import Link from 'next/link';
const Pills = (props) => {
    return (
      <div>
        <Link href={props.url}>
          <a className="py-3 text-white rounded-full px-7 bg-radicalRed-500">
            {props.name}
          </a>
        </Link>
      </div>
    );
}

export default Pills;