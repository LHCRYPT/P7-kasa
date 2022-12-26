import React, { component, useEffect, useState } from 'react';
import './App.css';
import VignetteLocation from './components/VignetteLocation';
import locations from "./data/logements.json";
import './components/Home';
import './components/Page';

function App() {
 
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lodging/:id" element={<Lodging />} />
          <Route path="/about" element={<About />} />
        
          <Route path="*" element={<Error404 />} />
        </Routes>
      );
    };


export default App;

