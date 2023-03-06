import React from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import axios from 'axios'
import ProductsContext from './Context/ProductsContext';
import { useContext } from 'react';

import CartContext from './Context/CartContext';
const Products = () => {
  const productsCtx = useContext(ProductsContext)
  const cartCtx = useContext(CartContext)

  const addItem = async(item,size)=>{
    const newItem = {
      name: item.name,
      price : item.price,
      size : size
    }
 
    const serverItem = await axios.post(cartCtx.url, newItem)
    
    if (serverItem&& serverItem.data){
      cartCtx.addItem(serverItem.data)
      console.log(serverItem.data)
    }
  }
  const removeItem = id=>{
    axios.delete(`${productsCtx.url}/${id}`)
    .then((res)=>{
      if (res.statusText==='OK'){
        productsCtx.removeItem(id)
        console.log('removed')
      }
      
    })
  }

  return (
    <>
         <Table striped bordered hover size="sm">
      <tbody className='text-center'>
        {productsCtx.items.map(item=>  
        <tr key={item._id}>
          <td>{item.name}</td>
          <td>{item.desc}</td>
          <td>{item.price}</td>
          <td><Button onClick={()=>{addItem(item, 'L')}} size='sm'>Buy L ({item.large})</Button></td>
          <td><Button onClick={()=>{addItem(item, 'M')}} size='sm'>Buy M ({item.medium})</Button></td>
          <td><Button onClick={()=>{addItem(item, 'S')}} size='sm'>Buy S ({item.small})</Button></td>
          <td><Button onClick={()=>{removeItem(item._id)}} variant='danger'>X</Button></td>
          
        </tr>)} 
       
      </tbody>
    </Table>
    
    </>
  )
}

export default Products