import { useState } from 'react'
import '../../App.css'
import { useNavigate } from 'react-router-dom'

const Login = ({onLogin}) => {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        email:'',
        password:''
    })

    const handleOnChange = ({target}) =>{
        const {value, name} = target
        setForm(prev =>({
            ...prev,
            [name]:value
        }))
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault()
        const session = {...form, token:124345}
        onLogin(session)
        navigate('/my-account')
    }

    return (
        <section className='form-card'>
        <form className="form">
            <div className="card_header">
                <h1 className="form_heading">Mi Cuenta</h1>
            </div>
            <div className="field">
                <label for="username">Usuario</label>
                <input onChange={handleOnChange} className="input" name="email" type="text" placeholder="Ingrese su Usuario" />
            </div>
            <div className="field">
                <label for="password">Contraseña</label>
                <input onChange={handleOnChange} className="input" name="password" type="text" placeholder="Ingrese su Contraseña" />
            </div>
            <div className="field">
                <button onClick={handleOnSubmit} className="login-btn">Ingresar</button>
            </div>
        </form>
        </section>
    )
}

export default Login