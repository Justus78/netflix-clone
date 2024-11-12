import React, { useEffect } from 'react'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Player } from './Pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const navigate =  useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        console.log("logged in");
        navigate('/');
      } else {
        console.log("logged out");
        navigate('/login');
      }
    })
  }, []);

  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='player/:id' element={<Player />} />
      </Routes>
    </div>
  )
}

export default App