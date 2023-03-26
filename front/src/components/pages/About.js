import React, { component, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
// import Header from "../Header";
import Logo from "../../logo-kasa.svg";
import imageBannerBleue from "../../imageBannerBleue.jpg";
import Footer from "../Footer";
import styles from "./About.css";

import Collapse from "../Collapse";

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
    
    <Collapse titre= "Fiabilité" text=" Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes. " 
     />
    <Collapse titre= "Respect" text=" La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme. " 
     />
     <Collapse titre= "Service" text=" Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question. " 
     />
     <Collapse titre= "Sécurité" text=" Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes. " 
     />
   
     {/* <p className="Fiabilité"> Fiabilité <div className="vector"> <i id="arrow" class="arrow_back_ios-24px 2g"></i>  </div></p>
     <p className="annonces">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
   
    <p className="Respect"> Respect</p>
    <p className="Service"> Service</p>
    <p className="Sécurité"> Sécurité</p>  */}

 {/* <Collapse/> enlever le commentaire quand fichier collapse est fait  */}
  
   

      <Footer />
    
    </>  );
    }
    
    export default About;


  