import React from 'react'
import Cart from './Cart'
export default function addToCart(amount,setDecrease,setIncrease) {
  return (
    <div className='cart-button'>
        <button onClick={()=>setDecrease()}></button>
        <div className='amount'>{amount} </div>
        <button onClick={()=>setIncrease()}></button>
    </div>
  )
}
