import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import AboutHeader from './components/about_Header/AboutHeader';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
<Route exact path='/' element={<Home />} />
<Route path='about' element={<AboutHeader />}>
  <Route path='company' element={<About />} />
</Route>
<Route exact path='/services' element={<Services />} />
 
</Routes>
    </BrowserRouter>
  );
}

export default App;
