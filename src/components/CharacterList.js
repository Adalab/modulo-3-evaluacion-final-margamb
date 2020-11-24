import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const CharacterList = (props) => {
  //console.log('characters', props.characters);
  return (
    <ul className="charactersUl">
      {props.characters.map((character) => (
        <li key={character.id} className="charactersUl__li">
          <Link
            to={`/detail/${character.id}`}
            style={{ textDecoration: 'none' }}
          >
            <CharacterCard {...character} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
