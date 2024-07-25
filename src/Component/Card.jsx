import React from 'react'

function Card({ele}) {
  return (
    <>
    <div className=' flex md:px-8 items-center gap-5 py-5'>
    <div className='h-[120px] w-[120px] rounded-full'>
    <img src={ele.image} alt="Products" className='rounded-full' />
    </div>
    <div>
    <h4 className='font-bold'>{ele.thing}</h4>
    <p className='font-medium'>{ele.products}</p>
    </div>
    </div>
    </>
  )
}

export default Card