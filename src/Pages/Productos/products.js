import { useEffect, useState } from "react";
import { getCheeses } from "../../mock";
import Load from "../../Components/Loading/load";
import './products.css';
import { Link } from "react-router-dom";


const Products = () => {

    const [loading, setLoading] = useState(false)
    const [cheeses, setCheeses] = useState([])

    useEffect(() => {
        setLoading(true)
        getCheeses()
            .then((cheeses) => setCheeses(cheeses))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return < Load />

    return (
        <div >
            <h1>Nuestro Quesos</h1>
            <section className="item">
                {cheeses.map(({ id, image, title, price, stock }) => (
                    <div key={id} className="card">
                        <div >
                            <img className="imglogo" src={`/images/${image}`} alt={title} />
                            <div className="card__content">
                                <h3 className="card__title">{title}</h3>
                                <p className="card__description" >Precio: ${price} </p>
                                <p className="card__description">Stock: {stock}</p>
                                <footer>
                                    <Link to ={`/products/${id}`} className="card-footer">detalle...</Link>
                                </footer>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )


}

export default Products