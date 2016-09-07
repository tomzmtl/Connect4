import React, { PropTypes } from 'react';
import times from 'lodash.times';
import Col from './Col';


const Grid = ({ grid }) => (
  <div className="grid">
    {times(grid.width, (x) => (<Col key={x} x={x} rows={grid.height} />))}
  </div>
);


Grid.propTypes = {
  grid: PropTypes.object.isRequired,
};


export default Grid;
