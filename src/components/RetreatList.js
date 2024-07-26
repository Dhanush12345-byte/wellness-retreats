import React from 'react';
import RetreatCard from './RetreatCard';

const RetreatList = ({ retreats }) => (
  <div className="retreat-list">
    {retreats.map(retreat => (
      <RetreatCard key={retreat.id} retreat={retreat} />
    ))}
  </div>
);

export default RetreatList;
