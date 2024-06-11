import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({nombre, stock}) => {

    


  return (
    <div>
        <h2>Detalles del Producto</h2>
        nombre:{nombre}
        <ItemCount stock= {stock} valorInicial = {1} />
    </div>
  )
};

export default ItemDetail
