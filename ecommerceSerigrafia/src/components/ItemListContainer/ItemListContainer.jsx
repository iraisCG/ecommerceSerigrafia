import React, { useEffect, useState } from 'react'
import './itemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../config/firebase' 
import { collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = ({title}) => {
  
  const [ products, setProducts] = useState ([]) /** Inicializar*/
  const [ loading, setLoading ] = useState (true)
  
  const { categoryId } = useParams()
  
  
  useEffect ( () => { /** Llamar a la función  */
    setLoading(true)
    
    const getData = async () => {
      const coleccion = collection(db, 'productos')
      const queryRef =!categoryId ?
      coleccion
      :
      query(coleccion, where ('categoria', '==', categoryId))

      const response = await getDocs(queryRef)
      

      const productos = response.docs.map ((doc) => {
        const newItem ={
          ...doc.data(),
          id: doc.id
        }
        return newItem
      })
     
      setProducts(productos)
      setLoading(false)
    }
    getData()
  }, [categoryId])

  

  return (
    <div>
      <h1>{title}</h1>

     {
        loading ?
        <div class="cargar">
          <span class="loader"></span>
        </div>
        :
        <ItemList products={products} />
      }
      
    </div>
  ) 
}

export default ItemListContainer
