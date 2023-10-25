
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCheesesById } from "../../mock";
import Load from "../Loading/load";
import ItemDetail from "./ItemDetail";

const Detail = () => {

    const [loading, setLoading] = useState(false);
    const [cheeses, setCheeses] = useState(null);
    const { idCheese } = useParams();

    useEffect(() => {
        setLoading(true);
        /* getItem(idCheese)
            .then((snapshot) =>{
                setCheeses({ id: snapshot.id, ...snapshot.data()})
            })
            .catch(err => { console.error(err) })
            .finally(() => setLoading(false))  */
        getCheesesById(idCheese)
            .then(resp => setCheeses(resp))
            .catch(err => { console.error(err) })
            .finally(() => setLoading(false))
    }, [idCheese])

    if (loading) return <Load />

    return (
        <section >
            <ItemDetail {...cheeses}/>
        </section>

    )
}

export default Detail