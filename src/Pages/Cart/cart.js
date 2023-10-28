import './cart.css'
import React,{ useContext } from 'react'
import { CartContext } from '../../context/cart-context'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

export const Cart = () => {

const {cart, clear,total}= useContext(CartContext)
    console.table(cart)
    return (
        <div>
            {cart.length ?
                <section className='container '>
                    {cart.map((item)=> <CartItem key={item.id} item={item} />)}
                    <p className='totPrice'>Total a pagar: ${total()}</p>
                    <div>
                        <button onClick={clear} className='btn-cart'> Vaciar Carrito </button>
                        <Link to={'/checkout'}><button className='btn-cart' > Terminar Compra </button></Link>
                    </div>
                </section>
                :<section className='container'>
                    <h4 >Tu carrito esta vacio</h4>
                    <Link to={'/products'} className='btn-buy'> Seguir Comprando</Link>
                </section>}
        </div>
    )
}