/*import React from "react";*/
import { Link } from "react-router-dom";
import styles from "./Card.css";

/*une vignette avec une photo qui lira le fichier json depuis home et faire un point map pour appeler autant de fois la card*/
function Card( data ) {
  return (
  <div >

     <h1>
       {
        data.titre 
       }
    </h1>
    
  </div> 
  );
}

  
  export default Card;