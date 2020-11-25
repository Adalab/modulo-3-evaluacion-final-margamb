import React from 'react';
import NotCharacterFoundImg from '../images/notCharacterFound.png';
import './NotCharacterFound.scss';

const NotCharacterFound = (props) => {
  return (
    <div className="notCharacterFound">
      <p className="notCharacterFound__text">{`There's no character containing ${props.filterText} `}</p>

      <img
        src={NotCharacterFoundImg}
        alt="not character found"
        title="not character found"
        className="notCharacterFound__img"
      />

      <button
        onClick={props.handleResetSearch}
        className="notCharacterFound__btn"
      >
        Reset Search
      </button>
    </div>
  );
};

export default NotCharacterFound;
