import React, { component, useEffect, useState } from 'react';

import Logo from "../logoFooter.png";

/*import "../.css"; mettre le lien vers le css*/

function Footer() {
    return (
            <footer className="footer">
      <img src={Logo} alt="Logo Kasa" />
       <p> © 2020 Kasa. All rights reserved</p>
      
    </footer>

        );
    }
    
    export default Footer;

    
    