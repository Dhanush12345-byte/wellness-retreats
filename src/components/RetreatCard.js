import React from 'react';

const RetreatCard = ({ retreat }) => (
  <div className="retreat-card">
    <img src={retreat.image} alt={retreat.title} />
    <h2>{retreat.title}</h2>
    <p>{retreat.description}</p>
    <p>{retreat.date}</p>
    <p>{retreat.location}</p>
    <p>${retreat.price}</p>
  </div>
);

export default RetreatCard;
