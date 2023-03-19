import React, { component, useEffect, useState } from 'react';

import Header from "../Header";
import Banner from "../Banner";
import Card from "../Card";
import logements from "../../data/logements.json";
import footer from "../Footer";
import styles from "./Home.css";





function Home() {
    /*console.log(logements);*/
    // const logement = [
    //     {
    //         titre:'abc',
    //         id:1
    //     },
    //     {
    //         titre:'bcd',
    //         id:2
    //     }
    // ]
    return (
    <>
    <Header/>
    <Banner/>
    {/* <h1>
        Home 
    </h1> */}
    {/* mettre les div avec class = */ }

 
            
    {/* <Card titre="xyz"></Card> */}
    <div className='tous-appartements' >  
    {
        logements.map(loc=><Card 
        key={loc.id}
        image={loc.cover}
        title={loc.title}></Card>) /* pour déplier le tableau logement*/
    }
     </div>
    </>
    );
  }
  
  export default Home;