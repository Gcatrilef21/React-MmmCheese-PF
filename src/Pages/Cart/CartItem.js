import './cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/cart-context'


const CartItem = ({item}) => {

    const {deleteCheese} = useContext(CartContext)
    return (
        <div className='cartItem'>

            <img src={`/images/${item.image}`} alt={item.title} width={'100rem'}/>
            <p>{item.title}</p>
            <p>$ {item.price}</p>
            <p>{item.quantity}</p>
            <p>SubTotal : $ {item.quantity * item.price} </p>
            <button className="btn btn-danger" onClick={()=> deleteCheese(item.id)}><strong>X</strong></button>

        </div>
    )
}

export default CartItem