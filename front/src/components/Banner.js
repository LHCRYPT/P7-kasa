import React, { component, useEffect, useState } from 'react';
import imageBanner from "../imageBanner.png"; /* est ce que c'est bon ?*/

/*import './components/Banner.css';    faire css*/


function Banner() { //mettre la bannière accueil
    return (
    <> 

<img className="imageBanner" src={imageBanner} alt="imag montagne surplombant la mer" />

  <div className="texteBanner"> <p> Chez vous, partout et ailleurs</p> </div>
       </>  );
}

export default Banner;