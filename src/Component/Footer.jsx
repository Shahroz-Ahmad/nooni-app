import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap md:text-left text-center order-first">
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <img src="./logo.png" alt="Logo" height={30} width={150} className='cursor-pointer mx-auto md:mx-0'/>
                        <nav class="list-none mb-10 pt-5">
                            <li className='py-2'>
                                <Link class="text-gray-600 hover:text-red-500 duration-500">Text: +00(234)23-45-666</Link>
                            </li>
                            <li className='py-2'>
                                <Link class="text-gray-600 hover:text-red-500 duration-500">Mon – Fri: 8 am – 8 pm</Link>
                            </li>
                            <li className='py-2'>
                                <Link class="text-gray-600 hover:text-red-500 duration-500">Sat – Sun: 8 am – 7 pm</Link>
                            </li>
                            
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-bold text-gray-900 tracking-widest text-xl mb-3">ABOUT</h2>
                        <nav class="list-none mb-10">
                            <li className='py-2'>
                                <Link class="text-gray-600 hover:text-red-500 duration-500">Our Story</Link>
                            </li>
                            <li className='py-2'>
                                <Link class="text-gray-600 hover:text-red-500 duration-500">Careers</Link>
                            </li>
                            <li className='py-2'>
                                <Link class="text-gray-600 hover:text-red-500 duration-500">Influencers</Link>
                            </li>
                            <li className='py-2'>
                                <Link class="text-gray-600 hover:text-red-500 duration-500">Join our team</Link>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-bold  text-gray-900 tracking-widest text-xl mb-3">CUSTOMER SERVICES</h2>
                        <nav class="list-none mb-10">
                            <li className='py-2'>
                                <Link class="text-gray-600 hover:text-red-500 duration-500">Contact us</Link>
                            </li>
                            <li className='py-2'>
                                <Link class="text-gray-600 hover:text-red-500 duration-500">Customer Services</Link>
                            </li>
                            <li className='py-2'>
                                <Link class="text-gray-600 hover:text-red-500 duration-500">Find Store</Link>
                            </li>
                            <li className='py-2'>
                                <Link class="text-gray-600 hover:text-red-500 duration-500">Book Appointment</Link>
                            </li>
                            <li className='py-2'>
                                <Link class="text-gray-600 hover:text-red-500 duration-500">Shipping & Returns</Link>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-bold text-gray-900 tracking-widest text-xl mb-3">SIGN UP FOR EMAILS</h2>
                        <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap gap-2 md:gap-0 justify-center items-end md:justify-start">
                            <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                <label for="footer-field" class="leading-7 text-sm text-gray-600">Your e-mail address</label>
                                <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-red-600 duration-300 rounded">Subscribe</button>
                        </div>
                       <div>
                       <i class="fa-brands fa-facebook px-2 py-5 text-2xl cursor-pointer hover:text-red-500 duration-300"></i>
                       <i class="fa-brands fa-twitter px-2 py-5 text-2xl cursor-pointer hover:text-red-500 duration-300"></i>
                       <i class="fa-brands fa-instagram px-2 py-5 text-2xl cursor-pointer hover:text-red-500 duration-300"></i>
                       <i class="fa-brands fa-pinterest px-2 py-5 text-2xl cursor-pointer hover:text-red-500 duration-300"></i>
                       </div>
                    </div>
                </div>
            </div>
            {/* <div class="bg-gray-100">
                <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span class="ml-3 text-xl">Tailblocks</span>
                    </a>
                    <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2020 Tailblocks —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@knyttneve</a>
                    </p>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a class="text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div> */}
        </footer>
    )
}

export default Footer