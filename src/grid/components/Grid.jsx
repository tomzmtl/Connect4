import React, { PropTypes } from 'react';
import times from 'lodash.times';
import Tile from '../containers/TileContainer';
import { TILE_SIZE } from '../../core/config';
import '../scss/grid.scss';


const renderTiles = (width, height) => {
  const count = width * height;
  return times(count, index => (<Tile index={index} key={index} />));
};


const Grid = ({ width, height }) => (
  <div className="grid" style={{ width: TILE_SIZE * width }}>
    {renderTiles(width, height)}
  </div>
);


Grid.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};


export default Grid;
