import React, { component, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import { useParams } from "react-router-dom";
import styles from "./PageLogement.css";
import Logo from "../../logo-kasa.svg";
import imageBouddha from "../../Bouddha.png";
import { useLocation } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import Card from "../Card";
import Carousel from "../Carousel";
import logements from "../../data/logements.json";


import Collapse from "../Collapse";


      function PageLogement() {
        // const { state } = useLocation()
        const { state } = useParams();
        // const id = useLocation().state["id"];
        // console.log(id);
       
        return (
          <> 
    <Header /> 
    <Collapse />
    <Carousel />
        
            <img className="Bouddha" src={imageBouddha} alt="photo d'une salle à manger" />
      <header className="header">
             
         <nav className="headerLink">
            <div>
            <Link to={`/`}><h1 className="Accueil">Accueil</h1></Link>
        </div>
        <div>
          <Link to={`/About`}><h1 className="APropos">A Propos</h1></Link>
            </div>
          </nav>
        </header> 
        
        <Footer />
        </> 
        );
        }
        
        export default PageLogement;