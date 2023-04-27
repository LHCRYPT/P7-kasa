import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import textes from "../assets/data/about.json";
import image from "../assets/img/banner/banner-about.jpg";


import Collapse from "../Collapse";

function About() {
    return (
        <> 

        <img className="imageBannerBleue" src={imageBannerBleue} alt="rivière entre 2 montagnes" />
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
    
    <Collapse titre= "Fiabilité" text=" Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes. " 
     />
    <Collapse titre= "Respect" text=" La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme. " 
     />
     <Collapse titre= "Service" text=" Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question. " 
     />
     <Collapse titre= "Sécurité" text=" La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.  " 
     />
   
  

      <Footer />
    
    </>  );
    }
    
    export default About;


  