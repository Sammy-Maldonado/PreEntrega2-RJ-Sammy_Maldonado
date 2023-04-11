import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
  const imgCarrito = "./img/carrito-de-compras.png"
  return (
    <>
      <div className='carrito-container'>
        <img className='carritoDeCompras me-2 img-fluid' src={imgCarrito} alt="carrito de compras de great templates" />
        <strong className='me-5'>5</strong>
      </div>

    </>
  )
}

export default CartWidget