import "./Error.css";
import React, { component, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import Logo from "../../logo-kasa.svg";
import Header from "../Header";



function Error() {
    return (
      <> 
       <header className="header">
<img className="logoHeader" src={Logo} alt="Logo Kasa" ></img>
  
     
  <nav className="headerLink">
     <div>
     <Link to={`/`}><h1 className="Accueil">Accueil</h1></Link>
        </div>
        <div>
          <Link to={`/About`}><h1 className="APropos">A Propos</h1></Link>
     </div>
   </nav>
    </header> 


      <div className="erreur">
        <h1 className="nombre">404</h1>
        <p className="texte"> Oups ! La page que vous demandez n'existe pas. </p>
        <Link to="/" className="retourAccueil">
          Retourner sur la page d'accueil
        </Link>
      </div>
      </>   );
  }
  
  export default Error;

/* <Route path="*" element={<Notfound />} />
ou return {lodging ? <div> ..... </div> : <NotFound />}*/