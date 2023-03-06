import React, { useEffect } from 'react'
import { useState } from 'react'
import CartContext from './CartContext'
import axios from 'axios'

const url = 'https://crudcrud.com/api/47944f7f0b8c4245902360928a45bc87/cart'

const CartProvider = (props) => {
    const lodCartItems = async()=>{
        const data = await axios.get(url)
        setCartItems(data.data)
    
    }

    useEffect(()=>{
        lodCartItems()
    },[])
    const [cartItems, setCartItems] = useState([])
    const addItem = (item)=>{
        setCartItems(pre=>{
            const newArr = [...pre]
            newArr.push(item)
            return newArr
        })
    }

    const empty = ()=>{
        setCartItems([])


    }


    // const removeItem = id=>{
    //     setCartItems(pre=>{
    //         const newArr = [...pre]
    //         const reqIndex = newArr.find(item=>item._id===id)
    //         newArr.splice(reqIndex,1)
    //         return newArr
    //     })
    // }

    const cartContext = {
        items : cartItems,
        total : cartItems.length,
        addItem : addItem,
        // removeItem: removeItem,
        empty : empty,
        url : url
    }
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider