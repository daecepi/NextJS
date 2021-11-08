import Image from 'next/image';

const NumbersSection = (props) => {
    return (
      <div className="c-numbers--full">
          <Image src={props.imageUrl} width='2880' height='1280'></Image>
        <div className="c-numbers__container">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <pre className="c-eyebrow" style={{top:0, marginLeft:0}}>
                  {props.eyebrow}
                </pre>
                <h2>{props.title}</h2>
              </div>
              <div className="col-md-8">
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default NumbersSection;
