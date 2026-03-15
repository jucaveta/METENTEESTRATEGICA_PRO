import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-info">
          <h3>Librería Virtual</h3>
          <p>Tu biblioteca digital de confianza para adquirir conocimiento experto de forma rápida y sencilla.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Twitter">TW</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="LinkedIn">IN</a>
          </div>
        </div>
        
        <div className="footer-nav">
          <h4>Navegación</h4>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#catalog">Catálogo</a></li>
            <li><a href="#">Autores</a></li>
            <li><a href="#">Novedades</a></li>
          </ul>
        </div>
        
        <div className="footer-legal">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacidad</a></li>
            <li><a href="#">Términos</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Librería Virtual de Ebooks. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
