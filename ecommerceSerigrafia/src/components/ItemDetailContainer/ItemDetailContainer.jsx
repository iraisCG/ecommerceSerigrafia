import React, { useEffect, useState } from 'react'
import './itemDetailContainer.css'
import {  useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState ({})
    const [ loading, setLoading] = useState (true)
    const {productId} = useParams()


    

    useEffect(() => {
      const getData = async () => {
        const queryRef = doc(db,'productos', productId)

        const response = await getDoc(queryRef)

        const newItem = {
          ...response.data(),
          id: response.id
        }

        setProducto(newItem)
        setLoading(false)
      }

      getData()
    }, [])

   
     
  return (
    <div>

      {
        loading  ?

        <div class="cargar">
        <span class="loader"></span>          
        </div> 

        :

        <ItemDetail {...producto}/>
        
      }
        
    </div>
  )
}

export default ItemDetailContainer
