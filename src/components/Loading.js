import React from 'react';
import MrPoopy from '../images/MrPoopy.png';
import './Loading.scss';

const Loading = (props) => {
  return (
    <div className="mrPoopySpinner">
      <img className="mrPoopySpinner__img" src={MrPoopy} alt="loading" />
    </div>
  );
};

export default Loading;
