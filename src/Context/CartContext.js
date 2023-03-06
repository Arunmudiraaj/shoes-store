import React from 'react'

const CartContext = React.createContext({
    items: [],
    total: 0,
    addItem: ()=>{},
    // removeItem : ()=>{},
    empty : ()=>{},
    url: ''
})

export default CartContext