import React, { component, useEffect, useState } from 'react'; /* importation de Hook useState depuis React. Il me permet d’utiliser un état local dans une fonction composant*/
import flecheHaut from "../etoileBlanche.png";
import flecheBas from "../etoileRouge.png";
import styles from "./Etoile.css";
import { Rating} from 'react-simple-star-rating'

function Etoile() {

    const Etoile = () => {}
    const [rating, setRating] = useState(0) //initial rating value

    //catch Rating value
    const handleRating = (rate) => {
        console.log(rate)
        setRating(rate)
        //other logic
        
    }

    return (
       
            <Rating onClick={handleRating} ratingValue={rating} /* Available Props*/ />
       
    )
}
<Etoile/> 
export default Etoile;