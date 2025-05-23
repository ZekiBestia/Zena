import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MisionVision from './components/MisionVision';
import ValoresPrincipios from './components/ValoresPrincipios';
import Ofrecemos from './components/Ofrecemos';
import HighTickets from './components/HighTickets';
import Fundadores from './components/Fundadores';
import AlianzasEstrategicas from './components/AlianzasEstrategicas';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MisionVision />
      <ValoresPrincipios />
      <Ofrecemos />
      <HighTickets />
      <Fundadores/>
      <AlianzasEstrategicas />
      <Footer />
    </>
  );
}

export default App;
