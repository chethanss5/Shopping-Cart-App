import React, { createContext, useContext, useReducer } from 'react'
import faker from 'faker'
import { cartReducer } from './Reducer'
import { prodReducer } from './Reducer'

const Cart = createContext()
faker.seed(99)

const Context = ({children}) => {
    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        Description: faker.commerce.productDescription(),
        image: faker.random.image(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5])
    
       }))
   
       const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    })

    const [prodState, prodDispatch] = useReducer(prodReducer, {
        byRating: 0,
        searchQuery: "",
    })

  return <Cart.Provider value = {{ state, dispatch, prodState, prodDispatch }}> 
    {children}
  </Cart.Provider>
}

export default Context
export const Cartstate = () => {
    return useContext(Cart)
}
