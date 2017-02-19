import React, { PropTypes } from 'react';
import times from 'lodash.times';
import classnames from 'classnames';
import Tile from '../containers/TileContainer';
import GridHeader from './GridHeader';
import { TILE_SIZE } from '../../core/config';


const renderTiles = (width, height) => {
  const count = width * height;
  return times(count, index => (<Tile index={index} key={index} />));
};


const Grid = ({ game, grid, ui }) => {
  const { locked } = game;
  const { height, width } = grid;
  const { highlight } = ui;

  const headerProps = {
    highlight: highlight.x,
    locked,
    width,
  };
  return (
    <div className="grid-container">
      <GridHeader {...headerProps} />
      <div className="grid" style={{ width: TILE_SIZE * width }}>
        {renderTiles(width, height)}
      </div>
    </div>
  );
};


Grid.propTypes = {
  game: PropTypes.object.isRequired,
  grid: PropTypes.object.isRequired,
  ui: PropTypes.object.isRequired,
};


export default Grid;
