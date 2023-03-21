import React, { component, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import Logo from "../../logo-kasa.svg";
import imageBannerBleue from "../../imageBannerBleue.jpg";
import Footer from "../Footer";
import styles from "./About.css";

function About() {
    return (
        <> 

        <img className="imageBannerBleue" src={imageBannerBleue} alt="rivière entre 2 montagnes" />
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
     <p className="Fiabilité"> Fiabilité</p>
    <p className="Respect"> Respect</p>
    <p className="Service"> Service</p>
    <p className="Sécurité"> Sécurité</p> 
    <Footer/>
   
    </>  );
    }
    
    export default About;


  