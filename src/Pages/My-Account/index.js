import { useNavigate } from 'react-router-dom'
import '../../App.css'

const MyAccount = ({onLogout}) => {

    const navigate = useNavigate()

    const handleLogOut = () =>{
        onLogout(null)
        navigate('/login')
    }

    return (
        <section>
            <h1 className="text-center"> Mi Cuenta</h1>
            <footer className="field">
                <button onClick={handleLogOut} className="button">Sing Out </button>
            </footer>
        </section>
    )
}

export default MyAccount