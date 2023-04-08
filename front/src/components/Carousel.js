import React, { component, useEffect, useState } from 'react'; 
import styles from "./Carousel.css";
import flecheHaut from "../fleche-haut.png";
import flecheBas from "../fleche-bas.png";
import logements from "../data/logements.json";
import {useLocation} from 'react-router-dom';


function Carousel() {
const id =useLocation().state["id"];
// const id= "c67ab8a7";
// const id= useLocation();
// console.log(id);
let tableau=[];
for (let l of logements){
    if (l.id==id){
        tableau= l.pictures;
    }
}

const Carousel = () => {
const [index, setIndex] = useState(0); /* utilisation du crochet useState pour créer une var d’état (index), pour garder une trace de la position actuelle dans le carrousel.*/
const length = 3;

/* Les fonctions handlePrevious et handleNext s’occupent des mises à jour de la valeur d’index lorsque l’utilisateur clique sur le Précédent et Prochain boutons*/
const handlePrevious = () => {
const newIndex = index - 1;
setIndex(newIndex < 0 ? length - 1 : newIndex); /* si inférieur à 0, on revient à 2*/
};

const handleNext = () => {
const newIndex = index + 1;
setIndex(newIndex >= length ? 0 : newIndex); /* si supérieur à 2 on revient à 0*/
};

return (
<div className="carousel">
  <img src={tableau [index]  }  />

<button onClick={handlePrevious}>Previous</button>
<button onClick={handleNext}>Next</button>
<p>{index}</p>
</div>

);
};

}
export default Carousel;
