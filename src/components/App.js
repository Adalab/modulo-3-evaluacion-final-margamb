import React, { useState, useEffect } from 'react';
import './App.scss';
import api from './services/api';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  // state
  const [characters, setCharacters] = useState([]); //array vacio
  const [filterText, setFilterText] = useState(''); //str vacio return true

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

  const renderCharacterDetail = (props) => {
    const routeCharacterId = parseInt(props.match.params.id);
    const character = characters.find(
      (character) => character.id === routeCharacterId
    );
    console.log('renderCharacterDetail', character);
    if (character) {
      return (
        <div>
          <CharacterDetail {...character} />
        </div>
      );
    } else {
      return <div>Mr. Poopy is loading</div>;
    }
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Filters handleFilter={handleFilter} />
          <CharacterList characters={filteredCharactes} />
        </Route>
        <Route path="/detail/:id" component={renderCharacterDetail} />
      </Switch>
    </div>
  );
};

export default App;
