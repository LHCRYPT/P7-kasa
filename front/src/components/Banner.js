import React, { component, useEffect, useState } from 'react';
import imageBanner from "../imageBanner.png"; /* est ce que c'est bon ?*/


import styles from './Banner.css';

function Banner() { //mettre la bannière accueil
    return (
    <> 

<img className="imageBanner" src={imageBanner} alt="montagne surplombant la mer" />

  <div className="texteBanner"> <p className="Chez"> Chez vous, partout et ailleurs</p> </div>
       </>  );
}

export default Banner;