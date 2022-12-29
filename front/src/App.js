import React, { component, useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Error from "./pages/Error";
import About from "./pages/About";
import PageLogement from "./pages/PageLogement";
import Header from "./pages/Header";
import Footer from "./pages/Footer";


function App() {
 
    return (
      
        <div className="App"> 
         
         <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/lodging/:id" element={<Lodging />} />
         <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;