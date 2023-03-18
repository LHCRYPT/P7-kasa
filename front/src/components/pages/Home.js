import React, { component, useEffect, useState } from 'react';

import Header from "../Header";
import Banner from "../Banner";
import Card from "../Card";

/*import PageLogement from "./components/pages/PageLogement";*/




function Home() {
    const logement = [
        {
            titre:'abc',
            id:1
        },
        {
            titre:'bcd',
            id:2
        }
    ]
    return (
    <>
    <Header/>
    <Banner/>
    <h1>
        Home 
    </h1>
    {/* mettre les div avec class = */ }
    {/* <Card titre="xyz"></Card> */}
    {
        logement.map(loc=><Card titre={loc.titre}></Card>) /* pour déplier le tableau logement*/
    }
    </>
    );
  }
  
  export default Home;