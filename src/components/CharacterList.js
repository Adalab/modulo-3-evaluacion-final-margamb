import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  console.log('characters', props.characters);
  return (
    <ul>
      {props.characters.map((character, id) => (
        <li key={character.id}>
          <CharacterCard {...character} />
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
