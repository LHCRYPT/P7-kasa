import {useParams} from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import Etoiles from "../components/Etoiles";
import logements from "../assets/data/logements.json";
import styles from './Logement.module.css'

      function PageLogement() {
       
        const {id} =useParams();
        let rating=0;
    
        let tableau=[];
         for (let l of logements){
              if (l.id==id){
                tableau= l.pictures; /* pour que les photos apparaissement*/
                rating=l.rating; /* pour que les étoiles apparaissement*/
                              
           }
         }
          
  
        return (
          <> 
    <Header /> 
    <Etoile rating={rating} /> 
    {/* <Carousel />  */}
 



    <Carousel title="abc" pictures={tableau}  /> 

           
      <header className="header">
             
         <nav className="headerLink">
            <div>
            <Link to={`/`}><h1 className="Accueil">Accueil</h1></Link>
        </div>
        <div>
          <Link to={`/About`}><h1 className="APropos">A Propos</h1></Link>
            </div>
          </nav>
        </header> 
        
 
        
        <Footer />
        </> 
        );
        }
        
        export default PageLogement;