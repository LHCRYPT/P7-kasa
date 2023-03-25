import React, { component, useEffect, useState } from 'react';
import VectorHaut from "../VectorHaut.png";
import VectorBas from "../VectorBas.png";
import styles from "./Collapse.css";

/*ici ce trouve l'encadrement de fiabilité et l'icône flèche*/
// function Collapse(data) {
  
//   return (
//     <div>
      
//     </div>
//   );
// }

const Collapse = (props) => {
    // Setting collapse not open
    const [open, setOpen] = useState(false);
  
    // Setting the opposite state of the collapse (toggle)
    const toggle = () => {
      setOpen(!open);
    };
  
    return (
      <div className="collapse-element">
        
        <div className="button_container" onClick={toggle}> /* toggle collapse Cliquez sur les boutons pour afficher/masquer un autre élément via les changements de classe*/
          <div className="collapse_button">
            {" "}
            <p>{props.label}</p>{" "}
          </div>
          
          {open ? (
            <i className="fa-solid fa-chevron-up"></i> /* si flêche vers le haut */
          ) : (
            
            <i className="fa-solid fa-chevron-down"></i>// si flêche vers le bas
          )}
        </div>
       
        {open && <div className="collapse-element"> {props.content} </div>} /* si flêche vers le haut */
      </div>
    );
  };
export default Collapse;

/*  <i className="fa-solid fa-chevron-up"></i>*/
/*  <i className="fa-solid fa-chevron-down"></i> */
