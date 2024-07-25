// import React from 'react'

// function Blog() {

//     const SwipeRight = ()=>{
//         console.log('right');
        
//     }
//     const SwipeLeft = ()=>{
//         console.log('left');
//     }

//     return (
//         <section className=' px-10 py-10 w-[100%] '>
//             <h2 className='font-bold text-2xl py-10'>OUR BLOG</h2>
//             <div className='w-[200%] border-red-500 border-2 flex gap-20'>
//                 <div className='md:grid lg:grid-cols-6 md:grid-cols-3 gap-2 md:gap-10 border-2 border-blue-500 w-[50%] relative'>
//                     <div className='col-span-3 overflow-hidden'>
//                         <img src="./blog-1-1174x862.jpg" alt="" className='hover:scale-105 duration-300 cursor-pointer' />

//                     </div>
//                     <button className='absolute border-2 px-3 py-2 rounded-full top-[45%] bg-stone-100 left-2' onClick={SwipeLeft}>
//                         <i class="fa-solid fa-arrow-left"></i>
//                     </button>
//                     <div className='col-span-2 flex flex-col justify-center gap-5'>
//                         <div>
//                             <p className='float-left hover:text-red-500 duration-500 cursor-pointer text-slate-400'>FURNITURE ,</p>
//                             <p className='float-left hover:text-red-500 duration-500 cursor-pointer text-slate-400'>TABLE</p>
//                         </div>
//                         <h2 className='lg:tracking-wider leading-normal text-3xl'>
//                             The Secrets to a Living Room that Draws You In
//                         </h2>
//                         <p className='text-slate-400 tracking-wider pr-10 leading-loose'>Nunc ut sem ut ex sollicitudin commodo. Suspendisse non enim felis. Nam nec diam ultricies, malesuada</p>
//                         <div className='py-5'>
//                             <button className='border-b border-black font-bold'>READ MORE</button>
//                         </div>
//                     </div>
//                     <div className='overflow-hidden lg:col-span-1 '>
//                         {/* <div className='blogimg h-full hover:scale-105 duration-300 cursor-pointer'></div> */}
//                         <img src="/blog-2-1174x862.jpg" alt="" className='h-full object-cover object-left hover:scale-105 duration-300 cursor-pointer' />
//                     </div>
//                     <button className='absolute border-2 px-3 py-2 rounded-full top-[45%] bg-stone-100 right-2' onClick={SwipeRight}>
//                         <i class="fa-solid fa-arrow-right"></i>
//                     </button>
//                 </div>
//                 <div className='md:grid  lg:grid-cols-6 md:grid-cols-3 gap-2 md:gap-10  border-2 border-green-500 w-[50%]'>
//                     <div className='col-span-3 overflow-hidden'>
//                         <img src="./blog-2-1174x862.jpg" alt="" className='hover:scale-105 duration-300 cursor-pointer' />
//                     </div>
//                     {/* <button className='absolute border-2 px-3 py-2 rounded-full top-[45%] bg-stone-100 left-2' onClick={SwipeLeft}>
//                         <i class="fa-solid fa-arrow-left"></i>
//                     </button> */}
//                     <div className='col-span-2 flex flex-col justify-center gap-5'>
//                         <div>
//                             <p className='float-left hover:text-red-500 duration-500 cursor-pointer text-slate-400'>FURNITURE ,</p>
//                             <p className='float-left hover:text-red-500 duration-500 cursor-pointer text-slate-400'>TABLE</p>
//                         </div>
//                         <h2 className='lg:tracking-wider leading-normal text-3xl'>
//                             The Secrets to a Living Room that Draws You In
//                         </h2>
//                         <p className='text-slate-400 tracking-wider pr-10 leading-loose'>Nunc ut sem ut ex sollicitudin commodo. Suspendisse non enim felis. Nam nec diam ultricies, malesuada</p>
//                         <div className='py-5'>
//                             <button className='border-b border-black font-bold'>READ MORE</button>
//                         </div>
                        
