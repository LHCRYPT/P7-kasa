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
          <Link to={`/`}><p className="Accueil">Accueil</p></Link>
        </div>
        <div>
          <Link to={`/About`}><p className="APropos">A Propos</p></Link>
        </div>
      </nav>
    </header>
        );
    }
    
    export default Header;
