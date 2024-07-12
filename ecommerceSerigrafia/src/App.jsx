import React from 'react'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContextProvider } from './context/CartContext'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

function App() {
  
  return (
    <div>

      <CartContextProvider>

        <BrowserRouter>

          <NavBar /> 
          <Routes>
            <Route path='/' element = {<ItemListContainer title='Bienvenido'/>}/>
            <Route path='/categorias/:categoryId' element = {<ItemListContainer title='Bienvenido'/>}/>
            <Route path='/producto/:productId' element = {<ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='*' element={<PageNotFound/>} />
            

          </Routes>
      
        </BrowserRouter>

      </CartContextProvider>
      
    </div>

  );
}

export default App
