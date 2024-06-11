import React, { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../data/asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


  


const ItemListContainer = ({title}) => {
  
  const [ products, setProducts] = useState ([]) /** Inicializar*/
  const { categoryId } = useParams()
  console.log(categoryId)
  
  useEffect ( () => { /** Llamar a la función  */
    const dataProductos = categoryId ? getProductsByCategory (categoryId) : getProducts()
    
    dataProductos
    .then ((data) => setProducts(data))
    .catch ((error) => console.log (error))
  }, [categoryId])

  console.log(products)
  

  return (
    <div>
      <h1>{title}</h1>
      <ItemList products={products} />
    </div>
  ) 
}

export default ItemListContainer
