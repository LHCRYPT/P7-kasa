import React, { component, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom"
// import { Link } from "react-router-dom";
import styles from "./PageLogement.css";
import Logo from "../../logo-kasa.svg";
import imageBouddha from "../../Bouddha.png";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";


import Collapse from "../Collapse";


      function PageLogement() {
        // const id = useLocation().state["id"];
        // console.log(id);
        return (
            <> 
    <Header /> 
            <img className="Bouddha" src={imageBouddha} alt="photo d'une salle à manger" />
      <header className="header">
             
         <nav className="headerLink">
            <div>
              <Link to={`/`}><p className="Accueil">Accueil</p></Link>
            </div>
            <div>
              <Link to={`/About`}><p className="APropos">A Propos</p></Link>
            </div>
          </nav>
        </header> 
        <Footer />
        </> 
        );
        }
        
        export default PageLogement;