import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Furniture() {
        const [data, setdata] = useState([])

        useEffect(() => {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(main => setdata(main))
        }, [])

    return (
        <section className=' px-5 lg:px-10 py-10 lg:py-12'>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 '>
                <div className='lg:px-8 lg:pt-7 text-center md:text-left '>
                    <h2 className='lg:tracking-wider leading-normal text-5xl md:pr-20 pb-10'>Best Modern Things</h2>
                    <button className=' border-b border-black font-bold'>See All</button>
                </div>
                {data?.map((ele, i) => (
                    // fetchDiv
                    <>
                        <div className='shadow-lg sh' key={i}>
                            <div className='border flex flex-col justify-between items-center cursor-pointer group relative overflow-hidden'>

                                <div className='h-[200px] w-[200px] px-5 py-5'>
                                    <img src={ele.image} alt="" />
                                </div>
                                <div className='flex flex-col gap-2 ml-80 absolute -right-9 bottom-20 group-hover:right-2 duration-500'>
                                    <i class='fas fa-heart border-2 border-stone-100 rounded-full p-2 hover:bg-red-500 hover:text-white '></i>
                                    <i class='fas fa-share border-2 border-stone-100 rounded-full p-2 hover:bg-red-500 hover:text-white '></i>
                                    <i class='fa-solid fa-magnifying-glass border-2 border-stone-100 rounded-full p-2 hover:bg-red-500 hover:text-white '></i>
                                </div>
                                <div className='bg-slate-100 w-full font-bold text-center opacity-0 group-hover:opacity-100 hover:bg-red-500 duration-500'>
                                    <Link to={`details/${ele.id}`}>
                                        <button className='w-full py-5' >Click Me For Details</button>
                                    </Link>
                                </div>
                            </div>
                            <div className='px-5 bg-stone-100 py-2 w-full'>
                                <h2 className='pb-2'>{ele.title}</h2>
                                <p className='font-bold'>${ele.price}</p>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </section>
    )
}

export default Furniture