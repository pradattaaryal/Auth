import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header/Header.jsx';
import Login from './pages/Login.jsx';
import D from './pages/Dash.jsx';
import S from './pages/Signin.jsx';
import E from './pages/Error.jsx';
import React, { useState } from "react";
import Authcontext from './context/Authcontext.jsx';
function App() {
const [isAuth, setIsAuth] = useState(false);

const [user, setUser] = useState(false);
  return (
    <Authcontext.Provider value={{ isAuth, setIsAuth, user, setUser }}> <BrowserRouter>
  <Header></Header>
    <Routes>
  
    <Route path="/" element={<div className='mt-14'>< Login/></div>} />
    <Route path="/home" element={<div className='mt-14'>< Home/></div>} />

    <Route path="/dash" element={<div className='mt-14'>< D/></div>} />
    <Route path="/*" element={<div className='mt-14'>< E/></div>} />
    <Route path="/login" element={<div className='mt-14'>< Login/></div>} />
    <Route path="/signin" element={<div className='mt-14'> <S/></div>} />


    </Routes>
    </BrowserRouter>
    </Authcontext.Provider>

  )
}

export default App
