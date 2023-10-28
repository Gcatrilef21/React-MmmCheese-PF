import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import Load from "../Loading/load";
import ItemDetail from "./ItemDetail";

const Detail = () => {

    const [loading, setLoading] = useState(false);
    const [cheeses, setCheeses] = useState(null);
    const { idCheese } = useParams();

    /*useEffect(() => {
         setLoading(true);
        
        getCheesesById(idCheese)
            .then(resp => setCheeses(resp))
            .catch(err => { console.error(err) })
            .finally(() => setLoading(false))
    }, [idCheese]); */

    useEffect(()=>{
        setLoading(true);
        const collectProd = collection(db, 'cheese')
        const docRef = doc(collectProd,idCheese)
        getDoc(docRef)
            .then((resp) => setCheeses({idCheese:resp.id, ...resp.data()}))
            .catch(err => console.error(err))
            .finally(()=> setLoading(false))
    },[])

    if (loading) return <Load /> 

    return (
        <section >
            <ItemDetail {...cheeses}/>
        </section>

    )
}

export default Detail