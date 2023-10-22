import '../../App.css'

const Login = () => {

    return (
        <section className='form-card'>
        <form className="form">
            <div className="card_header">
                <h1 className="form_heading">Mi Cuenta</h1>
            </div>
            <div className="field">
                <label for="username">Usuario</label>
                <input className="input" name="username" type="text" placeholder="Ingrese su Usuario" />
            </div>
            <div className="field">
                <label for="password">Contraseña</label>
                <input className="input" name="user_password" type="password" placeholder="Ingrese su Contraseña" />
            </div>
            <div className="field">
                <button className="button">Ingresar</button>
            </div>
        </form>
        </section>
    )
}

export default Login