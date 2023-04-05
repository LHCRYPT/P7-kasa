import React, { component, useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import Error from "./components/pages/Error";
import About from "./components/pages/About";
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import PageLogement from './components/pages/PageLogement';



const router = createBrowserRouter([
    {path:"/" ,element:<Home />},
    {path:"/about" ,element:<About />},
    {path:"/logement/:id",element:<PageLogement />},
    {path:"*",element:<Error />}
]);
function App() {
 
    return (
        
    <RouterProvider router={router}/>
    
     );
}




export default App;
