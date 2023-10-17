
import './App.css';
import Navbar from './Components/NavBar/index-nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './Pages/Home/Home';
import Login from './Pages/Login/login';
import Products from './Pages/Productos/products';
import Detail from './Components/Detail/detail';
import MyAccount from './Pages/My-Account/index';
import PrivateRoute from './PrivateRoute';
import { useState } from 'react';
import NotFound from './Pages/Not-Found/not-found';

function App() {

  const [session] = useState(false) 

  return (
    <BrowserRouter>
      <main>
      <Navbar/>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:idCheese' element={<Detail/>}/>
          <Route path='/*' element={<NotFound/>}/>
          <Route path='/my-account' element={
            <PrivateRoute session={session}>
              <MyAccount/>
            </PrivateRoute>
          }/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
