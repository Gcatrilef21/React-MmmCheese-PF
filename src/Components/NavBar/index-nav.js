import { Link, NavLink } from 'react-router-dom';
import '../../App.css';
import { User } from '../../icons/incon';

const Navbar = () =>{

    return (
        <header className='header'>
            <Link to={'/'} className={'name'}>MMMCheese</Link>
            <nav className="navbar">
                <ul>
                    <NavLink end to={'/products'} className= {( {isActive} ) => 
                        isActive ? 'navbar-active' : 'navbar-letter'}>Productos</NavLink>
                </ul>
                <ul>
                    <NavLink end to={'/'} className= {( {isActive} ) => 
                        isActive ? 'navbar-active' : 'navbar-letter'}>Orden</NavLink>
                </ul>
                <ul>
                    <NavLink end to={'/my-account'} className= {( {isActive} ) => 
                        isActive ? 'navbar-active' : 'navbar-letter'}> <User/> </NavLink>
                </ul>
            </nav>
        </header>
        
    )
}

export default Navbar