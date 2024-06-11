import React from 'react'
import './App.css'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <div>


      <BrowserRouter>
      <NavBar /> 
      <Routes>
        <Route path='/' element = {<ItemListContainer title='Bienvenido'/>}/>
        <Route path='/categorias/:categoryId' element = {<ItemListContainer title='Bienvenido'/>}/>
      </Routes>
      
      </BrowserRouter>
      
    </div>

  );
}

export default App
