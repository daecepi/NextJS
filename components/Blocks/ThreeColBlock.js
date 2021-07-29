const ThreeColBlock = (props) => {
    return(
        <section className='three-col-block w-full bg-white max-w-7xl m-auto pt-32 pb-32'>
            <div className='three-col-block__eyebrow uppercase '>
                <p class=' text-black text-sm '>- {props.eyebrow}</p>
            </div>
            <div className='three-col-block__title mt-12'>
                <h2 className='text-black text-center mb-12 text-6xl'>{props.title}</h2>
            </div>
            <div className='three-col-block__container flex flex-wrap justify-center'>
                {props.entries.map((item)=>{
                    return(
                        <div className=' text-black w-1/3 px-4'>
                            <div className=' py-6 px-8'>
                                <div class='three-col-block__content-eyebrow'>
                                    <p className=' uppercase text-sm text-black'>- {item.eyebrow}</p>
                                </div>
                                <div className="three-col-block__content-number text-blue-900 text-8xl font-bold py-4">
                                    {item.number}
                                </div>
                                <div className='text-black text-xl'>
                                    {item.subText}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default ThreeColBlock;

// eyebrow
// title
// entries