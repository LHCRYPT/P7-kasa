import { Link } from 'react-router-dom'
import React, { component, useEffect, useState } from 'react';
import Logo from "../logo-kasa.svg";

/*import "../.css"; mettre le lien vers le css*/

function Header() {
  
    return (
     
 <header className="header">
   <h1> 123</h1>
      <img className="logoHeader" src={Logo} alt="Logo Kasa" ></img>
      <nav className="headerLink">
        <div>
          <Link to={`/`}>Accueil</Link>
        </div>
        <div>
          <Link to={`/About`}>A propos</Link>
        </div>
      </nav>
    </header>
        );
    }
    
    export default Header;

    