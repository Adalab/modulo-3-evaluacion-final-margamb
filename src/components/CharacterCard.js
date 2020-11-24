import React from 'react';

const CharacterCard = (props) => {
  //console.log('characterCard', props);
  return (
    <div>
      <img
        className="charactersUl__li--img"
        // className="img"
        src={props.image}
        alt={props.name}
        title={props.name}
      />
      <h4 className="characterName">{props.name}</h4>
      <p className="characterSpecies">
        {props.species === 'Human' ? '👶' : '🛸'}
      </p>
    </div>
  );
};

export default CharacterCard;
// {
//   props.species === 'Human' ? 'H' : 'A';
// }
