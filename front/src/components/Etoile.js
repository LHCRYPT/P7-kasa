import React, { component, useEffect, useState } from 'react'; /* importation de Hook useState depuis React. Il me permet d’utiliser un état local dans une fonction composant*/
import etoileBlanche from "../etoileBlanche.png";
import etoileRouge from "../etoileRouge.png";
import styles from "./Etoile.css";


const Rating = ({ rating }) => {
    const etoiles = [1, 2, 3, 4, 5];
    
      return (
        <div className="toile">
          {etoiles.map((etoile) =>
            rating >= etoile ? (
              <img
                key={etoile.toString()}
                className="etoileIcone"
                src={etoileRouge} alt="étoile rouge"
              />
            ) : (
              <img
                key={etoile.toString()}
                className="etoileIcone"
                src={etoileBlanche} alt="étoile blanche"
              />
            )
          )}
        </div>
      )
  }
  export default Rating;