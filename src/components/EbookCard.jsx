import React from 'react';
import './EbookCard.css';

const EbookCard = ({ ebook }) => {
  return (
    <div className="ebook-card">
      <div className="card-top">
        <img src={ebook.image} alt={ebook.title} className="ebook-cover" />
        <div className="platform-badge">{ebook.platform}</div>
      </div>
      <div className="card-body">
        <h3>{ebook.title}</h3>
        <p>{ebook.description}</p>
        <a 
          href={ebook.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary buy-btn"
        >
          Comprar ahora
        </a>
      </div>
    </div>
  );
};

export default EbookCard;
