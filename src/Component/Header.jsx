import React from 'react'

function Header() {
  return (
    <header className='grid md:grid-cols-2 bg-stone-100 py-8 px-5'>
      {/* <div className='bg-black absolute top-0 left-0  w-1/5'>1</div> */}
        <div className='flex flex-col justify-center md:pl-14'>
            <p className='font-medium text-xl pb-8'>NEW ARRIVALS</p>
            <h1 className='text-6xl font-medium tracking-widest md:leading-normal'>Chairs , Lamp & Seating You'll Love</h1>
            <p className='font-medium pt-7 pb-10 '>Designer chair styles for every space - <span className='font-bold'>Free Shipping</span></p>
            <div>
            <button className=' border-b border-black font-bold'>SHOP NOW</button>
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <div className='headerimg ' />
            {/* <img src="./slide-1-home1-2.png" alt="Slider 1" className='headerimg h-[300px] w-[300px] md:h-[690px] md:w-[705px]' /> */}
        </div>
    </header>
  )
}

export default Header