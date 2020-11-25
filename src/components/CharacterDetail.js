import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterDetail.scss';
import PropTypes from 'prop-types';

const CharacterDetail = (props) => {
  //console.log('detail', props);
  return (
    <div className="CharacterCardDetail">
      <div className="CharacterCardDetail__row">
        <img
          className="CharacterCardDetail__img"
          src={props.image}
          alt={props.name}
          title={props.name}
        />
        <div className="CharacterCardDetail__row--detail">
          <h4 className="CharacterCardDetail__name">{props.name}</h4>
          <p>Species: {props.species === 'Human' ? '👶' : '🛸'}</p>
          <p>Origin: {props.origin.name}</p>
          <p>Status: {props.status === 'Dead' ? '☠️' : 'Alive'}</p>
          <p>Episodes: {props.episode.length}</p>
        </div>
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

CharacterDetail.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
  origin: PropTypes.shape({
    name: PropTypes.string,
  }),
  status: PropTypes.string,
  episode: PropTypes.arrayOf(PropTypes.string),
};
