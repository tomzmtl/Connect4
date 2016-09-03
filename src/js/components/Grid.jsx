import React from 'react';
import times from 'lodash.times';
import Col from './Col';


const Grid = ({ data, grid }) => {
  return (
    <div className="grid">
      {times(grid.width, (x) => (<Col key={x} rows={grid.height} />))}
    </div>
  );
};


export default Grid;
