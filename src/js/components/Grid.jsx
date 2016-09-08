import React, { PropTypes } from 'react';
import times from 'lodash.times';
import Cell from '../containers/CellContainer';


const Grid = ({ grid }) => (
  <div className="grid" style={{ width: (50 + 1) * grid.width }}>
    {times(grid.width * grid.height, (index) => (<Cell index={index} key={index} />))}
  </div>
);


Grid.propTypes = {
  grid: PropTypes.object.isRequired,
};


export default Grid;
