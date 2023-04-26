import React, { component, useEffect, useState } from 'react';
import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";
import logements from "../data/logements.json";
import Footer from "../components/Footer";
import styles from "./Home.css";

function Home() {
  
    return (
    <>
    <Header/>
    <Banner/>
    <Footer/>
  
    <div className='tous-appartements' >  
    {
        logements.map(loc=><Card 
        key={loc.id} /* Les clés aident React à identifier quels éléments d’une liste ont changé, ont été ajoutés ou supprimés. on utilise l’ID de notre donnée comme clé car identifie de façon unique un élément d’une liste  */
        id={loc.id} 
        image={loc.cover}
        title={loc.title}></Card>) /* pour déplier le tableau logement*/
    }
     </div>
    </>
    );
  }
  
  export default Home;