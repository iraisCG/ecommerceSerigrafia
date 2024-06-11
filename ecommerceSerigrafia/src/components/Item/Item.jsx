import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

/** Contenido de la card de información del producto */
const Item = ({prod}) => {
  return (
    <div className='card'>
        <div>
            <h2> {prod.nombre} </h2> 
            <img src={prod.imagen} alt={prod.nombre} />
            <p> {prod.descripcion} </p>
            <h3> $ {prod.precio}  </h3>
        </div>

        <button>
        <Link to={`/producto/${prod.id}`}>Ver detalle</Link>
        </button>
     

    </div>
  )
}

export default Item
