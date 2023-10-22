import { Link, NavLink } from 'react-router-dom';
import '../../App.css';

const Navbar = () =>{



    return (
        <header className='header'>
            <Link to={'/'} className={'name'}>MMMCheese</Link>
            <nav className="navbar-container">
                <ul>
                    <NavLink end to={'/products'} className= {( {isActive} ) => isActive ? 'navbar-active' : 'navbar-letter'}>Test</NavLink>
                    
                </ul>
            </nav>
        </header>
        
    )
}

export default Navbar