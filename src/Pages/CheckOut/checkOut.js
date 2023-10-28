import './checkOut.css'
import { useState } from "react"
import { navigate } from "react-router-dom"

const CheckOut = () => {

    const[user, setUser] = useState({})
    const[validateEmail, setValidateEmail] = useState('')

    const datosComprador =(e) =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const finalizarCompra = (e)=>{
        e.preventDefault()
    }
    
    return (
        <section className="container">
            <h3>Finalizar la Compra</h3>
            <h5>Campos Necesarios</h5>
            <section className='form-card'>
                <form onSubmit={finalizarCompra} className="form">
                    <div className="field">
                        <label for="username">Nombre Completo</label>
                        <input  className="input" onChange={datosComprador} name="email" type="text" placeholder="Nombre y Apellido" required  />
                    </div>
                    <div className="field">
                        <label for="username">Numero Telefonico</label>
                        <input  className="input" onChange={datosComprador} name="email" type="text" placeholder="{56} + numero" />
                    </div>
                    <div className="field">
                        <label for="username"> Correo</label>
                        <input  className="input" onChange={datosComprador} name="email" type="email" placeholder="xxxx@xxxx.com" />
                    </div>
                    <div className="field">
                        <label for="password">Repetir Correo</label>
                        <input  className="input" onChange={((e)=>setValidateEmail(e.target.value))} name="password" type="email" placeholder="xxxx@xxxx.com" />
                    </div>
                    <div className="field">
                        <button  className="ckOut-btn" disabled={validateEmail !== user.email} >Generar Orden</button>
                    </div>
                </form>
            </section>
 
        </section>
    )
}

export default CheckOut