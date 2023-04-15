import React, { component, useEffect, useState } from "react";
import styles from "./Carousel.css";
import flecheHaut from "../fleche-haut.png";
import flecheBas from "../fleche-bas.png";
import flecheDroite from "../flecheDroite.png";
import flecheGauche from "../flecheGauche.png";
import logements from "../data/logements.json";
import { useParams } from "react-router-dom";

function Carousel({ title, pictures }) {
  
  
    const [index, setIndex] =
      useState(/* utilisation du crochet useState pour créer une var d’état (index), pour garder une trace de la position actuelle dans le carrousel.*/
        0
      ); 
    
    const length = pictures.length;
    /* Les fonctions handlePrevious et handleNext s’occupent des mises à jour de la valeur d’index lorsque l’utilisateur clique sur le Précédent et Prochain boutons*/
    const handlePrevious = () => {
      const newIndex = index - 1;
      setIndex(
        newIndex < 0 ? length - 1 : newIndex
      ); /* si inférieur à 0, on revient à 2*/
    };

    const handleNext = () => {
      const newIndex = index + 1;
      setIndex(
        newIndex >= length ? 0 : newIndex
      ); /* si supérieur à 2 on revient à 0*/
    };

    return (
      <>
        <div className="carousel">
          <img className="photo" src={pictures[index]} />
           {/* <h1>ABC</h1>  */}
          {/* {length !== 1 &&  */}
          <p className= "flecheGauche" onClick={handlePrevious} > 
          <img className="fg" src={flecheGauche } />
          </p>
          
          <p className= "flecheDroite" onClick={handleNext} > 
          <img className="fd" src={flecheDroite } />
          </p>
         
          <p>{index}</p>
        </div>
      </>
    );
  };

export default Carousel;
