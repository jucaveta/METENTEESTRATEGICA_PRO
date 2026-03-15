import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="badge">Nueva Colección 2024</span>
          <h1>Impulsa tu conocimiento con Mente Estratégica Pro</h1>
          <p>
            Accede a una colección curada de los mejores ebooks del mercado. Aprende de expertos y transforma tu carrera profesional hoy mismo con sistemas probados.
          </p>
          <div className="hero-actions">
            <a href="#catalog" className="btn btn-primary">Ver Catálogo</a>
            <a href="#newsletter" className="btn btn-secondary">Unirse a la Comunidad</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-wrapper">
             <div className="main-mockup">
                <div className="screen-content">
                  <div className="mockup-ebook">📘</div>
                </div>
             </div>
             <div className="floating-elements">
                <div className="f-item item-1">⭐</div>
                <div className="f-item item-2">📈</div>
                <div className="f-item item-3">💡</div>
             </div>
          </div>
        </div>
      </div>
      <div className="hero-bg-accent"></div>
    </section>
  );
};

export default Hero;
