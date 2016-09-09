import React, { PropTypes } from 'react';
import times from 'lodash.times';
import Cell from '../containers/CellContainer';
import '../scss/grid.scss';


const renderCells = (width, height) => {
  const count = width * height;
  return times(count, (index) => (<Cell index={index} key={index} />));
};


const Grid = ({ width, height, cellSize }) => (
  <div className="grid" style={{ width: cellSize * width }}>
    {renderCells(width, height)}
  </div>
);


Grid.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  cellSize: PropTypes.number.isRequired,
};


export default Grid;
