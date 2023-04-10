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
        // const { state } = useLocation();
        // const { state } = useParams('id').id;
        
        // const id = useLocation().state["id"];
        // console.log(id);
       
        const data = require("../../data/logements.json")
        //identification du logment selectionné par id
          function getLogementWithId (data, logementId) {
            for (let logement of data) {
              if (logement.id === logementId) { 
              return logement
          }}}
          
        const {logementId} = useParams()
        const logement = getLogementWithId(data, logementId)

        return (
          <> 
    <Header /> 
    <Carousel /> 
   {/* <Collapse />  */}
    
   <h1>CDE</h1>
            {/* <img className="Bouddha" src={imageBouddha} alt="photo d'une salle à manger" /> */}
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