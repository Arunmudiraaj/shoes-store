import React from 'react'
import { Button, Table } from 'react-bootstrap'
import CartContext from './Context/CartContext'
import { useContext } from 'react'

const Cart = (props) => {
    const cartCtx = useContext(CartContext)
    const placeOrder = ()=>{
        if (cartCtx.items.length>0){
            cartCtx.empty()
            alert("Thanks for purchasing")
        }
        else{
            alert("Your cart is empty. Add some dope shoes 😎")
        }
    }
    const clicked = e=>{
        if(e.target.id==='overlay'){
            props.toggle()
        }
    }
  return (
    <div id='overlay' onClick={clicked} style={{'backgroundColor': 'rgba(0,0,0,0.5)'}} className='w-100 h-100 position-fixed top-0'>
        <div id='cart' style={{'zIndex': 1}} className='w-50 h-50 bg-black mx-auto my-5 p-2 zindex-modal'>
            <Button variant='danger' size='sm' onClick={()=>{props.toggle()}}>X</Button>
            <Table>
                    <tbody>
                        {cartCtx.items.map(item=><tr key={item._id} className='text-center'>
                            <td className='text-center'>{item.name}</td>
                            <td>{`1 ${item.size}`}</td>
                            <td>{item.price}</td>
                        </tr>)}
                    </tbody>

            </Table>
            <Button onClick={placeOrder}>Place Order</Button>
            
        </div>
        
    </div>
  )
}

export default Cart