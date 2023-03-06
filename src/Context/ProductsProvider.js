import React, { useState } from 'react'
import ProductsContext from './ProductsContext'
import { useEffect } from 'react'
import axios from 'axios'
const url = 'https://crudcrud.com/api/47944f7f0b8c4245902360928a45bc87/products'
const ProductsProvider = (props) => {

  const populateInitialData = async ()=>{
    const data = await axios.get(url)
    setProducts(data.data)
  }

  useEffect(()=>{
     populateInitialData()
  },[])
  
  const [products, setProducts] = useState([])
    const addItemHandler = (item)=>{
      setProducts(pre=>{
        const updatedArr = [...pre]
        updatedArr.push(item)
        return updatedArr
      })
    }
    const removeItemHandler = (id)=>{
      setProducts(pre=>{
        const reqIndex = pre.findIndex(item=>item._id===id)
        if (reqIndex!==-1){
          const updatedArr = [...pre]
          updatedArr.splice(reqIndex,1)
          return updatedArr
        }
      })
        
    }
    const productsState = {
      items : products,
      addItem : addItemHandler,
      removeItem : removeItemHandler,
      url : url
    }
   
  return (
    <ProductsContext.Provider value={productsState}>
      {props.children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider