import React, { component, useEffect, useState } from 'react'; 
import styles from "./Carousel.css";
import flecheHaut from "../fleche-haut.png";
import flecheBas from "../fleche-bas.png";



const Carousel = () => {
const [index, setIndex] = useState(0); /* utilisation du crochet useState pour créer une var d’état (index), pour garder une trace de la position actuelle dans le carrousel.*/
const length = 3;

/* Les fonctions handlePrevious et handleNext s’occupent des mises à jour de la valeur d’index lorsque l’utilisateur clique sur le Précédent et Prochain boutons*/
const handlePrevious = () => {
const newIndex = index - 1;
setIndex(newIndex < 0 ? length - 1 : newIndex);
};

const handleNext = () => {
const newIndex = index + 1;
setIndex(newIndex >= length ? 0 : newIndex);
};

return (
<div className="carousel">
<button onClick={handlePrevious}>Previous</button>
<button onClick={handleNext}>Next</button>
<p>{index}</p>
</div>
);
};

export default Carousel;
