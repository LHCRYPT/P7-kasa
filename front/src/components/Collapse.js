import React, { component, useEffect, useState } from 'react'; /* importation de Hook useState depuis React. Il me permet d’utiliser un état local dans une fonction composant*/
import isOpen from "../isOpen.png";
import setIsOpen from "../setIsOpen.png";
import styles from "./Collapse.css";

/*ici ce trouve l'encadrement de fiabilité et l'icône flèche*/
// function Collapse(data) {
  
//   return (
//     <div>
      
//     </div>
//   );
// }

const Collapse = (props) => {  
    //collapse fermé
    const [isOpen, setIsOpen] = useState(false); /*déclaration d'une nouvelle variable d’état en appelant le Hook useState,renvoie une paire de valeurs que nous pouvons nommer à notre guise, useState déclare une « variable d’état » (appelé open), Le second élément renvoyé est une fonction. Elle nous permet de modifier la variable open, appelée setOpen.*/
  
    //  collapse ouvert (toggle)
    const toggle = () => {
      setIsOpen(!isOpen);
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

/* function Cart({ cart, updateCart }) {
    const monsteraPrice = 8
    const [isOpen, setIsOpen] = useState(true)

    return isOpen ? (
        <div className='lmj-cart'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            <h2>Panier</h2>
            <h3>Total : {monsteraPrice * cart}€</h3>
            <button onClick={() => updateCart(0)}>Vider le panier</button>
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    )
}

export default Cart */

/*  <i className="fa-solid fa-chevron-up"></i>*/
/*  <i className="fa-solid fa-chevron-down"></i> */
