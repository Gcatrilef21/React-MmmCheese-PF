import { useContext } from 'react'
import '../../App.css'
import { CartFull } from '../../icons/incon'
import { CartContext } from '../../context/cart-context'

const CartIcon = () => {

    const {cartQuantity} = useContext(CartContext)

    return(
        <div>
            <CartFull/>
            {cartQuantity()>0 && <span className='count'>{cartQuantity()}</span>}
        </div>
    )
}

export default CartIcon