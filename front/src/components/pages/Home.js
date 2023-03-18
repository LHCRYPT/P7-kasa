import React, { component, useEffect, useState } from 'react';

import Header from "../Header";
import Banner from "../Banner";
import Card from "../Card";

/*import PageLogement from "./components/pages/PageLogement";*/

import styles from "./Home.css";




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

 

        <div className='tousAppartements' >   
            <div className='appartements'>
                <div>
							<div class= "titre">
								appartement
							</div>			

                </div>

				<div>
							<div class= "titre">
								appartement
							</div>
						
                </div>	

				<div>
                        <div class= "titre">
                        appartement
                        </div>
                
                </div>	
            </div>

            <div className='appartements'>
                <div>
							<div class= "titre">
								appartement
							</div>
					

                </div>

				<div>
							<div class= "titre">
								appartement
							</div>
						
						
                </div>	

				<div>
                        <div class= "titre">
                        appartement
                        </div>
                
                     
                </div>	
            </div>
        </div>    

    {/* <Card titre="xyz"></Card> */}
    {
        logement.map(loc=><Card titre={loc.titre}></Card>) /* pour déplier le tableau logement*/
    }
    </>
    );
  }
  
  export default Home;