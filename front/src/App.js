import React, { component, useEffect, useState } from 'react';
import './App.css';
import VignetteLocation from './components/VignetteLocation';
import locations from "./data/logements.json";
import Home from './pages/Home';
import Error from "./pages/Error";
import About from "./pages/About";
import PageLogement from "./pages/PageLogement";
import Header from "./pages/Header";
import Footer from "./pages/Footer";


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