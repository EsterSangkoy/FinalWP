import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Details from './pages/Details';
import CovidDetails from './components/CovidDetails';

import './assets/item.css';
// untuk menroute halaman
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/details" element={<Details />}>
        <Route path=":covidId" element={<CovidDetails />} />
      </Route>
    </Routes>
  );
}

export default App;

