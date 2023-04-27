import React, { useState } from "react";
import "./Slider.css";
import flecheDroite from "../assets/icon/fleche-droite.png";
import flecheGauche from "../assets/icon/fleche-gauche.png";


export default function Carousel({ title, pictures }) {
  
  
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
