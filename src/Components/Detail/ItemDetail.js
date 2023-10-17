import Count from "../ItemCount/ItemCount"
import './ItemDetail';


const ItemDetail =( {name, image, price, stock, description} ) =>{

    return (

        <section className="container">
            <div className="card-detail">
                <img className="imgProduct" src={`../images/${image}`} alt={name}/>
                <h3>{name}</h3>
                <div className="desc-text">
                    <p>Precio: {price}</p>
                    <p>Stock: {stock}</p>
                    <p>{description}</p>
                </div>
                <footer>
                    <Count initial={0} stock={stock} onAdd={(quantity) => console.log('Productos Agregados', quantity)}/>
                </footer>
        </div>
        </section>
    )
}

export default ItemDetail