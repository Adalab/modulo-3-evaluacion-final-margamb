import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = (props) => {
  //console.log('characterCard', props);
  return (
    <div>
      <img
        className="charactersUl__li--img"
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

CharacterCard.protoTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
};
