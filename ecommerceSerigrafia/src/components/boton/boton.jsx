import React from 'react'

const boton = () => {
    const handleClick = ( ) => {
        alert ('clickeaste')
    }
  return (
    <div>
       <button onClick={handleClick}> boton</button>
    </div>
  )
}

export default boton
