import React from 'react';

const Filters = (props) => {
  const handleFilter = (ev) => {
    props.handleFilter(ev.target.value);
  };

  return (
    <form>
      <input
        type="text"
        id="name"
        onChange={handleFilter}
        placeholder="Example: Poopy"
      />
    </form>
  );
};

export default Filters;
