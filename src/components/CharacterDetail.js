import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  //console.log('detail', props);
  return (
    <>
      <div>
        <img
          className="img"
          src={props.image}
          alt={props.name}
          title={props.name}
        />
        <h4>{props.name}</h4>
        <p>Species: {props.species}</p>
        <p>Origin: {props.origin.name}</p>
        <p>Status: {props.status}</p>
        <p>{props.episode.id}</p>
      </div>
      <Link to="/">Volver</Link>
    </>
  );
};

export default CharacterDetail;
