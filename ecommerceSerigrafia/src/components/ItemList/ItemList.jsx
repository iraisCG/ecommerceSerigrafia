import React from 'react'
import Item from '../Item/Item'
import './itemList.css'
 
const ItemList = ({products}) => {
  return (
    <div className='listaProducto'>
      {
           products.map((prod) => (
               
               <div  key={prod.id}>
                   
                   <Item prod={prod} />
               </div>

           ))
      }
    </div>
  )
}

export default ItemList
