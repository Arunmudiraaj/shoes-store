import React from 'react'

const ProductsContext = React.createContext({
    items : [],
    addItem : (item)=>{},
    removeItem : (id)=>{},
    url : ''
})

export default ProductsContext