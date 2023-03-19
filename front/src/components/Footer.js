import React, { component, useEffect, useState } from 'react';

import Logo from "../logoFooter.png";
import styles from './Footer.css';


function Footer() {
    return (
            <footer className="footer">
      <img className="logo-footer" src={Logo} alt="Logo Kasa" />
       <p className="rights"> © 2020 Kasa. All rights reserved</p>
      
    </footer>

        );
    }
    
    export default Footer;

    
    