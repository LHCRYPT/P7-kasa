import React, { component, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import { useParams } from "react-router-dom";
import styles from "./PageLogement.css";
import Logo from "../../logo-kasa.svg";
import imageBouddha from "../../Bouddha.png";
import Header from "../Header";
import Footer from "../Footer";
// import Card from "../Card";
import Carousel from "../Carousel";
//import Etoile from "../Etoile";
// import { Rating} from 'react-simple-star-rating'
import logements from "../../data/logements.json";
// import Collapse from "../Collapse";


      function PageLogement() {
       
        const {id} =useParams();
        // const id= "c67ab8a7";
        //const id= useLocation();
        // console.log(id);
        let tableau=[];
         for (let l of logements){
              if (l.id==id){
                tableau= l.pictures;
                // console.log (l.pictures);
                 
           }
         }
          
  
        // 
        //identification du logment selectionné par id
        //   function getLogementWithId (data, logementId) {
        //     for (let logement of data) {
        //       if (logement.id === logementId) { 
        //       return logement
        //   }}}
          
        // const {logementId} = useParams()
        // const logement = getLogementWithId(data, logementId)

        return (
          <> 
    <Header /> 
    {/* <Carousel />  */}
    <h1> test </h1>

    <Carousel title="abc" pictures={tableau}  /> 

   {/* <Etoile />  */}
   {/* <Collapse />  */}
    
   
   {/* <Etoile/> */}
           {/* <img className="Bouddha" src={imageBouddha} alt="photo d'une salle à manger" />  */}
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