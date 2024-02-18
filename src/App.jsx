import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import Header from './components/header';
import PrivateRoute from './components/PrivateRoute';
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/About" element={<About/>}/>
        <Route  element={<PrivateRoute/>}>
        <Route path="/Profile" element={<Profile/>}/>
        </Route>     
    </Routes>
    </BrowserRouter>
  );
}