//                     </div>
//                     <div className='overflow-hidden lg:col-span-1 '>
//                         {/* <div className='blogimg h-full hover:scale-105 duration-300 cursor-pointer'></div> */}
//                         <img src="/blog-1-1174x862.jpg" alt="" className='h-full object-cover object-left hover:scale-105 duration-300 cursor-pointer' />
//                     </div>
//                     {/* <button className='absolute border-2 px-3 py-2 rounded-full top-[45%] bg-stone-100 right-2' onClick={SwipeRight}>
//                         <i class="fa-solid fa-arrow-right"></i>
//                     </button> */}

//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Blog
import React, { useState } from 'react';

function Blog() {
    const [slideIndex, setSlideIndex] = useState(0);

    const SwipeRight = () => {
        if (slideIndex < 1) {
            setSlideIndex(slideIndex + 1);
        }
    };

    const SwipeLeft = () => {
        if (slideIndex > 0) {
            setSlideIndex(slideIndex - 1);
        }
    };

    return (
        <section className='px-10 py-10 w-[100%]'>
            <h2 className='font-bold text-2xl py-10'>OUR BLOG</h2>
            <div className='overflow-hidden relative'>
                <div className={`w-[200%] flex transition-transform duration-500`} style={{ transform: `translateX(-${slideIndex * 50}%)` }}>
                    <div className='md:grid lg:grid-cols-6 md:grid-cols-3 gap-2 md:gap-10 w-[50%] relative'>
                        <div className='col-span-3 overflow-hidden'>
                            <img src="./blog-1-1174x862.jpg" alt="" className='hover:scale-105 duration-300 cursor-pointer' />
                        </div>
                        <div className='col-span-2 flex flex-col justify-center gap-5'>
                            <div>
                                <p className='float-left hover:text-red-500 duration-500 cursor-pointer text-slate-400 px-1'>FURNITURE ,</p>
                                <p className='float-left hover:text-red-500 duration-500 cursor-pointer text-slate-400'>TABLE</p>
                            </div>
                            <h2 className='lg:tracking-wider leading-normal text-3xl'>
                                The Secrets to a Living Room that Draws You In
                            </h2>
                            <p className='text-slate-400 tracking-wider pr-10 leading-loose'>Nunc ut sem ut ex sollicitudin commodo. Suspendisse non enim felis. Nam nec diam ultricies, malesuada</p>
                            <div className='py-5'>
                                <button className='border-b border-black font-bold'>READ MORE</button>
                            </div>
                        </div>
                        <div className='overflow-hidden lg:col-span-1'>
                            <img src="/blog-2-1174x862.jpg" alt="" className='h-full object-cover object-left hover:scale-105 duration-300 cursor-pointer' />
                        </div>
                    </div>
                    <div className='md:grid lg:grid-cols-6 md:grid-cols-3 gap-2 md:gap-10 w-[50%]'>
                        <div className='col-span-3 overflow-hidden'>
                            <img src="./blog-2-1174x862.jpg" alt="" className='hover:scale-105 duration-300 cursor-pointer' />
                        </div>
                        <div className='col-span-2 flex flex-col justify-center gap-5'>
                            <div>
                                <p className='float-left hover:text-red-500 duration-500 cursor-pointer text-slate-400 px-1'>CHAIR , </p>
                                <p className='float-left hover:text-red-500 duration-500 cursor-pointer text-slate-400'>FURNITURE</p>
                            </div>
                            <h2 className='lg:tracking-wider leading-normal text-3xl'>
                            What is Feng Shui and How Can I Use It When I Decorate?
                            </h2>
                            <p className='text-slate-400 tracking-wider pr-10 leading-loose'>Nunc ut sem ut ex sollicitudin commodo. Suspendisse non enim felis. Nam nec diam ultricies, malesuada</p>
                            <div className='py-5'>
                                <button className='border-b border-black font-bold'>READ MORE</button>
                            </div>
                        </div>
                        <div className='overflow-hidden lg:col-span-1'>
                            <img src="/blog-1-1174x862.jpg" alt="" className='h-full object-cover object-left hover:scale-105 duration-300 cursor-pointer' />
                        </div>
                    </div>
                </div>
                <button className='absolute border-2 px-3 py-2 rounded-full top-[95%] left-10 md:top-[45%] bg-stone-100 md:left-2' onClick={SwipeLeft}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button className='absolute border-2 px-3 py-2 rounded-full top-[95%] right-10 md:top-[45%] bg-stone-100 md:right-2' onClick={SwipeRight}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </section>
    );
}

export default Blog;
