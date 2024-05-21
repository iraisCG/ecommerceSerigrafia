import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './navBar.css';


const navBar = () => {
  return (
    <div className='menuE'>

<div>
        <img src='../medios/logo_nav.png'></img>
      </div>
     
      
      <div>
        <ul>
          <li>Inicio</li>
          <li>Inicio</li>
          <li>Inicio</li>

        </ul>
      </div>

      <div>
      <CartWidget />

      </div>
      
       
    </div>
      
  )
}

export default navBar
