import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App