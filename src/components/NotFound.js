import React from 'react';
import NotFoundImg from '../images/notFoundImg.png';
import './NotFound.scss';
import { Link } from 'react-router-dom';

const NotFound = (props) => {
  //console.log('notfound', props);
  return (
    <div className="notFound">
      <p className="notFound__text">{`There's no character with id: ${props.routeCharacterId}`}</p>
      <img
        src={NotFoundImg}
        alt="not found"
        title="not found"
        className="notFound__img"
      />
      <Link to="/" style={{ textDecoration: 'none' }} className="notFound__btn">
        Back
      </Link>
    </div>
  );
};

export default NotFound;
