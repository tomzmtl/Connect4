import React, { PropTypes } from 'react';


const Cell = ({ x, y }) => (
  <div className="cell">
    {`${x}, ${y}`}
  </div>
);

Cell.propTypes = {
  y: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
};


export default Cell;
