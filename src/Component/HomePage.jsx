import React from 'react'
import Categore from './Categore'
import Discount from './Discount'
import Furniture from './Furniture'
import Header from './Header'
import Blog from './Blog'

function HomePage() {
    return (
        <>
            <Header  />
            <Categore />
            <Discount />
            <Furniture />
            <Blog />
        </>
    )
}

export default HomePage