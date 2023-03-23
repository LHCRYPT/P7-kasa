import React, { component, useEffect, useState } from 'react';
import VectorHaut from "../../VectorHaut.png";
import VectorBas from "../../VectorBas.png";
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
        {/* On click, toggle collapse */}
        <div className="button_container" onClick={toggle}>
          <div className="collapse_button">
            {" "}
            <p>{props.label}</p>{" "}
          </div>
          {/* si flêche vers le haut */}
          {open ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            // si flêche vers le bas
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </div>
        {/* si flêche vers le haut */}
        {open && <div className="collapse-element"> {props.content} </div>}
      </div>
    );
  };
export default Collapse;

/*  <i className="fa-solid fa-chevron-up"></i>*/
/*  <i className="fa-solid fa-chevron-down"></i> */