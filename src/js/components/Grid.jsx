import React, { PropTypes } from 'react';
import { CELL_SIZE } from '../config';
import times from 'lodash.times';
import Cell from '../containers/CellContainer';


const Grid = ({ grid }) => (
  <div className="grid" style={{ width: CELL_SIZE * grid.width }}>
    {times(grid.width * grid.height, (index) => (<Cell index={index} key={index} />))}
  </div>
);


Grid.propTypes = {
  grid: PropTypes.object.isRequired,
};


export default Grid;
