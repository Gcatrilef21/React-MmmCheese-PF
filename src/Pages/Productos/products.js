import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Load from "../../Components/Loading/load";
import { db } from "../../services/config";
import './products.css';


const Products = () => {

    const [loading, setLoading] = useState(false)
    const [cheeses, setCheeses] = useState([])
    const {category} = useParams();

    /* useEffect(() => {
        setLoading(true)
        getCheeses()
            .then((cheeses) => setCheeses(cheeses))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, []) */

    useEffect(()=>{
        setLoading(true)
        //const cheeseCollection = categoryId ? query(collection(db, 'cheese'), where('category', "==" , categoryId)),  : collection(db, 'cheese')
        const cheeseCollection = collection(db, 'cheese')
        getDocs(cheeseCollection)
        .then((resp) => {
            const list = resp.docs.map((prod)=>{
                return {
                    id:prod.id,
                    ...prod.data()
                }
            })
            setCheeses(list)
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false))
    },[])

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