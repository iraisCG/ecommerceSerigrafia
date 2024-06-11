import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './navBar.css';


const navBar = () => {
  return (
    <div className='menuE'>

      <div>
        <img src='../medios/logo_nav.png' alt='Logo'/>
      </div>
     
      
      <div>
        <ul>
          <li>
            Todo
          </li>
          <li>
          <Link to='/categorias/Químicos'>  Químicos</Link>
            </li>
          <li>
          <Link to='/categorias/Herramientas'>  Herramientas</Link>
          </li>
          <li>
          <Link to='/categorias/Pantallas'>  Pantallas</Link>
          </li>

        </ul>
      </div>

      <div className='carrito'>
      <CartWidget />

      </div>
      
       
    </div>
      
  )
}

export default navBar
