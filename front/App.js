import React, { component, useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
/*import Error from "./components/pages/Error";*/
import About from "./components/pages/About";
/*import PageLogement from "./components/pages/PageLogement";*/
/*import Header from "./components/Header";
import Footer from "./components/Footer";*/

function App() {

  return React.createElement(
    'div',
    { className: 'App' },
    React.createElement(
      Routes,
      null,
      React.createElement(Route, { path: '/', element: React.createElement(Home, null) }),
      React.createElement(Route, { path: '/About', element: React.createElement(About, null) })
    )
  );
}

export default App;