import React, { useContext } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {

  const { getQuantity} = useContext (Context)

  return (
    <div>
      

      <button> 
        <Link to='/cart'> <FaCartShopping /> </Link>
        <span>{ getQuantity() > 0 && getQuantity() }</span>
       </button>
      
    </div>
  )
}

export default CartWidget
