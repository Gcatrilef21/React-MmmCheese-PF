
import './App.css';
import Navbar from './Components/NavBar/index-nav';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './Components/Pages/Home/home';
import Login from './Components/Pages/Login/login';
import Products from './Components/Pages/Products-Cheese/products';
import Detail from './Components/Pages/Detail/detail';

function App() {
  return (
    <BrowserRouter>
      <main>
      <Navbar/>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:idCheese' element={<Detail/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
