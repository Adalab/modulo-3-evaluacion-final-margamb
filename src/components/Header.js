import React from 'react';
import Logo from '../images/Logo.png';

const Header = (props) => {
  return (
    <div className="headerContainer">
      <img
        className="headerContainer__img"
        src={Logo}
        alt="Logo"
        title="Logo"
      />
    </div>
  );
};

export default Header;
