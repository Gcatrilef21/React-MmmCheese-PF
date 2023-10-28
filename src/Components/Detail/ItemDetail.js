import Count from "../ItemCount/ItemCount"
import '../../App.css'
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart-context";

const ItemDetail = (cheese) => { 


    const [quantityAdded, setQuantityAddded] = useState('');
    const {addCheese} = useContext(CartContext)

    const onAdd = (cantidad) => {
        setQuantityAddded(cantidad)
        addCheese(cheese, cantidad)
    }

    const { title, image, price, stock, description,category } = cheese

    return (
        <div className="container detail">
            <h2>{title}</h2>
            <h5>{category}</h5>
            <img className="imgProduct" src={`../images/${image}`} alt={title} />
            <div className="desc-text">
                <p>Precio: $ {price}</p>
                <p>Stock: {stock}</p>
                <p>{description}</p>
            </div>
            <footer className="footer-detail">
            {quantityAdded === '' 
                ? <Count initial={0} stock={stock} onAdd={onAdd}/>
                : <Link to={'/cart'} className="btn cart-btn" >Ir al Carrito</Link>
            }              
            </footer>
        </div>
    )
}

export default ItemDetail