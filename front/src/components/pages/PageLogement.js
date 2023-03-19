import React, { component, useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import PageLogement from "../data/logements.json";
/*import './components/pages/logements.css';    faire css*/

import Logo from "../../logo-kasa.svg";
import imageBannerBleue from "../../Bouddha.png";


      function PageLogement() {
        return (
            <> 
    
            <img className="Bouddha" src={imageBouddha} alt="photo d'une salle à manger" />
     <header className="header">
         <img className="logoHeader" src={Logo} alt="Logo Kasa" ></img>
      
         
         <nav className="headerLink">
            <div>
              <Link to={`/`}><p className="Accueil">Accueil</p></Link>
            </div>
            <div>
              <Link to={`/About`}><p className="APropos">A Propos</p></Link>
            </div>
          </nav>
        </header>
        </>  );
        }
        
        export default PageLogement;