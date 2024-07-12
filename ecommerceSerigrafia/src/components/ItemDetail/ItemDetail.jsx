import React, { useContext, useState } from 'react'
import './itemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom'
import Context from '../../context/CartContext'


const ItemDetail = ({nombre, precio, id, stock, imagen, descripcion}) => {

    const [ cantidad, setCantidad ] = useState (0)
    const { addItem} = useContext (Context)


    const onAdd = (quantity) => {
      const item ={
        id, 
        nombre, 
        precio
      }
      addItem (item, quantity) /**VERIFICAR {} */
      toast.success (`Agregaste ${quantity} unidades`, {
        theme: "colored"
      })
      setCantidad(quantity)
      
    }


  return (
    <div >
      <h1>Detalles del Producto</h1>

        <div class="contenedor">

          <div >
            <img src={imagen} alt={nombre} />
          </div>

          <div >
            <h2> {nombre} </h2>
            <p>{descripcion}</p>
            <p> Piezas disponibles: {stock}</p>
            
            {
              cantidad > 0 ?

              <div>
                  <button> <Link to='/cart'> Ir al carrito</Link> </button>

                  <button> <Link to='/'>Seguir comprando</Link> </button>
              </div>

              
             
              :

              <ItemCount stock= {stock} valorInicial = {1} onAdd={onAdd}/>
            }
            <ToastContainer/>
            
          </div>


        </div>
        
    </div>
  )
}

export default ItemDetail
