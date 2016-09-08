import React, { PropTypes } from 'react';
import times from 'lodash.times';
import Cell from '../containers/CellContainer';
import '../scss/grid.scss';


const renderCells = (width, height) => {
  const count = width * height;
  return times(count, (index) => (<Cell index={index} key={index} />));
};


const Grid = ({ grid }) => (
  <div className="grid" style={{ width: grid.cellSize * grid.width }}>
    {renderCells(grid.width, grid.height)}
  </div>
);


Grid.propTypes = {
  grid: PropTypes.object.isRequired,
};


export default Grid;
