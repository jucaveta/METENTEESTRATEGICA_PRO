import React from 'react';
import EbookCard from './EbookCard';
import { ebooks } from '../data/ebooks';
import './Library.css';

const Library = () => {
  return (
    <section id="catalog" className="library">
      <div className="container">
        <div className="section-header">
          <h2>Catálogo de Ebooks</h2>
          <p>Potencia tu crecimiento con nuestras guías exclusivas y sistemas estratégicos.</p>
        </div>
        <div className="library-grid">
          {ebooks.map((ebook, index) => (
            <EbookCard key={index} ebook={ebook} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Library;
