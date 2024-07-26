import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import RetreatList from './components/RetreatList';
import Filter from './components/Filter';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [retreats, setRetreats] = useState([]);
  const [filteredRetreats, setFilteredRetreats] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState({ date: '', type: '' });
  const [page, setPage] = useState(1);
  const limit = 5;

  useEffect(() => {
    fetchRetreats();
  }, [filter, searchQuery, page]);

  const fetchRetreats = async () => {
    try {
      let url = `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${page}&limit=${limit}`;
      if (filter.date) url += `&date=${filter.date}`;
      if (filter.type) url += `&type=${filter.type}`;
      if (searchQuery) url += `&search=${searchQuery}`;
      const response = await axios.get(url);
      setRetreats(response.data);
    } catch (error) {
      console.error('Error fetching retreats:', error);
    }
  };

  return (
    <div className="App">
      <Header />
      <SearchBar setSearchQuery={setSearchQuery} />
      <Filter setFilter={setFilter} />
      <RetreatList retreats={retreats} />
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default App;
