import React, { component, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import { useParams } from "react-router-dom";
import styles from "./PageLogement.css";
import Logo from "../../logo-kasa.svg";
import imageBouddha from "../../Bouddha.png";
import Header from "../Header";
import Footer from "../Footer";
import Card from "../Card";
import Carousel from "../Carousel";
//import Etoile from "../Etoile";
// import { Rating} from 'react-simple-star-rating'
import logements from "../../data/logements.json";
// import Collapse from "../Collapse";


      function PageLogement() {
       
        const {id} =useParams();
    
        let tableau=[];
         for (let l of logements){
              if (l.id==id){
                tableau= l.pictures;
                              
           }
         }
          
  
        return (
          <> 
    <Header /> 
    {/* <Carousel />  */}
    {/* <h1> test </h1> */}

    <Carousel title="abc" pictures={tableau}  /> 

           
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