import React, { component, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import Logo from "../../logo-kasa.svg";
import imageBannerBleue from "../../imageBannerBleue.jpg";
import Footer from "../Footer";
import styles from "./About.css";
import VectorHaut from "../../VectorHaut.png";
import VectorBas from "../../VectorBas.png";
// import Collapse from "./Collapse";

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
   
     {/* <p className="Fiabilité"> Fiabilité <div className="vector"> <i id="arrow" class="arrow_back_ios-24px 2g"></i>  </div></p>
     <p className="annonces">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
   
    <p className="Respect"> Respect</p>
    <p className="Service"> Service</p>
    <p className="Sécurité"> Sécurité</p>  */}

 {/* <Collapse/> enlever le commentaire quand fichier ciollapse est fait  */}
 <section className='section-element'>
            
            <div className='collapse-element'>
                <Collapse
                title= "Fiabilité"
                content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                />
            </div>
            <div className='collapse-element'>
                <Collapse 
                title= "Respect"
                content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.."
                />
            </div>
            <div className='collapse-element'>
                <Collapse 
                title= "Service"
                content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                />
            </div>
            <div className='collapse-element'>
                <Collapse 
                title= "Sécurité"
                content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </div>
        </section>
    <Footer/>
   
    </>  );
    }
    
    export default About;


  