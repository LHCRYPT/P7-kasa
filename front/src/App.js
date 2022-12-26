import React, { component, useEffect, useState } from 'react';
import './App.css';
import VignetteLocation from './components/VignetteLocation';
import locations from "./data/logements.json";
import './components/Home';
import './components/Page';

function App() {
 
    return (
      
        <div className="App"> 
                <nav>
                 <a href="/">Home</a>
                 <a href="/page">Page</a>
                </nav>
    
                <div>
        <Route path="/page">
        </Page>
        </Route>
        <Route path="/">
        </Home>
        </Route>


                </div>
        </div>
        );
}


export default App;