import React, { component, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Logo from "../logo-kasa.svg";

import styles from "./Header.css";
/*import "../.css"; mettre le lien vers le css*/

function Header() {
    return (
 <header className="header">
     <img className="logoHeader" src={Logo} alt="Logo Kasa" ></img>
  
     
     <nav className="headerLink">
        <div>
          <Link to={`/`}>Accueil</Link>
        </div>
        <div>
          <Link to={`/About`}>A Propos</Link>
        </div>
      </nav>
    </header>
        );
    }
    
    export default Header;
