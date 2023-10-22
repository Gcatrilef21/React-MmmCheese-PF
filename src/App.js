import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './Components/Detail/detail';
import Navbar from './Components/NavBar/index-nav';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/login';
import MyAccount from './Pages/My-Account/index';
import NotFound from './Pages/Not-Found/not-found';
import Products from './Pages/Productos/products';
import PrivateRoute from './PrivateRoute';

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
