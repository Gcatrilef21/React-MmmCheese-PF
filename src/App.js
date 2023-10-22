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
import ProtectedRoute from './PrivateRoute/protectedRoute';

function App() {

  const [session, setSession] = useState(null)

  const handleSetSesion = (user)=> {
    setSession(user);
  }

  return (
    <BrowserRouter>
      <main>
      <Navbar/>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/login' element={<Login onLogin={handleSetSesion} />}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:idCheese' element={<Detail/>}/>
          <Route path='/*' element={<NotFound/>}/>
          <Route path='/my-account' element={
            <ProtectedRoute session= {session}>
              <MyAccount onLogout = {handleSetSesion}/>
            </ProtectedRoute>
          }/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
