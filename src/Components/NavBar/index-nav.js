import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () =>{

    const routes = [
        {
            path: '/',
            text: 'Inicio'
        }, 
        {
            path: '/products',
            text: 'Productos'
        }, 
        {
            path: '/my-account',
            text: 'Mi Cuenta'
        }
    ]

    return (
        <header className='header'>
            <aside className="name"> mmmc
                <span className="name n-left">heese</span>
            </aside>
            <nav className="navbar-container">
                <ul>
                    {routes.map (({path, text})=>(
                        <NavLink to={path} className= {( {isActive} ) => isActive ? 'navbar-contain' : 'navbar-letter'}>{text}</NavLink>
                    ))}
                </ul>
            </nav>
        </header>
        
    )
}

export default Navbar