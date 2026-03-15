import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Logic to handle lead capture would go here
    console.log('Lead captured:', formData);
  };

  return (
    <section id="newsletter" className="newsletter">
      <div className="container newsletter-content">
        <div className="newsletter-text">
          <h2>Contenido Exclusivo</h2>
          <p>
            Recibe nuevos ebooks, recursos gratuitos y contenido exclusivo directamente en tu bandeja de entrada. 
            Únete a nuestra comunidad de aprendizaje continuo.
          </p>
        </div>
        
        {!submitted ? (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Tu Nombre" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="input-group">
              <input 
                type="email" 
                placeholder="Tu Correo Electrónico" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              Suscribirme Ahora
            </button>
            <p className="privacy-note">No hacemos spam. Tu privacidad es nuestra prioridad.</p>
          </form>
        ) : (
          <div className="success-message">
            <h3>¡Gracias por unirte!</h3>
            <p>Pronto recibirás nuestras novedades y recursos exclusivos.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
