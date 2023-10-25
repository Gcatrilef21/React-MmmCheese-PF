import '../../App.css'
import React,{ useContext } from 'react'
import { CartContext } from '../../context/cart-context'
import { Link } from 'react-router-dom'

export const Cart = () => {

const {cart, clear,total}= useContext(CartContext)
    cart.
    return (
        <div>
            {cart.lenght ? <p>mapaear el carrtito</p>
                :<div>
                    <h4>Tu carrito esta empty</h4>
                    <Link to={'/products'} className='btn btn-dark'> Seguir Comprando</Link>
                </div>}
        </div>
    )
}