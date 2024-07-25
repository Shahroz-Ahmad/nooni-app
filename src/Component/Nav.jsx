import React,{useState} from 'react'

function Nav() {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='flex bg-white justify-between px-5 lg:px-20 py-8 shadow-stone-300 shadow-md sticky z-10 top-0'>
        <div className='text-2xl'>
            <button onClick={() => setToggle(!toggle)}>
            <i class="fa-solid fa-bars px-3 cursor-pointer "></i>
            </button>
            <i class="fa-solid fa-magnifying-glass px-3 cursor-pointer"></i>
        </div>
        <div>
            <img src="./logo.png" alt="Logo" height={30} width={150} className='cursor-pointer' />
        </div>
        <div className='text-2xl hidden md:block'>
        <i class="fa-regular fa-user px-3 cursor-pointer"></i>
        <i class="fa-regular fa-heart px-3 cursor-pointer"></i>
        <i class="fa-solid fa-cart-shopping px-3 cursor-pointer"></i>
        </div>
    </nav>
    
  )
}

export default Nav