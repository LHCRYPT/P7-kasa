import React, { component, useEffect, useState } from 'react';
import imageBanner from "../imageBanner.png"; /* est ce que c'est bon ?*/

/*import './components/Banner.css';    faire css*/


function Banner() { //mettre la bannière accueil
    return (
     /* <div>
     
<img src="src/imageBanner.png" alt="imageBanner" />
</div>
<img className="imageBanner" src={banner} alt="imag montagne surplombant la mer" ></img>*/

  <div className="texteBanner"> <p> Chez vous, partout et ailleurs</p> </div>
        );
}

export default Banner;