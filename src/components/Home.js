import React from 'react'
import { Cartstate } from '../context/Context'
import OneProduct from './OneProduct'
import "./style.css"
import Filters from './Filters'

const Home = () => {
    const { 
        state: {products}, 
        prodState: {sort, byRating, searchQuery }
    } = Cartstate();

    const transformProducts = () => {
        let sortedProducts = products;
     if (sort) {
        sortedProducts = sortedProducts.sort((a,b) => 
            sort === 'LowToHigh' ? a.price - b.price : b.price - a.price 
        )
     }
     if (byRating) {
        sortedProducts = sortedProducts.filter(
            (prod) => prod.ratings >= byRating 
        )
     }
     if (searchQuery) {
        sortedProducts = sortedProducts.filter(
            (prod) => prod.name.toLowerCase().includes(searchQuery)
        )
     }
     return sortedProducts

    }

return (
<div className='home'>
    <Filters/>
    <div className='productContainer'>
     {transformProducts().map((prod) => {
      return <OneProduct prod={prod} key={prod.id} />
     })}
    </div>
  </div>
)
}

export default Home