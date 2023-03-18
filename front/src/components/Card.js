/*import React from "react";*/
import { Link } from "react-router-dom";
import styles from "./Card.css";

/*une vignette avec une photo qui lira le fichier json depuis home et faire un point map pour appeler autant de fois la card*/
function Card( data ) {
  /*console.log(data.image);*/
  return (
  <div >

 <img src={data.image}
 className="img-card"/>
     <p className="titre-card">
       {
        data.title 
       }

    </p>
    
  </div> 
  );
}

  
  export default Card;