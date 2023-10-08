import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCheesesById } from "../../../mock";
import Load from "../../Loading/load";

const Detail = () => {

    const [loading, setLoading] = useState(false);
    const [cheeses, setCheeses] = useState([]);
    const { idCheese } = useParams();

    useEffect(() => {
        setLoading(true);
        getCheesesById(idCheese)
            .then(resp => setCheeses(resp))
            .catch(err => { console.error(err) })
            .finally(() => setLoading(false))
    }, [idCheese])

    if (loading) return <Load />

    return (
        <section>
            <section className="item">
                <p>carga detalle</p>
            </section>
        </section>

    )
}

export default Detail