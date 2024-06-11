import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../data/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState ({})
    const [ loading, setLoading] = useState (true)
    const {productId} = useParams()

    

    useEffect(() => {
        getProductById(productId)
        .then((data) => setProducto(data))
        .catch((error) => console.log(error))
        .finally(() => setLoading (false))
    }, []);

    if (loading) {
        return <div>Cargando...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
      }
    
      if (!producto) {
        return <div>Producto no encontrado</div>; // Muestra un mensaje si no se encuentra el producto
      }

     
  return (
    <div>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer
