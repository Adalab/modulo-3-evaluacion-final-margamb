import React from 'react';

const CharacterCard = (props) => {
  console.log('characterCard', props);
  return (
    <div>
      <img
        className="img"
        src={props.image}
        alt={props.name}
        title={props.name}
      />
      <h4>{props.name}</h4>
      <p>{props.species}</p>
    </div>
  );
};

export default CharacterCard;
