import React, { PropTypes } from 'react';
import times from 'lodash.times';
import Tile from '../containers/TileContainer';
import '../scss/grid.scss';


const renderTiles = (width, height) => {
  const count = width * height;
  return times(count, index => (<Tile index={index} key={index} />));
};


const Grid = ({ width, height, tileSize }) => (
  <div className="grid" style={{ width: tileSize * width }}>
    {renderTiles(width, height)}
  </div>
);


Grid.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  tileSize: PropTypes.number.isRequired,
};


export default Grid;
