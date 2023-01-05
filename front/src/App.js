import React, { component, useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import Error from "./components/pages/Error";
import About from "./components/pages/About";
/*import PageLogement from "./components/pages/PageLogement";*/
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
 
    return (
      
        <div className="App"> 
         
         
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
       
         
      </Routes>
      
    </div>
  );
}

export default App;