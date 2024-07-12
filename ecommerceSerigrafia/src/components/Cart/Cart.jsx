import React, { useContext } from 'react'
import './cart.css'
import { Link } from 'react-router-dom'
import Context from '../../context/CartContext'






const Cart = () => {

    const { cart, removeItem, clearCart, getTotal } = useContext(Context)
    

    if (cart.length === 0) {
        return (
            <div>
                <h1>
                Todavia no agregas productos al carrito
                </h1>

                <button>
                    <Link to='/'> Ver productos </Link>
                </button>

                
            </div>
            
        )
    }
    else{

        return (
            <div>
                <h1>Añadidos al carrito de compra</h1>
        
                <div>
                    <table class="table table-striped table-bordered">
                        <thead class="table-light">
                            <tr>
                            
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Subtotal</th>
                            <th scope="col"> </th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((prod) => (
                                    <tr key={prod.id}>
                                        
                                        <td>{prod.nombre}</td>
                                        <td>{prod.quantity}</td>
                                        <td>{prod.precio}</td>
                                        <td>{prod.precio * prod.quantity}</td>
                                        <td>
                                            <button onClick={()=>removeItem(prod.id)}> 
                                                <img src="https://img.icons8.com/?size=100&id=85194&format=png&color=000000" alt="eliminar producto" />
                                                
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                            
                        </tbody>
        
                           
                        <tfoot>
                            <tr>
                                <td >
                                    <button onClick={() => clearCart()}>Vaciar carrito</button>
                                </td>
                                <th colSpan="3">
                                    <h2>Total: {getTotal()}</h2>
                                </th>
                                <td >
                                    <button> <Link to='/checkout'> Finalizar compra</Link></button>
                                </td>
                            </tr>
                           
                        </tfoot>
        
                        
                    </table>
                </div>
              
            </div>
        )
    }

  
}

export default Cart
