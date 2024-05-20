
import './App.css'
import Boton from './components/boton/boton'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  
  return (
    <div>
      <Boton/>
      <NavBar />
      <ItemListContainer title='Bienvenido'/>
    </div>
   
  )
}

export default App
