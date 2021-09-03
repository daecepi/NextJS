import Image from 'next/image';
const ProductOneCol = (props) => {
    return (
      <section className="c-single-column product-page product-page-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 c-single-column__container pull-to-center">
              <h2>{props.title}</h2>
              <p className="">
                {props.copy.map((item,index)=>{
                    if(props.copy.length == index + 1){
                        return(
                            < >
                              {item}
                            </>
                        )
                      }else{
                          return(
                            < >
                            {item}<br/>
                          </>
                          )
                      }
                })}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 offset-md-1 c-single-column__container">
              <div className="c-product-focus__media">
                  <Image src={props.imageUrl} width='2028' height='1294'></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default ProductOneCol