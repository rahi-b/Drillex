import React from 'react'
import { useSelector } from 'react-redux'
// import EmptyCart from "../../assets/images/emptycart.png";
import emptyCart from "../assets/images/emptycart.png";



const Cart = () => {
  const cart = useSelector(state => state.cart)
  return (
    <div>
      {cart.products.length > 0 ?
      <div></div> : 
      <div className='flex justify-center'>
         <img src={emptyCart} alt="" className='h-96'/>
      </div> }
    </div>
  )
}

export default Cart
