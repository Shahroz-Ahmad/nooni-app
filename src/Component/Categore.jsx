import React from 'react'
import NooniCard from '../Data/CategoryCards'
import Card from './Card';
function Categore() {
    const { CategoryCard } = NooniCard;
    return (
        <section className='px-5 md:py-20'>
            <h3 className='font-bold text-center md:text-left text-2xl tracking-wider md:px-12 py-5'>SHOP BY CATEGORY</h3>
            <div className=' flex flex-wrap px-5 gap-5 justify-around'>
                {CategoryCard.map((ele, index) => (
                    <Card key={index} ele={ele}/>
                ))}
            </div>
        </section>
    )
}
{/* <div className='h-[120px] w-[120px] rounded-full'>
                    <img src={ele.image} alt="Products" className='rounded-full' />
                    </div>
                    <div>
                    <h4 className='font-bold'>{ele.thing}</h4>
                    <p className='font-medium'>{ele.products}</p>
                    </div> */}

export default Categore