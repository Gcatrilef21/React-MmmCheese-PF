import { useState } from "react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../../services/config"
import { useContext } from "react"
import { CartContext } from "../../context/cart-context"
import Load from "../../Components/Loading/load"

const CheckOut = () => {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false);
    const [validateEmail, setValidateEmail] = useState('')
    const [orderID, setOrderId] = useState('')
    const { cart, total, clear } = useContext(CartContext)
    const datosComprador = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const finalizarCompra = (e) => {
        e.preventDefault()
        setLoading(true);
        if (!user.name && !user.phone && !user.email) {
            alert('Campos Obligatorios')
        } else {
            let order = {
                user,
                item: cart,
                total: total(),
                date: serverTimestamp(),
            }
            const sellChees = collection(db, 'order')
            addDoc(sellChees, order)
                .then((res) => {
                    setOrderId(res.id)
                    console.log(res.id)
                    clear()
                })
                .catch((err) => console.log(err))
                .finally(() => setLoading(false))
        }
    }

    if (loading) return <Load />

    return (
        <div>
            {orderID !== '' ? <section className="container">
            <h2> Felicitaciones </h2>
            <h4>Tu numero de orden es: ${orderID} </h4>
        </section> 
        :  <section className="container">
        <h3>Finalizar la Compra</h3>
        <h5>Campos Necesarios</h5>
        <section className='form-card'>
            <form onSubmit={finalizarCompra} className="form">
                <div className="field">
                    <label for="username">Nombre Completo</label>
                    <input className="input" onChange={datosComprador} name="name" type="text" placeholder="Nombre y Apellido" required />
                </div>
                <div className="field">
                    <label for="username">Numero Telefonico</label>
                    <input className="input" onChange={datosComprador} name="phone" type="text" placeholder="{56} + numero" required />
                </div>
                <div className="field">
                    <label for="username"> Correo</label>
                    <input className="input" onChange={datosComprador} name="email" type="email" placeholder="xxxx@xxxx.com" required />
                </div>
                <div className="field">
                    <label for="password">Repetir Correo</label>
                    <input className="input" onChange={((e) => setValidateEmail(e.target.value))} name="email" type="email" placeholder="xxxx@xxxx.com" required />
                </div>
                <div className="field">
                    <button className="ckOut-btn" disabled={validateEmail !== user.email} >Comprar</button>
                </div>
            </form>
        </section>
    </section> }
        </div>
    )
}

export default CheckOut