import React, { component, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
/*import './components/pages/Error.css';    faire css*/

function Error() {
    return (
      <div className="erreur">
        <h1 className="nombre">404</h1>
        <p className="texte"> Oups ! La page que vous demandez n'existe pas. </p>
        <Link to="/" className="retourAccueil">
          Retourner sur la page d'accueil
        </Link>
      </div>
    );
  }
  
  export default Error;

/* <Route path="*" element={<Notfound />} />
ou return {lodging ? <div> ..... </div> : <NotFound />}*/

