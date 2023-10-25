import Count from "../ItemCount/ItemCount"
import '../../App.css'
import { useState } from "react";
import { Link } from "react-router-dom";


const ItemDetail = ({ title, image, price, stock, description,category }) => {

    const [quantityAdded, setQuantityAddded] = useState('');

    const onAdd = (cantidad) => {
        setQuantityAddded(cantidad)
    }

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
                ? <Count initial={1} stock={stock} onAdd={onAdd}/>
                : <Link to={'/cart'} className="btn-add" >Ir al Carrito</Link>
            }  





            {/* <Count initial={0} stock={stock} onAdd={(quantity) => console.log('Productos Agregados', quantity)} /> */}
            
            </footer>
        </div>
    )
}

export default ItemDetail