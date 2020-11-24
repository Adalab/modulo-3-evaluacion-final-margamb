import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterDetail.scss';

const CharacterDetail = (props) => {
  //console.log('detail', props);
  return (
    <div className="CharacterCardDetail">
      <div className="">
        <img
          className="CharacterCardDetail__img"
          src={props.image}
          alt={props.name}
          title={props.name}
        />
        <h4 className="CharacterCardDetail__name">{props.name}</h4>
        <p>Species: {props.species === 'Human' ? '👶' : '🛸'}</p>
        <p>Origin: {props.origin.name}</p>
        <p>Status: {props.status === 'Dead' ? '⚰️' : 'Alive'}</p>
        <p>{props.episode.id}</p>
      </div>
      <Link
        to="/"
        style={{ textDecoration: 'none' }}
        className="CharacterCardDetail__back"
      >
        Volver
      </Link>
    </div>
  );
};

export default CharacterDetail;
