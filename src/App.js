import React from 'react';
import './App.scss';

import Filters from './components/Filters';
import SearchBar from './components/searchBar/SearchBar';

function App() {
  return (
    <div className="app">
      <Filters></Filters>
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;
