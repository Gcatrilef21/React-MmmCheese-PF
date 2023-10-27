import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCheesesById } from "../../mock";
import Load from "../Loading/load";
import ItemDetail from "./ItemDetail";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/config";

const Detail = () => {

    const [loading, setLoading] = useState(false);
    const [cheeses, setCheeses] = useState(null);
    const { idCheese } = useParams();

    useEffect(() => {
        setLoading(true);
        
        getCheesesById(idCheese)
            .then(resp => setCheeses(resp))
            .catch(err => { console.error(err) })
            .finally(() => setLoading(false))
    }, [idCheese])

    /* useEffect(() =>{
        setLoading(true)
        const testCollection = collection(db, "cheese")
        getDocs(testCollection)
            .then((resp) => console.log(resp))
            .catch((error) => alert( 'Ojo cuidao', error))
            .finally(() => setLoading(false))
    },[]) */

    if (loading) return <Load />

    return (
        <section >
            <ItemDetail {...cheeses}/>
        </section>

    )
}

export default Detail