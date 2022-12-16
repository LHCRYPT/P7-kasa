import React, { component, useEffect, useState } from 'react';
import './Home.css';
import VignetteLocation from './components/VignetteLocation';
import locations from "./data/logements.json";

function App() {
 


  
    return (
      
        <div className="App"> 
     
        <div>
          <img src="logo-kasa.svg" alt="logo Kasa"/>
           </div>
           
           <div class="location"> 
{locations.map(loc =><VignetteLocation nom={loc.title}></VignetteLocation>) }

   </div>
   </div>
    );
}


export default App;