import React, { useState, useEffect } from 'react';
import './App.scss';
import api from './services/api';
import CharacterList from './CharacterList';

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

  return (
    <div className="App">
      <CharacterList characters={characters} />
    </div>
  );
};

export default App;
