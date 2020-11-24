import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const CharacterList = (props) => {
  //console.log('characters', props.characters);
  return (
    <ul>
      {props.characters.map((character) => (
        <li key={character.id}>
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
