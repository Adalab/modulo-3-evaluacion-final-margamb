import React, { useState, useEffect } from 'react';
import './App.scss';
import api from './services/api';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Header from './Header';
import Filters from './Filters';
import Loading from './Loading';
import NotFound from './NotFound';
import NotCharacterFound from './NotCharacterFound';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  // state
  const [characters, setCharacters] = useState([]); //array vacio
  const [filterText, setFilterText] = useState(''); //str vacio return true
  const [isLoading, setIsLoading] = useState(false);

  //api
  useEffect(() => {
    setIsLoading(true); //voy a empezar a cargar
    api.getDataFromApi().then((data) => {
      setCharacters(data);
      setIsLoading(false); //termino de cargar-> false
    });
  }, []);

  //event
  const handleFilter = (filterText) => {
    setFilterText(filterText);
  };

  const handleResetSearch = () => {
    setFilterText('');
  };

  // ordenar por nombre con sort().
  const alphabeticalByName = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterText.toLowerCase());
    })
    .sort(alphabeticalByName);

  // render tarjeta detail
  const renderCharacterDetail = (props) => {
    const routeCharacterId = parseInt(props.match.params.id);
    const character = characters.find(
      (character) => character.id === routeCharacterId
    );

    if (character) {
      return (
        <div>
          <CharacterDetail {...character} />
        </div>
      );
    } else {
      return (
        <div>
          <NotFound routeCharacterId={routeCharacterId} />
        </div>
      );
    }
  };

  return (
    <div className="App">
      <Header />
      {isLoading === true ? (
        <Loading />
      ) : (
        <Switch>
          <Route exact path="/">
            <Filters
              handleFilter={handleFilter}
              filterText={filterText}
              onReset={handleResetSearch}
            />
            {filteredCharacters.length === 0 ? (
              <NotCharacterFound
                filterText={filterText}
                handleResetSearch={handleResetSearch}
              />
            ) : (
              <CharacterList characters={filteredCharacters} />
            )}
          </Route>
          <Route path="/detail/:id" component={renderCharacterDetail} />
        </Switch>
      )}
    </div>
  );
};

export default App;
