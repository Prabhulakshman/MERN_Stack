import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import Header from './components/header';
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Signin" element={<Signin/>}/>
    </Routes>
    </BrowserRouter>
  )
}