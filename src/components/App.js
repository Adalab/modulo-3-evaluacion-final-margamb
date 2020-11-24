import React, { useState, useEffect } from 'react';
import './App.scss';
import api from './services/api';
import CharacterList from './CharacterList';
import FIlters from './Filters';

const App = () => {
  // state
  const [characters, setCharacters] = useState([]); //array vacio
  const [filterText, setFilterText] = useState('');

  //api
  useEffect(() => {
    api.getDataFromApi().then((data) => {
      setCharacters(data);
      //console.log(data);
    });
  }, []);

  //event
  const handleFilter = (filterText) => {
    setFilterText(filterText);
  };

  const filteredCharactes = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterText.toLowerCase());
  });

  return (
    <div className="App">
      <FIlters handleFilter={handleFilter} />
      <CharacterList characters={filteredCharactes} />
    </div>
  );
};

export default App;
