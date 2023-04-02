import React, { component, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Logo from "../logo-kasa.svg";

import styles from "./Header.css";


function Header() {
    return (
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
        );
    }
    
    export default Header;
