
const PricingCardSmall = ({ title, backgroundImage, featured, planType, paragraph, ctas, billedManually, billedMonthly }) => {

  const style = {}
  
  console.log("Entering small", planType)

  const bigNumberStyles = {
    position: 'relative',
    fontSize: '52px',
    lineHeight: '30px',
    fontWeight: '400',
    textAlign: 'center'
  }
  return (
    <div  style={style}>
      <div className="px-10 pt-5 pb-8">
        
        <h3 id={`${ planType.toLowerCase() }-plan`}>{ planType }</h3>
      </div>
      <div className="px-10 pt-5 pb-8">
        <div>
          <p className="p-sm">{paragraph}</p>
          <div style={bigNumberStyles}>
            <span>{ billedManually }</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingCardSmall;