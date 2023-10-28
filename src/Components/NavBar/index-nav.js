import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import CartIcon from '../CartIcon/cartIcon';
import { User } from '../../icons/incon';


const Navbar = () =>{

    return (
        <header className='header'>
            <Link to={'/products'} className='name' >MMMCheese</Link>
            <nav>
                
                <ul>
                    
                    <NavLink to={'/products'} className= {( {isActive} ) => 
                        isActive ? 'navActive' : 'navBack'}>Productos</NavLink>
                </ul>
                <ul>
                    <NavLink to={'/my-account'} className= {( {isActive} ) => 
                        isActive ? 'navActive' : 'navBack'}> <User/> </NavLink>
                </ul>
                <ul>
                    <NavLink to={'/cart'} className= {( {isActive} ) => 
                        isActive ? 'navActive' : 'navBack'}> <CartIcon/></NavLink>
                </ul>
            </nav>
        </header>
        
    )
}

export default Navbar