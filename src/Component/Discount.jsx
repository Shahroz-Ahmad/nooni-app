import React from 'react'

function Discount() {
    return (
        <section className='grid md:grid-cols-2 grid-rows-3 md:grid-rows-2 px-5  gap-2 h-[105vh]'>
            <div className=''>
                <div className='banner1'>
                    <h2 className=' tracking-wider leading-normal pt-10 text-5xl md:pr-72 pb-10'>Up To 40% Off Top Lamp Brands</h2>
                    <button className=' border-b border-black font-bold'>SHOP NOW</button>
                </div>
            </div>
            <div className='md:row-span-2  relative overflow-hidden'>
                <div className='banner2 bann  '>
                    <p className='text-white tracking-wider text-center pt-5 lg:pt-12 text-lg '>BIG SALE</p>
                    <h2 className='tracking-wider leading-normal lg:text-5xl px-10 pb-10 text-center text-white'>Up To 70% Off Furniture & Decor</h2>
                    <div className='text-white text-center'>
                        <button className=' border-b border-white text-center font-bold'>SHOP NOW</button>
                    </div>

                </div>
            </div>
            <div className='relative overflow-hidden'>
                <div className='banner3 bann '>
                <p className=' tracking-wider text-center lg:text-left lg:pt-12 pt-5 text-lg lg:px-10 '>NEW PRODUCTS</p>
                    <h2 className='tracking-wider leading-normal text-2xl px-10 text-center lg:text-left lg:text-4xl pb-10 font-bold '>Up To 50% Off Cabinets</h2>
                    <div className=' px-10 text-white lg:text-black text-center lg:text-left'>
                        <button className=' border-b border-white lg:border-black  font-bold'>SHOP NOW</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Discount