import React, { useState } from 'react';

const Filter = ({ setFilter }) => {
  const [date, setDate] = useState('');
  const [type, setType] = useState('');

  const handleFilterChange = () => {
    setFilter({ date, type });
  };

  return (
    <div className="filter">
      <label>
        Date:
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      </label>
      <label>
        Type:
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="">All</option>
          <option value="Yoga">Yoga</option>
          <option value="Meditation">Meditation</option>
          <option value="Detox">Detox</option>
        </select>
      </label>
      <button onClick={handleFilterChange}>Apply</button>
    </div>
  );
};

export default Filter;
