import React, { component } from 'react';
import './App.css';
import VignetteLocation from './components/VignetteLocation';

function App() {
  //faire fetch pour chercher json remplacer 6 et 10
  const locations=[
    {nom:"location 1 Brest 2.0", image:"photo.jpg"},
    {nom:"location 2 bord", image:"photo.jpg"},
    {nom:"location 3 Brest", image:"photo.jpg"}
  ];
    return (
      
        <div className="App"> 
     
        <div>
          <img src="logo-kasa.svg" alt="logo Kasa"/>
           </div>
           
           <div class="location"> 
{locations.map(loc =><VignetteLocation nom={loc.nom}></VignetteLocation>) }


  {/*<VignetteLocation nom="location 1 bord"></VignetteLocation>
  <VignetteLocation nom="location 2 bord"></VignetteLocation>
   <VignetteLocation nom="location 3 brest"></VignetteLocation>*/}

   </div>
   </div>
    );
}


export default App;
