import PricingCardLarge from "./PricingCardLarge";
import PricingCardSmall from "./pricingCardSmall";



const PricingPlans = ({header, subHeader, pricingPlans, reducePadding, linkToNav, stickyNavName, removeCtas}) => {

  const displayPlanCards = () => {
    const items =  "";
    console.log("items ", items)
    return items
  }

  return (
    <div>
      <section className="two-col__section max-w-6xl m-auto pt-32 pb-5 bg-soft-gray">
      <div className="w-full pb-20 text-center">
        <h2>{ header ? header : "" }</h2>
        <p>{ subHeader ? subHeader : "" }</p>
      </div>
      <div className="w-full grid grid-cols-3 align-start">
        { pricingPlans.map( pricingPlan => {
      console.log("pricing ",pricingPlan)
      return ( <PricingCardLarge { ...pricingPlan} /> )
    } ) }
      </div>
      </section>
    </div>
  );
}

export default PricingPlans;