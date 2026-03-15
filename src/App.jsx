import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Library from './components/Library';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">MENTE<span>ESTRATEGICA PRO</span></div>
          <div className="nav-links">
            <a href="#">Inicio</a>
            <a href="#catalog">Catálogo</a>
            <a href="#newsletter">Contacto</a>
            <a href="#newsletter" className="btn btn-primary nav-btn">Suscribirse</a>
          </div>
        </div>
      </nav>
      
      <main>
        <Hero />
        <Library />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
