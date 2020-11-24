import React from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';

const Filters = (props) => {
  const handleFilter = (ev) => {
    props.handleFilter(ev.target.value);
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit} className="form">
      <input
        className="form__input"
        type="text"
        id="name"
        onChange={handleFilter}
        placeholder="Example: Poopy"
        value={props.filterText}
      />
      <p onClick={props.onReset} className="deleteBtn">
        X
      </p>
    </form>
  );
};

export default Filters;

Filters.propTypes = {
  input: PropTypes.string,
};
